---
title: Review and report
sidebar_label: Review and report
description: Reopen the migration records on a schedule and on triggers, carry unresolved items forward with owners, and report progress to the sponsor.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

A subsequent-review date has arrived, or something has happened that may make the records out of date.

## Who does what

- The **migration lead** runs the review, updates the [review log](/resources/review-log/), and reports to the sponsor.
- **Asset owners** update their rows and accept carried-forward items.
- The **executive sponsor** receives the report and decides on escalations, budget, and risk acceptance.

## Do this

**Bring the review forward** when any of these happens:

- a supplier changes the construction or date you recorded;
- an authority republishes or amends a timeline you rely on;
- a standard you rely on changes status, such as a draft becoming final or an errata notice;
- an `unknown` inventory row is resolved;
- a deployed-state check fails after cutover.

**At each review:**

1. Open the review log and the records due for review.
2. Update confidence and dates on inventory, priority, plan, and supplier rows.
3. Carry each unresolved item forward with a named owner and a date.
4. Set the next review date on the review log and on every open record.
5. Report to the sponsor: what moved, what is blocked and why, which decisions or risk acceptances are needed, and the next review date.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) describes the transition as one in which quantum-vulnerable and quantum-resistant algorithms will coexist and be validated for a period, which is why records need regular reopening rather than a single sign-off.

## Keep this evidence

The [review log](/resources/review-log/): date, what was reviewed, unresolved items, owner, and next review date — plus the report sent to the sponsor.

## Example

An insufficient record is "The migration project is closed."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), opens the review on 2026-11-10 and reviews the archive pilot evidence, the supplier response, and the product sensor's priority. It carries forward two unresolved items: the supported firmware-signing option and the archive's signature-support date. The product security lead owns them. The next review is set for 2026-12-01. The operations director reports to the managing director that the archive pilot has passed, production rollout is pending, and the sensor decision is still blocked before design freeze.

## Limits and next step

Use the cadence your own records, sector, and authorities require; this page does not set one. The review reopens earlier practices, starting with [Inventory the cryptography](/migration-practices/inventory/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Review log](/resources/review-log/)
- [Set up the programme](/migration-practices/programme/)
- [Organisation-wide](/routes/organisation-wide/)
