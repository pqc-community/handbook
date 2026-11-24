# PQC Handbook - Purpose & Positioning

Mission, audience, editorial stance, sister-site boundaries, and scope exclusions. Structure: [navigation-structure.md](./navigation-structure.md). Voice: [style-guide.md](./style-guide.md). Visual identity: [brand-guidelines.md](./brand-guidelines.md). Reader journey: [reader-journey.md](./reader-journey.md).

## What We Are Building

**Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration.**

A vendor-neutral handbook (`https://pqchandbook.com`) for security, engineering, product, procurement, and risk professionals transitioning public-key cryptography to post-quantum standards without in-house cryptographers.

- **Promise**: A reader journey that starts with four questions, gives every organisation short core actions and a programme only when it needs one, with repeatable practices, sourced authority positions, and downloadable records so leads can plan, prioritise, and evidence a migration. The journey is specified in [reader-journey.md](./reader-journey.md).
- **Limit**: Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke estates, CNI, or regulated systems. Pages surface this boundary and route hard cases to the organisation's risk owner, sector authority, or specialist.
- **News and analysis**: Dated posts that report and explain developments in the post-quantum transition, with authority updates as a main focus, so readers can see what changed, whom it applies to, and which handbook pages reflect it. Scope and rules are in [News and Analysis](#news-and-analysis).

## Audience

Experienced professionals accountable for moving a migration forward. They understand systems, suppliers, certificates, and change control; they need clear cryptographic distinctions, not lattice mathematics — and not simplified layperson English.

Written for organisations migrating or buying technology, not for cryptographic product suppliers as a site audience. Role names used when assigning work live in [style-guide.md](./style-guide.md).

## Editorial Thesis

Migration is an ongoing operational capability, not a single cutover:

- **Different jobs, different clocks** — key establishment urgency follows data confidentiality horizons (harvest-now, decrypt-later); signature urgency follows relying-party coordination or non-updatable verifiers.
- **Standards are not universal deadlines** — a FIPS standardises an algorithm; milestones belong to named authorities and audiences.
- **Vendor release is not deployment** — release, buyer testing, cutover, and end of support are separate dates; unanswered items stay `unknown` until a subsequent review.

Use one fictional **UK-based small manufacturer** across [Protect this first](./docs/templates/examples/protect-this-first.md) and the record pages' filled examples. A second fictional **UK marketing agency** in [Stay on supplier updates](./docs/templates/examples/stay-on-supplier-updates.md) illustrates the core actions only; do not reuse it on other pages. Both are business illustrations, not sector-specific or critical-infrastructure guidance; all company and supplier facts, product versions, and event dates are fictional.

## Sister Sites

| Handbook | Owns | To PQC Handbook |
| --- | --- | --- |
| **PQC Handbook** | PQC discovery, prioritisation, option recording, authority timelines, long-lived verifiers, migration records | Primary source for PQC decisions |
| **Secure-by-Design Handbook** | Secure boot, SBOM/VEX, OTA, disclosure, CRA engineering | Onward reading for device signing / firmware update — never a PQC date authority |
| **Supply Chain Security Handbook** | Supplier assurance, acceptance, attestation, provenance, lifecycle evidence | Onward reading for procurement assurance — never a PQC date authority |

Each handbook runs its own news feed. PQC dates and authority positions are announced and explained in this handbook's posts; a sister-site post that touches post-quantum cryptography (such as one on CRA cryptography) links here for them, and posts here link to the sister sites for device engineering or procurement assurance.

## News and Analysis

A news and analysis blog at `/news/`, for the same audience and in the same register as the handbook. It reports a development and explains what it means for a reader's plan, linking inline to the handbook pages that hold the lasting guidance; it is not a commentary stream, and it is not a way into the reader journey.

Focus areas, each a tag:

- **Authority updates** (main focus): new or revised publications from national cyber authorities, standards bodies, regulators, and governments that set or change a date, an obligation, a standard's status, or a recommended position. Each post states whose audience the update applies to and whether it binds or recommends.
- **Standards and protocols**: final and draft standards, RFCs, and protocol or certificate profiles that change what can be specified or deployed.
- **Deployment milestones**: widely used protocols, platforms, or services changing a default (for example, enabling hybrid key exchange), reported as a fact with its source because it changes what readers buy in or test, never as a product comparison.
- **Analysis**: longer pieces that connect several developments to the handbook's jobs, dates, and records.

Out of scope: product launches and vendor claims of being "quantum-safe", funding and market news, and quantum-computing progress claims except where a national authority or standards body draws a conclusion from them or a published resource estimate is presented as an estimate, never as a date.

The non-goals below bind posts too. A post may report an authority's decision about a candidate algorithm (such as a NIST selection or draft standard) as status news, but it does not evaluate candidates or publish parameter tables.

A post is never the only home of a date or obligation: an authority update that changes one is published together with the change to the Standards summary and any page that states it. Posts are event-driven rather than scheduled, so a quiet feed is not a fault, but every post is framed as current at its date.

## Non-Goals

Do not publish or centre:

- Parameter tables, proofs, or candidates beyond published NIST standards
- Byte-level protocol specs or copy-paste server configs
- Numeric risk/priority scoring
- Product catalogues or vendor endorsements
- A symmetric-cryptography migration programme (Grover only explains the different timetable)
- QKD or QRNGs, beyond noting where authorities set them aside
- One narrative page per algorithm
- Unsourced survey figures or invented jurisdictional milestones

Do not cite `.ai-helper-files/` (local drafting aids only).
