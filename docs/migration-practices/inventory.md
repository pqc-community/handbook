---
title: Inventory the cryptography
sidebar_label: Inventory
sidebar_position: 3
displayed_sidebar: migrationPracticesSidebar
description: List the cryptography, including what a scanner cannot see, before anyone claims it has moved to post-quantum algorithms.
---

List the cryptography before anyone claims it has moved.

## What can go wrong

A TLS scan treated as the whole estate misses what the scanner cannot see. The list then looks finished when it is not.

## A stronger practice

The [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023, says discovery tools may not identify embedded cryptography inside products, and tells organisations to ask vendors for those lists. It also says the inventory should cover network protocols, assets on end-user systems and servers (including firmware and software updates), and cryptographic dependencies in the build pipeline, and should estimate how long the most sensitive datasets need protection.

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, say the early list is not a formal asset register: understand the nature of each system, quantify the scale, capture version and patch level where you have it, and identify dependencies.

[NIST SP 1800-38](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf) is still a 2023 preliminary draft. Volume B is the discovery practice in that draft, not a finished standard.

[Vista Security](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/), a vendor blog of 13 October 2026, sizes a small-staff inventory to four questions for each system that handles sensitive data or an external connection: what key-establishment and signature algorithms it uses, who controls the software, how long the data must stay confidential, and when the platform or contract renews. That blog is a sizing, not an authority.

## What to ask

For each system that handles sensitive data or an external connection: what key-establishment algorithm and what signature algorithm are in use, who controls the software, how long the data must stay confidential, and when the platform or contract renews? What can a scan not see, and which vendor will you ask?

## Evidence

The list itself: the systems, the algorithms, the owner, the secrecy life, the renewal, and a mark on what a scan cannot see. The questions are written out on [Inventory questions](../resources/inventory-questions.md).

## A weak answer

"Our scanner found no issues."

## A stronger answer

"We listed the systems, the algorithms, the owner, the secrecy life, and the renewal, and we marked what a scan cannot see."

## Which pass

This is the first pass.

## Options

No algorithm is chosen on the inventory. [Priority](./priority.md) orders the list. [Vendor plan](./vendor-plan.md) is how you ask for what a scan cannot see.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST SP 1800-38B preliminary draft, December 2023. [Volume B](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf)
- Vista Security, a vendor blog, 13 October 2026. [Vendor blog](https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/)

## Related pages

- [Inventory questions](../resources/inventory-questions.md)
- [Priority](./priority.md)
- [Vendor plan](./vendor-plan.md)
