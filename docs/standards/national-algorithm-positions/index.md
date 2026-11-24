---
title: National algorithm positions
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: Side-by-side record of which post-quantum algorithms national authorities name, their positions on hybrid use and their key dates, each with its audience.
---

This category records where national authorities set out algorithm choices and expectations about hybrid use, each with its stated audience. The documents bind only the audiences their authors name: the NSA's CNSA 2.0 applies to US National Security Systems, the BSI guideline is a recommendation, and ANSSI's position paper sets out recommendations and views while also setting a hybridation expectation for products it evaluates, which its non-normative 2026 protocol notes apply to TLS 1.3, IPsec and SSHv2. The handbook records these positions side by side and does not recommend one over another.

- Supplying or operating US National Security Systems? Start with [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/).
- Working to German recommendations, or asked about hybrid-only key establishment? See [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/).
- Building products assessed in France, or deploying TLS 1.3, IPsec or SSH to French recommendations? See the [ANSSI position](/standards/national-algorithm-positions/anssi-pqc-position/), which also covers its 2026 protocol and crypto-agility notes.
- Following NIST? See [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/).

## Summaries in this category

| Publication | Summary | Reference |
| --- | --- | --- |
| NSA CNSA 2.0 FAQ | Algorithm suite and dates for US National Security Systems; Version 2.2, October 2026. | [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) |
| BSI TR-02102-1 | BSI Technical Guideline of recommended mechanisms and key lengths; Version 2026-01, 23 January 2026. | [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) |
| ANSSI position paper and notes | ANSSI views on the post-quantum transition, 21 December 2023; technical notes on TLS 1.3, IPsec and SSHv2, 2 February 2026; crypto-agility note, 19 January 2026. | [ANSSI position](/standards/national-algorithm-positions/anssi-pqc-position/) |

## Positions compared

The ASD, UK NCSC and NIST rows link to summaries elsewhere in the Standards section and are included for comparison. A dash means the handbook has not recorded a position for that column.

| Authority | Audience | Post-quantum algorithms named | Hybrid position | Key dates |
| --- | --- | --- | --- | --- |
| [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) | US National Security Systems; recommended guidance for the Department of War and Defense Industrial Base | ML-KEM-1024; ML-DSA-87; LMS and XMSS for firmware and software signing | Will not require NSS developers to use hybrid certified products; hybrids may arise in specific cases because of product availability and interoperability requirements | 1 January 2027 new acquisitions; 31 December 2030 phase-out of non-supporting equipment unless excepted; 31 December 2031 mandated for use |
| [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) | Primarily developers of new cryptographic systems (recommendations) | FrodoKEM, ML-KEM-768 and ML-KEM-1024 (Classic McEliece is still listed, but BSI notes of 29 September 2026 advise against it in new developments); post-quantum signatures; SLH-DSA, XMSS, LMS | Post-quantum KEMs only in hybrid form; post-quantum signatures only with classical; hash-based signatures can in principle be used alone, with careful implementation (stateful XMSS and LMS only with secure state management) | End 2030 very high protection needs; end 2031 classical key agreement alone; end 2035 classical signatures |
| [ANSSI](/standards/national-algorithm-positions/anssi-pqc-position/) | Industry and security product designers (2023 position paper; hybridation expected in product evaluation); developers, administrators and security managers (2026 protocol notes, not normative) | Non-exhaustive: ML-KEM, FrodoKEM, ML-DSA, Falcon, SLH-DSA, XMSS, LMS | Strongly stresses hybridisation where post-quantum protection is needed; optional for XMSS and LMS, may be optional for SLH-DSA; 2026 notes recommend hybrid key exchange and signature authentication in TLS 1.3, IPsec and SSHv2, with pre-shared keys only as a temporary measure | Hybrid recommended especially for products protecting data beyond 2030 or used after 2030 |
| [ASD (Australia)](/standards/migration-guides/asd-planning/) | Small and medium businesses, large organisations and critical infrastructure, and government | ASD-approved algorithms per the ISM Guidelines for cryptography | "Does not recommend, but does not prohibit" post-quantum/traditional hybrids | ISM recommends ceasing traditional asymmetric cryptography by end 2030 |
| [UK NCSC](/standards/migration-guides/ncsc-migration-timelines/) | Technical decision-makers and risk owners in large organisations, CNI and bespoke IT | — | — | 2028 goals and discovery; 2031 highest-priority migration; 2035 migration complete |
| [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) | US federal agencies, technology providers, standards organisations and validation laboratories | ML-KEM (only approved post-quantum key establishment scheme); ML-DSA and SLH-DSA; stateful hash-based signatures | Hybrids typically temporary; accommodated in FIPS 140 validation when combined with an approved scheme | Quantum-vulnerable public-key algorithms deprecated after 2030, disallowed after 2035 |

These positions differ, most visibly on whether post-quantum key establishment should be deployed alone or only in hybrid form, and on which parameter sets are preferred. The handbook records them rather than choosing between them: which position applies depends on the audience you belong to, the regimes you sell into and your own risk decisions. For background on hybrids see [Hybrid cryptography](/learn/hybrid/); for the decision itself see [Choosing a post-quantum option](/technology-options/choosing/) and involve your risk owner.

## Sources

- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, October 2026, Version 2.2. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- Federal Office for Information Security (BSI), BSI TR-02102-1, Version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf?__blob=publicationFile)
- Federal Office for Information Security (BSI), Notes on recent developments concerning Classic McEliece, 29 September 2026. [BSI notes on Classic McEliece (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Crypto/Notes_Classic_McEliece.pdf?__blob=publicationFile)
- ANSSI, ANSSI views on the Post-Quantum Cryptography transition (2023 follow-up), 21 December 2023. [Follow-up position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- ANSSI, Transition post-quantique de TLS 1.3 (ANSSI-FT-115), Transition post-quantique de SSHv2 (ANSSI-FT-116) and Transition post-quantique d'IPsec (ANSSI-FT-117), each version 1.0, 2 February 2026. [TLS 1.3 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_tls_1_3.pdf) / [SSHv2 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ssh_v2.pdf) / [IPsec note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ipsec.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, last reviewed 22 September 2025. [ASD publication](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Standards](/standards/)
- [Hybrid cryptography](/learn/hybrid/)
- [Choosing a post-quantum option](/technology-options/choosing/)
- [Timelines](/learn/timelines/)
- [Post-quantum migration guides](/standards/migration-guides/)
