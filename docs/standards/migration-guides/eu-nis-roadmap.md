---
title: "EU NIS Cooperation Group: A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography"
search_title: "EU PQC roadmap: 2026, 2030 and 2035 milestones"
sidebar_label: EU NIS roadmap
displayed_sidebar: standardsSidebar
description: EU NIS Cooperation Group roadmap recommending 2026, 2030 and 2035 milestones for Member States' transition to post-quantum cryptography.
---

## What it covers

The coordinated implementation roadmap sets out how EU Member States should plan their transition to post-quantum cryptography: first steps and initial national roadmaps, then pilots and transitions banded by high-, medium- and low-risk use cases, with quantum-safe software and firmware upgrades becoming the default.

It is Part 1, Version 1.1, of the work of the PQC workstream of the NIS Cooperation Group, dated 11 June 2025 on its cover, and the first deliverable of that workstream. The European Commission published it on its digital-strategy site on 23 June 2025. It is aimed at Member States, and it says public administrations and critical infrastructure entities, notably those in scope of the NIS2 Directive, should refer to it. It makes recommendations; it does not itself place legal obligations on organisations.

:::info[Official texts]

- [Coordinated implementation roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- [European Commission publication page (HTML)](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2025-06-11">2025&#8209;06&#8209;11</time> | The EU PQC Workstream dated Part 1, Version 1.1, of the roadmap. |
| <time dateTime="2025-06-23">2025&#8209;06&#8209;23</time> | The European Commission published the roadmap on its digital-strategy site. |
| <time dateTime="2026-10-12">2026&#8209;10&#8209;12</time> | Germany's BMI, BMDS and BSI published a joint national guideline implementing the roadmap and adopting its timelines. |
| <time dateTime="2026-11-10">2026&#8209;11&#8209;10</time> | The Dutch government's Rijksbrede Quantumstrategie, sent to the House of Representatives, set a PQC migration timeline for central government organisations following the roadmap's. |
| <time dateTime="2026-12-31">2026&#8209;12&#8209;31</time> | Roadmap milestone: Member States take the first steps and have initial national roadmaps. |
| <time dateTime="2030-12-31">2030&#8209;12&#8209;31</time> | Roadmap milestone: next steps done, PQC transition completed for high-risk use cases, planning and pilots completed for medium-risk use cases, and quantum-safe software and firmware upgrades enabled by default. |
| <time dateTime="2035-12-31">2035&#8209;12&#8209;31</time> | Roadmap milestone: transition completed for medium-risk use cases, and for low-risk use cases as far as feasible. |

## Relationship with other standards

The roadmap follows [Commission Recommendation (EU) 2024/1101](https://eur-lex.europa.eu/eli/reco/2024/1101/oj) of 11 April 2024, which called for a coordinated implementation roadmap for the transition. For high-risk use cases, the roadmap says quantum-vulnerable public-key cryptography "shall not be used stand-alone after the end of 2030"; for medium-risk use cases the equivalent point is the end of 2035. The roadmap counts a use case as high-risk if a loss of confidentiality ten or more years from now would still cause significant damage, or if moving it would take more than eight years and an attack would have a high impact, as with securing software updates. It bases its three levels on the quantum risk score in the Dutch [PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/). These are recommendations to Member States, not dates that apply universally; see [Timelines](/learn/explainers/why-timelines-differ/).

Member States implement the roadmap nationally. In Germany, the Federal Ministry of the Interior (BMI), the Federal Ministry for Digital Transformation and Government Modernisation (BMDS) and the BSI published a joint guideline on 12 October 2026 (the document is dated 11 September 2026). It is addressed to federal, state and local administrations and to organisations and companies, especially critical infrastructure operators, and adopts the roadmap's timelines: high-risk use cases quantum-safe by the end of 2030, medium-risk use cases by the end of 2035, and the initial preparation and planning phase complete by the end of 2026. Its deadlines are urgent recommendations; it asks bodies such as the IT Planning Council (IT-Planungsrat) and UP KRITIS to adopt them as bindingly as possible by the end of 2026, and notes that the BSI has already set binding deadlines for approved products for classified information.

In the Netherlands, the government-wide quantum strategy (Rijksbrede Quantumstrategie), published on 10 November 2026 as an annex to a letter to the House of Representatives, includes a PQC migration timeline for central government organisations that follows the roadmap's: a draft migration plan and pilots for high- and medium-risk use cases by the end of 2027, migration of high-risk use cases and quantum-safe software and firmware by default by the end of 2030, and migration of medium-risk use cases by the end of 2035, with low-risk use cases as far as possible. The government says it aims to keep to this timeline, that it can be adjusted or accelerated as the threat changes, and that organisations may move faster. It applies to central government, not to Dutch organisations generally; for those, the [Dutch PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/) gives the method.

The roadmap does not specify algorithms. For the positions of individual national authorities, such as Germany's BSI and France's ANSSI, on algorithms and hybrid use, see [National algorithm positions](/standards/national-algorithm-positions/). For asset-level work inside one organisation, pair it with the handbook's [Decide what to migrate first](/plan/programme/priority/) practice and the [Dutch PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/).

## Sources

- NIS Cooperation Group, EU PQC Workstream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, Part 1, Version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507), [Commission publication page (HTML)](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- Government of the Netherlands, Rijksbrede Quantumstrategie: Kansen benutten, belangen beschermen, integraal verbinden, in Dutch, annex to Kamerstuk 33009 no. 195, published 10 November 2026. [Rijksbrede Quantumstrategie (PDF)](https://zoek.officielebekendmakingen.nl/blg-1279064.pdf)
- Federal Ministry of the Interior (BMI), Federal Ministry for Digital Transformation and Government Modernisation (BMDS) and BSI, Leitlinie zur Umstellung auf PQC: Nationale Umsetzung der EU-Roadmap zur Umstellung auf Post-Quanten-Kryptografie, dated 11 September 2026, published 12 October 2026. [Leitlinie zur Umstellung auf PQC, in German (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Krypto/Leitlinie-Umstellung-PQC.pdf?__blob=publicationFile), [BSI press release (HTML, German)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/261012_Leitlinie-PQC.html)
- European Commission, Commission Recommendation (EU) 2024/1101 of 11 April 2024 on a Coordinated Implementation Roadmap for the transition to Post-Quantum Cryptography. [EUR-Lex (HTML)](https://eur-lex.europa.eu/eli/reco/2024/1101/oj)

## Related pages

- [Post-quantum migration guides](/standards/migration-guides/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Timelines](/learn/explainers/why-timelines-differ/)
- [Decide what to migrate first](/plan/programme/priority/)
