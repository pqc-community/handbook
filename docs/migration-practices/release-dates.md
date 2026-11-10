---
title: Post-quantum product release dates
sidebar_label: Release dates
sidebar_position: 6
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
description: Record vendor release, testing, production deployment, and end of support as four dates for one asset.
---

## When this applies

You are planning or tracking one asset whose migration depends on a supplier release, your own testing, or a fixed support end.

## Do this

**Handbook practice:** Record four dates for one asset:

1. Vendor release — when the supplier says post-quantum capability ships.
2. Testing — when your interoperability and performance tests finish.
3. Production deployment — when the construction is live for users.
4. End of support — when the supplier stops security fixes for the release line you rely on.

**Authority recommendation:** The UK NCSC timelines, modified 3 August 2026, United Kingdom, include milestone rows that depend on when suppliers deliver updates, including long-lived hardware roots of trust in the 2028 plan row.

**Authority recommendation:** NIST IR 8547, October 2026, United States, states that where a device cannot update its signature check later, and it will still be in use when a cryptanalytically relevant quantum computer exists, the device should be designed to require quantum-resistant signatures on the executable code.

## Keep this evidence

The priority record or migration plan row with all four dates, the supplier source, and the owner.

## Example

**Example:** The supplier moves key-establishment release from June 2027 to October 2027. The production deployment date moves to November 2027. The end-of-support date for the current release line stays December 2028. The priority record is updated with the new production date rather than left on the old release date.

## Limits and next page

This page does not negotiate the supplier answer. The next page is [Vendor plan](/migration-practices/vendor-plan/).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Vendor plan](./vendor-plan.md)
- [Priority](./priority.md)
- [Dates](../standards-timelines/dates.md)
- [Long-lived roots](../algorithm-protocol-options/long-lived-roots.md)
