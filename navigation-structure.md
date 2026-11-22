# PQC Handbook - Navigation Structure

Information architecture, URL conventions, and routing model for `https://pqchandbook.com`, aligned with `docusaurus.config.ts`, `sidebars.ts`, and `docs/`.

## Top-Level Navigation and Sidebars

Top navigation stays restrained. The logo and **PQC Handbook** title link to `/`; the explicit navbar items are the conceptual track, the four reference sections, and GitHub (alongside search and theme toggle):

1. **Learn the basics** (`learnSidebar`)
2. **Standards** (`standardsSidebar`)
3. **Migration practices** (`migrationPracticesSidebar`)
4. **Technology options** (`technologyOptionsSidebar`)
5. **Resources** (`resourcesSidebar`)
6. **GitHub**

**Situation routes** (`routesSidebar`) are intentionally omitted from the top navbar so top-level navigation stays uncluttered. Visitors enter `/routes/*` from the homepage path chooser or the footer, and `routesSidebar` keeps the overview, both paths, and the two asset tracks visible once inside a route. Every Markdown file under `docs/` sets `displayed_sidebar` to the sidebar that owns it in `sidebars.ts`.

Do not use standards-body or algorithm names (such as NIST, ETSI, ML-KEM, or FIPS) as top-level navigation labels; organise top-level navigation around reader jobs.

## URL and Linking Conventions

Docs are served at the site root rather than under `/docs/`:

- Canonical domain: `https://pqchandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

Linking guidance:

- In `docusaurus.config.ts`, React pages (`src/pages/`), and cross-section references, use canonical root paths with trailing slashes (for example, `/migration-practices/inventory/` or `/standards/post-quantum/fips-203/`), never `/docs/...`.
- Within the same `docs/` directory, relative Markdown links (such as `./priority.md`) and canonical root paths both work cleanly; broken links, anchors, and Markdown links fail `npm run build`.
- Downloadable work-product CSVs live in `static/downloads/` and resolve at `/downloads/*.csv` (for example, `/downloads/inventory-record.csv`). `/downloads/pqc-handbook-records.zip` holds every blank CSV; rebuild it with `npm run records-zip` after changing a CSV, and `npm test` fails if it is out of date or if a CSV header no longer matches its page.

## Site Model

```text
Homepage Path Chooser (/)
  ├── Situation Routes (/routes/*) ──► Migration Practices, Options, Standards, and Resources
  └── Learn the Basics (/learn/*)  ──► Plain-English lessons + optional Explainers
```

- **Path Chooser (`/`) and Routes (`/routes/*`)**: Route visitors into an ordered sequence of reference pages without duplicating those pages into separate silos. `/routes/` shows two paths and three asset tracks. The short path is *vendor-managed software*. The full path is *organisation-wide*, which runs the programme and sends each asset to its track: *vendor-managed software* for commodity assets, *long-lived confidentiality* (driven by the data confidentiality period), or *hard-to-change systems* (driven by change lead time, relying parties, and non-updatable verifiers). Each track page carries its own deadlines and technology cards. [Decide whether to act](/migration-practices/diagnose/) owns every rule that chooses a path or route, including the vendor-managed route's five conditions and what to do when an answer is unknown; route pages link to those rules rather than restating them. Each route page says who it is for, in terms of those answers, its ordered steps (each a practice and the record it fills), its output records, when to leave and where to go, and the worked example that shows it. `npm test` and `npm run check` fail if a route page or the overview does not link Decide whether to act and a record page, or if a decision-note `route` value is not one of the three track names, optionally followed by a bracketed qualifier.
- **Learn the Basics (`/learn/*`)**: An introductory track of ten numbered core lessons for visitors who want conceptual grounding before planning a migration. Each lesson ends with a short self-check; the final lesson (`/learn/crypto-agility/`) hands off to the situation routes, the worked example, and `/resources/reference/glossary/`. Optional **Explainers** under `/learn/explainers/*` each answer one question in more depth and link back to the lesson that introduces it.
- **Reference Sections**:
  - **Standards (`/standards/`)** — Reference summaries of standards, government requirements, national algorithm positions, protocol specifications, and external migration guides, grouped by their role in the transition. Each summary states its audience and whether it binds or recommends.
  - **Migration practices (`/migration-practices/`)** — Reusable operating practices in lifecycle order: decide whether to act, keep commodity software updated (the short path for supplier-updated estates), set up the programme, inventory, prioritise, plan dates, work with suppliers (including purchases and renewals), make and verify each change, keep the ability to change again, and review and report. Each practice names who leads it and the record it produces.
  - **Technology options (`/technology-options/`)**: Reference cards organised by technology, so a reader starts from the system in front of them: an overview table of each technology's job and the status of its post-quantum mechanism; *choosing* (who decides, the authority check, the hybrid rule of thumb, protocol mechanisms, signature schemes, and what to record); then cards grouped as connections (TLS, VPNs and IPsec, SSH, Wi-Fi and network access, secure messaging), certificates and identity (PKI, DNSSEC, identity and sign-in, Kerberos and directory sign-in), signing (code, firmware and secure boot, documents and email), stored data (encrypted email and files, backups and archives), and platforms and environments that span several jobs (HSMs and key management, cryptographic libraries and bespoke code, cloud and SaaS, OT and industrial systems). The overview also routes technologies without a card. Process stays in Migration practices, positions in Standards, and concepts in Learn.
  - **Resources (`/resources/`)** — What a migration lead takes away and uses, grouped by what the reader does with it. The section overview (`/resources/`) lists the groups. **Records** (`/resources/records/`) are the migration record set: the linked records a migration lead sets up, fills in, and keeps, in order of use (decision note, programme charter, inventory record, vendor response log, purchase requirements, migration plan, change record, review log, and progress report). The records overview shows how they join on `asset` and `job`, how unknowns carry forward, and one zip of every blank CSV. **Examples** (`/resources/examples/`) hold worked examples: the manufacturer example that fills every record on the full path, and a small agency on the short path. **Reference** (`/resources/reference/`) holds the glossary. Practices and technology cards write to the records; each record page names the practice that fills it.

## Sitemap

```text
/

/learn/
/learn/public-key-cryptography/
/learn/signatures-and-trust/
/learn/quantum-threat/
/learn/what-post-quantum-means/
/learn/algorithms/
/learn/hybrid/
/learn/standardisation/
/learn/in-real-systems/
/learn/timelines/
/learn/crypto-agility/
/learn/explainers/keys/
/learn/explainers/signature-dependencies/
/learn/explainers/quantum-computers/
/learn/explainers/when-to-start/
/learn/explainers/forward-secrecy/
/learn/explainers/kem/
/learn/explainers/hash-based-signatures/
/learn/explainers/tls/
/learn/explainers/research-to-deployment/
/learn/explainers/quantum-safe-claims/
/learn/explainers/timelines/

/routes/
/routes/vendor-managed-software/
/routes/organisation-wide/
/routes/long-lived-confidentiality/
/routes/hard-to-change-systems/

/standards/
/standards/post-quantum/
/standards/post-quantum/fips-203/
/standards/post-quantum/sp-800-227/
/standards/post-quantum/fips-204/
/standards/post-quantum/fips-205/
/standards/post-quantum/sp-800-208/
/standards/post-quantum/nist-ir-8528/
/standards/post-quantum/nist-ir-8610/
/standards/post-quantum/nist-ir-8545/
/standards/transition-and-key-management/
/standards/transition-and-key-management/nist-ir-8547/
/standards/transition-and-key-management/sp-800-131a/
/standards/transition-and-key-management/sp-800-57-part-1/
/standards/transition-and-key-management/cswp-39/
/standards/classical-public-key/
/standards/classical-public-key/fips-186-5/
/standards/classical-public-key/sp-800-186/
/standards/classical-public-key/sp-800-56a/
/standards/classical-public-key/sp-800-56b/
/standards/symmetric-and-primitives/
/standards/symmetric-and-primitives/fips-197/
/standards/symmetric-and-primitives/sp-800-232/
/standards/symmetric-and-primitives/fips-180-4/
/standards/symmetric-and-primitives/fips-202/
/standards/symmetric-and-primitives/sp-800-185/
/standards/symmetric-and-primitives/fips-198-1/
/standards/symmetric-and-primitives/sp-800-56c/
/standards/symmetric-and-primitives/sp-800-108/
/standards/symmetric-and-primitives/sp-800-132/
/standards/symmetric-and-primitives/sp-800-90a/
/standards/modules-protocols-identity/
/standards/modules-protocols-identity/fips-140-3/
/standards/modules-protocols-identity/sp-800-52/
/standards/modules-protocols-identity/rfc-10024/
/standards/modules-protocols-identity/rfc-9881/
/standards/modules-protocols-identity/rfc-10073/
/standards/modules-protocols-identity/fips-201-3/
/standards/us-federal-directives/
/standards/us-federal-directives/qccpa/
/standards/us-federal-directives/nsm-10/
/standards/us-federal-directives/eo-14306/
/standards/us-federal-directives/eo-14412/
/standards/us-federal-directives/omb-m-26-15/
/standards/us-federal-directives/cisa-pqc-product-categories/
/standards/national-algorithm-positions/
/standards/national-algorithm-positions/cnsa-2-0/
/standards/national-algorithm-positions/bsi-tr-02102-1/
/standards/national-algorithm-positions/anssi-pqc-position/
/standards/migration-guides/
/standards/migration-guides/dutch-pqc-handbook/
/standards/migration-guides/uk-ncsc-pqc-guidance/
/standards/migration-guides/eu-nis-roadmap/
/standards/migration-guides/asd-planning/
/standards/migration-guides/canada-itsm-40-001/
/standards/migration-guides/canadian-cfdir-guide/
/standards/migration-guides/etsi-tr-103-619/
/standards/migration-guides/etsi-tr-104-016/
/standards/migration-guides/pqcc-roadmap/
/standards/migration-guides/cisa-nsa-nist-fact-sheet/
/standards/migration-guides/nccoe-migration-to-pqc/
/standards/migration-guides/vendor-questions/

/migration-practices/
/migration-practices/diagnose/
/migration-practices/commodity-software/
/migration-practices/programme/
/migration-practices/inventory/
/migration-practices/priority/
/migration-practices/plan/
/migration-practices/suppliers/
/migration-practices/implementation/
/migration-practices/changing-algorithms-again/
/migration-practices/subsequent-review/

/technology-options/
/technology-options/choosing/
/technology-options/tls/
/technology-options/vpn-ipsec/
/technology-options/ssh/
/technology-options/wifi-network-access/
/technology-options/secure-messaging/
/technology-options/pki/
/technology-options/dnssec/
/technology-options/identity/
/technology-options/kerberos/
/technology-options/code-signing/
/technology-options/firmware-secure-boot/
/technology-options/document-signing/
/technology-options/encrypted-files/
/technology-options/stored-data/
/technology-options/hsm-kms/
/technology-options/libraries-bespoke-code/
/technology-options/cloud-saas/
/technology-options/ot-industrial/

/resources/
/resources/records/
/resources/records/decision-note/
/resources/records/programme-charter/
/resources/records/inventory/
/resources/records/vendor-response-log/
/resources/records/purchase-requirements/
/resources/records/migration-plan/
/resources/records/change-record/
/resources/records/review-log/
/resources/records/progress-report/
/resources/examples/
/resources/examples/protect-this-first/
/resources/examples/stay-on-supplier-updates/
/resources/reference/
/resources/reference/glossary/
```

## Homepage and Footer Routing

- **Homepage (`src/pages/index.tsx`)**: A calm reference entry point, not a product landing page, that introduces the handbook and routes visitors without competing navigation systems. A Deep Teal hero gives the tagline, one modest link to Decide whether to act, and the specialist-advice limit. Three short lists follow, each row a link with a one-line description taken from the page it points to: the situation routes (both paths and both asset tracks, with a link to the `/routes/` overview), the two worked examples, and background and reference (Learn the basics and the four reference sections). No sales copy, feature grids, large or repeated buttons, gradients, or imagery.
- **Footer (`docusaurus.config.ts`)**: Exposes three columns — **Routes**, **Learn**, and **Reference**. Keep footer link labels concise (`≤ 32` characters, checked by `npm run check`) so columns fit cleanly on mobile viewports, whereas `sidebars.ts` labels can be slightly fuller (`≤ 50` characters).

## Section Placement and Expansion Rules

Add new pages only when there is enough distinct, decision-useful material that cannot be served cleanly on an existing page, and place them by reader job:

- **Conceptual primers or deeper technical distinctions** belong in `/learn/` or `/learn/explainers/`.
- **Reader entry paths for a distinct operational situation** belong in `/routes/` and should point into existing practice, option, and resource pages rather than duplicating procedures.
- **Individual cryptographic standards, government directives, and external migration guides** belong under `/standards/`, grouped by transition role (*post-quantum*, *transition and key management*, *classical*, *symmetric*, *modules, protocols, and certificates*, *US government requirements*, *national algorithm positions*, *migration guides*) rather than by issuing organisation.
- **Lifecycle operating activities** belong in `/migration-practices/`; each practice owns at least one record in `/resources/records/` or states its evidence on the page.
- **What good looks like for a specific technology** belongs in `/technology-options/`, as a short reference card per technology that keeps the cryptographic jobs distinct, rather than one narrative page per algorithm.
- **What a reader takes away and uses** belongs in `/resources/`, in a group named for what the reader does with it: records to fill in (`/resources/records/`), worked examples to follow (`/resources/examples/`), and reference to look up (`/resources/reference/`). Add a record only when a practice produces it and no existing record holds it. Add a new group, such as briefings or tools, only when its first page is written, and give each group a landing page: a written overview once it holds several pages, or a generated index from `sidebars.ts` while it holds one. Keep the hierarchy to section, group, and page; split Records by phase only if it grows past about twelve. Send lists of cited works to `/standards/`, and keep material about the handbook itself (changes, citation, editions) out of `/resources/`.
