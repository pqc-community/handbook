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
import {findRoutePageViolations, findRouteValueViolations, isRouteValue} from '../checks/routes.mjs';
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

// Situation routes. These tests live here because `npm test` lists its test files
// explicitly; the checks themselves are in scripts/checks/routes.mjs.
const routeRecordPage = `---
title: Decision note
---

## Minimum fields

asset, route

Download a blank CSV: [decision-note.csv](/downloads/decision-note.csv).
`;

const decisionTable = (route) => `| asset | A long-lived confidentiality | path | route |
| --- | --- | --- | --- |
| Laptops | no | short | ${route} |
`;

test('accepts route pages that link Decide whether to act and a record page', () => {
  withRoot(
    {
      'docs/resources/records/decision-note.md': routeRecordPage,
      'docs/routes/index.md': 'See [Decide](/migration-practices/diagnose/) and the [note](/resources/records/decision-note/).\n',
      'docs/routes/short.md': 'See [Decide](/migration-practices/diagnose/#five-conditions) and the [note](/resources/records/decision-note/#filled-example).\n',
    },
    (root) => assert.deepEqual(findRoutePageViolations(root), []),
  );
});

test('flags a route page without Decide whether to act or a record, and a missing overview', () => {
  withRoot(
    {
      'docs/resources/records/decision-note.md': routeRecordPage,
      'docs/routes/short.md': 'See [Programme](/migration-practices/programme/) and the [glossary](/resources/reference/glossary/).\n',
    },
    (root) =>
      assert.deepEqual(findRoutePageViolations(root), [
        'docs/routes/index.md is missing',
        'docs/routes/short.md: does not link Decide whether to act (/migration-practices/diagnose/)',
        'docs/routes/short.md: does not link a record page',
      ]),
  );
});

test('accepts the three route names, alone or with one bracketed qualifier', () => {
  for (const value of [
    'Vendor-managed software',
    'Vendor-managed software (all five conditions hold)',
    'Long-lived confidentiality (also Hard-to-change systems)',
    'Hard-to-change systems',
  ]) {
    assert.ok(isRouteValue(value), value);
  }
});

test('flags decision-note route values that are not a track name', () => {
  withRoot(
    {
      'docs/a.md': decisionTable('Organisation-wide'),
      'docs/b.md': decisionTable('Vendor-managed software (all five conditions hold) (checked)'),
      'docs/c.md': decisionTable('vendor-managed software'),
      'docs/d.md': `${decisionTable('Hard-to-change systems')}\n| asset | route |\n| --- | --- |\n| Laptops | anything |\n`,
    },
    (root) =>
      assert.deepEqual(
        findRouteValueViolations(root).map((violation) => violation.split(': route')[0]),
        ['docs/a.md:3', 'docs/b.md:3', 'docs/c.md:3'],
      ),
  );
});

test('every route page links Decide whether to act and a record page', () => {
  assertNoViolations(findRoutePageViolations(ROOT), 'Route pages missing a required link');
});

test('every decision-note route value is a track name', () => {
  assertNoViolations(findRouteValueViolations(ROOT), 'Decision-note route values');
});
