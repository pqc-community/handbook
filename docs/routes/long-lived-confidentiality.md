---
title: Data that needs to stay confidential for years
sidebar_label: Long-lived confidentiality
description: The track for key establishment protecting data that must stay confidential for years. Its clock, its steps, the deadlines that may apply, and the technology cards to open.
displayed_sidebar: routesSidebar
---

This track covers key establishment that protects data which must stay confidential for years, both in transit and in storage. Its clock is the data confidentiality period. Data recorded or copied today can be decrypted once a cryptographically relevant quantum computer exists, so the work starts now rather than when that computer arrives. The programme runs from [Organisation-wide](/routes/organisation-wide/); this page holds the steps for each asset on the track.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) is intended for a broad audience, including US federal agencies, technology providers, standards organisations, and validation laboratories. It says this harvest-now, decrypt-later threat makes acting immediately necessary, especially for data with long-term sensitivity, and that signatures are not vulnerable to it (§3). [When to start](/learn/explainers/when-to-start/) adds the confidentiality period to the migration lead time.

## Who it is for

This track is for assets that answer yes to question A on [Decide whether to act](/migration-practices/diagnose/), recorded as Long-lived confidentiality in the `route` cell of the [decision note](/resources/records/decision-note/). If the same asset also answers yes to question B, C, or D, its signature or verifier line follows [Hard-to-change systems](/routes/hard-to-change-systems/) as well.

## Steps

Take each of the asset's key-establishment lines through these steps. Keep connections and stored data as separate lines. The asset's other lines, such as the signatures of a supplier-hosted service, stay on the migration plan as [Decide what to migrate first](/migration-practices/priority/) orders them; this track adds nothing to them unless the asset's route also records Hard-to-change systems.

1. [Inventory the cryptography](/migration-practices/inventory/). Record the confidentiality period and the key-establishment algorithm for each use, in transit and for stored data, on the [inventory record](/resources/records/inventory/).
2. [Decide what to migrate first](/migration-practices/priority/). Record the order and reason, under that page's rule for key establishment, on the [migration plan](/resources/records/migration-plan/).
3. [Plan the migration](/migration-practices/plan/). Record the applicable timeline and its authority, the milestone, and the four dates on the migration plan.
4. [Work with suppliers](/migration-practices/suppliers/). Record answers on the [vendor response log](/resources/records/vendor-response-log/), with separate rows for connections and for stored data. Record each purchase or renewal on the [purchase requirements record](/resources/records/purchase-requirements/).
5. [Choose an option](/technology-options/choosing/), using the cards below. Record the option and its authority on the [change record](/resources/records/change-record/).
6. [Make and verify one change](/migration-practices/implementation/). Complete the change record with tests, rollback, a deployed-state check and evidence, then update the inventory and plan.
7. [Keep the ability to change again](/migration-practices/changing-algorithms-again/). Record the agility evidence in the existing records.

Reviews run for the whole programme, under [Review and report](/migration-practices/subsequent-review/) on the Organisation-wide route.

## Deadlines that may apply

Each date binds or guides only the audience its authority names. Record the one that applies to you on the plan row, as step 1 of [Plan the migration](/migration-practices/plan/) describes, and see [Why migration timelines differ](/learn/explainers/timelines/).

| Authority | Audience | What it sets for key establishment |
| --- | --- | --- |
| EU NIS Cooperation Group, [roadmap](/standards/migration-guides/eu-nis-roadmap/), version 1.1, 11 June 2025 | EU Member States. It says public administrations and critical infrastructure entities, notably those in scope of the NIS2 Directive, should refer to it | Recommends that data needing to stay confidential for at least ten years be protected from quantum attack no later than the end of 2030, and that high-risk use cases complete the transition by then |
| NIST, [IR 8547](/standards/transition-and-key-management/nist-ir-8547/), October 2026 | A broad audience, including US federal agencies, technology providers, standards organisations, and validation laboratories | Says systems that protect data with long-term confidentiality needs warrant the earliest transitions (§4). Schedules quantum-vulnerable key establishment for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines, and notes that application-specific guidance may require earlier migration (§4.1.2) |
| [EO 14412](/standards/us-federal-directives/eo-14412/) and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/), as recorded in NIST IR 8547 | US federal agencies | High value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030. Agencies must give the same priority to systems that protect data expected to remain mission-sensitive in 2030 (§4) |
| UK NCSC, [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/), published and reviewed 20 March 2025 | Primarily large organisations, operators of critical national infrastructure, and companies with bespoke IT; the NCSC says the core timelines are relevant to all organisations | General milestones for every job, not specific to key establishment: early, highest-priority migration activities by 2031, and migration of all systems, services, and products completed by 2035 |

## Technology cards

Open the card for each technology that carries the asset's data:

- **Connections:** [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), [SSH](/technology-options/ssh/), [Wi-Fi and network access](/technology-options/wifi-network-access/), and [secure messaging](/technology-options/secure-messaging/).
- **Stored data:** [encrypted email and files](/technology-options/encrypted-files/), and [backups, archives and storage](/technology-options/stored-data/).
- **Platforms:** [HSMs and key management](/technology-options/hsm-kms/), and [cloud and SaaS](/technology-options/cloud-saas/).

## Output records

- Inventory rows with the confidentiality period and each key-establishment algorithm.
- Migration plan lines for connections and stored data, each with its order, timeline, and four dates.
- Vendor response log rows and purchase requirements for each supplier involved.
- A change record for each change. When no supported option exists yet, record the change as `blocked` on the change record, with a resolve-by date, and carry it on the review log until it is resolved.

The track's work for a line is in place when its four dates are recorded and its change record exists.

## When to leave

- **The data owner confirms a period that changes the answer to question A.** Re-answer on the decision note. The asset moves to the track its new answers give.
- **Something changes the asset's answer to question B, C, or D.** Re-answer the four questions on the decision note; step 3 of [Decide whether to act](/migration-practices/diagnose/) sets the new route, which may add [Hard-to-change systems](/routes/hard-to-change-systems/).
- **A supplier's answer is `missing` or `concerning`.** Follow it up and escalate it under step 4 of [Work with suppliers](/migration-practices/suppliers/#4-follow-up-and-escalate).
- **You cannot choose a route for an asset.** Follow [When you cannot answer or cannot choose](/migration-practices/diagnose/#when-you-cannot-answer-or-cannot-choose). A large bespoke estate, critical national infrastructure, or a regulated system stays on this route and brings in a specialist as well, as that section says.

## Worked example

[Protect this first](/resources/examples/protect-this-first/) takes the fictional manufacturer's product-design archive along this track. The designs must stay confidential for 15 years under its own retention policy. The example runs from the decision note to the staging pilot, with the stored-data line kept separate while the supplier's answer is missing.

## Sources

- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Situation routes](/routes/)
- [Decide what to migrate first](/migration-practices/priority/)
- [Protect this first](/resources/examples/protect-this-first/)
- [Glossary](/resources/reference/glossary/)
