# PQC Handbook - Purpose & Positioning

Mission, audience, editorial stance, sister-site boundaries, and scope exclusions. Structure: [navigation-structure.md](./navigation-structure.md). Voice: [style-guide.md](./style-guide.md). Visual identity: [brand-guidelines.md](./brand-guidelines.md).

## What We Are Building

**Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration.**

A vendor-neutral handbook (`https://pqchandbook.com`) for security, engineering, product, procurement, and risk professionals transitioning public-key cryptography to post-quantum standards without in-house cryptographers.

- **Promise**: Situation routes, repeatable practices, sourced authority positions, and downloadable records so leads can plan, prioritise, and evidence a migration.
- **Limit**: Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke estates, CNI, or regulated systems. Pages surface this boundary and route hard cases to the organisation's risk owner, sector authority, or specialist.

## Audience

Experienced professionals accountable for moving a migration forward. They understand systems, suppliers, certificates, and change control; they need clear cryptographic distinctions, not lattice mathematics — and not simplified layperson English.

Written for organisations migrating or buying technology, not for cryptographic product suppliers as a site audience. Role names used when assigning work live in [style-guide.md](./style-guide.md).

## Editorial Thesis

Migration is an ongoing operational capability, not a single cutover:

- **Different jobs, different clocks** — key establishment urgency follows data confidentiality horizons (harvest-now, decrypt-later); signature urgency follows relying-party coordination or non-updatable verifiers.
- **Standards are not universal deadlines** — a FIPS standardises an algorithm; milestones belong to named authorities and audiences.
- **Vendor release is not deployment** — release, buyer testing, cutover, and end of support are separate dates; unanswered items stay `unknown` until a subsequent review.

Use one fictional **UK-based small manufacturer** across [Protect this first](./docs/resources/examples/protect-this-first.md) and the record pages' filled examples. A second fictional **UK marketing agency** in [Stay on supplier updates](./docs/resources/examples/stay-on-supplier-updates.md) illustrates the short path only; do not reuse it on other pages. Both are business illustrations, not sector-specific or critical-infrastructure guidance; all company and supplier facts, product versions, and event dates are fictional.

## Sister Sites

| Handbook | Owns | To PQC Handbook |
| --- | --- | --- |
| **PQC Handbook** | PQC discovery, prioritisation, option recording, authority timelines, long-lived verifiers, migration records | Primary source for PQC decisions |
| **Secure-by-Design Handbook** | Secure boot, SBOM/VEX, OTA, disclosure, CRA engineering | Onward reading for device signing / firmware update — never a PQC date authority |
| **Supply Chain Security Handbook** | Supplier assurance, acceptance, attestation, provenance, lifecycle evidence | Onward reading for procurement assurance — never a PQC date authority |

## Non-Goals

Do not publish or centre:

- Parameter tables, proofs, or candidates beyond published NIST standards
- Byte-level protocol specs or copy-paste server configs
- Numeric risk/priority scoring
- Product catalogues or vendor endorsements
- A symmetric-cryptography migration programme (Grover only explains the different timetable)
- QKD or QRNGs, beyond noting where authorities set them aside
- A blog, news feed, or one narrative page per algorithm
- Unsourced survey figures or invented jurisdictional milestones

Do not cite `.ai-helper-files/` (local drafting aids only).
