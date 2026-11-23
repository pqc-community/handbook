// Situation route rules: every page under docs/routes/, including the overview, links
// Decide whether to act and at least one record page; and every decision-note `route`
// value, wherever a decision-note table appears, is one of the three track names,
// optionally followed by one bracketed qualifier.
import fs from 'node:fs';
import path from 'node:path';
import {classifyLines, isDividerRow, pipeCells, relativePath, walkMarkdown} from '../lib/markdown.mjs';
import {recordPages} from './records.mjs';

export const ROUTES_DIR = 'docs/routes';
export const DECIDE_PATH = '/migration-practices/decide-whether-to-act/';
export const ROUTE_NAMES = ['Vendor-managed software', 'Long-lived confidentiality', 'Hard-to-change systems'];

// A decision-note table is recognised by these header cells.
const DECISION_NOTE_HEADERS = ['A long-lived confidentiality', 'path', 'route'];

// Targets of Markdown links on a page, without any #anchor.
function linkTargets(text) {
  return [...text.matchAll(/\]\(([^)\s]+)\)/g)].map((match) => match[1].split('#')[0]);
}

const linksDecide = (targets) =>
  targets.some((target) => target === DECIDE_PATH || /(^|\/)migration-practices\/decide-whether-to-act(\.md)?\/?$/.test(target));

export function findRoutePageViolations(root = '.') {
  const dir = path.join(root, ROUTES_DIR);
  const pages = walkMarkdown(dir);
  const recordPaths = recordPages(root).map((page) => `/resources/records/${page.name.replace(/\.md$/, '')}/`);
  const violations = [];
  if (!pages.some((file) => path.basename(file) === 'index.md')) violations.push('docs/routes/index.md is missing');
  for (const file of pages) {
    const name = relativePath(root, file);
    const targets = linkTargets(fs.readFileSync(file, 'utf8'));
    if (!linksDecide(targets)) violations.push(`${name}: does not link Decide whether to act (${DECIDE_PATH})`);
    if (!targets.some((target) => recordPaths.includes(target))) violations.push(`${name}: does not link a record page`);
  }
  return violations;
}

const ROUTE_VALUE = new RegExp(`^(${ROUTE_NAMES.join('|')})( \\([^()]+\\))?$`);

export function isRouteValue(value) {
  return ROUTE_VALUE.test(value);
}

// Checks the `route` cell of every row in every decision-note table under docs/.
export function findRouteValueViolations(root = '.') {
  const violations = [];
  for (const file of walkMarkdown(path.join(root, 'docs'))) {
    const lines = classifyLines(fs.readFileSync(file, 'utf8'));
    let routeColumn = -1;
    for (const line of lines) {
      if (line.kind !== 'table') {
        routeColumn = -1;
        continue;
      }
      const cells = pipeCells(line.text);
      if (routeColumn === -1) {
        if (DECISION_NOTE_HEADERS.every((header) => cells.includes(header))) routeColumn = cells.indexOf('route');
        continue;
      }
      if (isDividerRow(line.text)) continue;
      const value = cells[routeColumn] ?? '';
      if (!isRouteValue(value)) {
        violations.push(`${relativePath(root, file)}:${line.number}: route "${value}" is not one of ${ROUTE_NAMES.join(', ')}, with an optional bracketed qualifier`);
      }
    }
  }
  return violations;
}
