---
title: "FIPS 202: SHA-3 Standard — Permutation-Based Hash and Extendable-Output Functions"
sidebar_label: FIPS 202 (SHA-3 / SHAKE)
displayed_sidebar: standardsSidebar
description: NIST standard specifying SHA-3 hash functions and the SHAKE128 and SHAKE256 extendable-output functions.
---

## What it covers

FIPS 202 specifies the Keccak sponge-based SHA-3 family: four fixed-length hash functions (SHA3-224, SHA3-256, SHA3-384, and SHA3-512) and two extendable-output functions, SHAKE128 and SHAKE256, whose output bit strings can be extended to any length an algorithm requires.

:::info[Official texts]
- [FIPS 202: SHA-3 Standard — Permutation-Based Hash and Extendable-Output Functions (PDF)](https://doi.org/10.6028/NIST.FIPS.202)
- [NIST CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/202/final)
:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time datetime="2015">2015</time> | Publication or revision: Federal Information Processing Standards Publication 202 (2015). |

## Relationship with other standards

[NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547), October 2026, lists SHA3-256, SHA3-384, SHA3-512, SHAKE128, and SHAKE256 as continuing approved symmetric standards (noting SHA3-224 has 112-bit classical collision strength). SHAKE128 and SHAKE256 are also internal building blocks inside ML-KEM ([FIPS 203](/standards/post-quantum/fips-203/)), ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)), and the SHAKE parameter sets of SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)).

## Sources

- NIST, SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions, FIPS 202, 2015. [FIPS 202 (PDF)](https://doi.org/10.6028/NIST.FIPS.202)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Symmetric, hash, and KDF primitives](/standards/symmetric-and-primitives/)
- [NIST SP 800-185](/standards/symmetric-and-primitives/sp-800-185/)
- [FIPS 203](/standards/post-quantum/fips-203/)
- [Glossary](/resources/glossary/)
