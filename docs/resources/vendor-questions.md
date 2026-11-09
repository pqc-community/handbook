---
title: Questions to ask a vendor
sidebar_label: Vendor questions
sidebar_position: 4
displayed_sidebar: resourcesSidebar
description: Questions to ask before a renewal or a purchase about post-quantum migration, and a sheet for the vendor, the answer, the date, and the source.
---

Use this before a renewal or a purchase. The questions come from the [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023, and from the [UK NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) split between commodity IT and systems you choose an approach for.

## Questions

- Which product and version does the answer cover?
- What is the key-establishment construction, and what is the signature construction? Do not accept one phrase for both.
- What is the date, and what is still not in that release?
- What is the vendor's published roadmap? Store the page, not the call.
- What happens to hardware or firmware that cannot be updated?
- How will a later algorithm change be delivered?

The fact sheet urges organisations to ask vendors for a quantum-readiness roadmap that describes how they will migrate, including timelines for testing and integration, for both on-premises and cloud products, and to plan contract changes so new products arrive with PQC and older products can be upgraded. The NCSC timelines say that where you rely entirely on commodity platforms, the provider delivers the upgrade, and your work is the timely refresh. Where you do not, you choose an approach per system.

## Tracking sheet

| Vendor | Question | Answer | Date | Source |
| --- | --- | --- | --- | --- |
| | | | | |

"They told us on a call" is a weak record. [Vista Security](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/), a vendor blog of 13 October 2026, is used here only as a sizing of that point. It is not an authority. Store the page you were shown.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- Vista Security, a vendor blog, 13 October 2026. [Vendor blog](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/)

## Related pages

- [Vendor plan](../migration-practices/vendor-plan.md)
- [Choosing an option](../algorithm-protocol-options/choosing.md)
- [Changing algorithms again](../migration-practices/changing-algorithms-again.md)
