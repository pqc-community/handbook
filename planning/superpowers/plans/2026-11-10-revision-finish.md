# Revision Finish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn on the edition checks, add build-time local search, and verify the chooser, one route, one practice page, and one work product in the browser.

**Architecture:** `findVoiceViolations` becomes the legacy scan plus `findEditionVoiceViolations`. `npm run check:records` then passes against `docs/` and `static/downloads/`. Search is a navbar index built by the production build, with no Algolia account. Sitemap and robots stay as they are.

**Tech Stack:** Node 20, Docusaurus 3.10.1, `@easyops-cn/docusaurus-search-local`.

**Spec:** `planning/superpowers/specs/2026-11-10-site-revision-design.md`

**Previous plan:** `planning/superpowers/plans/2026-11-10-revision-pages.md`

## Global Constraints

- Follow the guards plan's constraints. Do not commit or otherwise write to git.
- Do not add a redirect, an Algolia account, a hand-written sitemap, a numeric score, or a parameter table.
- `static/robots.txt` stays an allow-all file that names `https://pqchandbook.com/sitemap.xml`.
- The sitemap setting in `docusaurus.config.ts` stays `sitemap: {changefreq: 'weekly', priority: 0.5, filename: 'sitemap.xml'}`.
- If `@easyops-cn/docusaurus-search-local` cannot build on Docusaurus 3.10.1, remove it and install `docusaurus-lunr-search` instead, record that package name in a comment above the theme entry, and configure it to index docs. Do not add a hosted search account.

## File map

| File | Responsibility |
| --- | --- |
| `scripts/check-voice.mjs` | `findVoiceViolations` includes the edition scan |
| `package.json` | Search dependency |
| `docusaurus.config.ts` | Local search theme |
| `static/robots.txt` | Unchanged. This plan only reads it |

---

### Task 1: Join the edition voice scan

**Files:**
- Modify: `scripts/check-voice.mjs` (`findVoiceViolations`)
- Test: `scripts/check-voice.test.mjs`

**Interfaces:**
- Consumes: `findEditionVoiceViolations(rootDir) -> string[]` from the guards plan
- Produces: `findVoiceViolations(rootDir)` returns legacy hits and edition hits

- [ ] **Step 1: Extend the clean-tree test**

In `scripts/check-voice.test.mjs`, add:

```js
test('the combined scan flags an edition phrase', () => {
  const violations = withRoot(
    {...extras, 'docs/dates.md': 'Three clocks remain.\n'},
    (root) => findVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/dates.md:1: clocks')));
});
```

Import stays `findVoiceViolations`.

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-voice.test.mjs`

Expected: FAIL because `clocks` is not yet part of `findVoiceViolations`.

- [ ] **Step 3: Concatenate the scans**

Replace the body of `findVoiceViolations` so it returns the existing legacy hits followed by `findEditionVoiceViolations(rootDir)`. Do not scan a file twice for the legacy phrases.

- [ ] **Step 4: Run voice and the repository**

Run: `npm test` then `npm run check:voice`

Expected: both exit 0. A failure of `check:voice` names the file and phrase. Fix that file's prose, not the checker, unless the hit is one of the phrases listed inside `EDITION_PHRASES` in `scripts/check-voice.mjs` itself. The checker file is not under `docs/` and is not in `voiceFiles`, so it is not scanned.

---

### Task 2: Require the record check

**Files:**
- Modify: none, unless `npm run check:records` prints a violation. Then fix the named doc or CSV.

**Interfaces:**
- Consumes: `findRecordViolations` and `EDITION_DATE`
- Produces: a green `npm run check:records` on the repository

- [ ] **Step 1: Run the checker**

Run: `npm run check:records`

Expected: exit 0. If it prints `missing last_reviewed`, add `last_reviewed: 2026-11-10` to that front matter. If it prints `missing CSV link`, add a Markdown link to `/downloads/<file>.csv` on that work-product page. If it prints `header`, replace the CSV's first line with the header in `WORK_PRODUCTS`.

- [ ] **Step 2: Run the full local suite**

Run: `npm test && npm run check:voice && npm run check:sources && npm run check:records && npm run typecheck`

Expected: every command exits 0.

---

### Task 3: Local search

**Files:**
- Modify: `package.json`, `package-lock.json`, `docusaurus.config.ts`

**Interfaces:**
- Consumes: the built docs
- Produces: a search control in the navbar

- [ ] **Step 1: Install the package**

Run: `npm install @easyops-cn/docusaurus-search-local`

Expected: exit 0 and a dependency entry in `package.json`.

- [ ] **Step 2: Register the theme**

Add a `themes` array to `docusaurus.config.ts`:

```ts
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      indexDocs: true,
      indexBlog: false,
      docsRouteBasePath: '/',
    },
  ],
],
```

`docsRouteBasePath` is `'/'` because the docs preset uses `routeBasePath: '/'`.

- [ ] **Step 3: Build**

Run: `npm run build`

Expected: exit 0. If the build fails because the package does not support Docusaurus 3.10.1, run `npm uninstall @easyops-cn/docusaurus-search-local`, run `npm install docusaurus-lunr-search`, replace the theme entry with that package's documented docs-only preset, add a one-line comment naming the package, and run `npm run build` again. Expected on the second attempt: exit 0.

---

### Task 4: Browser pass

**Files:** none.

**Interfaces:**
- Consumes: `npm run build` output, served with `npm run serve` or the build preview
- Produces: the spec's browser evidence

- [ ] **Step 1: Serve the production build**

Run: `npm run serve -- --port 3456`

Open `http://127.0.0.1:3456/`.

- [ ] **Step 2: Exercise the four pages**

On `/`, confirm the first action is the six situation links, Learn the basics is separate, the hero heading is PQC Handbook, and there is no link whose text is "Where to start" or "Start here". Open the vendor-managed route and confirm its first content link is commodity software. Open `/migration-practices/priority/` and confirm one heading `Example` contains both the insufficient record and the decision-ready record. Open `/resources/inventory-record/` and confirm the CSV link downloads `inventory-record.csv` whose first line is the inventory header from `WORK_PRODUCTS`.

Repeat those four URLs in the dark theme and at a narrow viewport, about 390 pixels wide. Confirm the choice grid stacks in one column and the last-reviewed line is visible on the three doc pages.

- [ ] **Step 3: Confirm search files that were already present**

Run:

```bash
rg -n "Sitemap: https://pqchandbook.com/sitemap.xml" static/robots.txt
test -f build/sitemap.xml && echo sitemap-ok
```

Expected: the robots line matches, and the command prints `sitemap-ok`.

- [ ] **Step 4: Stop the server**

Stop the `npm run serve` process. The edition is done when Tasks 1 to 3 exit 0 and this pass finds no broken primary link. Do not claim a screen-reader audit or a session with representative readers. Those remain named only on `/resources/editorial-policy/`.
