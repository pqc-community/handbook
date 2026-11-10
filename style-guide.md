# Style guide

Rules for public handbook pages in `docs/`. The edition spec is [planning/superpowers/specs/2026-11-10-site-revision-design.md](./planning/superpowers/specs/2026-11-10-site-revision-design.md).

These maintainer notes are not scanned by the voice checks.

## Voice

Plain British English: organisation, programme, labelled.

Body prose is complete sentences. A homepage choice may be a short clause.

An insufficient record may be casual, because it is the record the page is warning against. It appears only inside Example.

Second person is used for a procedure the reader carries out. A responsibility that belongs to a role names the role: executive sponsor, migration lead, asset owner, procurement, legal or risk, operations, supplier.

### Replacement terms

| Term | Use it for |
| --- | --- |
| applicable migration timeline | The dated milestones of the authority the organisation recorded |
| system environment | The product, service, and operating organisation being discussed |
| data confidentiality period | How long the data must remain confidential |
| subsequent review | The planned date when the record is opened again |

### Labels

A sentence that states a date, a duty, or a technical choice begins with one of these labels: **Requirement**, **Authority recommendation**, **Handbook practice**, or **Example**. The sentence also names the source, the publication or update date, the jurisdiction, and the audience, unless it is the Example label. Handbook practice is the handbook's own instruction and is followed by the sources it rests on.

`must` and `shall` appear only in a Requirement sentence, and that sentence names the authority. Handbook practice uses "record", "use", "ask", and "leave".

### Automated voice checks

`findVoiceViolations` enforces the legacy retired phrases on `docs/`, `src/pages/index.tsx`, `docusaurus.config.ts`, and `navigation-structure.md`. The finish plan joins `findEditionVoiceViolations` into that function. Until then, `npm run check:voice` runs only the legacy scan.

The edition scan rejects these phrases anywhere in the same file set:

`the clock`, `clocks`, `secrecy life`, `the stack`, `the next pass`, `weak answer`, `stronger answer`, `five responsibilities`, `where to start`, `start here`

A line that contains `must` or `shall` fails the edition scan unless it also contains one of: NCSC, NIST, FIPS, EU, NIS, ASD, ACSC, CISA, NSA, AIVD, ETSI, CFDIR.

## Spelling

Use consistently:

- **organisation** (not organization)
- **programme** (not program, when meaning a planned set of activities)
- **labelled** (not labeled)

## Page shapes

Six shapes appear in this edition:

| Shape | Contract |
| --- | --- |
| **Chooser** | The homepage only. Promise, limit, six choices, the separate learn link, one clinic row, then the library. |
| **Route page** | Who it is for. The ordered pages and why each one is in the order. The output, linked to its work product. One primary next page, which is the first page in the order. A route page holds the decision aid named in the route section of the spec. It does not repeat the practice pages. |
| **Learn page** | One idea, in ordinary sentences, then one onward link. A learn page does not give a migration procedure and does not include a parameter table. |
| **Practice page** | Headings in the order below; no others before Sources. |
| **Work-product page** | When to use it. The minimum fields. One filled example. One blank table with the same columns as the CSV. The CSV link. How to protect a record that contains a real inventory. How to record Unknown. Sources. Related pages. |
| **Reference index** | Section landings, migration guides, curated references, the glossary, and the editorial policy. Each entry names the intended reader and the output. These pages stay short. |

Every page displays `Last reviewed` from front matter `last_reviewed: 2026-11-10`. If implementation finishes on a later date, every page and the changelog move to that single edition date together.

### Practice page headings

In this order, and no others before Sources:

1. When this applies
2. Do this
3. Keep this evidence
4. Example
5. Limits and next page
6. Sources
7. Related pages

Do this is a numbered procedure. Example is one heading. Inside it, one insufficient record and one decision-ready record. Limits and next page names one primary next page. Related pages is a secondary list.

## Citations

A date, a duty, or a disagreement remains checkable from the sentence: body, document, month and year, and a public URL. Parameter tables stay out. FIPS 203, FIPS 204, and FIPS 205 may be linked on handbook pages when the page cites those standards.

**Page endings**

Practice and other narrative pages end with `## Sources` and `## Related pages` as the spec describes. Work-product pages use the same Sources and Related pages ending.

The build runs `npm run check:sources`, which requires at least one `http` link under `## Sources` before the next heading.

### Source order

When a page or the editorial policy orders sources, use:

1. Standards and legal requirements
2. National cyber guidance
3. Sector guidance
4. Illustrative practice

Sister-site links to the Secure-by-Design Handbook and the Supply Chain Security Handbook remain onward reading. They are not the authority for a post-quantum date or duty.

### Sourcing gate

A sentence ships when the writer can point to a **filed dump** that contains the claim, or to a line in the purpose or landscape notes that contains both the claim and the public URL. The page links to that URL.

Do **not** treat gitignored local paths as public citations. Material under `.ai-helper-files/` is for drafting only.

**Allowed public sources (examples)** — the edition spec is the full list:

| Topic | Public URL (use on the page) |
| --- | --- |
| UK PQC migration timelines | https://www.ncsc.gov.uk/guidance/pqc-migration-timelines |
| UK preparation whitepaper | https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography |
| EU NIS Cooperation Group roadmap | https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf |
| NIST IR 8547 (final, October 2026) | https://doi.org/10.6028/NIST.IR.8547 |
| Quantum readiness fact sheet | https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf |
| Dutch PQC Migration Handbook | https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf |
| PQCC migration roadmap | https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf |
| NIST SP 1800-38 preliminary drafts | URLs in the project's `sources.txt` for discovery; say discovery is still a 2023 preliminary draft |
| ASD and ACSC, with CISA and NSA, Post-quantum questions to ask your vendors, updated 5 November 2026 | https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors |
| ASD and ACSC, Planning for post-quantum cryptography | https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography |
| FIPS 203 | https://csrc.nist.gov/pubs/fips/203/final |
| FIPS 204 | https://csrc.nist.gov/pubs/fips/204/final |
| FIPS 205 | https://csrc.nist.gov/pubs/fips/205/final |

The November 2026 vendor guide is the benchmark for supplier questions. Its own phrase is "common concerns", and the handbook uses that phrase. The August 2023 CISA, NSA, and NIST fact sheet remains the short official starting point for inventory, suppliers, and supply chain.

**Reading-list works** (NCCoE FAQ, Canadian CFDIR guide, ETSI TR 104 016, ETSI TR 103 619, Dutch government resource list) may repeat the one-line job, date, and URL from the spec; they do not add claims beyond that line.

An unsourced date, percentage, or claim that an authority requires something **does not go on the page**.

## Front matter

Each doc needs `title`, `description`, `sidebar_label`, `displayed_sidebar`, and `last_reviewed`. `sidebar_label` is the short name in the sidebar and matches the book map in [navigation-structure.md](./navigation-structure.md). `title` is the page heading and the search-result title. `description` is the search snippet. Docusaurus appends ` | PQC Handbook`.
