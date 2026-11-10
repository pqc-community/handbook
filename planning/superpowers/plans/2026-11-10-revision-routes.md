# Revision Routes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage the situation chooser, publish the six route pages, and retarget the book onto the new paths so `npm run build` passes with no retired URL left in `docs/` or `src/`.

**Architecture:** Route and learn documents are new Markdown files. Renames are filesystem moves of the existing practice pages, whose prose is rewritten in the pages plan. New work-product pages and CSVs are created here because the routes link to them. A swizzled doc header reads `last_reviewed`. The edition voice scan stays off, so surviving old prose does not fail `npm run check:voice`.

**Tech Stack:** Docusaurus 3.10.1, React 19, TypeScript. No new dependency.

**Spec:** `planning/superpowers/specs/2026-11-10-site-revision-design.md`

**Previous plan:** `planning/superpowers/plans/2026-11-10-revision-guards.md`

## Global Constraints

- Follow the guards plan's constraints. `EDITION_DATE` is `2026-11-10`.
- Do not join `findEditionVoiceViolations` into `findVoiceViolations`.
- Do not commit, push, tag, or otherwise write to git.
- Retired paths are deleted. No redirects.
- New Markdown uses the edition terms. It does not contain the edition phrases or an unauthorised `must` or `shall`.
- Every new doc has `last_reviewed: 2026-11-10` and a `## Sources` section with a public http link.
- Sister-site links stay onward reading and are not the authority for a date.

## File map

| File | Responsibility |
| --- | --- |
| `sidebars.ts` | `learnSidebar`, `routesSidebar`, and the updated reference sidebars. `startHereSidebar` is removed |
| `docusaurus.config.ts` | Navbar and footer |
| `src/pages/index.tsx` | Chooser homepage |
| `src/pages/index.module.css` | Shorter hero and a two-column choice grid |
| `src/theme/DocItem/Content/index.tsx` | Visible last-reviewed line |
| `docs/routes/*.md` | Six route pages |
| `docs/learn/index.md` | Learn landing |
| `docs/migration-practices/diagnose.md` | Moved from `where-to-start.md` |
| `docs/migration-practices/subsequent-review.md` | Moved from `next-pass.md` |
| `docs/migration-practices/commodity-software.md` | Moved from `docs/start-here/keep-software-updated.md` |
| `docs/migration-practices/release-dates.md` | Moved from `docs/start-here/product-release-dates.md` |
| `docs/migration-practices/implementation.md` | New guide |
| `docs/resources/*-record.md`, `migration-plan.md`, `vendor-response-log.md`, `review-log.md` | Work products |
| `static/downloads/*.csv` | Headers from `WORK_PRODUCTS` |

---

### Task 1: Sidebars, navbar, footer, and last-reviewed line

**Files:**
- Modify: `sidebars.ts`
- Modify: `docusaurus.config.ts` navbar `items` and footer `links`
- Create: `src/theme/DocItem/Content/index.tsx`
- Test: `npm run typecheck` and `npm run build` after Task 4. This task has no independent build because the sidebars name files created in later tasks. Do not build until Task 4.

**Interfaces:**
- Consumes: doc ids created in Tasks 2 to 4
- Produces: sidebar ids `learnSidebar`, `routesSidebar`, `standardsTimelinesSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, `resourcesSidebar`

- [ ] **Step 1: Replace `sidebars.ts`**

```ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learnSidebar: [
    'learn/index',
    'learn/public-key-cryptography',
    'learn/quantum-threat',
    'learn/what-post-quantum-means',
    'learn/algorithms',
    'learn/in-real-systems',
    'learn/standardisation',
  ],
  routesSidebar: [
    'routes/vendor-managed-software',
    'routes/long-lived-confidentiality',
    'routes/hard-to-change-systems',
    'routes/organisation-wide',
    'routes/ask-a-supplier',
    'routes/not-sure',
  ],
  standardsTimelinesSidebar: [
    'standards-timelines/index',
    'standards-timelines/dates',
    'standards-timelines/migration-guides',
  ],
  migrationPracticesSidebar: [
    'migration-practices/index',
    'migration-practices/diagnose',
    'migration-practices/commodity-software',
    'migration-practices/inventory',
    'migration-practices/priority',
    'migration-practices/release-dates',
    'migration-practices/vendor-plan',
    'migration-practices/implementation',
    'migration-practices/changing-algorithms-again',
    'migration-practices/subsequent-review',
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
    'resources/inventory-record',
    'resources/priority-record',
    'resources/vendor-response-log',
    'resources/migration-plan',
    'resources/change-record',
    'resources/evidence-record',
    'resources/review-log',
    'resources/protect-this-first',
    'resources/glossary',
    'resources/curated-references',
    'resources/editorial-policy',
  ],
};

export default sidebars;
```

The learn lessons and `editorial-policy.md` are created in the pages plan. Until that plan lands, Task 4 of this plan creates those files with the landing text specified there, so this sidebar does not name a missing id at the end of this plan. See Task 4.

- [ ] **Step 2: Navbar and footer**

In `docusaurus.config.ts`, replace the navbar `items` with Learn the basics (`learnSidebar`), the four existing reference sidebars, and the GitHub link. Replace `footer.links` with three columns:

- Routes: the six route labels and paths from the spec, using the spec's labels.
- Learn: one item, Learn the basics, to `/learn/`.
- Reference: Standards and timelines, Migration practices, Algorithm and protocol options, Resources.

Remove every footer item whose `to` starts with `/start-here/`.

- [ ] **Step 3: Show the review date**

Create `src/theme/DocItem/Content/index.tsx`:

```tsx
import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function formatReviewed(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(date);
}

export default function DocItemContent(props: {children: ReactNode}): ReactNode {
  const {frontMatter} = useDoc();
  const reviewed = frontMatter.last_reviewed;
  return (
    <>
      {typeof reviewed === 'string' && reviewed.length > 0 && (
        <p>Last reviewed {formatReviewed(reviewed)}</p>
      )}
      <Content {...props} />
    </>
  );
}
```

---

### Task 2: Homepage chooser

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `src/pages/index.module.css`

**Interfaces:**
- Consumes: route paths and `/learn/`
- Produces: the first action on `/`

- [ ] **Step 1: Shorten the hero**

In `src/pages/index.module.css`, set `.heroBanner` padding to `1.5rem 0`. Add:

```css
.choiceGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.learnApart {
  margin-top: 1.5rem;
}

@media screen and (max-width: 768px) {
  .choiceGrid {
    grid-template-columns: 1fr;
  }
}
```

Keep the existing card classes.

- [ ] **Step 2: Replace the homepage body**

Replace the body of `src/pages/index.tsx` so that:

- `Layout` title stays `Post-quantum cryptography handbook`.
- The description is `A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding.`
- The hero `h1` remains the site title, **PQC Handbook**.
- Under it, one promise sentence and one limit sentence, using the words in the spec's Homepage section. The limit names a large bespoke estate, critical national infrastructure, and a regulated system.
- The hero has no "Where to start" button and no "Start here" button.
- The next region is `h2` "Choose the situation" and six links using the spec's labels and paths. Ask a supplier's card text is `A shortcut across the four situations.` Not sure's card text is `A way to choose a situation without a risk assessment.`
- A separate link, visually under the grid, reads `Learn the basics` and points to `/learn/`. Its text is `For a reader who is not yet planning a migration.`
- Under that, one filled row in a table with columns Asset, Why it is first, Next record. The row is `Health records on the vendor system | Confidentiality still matters after 10 years | Priority record`. The paragraph under the table links to `/resources/protect-this-first/` with the label `The clinic example`.
- The last region lists the four reference sections by their names and paths.

Do not use the strings `Where to start`, `Start here`, `Five responsibilities`, `the stack`, or `secrecy life`.

---

### Task 3: Routes, learn landing, implementation page, and work products

**Files:**
- Create: `docs/routes/` (six files), `docs/learn/index.md`, `docs/migration-practices/implementation.md`, the seven work-product docs, `static/downloads/` (seven CSVs)
- The learn lesson files and `docs/resources/editorial-policy.md` are created in Task 4 as short valid pages so the sidebar resolves. The pages plan replaces their bodies.

**Interfaces:**
- Consumes: `WORK_PRODUCTS` headers from `scripts/check-records.mjs`
- Produces: the paths the homepage and sidebars name

- [ ] **Step 1: Write the seven CSVs**

Each file is one line, the `header` value from `WORK_PRODUCTS`, plus a newline. No data row in the CSV. The filled example lives in the Markdown table.

- [ ] **Step 2: Write the six route pages**

Every route file uses `displayed_sidebar: routesSidebar`, `last_reviewed: 2026-11-10`, and ends with `## Sources` then `## Related pages`. The primary next link is the first page in that route's order. Use these titles and opening paragraphs, then a numbered reading order, then the output paragraph.

`docs/routes/vendor-managed-software.md`

Title: `Mostly standard, vendor-managed software`. Sidebar: `Vendor-managed software`. Description: `For an organisation whose software is updated by its suppliers, with a check for the cases that need a different route.`

Opening: this route is for an organisation that relies on standard browsers, operating systems, and mobile devices. The exception check comes before the reading order. Long-lived confidential data moves to `/routes/long-lived-confidentiality/`. A bespoke system, or a product whose signature check cannot be updated later, moves to `/routes/hard-to-change-systems/`. An organisation coordinating many assets moves to `/routes/organisation-wide/`. Otherwise the order is commodity software (`/migration-practices/commodity-software/`), dates, the vendor response log, and the subsequent review. Output: a vendor response log, and either a written note that no exception applies or the name of the route the reader moved to. Primary next page: commodity software.

Sources: UK NCSC timelines, modified 3 August 2026, https://www.ncsc.gov.uk/guidance/pqc-migration-timelines

`docs/routes/long-lived-confidentiality.md`

Title: `Data that must stay confidential for years`. Sidebar: `Long-lived confidentiality`. Description: `The route for data whose confidentiality period makes harvest-now, decrypt-later the reason to start.`

Order: diagnose, inventory, inventory record, priority, priority record, key establishment, dates. Output: a priority record for the assets with a long confidentiality period. Primary next page: diagnose.

Sources: NIST IR 8547, October 2026, https://doi.org/10.6028/NIST.IR.8547

`docs/routes/hard-to-change-systems.md`

Title: `Products or systems that may be hard to change`. Sidebar: `Hard to change`. Description: `The route for a product whose verifier, firmware, or release cycle cannot be changed quickly.`

Opening question, in its own paragraph: can the verifier be updated later? When it cannot, read long-lived roots before signatures. Order: inventory, release dates, long-lived roots, signatures, vendor plan, implementation, change record, vendor response log. Output: one asset's vendor-release, test, production-deployment, and end-of-support dates, plus a change record. Primary next page: inventory.

Sources: NIST IR 8547, October 2026, https://doi.org/10.6028/NIST.IR.8547 and the UK NCSC timelines, modified 3 August 2026.

`docs/routes/organisation-wide.md`

Title: `Coordinating a migration across the organisation`. Sidebar: `Organisation-wide`. Description: `Roles, inputs, and the order for a migration lead.`

Name the roles and inputs from the spec: executive sponsor, migration lead, asset owners, procurement, legal or risk, operations, suppliers. Include a six-step list, in this order: decide whether the handbook applies and name an owner; find cryptographic dependencies and record unknowns; assess confidentiality period, importance, and constraints; prioritise and choose a source-backed path; engage suppliers and migrate; verify what changed and set the subsequent review. Under that list, include the LATICE correspondence from the spec as **Handbook practice**, citing ASD's planning publication, and state that the two lists do not have the same number of steps. State that a large bespoke estate, critical national infrastructure, or a regulated system needs a specialist as well as this route. Order: migration plan, diagnose, inventory, priority, evidence record, subsequent review. Output: a one-page plan with an owner for each asset and a subsequent-review date. Primary next page: the migration plan.

Sources: ASD planning publication, https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography and ETSI TR 104 016, October 2024, https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf

`docs/routes/ask-a-supplier.md`

Title: `Ask a supplier`. Sidebar: `Ask a supplier`. Description: `How to prepare a question, follow up an incomplete answer, and store the decision.`

Explain prepare, follow-up of a vague, missing, or concerning answer, and recording the decision. The 2030 milestone in the November 2026 guide is **Authority recommendation** for ASD's audience, not a universal deadline. Order: vendor plan, then the vendor response log. Output: one decision-ready row. Primary next page: vendor plan.

Sources: the vendor guide updated 5 November 2026, https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors and the CISA, NSA, and NIST fact sheet as of 17 August 2023, https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf

`docs/routes/not-sure.md`

Title: `Not sure which route applies`. Sidebar: `Not sure`. Description: `Questions that choose a route, or name the person who will choose.`

Three questions, each a paragraph. If the organisation mostly uses supplier-updated browsers, operating systems, and mobile devices, and holds no long-lived confidential data and no product it cannot update, use the vendor-managed route. If a record must stay confidential for years, use the long-lived route. If the organisation ships or operates a product whose signature check cannot be updated later, use the hard-to-change route. If someone is coordinating many of these assets, use the organisation-wide route. An unknown stays written down with an owner. The page states that it does not assess risk. When the reader still cannot choose, the risk owner or the sector authority chooses. Repeat the specialist cases. Output: a named route, or a list of unknowns and the person who will close them. Primary next page: diagnose.

Sources: UK NCSC timelines, modified 3 August 2026, and the Dutch handbook, December 2024, https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf

`docs/learn/index.md`

Title: `Learn the basics`. Sidebar: `Learn the basics`. `displayed_sidebar: learnSidebar`. Description: `A short sequence for a reader who is not yet planning a migration.`

State the audience. List the six lesson paths and then the glossary as the seventh step. Say this path does not give a migration procedure. Onward links: `/` and `/resources/curated-references/`.

Sources: NIST IR 8547, October 2026, https://doi.org/10.6028/NIST.IR.8547

- [ ] **Step 3: Write `implementation.md`**

Title: `Plan, test, and verify one change`. Sidebar: `Implementation`. `displayed_sidebar: migrationPracticesSidebar`. Description: `Pilot, test, roll out, roll back, and verify one system after an option has been chosen.`

Use the practice headings. When this applies: an option and an authority are already recorded for one system. Do this, numbered: name the pilot scope; name the interoperability and performance tests; write the cutover communication; write the rollback trigger and who may invoke it; write how the deployed state will be checked; write the change record and the evidence record. Keep this evidence: the change record. Example: an insufficient record is "We enabled PQC." The decision-ready record names one channel, the authority, the rollback owner, and the check that the deployed configuration matches the record. Limits and next page: this page is not a protocol specification; further technical material is the NCCoE migration project at https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html ; the next page is the change record. Sources: NIST IR 8547, October 2026, and that FAQ, last updated 5 November 2026.

- [ ] **Step 4: Write the seven work-product pages**

Each page uses `displayed_sidebar: resourcesSidebar`, `last_reviewed: 2026-11-10`, the practice of a work-product page, and a link to `/downloads/<file>.csv`. The blank Markdown table has the same columns as the CSV header. The filled table has one clinic row and the same columns. Confidence or an unknown cell is the word `unknown`. `job` is one of `key establishment`, `signatures`, or `non-updatable verifier`. `judgement` is one of `complete`, `vague`, `missing`, or `concerning`.

Clinic facts, reused so the rows describe one organisation:

- Health records on the vendor system. Owner: the clinic operations lead. Confidentiality period: more than 10 years. Software control: the vendor. Job for the priority row: `key establishment`.
- Firmware signature check that cannot be updated in the field. Job: `non-updatable verifier`.
- A supplier answer that names the product and version, the key-establishment construction, and a date, and says signatures are not in that release. Judgement: `complete`.

Each page includes this sentence: keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

Titles:

| File | Title | Sidebar |
| --- | --- | --- |
| `inventory-record.md` | `First-pass inventory record` | `Inventory record` |
| `priority-record.md` | `Priority record` | `Priority record` |
| `vendor-response-log.md` | `Vendor response log` | `Vendor response log` |
| `migration-plan.md` | `One-page migration plan` | `Migration plan` |
| `change-record.md` | `Change and testing record` | `Change record` |
| `evidence-record.md` | `Evidence record` | `Evidence record` |
| `review-log.md` | `Subsequent review log` | `Review log` |

The vendor response log groups its question list by the five LATICE phases and links the 5 November 2026 guide. It keeps the August 2023 fact sheet as the short official starting point. It does not cite Vista Security.

Sources on every work-product page include at least one of the public URLs already named in this task.

---

### Task 4: Move, retarget, delete, and leave the build green

**Files:**
- Move: `docs/migration-practices/where-to-start.md` to `docs/migration-practices/diagnose.md`
- Move: `docs/migration-practices/next-pass.md` to `docs/migration-practices/subsequent-review.md`
- Move: `docs/start-here/keep-software-updated.md` to `docs/migration-practices/commodity-software.md`
- Move: `docs/start-here/product-release-dates.md` to `docs/migration-practices/release-dates.md`
- Create, as valid short pages the pages plan will replace: `docs/learn/public-key-cryptography.md`, `docs/learn/quantum-threat.md`, `docs/learn/what-post-quantum-means.md`, `docs/learn/algorithms.md`, `docs/learn/in-real-systems.md`, `docs/learn/standardisation.md`, `docs/resources/editorial-policy.md`
- Delete: `docs/start-here/`, `docs/resources/inventory-questions.md`, `docs/resources/prioritisation-checklist.md`, `docs/resources/vendor-questions.md`

**Interfaces:**
- Consumes: the new paths
- Produces: a `docs/` tree whose relative links resolve, and `displayed_sidebar` values that exist in `sidebars.ts`

- [ ] **Step 1: Move the four pages and fix their front matter**

Use `mv`. On each moved file set `displayed_sidebar` to `migrationPracticesSidebar` and `last_reviewed: 2026-11-10`. Set sidebar labels to `Diagnose`, `Subsequent review`, `Commodity software`, and `Release dates`. Leave the body for the pages plan, except change any link that points at a path this task deletes.

- [ ] **Step 2: Create the seven placeholder lesson and policy files**

Each file is front matter (`title`, `description`, `sidebar_label`, `displayed_sidebar`, `last_reviewed`), one sentence that names the lesson's job from the spec's Learn lessons list, `## Sources` with the NIST IR 8547 link, and `## Related pages` linking to `/learn/`. `editorial-policy.md` uses `resourcesSidebar` and its one sentence says the maintainers of `pqc-community/handbook` own the pages. The pages plan replaces these bodies. They exist so the sidebar and the build resolve.

- [ ] **Step 3: Retarget links, then delete**

Search `docs/` and `src/` for `start-here`, `where-to-start`, `next-pass`, `inventory-questions`, `prioritisation-checklist`, `vendor-questions`, and `keep-software-updated`. Replace each surviving link with the new path that has the same job:

| Old | New |
| --- | --- |
| `where-to-start` | `diagnose` |
| `next-pass` | `subsequent-review` |
| `keep-software-updated` | `migration-practices/commodity-software` |
| `product-release-dates` | `migration-practices/release-dates` |
| `inventory-questions` | `resources/inventory-record` |
| `prioritisation-checklist` | `resources/priority-record` |
| `vendor-questions` | `resources/vendor-response-log` |
| `the-migration-plan` | `resources/migration-plan` |
| `evidence-of-the-migration` | `resources/evidence-record` |
| `changing-a-protocol` | `migration-practices/implementation` |
| `questions-for-a-vendor` | `routes/ask-a-supplier` |
| `start-here/index` | `routes/not-sure` |

Then delete `docs/start-here/` and the three retired resource files. A relative link from `docs/algorithm-protocol-options/` to a resource uses `../resources/...`. A link from `docs/migration-practices/` to a resource uses `../resources/...`.

- [ ] **Step 4: Rewrite `navigation-structure.md`**

Replace the book map and the seat table with the URL map from the spec. Do not use the edition phrases. This file is in the legacy voice scan, so it also must not contain `what you leave with`, `leave with`, `i own the plan`, `operating layer`, or `the rhythm`.

- [ ] **Step 5: Build**

Run: `npm test && npm run check:voice && npm run check:sources && npm run typecheck && npm run build`

Expected: all commands exit 0. `rg -n "start-here|where-to-start|inventory-questions|vendor-questions" docs src sidebars.ts docusaurus.config.ts` prints nothing.
