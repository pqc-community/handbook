---
title: Post-quantum cryptography standards
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: NIST post-quantum key-establishment and signature standards, stateful hash-based schemes, KEM recommendations, work in development and standardisation reports.
---

These publications specify NIST's approved quantum-resistant public-key algorithms, the guidance for using them, and NIST's reports on the algorithms still in the pipeline. The FIPS are standards for US federal computer systems; NIST's FIPS FAQ says they are not always mandatory for agencies (each FIPS's applicability section says when), do not apply to national security systems, and are used voluntarily elsewhere. The SPs are NIST recommendations, and the IRs are informative reports that impose no requirements. Key establishment and digital signatures are listed separately because their migration drivers differ.

### Which document do I need?

- Which post-quantum algorithm protects key exchange? → [FIPS 203 (ML-KEM)](/standards/post-quantum/fips-203/)
- How do I combine ML-KEM with a classical algorithm in a hybrid? → [NIST SP 800-227](/standards/post-quantum/sp-800-227/)
- Which post-quantum signature should certificates and code signing use? → [FIPS 204 (ML-DSA)](/standards/post-quantum/fips-204/) and [FIPS 205 (SLH-DSA)](/standards/post-quantum/fips-205/)
- Can firmware signing use LMS or XMSS? → [NIST SP 800-208](/standards/post-quantum/sp-800-208/)
- What else is NIST likely to standardise? → [NIST IR 8610](/standards/post-quantum/nist-ir-8610/) and [NIST IR 8545](/standards/post-quantum/nist-ir-8545/)

### Key establishment and KEMs

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 203 | ML-KEM, the only NIST-approved post-quantum public-key key-establishment scheme. Final, 13 August 2024. | [FIPS 203](/standards/post-quantum/fips-203/) |
| NIST SP 800-227 | Recommendations for using KEMs, including key combiners for hybrids. Final, 18 September 2025. | [NIST SP 800-227](/standards/post-quantum/sp-800-227/) |

### Digital signatures

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 204 | ML-DSA, lattice-based signatures. Final, 13 August 2024; planning note 31 July 2026. | [FIPS 204](/standards/post-quantum/fips-204/) |
| FIPS 205 | SLH-DSA, stateless hash-based signatures. Final, 13 August 2024. | [FIPS 205](/standards/post-quantum/fips-205/) |
| NIST SP 800-208 | Stateful hash-based signatures (LMS, HSS, XMSS, XMSS^MT); not for general use. Final, 29 October 2020. | [NIST SP 800-208](/standards/post-quantum/sp-800-208/) |

### In development (not yet approved)

| Publication | Summary | Reference |
| --- | --- | --- |
| FALCON-derived signature FIPS | Under development according to NIST IR 8547 (§2.1); no draft on CSRC as of 21 November 2026. | [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) |
| HQC-KEM FIPS | Under development according to NIST IR 8547; no draft on CSRC as of 21 November 2026. | [NIST IR 8545](/standards/post-quantum/nist-ir-8545/) |
| NIST SP 800-230 | Six additional SLH-DSA parameter sets limited to 2^24 signatures per key; not approved for general-purpose use. Initial public draft, 13 April 2026. | [SP 800-230 draft](https://csrc.nist.gov/pubs/sp/800/230/ipd) |
| Additional signature schemes | NIST's on-ramp for further signature algorithms; nine candidates in round three. | [NIST IR 8610](/standards/post-quantum/nist-ir-8610/) |

### Standardisation status reports

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST IR 8528 | First-round report on additional signatures; 14 candidates advanced. Final, 24 October 2024. | [NIST IR 8528](/standards/post-quantum/nist-ir-8528/) |
| NIST IR 8610 | Second-round report on additional signatures; nine candidates advanced. Final, 14 May 2026. | [NIST IR 8610](/standards/post-quantum/nist-ir-8610/) |
| NIST IR 8545 | Fourth-round report selecting HQC as an additional KEM. Final, 11 March 2025. | [NIST IR 8545](/standards/post-quantum/nist-ir-8545/) |

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/final)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated 3 July 2024. [NIST FIPS FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST CSRC publication pages for [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final), [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final), [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final), [SP 800-227](https://csrc.nist.gov/pubs/sp/800/227/final), [SP 800-230 (draft)](https://csrc.nist.gov/pubs/sp/800/230/ipd), [IR 8528](https://csrc.nist.gov/pubs/ir/8528/final), [IR 8545](https://csrc.nist.gov/pubs/ir/8545/final) and [IR 8610](https://csrc.nist.gov/pubs/ir/8610/final).

## Related pages

- [Standards](/standards/)
- [Transition and key management](/standards/transition-and-key-management/)
- [Choosing options](/technology-options/choosing/)
- [Standardisation](/learn/standardisation/)
