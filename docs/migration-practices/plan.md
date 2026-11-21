---
title: Plan the migration
sidebar_label: Plan the migration
description: Record which authority timelines apply to you, set milestones per asset and job, and track four separate dates — supplier release, testing, production deployment, and end of support.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

The migration plan has an order and you need to turn it into dated, owned milestones, or a supplier release, test result, design freeze, or support end has changed a date you rely on.

## Who does what

- The **migration lead** keeps the [migration plan](/resources/migration-plan/) and its dependencies.
- **Legal or risk** confirms which authority timelines apply to the organisation, its sectors, and its customers.
- **Asset owners** set and update the four dates on their rows.
- **Procurement** supplies supplier release dates, renewal dates, and support ends from written answers and contracts.

## Do this

1. **Work out which timelines apply, and to whom.** A date binds or guides only the audience its authority names. Examples include:
   - the UK NCSC's [2028, 2031 and 2035 milestones](/standards/migration-guides/uk-ncsc-pqc-guidance/) for UK organisations;
   - the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (2026, 2030 and 2035 milestones) for Member States and the entities that follow it;
   - the Australian Signals Directorate's [planning guidance](/standards/migration-guides/asd-planning/) (end-2026, end-2028 and end-2030 milestones) for Australian organisations;
   - [EO 14412](/standards/us-federal-directives/eo-14412/) and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/) for US federal agencies, and, through a procurement rule the order directs the Federal Acquisition Regulatory Council to propose, for covered federal contractors;
   - NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) for US national security systems.

   [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) schedules quantum-vulnerable public-key algorithms for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines. Record the authority and audience beside every date; see [Why migration timelines differ](/learn/explainers/timelines/).
2. **Set a milestone for each asset and job** on the rows [Decide what to migrate first](/migration-practices/priority/) has ordered. Keep one row per asset and job; combine jobs in one row only when they share every date, owner, and milestone. Highest-priority lines get the earliest applicable milestone. Lines that follow supplier updates get a tracking milestone, not a bespoke project.
3. **Track four separate dates on each row**, because a supplier's release is not your deployment:
   - **supplier release** — when the supplier ships post-quantum support;
   - **testing** — when your interoperability and performance checks complete;
   - **production deployment** — when the change is live and checked in your environment;
   - **end of support** — when the supplier stops security fixes for the release you run now.
4. **Record dependencies that can move a date**: a supplier release, a certificate authority, a hardware refresh, a contract renewal, or a product design freeze. A design freeze is a hard deadline: record its date and escalate when an option is still missing as it approaches.
5. **Re-plan when a date moves.** Replace the superseded date, note why, and check whether a later milestone is now at risk.

The NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) say that your plan will move as your suppliers evolve theirs. They ask the organisations they address, technical decision-makers and risk owners in large organisations, critical national infrastructure, and bespoke IT, to build an initial migration plan by 2028 that identifies any requirement to migrate long-lived hardware roots of trust, and to carry out their early, highest-priority migration activities by 2031. NIST IR 8547 advises that devices unable to update signature verification in the field, if expected to remain in service once a cryptanalytically relevant quantum computer exists, should be designed to require quantum-resistant signatures on their executable code.

## Keep this evidence

The [migration plan](/resources/migration-plan/): per asset and job, the owner, the order and reason, the timeline and authority, the milestone, the four dates, dependencies, the next action, and the subsequent-review date.

## Example

An insufficient record is a single target year with no owner, test window, or deployment date.

A decision-ready record, from [Protect this first](/resources/protect-this-first/), plans the product-design archive against the UK NCSC target dates. It sits in the first group because of its 15-year confidentiality period, so its key-establishment line takes the NCSC's 2031 milestone for highest-priority migration activities, within the 2035 completion date; its signature line is a separate row that waits on the supplier's plan. The plan records the supplier release as 2026-10-01, from the supplier's letter, and testing as the staging pilot passed on 2026-10-21. Production deployment stays `unknown` until production checks finish, and end of support for the current release is `unknown`, with a written answer due from the supplier by 2026-12-01. The sensor's firmware verifier takes its production design freeze on 2027-06-30 (fictional) as its milestone, with all four dates `unknown` until a signature option exists.

## Limits and next step

The plan records which dates apply; deciding whether a regulation or contract binds you is a legal question for your risk owner or sector authority. Next, [work with suppliers](/migration-practices/suppliers/) and [choose an option](/technology-options/choosing/) for each system.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, 24 June 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, published 6 July 2022, last reviewed 22 September 2025. [ASD publication page (HTML)](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing FAQ, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Migration plan](/resources/migration-plan/)
- [Why migration timelines differ](/learn/explainers/timelines/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Hard-to-change systems](/routes/hard-to-change-systems/)
