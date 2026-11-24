---
title: Review and report
search_title: Review and report post-quantum migration progress
sidebar_label: Review and report
description: Reopen the register on a schedule and on triggers, carry each unresolved row forward with its owner, status and next review, and report to the sponsor.
displayed_sidebar: journeySidebar
---

## When this applies

A next review date on the register has arrived, or something has happened that may make the records out of date.

## Who does what

- The **migration lead**, or in a small program the owner, runs the review, updates the [register](/templates/records/register/), and reports to the sponsor.
- **System owners** update their rows and accept carried-forward items.
- The **executive sponsor** receives the report and decides on escalations, budget, and risk acceptance.

## Do this

**Set a cadence.** Use the cadence your sector or authorities require. Where nothing sets one, this handbook suggests reviewing a program every six months, and every three months while a design freeze, contract renewal, or end of support on the register falls within the next year, whatever the program's size. The [core actions](/plan/core-actions/) are reviewed every six months, and when a product is renewed or leaves support. This is the handbook's suggestion, not an authority's requirement.

**Bring the review forward** when any of these happens:

- a supplier changes the algorithm, scheme, or date you recorded;
- an authority republishes or amends a timeline you rely on;
- a standard you rely on changes, such as a draft becoming final or an errata notice being published;
- an `unknown` that affects the order is resolved, such as a data confidentiality period or whether a verifier can be updated;
- a deployed-state check fails after cutover, or connections fall back to classical-only cryptography;
- a new attack or implementation flaw is published for an algorithm or product you use;
- a product design freeze or a contract renewal on the register is approaching.

The handbook's [News and analysis](/news/) reports authority and standards changes as they happen, with the audience each applies to, so checking its [authority updates](/news/tags/authority-updates/) since your last review is a quick way to spot the second and third of these triggers.

**At each review:**

1. Open the register rows due for review, with the change records and purchase wording they name.
2. Update what protects each row today, its supplier answer and judgment, its order, and its dates.
3. Carry each unresolved item forward on its own register row, with its own owner, next step, and next review date.
4. Set each row's status: open, blocked with the date it must be resolved by, migrated once a deployed-state check shows the new method live, or closed. Set its next review date.
5. For a full program, report to the sponsor on the [progress report](/templates/records/progress-report/): what moved for each job, what is blocked and why, which milestones are at risk, which decisions or risk acceptances are needed, and the next review date.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) describes the transition as one in which quantum-vulnerable and quantum-resistant algorithms will coexist and be validated for a period, which is why records need regular reopening rather than a single sign-off.

## Keep this evidence

The [register](/templates/records/register/), with each reviewed row's status, next step, owner, and next review date — plus, for a full program, the [progress report](/templates/records/progress-report/) sent to the sponsor, with the sponsor's response.

## Example

An insufficient record is "The migration project is closed."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/), opens the review on November 10, 2026, and reopens the register, the purchase wording, and both change records. It updates the archive's connections row to show X25519MLKEM768 in staging, with production still on Workspace 4.1. The IT lead confirms that design files are opened from the archive rather than stored on laptops, and records the installed versions; the laptops' row stays open as part of the core actions, with its next review on February 10, 2027. Five program rows stay open, each with its own owner and next review:

- **archive signatures:** product engineering lead, December 1, 2026, when the supplier's written signature plan is due;
- **archive stored data:** product engineering lead, December 1, 2026, when the stored-data key wrapping answer and Workspace 4.1 end of support are due, with the archive's agility questions in the same follow-up;
- **sensor firmware verifier:** blocked until a supported option is found before the design freeze on June 30, 2027; product security lead, December 15, 2026, when the microcontroller suppliers' answers are due;
- **sensor firmware-signing key:** product security lead, December 15, 2026, moving with the verifier row;
- **archive connections:** product engineering lead, at the quarterly review on February 10, 2027, for the production rollout and production client handshake check.

Each date follows the item's own driver rather than one review date for everything. The operations director reports to the managing director that the archive pilot has passed, production rollout is pending, and the sensor decision is still blocked.

## Limits and next step

The suggested cadence is a starting point, not an obligation; regulated organizations should follow their sector authority. The review reopens earlier practices, starting with [Inventory the cryptography](/plan/program/inventory/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Register](/templates/records/register/)
- [Progress report](/templates/records/progress-report/)
- [Set up the program](/plan/program/set-up/)
- [Program](/plan/program/)
