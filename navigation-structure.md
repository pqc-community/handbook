# PQC Handbook - Navigation Structure

Information architecture, URL conventions, and routing model for `https://pqchandbook.com`, aligned with `docusaurus.config.ts`, `sidebars.ts`, and `docs/`. How readers move through the site, and why, is specified in [reader-journey.md](./reader-journey.md).

## Top-Level Navigation and Sidebars

Top navigation leads with the reader journey, then the reference sections, then GitHub (alongside search and theme toggle). The logo and **PQC Handbook** title link to `/`.

1. **Start here** (`journeySidebar`)
2. **Baseline** (`journeySidebar`)
3. **Programme** (`journeySidebar`)
4. **Learn** (`learnSidebar`)
5. **Technology options** (`technologyOptionsSidebar`)
6. **Standards** (`standardsSidebar`)
7. **Templates** (`templatesSidebar`)
8. **GitHub**

`journeySidebar` holds Start here, Baseline, and the Programme overview, with the programme's practices grouped as **Diagnose**, **Plan**, and **Execute**. Every Markdown file under `docs/` sets `displayed_sidebar` to the sidebar that owns it in `sidebars.ts`.

Do not use standards-body or algorithm names (such as NIST, ETSI, ML-KEM, or FIPS) as top-level navigation labels; organise top-level navigation around reader jobs.
## URL and Linking Conventions

Docs are served at the site root rather than under `/docs/`:

- Canonical domain: `https://pqchandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

URL convention (a page's URL comes from its file path under `docs/`; do not set `slug` in front matter):

- **Characters and length**: lowercase letters, digits, and single hyphens. At most three segments (section, group, page), each at most 32 characters.
- **Pages**: a slug uses the key words of the page's `title`, or the handbook's established term for the activity (for example `inventory`, `priority`, or `subsequent-review`).
- **Standards**:
  - A summary of a document with an identifier uses that identifier as it is commonly cited (`fips-203`, `sp-800-227`, `rfc-9881`), with the issuer as a prefix where the identifier alone is ambiguous (`nist-ir-8547`, `nist-cswp-39`).
  - A document without an identifier uses its issuer and a short name (`ncsc-migration-timelines`, `cfdir-quantum-readiness`).
- **Groups**: a group's slug matches its title (`modules-protocols-certificates`, `us-government-requirements`, `symmetric-and-hash`).
- **No clashes**: no two pages in the same section share a final segment, so a reader cannot confuse them.
- **Enforced**: `npm test` and `npm run check` fail on a slug that breaks the character, length, or depth rules, on `slug` front matter, or on a shared final segment within a section.

URL stability: the site is in pre-release and has not been submitted to search engines, so URLs may change freely, without redirects, to meet this convention. Once the site is submitted, change a published URL only together with a redirect from the old one, and record the submission date here.

Linking guidance:

- In `docusaurus.config.ts`, React pages (`src/pages/`), and cross-section references, use canonical root paths with trailing slashes (for example, `/programme/inventory/` or `/standards/post-quantum/fips-203/`), never `/docs/...`.
- Within the same `docs/` directory, relative Markdown links (such as `./priority.md`) and canonical root paths both work cleanly; broken links, anchors, and Markdown links fail `npm run build`.
- Downloadable work-product CSVs live in `static/downloads/` and resolve at `/downloads/*.csv` (for example, `/downloads/register.csv`). `/downloads/pqc-handbook-records.zip` holds every blank CSV; rebuild it with `npm run records-zip` after changing a CSV, and `npm test` fails if it is out of date or if a CSV header no longer matches its page.

## Site Model

```text
Homepage (/) — the four Start here questions and three outcomes
  ├── Start here (/start-here/) ──► Baseline (/baseline/)
  │                              └► Programme (/programme/ and /programme/*)
  ├── Learn the basics (/learn/*) ──► lessons and optional explainers
  └── Reference ──► Technology options, Standards, Templates
```

- **Journey (`/start-here/`, `/baseline/`, `/programme/`)**: The reader journey specified in [reader-journey.md](./reader-journey.md). Start here asks four questions and gives three outcomes and a Which dates apply to you table. The baseline is the plan every organisation follows. The programme overview gives a first move for each question that applied, the small and full sizes, and the practices in three phases. Journey pages are held to the reading budgets in reader-journey.md, and `npm test` and `npm run check` fail if one is exceeded or a retired routing label appears outside the Standards summaries.
- **Programme practices (`/programme/*`)**: Reusable operating practices in three phases: **Diagnose** (set up the programme, inventory the cryptography), **Plan** (decide what to migrate first, plan the migration, work with suppliers), and **Execute** (choose an option in Technology options, make and verify one change, keep the ability to change again, review and report). Each practice names who leads it and the record it fills.
- **Learn the Basics (`/learn/*`)**: An introductory track of ten numbered core lessons for visitors who want conceptual grounding. Each lesson ends with a short self-check; the final lesson (`/learn/crypto-agility/`) hands off to Start here, the worked examples, and `/templates/reference/glossary/`. Optional **Explainers** under `/learn/explainers/*` each answer one question in more depth and link back to the lesson that introduces it.
- **Reference Sections**:
  - **Technology options (`/technology-options/`)**: Reference cards organised by technology, so a reader starts from the system in front of them: an overview table of each technology's job and the status of its post-quantum mechanism; *choosing* (who decides, the authority check, the hybrid rule of thumb, protocol mechanisms, signature schemes, and what to record); then cards grouped as connections, certificates and identity, signing, stored data, and platforms and environments. Process stays in the programme, positions in Standards, and concepts in Learn.
  - **Standards (`/standards/`)** — Reference summaries of standards, government requirements, national algorithm positions, protocol specifications, and external migration guides, grouped by their role in the transition. Each summary states its audience and whether it binds or recommends.
  - **Templates (`/templates/`)** — What the reader fills in and keeps, grouped by what they do with it. **Records** (`/templates/records/`) are the five migration records: the register, purchase wording, programme charter, change record, and progress report, with one zip of every blank CSV. **Examples** (`/templates/examples/`) hold two worked examples: a marketing agency on the baseline and a manufacturer running a full programme. **Reference** (`/templates/reference/`) holds the glossary. Practices and technology cards write to the records; each record page names who keeps it.
## Sitemap

```text
/

/start-here/

/baseline/

/programme/
/programme/changing-algorithms-again/
/programme/implementation/
/programme/inventory/
/programme/plan/
/programme/priority/
/programme/set-up/
/programme/subsequent-review/
/programme/suppliers/

/learn/
/learn/algorithms/
/learn/crypto-agility/
/learn/explainers/forward-secrecy/
/learn/explainers/hash-based-signatures/
/learn/explainers/kem/
/learn/explainers/keys/
/learn/explainers/quantum-computers/
/learn/explainers/quantum-safe-claims/
/learn/explainers/research-to-deployment/
/learn/explainers/signature-dependencies/
/learn/explainers/tls/
/learn/explainers/when-to-start/
/learn/explainers/why-timelines-differ/
/learn/hybrid/
/learn/in-real-systems/
/learn/public-key-cryptography/
/learn/quantum-threat/
/learn/signatures-and-trust/
/learn/standardisation/
/learn/timelines/
/learn/what-post-quantum-means/

/technology-options/
/technology-options/backups-archives/
/technology-options/choosing/
/technology-options/cloud-saas/
/technology-options/code-signing/
/technology-options/dnssec/
/technology-options/document-signing/
/technology-options/encrypted-files/
/technology-options/firmware-secure-boot/
/technology-options/hsm-kms/
/technology-options/identity/
/technology-options/kerberos/
/technology-options/libraries-bespoke-code/
/technology-options/ot-industrial/
/technology-options/pki/
/technology-options/secure-messaging/
/technology-options/ssh/
/technology-options/tls/
/technology-options/vpn-ipsec/
/technology-options/wifi-network-access/

/standards/
/standards/classical-public-key/
/standards/classical-public-key/fips-186-5/
/standards/classical-public-key/sp-800-186/
/standards/classical-public-key/sp-800-56a/
/standards/classical-public-key/sp-800-56b/
/standards/migration-guides/
/standards/migration-guides/asd-planning/
/standards/migration-guides/canada-itsm-40-001/
/standards/migration-guides/cfdir-quantum-readiness/
/standards/migration-guides/cisa-nsa-nist-fact-sheet/
/standards/migration-guides/dutch-pqc-handbook/
/standards/migration-guides/etsi-tr-103-619/
/standards/migration-guides/etsi-tr-104-016/
/standards/migration-guides/eu-nis-roadmap/
/standards/migration-guides/nccoe-migration-to-pqc/
/standards/migration-guides/ncsc-migration-timelines/
/standards/migration-guides/pqcc-roadmap/
/standards/migration-guides/vendor-questions/
/standards/modules-protocols-certificates/
/standards/modules-protocols-certificates/fips-140-3/
/standards/modules-protocols-certificates/fips-201-3/
/standards/modules-protocols-certificates/rfc-10024/
/standards/modules-protocols-certificates/rfc-10073/
/standards/modules-protocols-certificates/rfc-9881/
/standards/modules-protocols-certificates/sp-800-52/
/standards/national-algorithm-positions/
/standards/national-algorithm-positions/anssi-pqc-position/
/standards/national-algorithm-positions/bsi-tr-02102-1/
/standards/national-algorithm-positions/cnsa-2-0/
/standards/post-quantum/
/standards/post-quantum/fips-203/
/standards/post-quantum/fips-204/
/standards/post-quantum/fips-205/
/standards/post-quantum/nist-ir-8528/
/standards/post-quantum/nist-ir-8545/
/standards/post-quantum/nist-ir-8610/
/standards/post-quantum/sp-800-208/
/standards/post-quantum/sp-800-227/
/standards/symmetric-and-hash/
/standards/symmetric-and-hash/fips-180-4/
/standards/symmetric-and-hash/fips-197/
/standards/symmetric-and-hash/fips-198-1/
/standards/symmetric-and-hash/fips-202/
/standards/symmetric-and-hash/sp-800-108/
/standards/symmetric-and-hash/sp-800-132/
/standards/symmetric-and-hash/sp-800-185/
/standards/symmetric-and-hash/sp-800-232/
/standards/symmetric-and-hash/sp-800-56c/
/standards/symmetric-and-hash/sp-800-90a/
/standards/transition-and-key-management/
/standards/transition-and-key-management/nist-cswp-39/
/standards/transition-and-key-management/nist-ir-8547/
/standards/transition-and-key-management/sp-800-131a/
/standards/transition-and-key-management/sp-800-57-part-1/
/standards/us-government-requirements/
/standards/us-government-requirements/cisa-pqc-product-categories/
/standards/us-government-requirements/eo-14306/
/standards/us-government-requirements/eo-14412/
/standards/us-government-requirements/nsm-10/
/standards/us-government-requirements/omb-m-26-15/
/standards/us-government-requirements/qccpa/

/templates/
/templates/examples/
/templates/examples/protect-this-first/
/templates/examples/stay-on-supplier-updates/
/templates/records/
/templates/records/change-record/
/templates/records/programme-charter/
/templates/records/progress-report/
/templates/records/purchase-wording/
/templates/records/register/
/templates/reference/
/templates/reference/glossary/
```
## Homepage and Footer Routing

- **Homepage (`src/pages/index.tsx`)**: A calm reference entry point, not a product landing page. A Deep Teal hero gives the tagline, who has work to do, why now with the UK NCSC's dates and their audience, the audience, and the specialist-advice limit. Below it: the four Start here questions beside their three outcomes, so a first-time reader is one page from a first action, with links to both worked examples; then four compact reference cards (Learn the basics, Technology options, Standards, Templates), each naming pages inside it. The jobs-and-clocks thesis lives in the Timelines lesson and the programme's first moves, and the register in the worked examples, not on the homepage. No sales copy, feature grids, large or repeated buttons, gradients, or imagery.
- **Footer (`docusaurus.config.ts`)**: Exposes three columns — **Start**, **Learn**, and **Reference**. Keep footer link labels concise (`≤ 32` characters, checked by `npm run check`) so columns fit cleanly on mobile viewports, whereas `sidebars.ts` labels can be slightly fuller (`≤ 50` characters).
## Section Placement and Expansion Rules

Add new pages only when there is enough distinct, decision-useful material that cannot be served cleanly on an existing page, and place them by reader job:

- **Conceptual primers or deeper technical distinctions** belong in `/learn/` or `/learn/explainers/`.
- **Changes to how readers are routed** (the questions, outcomes, first moves, or programme sizes) belong in the journey pages and must follow [reader-journey.md](./reader-journey.md); do not add a new routing layer, category, path, or track.
- **Individual cryptographic standards, government directives, and external migration guides** belong under `/standards/`, grouped by transition role (*post-quantum*, *transition and key management*, *classical*, *symmetric*, *modules, protocols, and certificates*, *US government requirements*, *national algorithm positions*, *migration guides*) rather than by issuing organisation.
- **Lifecycle operating activities** belong in `/programme/`, in the Diagnose, Plan, or Execute group; each practice fills at least one record in `/templates/records/` or states its evidence on the page.
- **What good looks like for a specific technology** belongs in `/technology-options/`, as a short reference card per technology that keeps the cryptographic jobs distinct, rather than one narrative page per algorithm.
- **What a reader fills in and keeps** belongs in `/templates/`, in a group named for what the reader does with it: records to fill in (`/templates/records/`), worked examples to follow (`/templates/examples/`), and reference to look up (`/templates/reference/`). Add a record only when a practice produces it and no existing record holds it. Add a new group, such as briefings or tools, only when its first page is written, and give each group a landing page: a written overview once it holds several pages, or a generated index from `sidebars.ts` while it holds one. Keep the hierarchy to section, group, and page; add a record only when the register cannot hold it, because every extra record is more for a reader to keep. Send lists of cited works to `/standards/`, and keep material about the handbook itself (changes, citation, editions) out of `/templates/`.
