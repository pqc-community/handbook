# PQC Handbook Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local Docusaurus source tree for the PQC Handbook at `https://pqchandbook.com`, with the approved book map and a first-edition page on every URL.

**Architecture:** A Docusaurus 3.10 classic site serves Markdown from `docs/` at the site root. The homepage is a React page. A Node checker fails the build path when a handbook page has no `## Sources` section with an `http` link. There is no blog and no deploy workflow.

**Tech Stack:** Docusaurus 3.10.1, React 19, TypeScript, Node 20, Node's built-in test runner.

**Spec:** `planning/superpowers/specs/2026-11-09-pqc-handbook-design.md`

## Global Constraints

- Public name is `PQC Handbook`. Tagline is `A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.`
- `url` is `https://pqchandbook.com`, `baseUrl` is `/`, `trailingSlash` is `true`.
- `organizationName` is `pqc-community`. `projectName` is `handbook`. GitHub navbar link is `https://github.com/pqc-community/handbook`.
- Docs `routeBasePath` is `/`. Blog is `false`.
- `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` are `throw`.
- Dependencies match the supply-chain handbook: `@docusaurus/core`, `@docusaurus/faster`, and `@docusaurus/preset-classic` at `3.10.1`; React 19; `engines.node` is `>=20.0`.
- `.gitignore` contains `.ai-helper-files/`, `node_modules/`, `build/`, and `.docusaurus/`.
- Navbar items are Standards and timelines, Migration practices, Algorithm and protocol options, Resources, and GitHub. Start here is not a navbar item.
- Sidebar ids are `startHereSidebar`, `standardsTimelinesSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`. Every doc sets `displayed_sidebar` to the sidebar that contains it.
- Colours: primary `#00C5D8`, deep teal `#013B4E`, surface `#F5FCFD`, body `#5E6E75`, highlight `#FF9F45`. Inter for text, Source Code Pro for code.
- Logo and favicon are copies of `.ai-helper-files/scsh/handbook/static/img/tech_shield_padlock_v5.svg`.
- Spelling follows the research notes: organisation, programme, labelled.
- A factual sentence ships only from a filed dump in the spec's dump table, or from a reading-list row that already contains the claim and the URL. This edition does not state Canada CCCS milestone years, Cloudflare, Google Cloud, or AWS deployment details, or Entrust-sponsored Ponemon percentages. It does not cite NSA CNSA 2.0, BSI TR-02102-1, Executive Order 14412, OMB M-26-15, the Singapore CSA advisory, or the Palo Alto harvest-now page. It does not link FIPS 203, 204, or 205. It does not publish parameter tables.
- Cite NIST IR 8547 from `nist-ir-8547-202610.txt` only. Do not cite the initial public draft.
- Vista Security is labelled a vendor blog. Do not copy its 90-day illustration.
- Each handbook page ends with `## Sources`, then `## Related pages`. Every external citation in Sources uses a `[label](https://...)` link. Angle-bracket autolinks do not satisfy the checker.
- Do not commit, push, tag, or otherwise write to git. The user allows git read commands only.
- Do not add a GitHub Actions workflow, a CNAME file, or a blog.

---

### Task 1: Failing sources-checker tests

**Files:**
- Create: `scripts/check-sources.test.mjs`
- Test: `scripts/check-sources.test.mjs`

**Interfaces:**
- Consumes: nothing
- Produces: tests that import `findSourceViolations(docsDir: string): string[]` from `scripts/check-sources.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/check-sources.test.mjs`:

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findSourceViolations } from './check-sources.mjs';

function withDocs(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-sources-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(dir, name);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  try {
    return run(dir);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

test('flags a page with no Sources heading', () => {
  const violations = withDocs(
    { 'guide/a.md': '# Hi\n' },
    (dir) => findSourceViolations(dir),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /guide\/a\.md: missing ## Sources/);
});

test('flags a Sources section whose only http link is under the next heading', () => {
  const violations = withDocs(
    {
      'a.md': [
        '## Sources',
        '',
        'No link in this section.',
        '',
        '## Related pages',
        '',
        '[Home](https://pqchandbook.com/)',
        '',
      ].join('\n'),
    },
    (dir) => findSourceViolations(dir),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /a\.md: ## Sources has no http link/);
});

test('accepts an https link inside Sources', () => {
  const violations = withDocs(
    {
      'a.md': [
        '## Sources',
        '',
        '[UK NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)',
        '',
        '## Related pages',
        '',
      ].join('\n'),
    },
    (dir) => findSourceViolations(dir),
  );
  assert.deepEqual(violations, []);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test scripts/check-sources.test.mjs`

Expected: FAIL because `scripts/check-sources.mjs` does not exist, or `findSourceViolations` is not exported.

- [ ] **Step 3: Do not commit**

---

### Task 2: Sources checker

**Files:**
- Create: `scripts/check-sources.mjs`
- Modify: `package.json` in Task 3, script name `check:sources`
- Test: `scripts/check-sources.test.mjs`

**Interfaces:**
- Consumes: `findSourceViolations(docsDir: string): string[]` from Task 1
- Produces: CLI `node scripts/check-sources.mjs [docsDir]` exits 1 and prints one violation per line when the check fails. Default `docsDir` is `docs` under the current working directory.

- [ ] **Step 1: Write the checker**

Create `scripts/check-sources.mjs`:

```javascript
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HTTP_LINK = /\]\(https?:\/\/[^)\s]+\)/;

export function findSourceViolations(docsDir) {
  const violations = [];
  for (const file of walkMarkdown(docsDir)) {
    const relative = path.relative(docsDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    const start = lines.findIndex((line) => line.trim() === '## Sources');
    if (start === -1) {
      violations.push(`${relative}: missing ## Sources`);
      continue;
    }
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i += 1) {
      if (lines[i].startsWith('## ')) {
        end = i;
        break;
      }
    }
    const section = lines.slice(start + 1, end).join('\n');
    if (!HTTP_LINK.test(section)) {
      violations.push(`${relative}: ## Sources has no http link`);
    }
  }
  return violations;
}

function walkMarkdown(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...walkMarkdown(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      found.push(full);
    }
  }
  return found;
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const docsDir = path.resolve(process.argv[2] ?? path.join(process.cwd(), 'docs'));
  const violations = findSourceViolations(docsDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
```

- [ ] **Step 2: Run the test to verify it passes**

Run: `node --test scripts/check-sources.test.mjs`

Expected: PASS, 3 tests.

- [ ] **Step 3: Do not commit**

---

### Task 3: Docusaurus shell

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `docusaurus.config.ts`
- Create: `sidebars.ts`
- Create: `src/css/custom.css`
- Create: `src/pages/index.tsx`
- Create: `src/pages/index.module.css`
- Create: `static/img/logo.svg`
- Create: `static/img/favicon.svg`
- Create: `static/img/social-card.svg`

**Interfaces:**
- Consumes: nothing from the checker
- Produces: a typechecking site whose navbar and footer link to every handbook path in the spec. `npm run build` fails until Task 4 creates those pages. `npm run check:sources` runs `node scripts/check-sources.mjs`.

- [ ] **Step 1: Write package.json, tsconfig.json, and .gitignore**

`package.json`:

```json
{
  "name": "pqc-handbook",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "typecheck": "tsc",
    "test:sources": "node --test scripts/check-sources.test.mjs",
    "check:sources": "node scripts/check-sources.mjs"
  },
  "dependencies": {
    "@docusaurus/core": "3.10.1",
    "@docusaurus/faster": "3.10.1",
    "@docusaurus/preset-classic": "3.10.1",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.10.1",
    "@docusaurus/tsconfig": "3.10.1",
    "@docusaurus/types": "3.10.1",
    "@types/react": "^19.0.0",
    "typescript": "~6.0.2"
  },
  "browserslist": {
    "production": [">0.5%", "not dead", "not op_mini all"],
    "development": ["last 3 chrome version", "last 3 firefox version", "last 5 safari version"]
  },
  "engines": {
    "node": ">=20.0"
  }
}
```

`tsconfig.json`:

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "strict": true
  },
  "exclude": [".docusaurus", "build"]
}
```

`.gitignore`:

```gitignore
.ai-helper-files/
node_modules/
build/
.docusaurus/
```

- [ ] **Step 2: Copy the shield and write the social card**

Run:

```bash
mkdir -p static/img
cp .ai-helper-files/scsh/handbook/static/img/tech_shield_padlock_v5.svg static/img/logo.svg
cp .ai-helper-files/scsh/handbook/static/img/tech_shield_padlock_v5.svg static/img/favicon.svg
```

Create `static/img/social-card.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#013B4E"/>
  <rect x="64" y="64" width="1072" height="8" fill="#00C5D8"/>
  <text x="80" y="280" fill="#F5FCFD" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700">PQC Handbook</text>
  <text x="80" y="380" fill="#F5FCFD" font-family="Inter, Arial, sans-serif" font-size="32">A practical handbook for organisations that have to</text>
  <text x="80" y="430" fill="#F5FCFD" font-family="Inter, Arial, sans-serif" font-size="32">migrate public-key cryptography.</text>
</svg>
```

- [ ] **Step 3: Write sidebars.ts**

```typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  startHereSidebar: [
    'start-here/index',
    'start-here/own-the-plan',
    'start-here/own-the-product-dates',
    'start-here/ask-a-vendor',
    'start-here/show-evidence',
    'start-here/change-a-protocol',
    'start-here/keep-software-updated',
  ],
  standardsTimelinesSidebar: [
    'standards-timelines/index',
    'standards-timelines/dates',
    'standards-timelines/migration-guides',
  ],
  migrationPracticesSidebar: [
    'migration-practices/index',
    'migration-practices/where-to-start',
    'migration-practices/inventory',
    'migration-practices/priority',
    'migration-practices/vendor-plan',
    'migration-practices/changing-algorithms-again',
    'migration-practices/next-pass',
  ],
  algorithmProtocolOptionsSidebar: [
    'algorithm-protocol-options/index',
    'algorithm-protocol-options/choosing',
    'algorithm-protocol-options/key-establishment',
    'algorithm-protocol-options/signatures',
    'algorithm-protocol-options/long-lived-roots',
  ],
  resourcesSidebar: [
    'resources/index',
    'resources/inventory-questions',
    'resources/prioritisation-checklist',
    'resources/vendor-questions',
    'resources/protect-this-first',
    'resources/glossary',
    'resources/curated-references',
  ],
};

export default sidebars;
```

- [ ] **Step 4: Write docusaurus.config.ts**

```typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PQC Handbook',
  tagline:
    'A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: 'https://pqchandbook.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'pqc-community',
  projectName: 'handbook',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {routeBasePath: '/', sidebarPath: './sidebars.ts'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.5, filename: 'sitemap.xml'},
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:wght@500&display=swap',
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'PQC Handbook',
      logo: {alt: 'PQC Handbook', src: 'img/logo.svg'},
      style: 'dark',
      items: [
        {type: 'docSidebar', sidebarId: 'standardsTimelinesSidebar', position: 'left', label: 'Standards and timelines'},
        {type: 'docSidebar', sidebarId: 'migrationPracticesSidebar', position: 'left', label: 'Migration practices'},
        {type: 'docSidebar', sidebarId: 'algorithmProtocolOptionsSidebar', position: 'left', label: 'Algorithm and protocol options'},
        {type: 'docSidebar', sidebarId: 'resourcesSidebar', position: 'left', label: 'Resources'},
        {href: 'https://github.com/pqc-community/handbook', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start here',
          items: [
            {label: 'Start here', to: '/start-here/'},
            {label: 'I own the plan', to: '/start-here/own-the-plan/'},
            {label: 'I own the product dates', to: '/start-here/own-the-product-dates/'},
            {label: 'I have to ask a vendor', to: '/start-here/ask-a-vendor/'},
            {label: 'I have to show evidence', to: '/start-here/show-evidence/'},
            {label: 'I have to change a protocol', to: '/start-here/change-a-protocol/'},
            {label: 'Keep software updated', to: '/start-here/keep-software-updated/'},
          ],
        },
        {
          title: 'Migration practices',
          items: [
            {label: 'Migration practices', to: '/migration-practices/'},
            {label: 'Where to start', to: '/migration-practices/where-to-start/'},
            {label: 'Inventory', to: '/migration-practices/inventory/'},
            {label: 'Priority', to: '/migration-practices/priority/'},
            {label: 'Vendor plan', to: '/migration-practices/vendor-plan/'},
            {label: 'Changing algorithms again', to: '/migration-practices/changing-algorithms-again/'},
            {label: 'The next pass', to: '/migration-practices/next-pass/'},
          ],
        },
        {
          title: 'Standards and options',
          items: [
            {label: 'Standards and timelines', to: '/standards-timelines/'},
            {label: 'Dates', to: '/standards-timelines/dates/'},
            {label: 'Migration guides', to: '/standards-timelines/migration-guides/'},
            {label: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
            {label: 'Choosing an option', to: '/algorithm-protocol-options/choosing/'},
            {label: 'Key establishment', to: '/algorithm-protocol-options/key-establishment/'},
            {label: 'Signatures', to: '/algorithm-protocol-options/signatures/'},
            {label: 'Long-lived roots', to: '/algorithm-protocol-options/long-lived-roots/'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Resources', to: '/resources/'},
            {label: 'Inventory questions', to: '/resources/inventory-questions/'},
            {label: 'Prioritisation checklist', to: '/resources/prioritisation-checklist/'},
            {label: 'Vendor questions', to: '/resources/vendor-questions/'},
            {label: 'Protect this first', to: '/resources/protect-this-first/'},
            {label: 'Glossary', to: '/resources/glossary/'},
            {label: 'Curated references', to: '/resources/curated-references/'},
          ],
        },
      ],
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
```

- [ ] **Step 5: Write the palette and the homepage**

`src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #00c5d8;
  --ifm-color-primary-dark: #00b1c2;
  --ifm-color-primary-darker: #00a6b6;
  --ifm-color-primary-darkest: #008996;
  --ifm-color-primary-light: #00d9f0;
  --ifm-color-primary-lighter: #00e4fe;
  --ifm-color-primary-lightest: #1ffffd;
  --ifm-font-family-base: 'Inter', sans-serif;
  --ifm-font-family-monospace: 'Source Code Pro', monospace;
  --ifm-heading-font-weight: 700;
  --ifm-font-weight-semibold: 700;
  --ifm-color-warning: #ff9f45;
  --ifm-code-font-size: 95%;
}

[data-theme='dark'] {
  --ifm-background-color: #013b4e;
  --ifm-font-color-base: #f5fcfd;
  --ifm-navbar-background-color: #012a38;
  --ifm-footer-background-color: #013b4e;
  --ifm-code-background: #024c63;
}

[data-theme='light'] {
  --ifm-background-color: #f5fcfd;
  --ifm-font-color-base: #5e6e75;
  --ifm-navbar-background-color: #013b4e;
  --ifm-footer-background-color: #f5fcfd;
  --ifm-code-background: #eef9fb;
}

.footer--dark {
  --ifm-footer-background-color: #013b4e;
  --ifm-footer-color: #f5fcfd;
  --ifm-footer-link-color: #f5fcfd;
  --ifm-footer-title-color: #f5fcfd;
}
```

`src/pages/index.module.css`:

```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.choosePath,
.featuredResources,
.community {
  padding: 3rem 0;
}

.roleGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.resourceGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.roleCard,
.resourceCard {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: var(--ifm-card-border-radius);
  color: inherit;
  display: block;
  padding: 1rem;
  text-decoration: none;
}

.roleCard:hover,
.resourceCard:hover {
  border-color: var(--ifm-color-primary);
  color: inherit;
  text-decoration: none;
}

.roleCard h3,
.resourceCard h3 {
  font-size: 1.05rem;
}

.model {
  padding: 3rem 0;
  background-color: var(--ifm-color-emphasis-100);
}

.modelFlow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.modelFlowItem {
  font-weight: 600;
}

.modelArrow {
  margin-left: 0.5rem;
}

.modelSummary {
  margin: 0 auto;
  max-width: 760px;
}

.communityLinks {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .buttons,
  .communityLinks {
    flex-direction: column;
  }

  .roleGrid,
  .resourceGrid {
    grid-template-columns: 1fr;
  }
}
```

`src/pages/index.tsx`:

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/migration-practices/where-to-start/">
            Where to start
          </Link>
          <Link className="button button--secondary button--lg" to="/start-here/">
            Start here
          </Link>
        </div>
      </div>
    </header>
  );
}

const roles = [
  {title: 'I own the plan', to: '/start-here/own-the-plan/', text: 'Leave with an inventory, a priority, and a one-page plan.'},
  {title: 'I own the product dates', to: '/start-here/own-the-product-dates/', text: 'Leave with a release date tied to one asset, and a vendor question if someone else owns the stack.'},
  {title: 'I have to ask a vendor', to: '/start-here/ask-a-vendor/', text: 'Leave with written questions and a tracking sheet.'},
  {title: 'I have to show evidence', to: '/start-here/show-evidence/', text: 'Leave with the records that show the inventory, the priority, the vendor answer, and what shipped.'},
  {title: 'I have to change a protocol', to: '/start-here/change-a-protocol/', text: 'Leave knowing which job is changing, which option an authority defends, and how to roll back.'},
];

const steps = [
  {title: 'Standards and timelines', to: '/standards-timelines/'},
  {title: 'Migration practices', to: '/migration-practices/'},
  {title: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
  {title: 'Resources', to: '/resources/'},
];

const featured = [
  {title: 'Inventory questions', to: '/resources/inventory-questions/', text: 'Questions a small staff can answer before anyone claims a migration.'},
  {title: 'Prioritisation checklist', to: '/resources/prioritisation-checklist/', text: 'Pick what to protect first from how long the data or the key must stay good.'},
  {title: 'Protect this first', to: '/resources/protect-this-first/', text: 'One worked illustration of a long-lived record and a root that cannot be updated later.'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.choosePath}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2">Choose your path</Heading>
              <p>Each path opens the same handbook. Keep software updated is linked from Start here.</p>
            </div>
            <div className={styles.roleGrid}>
              {roles.map((role) => (
                <Link key={role.title} className={styles.roleCard} to={role.to}>
                  <Heading as="h3">{role.title}</Heading>
                  <p>{role.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.model}>
          <div className="container">
            <div className="text--center">
              <Heading as="h2">How the handbook works</Heading>
              <div className={styles.modelFlow}>
                {steps.map((step, index) => (
                  <span key={step.title} className={styles.modelFlowItem}>
                    <Link to={step.to}>{step.title}</Link>
                    {index < steps.length - 1 && <span className={styles.modelArrow}>-&gt;</span>}
                  </span>
                ))}
              </div>
              <p className={styles.modelSummary}>Dates and duties, then the inventory and the priority, then the options, then a small kit.</p>
            </div>
          </div>
        </section>
        <section className={styles.featuredResources}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2">Featured resources</Heading>
            </div>
            <div className={styles.resourceGrid}>
              {featured.map((item) => (
                <Link key={item.title} className={styles.resourceCard} to={item.to}>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.community}>
          <div className="container">
            <Heading as="h2">Guidance you can check</Heading>
            <p>Dates, duties, and options on this site name the authority and the date of the source.</p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="/algorithm-protocol-options/">Algorithm and protocol options</Link>
              <Link className="button button--outline button--secondary" to="/resources/curated-references/">Curated references</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
```

- [ ] **Step 6: Install and typecheck**

Run: `npm install`

Expected: exit 0 and a `package-lock.json`.

Run: `npm run typecheck`

Expected: exit 0.

Run: `npm run build`

Expected: FAIL until Task 4 adds the docs the navbar and footer already link to. The failure names a missing path such as `/start-here/`.

- [ ] **Step 7: Do not commit**

---

### Task 4: Handbook pages

**Files:**
- Create: every `docs/**/*.md` path listed in the spec book map
- Test: `scripts/check-sources.mjs`

**Interfaces:**
- Consumes: sidebar ids and footer paths from Task 3
- Produces: one Markdown file per public URL. Front matter on every file is `title`, `description`, `sidebar_position` (index of that section is 1, then the sidebar order), and `displayed_sidebar`.

Write each file below in full. Do not shorten a section, drop a citation, or add a source that is not in that file's Sources list. Internal links are relative `.md` links. Sister-handbook links are onward reading and stay out of Sources.

Page order inside a file is the decision, what can go wrong, the stronger practice, what to ask, the evidence, a weak answer, a stronger answer, which pass, which options and who defends them, then `## Sources`, then `## Related pages`. Start here pages use the seat headings instead: the decisions, the reading order, what you leave with, a weak answer, a stronger answer. Section landings say what the section is for and link the child pages. Kit pages contain the artifact. Migration guides, the glossary, and Keep software updated stay short.

- [ ] **Step 1: Write `docs/standards-timelines/index.md`**

```markdown
---
title: Standards and timelines
sidebar_label: Standards and timelines
sidebar_position: 1
displayed_sidebar: standardsTimelinesSidebar
description: Why there is a date, whose date it is, and which migration guides to read next.
---

Use this section when a government date, a customer question, or a vendor claim has landed on your desk and you need to know whose clock it is.

The pages here do not tell you how to configure a protocol. [Dates](./dates.md) carries the UK, EU, and NIST clocks that this edition can cite. [Migration guides](./migration-guides.md) is the reading list, including the Dutch handbook, which this book does not rewrite. Country names and agency names stay on those pages. They are not the navigation of the site.

Handbook guidance: a date belongs to you when you are in that jurisdiction or you sell into it. The next action is an inventory, on [Where to start](../migration-practices/where-to-start.md).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Dates](./dates.md)
- [Migration guides](./migration-guides.md)
- [Where to start](../migration-practices/where-to-start.md)
```

- [ ] **Step 2: Write `docs/standards-timelines/dates.md`**

```markdown
---
title: Dates
sidebar_label: Dates
sidebar_position: 2
displayed_sidebar: standardsTimelinesSidebar
description: The UK, EU, and NIST clocks for post-quantum migration, and whose clocks they are.
---

Use this page when you need two or three dates you can remember, and you need to know whose dates they are.

Three clocks are cited here. They are not the same clock. Handbook guidance: use the clock for the jurisdiction you are in, or that you sell into, and say which one you used.

## What can go wrong

A single "migrate by 2035" date hides a nearer deadline and hides the difference between key establishment and signatures. A date copied from another country becomes a duty the reader does not have. A vendor claim of "quantum safe" with no date and no scope is an assertion, not a clock.

## The clocks

**United Kingdom.** The UK NCSC timelines, modified 3 August 2026, set three dates for organisations. By 2028, define migration goals, carry out discovery, and build an initial plan. By 2031, carry out the early, highest-priority migration activities and refine the roadmap. By 2035, complete migration of systems, services, and products. The same page's 2028 row includes telling suppliers what you need, and the requirement to migrate long-lived hardware roots of trust. For organisations that rely on commodity IT, such as standard browsers, operating systems, and mobile devices, the NCSC says migration should happen as vendors update those services. Custom or specialised software follows the same timetable as larger organisations.

**European Union.** The NIS Cooperation Group roadmap, version 1.1, 11 June 2025, sets milestones for Member States. By 31 December 2026, initial national PQC transition roadmaps have been established, and planning and pilots for high- and medium-risk use cases have been initiated. By 31 December 2030, the PQC transition for high-risk use cases has been completed. By 31 December 2035, the transition for medium-risk use cases has been completed, and the transition for low-risk use cases has been completed as much as feasible. The roadmap treats a use case as high-risk, where confidentiality is protected with public-key cryptography, if a compromise after 10 years or more would still cause significant damage. It says data that needs to remain confidential for at least 10 years should be protected from quantum-computer attacks no later than the end of 2030.

**United States standards clock.** NIST IR 8547, October 2026, says NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under NIST standards and guidelines after 2035. That window is the standards clock. It is not, by itself, a deadline for every organisation. The same report says National Security Memorandum 10's 2035 target for completing the US federal migration remains. For US federal high value assets and high impact systems, and for other federal systems that protect data expected to remain mission-sensitive in 2030, the report says key establishment moves by 31 December 2030 and digital signatures by 31 December 2031. It also says agencies must support TLS 1.3 no later than 2 January 2030.

## What to ask

Which clock applies to this organisation, and which assets fall under an earlier federal or high-risk date? Is the nearer job key establishment, signatures, or a long-lived root of trust?

## Evidence

The record is the clock you adopted, the source and date of that clock, and the list of assets you placed on the nearer date. An assertion that the organisation is "aligned to 2035" is the starting claim.

## A weak answer

"Everyone has until 2035, so this can wait."

## A stronger answer

"We sell into the UK and hold health records with a long secrecy life. The NCSC dates are 2028, 2031, and 2035. The records go on the priority list now because of harvest-now, decrypt-later, which we handle on the priority page. The 2035 date is the finish, not the start."

## Which pass

This page is the reason the first pass exists. It is not the inventory and it is not the cutover.

## Options

No algorithm is chosen here. The EU roadmap says that when migrating, standardised and tested hybrid solutions should be considered whenever feasible and suitable, and that for high-risk use cases quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030. NIST IR 8547 treats hybrid constructions as a temporary hedge and says NIST intends to accommodate them where their use is desired. Record the authority you are following. Do not treat either sentence as a product requirement for every reader.

Canada's government milestone years are not stated on this page. The Canadian reading-list entry is the July 2024 CFDIR guide, on [Migration guides](./migration-guides.md).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Migration guides](./migration-guides.md)
- [Priority](../migration-practices/priority.md)
- [Where to start](../migration-practices/where-to-start.md)
```

- [ ] **Step 3: Write `docs/standards-timelines/migration-guides.md`**

```markdown
---
title: Migration guides
sidebar_label: Migration guides
sidebar_position: 3
displayed_sidebar: standardsTimelinesSidebar
description: The short reading list for a migration programme. The Dutch handbook is listed and is not rewritten.
---

Use this page when you need the programme guide, not another summary of it.

This book does not replace these works. Each line is the job this edition is willing to repeat. Follow the link for the rest.

- [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026. Three dates, who they are for, and the warning that much of the work for commodity IT arrives as a software update.
- [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026. The US standards clock.
- [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023. A short official start: inventory, vendors, and supply chain.
- [NCCoE migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html), October 2026. Start with an inventory, then four guides.
- [Dutch PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024). Diagnose, plan, and execute, and sort urgent adopters, regular adopters, and cryptography suppliers. It is the strategy. This site does not rewrite it.
- [Dutch government resource list](https://www.nldigitalgovernment.nl/overview/quantum-safe-cryptography/useful-resources/). Use the Dutch handbook for strategy and the PQCC roadmap as a supplement.
- [PQCC migration roadmap](https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf), May 2025. Four categories: preparation, baseline understanding, planning and execution, and monitoring and evaluation.
- [ETSI TR 103 619](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf). Three stages: inventory, plan, execute. The migration is of public-key protections. It sets quantum key distribution and quantum random-number generators aside.
- [ETSI TR 104 016](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf), October 2024. Eleven steps, repeated each year, for a programme office. It is not the front door of this site.
- [Canadian CFDIR quantum-readiness guide](https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/documents/Quantum-Readiness%20Best%20Practices%20-%20v04%20-%2010%20July%202024.pdf), July 2024. Actions a leadership team can take without a cryptographer. Canada's government milestone years are not restated here.
- NIST SP 1800-38 volumes A (April 2023), B (December 2023), and C (December 2023) are still preliminary drafts. They are how to run cryptographic discovery, not a finished standard. [Volume A](https://www.nccoe.nist.gov/sites/default/files/2023-04/pqc-migration-nist-sp-1800-38a-preliminary-draft.pdf), [Volume B](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf), [Volume C](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST IR 8547, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- NIST NCCoE migration FAQ, October 2026. [FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- Dutch government, useful resources. [Resource list](https://www.nldigitalgovernment.nl/overview/quantum-safe-cryptography/useful-resources/)
- PQCC, PQC Migration Roadmap, May 2025. [Roadmap PDF](https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf)
- ETSI TR 103 619. [Report](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)
- ETSI TR 104 016, October 2024. [Report](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)
- Canadian Forum for Digital Infrastructure Resilience, Quantum-Readiness Best Practices, July 2024. [Guide](https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/documents/Quantum-Readiness%20Best%20Practices%20-%20v04%20-%2010%20July%202024.pdf)
- NIST SP 1800-38A preliminary draft, April 2023. [Volume A](https://www.nccoe.nist.gov/sites/default/files/2023-04/pqc-migration-nist-sp-1800-38a-preliminary-draft.pdf)

## Related pages

- [Dates](./dates.md)
- [Where to start](../migration-practices/where-to-start.md)
- [Curated references](../resources/curated-references.md)
```

- [ ] **Step 4: Write the migration-practice pages**

Create these files with the front matter and body shown.

`docs/migration-practices/index.md` — `displayed_sidebar: migrationPracticesSidebar`, position 1. Title `Migration practices`. Say this is the operating layer: inventory, priority, the vendor plan, the ability to change algorithms again, and the next pass. Link [Where to start](./where-to-start.md) as the first page. Sources: the CISA/NSA/NIST fact sheet and the Dutch handbook URLs above. Related: Where to start, Inventory, Priority.

`docs/migration-practices/where-to-start.md` — position 2. Title `Where to start`. Open with the decision: do not claim a migration before you can list what has to move. What can go wrong: a roadmap with no inventory, or one project that treats key establishment and signatures as the same job. Stronger practice, from the CISA, NSA, and NIST fact sheet of 17 August 2023: begin with a quantum-readiness roadmap, an inventory of quantum-vulnerable cryptography, a risk assessment, and vendor engagement. The Dutch handbook (December 2024) calls the first step a quantum-vulnerability diagnosis and gives its concrete steps to urgent adopters, organisations that need to start because they cannot afford to delay. Regular adopters, in that handbook, do not need to react yet. Handbook guidance: if you are not sure which you are, read [Keep software updated](../start-here/keep-software-updated.md) and then [Priority](./priority.md). Ask: what data or keys must stay good for a long time, and who owns the stack? Evidence: an inventory record, not a slogan. Weak answer: "We are quantum safe." Stronger answer: "We have a first inventory, a reason the top items are first, and a date for the next pass." This is the first pass. Options point to [Choosing](../algorithm-protocol-options/choosing.md). Also say, citing the Dutch handbook, that it advises against relying on the security of quantum key distribution for the time being. Sources: fact sheet URL and Dutch handbook URL. Related: Inventory, Priority, Keep software updated, Dates.

`docs/migration-practices/inventory.md` — position 3. Title `Inventory`. Decision: list the cryptography before anyone claims it has moved. What can go wrong: a TLS scan treated as the whole estate. The CISA, NSA, and NIST fact sheet says discovery tools may not identify embedded cryptography inside products, and tells organisations to ask vendors for those lists. It also says the inventory should cover network protocols, assets on end-user systems and servers (including firmware and software updates), and cryptographic dependencies in the build pipeline, and should estimate how long the most sensitive datasets need protection. The UK NCSC timelines say the early list is not a formal asset register: understand the nature of each system, quantify the scale, capture version and patch level where you have it, and identify dependencies. NIST SP 1800-38 is still a 2023 preliminary draft; say so and link Volume B for discovery practice. Vista Security, a vendor blog of 13 October 2026, sizes a small-staff inventory to four questions for each system that handles sensitive data or an external connection: what key-establishment and signature algorithms it uses, who controls the software, how long the data must stay confidential, and when the platform or contract renews. Label Vista as a vendor blog, not an authority. Weak answer: "Our scanner found no issues." Stronger answer: "We listed the systems, the algorithms, the owner, the secrecy life, and the renewal, and we marked what a scan cannot see." First pass. Sources: fact sheet, NCSC timelines, SP 1800-38B, Vista. Related: Inventory questions, Priority, Vendor plan.

`docs/migration-practices/priority.md` — position 4. Title `Priority`. Decision: order the work by how long the data or the key must stay good, and split key establishment from signatures. What can go wrong: one programme called "migrate to PQC" that spends the year on signatures while recorded traffic waits. NIST IR 8547, October 2026, describes harvest-now, decrypt-later: adversaries collect encrypted data now and decrypt it when a cryptanalytically relevant quantum computer exists. It says signatures are not vulnerable to that attack. It also says transitioning signatures is urgent for a different reason: the work takes longer, more parties have to coordinate, and some devices cannot update the code that checks a signature later. The EU roadmap's high-risk test, for confidentiality protected by public-key cryptography, is damage that still matters after 10 years or more. Ask: which datasets must still be secret in 2030, and which products cannot change their signature check later? Evidence: a priority record that names the asset, the lifetime, and whether the job is key establishment or signatures. Weak answer: "We will do all cryptography in one project." Stronger answer: "The health records are first because they must stay confidential well past 2030. The firmware root is first for a different reason: we cannot update the check later. The office laptops wait for the vendor update." This is how the first pass chooses its scope. Options: [Key establishment](../algorithm-protocol-options/key-establishment.md) and [Signatures](../algorithm-protocol-options/signatures.md). Sources: NIST IR 8547 and the EU roadmap. Related: Dates, Key establishment, Signatures, Protect this first.

`docs/migration-practices/vendor-plan.md` — position 5. Title `Vendor plan`. Decision: what to ask the organisation that owns the stack, and how to keep the answer. What can go wrong: a sales sentence with no date, no algorithm, and no scope. The fact sheet urges organisations to ask vendors for a quantum-readiness roadmap that describes how they will migrate, including timelines for testing and integration, for both on-premises and cloud products, and to plan contract changes so new products arrive with PQC and older products can be upgraded. The UK NCSC says that where you rely entirely on commodity platforms, the provider delivers the upgrade, and your work is the timely refresh. Where you do not, you choose an approach per system. Ask, in writing: which products, which algorithms, which date, and what happens to hardware that cannot be updated. Evidence is the tracking sheet on [Vendor questions](../resources/vendor-questions.md): vendor, question, answer, date, and source. Weak answer: "They told us on a call that they are quantum safe." Stronger answer: "The vendor's roadmap, dated, says hybrid key establishment in this product line in this year, and says signatures are not in that release. We stored the page we were shown." This pass can run beside the inventory. Options stay on the choosing page. Link supplier evidence onward to the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/practices-controls/supplier-assurance-procurement/) and say that link is not the authority for a post-quantum date. Sources: fact sheet and NCSC timelines. Related: Vendor questions, Choosing, Changing algorithms again.

`docs/migration-practices/changing-algorithms-again.md` — position 6. Title `Changing algorithms again`. Decision: can you change algorithm again after this pass? What can go wrong: a one-time swap that assumes the algorithm names will not move. The Dutch handbook says stakeholders should remain cryptographically agile so they can adapt to new developments. NIST IR 8547 says hybrid solutions, when used, are typically expected to be temporary measures that lead to a second transition to tools that use only post-quantum algorithms, and that quantum-vulnerable and quantum-resistant algorithms will be used side by side during the transition. Handbook guidance: crypto-agility here means that operating capability. It is not a product. Ask: who can change the algorithm in this system, and what record shows the current one? Evidence: a named owner and a place where the algorithm in use is written down. Weak answer: "We picked an algorithm, so we are done." Stronger answer: "This pass turns on the construction our authority defends. The inventory names the algorithm. The next pass has a date." This page is the capability. [The next pass](./next-pass.md) is the rhythm. Sources: Dutch handbook and NIST IR 8547. Related: The next pass, Vendor plan, Choosing.

`docs/migration-practices/next-pass.md` — position 7. Title `The next pass`. Decision: when this estate will be looked at again. What can go wrong: a programme that ends when the first product ships. ETSI TR 104 016, October 2024, is the programme-office version: eleven steps, repeated each year, because an estate does not move in one cut. This site does not teach the eleven step names. PQCC's May 2025 roadmap puts monitoring and evaluation last: track the migration, keep the documentation, and reassess as quantum capabilities change. The UK NCSC's 2031 row is to refine the plan so there is a route to completion by 2035. Ask: what is the date of the next review, and what would make you bring it forward? Evidence: a dated plan that still has open items. Weak answer: "The migration project is closed." Stronger answer: "The first pass covered the long-secrecy data. The next review is dated. Vendor answers that have not arrived are still on the sheet." Sources: ETSI TR 104 016, PQCC PDF, NCSC timelines. Related: Changing algorithms again, Vendor plan, Where to start.

- [ ] **Step 5: Write the option pages**

`docs/algorithm-protocol-options/index.md` — `displayed_sidebar: algorithmProtocolOptionsSidebar`, position 1. Title `Algorithm and protocol options`. Say these pages come after the inventory and the priority. No option is mandatory unless a cited authority requires it for that reader's situation. Link Choosing, Key establishment, Signatures, and Long-lived roots. On first use, gloss ML-KEM as the NIST key-establishment algorithm, and ML-DSA and SLH-DSA as the two NIST signature algorithms. Sources: NIST IR 8547. Related: Choosing and Where to start.

`docs/algorithm-protocol-options/choosing.md` — position 2. Title `Choosing an option`. Decision: for this system, which of four options applies: hybrid, pure post-quantum, wait for a vendor update, or do nothing yet. What can go wrong: calling one of them required for every reader when the filed guides do not agree. State each defence:

- The EU NIS Cooperation Group roadmap, 11 June 2025, says standardised and tested hybrid solutions should be considered whenever feasible and suitable, and that for high-risk use cases quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030.
- The Dutch handbook, December 2024, says Germany, France, and the Netherlands advocate deployment of PQC in hybrid combinations with established cryptography, and that the UK recommends hybridisation only when absolutely necessary.
- NIST IR 8547, October 2026, says hybrid solutions are often a hedge, add complexity, and are typically a temporary measure on the way to post-quantum-only tools. NIST intends to accommodate hybrid techniques where their use is desired. It also says that where a hybrid key-establishment technique is used, at least one input should come from an approved scheme. Do not print the parameter table.
- Waiting for a vendor update is the UK NCSC path for commodity IT: browsers, operating systems, and mobile devices pick up the change from the vendor. Custom software does not.
- Doing nothing yet matches the Dutch handbook's regular adopters, who do not need to react yet. The same handbook tells an organisation on the boundary to follow the urgent-adopter advice. Long-lived sensitive data is the urgent case. See [Priority](../migration-practices/priority.md).

The Dutch handbook advises against relying on the security of quantum key distribution for the time being. Quantum random-number generators are outside this book; ETSI TR 103 619 sets them aside with quantum key distribution.

FIPS 203, FIPS 204, and FIPS 205 are the NIST algorithm standards named by the UK NCSC timelines (ML-KEM, ML-DSA, and SLH-DSA). This edition does not link them and does not reprint their parameters.

Weak answer: "Hybrid is required." Stronger answer: "For this high-risk confidentiality system we are following the EU roadmap and will not leave a quantum-vulnerable public-key mechanism standing alone after 2030. For the commodity laptops we are waiting for the vendor update, which is the NCSC path." Sources: EU roadmap, Dutch handbook, NIST IR 8547, NCSC timelines, ETSI TR 103 619. Related: Key establishment, Signatures, Vendor plan, Keep software updated.

`docs/algorithm-protocol-options/key-establishment.md` — position 3. Title `Key establishment`. Decision: this is the confidentiality job. What can go wrong: treating it as the same project as signatures. NIST IR 8547 says harvest-now, decrypt-later applies where symmetric keys established by a public-key scheme protect confidentiality, including recorded network sessions and encrypted email. It says authentication is not that problem. It says ML-KEM, specified in FIPS 203, is at this time the only approved post-quantum key-establishment scheme based on public-key cryptography, and it recommends ML-KEM-768 as the default parameter set. Do not reprint the other parameter sets. The UK NCSC timelines say popular browsers can agree a post-quantum key using a hybrid of traditional key exchange and ML-KEM, and that an exact industry-wide mechanism was not yet standardised, so further updates can be expected. Ask: which channels carry data with a long secrecy life, and who configures the key establishment? Evidence: a configuration or a vendor page that shows the construction in use, stored on the tracking sheet. Weak answer: "TLS is done." Stronger answer: "The VPN that carries the health records is the first key-establishment item. Signatures on the firmware are a separate item." Link device key handling onward to the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/technology-options/signing-keys-credentials/) and key provisioning onward to the [Secure-by-Design Handbook](https://www.securebydesignhandbook.com/docs/implementation/build-phase/key-provisioning). Say those links are not the authority for the post-quantum clock. Sources: NIST IR 8547 and NCSC timelines. Related: Priority, Signatures, Choosing, Vendor plan.

`docs/algorithm-protocol-options/signatures.md` — position 4. Title `Signatures`. Decision: signatures are a different migration from key establishment. What can go wrong: delaying them because they are not a harvest-now, decrypt-later problem, and then discovering the PKI and the verifiers cannot move in the time you have left. NIST IR 8547 says signatures are not vulnerable to harvest-now, decrypt-later. It says the transition is still urgent because it takes longer and more parties must coordinate. It says an authentication system remains secure until the algorithm can be broken at the time of authentication, and that supporting a quantum-resistant algorithm means upgrading the systems that perform and accept the authentication, including the PKI. FIPS 204 specifies ML-DSA and FIPS 205 specifies SLH-DSA; name them with that gloss and do not link the FIPS. Ask: who has to change at the same time, and can the checker be updated later? Evidence: the list of parties and the date they can move. Weak answer: "Signatures can wait until quantum computers arrive." Stronger answer: "The document-signing service has a long coordination lead. It is on this year's plan for that reason. The recorded-traffic problem is on the key-establishment page." If the checker cannot be updated later, go to [Long-lived roots](./long-lived-roots.md). Onward links: [Secure Boot](https://www.securebydesignhandbook.com/docs/implementation/build-phase/secure-boot) and [signing, keys, and credentials](https://supplychainsecurityhandbook.com/technology-options/signing-keys-credentials/). Sources: NIST IR 8547. Related: Long-lived roots, Key establishment, Priority, I own the product dates.

`docs/algorithm-protocol-options/long-lived-roots.md` — position 5. Title `Long-lived roots`. Decision: a firmware or trust root that cannot update its signature check later has to be designed for a post-quantum signature now, if it will still be in use when a cryptanalytically relevant quantum computer exists. NIST IR 8547 says that in those cases the devices should be designed to require quantum-resistant signatures on the executable code. It says stateful hash-based schemes, LMS and XMSS in SP 800-208, are not for general use because the signer must never use a one-time key twice, and that they may be useful for software and firmware signing. The UK NCSC timelines list LMS and XMSS as algorithms with a more limited set of uses, and the 2028 plan row includes long-lived hardware roots of trust. SLH-DSA is the stateless hash-based signature; name it and do not turn it into its own page. What can go wrong: a general-purpose stateful scheme without a state-control story, or a root of trust left on a signature the device can never replace. Ask: can this device update its verifier in the field? Evidence: the product decision, the lifetime, and the algorithm family, written down. Weak answer: "We will patch the boot check later." Stronger answer: "This product cannot update the verifier. The 2028 plan includes the root of trust. We are using a firmware-signing construction the cited guidance allows, and we have said how state is controlled if the scheme is stateful." Onward: [Secure OTA updates](https://www.securebydesignhandbook.com/docs/implementation/build-phase/ota-updates) for the update path this book does not re-explain. Sources: NIST IR 8547 and NCSC timelines. Related: Signatures, I own the product dates, Vendor plan.

- [ ] **Step 6: Write the resource pages**

`docs/resources/index.md` — `displayed_sidebar: resourcesSidebar`, position 1. Title `Resources`. Say the kit earns its place by helping a decision: questions, a checklist, a tracking sheet, one worked example, a glossary, and the works this edition cites. Link each child. Sources: the fact sheet URL. Related: Inventory questions and Curated references.

`docs/resources/inventory-questions.md` — position 2. Title `Inventory questions`. Say when to use it: the first pass, including a small staff. The artifact is a list of questions, each tied to a filed source:

1. Which systems handle sensitive data or an external connection? (Vista, labelled a vendor blog, 13 October 2026, as a sizing.)
2. For each of those, what key-establishment algorithm and what signature algorithm are in use? (Vista sizing; the split itself is NIST IR 8547.)
3. Who controls the software: you, a vendor, or an open-source project? (Vista sizing.)
4. How long must the data stay confidential? (CISA, NSA, and NIST fact sheet: estimate the length of protection.)
5. When does the platform or contract renew? (Vista sizing.)
6. What can a scan not see, including embedded cryptography, and which vendor will you ask? (Fact sheet.)
7. For the UK NCSC early list: what is the nature of the system, the scale, the version and patch level where you have it, and the dependencies? (NCSC timelines.)

Weak record: a tool report with no owner and no secrecy life. Stronger record: a spreadsheet that answers the questions and marks the gaps. Sources: Vista, fact sheet, NCSC timelines, NIST IR 8547. Related: Inventory, Prioritisation checklist, Vendor questions.

`docs/resources/prioritisation-checklist.md` — position 3. Title `Prioritisation checklist`. When to use it: after a first inventory, before a budget. Checklist items, each a yes or no with a note:

- Does this data still need to be secret after 10 years, or in 2030? If yes, it is on the key-establishment list. Cite the EU high-risk test and NIST IR 8547's harvest-now, decrypt-later description.
- Is this a signature that many parties must change together? If yes, it is on the signature list even though it is not a harvest-now problem. Cite NIST IR 8547.
- Can the verifier be updated later? If no, it is on the long-lived root list. Cite NIST IR 8547 and the NCSC 2028 root-of-trust row.
- Is this commodity IT that the vendor will update? If yes, the action is to keep it updated, not to redesign it. Cite the NCSC timelines.
- Is the organisation a regular adopter with none of the above? The Dutch handbook says regular adopters do not need to react yet. If the answer is uncertain, follow the urgent path.

Sources: EU roadmap, NIST IR 8547, NCSC timelines, Dutch handbook. Related: Priority, Protect this first, Keep software updated.

`docs/resources/vendor-questions.md` — position 4. Title `Vendor questions`. When to use it: before a renewal or a purchase. Questions, from the fact sheet and the NCSC commodity split:

- Which product and version does the answer cover?
- What is the key-establishment construction, and what is the signature construction? Do not accept one phrase for both.
- What is the date, and what is still not in that release?
- What is the vendor's published roadmap? Store the page, not the call.
- What happens to hardware or firmware that cannot be updated?
- How will a later algorithm change be delivered?

Then the tracking-sheet table with columns Vendor, Question, Answer, Date, and Source. One blank example row is enough. State that "they told us on a call" is a weak record, using the Vista blog only as a sizing of that point and labelling it a vendor blog. Sources: fact sheet, NCSC timelines, Vista. Related: Vendor plan, Choosing, Changing algorithms again.

`docs/resources/protect-this-first.md` — position 5. Title `Protect this first`. Label the page as an illustration, not a real organisation. The case: a clinic with long-lived health records on a vendor system, and a device whose firmware signature check cannot be updated in the field. Walk the checklist: the records are first because confidentiality still matters after 10 years (EU roadmap and NIST IR 8547); the firmware root is first for the NCSC 2028 root-of-trust reason and the NIST IR 8547 code-signing case; the clinic's browsers and laptops stay on the keep-updated path (NCSC). The leave-with is one page: the two assets, why each is first, the vendor question, and the date of the next pass. Sources: EU roadmap, NIST IR 8547, NCSC timelines. Related: Priority, Vendor questions, I own the product dates.

`docs/resources/glossary.md` — position 6. Title `Glossary`. Each entry is the handbook's wording unless it cites a source:

- Post-quantum cryptography (PQC). Handbook wording: public-key cryptography intended to stay secure against a cryptographically relevant quantum computer.
- Hybrid. Handbook wording, aligned with NIST IR 8547's description: a classical algorithm and a post-quantum algorithm used together so the exchange or the signature still holds if either one fails. Cite NIST IR 8547 for the "secure if at least one component is secure" property.
- Harvest-now, decrypt-later. NIST IR 8547's name for collecting encrypted data now and decrypting it later. It applies to confidentiality, not to authentication.
- ML-KEM, ML-DSA, SLH-DSA. Handbook gloss: the NIST key-establishment algorithm, and the two NIST signature algorithms. The UK NCSC timelines name them as FIPS 203, FIPS 204, and FIPS 205.
- Urgent adopter and regular adopter. The Dutch handbook's split: urgent adopters need to start because they cannot afford to delay; regular adopters do not need to react yet.
- Crypto-agility. Handbook wording on this site: the ability to change algorithms again. The Dutch handbook tells stakeholders to remain cryptographically agile so they can adapt.

Sources: NIST IR 8547, NCSC timelines, Dutch handbook. Related: Choosing, Priority, Where to start.

`docs/resources/curated-references.md` — position 7. Title `Curated references`. Repeat the migration-guides list and no other works. Add one line that these are the works this edition cites, and that a page's own Sources list is the subset that page used. Sources: the same first https link as migration guides (the NCSC timelines URL is enough for the checker; include the full set so the page matches the list). Related: Migration guides and Dates.

- [ ] **Step 7: Write the Start here pages**

Every Start here file uses `displayed_sidebar: startHereSidebar`.

`docs/start-here/index.md` — position 1. Title `Start here`. Say the five seats are paths into the same pages, plus one short page for readers whose software will pick up the change in an update. Link all six child pages. Do not make Keep software updated sound like a homepage card; say it is the page for a regular adopter. Sources: Dutch handbook URL. Related: Where to start and the five seat pages.

For each seat page, state the decisions, the reading order as links in the spec's order, what they leave with, a weak answer, and a stronger answer. Use these bodies:

- `own-the-plan.md`, position 2. Decisions: what has to move, what is first, and what the one-page plan says. Reading order: Where to start, Inventory, Priority, Dates, The next pass, Inventory questions, Prioritisation checklist. Leave with an inventory, a priority, and a one-page plan. Weak: "We have a PQC programme." Stronger: "The inventory names the long-secrecy systems, the priority says why they are first, and the plan has a next review date." Sources: fact sheet and NCSC timelines.
- `own-the-product-dates.md`, position 3. Decisions: which release has to carry a post-quantum signature or a root of trust, and what waits for a vendor. Reading order: Where to start, Dates, Priority, Signatures, Long-lived roots, Vendor plan, Protect this first. Leave with a release date tied to one asset, and a vendor question if someone else owns the stack. Weak: "The platform will handle it." Stronger: "This product cannot update its firmware check. That release is on the 2028 root-of-trust work from the NCSC timelines. The laptops are on the vendor-update path." Sources: NCSC timelines and NIST IR 8547.
- `ask-a-vendor.md`, position 4. Decisions: what you will ask, and where the answer will be stored. Reading order: Vendor plan, Vendor questions, Key establishment, Signatures, Changing algorithms again. Leave with written questions and a tracking sheet. Weak: "They said they are quantum safe." Stronger: "The sheet has the product, the question, the answer, the date, and the page we were shown, and it splits key establishment from signatures." Sources: fact sheet.
- `show-evidence.md`, position 5. Decisions: which records would let someone else check the inventory, the priority, the vendor answer, and what shipped. Reading order: Where to start, Inventory, Priority, Vendor plan, Key establishment, Signatures. Leave with that list. Weak: a slide that says quantum safe. Stronger: the inventory, the priority note, the tracking sheet, and a configuration or certificate that shows the change. Say an assertion is the starting claim and a configuration is what shows the change. Sources: fact sheet. Onward link for supplier evidence packages: [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/practices-controls/supplier-assurance-procurement/).
- `change-a-protocol.md`, position 6. Decisions: which job is changing, which option an authority defends, and how you roll back. Reading order: Choosing, Key establishment, Signatures, Changing algorithms again, Vendor plan. Leave with those three things. Weak: "We enabled PQC." Stronger: "We changed key establishment on one channel, the EU roadmap is the authority we are following for that high-risk system, and the rollback steps were written before the pilot." The pilot-with-rollback sentence may cite Vista only as a vendor-blog sizing, labelled as such. Sources: EU roadmap and Vista.
- `keep-software-updated.md`, position 7. Short. The UK NCSC timelines say that for organisations using mainly commodity IT, migration should happen as vendors update browsers, operating systems, and mobile devices. The Dutch handbook says regular adopters do not need to react to the quantum threat yet, and that an organisation on the boundary should follow the urgent advice. Handbook guidance: if you hold long-lived sensitive data or you ship a product that cannot update its signature check, you are on [I own the plan](./own-the-plan.md), not on this page. Reading order: this page, then Dates, then Inventory questions if you are not sure. Sources: NCSC timelines and the Dutch handbook. Related: Dates, Inventory questions, I own the plan, Where to start.

- [ ] **Step 8: Run the sources check**

Run: `npm run check:sources`

Expected: exit 0. If it prints a path, that file is missing `## Sources` or is missing an `https://` link inside that section, before `## Related pages`.

- [ ] **Step 9: Do not commit**

---

### Task 5: Maintainer notes

**Files:**
- Create: `README.md`
- Create: `purpose-and-positioning.md`
- Create: `navigation-structure.md`
- Create: `style-guide.md`
- Create: `brand-guidelines.md`

**Interfaces:**
- Consumes: the decisions already implemented in Tasks 3 and 4
- Produces: root notes a contributor can read. They contain no links into a private wiki and no `W264C` paths.

- [ ] **Step 1: Write README.md**

Include: the one-sentence purpose (the tagline); Node 20; `npm install`; `npm start`; `npm run typecheck`; `npm run test:sources`; `npm run check:sources`; `npm run build`. Point at the four maintainer notes and at `planning/superpowers/specs/2026-11-09-pqc-handbook-design.md`. State that `.ai-helper-files/` is local reference material and is gitignored. State that this repository does not contain a deploy workflow.

- [ ] **Step 2: Write the four notes from the spec**

`purpose-and-positioning.md` states the reader, the four questions (what has to move and by when, what to protect first, what to ask a vendor, how anyone will know), the four layers, and the non-goals in the spec, including the works this edition does not cite.

`navigation-structure.md` copies the book map and the Start here table from the spec, and states that the slugs in that table are the ones the site uses.

`style-guide.md` states the decision-page order, the citation rule, the sourcing gate, and the spelling.

`brand-guidelines.md` states the name PQC Handbook, the domain `pqchandbook.com`, the palette, the type, and that the logo is the shared shield.

- [ ] **Step 3: Do not commit**

---

### Task 6: Verify the site

**Files:**
- Test: the built site and the four local URLs in the spec

**Interfaces:**
- Consumes: Tasks 1 to 5
- Produces: a passing typecheck, sources check, and production build

- [ ] **Step 1: Run the completion checks**

Run:

```bash
npm run typecheck
npm run test:sources
npm run check:sources
npm run build
```

Expected: each command exits 0. `build/` contains `index.html` and `start-here/own-the-plan/index.html`.

- [ ] **Step 2: Read four pages locally**

Run: `npm run serve` and open:

- `http://localhost:3000/`
- `http://localhost:3000/start-here/own-the-plan/`
- `http://localhost:3000/migration-practices/priority/`
- `http://localhost:3000/resources/vendor-questions/`

Confirm the navbar has the four sections and GitHub, and does not have a blog. Confirm each of the three handbook pages shows a Sources heading with a visible external link. Confirm the priority page does not mention Cloudflare, Google Cloud, AWS, Canada CCCS years, or a survey percentage.

- [ ] **Step 3: Do not commit**

---

## Self-review notes

Spec coverage is Task 3 (shell, palette, homepage, footer, gitignore), Task 4 (every URL, citation gate, sister links), Task 5 (maintainer notes), and Tasks 1, 2, and 6 (sources check and the completion commands). Out of scope items are in Global Constraints: no workflow, no blog, no new logo, no per-algorithm pages, no publication of `.ai-helper-files/`.

Task 4 Steps 1 to 3 are complete Markdown files. Steps 4 to 7 name every file, the required sentences, the sources, and the related links. The implementer turns those sentences into the files and does not add claims beyond them. Sources links use `[label](https://...)`.
