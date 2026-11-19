---
title: Post-quantum product release dates
sidebar_label: Release dates
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-19
description: Record vendor release, testing, production deployment, and end of support as four dates for one asset.
---

## When this applies

You are planning or tracking one asset whose migration depends on a supplier release, your own testing, or a fixed support end.

## Do this

Track four separate dates for each asset:

1. **Vendor release** — when the supplier ships post-quantum support.
2. **Testing** — when your interoperability and performance checks complete.
3. **Production deployment** — when the post-quantum construction goes live in your environment.
4. **End of support** — when the supplier stops security fixes for the release line you currently run.

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (published and reviewed 20 March 2025, United Kingdom) note that downstream milestones depend on supplier update availability, highlighting long-lived hardware roots of trust in the 2028 planning phase. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, United States) likewise advises that devices unable to update their signature verification in the field — if expected to remain in service once a cryptanalytically relevant quantum computer exists — should be designed upfront to verify quantum-resistant code signatures.

## Keep this evidence

The priority record or migration plan row with all four dates, the supplier source, and the owner.

## Example

An insufficient record records only a vendor target year with no testing or deployment window.

In a decision-ready record, when a supplier slips its key-establishment release from June 2027 to October 2027 while end of support for the current release line remains December 2028, the asset owner updates the testing window and moves production deployment to November 2027 on the priority record rather than leaving the superseded date in place.

## Limits and next page

Leave the supplier answer for the vendor plan. The next page is [Vendor plan](/migration-practices/vendor-plan/).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Vendor plan](./vendor-plan.md)
- [Priority](./priority.md)
- [Timelines](../learn/timelines.md)
- [Long-lived roots](../technology-options/long-lived-roots.md)
