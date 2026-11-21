---
title: Keep the ability to change again
sidebar_label: Keep the ability to change again
description: Before treating a system as finished, show evidence of six capabilities that let you change its algorithm again without another emergency programme.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

A system has a chosen option or a completed change, and you are deciding whether it can be treated as finished for this phase.

## Who does what

- The **asset owner** provides the evidence for each capability.
- **Operations** demonstrates configuration changes and runs the tests.
- The **migration lead** records gaps and carries them to the next review.

## Do this

Treat the system as finished for this phase only when each capability has verifiable evidence:

1. **Configuration.** The construction can be changed by configuration or a supported update, without replacing the whole product. Evidence: a demonstrated change, or the supplier's written statement.
2. **Owner.** Someone is named for the next algorithm change. Evidence: the name on the inventory row.
3. **Dependencies.** Libraries, hardware modules, certificate authorities, and suppliers that would also have to change are listed. Evidence: the `dependencies` cell on the inventory.
4. **Tests.** Tests exist that would show whether a new construction works in your environment. Evidence: an executed test plan.
5. **Change window.** A window and a named approver exist for the next change. Evidence: the window in the change calendar.
6. **Deprecation path.** There is a written path away from the construction in use now — for example, from hybrid key establishment to post-quantum only when your authority and interoperability allow. Evidence: the written path.

The Dutch [PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/) (AIVD, CWI, and TNO, December 2024) advises organisations to remain cryptographically agile so they can adapt as algorithms and standards evolve. NIST's [crypto-agility white paper](/standards/transition-and-key-management/cswp-39/) (CSWP 39, updated 29 June 2026) discusses strategies and practices for building that capability. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) describes hybrid constructions as typically temporary steps that lead to a second transition, which is one reason a deprecation path matters.

## Keep this evidence

The evidence for each of the six capabilities, held in the records you already keep: the inventory row (owner, dependencies), the change record (tests, window), and the written deprecation path. Record any capability without evidence as a gap with an owner.

## Example

An insufficient record is "We picked an algorithm, so the programme is closed."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), checks the product-design archive after its staging pilot. The owner is named (product engineering lead), the workspace supplier is listed as a dependency, and the sample-file retrieval test is reusable. Whether a later release can change the construction by configuration, the change window, and the deprecation path are recorded as gaps. They are added to the supplier follow-up due on 2026-12-01 and carried to the next review.

## Limits and next step

Agility is a property you evidence, not a product you buy; this page does not choose the next algorithm. Next, [review and report](/migration-practices/subsequent-review/).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST, Considerations for Achieving Crypto Agility: Strategies and Practices, CSWP 39, 19 December 2025, updated 29 June 2026. [CSWP 39 upd1](https://csrc.nist.gov/pubs/cswp/39/upd1/considerations-for-achieving-crypto-agility/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Crypto-agility](/learn/crypto-agility/)
- [Change record](/resources/change-record/)
- [Review and report](/migration-practices/subsequent-review/)
