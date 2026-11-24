import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {
  findCheckedDates,
  findCheckedDateViolations,
  findDayMonthDates,
  findDayMonthViolations,
  findProseDateViolations,
  findProseIsoDates,
  findTimelineDateViolations,
  proseDate,
} from '../checks/dates.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';
import {validSummary} from './fixtures.mjs';

const ROOT = process.cwd();

test('finds ISO dates in prose but not in front matter, code or tables', () => {
  const sample = [
    '---',
    'last_update: 2026-11-10',
    '---',
    'The review on 2026-11-16 closed two items.',
    '| date | item |',
    '| 2026-11-16 | closed |',
    '````md',
    '```',
    'echo 2026-11-16',
    '```',
    '````',
    '- Next review: `2027-01-18`.',
  ].join('\n');
  assert.deepEqual(
    findProseIsoDates(sample).map(({line, iso}) => [line, iso]),
    [[4, '2026-11-16'], [12, '2027-01-18']],
  );
});

test('finds checked and accessed dates but not document dates', () => {
  const sample = [
    '---',
    'description: checked May 1, 2026',
    '---',
    'Status as checked on November 24, 2026.',
    '- IETF Datatracker, draft-ietf-tls-mlkem, checked November 24, 2026. [Datatracker](https://example.org/)',
    '| Technology | What to rely on, as checked on March 3, 2026 |',
    '- NIST, publications list, accessed June 2, 2026. [List](https://example.org/)',
    '- CISA, NSA and NIST, fact sheet, as of August 17, 2023. [Fact sheet (PDF)](https://example.org/)',
    'NIST published the final version on August 13, 2024.',
    '- NCSC, Timelines, published and reviewed March 20, 2025. [Timelines](https://example.org/)',
    '| Algorithm | Standard | Status (November 24, 2026) |',
    '## Status on November 24, 2026',
    'This lesson shows where each stood on November 24, 2026.',
    'The summary could not be verified for this page on November 24, 2026.',
    '- PQCC heatmap, last checked: March 3, 2026. [Heatmap](https://example.org/)',
    '- Datatracker, checked in November 2026. [Datatracker](https://example.org/)',
    '- Datatracker, checked on 2026-11-24. [Datatracker](https://example.org/)',
    'The guide was published in July 2026 and its status is final.',
    '```',
    'checked November 24, 2026',
    '```',
  ].join('\n');
  assert.deepEqual(findCheckedDates(sample).map(({line}) => line), [4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17]);
});

test('flags checked dates on doc pages only', () => {
  const violations = withRoot(
    {
      'docs/page.md': 'Status as checked on November 24, 2026.\n',
      'blog/2026/post.md': 'Checked November 24, 2026.\n',
      'docs/templates/examples/example.md': 'The IT lead checked on November 10, 2026.\n',
    },
    (root) => findCheckedDateViolations(root),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /^docs\/page\.md:1: /);
});

test('suggests the month–day–year form', () => {
  assert.equal(proseDate('2026-11-16'), 'November 16, 2026');
  assert.equal(proseDate('2027-03-01'), 'March 1, 2027');
});

test('excepts only the named format example lines', () => {
  const violations = withRoot(
    {
      'docs/rules.md': 'Write dates as ISO 8601, such as `2026-11-10`.\nReviewed on 2026-11-10.\n',
    },
    (root) => findProseDateViolations(root, [{file: 'docs/rules.md', phrase: 'Write dates as ISO 8601'}]),
  );
  assert.deepEqual(violations, ['docs/rules.md:2: 2026-11-10 → write "November 10, 2026"']);
});

test('flags full ISO dates that can wrap in the timeline', () => {
  const wrappingDate = validSummary.replace('2024 |', '2024-08-13 |');
  const nonbreakingDate = validSummary.replace(
    '2024 |',
    '<time datetime="2024-08-13">2024&#8209;08&#8209;13</time> |',
  );
  const problems = withRoot(
    {'fips/wrapping.md': wrappingDate, 'fips/nonbreaking.md': nonbreakingDate},
    (root) => findTimelineDateViolations(path.join(root, 'fips')),
  );
  assert.deepEqual(problems, ['wrapping.md: full ISO dates must use nonbreaking hyphens']);
});

test('prose dates are written month–day–year', () => {
  assertNoViolations(
    findProseDateViolations(ROOT),
    'ISO dates in prose (style-guide.md §2; ISO is for front matter, code and tables only)',
  );
});

test('standards timeline dates use non-breaking hyphens', () => {
  assertNoViolations(
    findTimelineDateViolations(path.join(ROOT, 'docs', 'standards')),
    'Standards timeline dates that can wrap; write them with &#8209;',
  );
});

test('the site has no checked dates on doc pages', () => {
  assertNoViolations(findCheckedDateViolations(ROOT));
});

test('finds day–month–year dates outside code blocks', () => {
  const sample = [
    '---',
    'description: Published 5 November 2026.',
    '---',
    'NIST published it on November 5, 2026, and revised it on 7 December.',
    '| Date | 5–7 March 2026 |',
    '[Page](https://example.org/news/5-march-2026)',
    '```',
    'echo 5 November 2026',
    '```',
  ].join('\n');
  assert.deepEqual(
    findDayMonthDates(sample).map(({line, date}) => [line, date]),
    [[2, '5 November'], [4, '7 December'], [5, '5–7 March']],
  );
});

test('excepts only the named day–month source titles', () => {
  const violations = withRoot(
    {'docs/rules.md': 'Recommendation of 11 April 2024 on PQC.\nPublished 11 April 2024.\n'},
    (root) => findDayMonthViolations(root, [{file: 'docs/rules.md', phrase: 'Recommendation of 11 April 2024'}]),
  );
  assert.deepEqual(violations, ['docs/rules.md:2: "11 April" → write the month first ("November 5, 2026")']);
});

test('dates are written month–day–year', () => {
  assertNoViolations(findDayMonthViolations(ROOT), 'Day–month–year dates (style-guide.md §2)');
});
