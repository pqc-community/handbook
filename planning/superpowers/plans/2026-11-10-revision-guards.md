# Revision Guards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the edition voice checks and the work-product record checks, and rewrite the maintainer rules so later plans can follow them, without yet failing the published pages.

**Architecture:** Fixture tests drive two new exported checkers. `findVoiceViolations` stays the legacy scan so `npm run check:voice` remains green on today's pages. `findEditionVoiceViolations` is exported for tests now and is joined into the legacy scan by the finish plan, after the pages have been rewritten. `findRecordViolations` reads `docs/` and `static/downloads/` from a root directory. The finish plan is the first plan allowed to run it against the repository.

**Tech Stack:** Node 20, `node:test`, Docusaurus 3.10.1. No new dependency.

**Spec:** `planning/superpowers/specs/2026-11-10-site-revision-design.md`

## Global Constraints

- This spec wins where it conflicts with the 9 November designs. Do not rewrite those historical specs.
- Plain British English: organisation, programme, labelled.
- Body prose is complete sentences. `must` and `shall` appear only in a sentence that also names one of: NCSC, NIST, FIPS, EU, NIS, ASD, ACSC, CISA, NSA, AIVD, ETSI, CFDIR.
- Edition phrases rejected by `findEditionVoiceViolations`: `the clock`, `clocks`, `secrecy life`, `the stack`, `the next pass`, `weak answer`, `stronger answer`, `five responsibilities`, `where to start`, `start here`.
- `EDITION_DATE` is `2026-11-10`.
- Do not commit, push, tag, or otherwise write to git. Git read commands are allowed.
- Do not enable the edition scan inside `findVoiceViolations` in this plan. The finish plan does that.
- Do not run `node scripts/check-records.mjs` against the repository in this plan. It is expected to fail until the finish plan.

## File map

| File | Responsibility |
| --- | --- |
| `scripts/check-voice.mjs` | Legacy scan plus the edition scan and the modal-verb scan |
| `scripts/check-voice.test.mjs` | Fixture tests for both scans |
| `scripts/check-records.mjs` | `last_reviewed` and CSV header contract |
| `scripts/check-records.test.mjs` | Fixture tests for that contract |
| `package.json` | `test` runs the three test files. `check:records` runs the records script |
| `style-guide.md` | Public voice, page shapes, and source list for this edition |
| `purpose-and-positioning.md` | Chooser purpose, and the pointer to this edition's spec |

---

### Task 1: Edition voice scan

**Files:**
- Modify: `scripts/check-voice.mjs`
- Test: `scripts/check-voice.test.mjs`

**Interfaces:**
- Consumes: existing `findVoiceViolations(rootDir) -> string[]`
- Produces: `EDITION_PHRASES` (string array, in the order below), `AUTHORITY_PATTERN` (RegExp), `findEditionVoiceViolations(rootDir) -> string[]`. Violation strings keep the existing shape `relative/path:line: phrase`. A modal hit uses the phrase `must or shall`. `findVoiceViolations` does not call the edition scan.

- [ ] **Step 1: Write the failing tests**

Add these tests to `scripts/check-voice.test.mjs` after the existing imports of `findVoiceViolations`. Import `findEditionVoiceViolations` from the same module.

```js
test('flags an edition phrase and a modal verb without an authority', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/dates.md': 'Use the clock for this organisation.\n',
      'docs/modal.md': 'The reader must record the owner.\n',
      'docs/requirement.md': 'Requirement. NIST IR 8547 says agencies must support TLS 1.3.\n',
    },
    (root) => findEditionVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/dates.md:1: the clock')));
  assert.ok(violations.some((hit) => hit.includes('docs/modal.md:1: must or shall')));
  assert.equal(violations.some((hit) => hit.includes('docs/requirement.md')), false);
});

test('accepts a page that uses the edition terms', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/clean.md': 'Record the applicable migration timeline and the data confidentiality period.\n',
    },
    (root) => findEditionVoiceViolations(root),
  );
  assert.deepEqual(violations, []);
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `node --test scripts/check-voice.test.mjs`

Expected: FAIL because `findEditionVoiceViolations` is not exported.

- [ ] **Step 3: Add the edition scan**

In `scripts/check-voice.mjs`, add and export:

```js
export const EDITION_PHRASES = [
  'the clock',
  'clocks',
  'secrecy life',
  'the stack',
  'the next pass',
  'weak answer',
  'stronger answer',
  'five responsibilities',
  'where to start',
  'start here',
];

export const AUTHORITY_PATTERN = /\b(NCSC|NIST|FIPS|EU|NIS|ASD|ACSC|CISA|NSA|AIVD|ETSI|CFDIR)\b/;

const MODAL_PATTERN = /\b(must|shall)\b/i;

export function findEditionVoiceViolations(rootDir) {
  const violations = [];
  for (const file of voiceFiles(rootDir)) {
    const relative = path.relative(rootDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      for (const phrase of EDITION_PHRASES) {
        if (lower.includes(phrase)) {
          violations.push(`${relative}:${index + 1}: ${phrase}`);
        }
      }
      if (MODAL_PATTERN.test(line) && !AUTHORITY_PATTERN.test(line)) {
        violations.push(`${relative}:${index + 1}: must or shall`);
      }
    });
  }
  return violations;
}
```

Leave `findVoiceViolations` calling only `RETIRED_PHRASES`.

- [ ] **Step 4: Run the voice tests**

Run: `node --test scripts/check-voice.test.mjs`

Expected: PASS, including the two existing tests.

---

### Task 2: Record checker

**Files:**
- Create: `scripts/check-records.mjs`
- Create: `scripts/check-records.test.mjs`
- Modify: `package.json` scripts

**Interfaces:**
- Consumes: `EDITION_DATE` defined in this task
- Produces: `EDITION_DATE = '2026-11-10'`, `WORK_PRODUCTS` (array of `{page, csv, header}`), `findRecordViolations(rootDir) -> string[]`. `page` is relative to `docs/`. `csv` is relative to the root. `header` is the exact first line, with no trailing comma.

`WORK_PRODUCTS` is exactly:

| page | csv | header |
| --- | --- | --- |
| `resources/inventory-record.md` | `static/downloads/inventory-record.csv` | `system,owner,key-establishment algorithm,signature algorithm,software control,confidentiality period,renewal,version,dependencies,not visible to a scan,confidence` |
| `resources/priority-record.md` | `static/downloads/priority-record.csv` | `asset,confidentiality period,job,impact,lead time,dependencies,supplier readiness,decision,reason,source,subsequent review` |
| `resources/vendor-response-log.md` | `static/downloads/vendor-response-log.csv` | `supplier,product and version,question,answer,date,source,judgement,follow-up,decision` |
| `resources/migration-plan.md` | `static/downloads/migration-plan.csv` | `asset,owner,why it is included,applicable timeline,authority,milestone,dependency,next action,subsequent review` |
| `resources/change-record.md` | `static/downloads/change-record.csv` | `system,change,option,authority,pilot scope,tests,rollback trigger,who can roll back,deployed-state check,result,date` |
| `resources/evidence-record.md` | `static/downloads/evidence-record.csv` | `claim,record,source,date,owner,subsequent review` |
| `resources/review-log.md` | `static/downloads/review-log.csv` | `date,what was reviewed,unresolved items,owner,next review` |

- [ ] **Step 1: Write the failing test**

Create `scripts/check-records.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { EDITION_DATE, WORK_PRODUCTS, findRecordViolations } from './check-records.mjs';

function withRoot(files, run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-records-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(root, name);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  try {
    return run(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function cleanTree() {
  const files = {
    'docs/guide.md': `---\nlast_reviewed: ${EDITION_DATE}\n---\n\n## Sources\n\n- [NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)\n`,
  };
  for (const product of WORK_PRODUCTS) {
    files[`docs/${product.page}`] = `---\nlast_reviewed: ${EDITION_DATE}\n---\n\n[${product.csv}](/${product.csv.replace('static/', '')})\n\n## Sources\n\n- [NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)\n`;
    files[product.csv] = `${product.header}\n`;
  }
  return files;
}

test('accepts the edition date and matching CSV headers', () => {
  const violations = withRoot(cleanTree(), (root) => findRecordViolations(root));
  assert.deepEqual(violations, []);
});

test('flags a missing date, a missing CSV link, and a wrong header', () => {
  const files = cleanTree();
  files['docs/guide.md'] = '---\ntitle: Guide\n---\n';
  files['docs/resources/inventory-record.md'] = `---\nlast_reviewed: ${EDITION_DATE}\n---\n\nNo download here.\n`;
  files['static/downloads/priority-record.csv'] = 'asset,owner\n';
  const violations = withRoot(files, (root) => findRecordViolations(root));
  assert.ok(violations.some((hit) => hit.includes('docs/guide.md: missing last_reviewed')));
  assert.ok(violations.some((hit) => hit.includes('docs/resources/inventory-record.md: missing CSV link')));
  assert.ok(violations.some((hit) => hit.includes('static/downloads/priority-record.csv: header')));
});
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-records.test.mjs`

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement the checker**

Create `scripts/check-records.mjs` with `EDITION_DATE`, `WORK_PRODUCTS` as the table above, a markdown walk of `docs/`, and `findRecordViolations`. A page violates when its text does not contain a line `last_reviewed: 2026-11-10`. A work product violates when the page text does not contain the `csv` path, when the CSV file is missing, or when the CSV's first line differs from `header`. Follow the `fileURLToPath` main-guard pattern in `scripts/check-sources.mjs`, and exit 1 when the violation list is non-empty.

CSV links in pages use the public path `/downloads/...`. The checker looks for the root-relative `static/downloads/...` string or the public `/downloads/...` string. The test above writes the public path `/downloads/inventory-record.csv` because `product.csv.replace('static/', '')` produces `downloads/inventory-record.csv` and the template prefixes `/`. Accept either form:

```js
function linksToCsv(pageText, csv) {
  const publicPath = `/${csv.replace(/^static\//, '')}`;
  return pageText.includes(csv) || pageText.includes(publicPath);
}
```

- [ ] **Step 4: Register the scripts**

In `package.json`, add:

```json
"test": "node --test scripts/check-voice.test.mjs scripts/check-sources.test.mjs scripts/check-records.test.mjs",
"check:records": "node scripts/check-records.mjs"
```

Keep the existing `test:voice`, `test:sources`, `check:voice`, and `check:sources` scripts.

- [ ] **Step 5: Run the tests**

Run: `npm test`

Expected: PASS. Do not run `npm run check:records` against the repository.

---

### Task 3: Maintainer rules

**Files:**
- Modify: `style-guide.md`
- Modify: `purpose-and-positioning.md`

**Interfaces:**
- Consumes: the edition terms and the six page shapes in the spec
- Produces: maintainer docs later tasks can quote. These two files are not in the voice scan.

- [ ] **Step 1: Replace the style guide**

Rewrite `style-guide.md` so it states the six shapes (chooser, route, learn, practice, work product, reference index), the practice headings in spec order, the four labels (**Requirement**, **Authority recommendation**, **Handbook practice**, **Example**), the four replacement terms, and the source order. Remove the Vista Security row from the allowed-source table. Add the 5 November 2026 vendor guide, the ASD planning publication, and the three FIPS URLs from the spec. State that FIPS 203, 204, and 205 may be linked and that parameter tables stay out. State that `findVoiceViolations` still enforces the legacy phrases, and that `findEditionVoiceViolations` is joined to it in the finish plan.

- [ ] **Step 2: Update purpose and positioning**

In `purpose-and-positioning.md`, replace the "Four questions" and "Four layers" sections with the chooser purpose: one homepage, six choices, Learn the basics apart from them, and the four reference sections behind the routes. Point the Authority section at `planning/superpowers/specs/2026-11-10-site-revision-design.md`. Keep the sister-site boundary and the non-goals. Remove the sentence that says this edition does not link FIPS 203, 204, and 205. Keep the sentence that parameter tables stay out.

- [ ] **Step 3: Confirm the legacy voice check still passes**

Run: `npm test` and `npm run check:voice` and `npm run check:sources` and `npm run typecheck`

Expected: all four commands exit 0. `npm run build` is not required in this plan.
