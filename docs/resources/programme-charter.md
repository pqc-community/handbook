---
title: Programme charter
sidebar_label: Programme charter
description: A one-page charter naming the programme's goal and scope, who holds each role, the first budget line, how progress is reported, and when the sponsor agreed it.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this charter when you [set up the programme](/migration-practices/programme/): once the [decision note](/resources/decision-note/) puts any asset on the full path, and again when the scope, roles, or budget change.

## Minimum fields

goal, in scope, out of scope, done for this phase, executive sponsor, migration lead, asset owners, procurement, legal or risk, operations, first budget line, budget revisit, reporting, report triggers, people told, agreed by

Unlike the other records, the charter is one document, so the fields run down the page rather than across it. Name a person or role in every role field; a role with no one named is a gap to resolve, not a default. In `budget revisit`, give the date or event at which the full migration budget will be estimated, usually once the [migration plan](/resources/migration-plan/) has an order.

Record `unknown` in any field you cannot settle yet. Keep keys, secrets, and personal data out of the file. Store the charter with the migration plan.

## Filled example

From [Protect this first](/resources/protect-this-first/). The organisation, roles, and dates are fictional.

| field | entry |
| --- | --- |
| goal | Keep product designs confidential against future quantum attack, secure the product sensor's signature path before production design freeze, and keep office IT on supported supplier updates. |
| in scope | product-design archive; product sensor firmware verifier and its signing key; office laptops, on the supplier-update path |
| out of scope | systems not yet on the inventory, until the first-pass inventory is complete |
| done for this phase | inventory rows for all three assets, including the sensor's firmware-signing key; written supplier answers for the archive; a supported signature option for the sensor, or an escalation to the sponsor, before production design freeze on 2027-06-30 |
| executive sponsor | managing director |
| migration lead | operations director |
| asset owners | product engineering lead (archive); product security lead (sensor); IT lead (laptops) |
| procurement | procurement manager |
| legal or risk | company secretary |
| operations | IT lead |
| first budget line | discovery and supplier engagement, from the operations budget |
| budget revisit | at the first quarterly review after the migration plan has an order |
| reporting | monthly report from the migration lead to the sponsor; quarterly review while any line is first in its job's order |
| report triggers | the workspace supplier's release date moves; no supported sensor signature option three months before design freeze |
| people told | asset owners, procurement, and IT by 2026-08-14; the workspace supplier and shortlisted microcontroller suppliers by written question |
| agreed by | managing director, 2026-08-03 |

## Blank template

| field | entry |
| --- | --- |
| goal | |
| in scope | |
| out of scope | |
| done for this phase | |
| executive sponsor | |
| migration lead | |
| asset owners | |
| procurement | |
| legal or risk | |
| operations | |
| first budget line | |
| budget revisit | |
| reporting | |
| report triggers | |
| people told | |
| agreed by | |

Download a blank CSV: [programme-charter.csv](/downloads/programme-charter.csv).

The charter assigns responsibility; it does not decide priorities or algorithms. Large or regulated organisations will usually need a formal governance structure beyond one page.

## Sources

- Post-Quantum Cryptography Coalition, Post-Quantum Cryptography (PQC) Migration Roadmap, May 2025. [PQC Migration Roadmap (PDF)](https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Set up the programme](/migration-practices/programme/)
- [Decision note](/resources/decision-note/)
- [Migration plan](/resources/migration-plan/)
- [Organisation-wide](/routes/organisation-wide/)
