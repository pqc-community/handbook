# Style guide

Rules for public handbook pages in `docs/`, homepage copy in `src/pages/index.tsx`, and downloadable templates in `static/downloads/`. See also [purpose-and-positioning.md](./purpose-and-positioning.md), [navigation-structure.md](./navigation-structure.md), and [brand-guidelines.md](./brand-guidelines.md).

These maintainer notes are not scanned by the voice checks (`navigation-structure.md` is scanned).

## Voice

Plain British English: organisation, programme, labelled.

Body prose is complete sentences. A homepage choice may be a short clause. Front matter, headings, tables, fenced diagrams, source lists, the minimum-fields line, a glossary entry, and a label that only introduces a table or a list are outside body prose. A glossary entry may open with a noun phrase. The glossary section says how an entry is shaped. An onward link is a sentence, including the primary next page on a route: "Continue with Public-key cryptography." and "The primary next page is Commodity software." The voice check rejects `next:` and `primary next page:` anywhere in a scanned line.

A short sentence is fine when the next sentence answers it. A paragraph that gives each new term its own sentence is a definition list: state the contrast in the lesson, and leave the definitions in the glossary. Numbered steps stay short. A reference entry's labelled fields, such as Covers, Assumes, and Leaves out, are outside body prose. A spec states the claim to keep and may show one example sentence. The page writes the paragraph. A test locks the facts and the forbidden mistake. It does not include a full stop.

An insufficient record may be casual, because it is the record the page is warning against. It appears only inside Example.

Second person is used for a procedure the reader carries out. A responsibility that belongs to a role names the role: executive sponsor, migration lead, asset owner, procurement, legal or risk, operations, supplier.

A public sentence speaks to the person doing the work. If the subject is the page, the handbook, the reader, the edition, or the build, rewrite it so the action is the subject. Limits stay; they name what to leave for a later record. These notes may still say "the reader", because they are written for the person editing the handbook.

### Replacement terms

| Term | Use it for |
| --- | --- |
| applicable migration timeline | The dated milestones of the authority the organisation recorded |
| system environment | The product, service, and operating organisation being discussed |
| data confidentiality period | How long the data must remain confidential |
| subsequent review | The planned date when the record is opened again |

### Labels

A sentence that states a date, a duty, a sourced fact, or a technical choice begins with one of these labels (defined publicly on [Editorial policy](./docs/resources/editorial-policy.md)):

- **Requirement** — a binding obligation inside the audience named by that authority.
- **Authority recommendation** — the source advising an action.
- **Authority statement** — the source describing a fact.
- **Handbook practice** — the handbook's own instruction, followed by the sources it rests on.
- **Handbook explanation** — a comparison table or sequence diagram drawn on a Learn explainer page.
- **Example** — an illustration, including the clinic.

Except under **Example**, a date or obligation names the source, the publication or update date, the jurisdiction, the audience, and the status when those change the meaning.

`must` and `shall` appear only in a **Requirement** sentence, and that sentence names the authority. **Handbook practice** uses "record", "use", "ask", and "leave".

### Automated checks

| Command | Script | What it enforces |
| --- | --- | --- |
| `npm run check:voice` | `scripts/check-voice.mjs` | Scans `docs/`, `src/pages/index.tsx`, `docusaurus.config.ts`, and `navigation-structure.md` for retired phrases, edition-banned phrases, and unattributed `must`/`shall`. |
| `npm run check:sources` | `scripts/check-sources.mjs` | Requires every `docs/**/*.md` file to have `## Sources` with at least one `[label](https://...)` link before the next heading. |
| `npm run check:records` | `scripts/check-records.mjs` | Requires `last_reviewed: 2026-11-10` on every `docs/**/*.md` file and verifies that all seven work-product pages link to their CSVs with matching header rows. |
| `npm test` | `scripts/*.test.mjs` | Runs unit tests for the three checkers above plus `check-clinic.test.mjs` (clinic consistency and page contracts) and `check-explainers.test.mjs` (Mermaid pin, sequence diagrams, and explainer link isolation). |

The voice check rejects these retired and edition phrases anywhere in its scanned file set:

- Retired phrases: `what you leave with`, `i own the product dates`, `i have to ask a vendor`, `i have to show evidence`, `i have to change a protocol`, `i own the plan`, `choose your path`, `leave with`, `operating layer`, `the rhythm`
- Edition phrases: `the clock`, `clocks`, `secrecy life`, `the stack`, `the next pass`, `weak answer`, `stronger answer`, `five responsibilities`, `where to start`, `start here`, `this page`, `the reader`, `a reader`, `next:`, `primary next page:`

A line that contains `must` or `shall` fails the edition scan unless it also contains one of: `NCSC`, `NIST`, `FIPS`, `EU`, `NIS`, `ASD`, `ACSC`, `CISA`, `NSA`, `AIVD`, `ETSI`, `CFDIR`.

## Spelling and abbreviations

Use consistently:

- **organisation** (not organization)
- **programme** (not program, when meaning a planned set of activities)
- **labelled** (not labeled)

Expand an abbreviation at first use on every page. Use straight apostrophes (`supplier's`) in Markdown tables so string assertions match.

## Page shapes

| Shape | Contract |
| --- | --- |
| **Chooser** | The homepage (`src/pages/index.tsx`) only. Promise, limit, six situation choices, the separate Learn the basics link, one clinic priority row linking to `/resources/protect-this-first/`, then the four reference section cards. |
| **Route page** | Who it is for; the ordered reading list and why each step is in that order; the work-product output; one primary onward sentence naming the first page in the order; and that route's decision aid (exception check on `vendor-managed-software`; verifier updateability check on `hard-to-change-systems`; role inputs and LATICE correspondence labelled as **Handbook practice** on `organisation-wide`; preparation, vague/missing/concerning follow-up, and per-product/version/job recording on `ask-a-supplier`; classification questions without risk assessment on `not-sure`). Does not repeat practice-page procedures. |
| **Learn lesson** | One idea in ordinary sentences, then one onward link (plus one optional pointer sentence to the paired explainer on `public-key-cryptography`, `quantum-threat`, `algorithms`, and `in-real-systems`). No migration procedure, no parameter table, and no diagram. |
| **Learn explainer** | Optional concept pages under `/learn/explainers/`. Title is a question, repeated as the opening sentence; names the paired short lesson; develops one worked contrast (with a small table or static `sequenceDiagram` where applicable, or the authority-comparison table on `timelines`); states 2–3 takeaway sentences; ends with `Sources`, a back link to the short lesson, and an onward link to the next explainer or `/learn/`. |
| **Practice page** | Exact seven headings in the order below, and no others before `Sources`. |
| **Option page** | Decision branches and operational checks (`choosing`, `key-establishment`, `signatures`, `long-lived-roots`) using the seven practice headings; records which authority is followed without choosing for the organisation or printing parameter tables (`ML-KEM-768` may be named only as the default stated by NIST IR 8547). |
| **Work-product page** | When to use it; minimum fields; one filled clinic example; one blank table with the exact CSV columns; the `/downloads/<file>.csv` link; storage/protection rules and `unknown`/semicolon field rules; `Sources`; `Related pages`. |
| **Standards summary** | Reference pages under `/standards/<category>/<slug>/`: metadata table (`Authority`, `Publication`, `Status`, `Official source`), `## What it covers`, `## Role in the post-quantum transition`, `## Sources`, and `## Related pages`. |
| **Reference index** | Section and category landings, curated references, the glossary, and the editorial policy. Concise routing and scope notes ending with `## Sources` and `## Related pages`. |

Every page displays `Last reviewed` from front matter `last_reviewed: 2026-11-10`. If an edition review finishes on a later date, every page, `scripts/check-records.mjs`, and the changelog on [Editorial policy](./docs/resources/editorial-policy.md) move to that single date together.

### Practice page headings

In this order, and no others before `Sources`:

1. `When this applies`
2. `Do this`
3. `Keep this evidence`
4. `Example`
5. `Limits and next page`
6. `Sources`
7. `Related pages`

`Do this` is a numbered procedure. `Example` is one heading containing one insufficient record and one decision-ready record (or, on `implementation`, one decision-ready closed change and one blocked change). `Limits and next page` names one primary onward page as a sentence. `Related pages` is a secondary list.

### Diagrams

- Diagrams on Learn explainers (`keys`, `kem`, `tls`) are static `mermaid` code fences beginning with `sequenceDiagram`, preceded immediately by a sentence stating what the figure shows.
- Do **not** add image files (`![...]`), flowcharts, dynamic `@theme/Mermaid` imports, or `@mermaid-js/layout-elk`. `quantum-computers` has no diagram, `tls` does not use the word `handshake`, `kem` does not name `ML-KEM-768` or `parameter set`, and no explainer mentions the clinic.
- Because Docusaurus renders invalid Mermaid syntax as an inline error box rather than failing `npm run build`, inspect rendered diagrams in the browser whenever Mermaid fences change.

## Work products and the clinic illustration

### CSV templates

CSV files live in `static/downloads/` and stay **header-only**. Each page's blank table and filled example match the CSV header row (checked by `npm run check:records`):

| Work product | CSV file | Columns |
| --- | --- | --- |
| Inventory record | `static/downloads/inventory-record.csv` | `system,owner,key-establishment algorithm,signature algorithm,software control,confidentiality period,renewal,version,dependencies,not visible to a scan,confidence` |
| Priority record | `static/downloads/priority-record.csv` | `asset,confidentiality period,job,impact,lead time,dependencies,supplier readiness,decision,reason,source,subsequent review` |
| Vendor response log | `static/downloads/vendor-response-log.csv` | `supplier,product and version,question,answer,date,source,judgement,follow-up,decision` |
| Migration plan | `static/downloads/migration-plan.csv` | `asset,owner,why it is included,applicable timeline,authority,milestone,dependency,next action,subsequent review` |
| Change record | `static/downloads/change-record.csv` | `system,change,option,authority,pilot scope,tests,rollback trigger,who can roll back,deployed-state check,result,date` |
| Evidence record | `static/downloads/evidence-record.csv` | `claim,record,source,date,owner,subsequent review` |
| Review log | `static/downloads/review-log.csv` | `date,what was reviewed,unresolved items,owner,next review` |

### Field and protection rules

Every work-product page states these rules (checked by `scripts/check-clinic.test.mjs`):

- Keep a real record off public tickets and unlocked shared drives, stored with the same care as the asset list it describes.
- Keys, secrets, and personal data stay out of the file; name the system only.
- Any unfilled cell uses `unknown`. Table date cells use ISO dates (`YYYY-MM-DD`).
- Shared libraries or services go in `dependencies` separated by a semicolon (`;`), not in separate system rows. Multiple timelines or sources in one cell are also separated by a semicolon.
- Allowed controlled values:
  - `job`: `key establishment`, `signatures`, or `non-updatable verifier`
  - `judgement`: `complete`, `vague`, `missing`, or `concerning` (`complete` requires product, version, construction, date, and a retainable source)
  - `confidence` (inventory): `known` only when both algorithm cells name a construction; otherwise `unknown`
- On the vendor response log, use a separate row for each product, version, and cryptographic job. Question groups follow the five phases of the ASD/ACSC/CISA/NSA vendor guide.

### Canonical clinic values

[Protect this first](./docs/resources/protect-this-first.md) and the seven work products share one fictional clinic illustration (locked by `scripts/check-clinic.test.mjs`):

- **Inventory**: two rows — `Health records on the vendor system` and `Firmware signature check that cannot be updated in the field` (`not visible to a scan: firmware trust anchor`), both owned by `the clinic operations lead` with `confidence: unknown`.
- **Priority**: both assets are first for different jobs — health records `first for key establishment` (`confidentiality period longer than 10 years`, cited to `EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025`, review `2026-12-01`) and firmware `first for non-updatable verifier` (cited to `UK NCSC timelines, modified 3 August 2026`, review `2026-12-01`). NIST IR 8547 is **not** cited as the source of the 10-year threshold. (A short-lived channel under one year appears only as the worked contrast on `priority.md`.)
- **Supplier letter** (`2026-08-14`): `Clinic software supplier` names the product and version in the letter (no invented version number like `4.2`), names `ML-KEM-768`, names the release date, and states that signatures are not in that release (`judgement: complete`, `decision: record the key-establishment date and open a signatures follow-up`).
- **Changes**: health-records pilot row is closed (`option: ML-KEM-768`, `authority: NIST IR 8547, October 2026`, `result: Pilot passed`, `date: 2026-08-14`); field-device firmware row has `option`, `authority`, `result`, and `date` set to `unknown` and is explicitly marked **blocked** (`implementation does not start while the option is unknown`).
- **Migration plan, evidence, and review log**: health-records plan cites `end of 2030` under the EU NIS Cooperation Group roadmap v1.1 with `next action: signatures follow-up`; evidence record cites the supplier letter of `2026-08-14` and `NIST IR 8547, October 2026`; review log carries `blocked firmware option` as the unresolved item with next review `2026-12-01` (always an **Example**, never a **Requirement**).

## Glossary entries

The glossary is a reference index. Entries stay in alphabetical order by the heading.

The heading is the term a person will look up. Write an abbreviation as `Short form (expansion)`, as in `CBOM (cryptography bill of materials)`. Write a full name as `Full name (short form)` when the short form is the one used in the lessons, as in `Post-quantum cryptography (PQC)`. Leave the parentheses out when the words in them are already the term.

Each entry is a short paragraph, long enough to use the term. Say what it is, and say what it is not or how it differs from the neighbouring term. The last sentence may name the page that uses the term, as `See [Public-key cryptography](/learn/public-key-cryptography/).` A noun phrase may open the paragraph.

Start the paragraph with **Handbook wording:** when the gloss is the handbook's own, or **Authority recommendation:** when the sentence states what a source says. An algorithm named by a FIPS names NIST and links that FIPS, without either label. The rest of that paragraph says which job the algorithm does and which neighbouring algorithm does not.

Do not paste the lesson, and do not add a parameter table. A date or a duty appears only when the entry takes it from the source line it cites.

## Citations

A date, a duty, or a disagreement remains checkable from the sentence: body, document, month and year, and a public URL. Parameter tables stay out. FIPS 203, FIPS 204, and FIPS 205 may be linked on handbook pages when the page cites those standards.

**Page endings**

All handbook pages end with `## Sources` followed by `## Related pages`. `npm run check:sources` requires at least one `[label](https://...)` link under `## Sources` before the next heading (angle-bracket autolinks do not satisfy the checker).

### Source order

When a page or the editorial policy orders sources, use:

1. Standards and legal requirements
2. National cyber guidance
3. Sector guidance
4. Illustrative practice

Sister-site links to the Secure-by-Design Handbook and the Supply Chain Security Handbook remain onward reading. They are not the authority for a post-quantum date or duty.

### Sourcing gate

A sentence ships when the writer can point to a **filed source** or official publication page that contains the claim and links to its public URL. Full reference summaries of cited standards, US federal directives, and migration guides live under `/standards/` and are indexed on [Curated references](./docs/resources/curated-references.md).

Do **not** treat gitignored local paths as public citations. Material under `.ai-helper-files/` is for drafting only.

**Core public URLs and citation rules:**

| Source | Public URL | Citation rule |
| --- | --- | --- |
| UK NCSC migration timelines (modified 3 August 2026) | https://www.ncsc.gov.uk/guidance/pqc-migration-timelines | State the primary audience (large organisations, CNI, bespoke IT) alongside the supplier-update path for commodity IT |
| UK NCSC preparation whitepaper (August 2024) | https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography | UK preparation steps recorded in that paper |
| EU NIS Cooperation Group roadmap (v1.1, 11 June 2025) | https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf | Member State milestones and the 10-year high-risk confidentiality threshold |
| NIST IR 8547 (final, October 2026) | https://doi.org/10.6028/NIST.IR.8547 (or https://csrc.nist.gov/pubs/ir/8547/final) | Cite the October 2026 final (never the initial public draft); distinguish the NIST standards timeline from US federal agency dates |
| CISA, NSA, and NIST Quantum-Readiness fact sheet (August 2023) | https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf | Short official starting point for inventory, embedded/hardware blind spots, suppliers, and supply chain |
| Dutch PQC Migration Handbook (AIVD, CWI, TNO, December 2024) | https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf | Diagnose, plan, execute; urgent, regular, and cryptography-supplier personas; link rather than rewrite |
| PQCC migration roadmap (May 2025) | https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf | Supplementary four-part checklist |
| NCCoE Migration to PQC project & FAQ (updated 5 November 2026) | https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html | Six migration phases; NIST SP 1800-38A/B/C (2023) must be labelled as preliminary drafts not planned to become finals, with CBOM described as a developing model in SP 1800-38B rather than a handbook requirement |
| ASD, ACSC, CISA, and NSA vendor questions (updated 5 November 2026) | https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors | Benchmark for supplier questions across five phases; use the guide's phrase "common concerns" |
| ASD and ACSC planning for PQC | https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography | LATICE lifecycle phases; label end of 2030 as ASD's planning milestone for its audience, never a universal deadline |
| Canadian CFDIR Quantum-Readiness Best Practices (10 July 2024) | https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/documents/Quantum-Readiness%20Best%20Practices%20-%20v04%20-%2010%20July%202024.pdf | Leadership actions without a cryptographer; do not invent Canadian government milestone years |
| ETSI TR 103 619 & ETSI TR 104 016 | https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf and https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf | Three-stage migration framing (setting QKD and QRNG aside) and eleven-step repeatable programme-office cycle |
| FIPS 203, FIPS 204, FIPS 205 | https://csrc.nist.gov/pubs/fips/203/final , https://csrc.nist.gov/pubs/fips/204/final , https://csrc.nist.gov/pubs/fips/205/final | Foundational NIST PQC standards for ML-KEM, ML-DSA, and SLH-DSA |

An unsourced date, percentage, or claim that an authority requires something **does not go on the page**.

## Front matter and SEO titles

Each doc needs `title`, `description`, `sidebar_label`, `displayed_sidebar`, and `last_reviewed`. `sidebar_label` is the short name in the sidebar and matches [navigation-structure.md](./navigation-structure.md).

`title` is both the visible `<h1>` heading and the search-result `<title>` (Docusaurus appends ` | PQC Handbook`), and `description` is the search snippet. Avoid two pages competing for the same search query: keep the head query on the page that directly answers it, and give routing or supporting pages titles and descriptions that name their distinct job (for example, separating a vendor-response practice or route from the supplier-questions standard summary). The homepage is the sole exception where `Layout` `title` (`Post-quantum cryptography handbook`) differs from the visible hero `<h1>` (`PQC Handbook`).
