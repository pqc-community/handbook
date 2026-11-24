---
title: Symmetric, hash, and KDF primitives
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: NIST symmetric, hash, MAC, key-derivation and random bit generator standards that NIST does not expect to replace for post-quantum migration.
---

This category explains what does not need replacing. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says in Section 2.1.3 that NIST does not expect to need to transition away from its symmetric standards — block-cipher encryption and authentication, keyed-hash data authentication, key derivation, key wrapping and random bit generation — as part of the post-quantum migration. The exceptions are classical clean-ups: NIST's 112-bit symmetric standards will be disallowed in 2030 (see [NIST SP 800-131A](/standards/transition-and-key-management/sp-800-131a/)), and SHA-1 will be disallowed in FIPS-validated modules after 2030. The FIPS here are standards for US federal computer systems whose applicability section says when they are mandatory; they do not apply to national security systems. The SPs are NIST guidance for federal agencies and are widely used as a reference by others. Several of these documents are being revised, and one is proposed for withdrawal; the tables flag each case.

## Which document do I need?

- Does AES need replacing, and what key size? → [FIPS 197](/standards/symmetric-and-hash/fips-197/)
- Which hash functions remain acceptable, and when must SHA-1 go? → [FIPS 180-4](/standards/symmetric-and-hash/fips-180-4/)
- How is a classical and a post-quantum shared secret combined in an approved way? → [NIST SP 800-56C](/standards/symmetric-and-hash/sp-800-56c/)
- What is happening to the HMAC standard? → [FIPS 198-1](/standards/symmetric-and-hash/fips-198-1/)
- Which random bit generators do the new algorithms rely on? → [NIST SP 800-90A](/standards/symmetric-and-hash/sp-800-90a/)

### Encryption and lightweight cryptography

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 197 | AES block cipher. Final, November 26, 2001; editorial update May 9, 2023. | [FIPS 197](/standards/symmetric-and-hash/fips-197/) |
| NIST SP 800-232 | Ascon lightweight authenticated encryption, hash and XOFs for constrained devices. Final, August 13, 2025. | [NIST SP 800-232](/standards/symmetric-and-hash/sp-800-232/) |

### Hash functions, XOFs, and MACs

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 180-4 | SHA-1 and SHA-2. Current edition final, August 4, 2015; NIST decided to revise it (March 7, 2023) and plans FIPS 180-5 without SHA-1. | [FIPS 180-4](/standards/symmetric-and-hash/fips-180-4/) |
| FIPS 202 | SHA-3 and the SHAKE XOFs. Final, August 4, 2015; NIST decided to update it (March 13, 2025). | [FIPS 202](/standards/symmetric-and-hash/fips-202/) |
| NIST SP 800-185 | cSHAKE, KMAC, TupleHash and ParallelHash. Final, December 22, 2016; Rev. 1 draft open for comment until December 7, 2026. | [NIST SP 800-185](/standards/symmetric-and-hash/sp-800-185/) |
| FIPS 198-1 | HMAC. Final, July 16, 2008; withdrawal proposed (June 2025), with content to move into SP 800-224. | [FIPS 198-1](/standards/symmetric-and-hash/fips-198-1/) |

### Key derivation and random bit generation

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST SP 800-56C | Key derivation for key establishment, including the generic composite (hybrid) technique. Rev. 2 final, August 18, 2020; NIST decided to revise it (January 6, 2026). | [NIST SP 800-56C](/standards/symmetric-and-hash/sp-800-56c/) |
| NIST SP 800-108 | Key derivation from existing keys using pseudorandom functions. Rev. 1 final, August 17, 2022, updated February 2, 2024; Rev. 2 pre-draft comments due December 18, 2026. | [NIST SP 800-108](/standards/symmetric-and-hash/sp-800-108/) |
| NIST SP 800-132 | Password-based key derivation (PBKDF2) for stored data. Final, December 22, 2010; revision planned (May 11, 2023). | [NIST SP 800-132](/standards/symmetric-and-hash/sp-800-132/) |
| NIST SP 800-90A | Deterministic random bit generators. Rev. 1 final, June 24, 2015; Rev. 2 pre-draft call (September 2025) proposed a SHAKE-based DRBG. | [NIST SP 800-90A](/standards/symmetric-and-hash/sp-800-90a/) |

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated July 3, 2024. [NIST FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST CSRC publication pages for each document, linked from the individual summaries.

## Related pages

- [Standards](/standards/)
- [Transition and key management](/standards/transition-and-key-management/)
- [Quantum threat](/learn/quantum-threat/)
- [Technology options](/technology-options/)
- [Glossary](/learn/glossary/)
