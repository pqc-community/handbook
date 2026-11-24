---
title: "FIPS 202: SHA-3 Standard — Permutation-Based Hash and Extendable-Output Functions"
search_title: "FIPS 202: SHA-3 hash and SHAKE functions"
sidebar_label: FIPS 202 (SHA-3 / SHAKE)
displayed_sidebar: standardsSidebar
description: NIST standard specifying the SHA-3 hash functions and the SHAKE128 and SHAKE256 extendable-output functions used inside ML-KEM and ML-DSA.
---

## What it covers

FIPS 202 specifies the Keccak-based SHA-3 family: four hash functions (SHA3-224, SHA3-256, SHA3-384 and SHA3-512) and two extendable-output functions (XOFs), SHAKE128 and SHAKE256, whose output can be as long as an application needs. SHA-3 is an alternative to SHA-2 with a different internal design, and SHAKE is a building block inside several of the new post-quantum standards.

FIPS 202 is issued by NIST. NIST's [FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips) (content last updated July 3, 2024) describes FIPS as standards for federal computer systems that are not always mandatory for federal agencies (each FIPS's applicability section says when it is), notes that FIPS do not apply to national security systems, and says private-sector organizations use them voluntarily, although companies with government contracts must comply with FISMA, which mandates the use of FIPS.

:::info[Official texts]

- [FIPS 202 (PDF)](https://doi.org/10.6028/NIST.FIPS.202)
- [NIST CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/202/final)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2015-08-04">2015&#8209;08&#8209;04</time> | NIST published FIPS 202 as a final standard. |
| <time dateTime="2025-03-13">2025&#8209;03&#8209;13</time> | NIST posted a planning note saying it has decided to update FIPS 202. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says NIST does not expect to need to transition away from its symmetric standards, including hash functions and XOFs. Its Table 8 gives collision security categories of 2 for SHA3-256, 4 for SHA3-384 and 5 for SHA3-512, and 2 for SHAKE128 and 5 for SHAKE256 (assuming a large enough output size). SHA3-224 has 112-bit collision strength, below category 1 for collision resistance.

SHAKE128 and SHAKE256 are used inside ML-KEM ([FIPS 203](/standards/post-quantum/fips-203/)), ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)) and the SHAKE parameter sets of SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)), so a module implementing those standards will need FIPS 202 as well. The derived functions cSHAKE and KMAC are in [NIST SP 800-185](/standards/symmetric-and-hash/sp-800-185/).

## Sources

- NIST, SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions, FIPS 202, published August 4, 2015; planning note of March 13, 2025. [FIPS 202 (PDF)](https://doi.org/10.6028/NIST.FIPS.202), [CSRC publication page](https://csrc.nist.gov/pubs/fips/202/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated July 3, 2024. [NIST FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)

## Related pages

- [Symmetric, hash, and KDF primitives](/standards/symmetric-and-hash/)
- [FIPS 180-4](/standards/symmetric-and-hash/fips-180-4/)
- [NIST SP 800-185](/standards/symmetric-and-hash/sp-800-185/)
- [FIPS 203](/standards/post-quantum/fips-203/)
