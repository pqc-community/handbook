---
title: Get each supplier's migration plan
sidebar_label: Get each supplier's plan
description: Ask existing suppliers for a written post-quantum migration answer, judge it as complete, vague, missing, or concerning, and follow up until it is usable.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

A system on your priority record depends on a supplier's product or service, and you need a written answer about its post-quantum migration — or you are following up an earlier answer.

## Who does what

- The **asset owner** decides what the system needs to know and whether the answer is usable.
- **Procurement** sends the question, chases the answer, and escalates through the contract.
- The **migration lead** copies dates into the [migration plan](/resources/migration-plan/).
- **Legal or risk** advises on contract remedies when an answer is concerning.

## Do this

1. **Ask in writing, about a named product and version.** Ask which public-key cryptography it uses for key establishment and for signatures, which standards-based post-quantum construction it will deliver and when, how the update will be delivered and validated, whether keys or trust anchors are fixed in hardware, and when support for your current release ends. The ASD, CISA, and NSA [vendor questions guide](/standards/migration-guides/vendor-questions/) (published 16 July 2026) gives a fuller question set.
2. **Judge each answer** as one of four values:
   - `complete`: it names the product, version, construction, and date in a document you can keep.
   - `vague`: it gives a year or a promise without the construction or the product line.
   - `missing`: there is no answer by the date you asked for.
   - `concerning`: for example, a proprietary algorithm, no plan for an in-support product, or no answer about signatures.
3. **Follow up by judgement.** Ask a `vague` supplier for the missing items in writing. Give a `missing` answer a firm follow-up date; if nothing arrives, procurement records the gap and the system is not counted as migrated. Escalate a `concerning` answer to procurement and the contract owner.
4. **Keep key establishment and signatures separate.** A supplier can be ready for one job and not the other; record each.
5. **Copy dates into the plan**: the supplier release and end of support become two of the four dates in the [migration plan](/resources/migration-plan/).

The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) encourages organisations to ask vendors for their quantum-readiness roadmaps.

## Keep this evidence

The [vendor response log](/resources/vendor-response-log/): supplier, product and version, the question, the answer, its date and source document, the judgement, the follow-up, and the decision.

## Example

An insufficient record is "They told us on a call that they are quantum safe."

A decision-ready record, from [Protect this first](/resources/protect-this-first/): the fictional design-platform supplier's letter of 2026-09-04 says Workspace 4.2 is scheduled for 2026-10-01 and uses ML-KEM-768 for the hosted key-establishment service, but does not include post-quantum signing changes. The product engineering lead records it as `complete for key establishment`, asks for a written signature-support plan by 2026-12-01, and tracks signatures as a separate item.

## Limits and next step

The log records what suppliers say; it does not validate their implementation. Validation evidence comes from your own testing and, where relevant, module validation such as [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/). For new purchases and renewals, see [Buy post-quantum-ready](/migration-practices/procurement/). Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- Australian Signals Directorate's ACSC, with CISA and NSA, Post-quantum questions to ask your vendors, published 16 July 2026, last reviewed 5 November 2026. [Vendor questions](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)
- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Vendor response log](/resources/vendor-response-log/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Buy post-quantum-ready](/migration-practices/procurement/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
