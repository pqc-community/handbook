# Site revision design

Date: 2026-11-10

This spec replaces the visitor-facing structure, voice, and page contract of the first edition. Where it conflicts with [the first-edition design](./2026-11-09-pqc-handbook-design.md), [the voice pass](./2026-11-09-voice-pass-design.md), or [the SEO pass](./2026-11-09-seo-pass-design.md), this spec wins. Those earlier specs stay as history and are not rewritten.

The site is published and is not yet in a search index. Paths in this spec are the paths the edition uses. Retired paths are deleted. No redirects are added.

## Decisions

The homepage is one situation chooser. The four reference sections stay behind it: Standards and timelines, Migration practices, Algorithm and protocol options, and Resources. Learn the basics is a separate path for a reader who is not yet planning a migration.

The public voice is rewritten. Body prose is complete sentences in plain British English. `must` and `shall` appear only in a sentence that names the authority whose requirement it is.

Each work product is a page with one filled example, one blank table, and a CSV download.

## Homepage and navigation

The homepage opens with the title **PQC Handbook**, one sentence of promise, and one sentence of limit: the handbook helps an organisation decide what to migrate, in what order, and how it will know, and it is not a risk assessment and not a substitute for a specialist on a large bespoke estate, critical national infrastructure, or a regulated system.

The first action is the chooser. Six choices:

| Label | Path |
| --- | --- |
| We mostly use standard, vendor-managed software | `/routes/vendor-managed-software/` |
| We handle data that must stay confidential for years | `/routes/long-lived-confidentiality/` |
| We own products or systems that may be hard to change | `/routes/hard-to-change-systems/` |
| I am coordinating a migration across the organisation | `/routes/organisation-wide/` |
| Ask a supplier | `/routes/ask-a-supplier/` |
| I am not sure | `/routes/not-sure/` |

Ask a supplier is marked as a shortcut across the four situations. Not sure is marked as a way to choose a situation. Learn the basics is a separate link to `/learn/`, visually apart from the six choices.

Under the chooser, the homepage shows one filled priority row from the clinic example and links to [Protect this first](/resources/protect-this-first/). The reference library follows that row.

The navbar is Learn the basics, Standards and timelines, Migration practices, Algorithm and protocol options, Resources, and GitHub. The six routes are not navbar items. They are in the footer and on the route sidebar.

The browser title of the homepage remains `Post-quantum cryptography handbook`. The hero heading remains **PQC Handbook**.

## URL map

### Routes

`/routes/vendor-managed-software/`

`/routes/long-lived-confidentiality/`

`/routes/hard-to-change-systems/`

`/routes/organisation-wide/`

`/routes/ask-a-supplier/`

`/routes/not-sure/`

Route pages use `routesSidebar`.

### Learn

`/learn/` is the section landing. It names the audience, lists the sequence, and offers onward links to the chooser and to curated references. It is not one of the seven lessons.

The seven lessons, in order, are:

1. `/learn/public-key-cryptography/`
2. `/learn/quantum-threat/`
3. `/learn/what-post-quantum-means/`
4. `/learn/algorithms/`
5. `/learn/in-real-systems/`
6. `/learn/standardisation/`
7. `/resources/glossary/`

Learn pages use `learnSidebar`, which contains the landing and the six lesson paths. The glossary stays only on `resourcesSidebar`. The learn landing and the standardisation page link to it as the seventh step.

### Reference paths that stay

`/standards-timelines/`, `/standards-timelines/dates/`, `/standards-timelines/migration-guides/`

`/migration-practices/`, `/migration-practices/inventory/`, `/migration-practices/priority/`, `/migration-practices/vendor-plan/`, `/migration-practices/changing-algorithms-again/`

`/algorithm-protocol-options/`, `/algorithm-protocol-options/choosing/`, `/algorithm-protocol-options/key-establishment/`, `/algorithm-protocol-options/signatures/`, `/algorithm-protocol-options/long-lived-roots/`

`/resources/`, `/resources/protect-this-first/`, `/resources/glossary/`, `/resources/curated-references/`

### Renamed and new reference paths

| New path | Job |
| --- | --- |
| `/migration-practices/diagnose/` | Decide whether the handbook applies and what the first inventory must find. |
| `/migration-practices/subsequent-review/` | Schedule the review after the current pass. |
| `/migration-practices/commodity-software/` | Keep vendor-managed software updated, and name the exceptions. |
| `/migration-practices/release-dates/` | Separate vendor release, testing, production deployment, and end of support. |
| `/migration-practices/implementation/` | Plan a pilot, test it, roll it out, roll it back, and verify the deployed state. |
| `/resources/inventory-record/` | Inventory work product. |
| `/resources/priority-record/` | Priority work product. |
| `/resources/vendor-response-log/` | Supplier questions and response log. |
| `/resources/migration-plan/` | One-page plan. |
| `/resources/change-record/` | Change and testing record. |
| `/resources/evidence-record/` | Evidence record. |
| `/resources/review-log/` | Subsequent-review log. |
| `/resources/editorial-policy/` | Source order, owner, review interval, edition, and changelog. |

### Retired paths

Delete the directory `docs/start-here/`. Delete these slugs:

`/migration-practices/where-to-start/`

`/migration-practices/next-pass/`

`/resources/inventory-questions/`

`/resources/prioritisation-checklist/`

`/resources/vendor-questions/`

Remove `startHereSidebar`.

## Page contract

Six shapes.

**Chooser.** The homepage only. Promise, limit, six choices, the separate learn link, one clinic row, then the library.

**Route page.** Who it is for. The ordered pages and why each one is in the order. The output, linked to its work product. One primary next page, which is the first page in the order. A route page holds the decision aid named in the route section below. It does not repeat the practice pages.

**Learn page.** One idea, in ordinary sentences, then one onward link. A learn page does not give a migration procedure and does not include a parameter table.

**Practice page.** These headings, in this order, and no others before Sources:

1. When this applies
2. Do this
3. Keep this evidence
4. Example
5. Limits and next page
6. Sources
7. Related pages

Do this is a numbered procedure. Example is one heading. Inside it, one insufficient record and one decision-ready record. Limits and next page names one primary next page. Related pages is a secondary list.

**Work-product page.** When to use it. The minimum fields. One filled example. One blank table with the same columns as the CSV. The CSV link. How to protect a record that contains a real inventory. How to record Unknown. Sources. Related pages.

**Reference index.** Section landings, migration guides, curated references, the glossary, and the editorial policy. Each entry names the intended reader and the output. These pages stay short.

Every page displays `Last reviewed` from front matter `last_reviewed: 2026-11-10`. If implementation finishes on a later date, every page and the changelog move to that single edition date together.

Front matter on every doc remains `title`, `description`, `sidebar_label`, `displayed_sidebar`, plus `last_reviewed`. `title` is the visible heading and the search-result title. `description` is the search snippet. Docusaurus appends ` | PQC Handbook`.

## Voice

Plain British English: organisation, programme, labelled.

Body prose is complete sentences. A homepage choice may be a short clause.

Use these terms:

| Term | Use it for |
| --- | --- |
| applicable migration timeline | The dated milestones of the authority the organisation recorded |
| system environment | The product, service, and operating organisation being discussed |
| data confidentiality period | How long the data must remain confidential |
| subsequent review | The planned date when the record is opened again |

An insufficient record may be casual, because it is the record the page is warning against. It appears only inside Example.

A sentence that states a date, a duty, or a technical choice begins with one of these labels: **Requirement**, **Authority recommendation**, **Handbook practice**, or **Example**. The sentence also names the source, the publication or update date, the jurisdiction, and the audience, unless it is the Example label. Handbook practice is the handbook's own instruction and is followed by the sources it rests on.

`must` and `shall` appear only in a Requirement sentence, and that sentence names the authority. Handbook practice uses "record", "use", "ask", and "leave".

Second person is used for a procedure the reader carries out. A responsibility that belongs to a role names the role: executive sponsor, migration lead, asset owner, procurement, legal or risk, operations, supplier.

The voice check rejects these phrases anywhere in `docs/`, `src/pages/index.tsx`, `docusaurus.config.ts`, and `navigation-structure.md`:

`the clock`, `clocks`, `secrecy life`, `the stack`, `the next pass`, `weak answer`, `stronger answer`, `five responsibilities`, `where to start`, `start here`

## Routes

Each route page states who it is for, then the order below. The output is the record named on that route, which may sit in the middle of the order when a later page is there to test or date the result.

**Vendor-managed software.** The page opens with an exception check. Long-lived confidential data, a bespoke system, or a product whose signature check cannot be updated later leaves this route for the matching route. Otherwise the order is commodity software, dates, the vendor response log, and the subsequent review. Output: a vendor response log, and either a note that no exception applies or the name of the route the reader moved to.

**Long-lived confidentiality.** Diagnose, inventory method, inventory record, priority method, priority record, key establishment, dates. Output: a priority record for the assets with a long confidentiality period.

**Hard to change.** The page opens by asking whether the verifier can be updated later. If it cannot, long-lived roots comes before the general signature page. Order: inventory method, release dates, long-lived roots, signatures, vendor plan, implementation, change record, vendor response log. Output: one asset's vendor-release, test, production-deployment, and end-of-support dates, plus a change record.

**Organisation-wide.** The page names the roles and the input each one supplies: executive sponsor, migration lead, asset owners, procurement, legal or risk, operations, suppliers. It shows this correspondence and labels it Handbook practice, citing ASD's planning publication: name an owner is the handbook's step before LATICE; find dependencies is Locate; assess the confidentiality period and constraints is Assess; prioritise is Triage; engage suppliers and migrate is Implement; verify the change, communicate it, and set the subsequent review is Communicate and educate. The correspondence is not a claim that the two lists have the same number of steps. It states that a large bespoke estate, critical national infrastructure, or a regulated system needs a specialist as well as this route. Order: migration plan, diagnose, inventory method, priority method, evidence record, subsequent review. Output: a one-page plan with an owner for each asset and a subsequent-review date.

**Ask a supplier.** The page explains how to prepare, how to follow up a vague, missing, or concerning answer, and how to record the decision. Order: vendor plan, vendor response log. The log's questions are grouped by the phases of the ASD, CISA, and NSA vendor guide updated 5 November 2026. The guide's 2030 milestone is labelled as ASD's planning milestone for its own audience. Output: one decision-ready row in the vendor response log.

**Not sure.** A short set of questions flags missing information and points to one of the four situation routes. An unknown stays an open question with an owner. The page states that it does not assess risk. If the reader still cannot choose, the page names the risk owner, or the sector authority, as the person who chooses. It repeats the specialist cases from the organisation-wide route. Output: a named route, or a list of unknowns and the person who will close them.

Learn the basics is not inserted into these orders.

Protect this first remains the only end-to-end worked example. It follows the clinic from the initial facts through the inventory record, the priority record, the vendor response, the option, the implementation evidence, and the subsequent review. It includes one alternative the clinic rejects, and the reason. Route pages that match the clinic link to it. They do not each grow their own organisation.

## Practice pages

**Diagnose.** A path for an urgent case, a vendor-managed case, and an uncertain case. The evidence that separates them. What the reader can finish in the first month: an owner, a first inventory, and a subsequent-review date.

**Inventory.** Defines a first-pass inventory and a maintained inventory. The procedure records: system, owner, key-establishment algorithm, signature algorithm, who controls the software, data confidentiality period, renewal, version where known, dependencies, what a scan cannot see, and confidence. Confidence is `known` or `unknown`. Discovery blind spots include embedded and hardware-bound cryptography, cited to the August 2023 CISA, NSA, and NIST fact sheet and to the November 2026 vendor guide. Growth from the first pass to an enterprise inventory points at NIST SP 1800-38B, December 2023, as a preliminary draft, and describes a CBOM as a developing model in that draft. A CBOM is not a handbook requirement.

**Priority.** A qualitative rubric. The branches are data confidentiality period, signatures that many parties must change together, a verifier that cannot be updated later, impact, lead time, dependencies, and supplier readiness. One tied case and one uncertain case are worked in Example. The page assigns no numeric score.

**Vendor plan.** How to handle a complete, vague, missing, or concerning answer. Follow-up, escalation, procurement, and the contract action sit in Do this.

**Changing algorithms again.** Crypto-agility is translated into capabilities the reader can check: configuration can be changed, an owner is named, dependencies are recorded, tests exist, a change window exists, and a deprecation path is written.

**Subsequent review.** Review triggers, the agenda, the status fields, and how an unresolved item is carried into the review log.

**Release dates.** Vendor release, testing, production deployment, and end of support are four dates. Example walks through a delayed release.

**Commodity software.** How to confirm an update arrived, what to do when a product is out of support or the supplier has no plan, and the exception check used by the vendor-managed route.

**Implementation.** When an option has already been chosen for one system. Do this covers pilot scope, interoperability and performance tests, the cutover communication, the rollback trigger, who may invoke rollback, how the deployed state is verified, and which change record and evidence record to write. The page links to the NCCoE interoperability workstream as further technical material. It does not become a protocol specification.

**Choosing.** Branches for system type, lifetime, jurisdiction, updateability, supplier control, and compatibility. Every branch states the implementation check and the condition for the subsequent review. The page records which authority the reader is following. It does not make the choice for the reader.

**Key establishment.** How to identify affected TLS, VPN, SSH, and email channels, name the component and the supplier, and plan compatibility, performance, testing, and deployment at the level of the change record. Parameter sets other than the cited default are not tabulated.

**Signatures.** Signers, verifiers, the PKI, trust stores, clients, firmware, and relying parties. A dependency and test checklist. One coordinated rollout in Example.

**Long-lived roots.** An applicability test, then a procurement checklist: verifier updateability, device lifetime, signing chain, replacement options, stateful-key controls, and supplier commitments.

**Dates.** A comparison table with columns: authority, audience, milestone, status, asset scope, last checked. Status is one of law, standard, government plan, or recommendation. Rows:

| Authority | What this edition may state |
| --- | --- |
| UK NCSC timelines, modified 3 August 2026 | 2028, 2031, and 2035. The page states the NCSC sentence that the guidance is primarily for technical decision-makers and risk owners of large organisations, operators of critical national infrastructure, and companies with bespoke IT, and the separate commodity-IT path. |
| EU NIS Cooperation Group roadmap, 11 June 2025 | The Member State milestones already on the page. |
| NIST IR 8547, October 2026 | Deprecation after 2030 and disallowance after 2035 under NIST standards. The page states that this is the standards timeline. |
| US federal direction inside NIST IR 8547 | The federal high-value-asset and high-impact dates, and the statement that the standards timeline is not a deadline for every organisation. |
| ASD planning publication | End of 2030, labelled as ASD's planning milestone for its audience. It is not copied as a universal deadline. |
| Canadian CFDIR guide, 10 July 2024 | A row for the guide and its audience. No Canadian government milestone year is invented. |

One cross-border example shows an organisation that must keep two applicable timelines at once. A reader who cannot tell which timeline applies is sent to the risk owner or the sector authority.

**Standards landing, migration guides, and curated references.** Each cited work says what it covers, what it assumes, what it leaves out, whether it is current or preliminary, and the date it was last checked. Entries are grouped by task and audience. Add the ASD planning publication and the 5 November 2026 vendor guide. The NCCoE FAQ is described as six phases, last updated 5 November 2026. The sentence "start with an inventory, then four guides" is removed. NIST SP 1800-38 remains labelled as 2023 preliminary drafts, and the page records the FAQ's statement that those drafts are not planned to become finals.

**Algorithm landing.** A use-case-to-page map: the page, the authority, and the evidence to record. Links to FIPS 203, FIPS 204, and FIPS 205.

**Resources landing.** Tools grouped by route and task. Each entry names the reader and the output.

**Glossary.** Add PKI, KEM, verifier, root of trust, certificate chain, CBOM, and discovery. Define each in handbook wording unless a source is cited, and link the relevant page. Expand an abbreviation at first use on every page.

**Editorial policy.** Source order: standards and legal requirements, national cyber guidance, sector guidance, illustrative practice. Jurisdiction handling. Page owner: the maintainers of the `pqc-community/handbook` repository. Review sources every quarter and when a cited work is republished. Edition: November 2026. Changelog for this revision. A public way to report a stale reference, using the repository's issue tracker. The policy also lists the two validations this build does not complete: a formal screen-reader audit, and observed sessions with a small organisation, a bespoke product owner, procurement, and a risk lead.

Vista Security is removed from every public page and from the allowed source list.

## Learn lessons

1. Public and private keys, key establishment, encryption, and digital signatures, including where RSA and elliptic-curve cryptography are used.
2. What Shor's algorithm threatens, the more limited effect of Grover's algorithm, and harvest-now, decrypt-later. The page does not say that a cryptographically relevant quantum computer already exists.
3. Post-quantum cryptography, and the difference from quantum cryptography and quantum key distribution.
4. The purpose of ML-KEM, ML-DSA, and SLH-DSA. A KEM in plain language. Qualitative trade-offs of size and performance. No parameter table.
5. Where these mechanisms appear in real systems, why a hybrid deployment is considered, and what changes for protocols, certificates, devices, and software.
6. What is final, what is still in development, and where to read the current status. Link FIPS 203, FIPS 204, and FIPS 205.
7. The glossary, the common questions collected there, and the onward links to the chooser or the curated references.

## Work products

CSV files live in `static/downloads/`. The header row is exactly the blank table on the page. The filled example uses the same columns.

| Page | File | Columns |
| --- | --- | --- |
| Inventory record | `inventory-record.csv` | system, owner, key-establishment algorithm, signature algorithm, software control, confidentiality period, renewal, version, dependencies, not visible to a scan, confidence |
| Priority record | `priority-record.csv` | asset, confidentiality period, job, impact, lead time, dependencies, supplier readiness, decision, reason, source, subsequent review |
| Vendor response log | `vendor-response-log.csv` | supplier, product and version, question, answer, date, source, judgement, follow-up, decision |
| Migration plan | `migration-plan.csv` | asset, owner, why it is included, applicable timeline, authority, milestone, dependency, next action, subsequent review |
| Change record | `change-record.csv` | system, change, option, authority, pilot scope, tests, rollback trigger, who can roll back, deployed-state check, result, date |
| Evidence record | `evidence-record.csv` | claim, record, source, date, owner, subsequent review |
| Review log | `review-log.csv` | date, what was reviewed, unresolved items, owner, next review |

`job` is `key establishment`, `signatures`, or `non-updatable verifier`. `judgement` is `complete`, `vague`, `missing`, or `concerning`. `confidence` is `known` or `unknown`. A cell the reader cannot fill is `unknown`.

The filled examples are the clinic, so the same fictional organisation runs through the inventory, the priority, the supplier answer, the change, and the evidence. No real organisation is implied.

Each work-product page tells the reader to keep a real inventory off a public ticket and off an unlocked shared drive, and to store it with the same care as the asset list it describes.

## Figures

Four figures, and no others.

1. The homepage chooser.
2. The organisation-wide lifecycle: decide whether the handbook applies and name an owner; find cryptographic dependencies and record unknowns; assess confidentiality period, importance, and constraints; prioritise and choose a source-backed path; engage suppliers and migrate; verify what changed and set the subsequent review.
3. The priority branches, on the priority page.
4. The dates comparison, which is the table specified above.

Learn pages have no figure.

## Sources

A date, a duty, or a disagreement remains checkable from the sentence: body, document, month and year, and a public URL. The old rule that this edition does not link FIPS 203, FIPS 204, and FIPS 205 is withdrawn. Parameter tables stay out.

New public sources this edition may cite:

- ASD and ACSC, with CISA and NSA, Post-quantum questions to ask your vendors, updated 5 November 2026. https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors
- ASD and ACSC, Planning for post-quantum cryptography. https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography
- FIPS 203, https://csrc.nist.gov/pubs/fips/203/final
- FIPS 204, https://csrc.nist.gov/pubs/fips/204/final
- FIPS 205, https://csrc.nist.gov/pubs/fips/205/final

The November 2026 vendor guide is the benchmark for the supplier questions. Its own phrase is "common concerns", and the handbook uses that phrase. The August 2023 CISA, NSA, and NIST fact sheet remains the short official starting point for inventory, suppliers, and supply chain.

The NCCoE FAQ's six phases may be named. Inventory field lists and CBOM guidance are cited to SP 1800-38B, not to the FAQ, unless a sentence is present on the FAQ page itself.

Sister-site links to the Secure-by-Design Handbook and the Supply Chain Security Handbook remain onward reading. They are not the authority for a post-quantum date or duty.

## Search, sitemap, and robots

Add build-time local search to the navbar with `@easyops-cn/docusaurus-search-local`. No external search account. If that package cannot run on Docusaurus 3.10.1, the implementation uses another build-time local index and records the package in the plan. It does not add Algolia.

`sitemap.xml` continues to be generated by the existing Docusaurus setting. `static/robots.txt` continues to allow crawling and to name `https://pqchandbook.com/sitemap.xml`. Neither file is treated as missing.

## Checks

Existing behaviour that stays:

- `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` are `throw`.
- `npm run check:sources` still requires `## Sources` and a public `http` link before the next heading.
- `npm run typecheck` and `npm run build` pass.

`npm run check:voice` gains the retired phrases listed under Voice. A line that contains `must` or `shall` fails unless it also contains one of: NCSC, NIST, FIPS, EU, NIS, ASD, ACSC, CISA, NSA, AIVD, ETSI, CFDIR.

A new `npm run check:records` fails unless:

- every page under `docs/` has `last_reviewed: 2026-11-10`, or the single later edition date if that date is updated in every doc, in the editorial policy, and in this check
- each work-product page links to its CSV
- that CSV's header row equals the column list in this spec

`npm test` runs the voice, sources, and records tests.

Before the edition is called done, the production build passes, and a browser pass exercises the chooser, the vendor-managed route, the priority page, and the inventory record, in light and dark themes, at a desktop width and a narrow width. The pass confirms the chooser is the first action, the primary next link on those pages resolves, the CSV link downloads, and the example block is one heading.

A formal screen-reader audit, and live sessions with representative readers, are named on the editorial policy as the next validation. This build does not claim them.

## Files

Update `style-guide.md`, `navigation-structure.md`, `purpose-and-positioning.md`, `docusaurus.config.ts`, `sidebars.ts`, `src/pages/index.tsx`, `src/css/custom.css`, `package.json`, and the voice and source scripts.

Add `scripts/check-records.mjs`, `scripts/check-records.test.mjs`, the doc tree in the URL map, and `static/downloads/*.csv`.

Delete `docs/start-here/` and the retired resource and practice slugs.

## Out of scope

A numeric priority score. Parameter tables. A product catalogue. A symmetric-cryptography programme. A quantum-key-distribution programme. Quantum random-number generators. A blog. One page per algorithm. Canadian government milestone years. A universal deadline copied from ASD. A fifth audience called "supplier". Redirects from retired URLs. An Algolia account. A hand-written sitemap. A formal accessibility certification. Observed usability sessions.
