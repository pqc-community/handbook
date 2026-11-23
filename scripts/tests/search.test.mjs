import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {
  BROWSER_TITLE_SUFFIX,
  MAX_BROWSER_TITLE_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_SLUG_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  browserTitle,
  findSearchMetadataViolations,
  findUrlViolations,
  urlSegments,
} from '../checks/search.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'docs');

const describe = (n) => 'D'.repeat(n);
const page = ({title = 'A page title', searchTitle, description = describe(130)} = {}) =>
  `---\ntitle: ${title}\n${searchTitle ? `search_title: ${searchTitle}\n` : ''}${
    description === null ? '' : `description: ${description}\n`
  }---\n`;
const searchMetadata = (files) => withRoot(files, (root) => findSearchMetadataViolations(path.join(root, 'docs')));
const urls = (files) => withRoot(files, (root) => findUrlViolations(path.join(root, 'docs')));

test('browser title uses search_title when set, otherwise title', () => {
  assert.equal(browserTitle(page({title: 'SSH'})), `SSH${BROWSER_TITLE_SUFFIX}`);
  assert.equal(browserTitle(page({title: 'SSH', searchTitle: 'Post-quantum SSH'})), `Post-quantum SSH${BROWSER_TITLE_SUFFIX}`);
});

test('accepts descriptions at both length bounds and browser titles at the limit', () => {
  const title = 'T'.repeat(MAX_BROWSER_TITLE_LENGTH - BROWSER_TITLE_SUFFIX.length);
  assert.deepEqual(
    searchMetadata({
      'docs/short.md': page({title: 'Short one', description: describe(MIN_DESCRIPTION_LENGTH)}),
      'docs/long.md': page({title, description: `E${describe(MAX_DESCRIPTION_LENGTH - 1)}`}),
    }),
    [],
  );
});

test('flags missing and out-of-range descriptions', () => {
  const violations = searchMetadata({
    'docs/missing.md': page({title: 'Missing', description: null}),
    'docs/short.md': page({title: 'Short', description: describe(MIN_DESCRIPTION_LENGTH - 1)}),
    'docs/long.md': page({title: 'Long', description: `E${describe(MAX_DESCRIPTION_LENGTH)}`}),
  });
  assert.deepEqual(violations, [
    `long.md: description is ${MAX_DESCRIPTION_LENGTH + 1} characters, outside ${MIN_DESCRIPTION_LENGTH}–${MAX_DESCRIPTION_LENGTH}`,
    'missing.md: missing description',
    `short.md: description is ${MIN_DESCRIPTION_LENGTH - 1} characters, outside ${MIN_DESCRIPTION_LENGTH}–${MAX_DESCRIPTION_LENGTH}`,
  ]);
});

test('flags a long browser title unless a short search_title replaces it', () => {
  const longTitle = 'L'.repeat(MAX_BROWSER_TITLE_LENGTH);
  const violations = searchMetadata({
    'docs/long.md': page({title: longTitle}),
    'docs/fixed.md': page({title: longTitle, searchTitle: 'A shorter title', description: `F${describe(129)}`}),
  });
  assert.equal(violations.length, 1);
  assert.match(violations[0], /^long\.md: browser title .* over 65; shorten the title or add a search_title$/);
});

test('flags a search_title that repeats the title', () => {
  assert.deepEqual(searchMetadata({'docs/a.md': page({title: 'Same', searchTitle: 'Same'})}), [
    'a.md: search_title repeats title; remove it',
  ]);
});

test('flags browser titles and descriptions shared by two pages', () => {
  const violations = searchMetadata({
    'docs/a.md': page({title: 'Same title'}),
    'docs/b.md': page({title: 'Other', searchTitle: 'Same title'}),
  });
  assert.deepEqual(violations, [
    `browser title "Same title${BROWSER_TITLE_SUFFIX}" is used by a.md, b.md`,
    `description "${describe(130)}" is used by a.md, b.md`,
  ]);
});

test('index pages serve their folder URL', () => {
  assert.deepEqual(urlSegments('/d', '/d/learn/index.md'), ['learn']);
  assert.deepEqual(urlSegments('/d', '/d/learn/explainers/kem.md'), ['learn', 'explainers', 'kem']);
});

test('accepts readable slugs within the depth and length limits', () => {
  assert.deepEqual(
    urls({
      'docs/standards/post-quantum/fips-203.md': page(),
      'docs/standards/post-quantum/index.md': page(),
      [`docs/learn/${'a'.repeat(MAX_SLUG_LENGTH)}.md`]: page(),
      'docs/plan/programme/inventory.md': page(),
      'docs/templates/records/inventory.md': page(),
    }),
    [],
  );
});

test('flags bad slug characters, long segments, deep URLs, slug front matter and clashing final segments', () => {
  const long = 'a'.repeat(MAX_SLUG_LENGTH + 1);
  const violations = urls({
    'docs/learn/Bad_Name.md': page(),
    'docs/learn/double--hyphen.md': page(),
    [`docs/learn/${long}.md`]: page(),
    'docs/standards/a/b/c.md': page(),
    'docs/learn/custom.md': '---\ntitle: Custom\nslug: /elsewhere/\n---\n',
    'docs/learn/timelines.md': page(),
    'docs/learn/explainers/timelines.md': page(),
  });
  assert.deepEqual(violations, [
    'learn/Bad_Name.md: URL segment "Bad_Name" must be lowercase letters, digits and single hyphens',
    `learn/${long}.md: URL segment "${long}" is ${MAX_SLUG_LENGTH + 1} characters, over ${MAX_SLUG_LENGTH}`,
    'learn/custom.md: slug front matter is not used; a page\'s URL comes from its file path',
    'learn/double--hyphen.md: URL segment "double--hyphen" must be lowercase letters, digits and single hyphens',
    'standards/a/b/c.md: URL /standards/a/b/c/ has 4 segments, over 3',
    'URLs in /learn/ share the final segment "timelines": /learn/explainers/timelines/, /learn/timelines/',
  ]);
});

test('every handbook page has a distinct browser title and description within bounds', () => {
  assertNoViolations(findSearchMetadataViolations(DOCS), 'Search titles and descriptions');
});

test('every handbook URL follows the slug convention', () => {
  assertNoViolations(findUrlViolations(DOCS), 'URL slugs');
});
