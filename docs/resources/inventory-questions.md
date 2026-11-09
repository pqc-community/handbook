---
title: Questions for a cryptography inventory
sidebar_label: Inventory questions
sidebar_position: 2
displayed_sidebar: resourcesSidebar
description: Questions for the first pass over the cryptography, including a small staff. Each question is tied to a filed source.
---

Use this list on the first pass, including a small staff. Each question is tied to a filed source. The answers belong on the inventory, next to the system they describe.

## Questions

1. Which systems handle sensitive data or an external connection? ([Vista Security](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/), labelled a vendor blog, 13 October 2026, as a sizing.)
2. For each of those, what key-establishment algorithm and what signature algorithm are in use? (Vista Security, the same vendor blog, as a sizing. The split itself is [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026.)
3. Who controls the software: you, a vendor, or an open-source project? (Vista Security, labelled a vendor blog, as a sizing.)
4. How long must the data stay confidential? (The [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023: estimate the length of protection.)
5. When does the platform or contract renew? (Vista Security, labelled a vendor blog, as a sizing.)
6. What can a scan not see, including embedded cryptography, and which vendor will you ask? (The same fact sheet.)
7. For the UK NCSC early list: what is the nature of the system, the scale, the version and patch level where you have it, and the dependencies? (The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026.)

Vista Security is a vendor blog used as a sizing for a small staff. It is not an authority.

## A weak record

A tool report with no owner and no secrecy life.

## A stronger record

A spreadsheet that answers the questions and marks the gaps.

## Sources

- Vista Security, a vendor blog, 13 October 2026. [Vendor blog](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/)
- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Inventory](../migration-practices/inventory.md)
- [Prioritisation checklist](./prioritisation-checklist.md)
- [Vendor questions](./vendor-questions.md)
