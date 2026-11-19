---
title: Inventory the cryptography
sidebar_label: Inventory
displayed_sidebar: migrationPracticesSidebar
description: List public-key cryptography across the estate, including embedded and supplier-controlled components a scanner cannot see, before claiming systems have migrated.
---

## When this applies

You are compiling an initial cryptographic inventory before claiming any system has migrated to post-quantum algorithms.

## Do this

1. List each system that handles sensitive data or has an external connection.
2. For each system, record the key-establishment algorithm and the signature algorithm.
3. Record who controls the software, the data confidentiality period, the renewal, the version where known, and the dependencies.
4. Mark what a scan cannot see, including embedded and hardware-bound cryptography.
5. Set confidence to `known` or `unknown`.

Start with systems that hold sensitive data or expose an external connection, then add supplier-controlled and hardware items a network scan cannot see. Keep one row per system, listing shared libraries or services inside `dependencies` rather than creating separate system rows, and set `confidence` to `known` only when both algorithm cells name a construction. That initial list is a **first-pass inventory**; adding a named owner and a subsequent-review date turns it into a **maintained inventory**.

Both the CISA, NSA, and NIST [Quantum-Readiness fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf) (17 August 2023, United States) and the ASD, ACSC, CISA, and NSA [vendor guide](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors) (updated 5 November 2026, Australia and United States) warn that automated discovery tools miss embedded and hardware-bound cryptography and advise asking vendors directly for those details. Deeper enterprise discovery is explored in [NIST SP 1800-38B](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf) (December 2023 preliminary draft, which the [NCCoE FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html) updated 5 November 2026 notes is not planned to become a final publication); a cryptography bill of materials (CBOM) in that draft is a developing model rather than a requirement of this handbook.

## Keep this evidence

The inventory record.

## Example

An insufficient record is "Our TLS scan found no issues."

A decision-ready record lists the manufacturer's product-design archive and pre-production sensor, marks unverified algorithms and the sensor's boot-ROM trust anchor as `unknown`, names each asset owner, and sets a subsequent-review date.

## Limits and next page

Leave the algorithm and the priority for a later record. The next record is the [inventory record](/resources/inventory-record/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- ASD and ACSC, Post-quantum cryptography: questions to ask your vendors, updated 5 November 2026. [Vendor guide](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)
- NIST, Migration to post-quantum cryptography (NIST SP 1800-38B preliminary draft), December 2023. [Preliminary draft](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf)
- NIST NCCoE, Migration to post-quantum cryptography FAQ, last updated 5 November 2026. [FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html)

## Related pages

- [Diagnose](./diagnose.md)
- [Priority](./priority.md)
- [Vendor plan](./vendor-plan.md)
- [Inventory record](/resources/inventory-record/)
