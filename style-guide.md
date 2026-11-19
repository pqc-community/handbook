# PQC Handbook - Style Guide

Editorial, structural, data-schema, and citation standards for public pages in `docs/`, the chooser homepage (`src/pages/index.tsx`), and downloadable CSV templates (`static/downloads/`). Visual identity lives in [brand-guidelines.md](./brand-guidelines.md); URL paths and sidebars live in [navigation-structure.md](./navigation-structure.md); scope and audience live in [purpose-and-positioning.md](./purpose-and-positioning.md).

---

## 1. Voice, Register, and Language

Write in a calm, neutral **briefing register** for an accountable decision-maker who does not have a cryptographer in the room:

- **Plain British English**: Use British spelling consistently — **organisation** (not *organization*), **programme** (not *program*, when referring to a planned set of activities), **labelled** (not *labeled*).
- **Complete sentences in body prose**: Body paragraphs, numbered steps, and onward navigation links are complete sentences. Structural elements outside body prose — YAML front matter, headings, table cells, Mermaid fences, `Sources` and `Related pages` bullet lists, the comma-separated `Minimum fields` line on work products, glossary openings, and bold field prefixes (`**Assumes:**`, `**Leaves out:**`) — may use concise phrases. Homepage situation cards may use short clauses.
- **Action-first subjects**: Address the person doing the work directly. Avoid meta-subjects such as *this page*, *the handbook*, *the reader*, *a reader*, *this edition*, or *the build*. Put the operational action, system, or decision in the grammatical subject.
- **Second person vs named roles**: Use second person (*you*) for procedures carried out directly by the person using the page. When a duty belongs to an organisational function, name one of the seven standard roles: **executive sponsor**, **migration lead**, **asset owner**, **procurement**, **legal or risk**, **operations**, or **supplier**.
- **Sentence-form onward links**: Write primary onward links as complete sentences — for example, `Continue with [Public-key cryptography](/learn/public-key-cryptography/).` or `The primary next page is [Commodity software](/migration-practices/commodity-software/).` Never use bare prefixes such as `Next:` or `Primary next page:`.
- **Contrast over inline definition lists**: Do not turn lesson paragraphs into strings of single-sentence definitions. State the operational contrast in prose and leave term definitions to the [Glossary](./docs/resources/glossary.md).
- **Abbreviations and punctuation**: Expand abbreviations at first use on each page. Use straight apostrophes (`supplier's`) and ISO dates (`YYYY-MM-DD`, such as `2026-08-14` and `2026-12-01`) inside Markdown tables.
- **Casual phrasing inside `Example` only**: An insufficient record quoted inside an `Example` section (such as `"Our TLS scan found no issues."`) may use casual speech because it illustrates the failure mode to avoid.

### Standard Handbook Terms

Prefer these exact phrases over retired shorthand metaphors:

| Standard term | Meaning | Avoid |
| --- | --- | --- |
| **applicable migration timeline** | The dated milestones of the authority recorded for the organisation | *the clock*, *clocks* |
| **system environment** | The product, service, and operating organisation under discussion | *the stack*, *operating layer* |
| **data confidentiality period** | How long protected data needs to remain confidential | *secrecy life* |
| **subsequent review** | The scheduled date when a migration record is reopened | *the next pass*, *the rhythm* |
| **insufficient record** / **decision-ready record** | Contrasting example pair on practice and option pages | *weak answer*, *stronger answer* |

---

## 2. Epistemic Labels and Modal Verbs

Every sentence that states a migration date, an external obligation, an authority's factual finding, or a technical recommendation opens with a bold epistemic label (defined publicly on [Editorial policy](./docs/resources/editorial-policy.md)):

| Label | When to use it | Attribution requirement |
| --- | --- | --- |
| **Requirement:** | A binding obligation that applies to the specific audience governed by that authority. | Name the authority, document, publication/update date, jurisdiction, and governed audience. |
| **Authority recommendation:** | An external authority advising an action, milestone, or construction. | Name the authority, document, publication/update date, jurisdiction, and target audience. |
| **Authority statement:** | An external authority stating a technical or transition fact (without advising an action). | Name the authority, document, and publication/update date. |
| **Handbook practice:** | What the handbook instructs you to record, ask, use, or leave for a later step. | Follow with the authority sources the practice rests on where applicable; use verbs such as *record*, *use*, *ask*, and *leave*. |
| **Handbook explanation:** | A worked comparison table or sequence diagram constructed on a Learn explainer page. | Distinguish handbook structure from any **Authority statement** cells inside the table. |
| **Example:** | An illustrative scenario, including the shared clinic example. | Never label an example review date or fictional decision as a **Requirement**. |

### Strict Modal Verb Rule (`must` and `shall`)

`must` and `shall` are reserved exclusively for **Requirement** sentences (or direct paraphrases of an authority's binding rule) where the sentence explicitly names a recognised authority (`NCSC`, `NIST`, `FIPS`, `EU`, `NIS`, `ASD`, `ACSC`, `CISA`, `NSA`, `AIVD`, `ETSI`, `CFDIR`).

---

## 3. Page Shapes and Structural Contracts

Every page in the handbook follows one of nine structural contracts and ends (except the React homepage) with `## Sources` followed by `## Related pages`.

### 3.1 Situation Chooser (`/`)
Implemented in `src/pages/index.tsx`. Contains four regions only: hero (`<h1>` **PQC Handbook** + promise sentence + specialist/risk-assessment limit sentence, with no CTA buttons), six situation cards under **Choose the situation** plus the visually separated **Learn the basics** card, the single-row clinic priority preview linking to `/resources/protect-this-first/`, and four reference section cards.

### 3.2 Route Page (`/routes/*`)
1. **Audience & applicability check**: Who the route serves and which conditions send the system to a different route:
   - `vendor-managed-software`: All five conditions must hold (supplier-updated browsers/OS/mobile, no multi-year confidential data, no bespoke system, no non-updatable verifier, in support with a written supplier plan); out-of-support or plan-less products move to `hard-to-change-systems`.
   - `hard-to-change-systems`: Checks whether the verifier can be updated in the field (`long-lived-roots` precedes `signatures` when it cannot); stops once release dates and a closed or blocked change record exist.
   - `organisation-wide`: Lists inputs from the seven roles, presents the correspondence with ASD's **LATICE** phases (*Locate, Assess, Triage, Implement, Communicate and educate*) explicitly labelled as **Handbook practice** (name an owner precedes LATICE; handbook step 6 verifies and records the change while LATICE's *Communicate and educate* communicates the result and `/learn/` provides education), and instructs teams to pair estate coordination with per-system asset routes.
   - `ask-a-supplier`: Covers preparation, handling `complete`, `vague`, `missing`, or `concerning` answers, and recording one row per product, version, and cryptographic job.
   - `not-sure`: Diagnostic questions without making a risk assessment; routes unresolved cases to the risk owner or sector authority.
2. **Ordered reading sequence**: Numbered links explaining why each step sits in that position (never inserting `/learn/*`).
3. **Output**: Linked to the target work product(s).
4. **Primary onward link**: Written as a complete sentence naming the first page in the reading order, plus a pointer to `/resources/protect-this-first/` where relevant.
5. `## Sources` and `## Related pages`.

### 3.3 Learn Lesson (`/learn/*`)
- Explains **one concept** in plain sentences, ending with a sentence-form onward link to the next step in the eight-step sequence (`/resources/glossary/` is step 8).
- Four lessons (`public-key-cryptography`, `quantum-threat`, `algorithms`, `in-real-systems`) add one sentence immediately after the onward link pointing to their paired explainer (`timelines` points inline to `/learn/explainers/timelines/`). `what-post-quantum-means` and `standardisation` do not link to explainers.
- Contains **no** migration procedure, **no** parameter table, and **no** diagram.

### 3.4 Learn Explainer (`/learn/explainers/*`)
- **Title and lead**: The `title` is a question, repeated verbatim as the opening sentence of the body.
- **Context**: Names the paired short lesson and develops one worked contrast not present in that lesson.
- **Visuals and tables**:
  - `keys`, `kem`, and `tls` each include exactly **one** static `mermaid` fence beginning with `sequenceDiagram`, preceded immediately by a sentence stating what the figure shows (`keys`: `Publisher` and `Device`; `kem`: `Sender` and `Recipient`; `tls`: `Client` and `Server`).
  - `quantum-computers` contains **no** diagram and stays strictly within **Authority statement** claims from NIST IR 8547.
  - `timelines` (*Whose date applies*) presents the cross-jurisdiction comparison table (`authority`, `audience`, `milestone`, `status`, `asset scope`, `last checked`) covering UK NCSC, EU NIS Cooperation Group, NIST IR 8547 (standards and US federal), ASD planning, and the Canadian CFDIR guide.
- **Explainer guardrails**:
  - Avoid image embeds (`![...]`), flowcharts, `@theme/Mermaid` imports, or `@mermaid-js/layout-elk`.
  - Keep the fictional `clinic`, clinic field names, and `parameter set` tables out of explainers.
  - Note that Docusaurus renders broken Mermaid syntax as an inline error box without failing `npm run build`; always visually verify edited Mermaid fences in a browser.
- **Closing**: Two or three takeaway sentences, back link to the paired short lesson, onward link to the next explainer (or `/learn/`), `## Sources`, and `## Related pages`.

### 3.5 Practice Page (`/migration-practices/*`)
Uses **exactly these seven `##` headings in this order**, with no extra `##` headings before `Sources`:

1. `## When this applies` — entry condition for the practice.
2. `## Do this` — numbered operational procedure plus labelled **Handbook practice** / **Authority recommendation** / **Requirement** rules.
3. `## Keep this evidence` — the work product or record produced.
4. `## Example` — a single heading containing one **insufficient record** and one **decision-ready record** (on `implementation.md`, one closed decision-ready pilot record and one **blocked** firmware record).
5. `## Limits and next page` — what this step leaves for later and one sentence naming the primary onward page.
6. `## Sources`
7. `## Related pages`

### 3.6 Algorithm and Protocol Option Page (`/algorithm-protocol-options/*`)
Follows the seven practice-page headings (`###` subheadings inside `## Do this` are allowed for decision branches on `choosing.md`):
- Records who controls the software, what the cited authority recommends or permits (hybrid, post-quantum-only, or supplier update), and what operational check precedes cutover — without choosing an option on the organisation's behalf.
- Does **not** print parameter tables (`ML-KEM-768` is named only where citing NIST IR 8547's stated default; parameter selection links out to FIPS 203, FIPS 204, and FIPS 205).

### 3.7 Work-Product Page (`/resources/*-record`, `vendor-response-log`, `migration-plan`, `review-log`)
1. `## When to use it`
2. `## Minimum fields` — comma-separated column names matching the CSV header, followed by `unknown`, semicolon, `confidence`/`job`/`judgement`, and data-hygiene rules.
3. `## Filled example` — Markdown table using the exact CSV columns and canonical clinic values.
4. `## Blank template` — empty Markdown header table with the exact CSV columns, `/downloads/<slug>.csv` download link, and storage-security warning.
5. `## Sources` and `## Related pages`.

### 3.8 Standards and Guidance Summary Page (`/standards/<category>/<slug>/`)
1. Top four-row metadata table: `Authority`, `Publication`, `Status`, `Official source` (with descriptive link text such as `[CSRC publication page (HTML)](...)` or `[White House memorandum (PDF)](...)`).
2. `## What it covers` — factual scope summary of the standard, directive, or migration guide.
3. `## Role in the post-quantum transition` (on standards and directives) or `## Scope and handbook use` with `**Assumes:**` and `**Leaves out:**` (on migration guides).
4. `## Sources` and `## Related pages`.

### 3.9 Reference Index and Glossary (`index.md`, `curated-references.md`, `editorial-policy.md`, `glossary.md`)
- Section and category `index.md` pages stay concise, routing visitors by role or transition category and ending with `## Sources` and `## Related pages`.
- **Glossary (`docs/resources/glossary.md`)**:
  - Alphabetical `##` headings. Format abbreviations used short-first as `CBOM (cryptography bill of materials)`, full terms abbreviated in lessons as `Post-quantum cryptography (PQC)`, and plain terms without redundant parentheses.
  - Each entry is one short paragraph stating what the term is, how it differs from its neighbour, and optionally `See [Page](/path/).`
  - Open with `**Handbook wording:**` for handbook definitions or `**Authority recommendation:**` for sourced definitions. Algorithms standardised by a NIST FIPS name NIST and link that FIPS directly without either label. Never include parameter tables.

---

## 4. Work-Product Schemas and the Clinic Illustration

### 4.1 Header-Only CSV Schemas (`static/downloads/*.csv`)
All seven CSV files contain **only** their header row, matching the page's blank template and filled example column-for-column:

| Page (`docs/resources/`) | CSV (`static/downloads/`) | Exact CSV header |
| --- | --- | --- |
| `inventory-record.md` | `inventory-record.csv` | `system,owner,key-establishment algorithm,signature algorithm,software control,confidentiality period,renewal,version,dependencies,not visible to a scan,confidence` |
| `priority-record.md` | `priority-record.csv` | `asset,confidentiality period,job,impact,lead time,dependencies,supplier readiness,decision,reason,source,subsequent review` |
| `vendor-response-log.md` | `vendor-response-log.csv` | `supplier,product and version,question,answer,date,source,judgement,follow-up,decision` |
| `migration-plan.md` | `migration-plan.csv` | `asset,owner,why it is included,applicable timeline,authority,milestone,dependency,next action,subsequent review` |
| `change-record.md` | `change-record.csv` | `system,change,option,authority,pilot scope,tests,rollback trigger,who can roll back,deployed-state check,result,date` |
| `evidence-record.md` | `evidence-record.csv` | `claim,record,source,date,owner,subsequent review` |
| `review-log.md` | `review-log.csv` | `date,what was reviewed,unresolved items,owner,next review` |

### 4.2 Work-Product Field and Security Rules
Every work-product page states all four rules:
1. **Storage security**: Keep real records off public issue trackers and unlocked shared drives; protect an inventory with the same access controls as the asset register it describes.
2. **No sensitive material**: Keys, secrets, and personal data stay out of record files — name the system only.
3. **Unknowns and multi-values**: Write `unknown` in any unfilled cell. Put shared libraries or services inside `dependencies` separated by a semicolon (`;`) rather than creating a second system row; separate multiple timelines or sources in one cell with `;`.
4. **Controlled values**:
   - `confidence` (inventory): `known` **only** when both `key-establishment algorithm` and `signature algorithm` name a construction; otherwise `unknown`.
   - `job` (priority): `key establishment`, `signatures`, or `non-updatable verifier`.
   - `judgement` (vendor response log): `complete` (names product, version, construction, date, and retainable source), `vague`, `missing`, or `concerning` (escalates to procurement and contract owner). Use one row per product, version, and cryptographic job, grouped on `vendor-response-log.md` by the five phases of the ASD/ACSC/CISA/NSA vendor guide.

### 4.3 Canonical Clinic Dataset
Keep the shared fictional clinic rows aligned across `protect-this-first.md` and the seven work products:
- **Inventory**: (1) `Health records on the vendor system` (`software control: the vendor`, `confidentiality period: more than 10 years`, `confidence: unknown`) and (2) `Firmware signature check that cannot be updated in the field` (`not visible to a scan: firmware trust anchor`, `confidence: unknown`), both owned by `the clinic operations lead`.
- **Priority**: Both assets are first for distinct jobs — health records `first for key establishment` (`confidentiality period longer than 10 years`, source `EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025`, review `2026-12-01`) and firmware `first for non-updatable verifier` (`verifier cannot be updated in the field`, source `UK NCSC timelines, modified 3 August 2026`, review `2026-12-01`). Never attribute the 10-year threshold to NIST IR 8547. (A short-lived channel `< 1 year` appears only as a contrast on `priority.md`.)
- **Supplier letter (`2026-08-14`)**: `Clinic software supplier`, `named in the supplier letter` (no invented version number such as `4.2`), naming `ML-KEM-768`, the release date, and that signatures are not in that release (`judgement: complete`, `decision: record the key-establishment date and open a signatures follow-up`).
- **Change records**: (1) Closed health-records row (`option: ML-KEM-768`, `authority: NIST IR 8547, October 2026`, `pilot scope: One clinic site`, `result: Pilot passed`, `date: 2026-08-14`) and (2) **Blocked** `Clinic field device firmware signature check` row (`option: unknown`, `authority: unknown`, `result: unknown`, `date: unknown`), preceded by a note stating it is `blocked: implementation does not start while the option is unknown`.
- **Plan, evidence, and review**: Migration plan cites `end of 2030` under `EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025` with `next action: signatures follow-up`; evidence record cites `supplier letter of 14 August 2026; NIST IR 8547, October 2026`; review log lists `blocked firmware option` as the unresolved item and `2026-12-01` as the next review (**Example**, never **Requirement**).

---

## 5. Citations and Sourcing Gate

### 5.1 Source Hierarchy
Order citations on `Editorial policy` and multi-source pages as:
1. Standards and legal requirements
2. National cyber guidance
3. Sector guidance
4. Illustrative practice

### 5.2 Sourcing Rules
- Every factual claim about a date, duty, algorithm standard, or inter-authority difference names the **issuing body, document title, publication or modification date, and public `https://` URL**.
- `## Sources` includes at least one Markdown link `[label](https://...)` before `## Related pages`.
- Reference summaries for all cited standards, US federal directives, and migration guides live under `/standards/` and are indexed on [Curated references](./docs/resources/curated-references.md).
- Never cite local paths under `.ai-helper-files/`.
- Sister-site links to the Secure-by-Design Handbook and Supply Chain Security Handbook are onward reading only, never authority citations for PQC dates or obligations.

### 5.3 Authority-Specific Nuances to Preserve

| Authority / Publication | Required nuance |
| --- | --- |
| **NIST IR 8547** (final, October 2026 — `https://doi.org/10.6028/NIST.IR.8547` or `https://csrc.nist.gov/pubs/ir/8547/final`) | Always cite the October 2026 final (never the 2024 IPD). Distinguish the **NIST standards timeline** (deprecation after 2030, disallowance after 2035) from **US federal agency dates** inside the same report (aligned with EO 14412 and OMB M-26-15). State that the standards timeline is not a universal deadline for every organisation. |
| **UK NCSC migration timelines** (modified 3 August 2026 — `https://www.ncsc.gov.uk/guidance/pqc-migration-timelines`) | Note that the 2028 / 2031 / 2035 milestones primarily address large organisations, CNI operators, and bespoke IT, while standard browsers, OSes, and mobile devices follow a supplier-update path. |
| **EU NIS Cooperation Group roadmap** (v1.1, 11 June 2025) | Member State milestones (2026, 2030, 2035) and the 10-year public-key confidentiality threshold for high-risk use cases. |
| **ASD / ACSC planning & vendor guides** (`cyber.gov.au`, vendor guide updated 5 November 2026) | Label `end of 2030` as ASD's planning milestone for its audience (never a universal deadline). Use the vendor guide's phrase **common concerns** for supplier questions. |
| **NIST NCCoE Migration to PQC FAQ** (updated 5 November 2026) & **NIST SP 1800-38A/B/C** (2023) | Label SP 1800-38A/B/C as **2023 preliminary drafts** and note the FAQ's statement that those drafts are not planned to become finals. Describe CBOM in SP 1800-38B as a developing model, not a handbook requirement. |
| **Canadian CFDIR Quantum-Readiness Best Practices** (10 July 2024) | Cite leadership actions without a cryptographer; never invent Canadian government milestone years. |
| **Dutch PQC Migration Handbook** (AIVD, CWI, TNO, December 2024) & **ETSI TR 103 619 / TR 104 016** | Link rather than rewrite; cite where QKD and QRNGs are set aside. |

---

## 6. Front Matter, Review Dates, and SEO Metadata

Every Markdown file under `docs/` requires these five front-matter fields (`sidebar_position` is optional where ordering is not fixed solely by `sidebars.ts`):

```yaml
---
title: Inventory the cryptography
sidebar_label: Inventory
description: List the cryptography, including what a scanner cannot see, before anyone claims it has moved to post-quantum algorithms.
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
---
```

- **Title and navigation length budgets** (`npm run check` / `scripts/check-pages.mjs`): Docusaurus separates page titles, sidebar labels, navbar items, and footer links so each UI surface has an appropriate length bound without constraining the others:
  - Page `title` (`docs/**/*.md`): `3–160` characters (concise `≤ 60` where practical; `/standards/` pages carry full official publication titles).
  - Sidebar labels (`sidebar_label` in `docs/**/*.md` and category `label` in `sidebars.ts`): `2–50` characters (sidebars wrap naturally across lines; setting `sidebar_label` prevents long `/standards/` titles from falling back into the sidebar).
  - Navbar items (`themeConfig.navbar.items` in `docusaurus.config.ts`): `2–32` characters.
  - Footer column titles (`2–24` characters) and footer links (`2–32` characters) in `themeConfig.footer.links` (`docusaurus.config.ts`), keeping mobile footer columns crisp alongside `max-width: 100%` on `.footer__link-item`.
- **Edition review date**: Every doc carries `last_reviewed` (currently `2026-11-10`), rendered above the article by `src/theme/DocItem/Content/index.tsx`. Update `last_reviewed` and the changelog in `docs/resources/editorial-policy.md` when pages are reviewed.
- **Search-intent deduplication**: A doc's `title` is both its visible `<h1>` and its `<title>` tag (`<title> | PQC Handbook`), and `description` is its search snippet. Ensure two pages never compete for the same search query: keep the primary head term on the canonical page that fulfils it, and phrase routing or companion pages around their specific operational role. The homepage is the sole exception where `Layout` `title` (`Post-quantum cryptography handbook`) differs from the hero `<h1>` (`PQC Handbook`).

---

## 7. Automated Quality Gates

Run the verification suite locally before merging (`.github/workflows/deploy.yml` runs `typecheck` and `build`):

| Command | Purpose |
| --- | --- |
| `npm test` | Runs the `node:test` suite (`scripts/check-pages.test.mjs`). |
| `npm run check` | Runs `scripts/check-pages.mjs` to validate page `title` lengths (`3–160`) and surface-specific navigation bounds (`navbar` `≤ 32`, `footer` titles `≤ 24`, `footer` links `≤ 32`, `sidebar` items and categories `≤ 50`). |
| `npm run typecheck` | Runs `tsc` against `docusaurus.config.ts`, `sidebars.ts`, and `src/`. |
| `npm run build` | Builds static HTML and the local search index in `build/`, throwing on any broken link, anchor, or relative Markdown link. |
