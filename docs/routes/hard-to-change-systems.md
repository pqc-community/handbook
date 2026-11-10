---
title: Products or systems that may be hard to change
sidebar_label: Hard to change
description: The route for a product whose verifier, firmware, or release cycle cannot be changed quickly.
displayed_sidebar: routesSidebar
last_reviewed: 2026-11-10
---

This route is for a product whose verifier, firmware, or release cycle cannot be changed quickly.

Read in this order:

1. [Inventory](/migration-practices/inventory/), required.
2. [Release dates](/migration-practices/release-dates/), required.
3. [Long-lived roots](/algorithm-protocol-options/long-lived-roots/). Long-lived roots is read only when the verifier cannot be updated later.
4. [Signatures](/algorithm-protocol-options/signatures/) is read only when a signature construction is being chosen.
5. [Vendor plan](/migration-practices/vendor-plan/) is read only when a supplier is involved.
6. [Implementation](/migration-practices/implementation/) is read when the product will change, including when the change is intended and the option is still unknown.
7. [Change record](/resources/change-record/) is read in that same case.
8. [Vendor response log](/resources/vendor-response-log/) is read only when a supplier is involved.

The reader stops when the release dates are recorded and the change record exists. A blocked row counts as that change record.

The output is one asset's vendor-release, test, production-deployment, and end-of-support dates, plus a [change record](/resources/change-record/).

**Primary next page:** [Inventory](/migration-practices/inventory/).

For a labelled illustration, not a real organisation, see [Protect this first](/resources/protect-this-first/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Release dates](/migration-practices/release-dates/)
- [Protect this first](/resources/protect-this-first/)
- [Not sure which route applies](/routes/not-sure/)
