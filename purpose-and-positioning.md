# Purpose and positioning

## One sentence

**A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.**

## Who reads it

The reader is the person who must decide what the organisation migrates, in what order, and how anyone will know it happened — without being a cryptographer. Migration is the main path through a wider post-quantum cryptography handbook.

## Chooser purpose

The homepage is one situation chooser: one promise, one limit, and six choices that send the reader into a route. Learn the basics is a separate path for a reader who is not yet planning a migration; it sits apart from the six choices.

Behind the routes, the handbook keeps four reference sections: **Standards and timelines**, **Migration practices**, **Algorithm and protocol options**, and **Resources**. The navbar lists Learn the basics and those four sections; the six routes are reached from the chooser, the footer, and the route sidebar, not as top-level navbar items.

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

### Claims this edition does not state

Some landscape notes mention material without a filed public dump or URL (for example, certain vendor deployment details, Ponemon percentages, or Canada CCCS milestone years). **This edition does not state them.** The dates page uses the UK, EU, and NIST clocks from the allowed source set. Canada appears through the CFDIR reading-list entry. Parameter tables stay out.

Filed works that exist locally but are **not** cited in this edition include NSA CNSA 2.0, BSI TR-02102-1, Executive Order 14412, OMB M-26-15, the Singapore CSA advisory, and the Palo Alto harvest-now page. Citations follow the dump and reading-list tables in the edition spec and [style-guide.md](./style-guide.md).

## Local reference material

Writers may use gitignored material under `.ai-helper-files/` while drafting. That tree is local reference only and must not appear as a public citation on site pages.

## Authority

For structure, page jobs, and citations, follow [planning/superpowers/specs/2026-11-10-site-revision-design.md](./planning/superpowers/specs/2026-11-10-site-revision-design.md).
