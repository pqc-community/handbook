---
title: EU roadmap sets 2026, 2030 and 2035 PQC milestones
description: The NIS Cooperation Group's coordinated roadmap recommends that EU Member States start their PQC transition by 2026 and finish high-risk use cases by 2030.
date: 2025-06-23
authors: [pqc_handbook]
tags: [authority-updates, eu, key-establishment]
---

On 23 June 2025 the European Commission published the NIS Cooperation Group's [coordinated implementation roadmap](/standards/migration-guides/eu-nis-roadmap/) for the transition to post-quantum cryptography, Part 1, version 1.1, dated 11 June 2025. It recommends milestones for the end of 2026, 2030 and 2035 to EU Member States, and says public administrations and critical infrastructure entities, notably those in scope of the NIS2 Directive, should refer to it.

{/* truncate */}

## What was published

The roadmap is the first deliverable of the NIS Cooperation Group's post-quantum workstream, and it follows Commission Recommendation (EU) 2024/1101 of 11 April 2024, which called for a coordinated roadmap. It sets out how Member States should plan their transition, starting with first steps and initial national roadmaps, then moving to pilots and transitions banded by high-, medium- and low-risk use cases. It makes recommendations; it does not itself place legal obligations on organisations.

## The milestones

By the end of 2026, the roadmap expects Member States to have taken first steps and to have initial national roadmaps. By the end of 2030, it expects the next steps to be done, the transition completed for high-risk use cases, planning and pilots completed for medium-risk use cases, and what the roadmap calls "quantum-safe software and firmware upgrades" enabled by default. By the end of 2035, it expects the transition to be completed for medium-risk use cases, and for low-risk use cases as far as feasible.

For high-risk use cases the roadmap says quantum-vulnerable public-key cryptography "shall not be used stand-alone after the end of 2030", with the end of 2035 as the equivalent point for medium-risk use cases. These remain recommendations to Member States rather than obligations on any organisation.

## How it defines high risk

The roadmap counts a use case as high-risk if a loss of confidentiality ten or more years from now would still cause significant damage, which is the harvest-now, decrypt-later test applied to key establishment. It also counts as high-risk a use case that would take more than eight years to move where an attack would have a high impact, such as securing software updates, which brings signatures and long-lived verifiers into the same band for a different reason. The three levels draw on the quantum risk score in the Dutch [PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/).

## What it means for your plan

If you are a public administration or critical infrastructure entity in an EU Member State, watch for your national authority's initial roadmap, which the roadmap expects by the end of 2026, and use the roadmap's risk bands when you [decide what to migrate first](/plan/programme/priority/). Confidential data with a long life and slow-moving signing systems both belong at the front of that order, but for different reasons, so keep them on separate rows of your [register](/templates/records/register/).

Outside that audience, the roadmap's risk bands are still a useful reference for setting priorities, but its dates are recommendations to EU Member States, not universal deadlines. [Set dates and milestones](/plan/programme/dates/) shows how to record which authorities' dates apply to you, and [Why migration timelines differ](/learn/explainers/why-timelines-differ/) sets them side by side.

## Sources

- NIS Cooperation Group, EU PQC Workstream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, Part 1, Version 1.1, 11 June 2025, published by the European Commission on 23 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507), [Commission publication page (HTML)](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- European Commission, Commission Recommendation (EU) 2024/1101 of 11 April 2024 on a Coordinated Implementation Roadmap for the transition to Post-Quantum Cryptography. [EUR-Lex (HTML)](https://eur-lex.europa.eu/eli/reco/2024/1101/oj)

## Related pages

- [Post-quantum migration guides](/standards/migration-guides/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [The quantum threat](/learn/quantum-threat/)
