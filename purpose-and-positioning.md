# Purpose and positioning

## One sentence

**A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.**

## Who reads it

The reader is the person who must decide what the organisation migrates, in what order, and how anyone will know it happened — without being a cryptographer. Migration is the main path through a wider post-quantum cryptography handbook.

## Promise and limit

The handbook helps an organisation decide what to migrate, in what order, and how it will know. It is **not** a risk assessment and **not** a substitute for a specialist on a large bespoke estate, critical national infrastructure, or a regulated system.

## Chooser purpose

The homepage is one situation chooser: one promise, one limit, and six choices that send the reader into a route. Learn the basics is a separate path for a reader who is not yet planning a migration; it sits apart from the six choices.

Behind the routes, the handbook keeps four reference sections: **Standards**, **Migration practices**, **Algorithm and protocol options**, and **Resources**. The navbar lists Learn the basics and those four sections; the six routes are reached from the chooser, the footer, and the route sidebar, not as top-level navbar items.

One fictional organisation — the clinic — runs through [Protect this first](./docs/resources/protect-this-first.md) and the seven work products so the inventory, priority, supplier answer, pilot change, blocked firmware item, evidence, and subsequent review share one consistent illustration. Route pages link to that example rather than inventing separate organisations, and no real organisation or vendor product version is implied.

## Sister sites

The PQC Handbook is a sister site to the Secure-by-Design Handbook and the Supply Chain Security Handbook. Where a migration decision touches signing, key establishment in a device, or firmware update, handbook pages may link to the closest public page in those handbooks as onward reading. Secure boot, SBOM and VEX, OTA, vulnerability disclosure, and CRA implementation stay in Secure-by-Design. Supplier evidence, product acceptance, attestation, and procurement questions stay in Supply Chain Security. Those links are not the authority for a post-quantum date or duty.

## Non-goals (this edition)

This edition does **not** publish or centre:

- Parameter tables or security proofs
- Protocol byte-level specifications, cipher lists, or configuration recipes
- Numeric priority scores (prioritisation uses a qualitative rubric)
- A product catalogue or vendor recommendations
- A fifth audience called "supplier" (the handbook addresses organisations migrating or buying, not cryptographic suppliers)
- A symmetric-cryptography migration programme
- Quantum key distribution or quantum random-number generators
- A blog or news stream
- A page per algorithm in the narrative sections (hybrid, ML-KEM, ML-DSA, SLH-DSA, and stateful hash-based signatures are choices on the four option pages, with standard summaries under `/standards/post-quantum/`)

### Claims this edition does not state

Some landscape notes mention material without a filed public dump or URL (for example, certain vendor deployment details, Entrust-sponsored Ponemon percentages, invented size limits, or Canada CCCS milestone years). **This edition does not state them.** Migration timelines on `/learn/timelines/` and `/learn/explainers/timelines/` record the UK NCSC, EU NIS Cooperation Group, NIST IR 8547 (standards and US federal), and ASD clocks for their stated audiences without copying any single authority's milestone as a universal deadline. Canada appears through the CFDIR guide without inventing a Canadian government milestone year.

Filed works that exist locally under `.ai-helper-files/` but are **not** cited in this edition include NSA CNSA 2.0, BSI TR-02102-1, the Singapore CSA advisory, the Palo Alto harvest-now page, and the Vista Security vendor blog. Citations follow the sourcing rules in [style-guide.md](./style-guide.md) and the reference summaries under `/standards/`.

## Local reference material

Writers may use gitignored material under `.ai-helper-files/` while drafting. That tree is local reference only and must not appear as a public citation on site pages.

## Maintainer references

- [navigation-structure.md](./navigation-structure.md) — URL book map, sidebars, route table, and homepage regions
- [style-guide.md](./style-guide.md) — voice, labels, page shapes, work-product schemas, clinic rules, and sourcing gate
- [brand-guidelines.md](./brand-guidelines.md) — name, domain, palette, typography, Mermaid theme, and Docusaurus config
