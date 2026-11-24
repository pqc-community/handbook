---
title: Canada sets a federal PQC roadmap to 2035
description: The Cyber Centre's ITSM.40.001 roadmap gives Government of Canada departments post-quantum milestones in April 2026, end of 2031 and end of 2035.
date: 2025-06-23
authors: [pqc_handbook]
tags: [authority-updates, canada, key-establishment]
---

The Canadian Centre for Cyber Security has published [ITSM.40.001, Roadmap for the Migration to Post-Quantum Cryptography for the Government of Canada](https://www.cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001), which takes effect on 23 June 2025. It is written for directors and managers of IT systems in federal departments and agencies, and it sets milestones for an initial migration plan in April 2026 and completed migration by the end of 2035.

{/* truncate */}

## What the Cyber Centre published

The roadmap, summarised on the handbook's [ITSM.40.001 page](/standards/migration-guides/canada-itsm-40-001/), asks each department to prepare an initial departmental post-quantum cryptography (PQC) migration plan by April 2026 and to report progress every year from then on. Migration then runs in two waves: high-priority systems by the end of 2031, and the remaining systems by the end of 2035. The Cyber Centre is clear that completion means the quantum risk is mitigated, with quantum-vulnerable algorithms disabled, isolated or tunnelled, rather than PQC simply being supported alongside them.

The roadmap is a recommended plan rather than a binding rule in its own right. It says the Treasury Board of Canada Secretariat (TBS) will issue the policy instruments that require responsible officials to produce departmental plans, and that progress will be collected through existing departmental reporting.

## Priorities and procurement

The roadmap recommends treating any system exposed to harvest-now, decrypt-later as high priority, and it singles out systems that protect the confidentiality of information in transit over public network zones. That puts key establishment first, while the time information must stay protected, a system's support for cryptographic agility, and the impact of a compromise also shape the order.

It also asks departments to write PQC requirements into new procurements, because the earlier they appear in contract clauses the lower the later migration costs. The recommended clauses ask vendors to support PQC in line with Cyber Centre recommendations, to use cryptographic modules validated under the Cryptographic Module Validation Program, and to support cryptographic agility, and departments are told to ask vendors for their PQC implementation plans while they identify systems.

## What it means for your plan

If you work in or for a Government of Canada department, April 2026 is close, so the first job is the discovery and prioritisation that [Decide what to migrate first](/plan/programme/priority/) describes, followed by an initial plan. Record the milestones in your [register](/templates/records/register/) as the Cyber Centre's, with their audience, and watch for the TBS policy instruments, which are the vehicle for any binding requirements.

Suppliers to federal departments should expect the procurement questions above, and [Work with suppliers](/plan/programme/suppliers/) covers the same kind of questions from the buyer's side, including asking for dates rather than intentions.

These milestones apply to federal departments, not to Canadian organisations generally. Other Canadian organisations can draw on the [CFDIR quantum-readiness best practices](/standards/migration-guides/cfdir-quantum-readiness/), and organisations elsewhere should check [which dates apply to them](/plan/#which-dates-apply-to-you) before borrowing Canada's.

## Sources

- Canadian Centre for Cyber Security, Roadmap for the Migration to Post-Quantum Cryptography for the Government of Canada, ITSM.40.001, June 2025, effective 23 June 2025. [Guidance page (HTML)](https://www.cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001)

## Related pages

- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
- [Set dates and milestones](/plan/programme/dates/)
- [National algorithm positions](/standards/national-algorithm-positions/)
