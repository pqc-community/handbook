import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

function withRoot(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-standards-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(dir, name);
    fs.mkdirSync(path.dirname(full), {recursive: true});
    fs.writeFileSync(full, body);
  }
  try {
    return run(dir);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
}

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walkMarkdown(full));
    else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      found.push(full);
    }
  }
  return found;
}

function pipeCells(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return [];
  return trimmed.slice(1, -1).split('|').map((cell) => cell.trim());
}

function nextNonEmptyLine(lines, start) {
  for (let index = start; index < lines.length; index += 1) {
    if (lines[index].trim()) return index;
  }
  return -1;
}

function findLayoutProblems(relative, content) {
  const problems = [];
  const lines = content.split(/\r?\n/);
  const text = lines.join('\n');
  const positions = {
    summary: text.indexOf('## What it covers'),
    officialTexts: text.indexOf(':::info[Official texts]'),
    timeline: text.indexOf('## Timeline of key dates'),
    sources: text.indexOf('## Sources'),
    related: text.indexOf('## Related pages'),
  };
  const relationshipMatch = text.match(/^## Relationship (?:with other standards|to other standards(?: and guidance)?)\s*$/m);
  positions.relationship = relationshipMatch ? relationshipMatch.index : -1;

  const required = [
    ['What it covers', positions.summary],
    ['Official texts callout', positions.officialTexts],
    ['Timeline of key dates', positions.timeline],
    ['Relationship section', positions.relationship],
    ['Sources', positions.sources],
    ['Related pages', positions.related],
  ];
  for (const [label, position] of required) {
    if (position < 0) problems.push(`missing ${label}`);
  }

  const ordered = required.map(([, position]) => position);
  if (ordered.every((position) => position >= 0) &&
      ordered.some((position, index) => index > 0 && position <= ordered[index - 1])) {
    problems.push('sections are out of order');
  }

  if (positions.officialTexts >= 0) {
    const openingLine = lines.findIndex((line) => line.trim() === ':::info[Official texts]');
    const closingLine = lines.findIndex((line, index) => index > openingLine && line.trim() === ':::');
    if (openingLine < 0 || closingLine < 0) {
      problems.push('Official texts callout is not closed');
    } else if (!/\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(lines.slice(openingLine + 1, closingLine).join('\n'))) {
      problems.push('Official texts callout has no source link');
    }
  }

  if (positions.timeline >= 0) {
    const headingLine = lines.findIndex((line) => line.trim() === '## Timeline of key dates');
    const headerLine = nextNonEmptyLine(lines, headingLine + 1);
    const dividerLine = headerLine >= 0 ? nextNonEmptyLine(lines, headerLine + 1) : -1;
    const bodyLine = dividerLine >= 0 ? nextNonEmptyLine(lines, dividerLine + 1) : -1;
    const headers = headerLine >= 0 ? pipeCells(lines[headerLine]) : [];
    const divider = dividerLine >= 0 ? pipeCells(lines[dividerLine]) : [];
    const body = bodyLine >= 0 ? pipeCells(lines[bodyLine]) : [];

    if (headers.length !== 2 || headers[0] !== 'Date' || headers[1] !== 'Event' ||
        divider.length !== 2 || !divider.every((cell) => /^:?-{3,}:?$/.test(cell)) ||
        body.length !== 2) {
      problems.push('timeline table must have Date and Event columns');
    } else {
      const timelineRows = lines.slice(bodyLine).filter((line) => pipeCells(line).length === 2);
      if (timelineRows.some((line) => {
        const dateCell = pipeCells(line)[0];
        return /\b\d{4}-\d{2}(?:-\d{2})?\b/.test(dateCell) &&
          !/&#8209;|‑/.test(dateCell);
      })) {
        problems.push('full ISO dates must use nonbreaking hyphens');
      }
    }
  }

  return problems.length ? `${relative}: ${problems.join('; ')}` : undefined;
}

function findStandardsLayoutViolations(standardsDir) {
  return walkMarkdown(standardsDir).flatMap((file) => {
    const relative = path.relative(standardsDir, file).split(path.sep).join('/');
    const problem = findLayoutProblems(relative, fs.readFileSync(file, 'utf8'));
    return problem ? [problem] : [];
  });
}

const validSummary = `
## What it covers

This standard specifies a cryptographic mechanism.

:::info[Official texts]

Read the [official publication](https://example.org/standard).

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| 2024 | Published as a final standard. |

## Relationship with other standards

Related standards are discussed here.

## Sources

- [Official publication](https://example.org/standard)

## Related pages

- [Related page](/standards/)
`;

test('accepts the preferred standards summary structure', () => {
  const problems = withRoot(
    {'fips/example.md': validSummary},
    (root) => findStandardsLayoutViolations(path.join(root, 'fips')),
  );
  assert.deepEqual(problems, []);
});

test('flags missing, reordered, or non-two-column standards sections', () => {
  const invalid = validSummary
    .replace('[official publication](https://example.org/standard)', 'No source here.')
    .replace('| Date | Event |', '| Date | Event | Relevance |')
    .replace('## Relationship with other standards', '## Related guidance');
  const problems = withRoot(
    {'fips/example.md': invalid},
    (root) => findStandardsLayoutViolations(path.join(root, 'fips')),
  );
  assert.equal(problems.length, 1);
  assert.match(problems[0], /missing Relationship section/);
  assert.match(problems[0], /no source link/);
  assert.match(problems[0], /Date and Event columns/);
});

test('flags full ISO dates that can wrap in the timeline', () => {
  const wrappingDate = validSummary.replace('2024 |', '2024-08-13 |');
  const nonbreakingDate = validSummary.replace(
    '2024 |',
    '<time datetime="2024-08-13">2024&#8209;08&#8209;13</time> |',
  );
  const problems = withRoot(
    {'fips/wrapping.md': wrappingDate, 'fips/nonbreaking.md': nonbreakingDate},
    (root) => findStandardsLayoutViolations(path.join(root, 'fips')),
  );
  assert.equal(problems.length, 1);
  assert.match(problems[0], /full ISO dates must use nonbreaking hyphens/);
});

test('all non-index standards pages follow the preferred structure', () => {
  const standardsDir = path.resolve(process.cwd(), 'docs/standards');
  const violations = findStandardsLayoutViolations(standardsDir);
  assert.equal(
    violations.length,
    0,
    `${violations.length} standards page(s) need the preferred structure:\n${violations.join('\n')}`,
  );
});
