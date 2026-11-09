# Purpose and positioning

## One sentence

**A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.**

## Who reads it

The reader is the person who must decide what the organisation migrates, in what order, and how anyone will know it happened — without being a cryptographer. Migration is the main path through a wider post-quantum cryptography handbook.

## Four questions the book answers

1. **What has to move, and by when?** — Authority timelines and duties the reader can check (Standards and timelines, especially dates).
2. **What to protect first?** — Inventory and priority before migration claims (Migration practices and the kit pages).
3. **What to ask a vendor?** — Questions and tracking when someone else owns the stack (vendor plan, vendor questions).
4. **How will anyone know?** — Evidence: inventory, priority, vendor answers, and what shipped (Start here seats and practice pages).

## Four layers

The handbook body is four sections (navbar sidebars). **Start here** sits above them and sends each seat into a reading order through these layers.

1. **Standards and timelines** — Dates (one page) and migration guides (reading list).
2. **Migration practices** — Where to start, inventory, priority, vendor plan, changing algorithms again, the next pass.
3. **Algorithm and protocol options** — Choosing, key establishment, signatures, long-lived roots.
4. **Resources** — Kit artifacts (questions, checklists, Protect this first), glossary, curated references.

Start here routes into these sections; it does not duplicate a second topic tree.

## Sister sites

The PQC Handbook is a sister site to the Secure-by-Design Handbook and the Supply Chain Security Handbook. Where a migration decision touches signing, key establishment in a device, or firmware update, handbook pages may link to the closest public page in those handbooks as onward reading. Secure boot, SBOM and VEX, OTA, vulnerability disclosure, and CRA implementation stay in Secure-by-Design. Supplier evidence, product acceptance, attestation, and procurement questions stay in Supply Chain Security. Those links are not the authority for a post-quantum date or duty.

## Non-goals (this edition)

This edition does **not** publish or centre:

- Parameter sets or security proofs
- A product catalogue
- A symmetric-cryptography migration programme
- Quantum key distribution
- Quantum random-number generators
- A blog or news stream
- A page per algorithm (hybrid, ML-KEM, ML-DSA, SLH-DSA, and stateful hash-based signatures are choices on the four option pages)
- Deploy automation, DNS for `pqchandbook.com`, or GitHub Pages wiring in this repo

### Claims this edition does not state

Some landscape notes mention material without a filed public dump or URL (for example, certain vendor deployment details, Ponemon percentages, or Canada CCCS milestone years). **This edition does not state them.** The dates page uses the UK, EU, and NIST clocks from the allowed source set. Canada appears through the CFDIR reading-list entry. FIPS 203, 204, and 205 are named as standards this book does not rewrite; this edition does not link them when the research set has no URL. Parameter tables stay out.

Filed works that exist locally but are **not** cited in this edition include NSA CNSA 2.0, BSI TR-02102-1, Executive Order 14412, OMB M-26-15, the Singapore CSA advisory, and the Palo Alto harvest-now page. Citations follow the dump and reading-list tables in the design spec and [style-guide.md](./style-guide.md).

## Local reference material

Writers may use gitignored material under `.ai-helper-files/` while drafting. That tree is local reference only and must not appear as a public citation on site pages.

## Authority

For structure, page jobs, and citations, follow [planning/superpowers/specs/2026-11-09-pqc-handbook-design.md](./planning/superpowers/specs/2026-11-09-pqc-handbook-design.md).
