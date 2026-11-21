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

**Set a cadence.** Use the cadence your sector or authorities require. Where nothing sets one, this handbook suggests reviewing at least every six months, and every three months while any line is first in its job's order or a design freeze, contract renewal, or end of support on the plan falls within the next year. This is the handbook's suggestion, not an authority's requirement.

**Bring the review forward** when any of these happens:

- a supplier changes the algorithm, scheme, or date you recorded;
- an authority republishes or amends a timeline you rely on;
- a standard you rely on changes status, such as a draft becoming final or an errata notice;
- an `unknown` that affects the order is resolved, such as a data confidentiality period or whether a verifier can be updated;
- a deployed-state check fails after cutover, or connections fall back to classical-only cryptography;
- a new attack or implementation flaw is published for an algorithm or product you use;
- a product design freeze or a contract renewal on the plan is approaching.

**At each review:**

1. Open the review log and the records due for review.
2. Update confidence, order, and dates on the inventory, plan, and supplier rows.
3. Carry each unresolved item forward on its own review-log row, with its own owner, status, and date.
4. Mark each item `open` or `closed` on the review log, and set the next review date on the review log and on the plan rows you reviewed.
5. Report to the sponsor: what moved, what is blocked and why, which decisions or risk acceptances are needed, and the next review date.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) describes the transition as one in which quantum-vulnerable and quantum-resistant algorithms will coexist and be validated for a period, which is why records need regular reopening rather than a single sign-off.

## Keep this evidence

The [review log](/resources/review-log/): date, what was reviewed, unresolved items, owner, and next review date — plus the report sent to the sponsor.

## Example

An insufficient record is "The migration project is closed."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), opens the review on 2026-11-10 and reviews the archive pilot evidence, the supplier response, and the product sensor's priority. It updates the archive's inventory row to show Workspace 4.2 and X25519MLKEM768 in staging. It then carries six unresolved items, each on its own row with its own owner:

- **sensor firmware-signing option**, needed before the design freeze on 2027-06-30: product security lead;
- **archive signature plan from the supplier:** product engineering lead;
- **stored-data key wrapping answer and Workspace 4.1 end of support:** product engineering lead;
- **archive production rollout and production client handshake check:** product engineering lead;
- **archive agility gaps:** product engineering lead;
- **laptop versions:** IT lead.

The next review is set for 2026-12-01. The operations director reports to the managing director that the archive pilot has passed, production rollout is pending, and the sensor decision is still blocked.

## Limits and next step

The suggested cadence is a starting point, not an obligation; regulated organisations should follow their sector authority. The review reopens earlier practices, starting with [Inventory the cryptography](/migration-practices/inventory/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Review log](/resources/review-log/)
- [Set up the programme](/migration-practices/programme/)
- [Organisation-wide](/routes/organisation-wide/)
