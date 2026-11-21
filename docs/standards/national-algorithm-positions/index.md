---
title: National algorithm positions
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: Side-by-side record of which post-quantum algorithms national authorities name, their positions on hybrid use and their key dates, each with its audience.
---

This category records where national authorities set out algorithm choices and expectations about hybrid use, each with its stated audience. The documents bind only the audiences their authors name: the NSA's CNSA 2.0 applies to US National Security Systems, the BSI guideline is a recommendation, and ANSSI's paper is a position statement that also sets a hybridation expectation for products it evaluates. The handbook records these positions side by side and does not recommend one over another.

- Supplying or operating US National Security Systems? Start with [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/).
- Working to German recommendations, or asked about hybrid-only key establishment? See [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/).
- Building products assessed in France? See the [ANSSI position](/standards/national-algorithm-positions/anssi-pqc-position/), and check ANSSI's current material.
- Following NIST? See [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/).

### Summaries in this category

| Publication | Summary | Reference |
| --- | --- | --- |
| NSA CNSA 2.0 FAQ | Algorithm suite and dates for US National Security Systems; Version 2.2, October 2026. | [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) |
| BSI TR-02102-1 | BSI Technical Guideline of recommended mechanisms and key lengths; Version 2026-01, 23 January 2026. | [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) |
| ANSSI follow-up position paper | ANSSI views on the post-quantum transition; 21 December 2023. | [ANSSI position](/standards/national-algorithm-positions/anssi-pqc-position/) |

### Positions compared

The ASD, UK NCSC and NIST rows link to summaries elsewhere in the Standards section and are included for comparison. A dash means the handbook has not recorded a position for that column.

| Authority | Audience | Post-quantum algorithms named | Hybrid position | Key dates |
| --- | --- | --- | --- | --- |
| [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) | US National Security Systems; recommended guidance for the Department of War and Defense Industrial Base | ML-KEM-1024; ML-DSA-87; LMS and XMSS for firmware and software signing | Will not require NSS developers to use hybrid certified products; hybrids may arise in specific cases for interoperability | 1 January 2027 new acquisitions; 31 December 2030 phase-out of non-supporting equipment unless excepted; 31 December 2031 mandated for use |
| [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) | Primarily developers of new cryptographic systems (recommendations) | FrodoKEM, Classic McEliece, ML-KEM-768 and ML-KEM-1024; post-quantum signatures; SLH-DSA, XMSS, LMS | Post-quantum KEMs only in hybrid form; post-quantum signatures only with classical; hash-based signatures may be used without hybridisation | End 2030 very high protection needs; end 2031 classical key agreement alone; end 2035 classical signatures |
| [ANSSI (2023)](/standards/national-algorithm-positions/anssi-pqc-position/) | Industry and security product designers (position paper; hybridation expected in product evaluation) | Non-exhaustive: ML-KEM, FrodoKEM, ML-DSA, Falcon, SLH-DSA, XMSS, LMS | Strongly stresses hybridisation where post-quantum protection is needed; optional for XMSS and LMS, may be optional for SLH-DSA | Hybrid recommended especially for products protecting data beyond 2030 or used after 2030 |
| [ASD (Australia)](/standards/migration-guides/asd-planning/) | Small and medium businesses, large organisations and critical infrastructure, and government | ASD-approved algorithms per the ISM Guidelines for cryptography | "Does not recommend, but does not prohibit" post-quantum/traditional hybrids | ISM recommends ceasing traditional asymmetric cryptography by end 2030 |
| [UK NCSC](/standards/migration-guides/uk-ncsc-pqc-guidance/) | Technical decision-makers and risk owners in large organisations, CNI and bespoke IT | — | — | 2028 goals and discovery; 2031 highest-priority migration; 2035 migration complete |
| [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) | US federal agencies, technology providers, standards organisations and validation laboratories | ML-KEM (only approved post-quantum key establishment scheme); ML-DSA and SLH-DSA; stateful hash-based signatures | Hybrids typically temporary; accommodated in FIPS 140 validation when combined with an approved scheme | Quantum-vulnerable public-key algorithms deprecated after 2030, disallowed after 2035 |

These positions differ, most visibly on whether post-quantum key establishment should be deployed alone or only in hybrid form, and on which parameter sets are preferred. The handbook records them rather than choosing between them: which position applies depends on the audience you belong to, the regimes you sell into and your own risk decisions. For background on hybrids see [Hybrid cryptography](/learn/hybrid/); for the decision itself see [Choosing a post-quantum option](/technology-options/choosing/) and involve your risk owner.

## Sources

- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, October 2026, Version 2.2. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- Federal Office for Information Security (BSI), BSI TR-02102-1, Version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf)
- ANSSI, ANSSI views on the Post-Quantum Cryptography transition (2023 follow-up), 21 December 2023. [Follow-up position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, last reviewed 22 September 2025. [ASD publication](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Standards](/standards/)
- [Hybrid cryptography](/learn/hybrid/)
- [Choosing a post-quantum option](/technology-options/choosing/)
- [Timelines](/learn/timelines/)
- [Post-quantum migration guides](/standards/migration-guides/)
