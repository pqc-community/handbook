# Voice Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every visitor-facing string match the approved voice-pass spec, and fail a checker if a retired campaign phrase comes back.

**Architecture:** A Node script scans `docs/`, the homepage, the Docusaurus config, and `navigation-structure.md` for the retired phrases. Copy edits are exact replacements in those files. URL paths and `sidebars.ts` document ids stay. The checker is a test and an npm script. It is not wired into the Docusaurus build.

**Tech Stack:** Docusaurus 3.10.1, React 19, TypeScript, Node 20, Node's built-in test runner. No new dependencies.

**Spec:** `planning/superpowers/specs/2026-11-09-voice-pass-design.md`

## Global Constraints

- A sentence changes only when it fails a test in the spec. The replacements in this plan are the full set. Do not rewrite a sentence this plan does not name.
- A replacement keeps the same fact, date, duty, quotation, source name, and link. Do not add an exception to the spec. This audit found no sentence that had to stay because a smoother line would change a sourced duty.
- Quoted weak answers stay in the casual voice.
- Decision-page headings stay: "What can go wrong", "A stronger practice", "What to ask", "Evidence", "A weak answer", "A stronger answer", "Which pass", "Options", "Sources", and "Related pages".
- The tagline stays: `A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.`
- Navbar labels stay: Standards and timelines, Migration practices, Algorithm and protocol options, Resources.
- URL paths stay. `sidebars.ts` document ids stay. **Keep software updated** stays as a label.
- Spelling stays British: organisation, programme, labelled.
- Do not edit `planning/superpowers/specs/2026-11-09-pqc-handbook-design.md`, the first-edition plan, or `.superpowers/sdd/`.
- Do not commit, push, tag, or otherwise write to git. The user allows git read commands only.

## File map

| File | Responsibility |
| --- | --- |
| `scripts/check-voice.mjs` | Finds retired phrases in the edit set |
| `scripts/check-voice.test.mjs` | Unit tests for that finder |
| `docs/start-here/*.md` | New seat labels, Outcome headings, Start here briefing |
| `docs/resources/protect-this-first.md` | Outcome heading and the new related-page label |
| `docs/algorithm-protocol-options/signatures.md` | New related-page label |
| `docs/algorithm-protocol-options/long-lived-roots.md` | New related-page label, and one plainness sentence |
| `docs/migration-practices/index.md` | Drop "operating layer" |
| `docs/migration-practices/changing-algorithms-again.md` | Drop "the rhythm" and "turns on" |
| `docs/resources/index.md` | Drop the "earns its place" metaphor |
| `docs/standards-timelines/index.md` | Drop "landed on your desk" |
| `src/pages/index.tsx` | Homepage heading, cards, and closing heading |
| `docusaurus.config.ts` | Footer labels only |
| `navigation-structure.md` | Seat table labels and the outcome sentence |
| `package.json` | `test:voice` and `check:voice` scripts |

---

### Task 1: Voice checker

**Files:**
- Create: `scripts/check-voice.mjs`
- Create: `scripts/check-voice.test.mjs`
- Modify: `package.json` (scripts block)
- Test: `scripts/check-voice.test.mjs`

**Interfaces:**
- Consumes: nothing
- Produces: `findVoiceViolations(rootDir) -> string[]`. Each hit is `{relative-posix-path}:{line}: {phrase}` with the phrase in lower case. `voiceFiles(rootDir) -> string[]` is the edit set: every `docs/**/*.md` file plus `src/pages/index.tsx`, `docusaurus.config.ts`, and `navigation-structure.md`.

- [ ] **Step 1: Write the failing test**

Create `scripts/check-voice.test.mjs`:

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findVoiceViolations } from './check-voice.mjs';

function withRoot(files, run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-voice-'));
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

const extras = {
  'src/pages/index.tsx': 'export default function Home() { return null }\n',
  'docusaurus.config.ts': 'const config = {}\n',
  'navigation-structure.md': '# Navigation\n',
};

test('flags retired phrases and ignores a clean page', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/start-here/own-the-plan.md': 'title: I own the plan\n',
      'docs/clean.md': 'The migration plan\n',
      'src/pages/index.tsx': 'what you leave with\n',
    },
    (root) => findVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/start-here/own-the-plan.md:1: i own the plan')));
  assert.ok(violations.some((hit) => hit.includes('src/pages/index.tsx:1: what you leave with')));
  assert.ok(violations.some((hit) => hit.includes('src/pages/index.tsx:1: leave with')));
  assert.equal(violations.some((hit) => hit.includes('docs/clean.md')), false);
});

test('accepts a tree with none of the retired phrases', () => {
  const violations = withRoot(
    { ...extras, 'docs/clean.md': 'The migration plan\n' },
    (root) => findVoiceViolations(root),
  );
  assert.deepEqual(violations, []);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test scripts/check-voice.test.mjs`

Expected: FAIL because `scripts/check-voice.mjs` does not exist.

- [ ] **Step 3: Write the checker**

Create `scripts/check-voice.mjs`:

```javascript
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const RETIRED_PHRASES = [
  'what you leave with',
  'i own the product dates',
  'i have to ask a vendor',
  'i have to show evidence',
  'i have to change a protocol',
  'i own the plan',
  'choose your path',
  'leave with',
  'operating layer',
  'the rhythm',
];

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

export function voiceFiles(rootDir) {
  return [
    ...walkMarkdown(path.join(rootDir, 'docs')),
    path.join(rootDir, 'src/pages/index.tsx'),
    path.join(rootDir, 'docusaurus.config.ts'),
    path.join(rootDir, 'navigation-structure.md'),
  ];
}

export function findVoiceViolations(rootDir) {
  const violations = [];
  for (const file of voiceFiles(rootDir)) {
    const relative = path.relative(rootDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      for (const phrase of RETIRED_PHRASES) {
        if (lower.includes(phrase)) {
          violations.push(`${relative}:${index + 1}: ${phrase}`);
        }
      }
    });
  }
  return violations;
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const rootDir = path.resolve(process.argv[2] ?? process.cwd());
  const violations = findVoiceViolations(rootDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test scripts/check-voice.test.mjs`

Expected: PASS, 2 tests.

- [ ] **Step 5: Add the npm scripts**

In `package.json`, replace the `scripts` object with:

```json
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "typecheck": "tsc",
    "test:sources": "node --test scripts/check-sources.test.mjs",
    "check:sources": "node scripts/check-sources.mjs",
    "test:voice": "node --test scripts/check-voice.test.mjs",
    "check:voice": "node scripts/check-voice.mjs"
  },
```

- [ ] **Step 6: Run the checker on the repo and confirm it fails**

Run: `npm run check:voice`

Expected: exit code 1. The output includes `i own the plan`, `operating layer`, and `the rhythm`. That failure is the current site. Later tasks remove it.

- [ ] **Step 7: Do not commit**

Do not run `git add` or `git commit`.

---

### Task 2: Start here labels and briefing

**Files:**
- Modify: `docs/start-here/index.md`
- Modify: `docs/start-here/own-the-plan.md`
- Modify: `docs/start-here/own-the-product-dates.md`
- Modify: `docs/start-here/ask-a-vendor.md`
- Modify: `docs/start-here/show-evidence.md`
- Modify: `docs/start-here/change-a-protocol.md`
- Modify: `docs/start-here/keep-software-updated.md`

**Interfaces:**
- Consumes: the label table in the spec
- Produces: visitor-facing labels "The migration plan", "Product release dates", "Questions for a vendor", "Evidence of the migration", and "Changing a protocol". Paths stay `own-the-plan.md`, `own-the-product-dates.md`, `ask-a-vendor.md`, `show-evidence.md`, and `change-a-protocol.md`.

- [ ] **Step 1: Replace `docs/start-here/index.md`**

```markdown
---
title: Start here
sidebar_label: Start here
sidebar_position: 1
displayed_sidebar: startHereSidebar
description: Five responsibilities, each using the same pages, plus the page for a regular adopter whose software picks up the change in an update.
---

The five responsibilities use the same pages. Each one names the decisions, the reading order, and the outcome.

- [The migration plan](./own-the-plan.md)
- [Product release dates](./own-the-product-dates.md)
- [Questions for a vendor](./ask-a-vendor.md)
- [Evidence of the migration](./show-evidence.md)
- [Changing a protocol](./change-a-protocol.md)

[Keep software updated](./keep-software-updated.md) is the page for a regular adopter. It is not one of the five responsibilities on the homepage. The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) says regular adopters do not need to react yet. Use that page when your software will pick up the change in an update. If you are not sure, the responsibility pages above still apply.

The migration practices start at [Where to start](../migration-practices/where-to-start.md).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Where to start](../migration-practices/where-to-start.md)
- [The migration plan](./own-the-plan.md)
- [Product release dates](./own-the-product-dates.md)
- [Questions for a vendor](./ask-a-vendor.md)
- [Evidence of the migration](./show-evidence.md)
- [Changing a protocol](./change-a-protocol.md)
```

- [ ] **Step 2: Rename `docs/start-here/own-the-plan.md`**

Replace the title and sidebar label:

```markdown
title: The migration plan
sidebar_label: The migration plan
```

Replace the heading `## What you leave with` with `## Outcome`. Leave the line under it: `An inventory, a priority, and a one-page plan.`

- [ ] **Step 3: Rename `docs/start-here/own-the-product-dates.md`**

```markdown
title: Product release dates
sidebar_label: Product release dates
```

Replace `## What you leave with` with `## Outcome`. Leave the line under it: `A release date tied to one asset, and a vendor question if someone else owns the stack.`

- [ ] **Step 4: Rename `docs/start-here/ask-a-vendor.md`**

```markdown
title: Questions for a vendor
sidebar_label: Questions for a vendor
```

Replace `## What you leave with` with `## Outcome`. Leave the line under it: `Written questions and a tracking sheet.`

- [ ] **Step 5: Rename `docs/start-here/show-evidence.md`**

```markdown
title: Evidence of the migration
sidebar_label: Evidence of the migration
```

Replace `## What you leave with` with `## Outcome`. Leave the line under it: `The list of records: the inventory, the priority, the vendor answer, and what shipped.`

- [ ] **Step 6: Rename `docs/start-here/change-a-protocol.md`**

```markdown
title: Changing a protocol
sidebar_label: Changing a protocol
```

Replace `## What you leave with` with `## Outcome`. Leave the line under it: `Which job is changing, which option an authority defends, and a way to roll back.`

- [ ] **Step 7: Point Keep software updated at the new label**

In `docs/start-here/keep-software-updated.md`, replace the description with:

```markdown
description: For commodity IT, migration arrives as a vendor update. Long-lived sensitive data or a fixed signature check belongs on The migration plan.
```

Replace the handbook-guidance sentence with:

```markdown
Handbook guidance: if you hold long-lived sensitive data or you ship a product that cannot update its signature check, you are on [The migration plan](./own-the-plan.md), not on this page.
```

Replace the related-page link with:

```markdown
- [The migration plan](./own-the-plan.md)
```

- [ ] **Step 8: Confirm Start here has no retired phrases**

Run: `node scripts/check-voice.mjs`

Expected: exit code 1 still, because other files are unchanged. The output does not contain `docs/start-here/`.

- [ ] **Step 9: Do not commit**

---

### Task 3: Labels on the other handbook pages

**Files:**
- Modify: `docs/resources/protect-this-first.md`
- Modify: `docs/algorithm-protocol-options/signatures.md`
- Modify: `docs/algorithm-protocol-options/long-lived-roots.md`

**Interfaces:**
- Consumes: the label "Product release dates" and the heading "Outcome" from Task 2
- Produces: those three pages no longer show the old seat name

- [ ] **Step 1: Protect this first**

In `docs/resources/protect-this-first.md`, replace `## What you leave with` with `## Outcome`. Leave the next line as: `One page: the two assets, why each is first, the vendor question, and the date of the next pass.`

Replace the related-page link with:

```markdown
- [Product release dates](../start-here/own-the-product-dates.md)
```

- [ ] **Step 2: Signatures**

In `docs/algorithm-protocol-options/signatures.md`, replace the related-page link with:

```markdown
- [Product release dates](../start-here/own-the-product-dates.md)
```

- [ ] **Step 3: Long-lived roots link**

In `docs/algorithm-protocol-options/long-lived-roots.md`, replace the related-page link with:

```markdown
- [Product release dates](../start-here/own-the-product-dates.md)
```

Do not change the "state-control story" sentence in this step. Task 6 does that.

- [ ] **Step 4: Confirm those pages are clean**

Run: `node scripts/check-voice.mjs`

Expected: exit code 1. The output does not contain `protect-this-first.md`, `signatures.md`, or `long-lived-roots.md`.

- [ ] **Step 5: Do not commit**

---

### Task 4: Homepage and footer

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `docusaurus.config.ts` (footer labels only)

**Interfaces:**
- Consumes: the five new labels and the card noun phrases from the spec
- Produces: homepage cards, the heading "Five responsibilities", the heading "Named sources", and matching footer labels. Paths in `to:` stay unchanged.

- [ ] **Step 1: Replace the homepage role cards and headings**

In `src/pages/index.tsx`, replace the `roles` array with:

```tsx
const roles = [
  {title: 'The migration plan', to: '/start-here/own-the-plan/', text: 'An inventory, a priority, and a one-page plan.'},
  {title: 'Product release dates', to: '/start-here/own-the-product-dates/', text: 'A release date tied to one asset, and a vendor question if someone else owns the stack.'},
  {title: 'Questions for a vendor', to: '/start-here/ask-a-vendor/', text: 'Written questions and a tracking sheet.'},
  {title: 'Evidence of the migration', to: '/start-here/show-evidence/', text: 'The records that show the inventory, the priority, the vendor answer, and what shipped.'},
  {title: 'Changing a protocol', to: '/start-here/change-a-protocol/', text: 'Which job is changing, which option an authority defends, and how to roll back.'},
];
```

Replace the path heading and the sentence under it with:

```tsx
              <Heading as="h2">Five responsibilities</Heading>
              <p>Each responsibility uses the same handbook. Keep software updated is linked from Start here.</p>
```

Replace the closing heading with:

```tsx
            <Heading as="h2">Named sources</Heading>
```

Leave the sentence under that heading: `Dates, duties, and options on this site name the authority and the date of the source.`

Leave the tagline, the hero buttons, "How the handbook works", and the featured-resource cards.

- [ ] **Step 2: Replace the five footer labels**

In `docusaurus.config.ts`, inside the Start here footer column, replace only these labels. Leave every `to:` path as it is.

```ts
            {label: 'The migration plan', to: '/start-here/own-the-plan/'},
            {label: 'Product release dates', to: '/start-here/own-the-product-dates/'},
            {label: 'Questions for a vendor', to: '/start-here/ask-a-vendor/'},
            {label: 'Evidence of the migration', to: '/start-here/show-evidence/'},
            {label: 'Changing a protocol', to: '/start-here/change-a-protocol/'},
```

Leave the `Start here` and `Keep software updated` footer items. Leave the navbar.

- [ ] **Step 3: Confirm the homepage and config are clean**

Run: `node scripts/check-voice.mjs`

Expected: exit code 1. The output does not contain `src/pages/index.tsx` or `docusaurus.config.ts`.

- [ ] **Step 4: Do not commit**

---

### Task 5: Navigation structure

**Files:**
- Modify: `navigation-structure.md`

**Interfaces:**
- Consumes: the same five labels
- Produces: a seat table whose visible names match the site. The column heading `Seat` stays. The column heading `Leave with` becomes `Outcome`.

- [ ] **Step 1: Replace the Start here seats section through the Keep software updated row**

Replace the opening sentence, the table header, and the six rows with:

```markdown
Each Start here page names that responsibility's decisions, the reading order, the outcome, and a weak answer beside a stronger one.

| Seat | Path | Read in order | Outcome |
| --- | --- | --- | --- |
| The migration plan | `/start-here/own-the-plan/` | Where to start, inventory, priority, dates, the next pass, inventory questions, prioritisation checklist | An inventory, a priority, and a one-page plan |
| Product release dates | `/start-here/own-the-product-dates/` | Where to start, dates, priority, signatures, long-lived roots, vendor plan, protect this first | A release date tied to one asset, and a vendor question if someone else owns the stack |
| Questions for a vendor | `/start-here/ask-a-vendor/` | Vendor plan, vendor questions, key establishment, signatures, changing algorithms again | Written questions and a tracking sheet |
| Evidence of the migration | `/start-here/show-evidence/` | Where to start, inventory, priority, vendor plan, key establishment, signatures | The records that show the inventory, the priority, the vendor answer, and what shipped |
| Changing a protocol | `/start-here/change-a-protocol/` | Choosing, key establishment, signatures, changing algorithms again, vendor plan | Which job is changing, which option an authority defends, and a way to roll back |
| Keep software updated | `/start-here/keep-software-updated/` | This page, then dates, then inventory questions if the reader is not sure they are a regular adopter | A reason to keep browsers, operating systems, and cloud services updated, and a route into "The migration plan" if the data or the keys are long-lived |
```

Leave the heading `## Start here seats` and the paragraphs after the table.

- [ ] **Step 2: Run the checker**

Run: `npm run check:voice`

Expected: exit code 1. The output does not contain `navigation-structure.md`. Remaining hits are only `operating layer` and `the rhythm` until Task 6.

- [ ] **Step 3: Do not commit**

---

### Task 6: Briefing sentences

**Files:**
- Modify: `docs/migration-practices/index.md`
- Modify: `docs/migration-practices/changing-algorithms-again.md`
- Modify: `docs/resources/index.md`
- Modify: `docs/standards-timelines/index.md`
- Modify: `docs/algorithm-protocol-options/long-lived-roots.md`

**Interfaces:**
- Consumes: nothing from the label tasks except that those phrases are already gone
- Produces: the sentence replacements named in the spec, plus three further register failures found in the audit

- [ ] **Step 1: Migration practices**

Replace the description and the opening sentence in `docs/migration-practices/index.md` with:

```markdown
description: "How you run the programme: the inventory, the priority, the vendor plan, changing algorithms again, and the next pass."
```

```markdown
Use this section to run the programme: the inventory, the priority, the vendor plan, the ability to change algorithms again, and the next pass.
```

Leave the rest of the page.

- [ ] **Step 2: Changing algorithms again**

In `docs/migration-practices/changing-algorithms-again.md`, replace these three sentences.

```markdown
"This pass uses the construction our authority defends. The inventory names the algorithm. The next pass has a date."
```

```markdown
This page is the capability to change algorithms again. [The next pass](./next-pass.md) is the later review of the same estate.
```

```markdown
The construction this pass uses is chosen on [Choosing an option](../algorithm-protocol-options/choosing.md). Hybrid use, where an authority defends it, is a temporary measure on the way to a later change, not the end of the programme.
```

- [ ] **Step 3: Resources landing**

In `docs/resources/index.md`, replace only the opening paragraph with:

```markdown
These pages help a decision. They are questions, a checklist, a tracking sheet, one worked example, a glossary, and the works this edition cites.
```

Leave the bullet list that follows.

- [ ] **Step 4: Standards and timelines landing**

In `docs/standards-timelines/index.md`, replace the opening sentence with:

```markdown
Use this section when you have a government date, a customer question, or a vendor claim, and you need to know whose clock it is.
```

- [ ] **Step 5: Long-lived roots plainness**

In `docs/algorithm-protocol-options/long-lived-roots.md`, replace the "What can go wrong" sentence with:

```markdown
A general-purpose stateful scheme without a way to control the state, or a root of trust left on a signature the device can never replace.
```

- [ ] **Step 6: Run the unit test and the checker**

Run: `npm run test:voice`

Expected: PASS, 2 tests.

Run: `npm run check:voice`

Expected: exit code 0 and no output.

- [ ] **Step 7: Do not commit**

---

### Task 7: Verify the pass

**Files:**
- Test: the commands and the browser pages below. No new source files.

**Interfaces:**
- Consumes: the finished edit set from Tasks 1–6
- Produces: the four verification results required by the spec

- [ ] **Step 1: Sources, types, and build**

Run: `npm run check:sources`

Expected: exit code 0.

Run: `npm run typecheck`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0. The build prints a generated-file list and does not throw on broken links.

- [ ] **Step 2: Read the five pages in the browser**

Start the site with `npm start` if it is not already serving. Open these URLs:

- `http://localhost:3000/`
- `http://localhost:3000/start-here/`
- `http://localhost:3000/start-here/own-the-plan/`
- `http://localhost:3000/migration-practices/`
- `http://localhost:3000/migration-practices/changing-algorithms-again/`

On the homepage, confirm the heading is "Five responsibilities", the first card is "The migration plan" with the text "An inventory, a priority, and a one-page plan.", and the closing heading is "Named sources". Confirm the footer Start here column uses the new labels, and the navbar still says Standards and timelines, Migration practices, Algorithm and protocol options, and Resources.

On Start here, confirm the five links use the new labels and the page says "The migration practices start at Where to start."

On `/start-here/own-the-plan/`, confirm the title is "The migration plan" and the page has an "Outcome" heading. The URL still contains `own-the-plan`.

On Migration practices, confirm the page does not say "operating layer".

On Changing algorithms again, confirm the page says "the later review of the same estate" and does not say "the rhythm".

- [ ] **Step 3: Do not commit**
