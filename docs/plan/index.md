---
title: Which plan you need
search_title: Plan your post-quantum migration
sidebar_label: Which plan you need
description: "Four questions decide which post-quantum migration plan you need: the core actions alone, or the core actions and a program, and which dates apply to you."
displayed_sidebar: journeySidebar
---

Post-quantum cryptography replaces the public-key methods that a future quantum computer could break, so every organization needs a migration plan. For many organizations the plan is short, because suppliers make the changes and you follow the [core actions](/plan/core-actions/). Four questions decide whether your plan also needs a [program](/plan/program/).

## Four questions

Answer for the organization as a whole: a question applies if any system, service, or product you use fits it, and one such system is enough, so you need not wait for a complete inventory. If you are **not sure, count the answer as yes** until someone who knows confirms it, and record on the [register](/templates/records/register/) who will confirm and by when.

1. **Data that must stay secret for years.** Do you hold information that must stay confidential for many years that travels over networks, or is stored, under public-key protection? Data a supplier hosts for you counts, as does data you hold for customers, judged by how long they need it secret. It matters now because an attacker can record it today and decrypt it later. Count how long it must stay secret rather than how long you keep it; this handbook treats ten years or more as many years. Ordinary business records, such as accounts, client files, and staff records, usually fall short, while long-lived product designs, health records, and security-sensitive files often do not.
2. **Devices with a fixed key.** Do you make or run products or devices that check signatures with a key or method that cannot be changed after they ship, in hardware or software? A key that a normal update can replace is not fixed, so supported laptops and phones do not count.
3. **Signatures others rely on.** Do you run a certificate authority, public or internal, or sign code, firmware, or documents that other people or devices check? Signing through a supplier's e-signature service does not count; that is supplied IT.
4. **Systems you build or configure.** Do you build software or firmware, or set up the cryptography yourself on your own servers, load balancers, VPNs, or applications? If an IT provider sets these up and keeps them updated for you, treat them as supplied and ask the provider.

A supplied product that is out of support, or whose supplier has no post-quantum plan, is not on its own a reason for a program: replace it under core action 4.

## Your plan

| Your answers | Your plan |
| --- | --- |
| None apply | The [core actions](/plan/core-actions/): seven actions on one page. |
| Any applies | The core actions for everything you buy in, and a [program](/plan/program/) for what the questions found. Start by naming an owner, then take the program's first moves. |
| You run critical national infrastructure, a service whose security a sector regulator oversees (not a professional body, a data protection authority, or a governance-only regulator), or a large estate you build yourself | Bring in specialist advice and speak to your sector regulator or authority. Meanwhile, name an owner and take the program's first moves, which only gather facts, then follow the core actions and a full program. |

## Which dates apply to you

Each date belongs to the authority that set it and the audience it names, so there is no single global deadline. Record those that apply on the register with their authority; [Set dates and milestones](/plan/program/dates/#dates-that-may-apply-by-job) lists them by job.

| If you are | Dates to record |
| --- | --- |
| A UK organization | The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) (March 20, 2025) are aimed primarily at large organizations, operators of critical national infrastructure, and organizations with bespoke IT, although the NCSC says the core timelines are relevant to all organizations. They set defined goals, discovery, and an initial plan by 2028; early, highest-priority migration by 2031; and migration completed by 2035. It expects smaller organizations on mainly commodity IT to receive most upgrades from their service providers, and organizations with custom software to follow the larger organizations' timetable. |
| An EU public administration or critical-infrastructure entity | The EU NIS Cooperation Group's [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, June 11, 2025) is addressed to Member States, and it says public administrations and critical infrastructure entities should refer to it. Its milestones are initial national roadmaps by the end of 2026, high-risk use cases by the end of 2030, and medium-risk ones, with low-risk ones where feasible, by the end of 2035. |
| A US federal agency, or a supplier to one | The [US government requirements](/standards/us-government-requirements/) bind federal agencies. Under EO 14412 and OMB M-26-15, high value assets and high-impact systems must adopt post-quantum key establishment by December 31, 2030, and signatures by December 31, 2031. A contractor date applies only once the procurement rule EO 14412 directs takes effect, while national security systems follow NSA requirements such as [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/). |
| Anywhere else | Record the dates your national authority, your sector regulator, and your customers' contracts set. |

## Words used on these pages

- **Key establishment**: how two systems agree a secret key, and how stored data keys are protected.
- **Signatures**: how software, firmware, documents, and certificates show they come from a particular key holder, unchanged.
- **Verifier**: the part of a device or program that checks a signature, such as a boot loader.
- **Trust anchor**: the key a verifier trusts first, often fixed in a device's hardware.
- **Design freeze**: the date after which a product's hardware design cannot change.
- **Hybrid**: a post-quantum method and a classical one used together.
- **Relying parties**: the people and devices that check your signatures.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed March 20, 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, June 11, 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, June 22, 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, June 24, 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Core actions](/plan/core-actions/)
- [Program](/plan/program/)
- [Register](/templates/records/register/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
