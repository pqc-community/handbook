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

**Situation routes** (`routesSidebar`) are intentionally omitted from the top navbar so top-level navigation stays uncluttered. Visitors enter `/routes/*` from the homepage situation chooser or the footer, and `routesSidebar` keeps all six routes visible once inside a route. Every Markdown file under `docs/` sets `displayed_sidebar` to the sidebar that owns it in `sidebars.ts`.

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
- Downloadable work-product CSVs live in `static/downloads/` and resolve at `/downloads/*.csv` (for example, `/downloads/inventory-record.csv`).

## Site Model

```text
Homepage Situation Chooser (/)
  ├── Situation Routes (/routes/*) ──► Migration Practices, Options, Standards, and Resources
  └── Learn the Basics (/learn/*)  ──► Plain-English lessons + optional Explainers
```

- **Situation Chooser (`/`) and Routes (`/routes/*`)**: Route visitors by operational context (*vendor-managed software*, *long-lived confidentiality*, *hard-to-change systems*, *organisation-wide coordination*, *ask a supplier*, or *not sure*) into an ordered sequence of reference pages without duplicating those pages into separate silos.
- **Learn the Basics (`/learn/*`)**: An introductory track of ten numbered core lessons for visitors who want conceptual grounding before planning a migration. Each lesson ends with a short self-check; the final lesson (`/learn/crypto-agility/`) hands off to the situation routes, the worked example, and `/resources/glossary/`. Optional **Explainers** under `/learn/explainers/*` each answer one question in more depth and link back to the lesson that introduces it.
- **Reference Sections**:
  - **Standards (`/standards/`)** — Reference summaries of standards, government requirements, national algorithm positions, protocol specifications, and external migration guides, grouped by their role in the transition. Each summary states its audience and whether it binds or recommends.
  - **Migration practices (`/migration-practices/`)** — Reusable operational procedures across diagnosis, discovery, prioritisation, supplier engagement, implementation, agility, and review.
  - **Technology options (`/technology-options/`)** — Functional option guides organised by cryptographic job (*choosing*, *key establishment*, *signatures*, *long-lived roots*).
  - **Resources (`/resources/`)** — Practical work-product templates, the worked manufacturer example, glossary, and curated references.

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

/routes/vendor-managed-software/
/routes/long-lived-confidentiality/
/routes/hard-to-change-systems/
/routes/organisation-wide/
/routes/ask-a-supplier/
/routes/not-sure/

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
/standards/migration-guides/cisa-nsa-nist-fact-sheet/
/standards/migration-guides/nccoe-migration-to-pqc/
/standards/migration-guides/vendor-questions/

/migration-practices/
/migration-practices/diagnose/
/migration-practices/commodity-software/
/migration-practices/inventory/
/migration-practices/priority/
/migration-practices/release-dates/
/migration-practices/vendor-plan/
/migration-practices/implementation/
/migration-practices/changing-algorithms-again/
/migration-practices/subsequent-review/

/technology-options/
/technology-options/choosing/
/technology-options/key-establishment/
/technology-options/signatures/
/technology-options/long-lived-roots/

/resources/
/resources/inventory-record/
/resources/priority-record/
/resources/vendor-response-log/
/resources/migration-plan/
/resources/change-record/
/resources/evidence-record/
/resources/review-log/
/resources/protect-this-first/
/resources/glossary/
/resources/curated-references/
```

## Homepage and Footer Routing

- **Homepage (`src/pages/index.tsx`)**: Introduces the handbook and routes visitors cleanly without competing navigation systems — leading with the six situation routes under `/routes/*`, a distinct entry into `/learn/`, a preview pointing to `/resources/protect-this-first/`, and direct entry cards for the four reference sections.
- **Footer (`docusaurus.config.ts`)**: Exposes three columns — **Routes**, **Learn**, and **Reference**. Keep footer link labels concise (`≤ 32` characters, checked by `npm run check`) so columns fit cleanly on mobile viewports, whereas `sidebars.ts` labels can be slightly fuller (`≤ 50` characters).

## Section Placement and Expansion Rules

Add new pages only when there is enough distinct, decision-useful material that cannot be served cleanly on an existing page, and place them by reader job:

- **Conceptual primers or deeper technical distinctions** belong in `/learn/` or `/learn/explainers/`.
- **Reader entry paths for a distinct operational situation** belong in `/routes/` and should point into existing practice, option, and resource pages rather than duplicating procedures.
- **Individual cryptographic standards, government directives, and external migration guides** belong under `/standards/`, grouped by transition role (*post-quantum*, *transition and key management*, *classical*, *symmetric*, *modules, protocols, and certificates*, *US government requirements*, *national algorithm positions*, *migration guides*) rather than by issuing organisation.
- **Lifecycle operating activities** belong in `/migration-practices/`.
- **Mechanism and deployment trade-offs** belong in `/technology-options/`, organised around the cryptographic job being solved rather than one narrative page per algorithm.
- **Reusable templates and reference tools** belong in `/resources/`; keep `/resources/` a focused practical toolkit rather than a catch-all archive.
