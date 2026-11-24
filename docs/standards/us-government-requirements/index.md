---
title: US government post-quantum requirements
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: The US statute, presidential orders, OMB memorandum and CISA guidance that set post-quantum deadlines for federal agencies, and who each one binds.
---

These documents set post-quantum requirements for the US federal government. They bind US federal agencies, not private organizations or other governments, and each has its own audience. A statute, the [Quantum Computing Cybersecurity Preparedness Act](/standards/us-government-requirements/qccpa/), requires agency inventories and migration plans. Presidential direction ([NSM-10](/standards/us-government-requirements/nsm-10/), [EO 14306](/standards/us-government-requirements/eo-14306/) and [EO 14412](/standards/us-government-requirements/eo-14412/)) sets goals and deadlines and assigns work to OMB, NIST, CISA and NSA. [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/) tells executive departments and agencies how to carry out the migration. CISA's [product-category list](/standards/us-government-requirements/cisa-pqc-product-categories/) guides agency acquisition. National security systems are excluded from the statute and the OMB memorandum and follow NSA requirements; see [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/). Contractors are not bound by any of these directly; EO 14412 directs the FAR Council to propose a rule that would change that.

## Which document do I need?

- What deadlines apply to a federal agency's own systems? → [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/)
- Where do the 2030 and 2031 deadlines and the proposed contractor rule come from? → [EO 14412](/standards/us-government-requirements/eo-14412/)
- When must federal systems support TLS 1.3? → [EO 14306](/standards/us-government-requirements/eo-14306/)
- In which product categories should a buyer insist on post-quantum support now? → [CISA PQC product categories](/standards/us-government-requirements/cisa-pqc-product-categories/)
- What does the law require of agencies? → [Quantum Computing Cybersecurity Preparedness Act](/standards/us-government-requirements/qccpa/)

## Key federal dates

- January 2, 2030: federal agencies support TLS 1.3 or a successor (EO 14306; M-26-15 Appendix A).
- December 31, 2030: post-quantum key establishment in agency high-value assets and high-impact systems (EO 14412; M-26-15 phases agencies' work toward it). The same date is in the contractor FAR rule EO 14412 directs to be proposed; it is not yet a contract requirement.
- December 31, 2031: post-quantum digital signatures in agency high-value assets and high-impact systems (EO 14412).
- 2035: M-26-15's final phase, completing migration of remaining systems based on risk and commercial availability, in line with the NSM-10 goal of mitigating as much quantum risk as feasible by 2035.

These dates are for US federal agencies. Other authorities set their own; see [Timelines](/learn/timelines/).

## Statute

| Publication | Summary | Reference |
| --- | --- | --- |
| Public Law 117-260 | Quantum Computing Cybersecurity Preparedness Act: agency inventories and OMB-required migration plans; national security systems exempt. Approved December 21, 2022. | [Quantum Computing Cybersecurity Preparedness Act](/standards/us-government-requirements/qccpa/) |

## Presidential direction

| Publication | Summary | Reference |
| --- | --- | --- |
| NSM-10 | Goal of mitigating as much quantum risk as feasible by 2035; annual agency inventories. Signed May 4, 2022. | [NSM-10](/standards/us-government-requirements/nsm-10/) |
| EO 14306 | Replaced EO 14144 Section 4(f): CISA product-category list and TLS 1.3 by January 2, 2030. Signed June 6, 2025. | [EO 14306](/standards/us-government-requirements/eo-14306/) |
| EO 14412 | Securing the Nation Against Advanced Cryptographic Attacks: 2030 and 2031 deadlines, CMVP, CBOM and FAR work. Signed June 22, 2026. | [EO 14412](/standards/us-government-requirements/eo-14412/) |

## OMB execution and CISA guidance

| Publication | Summary | Reference |
| --- | --- | --- |
| OMB M-26-15 | Agency migration plans, priority systems and phases to 2035; not for national security systems. Issued June 24, 2026. | [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/) |
| CISA product categories | Categories where post-quantum products are widely available; advice to buy only post-quantum-capable products in them. Published January 23, 2026. | [CISA PQC product categories](/standards/us-government-requirements/cisa-pqc-product-categories/) |

## Sources

- US Congress, Quantum Computing Cybersecurity Preparedness Act, Public Law 117-260, December 21, 2022. [Public Law 117-260](https://www.govinfo.gov/app/details/PLAW-117publ260)
- The White House, National Security Memorandum 10, May 4, 2022. [NSM-10](https://www.govinfo.gov/app/details/DCPD-202200355)
- The White House, EO 14306, June 6, 2025. [EO 14306](https://www.govinfo.gov/app/details/DCPD-202500669)
- The White House, EO 14412, Securing the Nation Against Advanced Cryptographic Attacks, June 22, 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, June 24, 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, January 23, 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/final)

## Related pages

- [Standards](/standards/)
- [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/)
- [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/)
- [Timelines](/learn/timelines/)
