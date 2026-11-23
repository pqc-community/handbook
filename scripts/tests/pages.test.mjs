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
import {MAX_SENTENCE_WORDS, MAX_WORDS, findJourneyBudgetViolations, findRetiredLabelViolations, readingMetrics, retiredLabelsIn, sentences} from '../checks/reading.mjs';
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
const words = (n) => Array.from({length: n}, () => 'word').join(' ');

const withJourney = (pages) =>
  Object.fromEntries(
    ['docs/start-here/index.md', 'docs/baseline/index.md', 'docs/programme/index.md'].map((name, index) => [name, pages[index] ?? journeyPage('Short and clear.')]),
  );
const budget = (page) => withRoot(withJourney([journeyPage(page)]), (root) => findJourneyBudgetViolations(root));

test('measures words, internal links, the longest sentence and backticks before Sources', () => {
  const metrics = readingMetrics(journeyPage('One two three [four](/x/). Five `six` seven. ![img](/i.png) [ext](https://e.org) [rel](other/)'));
  assert.equal(metrics.words, 10);
  assert.equal(metrics.links, 2);
  assert.equal(metrics.longest, 4);
  assert.equal(metrics.backticks, 1);
});

test('splits sentences at full stops, not at semicolons, colons or common abbreviations', () => {
  assert.deepEqual(sentences('One; two: three, e.g. four. Five!'), ['One; two: three, e.g. four.', 'Five!']);
});

test('accepts journey pages exactly at their limits', () => {
  assert.deepEqual(budget(`${words(MAX_SENTENCE_WORDS)}.`), []);
  assert.deepEqual(budget(Array.from({length: MAX_WORDS / 10}, () => `${words(10)}.`).join(' ')), []);
});

test('flags each budget rule on its own', () => {
  assert.match(budget(Array.from({length: MAX_WORDS / 10 + 1}, () => `${words(10)}.`).join(' '))[0], /words \(at most/);
  assert.match(budget('[a](/a/) [b](/b/) [c](/c/) words here.')[0], /internal links per 100 words/);
  assert.match(budget(`${words(MAX_SENTENCE_WORDS + 1)}.`)[0], /a sentence of 41 words/);
  assert.match(budget(`${words(25)}; ${words(25)}.`)[0], /a sentence of 50 words/);
  assert.match(budget(`| Column |\n| --- |\n| ${words(MAX_SENTENCE_WORDS + 5)}. |`)[0], /a sentence of 45 words/);
  assert.match(budget('Use the `route` field.')[0], /backticked/);
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
