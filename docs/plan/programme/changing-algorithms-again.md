---
title: Keep the ability to change again
search_title: Keep the ability to change algorithms again
sidebar_label: Keep the ability to change again
description: Before treating a system as finished, show evidence of six capabilities that let you change its algorithm again without another emergency programme.
displayed_sidebar: journeySidebar
---

## When this applies

A system has a chosen option or a completed change, and you are deciding whether it can be treated as finished for this phase.

## Who does what

- The **system owner** provides the evidence for each capability.
- **Operations** demonstrates configuration changes and runs the tests.
- The **migration lead** records gaps on the register and carries them to the next review.

## Do this

Treat the system as finished for this phase only when each capability has verifiable evidence. Where a supplier runs the system for you, as with a hosted service, you cannot change its configuration or schedule its changes yourself, so the evidence comes from the supplier's written commitments and your own checks instead.

1. **Configuration.** The algorithm or scheme can be changed by configuration or a supported update, without replacing the whole product. Evidence: a change demonstrated in your test environment. For a supplier-hosted service: the supplier's written commitment that such changes arrive as supported updates without migrating your data, plus your own client-side check from the last change. A supplier's statement alone is a commitment, not evidence.
2. **Owner.** Someone is named for the next algorithm change. Evidence: the owner on the register row.
3. **Dependencies.** Libraries, hardware modules, certificate authorities, and suppliers that would also have to change are listed. Evidence: the dependencies named in the register row's next step, or in a list kept with the register.
4. **Tests.** Tests exist that would show whether a new algorithm or scheme works in your environment. Evidence: an executed test plan you can run again. For a supplier-hosted service, that is your client-side check and the functional tests from the last pilot.
5. **Change window.** A window and a named approver exist for the next change, and a faster route, with its approver, for an urgent change if an algorithm or key is found to be compromised. Evidence: the window and approver in your change calendar or change-management system, and the urgent route in your emergency-change procedure. For a supplier-hosted service: the notice period the supplier gives before changing cryptography, in the contract or service terms, and the person who decides whether to accept or test the change in that period.
6. **Deprecation path.** There is a written path away from what is in use now, for example from hybrid key establishment to post-quantum only when your authority and interoperability allow. Evidence: the written path. For a supplier-hosted service: the supplier's written plan, or an open request for one.

If the supplier will not give a commitment, a notice period, or a plan, record the gap and handle it as a `concerning` answer in [Work with suppliers](/plan/programme/suppliers/) (step 4).

The Dutch [PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/) (AIVD, CWI, and TNO, December 2024) advises using cryptographic solutions that are crypto-agile, and notes that other bodies encourage organisations to remain cryptographically agile. NIST's [crypto-agility white paper](/standards/transition-and-key-management/nist-cswp-39/) (CSWP 39, updated 29 June 2026) discusses strategies and practices for building that capability. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) describes hybrid constructions as typically temporary steps that lead to a second transition, which is one reason a deprecation path matters.

## Keep this evidence

The evidence for each of the six capabilities, held in the records you already keep: the register row (owner, dependencies), the change record (tests), your change calendar (window), and the written deprecation path. Record any capability without evidence as a gap on the [register](/templates/records/register/), in the row's next step, with its owner and next review.

## Example

An insufficient record is "We picked an algorithm, so the programme is closed."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/), checks the supplier-hosted product-design archive after its staging pilot. The owner is named (product engineering lead), the workspace supplier is listed as a dependency, and the client handshake check and sample-file retrieval are reusable tests. The three capabilities that depend on the supplier are open: a written commitment that later changes come as supported updates, the supplier's notice period for cryptographic changes, and its plan for moving off hybrid key establishment. Procurement adds all three to the written follow-up due on 1 December 2026, owned by the product engineering lead.

## Limits and next step

Agility is a property you evidence, not a product you buy; this page does not choose the next algorithm. Next, [review and report](/plan/programme/subsequent-review/).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST, Considerations for Achieving Crypto Agility: Strategies and Practices, CSWP 39, 19 December 2025, updated 29 June 2026. [CSWP 39 upd1](https://csrc.nist.gov/pubs/cswp/39/upd1/considerations-for-achieving-crypto-agility/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Crypto-agility](/learn/crypto-agility/)
- [Change record](/templates/records/change-record/)
- [Review and report](/plan/programme/subsequent-review/)
