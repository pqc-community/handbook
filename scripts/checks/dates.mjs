// Date rules (style-guide.md §2 and §5, and the Standards page pattern):
// - doc pages do not say when the handbook checked a source ("checked November 24, 2026",
//   "Status as checked on …", "accessed …"): the monthly review in periodic-review.md does that;
// - dates in doc pages and news posts are written month–day–year (November 5, 2026), never day–month–year;
//   in prose, ISO 8601 belongs only
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
  {file: 'docs/templates/records/index.md', phrase: 'Write dates in record tables as ISO 8601'},
];

export function proseDate(iso) {
  const [year, month, day] = iso.split('-');
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
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
  const violations = [];
  const files = ['docs', 'blog'].flatMap((dir) => walkMarkdown(path.join(rootDir, dir)));
  for (const file of files) {
    const rel = relativePath(rootDir, file);
    for (const hit of findProseIsoDates(fs.readFileSync(file, 'utf8'))) {
      const excepted = exceptions.some((e) => e.file === rel && hit.text.includes(e.phrase));
      if (!excepted) violations.push(`${rel}:${hit.line}: ${hit.iso} → write "${proseDate(hit.iso)}"`);
    }
  }
  return violations;
}

// Day–month–year dates ("5 November 2026", "5–7 November") anywhere outside code blocks,
// front matter included. A source's own title that dates itself that way keeps it; each
// exception names the file and a phrase from the line, as ISO_FORMAT_EXAMPLES does.
const EU_RECOMMENDATION = 'Commission Recommendation (EU) 2024/1101 of 11 April 2024';
export const DAY_MONTH_EXAMPLES = [
  {file: 'blog/2024/eu-pqc-recommendation.md', phrase: EU_RECOMMENDATION},
  {file: 'blog/2025/eu-nis-pqc-roadmap.md', phrase: EU_RECOMMENDATION},
  {file: 'docs/standards/migration-guides/eu-nis-roadmap.md', phrase: EU_RECOMMENDATION},
];
const DAY_MONTH = new RegExp(`\\b\\d{1,2}(?:–\\d{1,2})? (?:${MONTHS.join('|')})\\b`, 'g');

export function findDayMonthDates(text) {
  return classifyLines(text)
    .filter((line) => line.kind !== 'fence')
    .flatMap((line) => [...line.text.replace(/https?:\/\/\S+/g, '').matchAll(DAY_MONTH)].map((match) => (
      {line: line.number, date: match[0], text: line.text}
    )));
}

export function findDayMonthViolations(rootDir, exceptions = DAY_MONTH_EXAMPLES) {
  const violations = [];
  const files = ['docs', 'blog'].flatMap((dir) => walkMarkdown(path.join(rootDir, dir)));
  for (const file of files) {
    const rel = relativePath(rootDir, file);
    for (const hit of findDayMonthDates(fs.readFileSync(file, 'utf8'))) {
      const excepted = exceptions.some((e) => e.file === rel && hit.text.includes(e.phrase));
      if (!excepted) violations.push(`${rel}:${hit.line}: "${hit.date}" → write the month first ("November 5, 2026")`);
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

// Doc pages: a phrase saying when the handbook checked, accessed or verified a source, or a
// status line, heading or table heading pinned to a date ("Status (November 24, 2026)",
// "## Status on November 24, 2026", "where each stood on November 24, 2026"). Dates that are
// facts about a document (published, revised, reviewed, "as of" in the document's own dating)
// are fine. The worked examples and records are excepted: their dates are fictional events,
// such as the date a record says something was checked.
const MONTH = `(?:${MONTHS.join('|')})`;
const ANY_DATE = `(?:${MONTH}\\s+\\d{1,2},\\s*\\d{4}|\\d{1,2}\\s+${MONTH}\\s+\\d{4}|${MONTH}\\s+\\d{4}|\\d{4}-\\d{2}-\\d{2})`;
const CHECKED_DATE_PATTERNS = [
  new RegExp(`\\b(?:checked|accessed|verified)\\b[^.;|]{0,40}?\\b(?:on|in|at|:)?\\s*${ANY_DATE}`, 'i'),
  new RegExp(`\\bstatus\\s*(?:\\(|on\\s+|as\\s+(?:of|at)\\s+|at\\s+)\\s*${ANY_DATE}`, 'i'),
  new RegExp(`\\bstood\\s+(?:on|at|in)\\s+${ANY_DATE}`, 'i'),
];
export const CHECKED_DATE_EXCEPTED_DIRS = ['docs/templates/examples/', 'docs/templates/records/'];

export function findCheckedDates(text) {
  return classifyLines(text)
    .filter((line) => line.kind !== 'fence' && line.kind !== 'front-matter')
    .filter((line) => CHECKED_DATE_PATTERNS.some((pattern) => pattern.test(line.text)))
    .map((line) => ({line: line.number, text: line.text}));
}

export function findCheckedDateViolations(rootDir) {
  return walkMarkdown(path.join(rootDir, 'docs'))
    .filter((file) => !CHECKED_DATE_EXCEPTED_DIRS.some((dir) => relativePath(rootDir, file).startsWith(dir)))
    .flatMap((file) =>
      findCheckedDates(fs.readFileSync(file, 'utf8')).map(
        (hit) => `${relativePath(rootDir, file)}:${hit.line}: remove the checked date; the monthly review records when sources were checked`,
      ));
}
