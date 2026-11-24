import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {findPdfLinkLabelViolations, findStandardsLayoutViolations} from '../checks/standards.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';
import {validSummary} from './fixtures.mjs';

const STANDARDS = path.join(process.cwd(), 'docs', 'standards');

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

test('keeps authority, publication, and status metadata out of the official texts callout', () => {
  const metadataCard = validSummary.replace(
    ':::info[Official texts]\n\nRead',
    ':::info[Official texts]\n\n- **Authority:** Example authority\n\nRead',
  );
  const problems = withRoot(
    {'fips/example.md': metadataCard},
    (root) => findStandardsLayoutViolations(path.join(root, 'fips')),
  );
  assert.equal(problems.length, 1);
  assert.match(problems[0], /repeats document metadata/);
});

test('requires PDF links to identify the format in their link text', () => {
  const problems = withRoot(
    {
      'fips/labeled.md': validSummary.replace(
        '[official publication](https://example.org/standard)',
        '[official publication (PDF)](https://example.org/standard.pdf)',
      ),
      'fips/unlabeled.md': validSummary.replace(
        '[official publication](https://example.org/standard)',
        '[read the standard](https://example.org/standard.pdf)',
      ),
      'fips/nist-doi.md': validSummary.replace(
        '[official publication](https://example.org/standard)',
        '[FIPS 999](https://doi.org/10.6028/NIST.FIPS.999)',
      ),
    },
    (root) => findPdfLinkLabelViolations(path.join(root, 'fips')),
  );
  assert.deepEqual(problems, [
    'nist-doi.md: PDF link text must include (PDF)',
    'unlabeled.md: PDF link text must include (PDF)',
  ]);
});

test('all non-index standards pages follow the preferred structure', () => {
  assertNoViolations(findStandardsLayoutViolations(STANDARDS), 'Standards pages that need the preferred structure');
});

test('all standards PDF links identify the format in their link text', () => {
  assertNoViolations(findPdfLinkLabelViolations(STANDARDS), 'Standards PDF links that need a (PDF) label');
});
