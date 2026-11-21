---
title: Plan the migration
sidebar_label: Plan the migration
description: Record which authority timelines apply to you, set milestones per asset, and track four separate dates — supplier release, testing, production deployment, and end of support.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You have a priority record and need to turn it into dated, owned milestones, or a supplier release, test result, or support end has changed a date you rely on.

## Who does what

- The **migration lead** keeps the [migration plan](/resources/migration-plan/) and its dependencies.
- **Legal or risk** confirms which authority timelines apply to the organisation, its sectors, and its customers.
- **Asset owners** set and update the four dates for their assets.
- **Procurement** supplies supplier release dates and support ends from written answers and contracts.

## Do this

1. **Work out which timelines apply, and to whom.** A date binds or guides only the audience its authority names. Examples include:
   - the UK NCSC's [2028, 2031 and 2035 milestones](/standards/migration-guides/uk-ncsc-pqc-guidance/) for UK organisations;
   - the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) for Member States and the entities that follow them;
   - ASD's [end-2030 recommendation](/standards/migration-guides/asd-planning/) for Australian organisations;
   - [EO 14412](/standards/us-federal-directives/eo-14412/) and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/) for US federal agencies;
   - [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) for US national security systems and their suppliers.

   [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) schedules quantum-vulnerable public-key algorithms for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines. Record the authority and audience beside every date; see [Why migration timelines differ](/learn/explainers/timelines/).
2. **Set a milestone for each asset and job** from the priority record. Highest-priority rows get the earliest applicable milestone; rows that follow supplier updates get a tracking milestone rather than a bespoke project.
3. **Track four separate dates for each asset**, because a supplier's release is not your deployment:
   - **supplier release** — when the supplier ships post-quantum support;
   - **testing** — when your interoperability and performance checks complete;
   - **production deployment** — when the change is live and checked in your environment;
   - **end of support** — when the supplier stops security fixes for the release you run now.
4. **Record dependencies** that can move a date: a supplier release, a certificate authority, a hardware refresh, a product design freeze.
5. **Re-plan when a date moves.** Replace the superseded date, note why, and check whether a later milestone is now at risk.

The NCSC's timelines note that downstream milestones depend on supplier updates, and ask organisations to include long-lived hardware roots of trust in their initial plans. NIST IR 8547 advises that devices unable to update signature verification in the field, if expected to remain in service once a cryptanalytically relevant quantum computer exists, should be designed from the start to verify quantum-resistant code signatures.

## Keep this evidence

The [migration plan](/resources/migration-plan/): per asset, the owner, why it is included, the applicable timeline and authority, the milestone, the four dates, dependencies, the next action, and the subsequent-review date.

## Example

An insufficient record is a single target year with no owner, test window, or deployment date.

A decision-ready record, from [Protect this first](/resources/protect-this-first/), plans the product-design archive against the UK NCSC target dates. It records the supplier release as 2026-10-01 from the supplier's letter and testing as the staging pilot passed on 2026-10-21. Production deployment stays `unknown` until production interoperability checks finish, and end of support for the current release is `unknown` and has been asked of the supplier. The sensor's firmware verifier is planned against its production design freeze, with all four dates `unknown` until a signature option exists.

## Limits and next step

The plan records which dates apply; deciding whether a regulation or contract binds you is a legal question for your risk owner or sector authority. Next, [get each supplier's plan](/migration-practices/vendor-plan/) and [buy post-quantum-ready](/migration-practices/procurement/).

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Migration plan](/resources/migration-plan/)
- [Why migration timelines differ](/learn/explainers/timelines/)
- [Get each supplier's plan](/migration-practices/vendor-plan/)
- [Hard-to-change systems](/routes/hard-to-change-systems/)
