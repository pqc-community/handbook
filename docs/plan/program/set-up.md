---
title: Set up the program
search_title: Set up a post-quantum migration program
sidebar_label: Set up the program
description: Name a sponsor and migration lead, agree roles, scope, budget, and reporting, and tell the people whose work will change.
displayed_sidebar: journeySidebar
---

## When this applies

This page is for a full program. You need one when any of the [four questions](/plan/) applies and the program covers more than one or two systems or includes a device with a fixed key, or when your answers sent you to a specialist and regulator first. A small program, such as a single in-house portal, needs only a named owner, the sponsor's sign-off, the [register](/templates/records/register/), and a change record for each change; see [Program](/plan/program/#size).

## Who does what

- The **executive sponsor** owns the program, approves its scope and budget line, and receives progress reports.
- The **migration lead** runs the program, keeps the records, and sets the review cadence.
- **System owners** answer for their systems' register rows and change records.
- **Procurement** adds post-quantum wording to purchases and renewals and chases supplier answers.
- **Legal or risk** confirms which authority timelines and obligations apply and advises the sponsor on accepting residual risk.
- **Operations** runs changes, rollbacks, and deployed-state checks.

## Do this

1. **Write the program goal in one or two sentences**, based on your answers to the four questions: what is in scope, what is not, and what "done" means for this phase.
2. **Assign the roles above by name.** A role with no named person is a gap to resolve, not a default.
3. **Agree the first budget line** for discovery and supplier engagement. A full migration budget usually cannot be estimated until the inventory exists and the register has an order; say so in the charter and set the date when it will be revisited. When it is, include supplier upgrade charges, replacement of products that cannot be upgraded, testing environments and effort, discovery tooling, training for the people who will make the changes, and specialist advice.
4. **Set the reporting cadence**: what the migration lead reports to the sponsor, how often, and which triggers bring a report forward (see [Review and report](/plan/program/subsequent-review/)).
5. **Tell the people whose work will change**: system owners, procurement, operations, and suppliers, who should expect written questions about their post-quantum plans. Explain the different jobs — key establishment, signatures, and verifiers that cannot be updated — so teams do not assume one cutover.

Published migration guides start in the same place. The Post-Quantum Cryptography Coalition's [migration roadmap](/standards/migration-guides/pqcc-roadmap/) (May 2025) begins by setting out the organization's migration aims and its relevance, then assigning a migration lead, identifying stakeholders, and aligning them through strategic messaging; setting a discovery plan and budget follows in its second category. The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) ask organizations to define their migration goals as the first activity.

## Keep this evidence

A one-page [program charter](/templates/records/program-charter/): goal and scope, named sponsor, migration lead, system owners, procurement, legal or risk, and operations contacts; the first budget line and when it will be revisited; the reporting cadence; and the date the charter was agreed. Store it with the [register](/templates/records/register/).

## Example

An insufficient record is "IT will handle post-quantum."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the fictional manufacturer's charter, agreed on August 3, 2026, names the managing director as sponsor and the operations director as migration lead, and names the product engineering lead, product security lead, and IT lead as owners of the archive, the product sensor, and the office laptops. The first phase covers discovery, supplier answers for the design archive, and a decision on the sensor's firmware verifier before production design freeze. The migration lead reports to the sponsor at each review, and immediately if the supplier's release date moves or there is still no supported sensor signature option three months before design freeze.

## Limits and next step

The charter assigns responsibility without deciding priorities or algorithms, and large or regulated organizations will usually need a formal governance structure and specialist input beyond this page. Next, [inventory the cryptography](/plan/program/inventory/).

## Sources

- Post-Quantum Cryptography Coalition, Post-Quantum Cryptography (PQC) Migration Roadmap, May 2025. [PQC Migration Roadmap (PDF)](https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed March 20, 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Which plan you need](/plan/)
- [Program](/plan/program/)
- [Program charter](/templates/records/program-charter/)
- [Register](/templates/records/register/)
- [Review and report](/plan/program/subsequent-review/)
