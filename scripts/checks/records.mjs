// Migration record rules: each record page links an existing blank CSV, the CSV and
// the page's tables list the same fields, the filled examples appear in Protect this
// first, and the records zip matches the CSVs.
import fs from 'node:fs';
import path from 'node:path';
import {DOWNLOADS_DIR, ZIP_NAME, buildZip, listCsvFiles} from '../records-zip.mjs';
import {pipeCells, section, tableLines} from '../lib/markdown.mjs';

export const RECORDS_DIR = 'docs/templates/records';
export const WORKED_EXAMPLE = 'docs/templates/examples/protect-this-first.md';
const MIN_RECORD_PAGES = 5;

const isDivider = (line) => /^\|\s*-/.test(line);

// Record pages are the ones that offer a blank CSV download.
export function recordPages(root = '.') {
  const dir = path.join(root, RECORDS_DIR);
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => ({name, text: fs.readFileSync(path.join(dir, name), 'utf8')}))
    .map((page) => ({...page, csv: page.text.match(/\(\/downloads\/([a-z-]+\.csv)\)/)?.[1]}))
    .filter((page) => page.csv);
}

const csvPath = (root, csv) => path.join(root, DOWNLOADS_DIR, csv);

export function findCsvLinkViolations(root = '.') {
  const pages = recordPages(root);
  const violations = [];
  if (pages.length < MIN_RECORD_PAGES) {
    violations.push(`expected at least five record pages, found ${pages.length}`);
  }
  for (const page of pages) {
    if (!fs.existsSync(csvPath(root, page.csv))) violations.push(`${page.name}: missing ${page.csv}`);
  }
  return violations;
}

// Compares each CSV with the page's Minimum fields, blank template and filled rows.
// Pages whose CSV is missing are reported by findCsvLinkViolations instead.
export function findCsvFieldViolations(root = '.') {
  const violations = [];
  for (const page of recordPages(root)) {
    if (!fs.existsSync(csvPath(root, page.csv))) continue;
    const lines = fs.readFileSync(csvPath(root, page.csv), 'utf8').trimEnd().split('\n');
    const minimum = section(page.text, 'Minimum fields').trim().split('\n')[0].split(', ');
    const blank = tableLines(section(page.text, 'Blank template'));
    if (lines[0] === 'field,entry') {
      // Documents that run down the page: one CSV line per field.
      const fields = lines.slice(1).map((line) => line.replace(/,$/, ''));
      if (!sameList(fields, minimum)) violations.push(`${page.name}: CSV fields differ from Minimum fields`);
      const tableFields = blank.slice(2).map((line) => pipeCells(line)[0]);
      if (!sameList(tableFields, minimum)) violations.push(`${page.name}: blank template differs from Minimum fields`);
    } else {
      const header = lines[0].split(',');
      if (lines.length !== 1) violations.push(`${page.name}: CSV should hold only a header row`);
      if (!sameList(header, minimum)) violations.push(`${page.name}: CSV header differs from Minimum fields`);
      if (!sameList(pipeCells(blank[0] ?? ''), minimum)) violations.push(`${page.name}: blank template differs from Minimum fields`);
      for (const line of tableLines(section(page.text, 'Filled example'))) {
        if (isDivider(line)) continue;
        const count = pipeCells(line).length;
        if (count !== header.length) violations.push(`${page.name}: filled row has ${count} cells`);
      }
    }
  }
  return violations;
}

export function findWorkedExampleViolations(root = '.') {
  const worked = fs.readFileSync(path.join(root, WORKED_EXAMPLE), 'utf8');
  const violations = [];
  for (const page of recordPages(root)) {
    for (const line of tableLines(section(page.text, 'Filled example'))) {
      if (isDivider(line)) continue;
      if (!worked.includes(line)) violations.push(`${page.name}: row not in Protect this first: ${line.slice(0, 90)}`);
    }
  }
  return violations;
}

export function findRecordsZipViolations(root = '.') {
  const committed = fs.readFileSync(path.join(root, DOWNLOADS_DIR, ZIP_NAME));
  return committed.equals(buildZip(listCsvFiles(root)))
    ? []
    : [`${ZIP_NAME} is out of date: run npm run records-zip`];
}

function sameList(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}
