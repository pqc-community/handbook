// Date formatting rules (style-guide.md §2 and the Standards page pattern):
// - prose dates are written day–month–year (5 November 2026); ISO 8601 belongs only
//   in front matter, code and tables;
// - full ISO dates in a Standards timeline use non-breaking hyphens (&#8209;) so
//   they never wrap inside the narrow Date column.
import fs from 'node:fs';
import path from 'node:path';
import {classifyLines, pipeCells, relativePath, walkMarkdown} from '../lib/markdown.mjs';

const ISO_DATE = /\b((?:19|20)\d\d)-(\d\d)-(\d\d)\b/g;
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Prose lines that show the ISO format on purpose. Each entry names the file and a
// phrase from the line, so an exception cannot spread to other lines.
export const ISO_FORMAT_EXAMPLES = [
  {file: 'docs/resources/records/index.md', phrase: 'Write dates in record tables as ISO 8601'},
];

export function proseDate(iso) {
  const [year, month, day] = iso.split('-');
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

// Every ISO date on a prose line: {line, iso, text}.
export function findProseIsoDates(text) {
  return classifyLines(text)
    .filter((line) => line.kind === 'prose')
    .flatMap((line) => [...line.text.matchAll(ISO_DATE)].map((match) => (
      {line: line.number, iso: match[0], text: line.text}
    )));
}

export function findProseDateViolations(rootDir, exceptions = ISO_FORMAT_EXAMPLES) {
  const docsDir = path.join(rootDir, 'docs');
  const violations = [];
  for (const file of walkMarkdown(docsDir)) {
    const rel = relativePath(rootDir, file);
    for (const hit of findProseIsoDates(fs.readFileSync(file, 'utf8'))) {
      const excepted = exceptions.some((e) => e.file === rel && hit.text.includes(e.phrase));
      if (!excepted) violations.push(`${rel}:${hit.line}: ${hit.iso} → write "${proseDate(hit.iso)}"`);
    }
  }
  return violations;
}

// Standards pages: a Date cell in the timeline that holds a full ISO date must use
// non-breaking hyphens. Index pages have no timeline and are skipped.
export function findTimelineDateViolations(standardsDir) {
  const violations = [];
  for (const file of walkMarkdown(standardsDir, {excludeIndex: true})) {
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    const heading = lines.findIndex((line) => line.trim() === '## Timeline of key dates');
    if (heading < 0) continue;
    const wraps = lines.slice(heading + 1).some((line) => {
      const cells = pipeCells(line);
      return cells.length === 2 &&
        /\b\d{4}-\d{2}(?:-\d{2})?\b/.test(cells[0]) &&
        !/&#8209;|‑/.test(cells[0]);
    });
    if (wraps) violations.push(`${relativePath(standardsDir, file)}: full ISO dates must use nonbreaking hyphens`);
  }
  return violations;
}
