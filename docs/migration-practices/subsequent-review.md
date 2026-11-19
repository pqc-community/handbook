---
title: Subsequent review of the migration
sidebar_label: Subsequent review
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
description: Decide when to reopen migration records, what triggers an earlier review, and what to carry forward.
---

## When this applies

A subsequent-review date has arrived, or a trigger suggests the records are no longer current.

## Do this

Bring a scheduled review forward whenever any of these triggers occurs:

- A supplier release changes the algorithm or delivery date you recorded.
- A migration timeline you rely on is republished or amended.
- An inventory row previously marked `unknown` is resolved to `known`.
- A deployed-state check fails after cutover.

At each review:

1. Open the review log.
2. Update confidence on inventory and supplier response rows.
3. Carry unresolved items forward with a named owner.
4. Set the next review date on the review log and on every open record.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, United States) describes post-quantum migration as a multi-year transition in which quantum-vulnerable and quantum-resistant algorithms coexist and hybrid constructions often serve as temporary steps toward a subsequent cutover.

## Keep this evidence

The review log, with unresolved items, owners, and the next review date.

## Example

An insufficient record is "The migration project is closed."

A decision-ready record opens the review log on 10 November 2026, notes that the supplier moved key-establishment release from Q2 to Q4, leaves the firmware check unresolved with the hardware owner, and sets the next review for 10 February 2027.

## Limits and next page

Use the cadence your records and authorities already require. The next record is the [review log](/resources/review-log/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Review log](/resources/review-log/)
- [Changing algorithms again](./changing-algorithms-again.md)
- [Diagnose](./diagnose.md)
- [Vendor plan](./vendor-plan.md)
