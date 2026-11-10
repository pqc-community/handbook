---
title: Inventory the cryptography
sidebar_label: Inventory
sidebar_position: 3
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
description: List the cryptography, including what a scanner cannot see, before anyone claims it has moved to post-quantum algorithms.
---

## When this applies

You are ready to list the cryptography and no one has yet claimed it has moved to post-quantum algorithms.

## Do this

1. List each system that handles sensitive data or has an external connection.
2. For each system, record the key-establishment algorithm and the signature algorithm.
3. Record who controls the software, the data confidentiality period, the renewal, the version where known, and the dependencies.
4. Mark what a scan cannot see, including embedded and hardware-bound cryptography.
5. Set confidence to `known` or `unknown`.

A **first-pass inventory** is that list. A **maintained inventory** is the same list with an owner and a subsequent-review date.

**Authority recommendation:** The CISA, NSA, and NIST Quantum-Readiness fact sheet, as of 17 August 2023, United States, says discovery tools may not identify embedded cryptography and tells organisations to ask vendors for those details.

**Authority recommendation:** The ASD, ACSC, and CISA vendor guide, updated 5 November 2026, Australia and United States, lists embedded and hardware-bound cryptography among the common concerns to raise with suppliers.

**Handbook practice:** Growth beyond the first-pass inventory is described in NIST SP 1800-38B, December 2023, a preliminary draft; a cryptographic bill of materials (CBOM) in that draft is a developing model and is not a requirement of this handbook. The NCCoE FAQ, last updated 5 November 2026, states that those drafts are not planned to become finals.

## Keep this evidence

The inventory record.

## Example

An insufficient record is "Our TLS scan found no issues."

A decision-ready record lists the clinic health-record system on the vendor platform, records confidence `unknown` for the key-establishment algorithm, names an asset owner, and sets a subsequent-review date.

## Limits and next page

This page does not choose algorithms or set priority. The next page is the [inventory record](/resources/inventory-record/).

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
