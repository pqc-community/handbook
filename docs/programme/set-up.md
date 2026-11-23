---
title: Set up the programme
search_title: Set up a post-quantum migration programme
sidebar_label: Set up the programme
description: Name a sponsor and migration lead, agree roles, scope, budget, and reporting, and tell the people whose work will change.
displayed_sidebar: journeySidebar
---

## When this applies

At least one of the four questions on [Start here](/start-here/) applies, and you need a full programme: any device with a fixed key is involved, or the programme covers more than one or two systems. A small programme, such as a single in-house portal, needs only a named owner, the sponsor's sign-off, and the [register](/templates/records/register/); see [Programme](/programme/#size). A product that is out of support, or whose supplier has no post-quantum plan, is not on its own a reason for a programme: the [baseline](/baseline/) replaces it, with a date on the register.

## Who does what

- The **executive sponsor** owns the programme, approves its scope and budget line, and receives progress reports.
- The **migration lead** runs the programme, keeps the records, and sets the review cadence.
- **System owners** answer for their systems' register rows and change records.
- **Procurement** adds post-quantum wording to purchases and renewals and chases supplier answers.
- **Legal or risk** confirms which authority timelines and obligations apply and advises the sponsor on accepting residual risk.
- **Operations** runs changes, rollbacks, and deployed-state checks.

## Do this

1. **Write the programme goal in one or two sentences**, based on the answers to the four questions on Start here: what is in scope, what is not, and what "done" means for this phase.
2. **Assign the roles above by name.** A role with no named person is a gap to resolve, not a default.
3. **Agree the first budget line** for discovery and supplier engagement. A full migration budget usually cannot be estimated until the inventory exists and the register has an order; say so in the charter and set the date when it will be revisited. When it is, include supplier upgrade charges, replacement of products that cannot be upgraded, testing environments and effort, discovery tooling, and specialist advice.
4. **Set the reporting cadence**: what the migration lead reports to the sponsor, how often, and which triggers bring a report forward (see [Review and report](/programme/subsequent-review/)).
5. **Tell the people whose work will change**: system owners, procurement, operations, and suppliers, who should expect written questions about their post-quantum plans. Explain the different jobs — key establishment, signatures, and verifiers that cannot be updated — so teams do not assume one cutover.

Published migration guides start in the same place. The Post-Quantum Cryptography Coalition's [migration roadmap](/standards/migration-guides/pqcc-roadmap/) (May 2025) begins by setting out the organisation's migration aims and its relevance, then assigning a migration lead, identifying stakeholders, and aligning them through strategic messaging; setting a discovery plan and budget follows in its second category. The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) ask organisations to define their migration goals as the first activity.

## Keep this evidence

A one-page [programme charter](/templates/records/programme-charter/): goal and scope, named sponsor, migration lead, system owners, procurement, legal or risk, and operations contacts; the first budget line and when it will be revisited; the reporting cadence; and the date the charter was agreed. Store it with the [register](/templates/records/register/).

## Example

An insufficient record is "IT will handle post-quantum."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the fictional manufacturer's charter, agreed on 3 August 2026, names the managing director as sponsor and the operations director as migration lead, and names the product engineering lead, product security lead, and IT lead as owners of the archive, the product sensor, and the office laptops. The first phase covers discovery, supplier answers for the design archive, and a decision on the sensor's firmware verifier before production design freeze. The migration lead reports monthly, and immediately if the supplier's release date moves or there is still no supported sensor signature option three months before design freeze.

## Limits and next step

The charter assigns responsibility; it does not decide priorities or algorithms. Large or regulated organisations will usually need a formal governance structure and specialist input beyond this page. Next, [inventory the cryptography](/programme/inventory/).

## Sources

- Post-Quantum Cryptography Coalition, Post-Quantum Cryptography (PQC) Migration Roadmap, May 2025. [PQC Migration Roadmap (PDF)](https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Start here](/start-here/)
- [Programme](/programme/)
- [Programme charter](/templates/records/programme-charter/)
- [Register](/templates/records/register/)
- [Review and report](/programme/subsequent-review/)
