---
title: Subsequent review of the migration
sidebar_label: Subsequent review
sidebar_position: 7
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
description: Decide when to reopen migration records, what triggers an earlier review, and what to carry forward.
---

## When this applies

A subsequent-review date has arrived, or a trigger suggests the records are no longer current.

## Do this

**Handbook practice:** Bring the review forward when any of these triggers applies:

- A new supplier release changes the algorithm or the date you recorded.
- A cited migration timeline you rely on is republished or amended.
- An inventory row marked `unknown` is now `known`.
- A deployed-state check fails after implementation.

**Handbook practice:** Run this agenda at each review:

1. Open the review log.
2. Update confidence on inventory and vendor rows.
3. Carry unresolved items forward with an owner.
4. Write the next review date on the review log and on any record still open.

**Authority recommendation:** NIST IR 8547, October 2026, United States, describes a multi-year transition in which quantum-vulnerable and quantum-resistant algorithms may run side by side, and hybrid constructions, when used, are typically expected to be temporary measures that lead to a further transition.

## Keep this evidence

The review log, with unresolved items, owners, and the next review date.

## Example

An insufficient record is "The migration project is closed."

A decision-ready record opens the review log on 10 November 2026, notes that the supplier moved key-establishment release from Q2 to Q4, leaves the firmware check unresolved with the hardware owner, and sets the next review for 10 February 2027.

## Limits and next page

This page does not invent a fixed review cadence beyond what your records and authorities require. The next page is the [review log](/resources/review-log/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Review log](/resources/review-log/)
- [Changing algorithms again](./changing-algorithms-again.md)
- [Diagnose](./diagnose.md)
- [Vendor plan](./vendor-plan.md)
