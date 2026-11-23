import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_NAV_LABEL_LENGTH,
  MAX_NAVBAR_LABEL_LENGTH,
  MAX_FOOTER_TITLE_LENGTH,
  MAX_FOOTER_LABEL_LENGTH,
  MAX_SIDEBAR_LABEL_LENGTH,
  findAdmonitionViolations,
  findNavigationViolations,
  findPageViolations,
} from '../checks/pages.mjs';
import {MAX_SENTENCE_WORDS, MAX_WORDS, MIN_AVG_SENTENCE_WORDS, choppyParagraphs, findJourneyBudgetViolations, findRetiredLabelViolations, findStaccatoViolations, readingMetrics, retiredLabelsIn, sentences} from '../checks/reading.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'docs');

test('flags missing, too-short, and overly long page titles', () => {
  const longTitle = 'A'.repeat(MAX_TITLE_LENGTH + 1);
  const violations = withRoot(
    {
      'docs/missing.md': '---\ndescription: No title field\n---\n',
      'docs/short.md': '---\ntitle: Hi\n---\n',
      'docs/long.md': `---\ntitle: "${longTitle}"\n---\n`,
    },
    (root) => findPageViolations(path.join(root, 'docs')),
  );
  assert.ok(violations.some((v) => v.includes('missing.md: missing title')));
  assert.ok(
    violations.some((v) =>
      v.includes(`short.md: title length 2 is below ${MIN_TITLE_LENGTH}`),
    ),
  );
  assert.ok(
    violations.some((v) =>
      v.includes(
        `long.md: title length ${MAX_TITLE_LENGTH + 1} exceeds ${MAX_TITLE_LENGTH}`,
      ),
    ),
  );
});

test('accepts unquoted and quoted titles within bounds', () => {
  const violations = withRoot(
    {
      'docs/plain.md': '---\ntitle: Timelines\n---\n',
      'docs/quoted.md':
        '---\ntitle: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"\n---\n',
    },
    (root) => findPageViolations(path.join(root, 'docs')),
  );
  assert.deepEqual(violations, []);
});

test('flags titled admonitions that use unsupported title syntax', () => {
  const violations = withRoot(
    {
      'docs/invalid.md': ':::info Official text\nContent\n:::\n',
      'docs/valid.md': ':::info[Official text]\nContent\n:::\n',
      'docs/code-example.md': '```md\n:::info Example\n```\n',
    },
    (root) => findAdmonitionViolations(path.join(root, 'docs')),
  );
  assert.deepEqual(violations, [
    'invalid.md:1: titled admonition must use bracket syntax, for example :::info[Title]',
  ]);
});

test('flags overly long navbar, footer, and sidebar labels independently', () => {
  const longNavbar = 'N'.repeat(MAX_NAVBAR_LABEL_LENGTH + 1);
  const longFooterTitle = 'T'.repeat(MAX_FOOTER_TITLE_LENGTH + 1);
  const longFooterLabel = 'F'.repeat(MAX_FOOTER_LABEL_LENGTH + 1);
  const longCategory = 'C'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 1);
  const longSidebarDoc = 'S'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 1);
  const longFallbackTitle = 'X'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 5);

  const violations = withRoot(
    {
      'docusaurus.config.ts': `export default {
        themeConfig: {
          navbar: {
            items: [
              { label: '${longNavbar}', position: 'left' },
              { label: 'X', position: 'right' },
            ],
          },
          footer: {
            links: [
              {
                title: '${longFooterTitle}',
                items: [{ label: '${longFooterLabel}', to: '/routes/' }],
              },
            ],
          },
        },
      };\n`,
      'sidebars.ts': `export default {
        mainSidebar: [
          'ok-sidebar',
          {
            type: 'category',
            label: '${longCategory}',
            items: ['long-sidebar', 'missing-sidebar-label'],
          },
        ],
      };\n`,
      // 42 chars: longer than MAX_FOOTER_LABEL_LENGTH (32), valid in sidebar (<= 50)
      'docs/ok-sidebar.md':
        '---\ntitle: Short title\nsidebar_label: Discovery, readiness, and supplier guides\n---\n',
      'docs/long-sidebar.md': `---\ntitle: Short title\nsidebar_label: ${longSidebarDoc}\n---\n`,
      'docs/missing-sidebar-label.md': `---\ntitle: "${longFallbackTitle}"\n---\n`,
    },
    (root) => findNavigationViolations(root),
  );

  assert.ok(violations.some((v) => v.includes('navbar item')));
  assert.ok(
    violations.some((v) =>
      v.includes(`below ${MIN_NAV_LABEL_LENGTH}`),
    ),
  );
  assert.ok(violations.some((v) => v.includes('footer column title')));
  assert.ok(violations.some((v) => v.includes('footer link')));
  assert.ok(violations.some((v) => v.includes('sidebar category')));
  assert.ok(violations.some((v) => v.includes('long-sidebar.md')));
  assert.ok(violations.some((v) => v.includes('missing-sidebar-label.md')));
  assert.equal(
    violations.some((v) => v.includes('ok-sidebar.md')),
    false,
  );
});

test('all handbook docs have valid page title lengths', () => {
  assertNoViolations(findPageViolations(DOCS), 'Page titles outside their length bounds');
});

test('all handbook navigation items fit their UI surface bounds', () => {
  assertNoViolations(findNavigationViolations(ROOT), 'Navigation labels outside their length bounds');
});

test('all handbook admonition titles use supported syntax', () => {
  assertNoViolations(findAdmonitionViolations(DOCS), 'Admonition titles need bracket syntax');
});

// Reader journey budgets and retired labels. These tests live here because `npm test`
// lists its test files explicitly; the checks themselves are in scripts/checks/reading.mjs.
const journeyPage = (text) => `---\ntitle: Journey page\n---\n\n${text}\n\n## Sources\n\n- [A source](/standards/) and more words that are not counted.\n`;
// Sentences start with a capital, as real prose does; the splitter joins a part that
// starts in lower case to the sentence before it.
const words = (n) => ['Word', ...Array.from({length: n - 1}, () => 'word')].join(' ');

const withJourney = (pages) =>
  Object.fromEntries(
    ['docs/plan/index.md', 'docs/plan/core-actions.md', 'docs/plan/programme/index.md'].map((name, index) => [name, pages[index] ?? journeyPage('Short and clear.')]),
  );
const budget = (page) => withRoot(withJourney([journeyPage(page)]), (root) => findJourneyBudgetViolations(root));

test('measures words, internal links, the longest sentence and backticks before Sources, ignoring image alt text', () => {
  const metrics = readingMetrics(journeyPage('One two three [four](/x/). Five `six` seven. ![img](/i.png) [Ext](https://e.org) [rel](other/)'));
  assert.equal(metrics.words, 9);
  assert.equal(metrics.links, 2);
  assert.equal(metrics.longest, 4);
  assert.equal(metrics.backticks, 1);
});

test('splits sentences at full stops, not at semicolons, colons or common abbreviations', () => {
  assert.deepEqual(sentences('One; two: three, e.g. four. Five!'), ['One; two: three, e.g. four.', 'Five!']);
  assert.deepEqual(sentences('Passed as H.R. 7535 at 136 Stat. 2389. Done.'), ['Passed as H.R. 7535 at 136 Stat. 2389.', 'Done.']);
  assert.deepEqual(sentences('See SP 800-57 Rev. 5 and Art. 3 here. Done.'), ['See SP 800-57 Rev. 5 and Art. 3 here.', 'Done.']);
});

test('splits after closing emphasis, quotes and brackets, and at a real "No." or "etc."', () => {
  assert.deepEqual(sentences('**Keep it short.** Keep it safe. Done now.'), ['**Keep it short.**', 'Keep it safe.', 'Done now.']);
  assert.deepEqual(sentences('He said “stop.” Then go. Now (see below.) Next.'), ['He said “stop.”', 'Then go.', 'Now (see below.)', 'Next.']);
  assert.deepEqual(sentences('Do you need one? No. Most do not. Keys, certs, etc. The next. Use no. 5 here.'), ['Do you need one?', 'No.', 'Most do not.', 'Keys, certs, etc.', 'The next.', 'Use no. 5 here.']);
});

test('does not split after a quoted question in mid-sentence', () => {
  assert.deepEqual(sentences('It treats “how is state controlled?” as required. Done.'), ['It treats “how is state controlled?” as required.', 'Done.']);
});

test('accepts journey pages exactly at their limits', () => {
  assert.deepEqual(budget(`${words(MAX_SENTENCE_WORDS)}.`), []);
  assert.deepEqual(budget(Array.from({length: MAX_WORDS / 20}, () => `${words(20)}.`).join(' ')), []);
  assert.deepEqual(budget(`[A](/a/) [b](/b/) ${words(18)}. ${Array.from({length: 4}, () => `${words(20)}.`).join(' ')}`), []);
  assert.deepEqual(budget([words(15), words(15), words(15)].map((s) => `${s}.`).join(' ')), []);
});

test('flags each budget rule on its own', () => {
  const only = (page, pattern) => {
    const violations = budget(page);
    assert.equal(violations.length, 1, violations.join('; '));
    assert.match(violations[0], pattern);
  };
  only(Array.from({length: MAX_WORDS / 20 + 1}, () => `${words(20)}.`).join(' '), /words \(at most/);
  only('[a](/a/) [b](/b/) [c](/c/) Words here.', /internal links per 100 words/);
  only(`${words(MAX_SENTENCE_WORDS + 1)}.`, /a sentence of 41 words/);
  only(`${words(25)}; ${words(25)}.`, /a sentence of 50 words/);
  only(`| Column |\n| --- |\n| ${words(MAX_SENTENCE_WORDS + 5)}. |`, /a sentence of 45 words/);
  only('Use the `route` field.', /backticked/);
  only(`${words(8)}. ${words(9)}. ${words(10)}.`, /: 1 staccato paragraph \(/);
});

test('flags staccato paragraphs but not connected prose, short paragraphs, lists or tables', () => {
  const short = (n) => `${words(n)}.`;
  assert.equal(choppyParagraphs(journeyPage([short(8), short(9), short(10)].join(' '))).length, 1);
  assert.equal(choppyParagraphs(journeyPage([short(12), short(16), short(20)].join(' '))).length, 0);
  assert.equal(choppyParagraphs(journeyPage(`${short(5)} ${short(6)}`)).length, 0);
  assert.equal(choppyParagraphs(journeyPage(`- ${short(5)} ${short(6)} ${short(7)}`)).length, 0);
  assert.equal(choppyParagraphs(journeyPage(`| A |\n| --- |\n| ${short(5)} ${short(6)} ${short(7)} |`)).length, 0);
  for (const notProse of ['> ', '<!-- ', '    ', '1) ', '# ']) {
    assert.equal(choppyParagraphs(journeyPage(`${notProse}${short(5)} ${short(6)} ${short(7)}`)).length, 0, notProse);
  }
});

test('reports staccato paragraphs by line, and reads past a heading that only starts with Sources', () => {
  const page = `---\ntitle: T\n---\n\nWord here. Word here. Word here.\n\n## Sources of randomness\n\nWord here. Word here. Word here.\n\n## Sources\n\nWord here. Word here. Word here.\n`;
  assert.deepEqual(choppyParagraphs(page).map((p) => p.line), [5, 9]);
  assert.equal(readingMetrics(page).choppy, 2);
  assert.ok(MIN_AVG_SENTENCE_WORDS > 3);
});

test('finds retired labels with hyphens, line breaks, plurals and any case, once each', () => {
  assert.deepEqual(
    retiredLabelsIn('a short-path b\nthe Short\npath\nfive-condition test\nthe short and full paths\nUrgent Adopters').map((f) => `${f.line}:${f.label}`),
    ['1:short-path', '2:Short path', '4:five-condition', '5:short and full paths', '6:Urgent Adopters'],
  );
});

test('allows ordinary words and plain-English uses that are not the retired labels', () => {
  assert.deepEqual(retiredLabelsIn('The upgrade route, the critical path, a track record; we decide whether to act.'), []);
  assert.deepEqual(retiredLabelsIn('See Decide whether to act.').map((f) => f.label), ['Decide whether to act']);
});

test('blocks the retired page names Start here and Plan the migration, but not plain English', () => {
  assert.deepEqual(retiredLabelsIn('Go to Start here, then Plan the migration.').map((f) => f.label), ['Start here', 'Plan the migration']);
  assert.deepEqual(retiredLabelsIn('Follow the Baseline.').map((f) => f.label), ['Baseline']);
  assert.deepEqual(retiredLabelsIn('If you are new, start here; then plan the migration with your supplier.'), []);
});

test('allows the page names at the start of a sentence and in real document names, but not as labels', () => {
  assert.deepEqual(retiredLabelsIn('Start here if you are new. Plan the migration in phases.\n- Baseline figures help.'), []);
  assert.deepEqual(retiredLabelsIn('The CA/Browser Forum Baseline Requirements apply.'), []);
  assert.deepEqual(
    retiredLabelsIn('See [Start here](/x/) and **Baseline**.\ntitle: Plan the migration').map((f) => f.label),
    ['Start here', 'Baseline', 'Plan the migration'],
  );
});

test('allows "full path" as a file path, but not as the retired label', () => {
  assert.deepEqual(retiredLabelsIn('Give the full path to the file, the full path of a key, or its full-path name.'), []);
  assert.deepEqual(retiredLabelsIn('Follow the full path.').map((f) => f.label), ['full path']);
});

test('checks front matter, section overviews and site files, but not quoting summaries', () => {
  withRoot(
    {
      'docs/a.md': '---\ntitle: The Short Path\n---\n\nBody.\n',
      'docs/standards/index.md': 'Our overview mentions regular adopters.\n',
      'docs/standards/guide.md': 'The AIVD handbook names urgent adopters.\n',
      'sidebars.ts': "export default {s: [{label: 'Asset tracks'}]};\n",
    },
    (root) =>
      assert.deepEqual(findRetiredLabelViolations(root), [
        'docs/a.md:2: retired label "Short Path"',
        'docs/standards/index.md:1: retired label "regular adopters"',
        'sidebars.ts:1: retired label "Asset tracks"',
      ]),
  );
});

test('the handbook journey pages stay within their reading budgets', () => {
  assertNoViolations(findJourneyBudgetViolations(ROOT), 'Journey pages over budget');
});

test('the handbook does not use retired routing labels', () => {
  assertNoViolations(findRetiredLabelViolations(ROOT), 'Retired routing labels');
});

test('flags staccato paragraphs on every doc page except the journey pages, and the handbook has none', () => {
  const choppy = '---\ntitle: A record\n---\n\nKeep it short. Keep it safe. Keep it here.\n';
  withRoot({'docs/templates/records/a.md': choppy, 'docs/plan/index.md': choppy}, (root) => {
    assert.deepEqual(findStaccatoViolations(root), ['docs/templates/records/a.md:5: staccato paragraph (3 or more sentences averaging under 15 words; join related points)']);
  });
  assertNoViolations(findStaccatoViolations(ROOT), 'Staccato paragraphs');
});
