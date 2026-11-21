---
title: Products or systems that may be hard to change
sidebar_label: Hard to change
description: The route for a product whose verifier, firmware, or release cycle cannot be changed quickly.
displayed_sidebar: routesSidebar
---

This route is for a product whose verifier, firmware, or release cycle cannot be changed quickly.

Read in this order:

1. [Inventory the cryptography](/migration-practices/inventory/), required.
2. [Plan the migration](/migration-practices/plan/), required.
3. [Firmware and secure boot](/technology-options/firmware-secure-boot/). Open it when a verifier cannot be updated later.
4. [Code and software signing](/technology-options/code-signing/). Open it when the verifiers can be updated and a signature scheme is being chosen.
5. [Work with suppliers](/migration-practices/suppliers/). Open it when a supplier is involved, or when you are selecting a component or renewing a product, especially before a design freeze.
6. [Make and verify one change](/migration-practices/implementation/). Open it when the product will change, including when the change is intended and the option is still unknown.
7. [Change record](/resources/change-record/). Open the change record in that same case.
8. [Vendor response log](/resources/vendor-response-log/). Open the vendor response log only when a supplier is involved.

Stop when the release dates are recorded and the change record exists. A blocked row counts as that change record.

The output is one asset's vendor-release, test, production-deployment, and end-of-support dates, plus a [change record](/resources/change-record/).

The primary next page is [Inventory the cryptography](/migration-practices/inventory/).

For an illustration, not a real organisation, see [Protect this first](/resources/protect-this-first/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Plan the migration](/migration-practices/plan/)
- [Protect this first](/resources/protect-this-first/)
- [Not sure which route applies](/routes/not-sure/)
