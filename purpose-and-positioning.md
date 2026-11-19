# PQC Handbook - Purpose & Positioning

## What We Are Building

**Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration.**

The PQC Handbook (`https://pqchandbook.com`) is a vendor-neutral, source-backed static handbook for security, engineering, product, procurement, and risk professionals who are responsible for transitioning public-key cryptography to post-quantum standards without in-house cryptographers.

## Promise and Explicit Boundary

- **Promise**: Give accountable technical and operational leads clear situation routes, repeatable practices, sourced authority positions, and downloadable record templates so they can plan, prioritise, and evidence a post-quantum migration.
- **Limit**: The handbook is **not** a formal risk assessment and **not** a substitute for specialist cryptography advice on large bespoke estates, critical national infrastructure (CNI), or regulated systems. Pages surface this boundary directly and route complex or ambiguous cases to the organisation's risk owner, sector authority, or cryptographic specialist.

## Primary Audience and Named Roles

The primary reader is an experienced professional — in security leadership, architecture, product engineering, IT operations, procurement, or governance — accountable for moving an organisation's migration forward. They understand systems, suppliers, certificates, and change control, and need clear cryptographic distinctions without evaluating lattice or hash-based mathematics from scratch (they do *not* need simplified layperson English).

When assigning operational responsibilities across an organisation, handbook pages name seven distinct roles rather than generic "teams":

1. **Executive sponsor** — mandates scope, resources, and cross-organisation authority
2. **Migration lead** — coordinates the plan, records, and subsequent-review dates
3. **Asset owner** — names each system, its data confidentiality period, and operational constraints
4. **Procurement** — issues supplier questions, tracks commitments, and escalates gaps into contract actions
5. **Legal or risk** — determines applicable jurisdictional timelines, regulatory duties, and risk acceptance
6. **Operations** — runs discovery, pilots, interoperability tests, cutovers, rollbacks, and deployed-state checks
7. **Supplier** — controls product roadmaps, cryptographic constructions, and release dates for vendor-managed software and hardware

The handbook is written for organisations migrating or buying technology — it does **not** treat cryptographic product suppliers as a separate target audience of the site.

## Content Model

The site separates **orientation**, **background learning**, and **reusable reference material** so visitors never have to read the handbook cover-to-cover:

1. **Situation Chooser (`/`) and Six Routes (`/routes/*`)**: Visitors start from their operational situation (*vendor-managed software*, *long-lived confidentiality*, *hard-to-change systems*, *organisation-wide coordination*, *ask a supplier*, or *not sure*). Each route provides an exception or applicability check, an ordered reading sequence into the reference sections, and a named work-product output. Organisations coordinating many systems pair `/routes/organisation-wide/` with the relevant asset route for each system.
2. **Learn the Basics (`/learn/*`)**: A standalone conceptual track for visitors who want plain-English background on public-key cryptography, quantum threats, KEMs vs signatures, real-world protocols/PKI, standardisation, and authority timelines before choosing a migration route — plus five optional **Go deeper** explainers.
3. **Four Reference Sections**:
   - **Standards (`/standards/`)**: Structured reference summaries of the NIST post-quantum, transition, classical, symmetric, and module/protocol standards, US federal directives, and national/international migration guides cited across the handbook.
   - **Migration practices (`/migration-practices/`)**: Actionable, seven-part procedures covering diagnosis, commodity software updates, inventory, qualitative prioritisation, product release dates, vendor plans, pilot implementation, cryptographic agility (*changing algorithms again*), and subsequent reviews.
   - **Algorithm and protocol options (`/algorithm-protocol-options/`)**: Decision branches and operational checks across four functional jobs — *choosing an option*, *key establishment*, *signatures*, and *long-lived roots* — recording which authority supports hybrid, post-quantum-only, or supplier-update paths without choosing on the reader's behalf.
   - **Resources (`/resources/`)**: Seven CSV-backed work-product templates (*inventory record*, *priority record*, *vendor response log*, *migration plan*, *change record*, *evidence record*, *review log*), one end-to-end worked example (*Protect this first*), the *Glossary*, *Curated references*, and the *Editorial policy*.

### Shared Worked Illustration (The Clinic)

Rather than inventing disconnected fictional companies across pages, a single fictional **clinic** runs consistently through [Protect this first](./docs/resources/protect-this-first.md) and all seven work products — tracing long-lived health records on a vendor platform (closed key-establishment pilot with a follow-up for signatures) alongside a field-device firmware verifier whose trust anchor cannot be updated in the field (recorded as blocked until an option exists). No real organisation or real vendor version number is implied.

## Core Editorial Thesis

Post-quantum migration is an ongoing operational capability, not a single cutover date:

- **Different cryptographic jobs carry different clocks**: Harvest-now, decrypt-later makes **key establishment** urgent for data with a long confidentiality period, whereas **digital signatures** become urgent when verifiers cannot be updated in the field (long-lived roots of trust) or when many relying parties must move together.
- **Published standards are not universal deadlines**: A final FIPS standardises an algorithm; migration milestones belong to specific authorities and audiences (such as UK NCSC guidance for large/bespoke estates vs commodity IT, the EU NIS Cooperation Group roadmap for Member States, NIST IR 8547's standards deprecation schedule vs US federal agency directives, or ASD's planning milestone). Never copy one jurisdiction's date as a universal requirement.
- **Vendor release is not deployment**: Supplier release, buyer testing, production cutover, and end of support are four separate dates, and an unanswered or `unknown` item stays visible on the record for a scheduled **subsequent review**.

## Sister-Site Boundaries

The PQC Handbook is a sister site to the **Secure-by-Design Handbook** and the **Supply Chain Security Handbook**:

| Handbook | Owns | Relationship to PQC Handbook |
| --- | --- | --- |
| **PQC Handbook** | Public-key cryptographic discovery, PQC prioritisation, hybrid vs post-quantum option recording, authority timelines, long-lived verifier constraints, and migration work products. | Primary source for post-quantum migration decisions and records. |
| **Secure-by-Design Handbook** | General secure boot architecture, SBOM and VEX generation, OTA update hardening, vulnerability disclosure, and EU Cyber Resilience Act (CRA) engineering playbooks. | Linked as onward reading when a migration touches device signing or firmware update flows; never cited as the authority for a PQC date or duty. |
| **Supply Chain Security Handbook** | General supplier assurance, product acceptance, hardware/platform attestation, provenance, and lifecycle evidence governance. | Linked as onward reading when a migration touches procurement assurance or supplier evidence; never cited as the authority for a PQC date or duty. |

## Non-Goals and Scope Exclusions

This handbook does **not** publish or centre:

- Parameter tables, byte sizes, security proofs, or candidate algorithms beyond published NIST standards
- Byte-level protocol specifications, cipher-suite strings, or copy-paste server configurations
- Numeric risk or priority scoring formulas (prioritisation uses a qualitative rubric)
- Product catalogues, vendor endorsements, or vendor marketing/blog sizing claims (such as Vista Security)
- A symmetric-cryptography migration programme (Grover's algorithm is addressed only to explain why symmetric cryptography is not on the same replacement timetable)
- Quantum key distribution (QKD) or quantum random-number generators (QRNGs), beyond noting where cited authorities set them aside
- A blog, news feed, or one narrative page per algorithm
- Unsourced survey percentages (such as Ponemon figures), unverified vendor deployment claims, invented size limits, or invented Canadian government milestone years

## Local Drafting Material and Maintainer Docs

Gitignored files under `.ai-helper-files/` (local PDFs, text dumps, research notes, and sister-site checkouts) are private drafting aids only and must never be linked or cited on public pages.

Maintainer governance is split across four root documents:

- [purpose-and-positioning.md](./purpose-and-positioning.md) — mission, audience, content model, sister-site boundaries, and non-goals
- [navigation-structure.md](./navigation-structure.md) — URL policy, navbar/sidebars, complete sitemap, and route journeys
- [style-guide.md](./style-guide.md) — voice, epistemic labels, page contracts, work-product/clinic schemas, citations, and automated checks
- [brand-guidelines.md](./brand-guidelines.md) — visual identity, colour palette, typography, components, and homepage layout
