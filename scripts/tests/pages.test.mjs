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
import {MAX_WORDS, findJourneyBudgetViolations, findRetiredLabelViolations, readingMetrics} from '../checks/reading.mjs';
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

const withJourney = (pages) =>
  Object.fromEntries(
    ['docs/start-here/index.md', 'docs/baseline/index.md', 'docs/programme/index.md'].map((name, index) => [name, pages[index] ?? journeyPage('Short and clear.')]),
  );

test('measures words, links, the longest sentence and backticks before Sources', () => {
  const metrics = readingMetrics(journeyPage('One two three [four](/x/). Five `six` seven.'));
  assert.equal(metrics.words, 7);
  assert.equal(metrics.links, 1);
  assert.equal(metrics.longest, 4);
  assert.equal(metrics.backticks, 1);
});

test('accepts journey pages within their reading budgets', () => {
  withRoot(withJourney([]), (root) => assert.deepEqual(findJourneyBudgetViolations(root), []));
});

test('flags journey pages that are too long, too linked, too wordy per sentence, or use backticks', () => {
  const long = journeyPage(Array.from({length: MAX_WORDS + 1}, () => 'word.').join(' '));
  const linked = journeyPage('[a](/a/) [b](/b/) [c](/c/) words here.');
  const sentence = journeyPage(`${Array.from({length: 41}, () => 'word').join(' ')}.`);
  const ticks = journeyPage('Use the `route` field.');
  withRoot(withJourney([long, linked, sentence]), (root) =>
    assert.deepEqual(findJourneyBudgetViolations(root).map((v) => v.split(':')[0]), [
      'docs/start-here/index.md',
      'docs/baseline/index.md',
      'docs/programme/index.md',
    ]),
  );
  withRoot(withJourney([ticks]), (root) => assert.match(findJourneyBudgetViolations(root)[0], /backticked/));
});

test('flags retired routing labels outside standards summaries, but not ordinary words', () => {
  withRoot(
    {
      'docs/a.md': 'Follow the short path here.\n',
      'docs/b.md': 'The upgrade route and the critical path are fine.\n',
      'docs/standards/guide.md': 'The AIVD handbook names urgent adopters.\n',
    },
    (root) => assert.deepEqual(findRetiredLabelViolations(root), ['docs/a.md:1: retired label "short path"']),
  );
});

test('the handbook journey pages stay within their reading budgets', () => {
  assertNoViolations(findJourneyBudgetViolations(ROOT), 'Journey pages over budget');
});

test('the handbook does not use retired routing labels', () => {
  assertNoViolations(findRetiredLabelViolations(ROOT), 'Retired routing labels');
});
