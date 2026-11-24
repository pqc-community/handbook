import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_POST_TITLE_LENGTH,
  MAX_TEASER_WORDS,
  MIN_INLINE_LINKS,
  MIN_TEASER_WORDS,
  TRUNCATE_MARKER,
  findPostViolations,
  inlineHandbookLinks,
  teaserWords,
} from '../checks/posts.mjs';
import {findProseDateViolations} from '../checks/dates.mjs';
import {findStaccatoViolations} from '../checks/reading.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';

const ROOT = process.cwd();
const words = (n) => Array.from({length: n}, () => 'word').join(' ');
const description = (n = 130) => 'D'.repeat(n);

const post = ({
  title = 'A post title',
  date = '2025-03-20',
  slug,
  teaser = words(60),
  marker = TRUNCATE_MARKER,
  ending = '## Sources\n\n- A source.\n\n## Related pages\n\n- [Plan](/plan/)\n',
  desc = description(),
  body = 'See [the plan](/plan/), [core actions](/plan/core-actions/) and [the programme](/plan/programme/).',
} = {}) =>
  `---\ntitle: ${title}\ndescription: ${desc}\ndate: ${date}\n${slug ? `slug: ${slug}\n` : ''}authors: [pqc_handbook]\n---\n\n${teaser}\n\n${marker}\n\n## What happened\n\n${body}\n\n${ending}`;

const check = (files) => withRoot(files, (root) => findPostViolations(root));

test('counts teaser words before the truncate marker, ignoring link targets', () => {
  assert.equal(teaserWords(post({teaser: 'Read [the guidance](https://example.org/a-long-path) now.'})), 4);
  assert.equal(teaserWords(post({marker: '<!-- truncate -->'})), undefined);
});

test('counts distinct handbook pages linked before Sources, not external or Related pages links', () => {
  const body = 'See [the plan](/plan/), [it again](/plan/#which-dates-apply-to-you), [a later post](/news/2026/later/) and [NCSC](https://www.ncsc.gov.uk/).';
  assert.equal(inlineHandbookLinks(post({body})), 1);
});

test('accepts a post in its year folder with a teaser at both bounds', () => {
  assert.deepEqual(
    check({
      'blog/2025/short-teaser.md': post({teaser: words(MIN_TEASER_WORDS), desc: description(120)}),
      'blog/2025/long-teaser.md': post({title: 'Another title', teaser: words(MAX_TEASER_WORDS), desc: description(121)}),
    }),
    [],
  );
});

test('flags location, slug, date, title, teaser, marker and ending problems', () => {
  const violations = check({
    'blog/2025-03-20-dated.md': post({title: 'Dated', desc: description(101)}),
    'blog/2024/wrong-year.md': post({title: 'Wrong year', desc: description(102)}),
    'blog/2025/Bad_Slug.md': post({title: 'Bad slug', desc: description(103)}),
    'blog/2025/has-slug.md': post({title: 'Has slug', slug: 'x', desc: description(104)}),
    'blog/2025/long-title.md': post({title: 'T'.repeat(MAX_POST_TITLE_LENGTH + 1), desc: description(105)}),
    'blog/2025/short-teaser.md': post({title: 'Short teaser', teaser: words(MIN_TEASER_WORDS - 1), desc: description(106)}),
    'blog/2025/html-marker.md': post({title: 'HTML marker', marker: '<!-- truncate -->', desc: description(107)}),
    'blog/2025/no-ending.md': post({title: 'No ending', ending: '## Sources\n\n- A source.\n', desc: description(108)}),
    'blog/2025/short-description.md': post({title: 'Short description', desc: description(99)}),
    'blog/2025/few-links.md': post({title: 'Few links', body: 'Only [the plan](/plan/).', desc: description(109)}),
  });
  assert.deepEqual(violations, [
    'blog/2024/wrong-year.md: date 2025-03-20 is not in the 2024 folder',
    'blog/2025-03-20-dated.md: posts live at blog/<year>/<slug>.md',
    'blog/2025/Bad_Slug.md: slug "Bad_Slug" must be lowercase letters, digits and single hyphens',
    `blog/2025/few-links.md: links 1 handbook pages inline, under ${MIN_INLINE_LINKS}; link them in the body, not only in Related pages`,
    'blog/2025/has-slug.md: slug front matter is not used; a post\'s URL comes from its year folder and file name',
    `blog/2025/html-marker.md: missing the truncate marker ${TRUNCATE_MARKER} on its own line`,
    `blog/2025/long-title.md: title is ${MAX_POST_TITLE_LENGTH + 1} characters, outside 3–${MAX_POST_TITLE_LENGTH}`,
    'blog/2025/no-ending.md: must end with ## Sources and then ## Related pages',
    'blog/2025/short-description.md: description is 99 characters, outside 100–160',
    `blog/2025/short-teaser.md: teaser is ${MIN_TEASER_WORDS - 1} words, outside ${MIN_TEASER_WORDS}–${MAX_TEASER_WORDS}`,
  ]);
});

test('flags a post description shared with a doc page or another post', () => {
  const shared = description(140);
  const violations = check({
    'docs/page.md': `---\ntitle: Page\ndescription: ${shared}\n---\n`,
    'blog/2025/one.md': post({title: 'One', desc: shared}),
    'blog/2025/two.md': post({title: 'Two', desc: shared}),
  });
  assert.deepEqual(violations, [
    'blog/2025/one.md: description is also used by docs/page.md',
    'blog/2025/two.md: description is also used by docs/page.md',
    `description "${shared}" is used by blog/2025/one.md, blog/2025/two.md`,
  ]);
});

test('prose date and staccato rules cover posts', () => {
  const files = {
    'blog/2025/iso.md': post({teaser: `${words(50)} on 2025-03-20.`}),
    'blog/2025/choppy.md': post({title: 'Choppy', desc: description(131), teaser: `${words(50)}.\n\nIt is short. It is choppy. It is bad.`}),
  };
  assert.deepEqual(
    withRoot(files, (root) => findProseDateViolations(root)),
    [`blog/2025/iso.md:8: 2025-03-20 → write "20 March 2025"`],
  );
  assert.equal(withRoot(files, (root) => findStaccatoViolations(root)).length, 1);
});

test('news posts follow the post rules', () => {
  assertNoViolations(findPostViolations(ROOT), 'News post problems (style-guide.md, News and analysis posts)');
});
