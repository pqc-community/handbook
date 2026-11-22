import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// style-guide.md §2: dates in prose are written day–month–year (5 November 2026);
// ISO 8601 (2026-11-10) belongs only in front matter and structured record tables.

const DOCS = 'docs';
const ISO_DATE = /\b((?:19|20)\d\d)-(\d\d)-(\d\d)\b/g;
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Lines that show the ISO format on purpose. Each entry names the file and a
// phrase from the line, so an exemption cannot spread to other lines.
const ALLOWED = [
  {file: 'docs/resources/records/index.md', phrase: 'Write dates in record tables as ISO 8601'},
];

export function proseDate(iso) {
  const [year, month, day] = iso.split('-');
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

// Returns {line, iso} for every ISO date outside front matter, fenced code and table rows.
export function findProseIsoDates(text) {
  const found = [];
  const lines = text.split('\n');
  let inFrontMatter = lines[0] === '---';
  let inFence = false;
  lines.forEach((line, index) => {
    if (index === 0 && inFrontMatter) return;
    if (inFrontMatter) {
      if (line === '---') inFrontMatter = false;
      return;
    }
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return;
    }
    if (inFence || line.trimStart().startsWith('|')) return;
    for (const match of line.matchAll(ISO_DATE)) {
      found.push({line: index + 1, iso: match[0], text: line});
    }
  });
  return found;
}

function markdownFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(full);
    return /\.mdx?$/.test(entry.name) ? [full] : [];
  });
}

test('finds ISO dates in prose but not in front matter, code or tables', () => {
  const sample = [
    '---',
    'last_update: 2026-11-10',
    '---',
    'The review on 2026-11-16 closed two items.',
    '| date | item |',
    '| 2026-11-16 | closed |',
    '```',
    'echo 2026-11-16',
    '```',
    '- Next review: `2027-01-18`.',
  ].join('\n');
  assert.deepEqual(
    findProseIsoDates(sample).map(({line, iso}) => [line, iso]),
    [[4, '2026-11-16'], [10, '2027-01-18']],
  );
});

test('suggests the day–month–year form', () => {
  assert.equal(proseDate('2026-11-16'), '16 November 2026');
  assert.equal(proseDate('2027-03-01'), '1 March 2027');
});

test('prose dates are written day–month–year', () => {
  const problems = [];
  for (const file of markdownFiles(DOCS)) {
    const rel = file.split(path.sep).join('/');
    for (const hit of findProseIsoDates(fs.readFileSync(file, 'utf8'))) {
      const allowed = ALLOWED.some((a) => a.file === rel && hit.text.includes(a.phrase));
      if (!allowed) problems.push(`${rel}:${hit.line}: ${hit.iso} → write "${proseDate(hit.iso)}"`);
    }
  }
  assert.deepEqual(
    problems,
    [],
    `ISO dates in prose (style-guide.md §2; ISO is for front matter and record tables only):\n${problems.join('\n')}`,
  );
});
