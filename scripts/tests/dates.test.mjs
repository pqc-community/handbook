import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {
  findCheckedDates,
  findCheckedDateViolations,
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
    'description: checked 1 May 2026',
    '---',
    'Status as checked on 24 November 2026.',
    '- IETF Datatracker, draft-ietf-tls-mlkem, checked 24 November 2026. [Datatracker](https://example.org/)',
    '| Technology | What to rely on, as checked on 3 March 2026 |',
    '- NIST, publications list, accessed 2 June 2026. [List](https://example.org/)',
    '- CISA, NSA and NIST, fact sheet, as of 17 August 2023. [Fact sheet (PDF)](https://example.org/)',
    'NIST published the final version on 13 August 2024.',
    '- NCSC, Timelines, published and reviewed 20 March 2025. [Timelines](https://example.org/)',
    '```',
    'checked 24 November 2026',
    '```',
  ].join('\n');
  assert.deepEqual(findCheckedDates(sample).map(({line}) => line), [4, 5, 6, 7]);
});

test('flags checked dates on doc pages only', () => {
  const violations = withRoot(
    {
      'docs/page.md': 'Status as checked on 24 November 2026.\n',
      'blog/2026/post.md': 'Checked 24 November 2026.\n',
    },
    (root) => findCheckedDateViolations(root),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /^docs\/page\.md:1: /);
});

test('suggests the day–month–year form', () => {
  assert.equal(proseDate('2026-11-16'), '16 November 2026');
  assert.equal(proseDate('2027-03-01'), '1 March 2027');
});

test('excepts only the named format example lines', () => {
  const violations = withRoot(
    {
      'docs/rules.md': 'Write dates as ISO 8601, such as `2026-11-10`.\nReviewed on 2026-11-10.\n',
    },
    (root) => findProseDateViolations(root, [{file: 'docs/rules.md', phrase: 'Write dates as ISO 8601'}]),
  );
  assert.deepEqual(violations, ['docs/rules.md:2: 2026-11-10 → write "10 November 2026"']);
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

test('prose dates are written day–month–year', () => {
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
