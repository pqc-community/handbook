---
title: "FIPS 197: Advanced Encryption Standard (AES)"
sidebar_label: FIPS 197 (AES)
displayed_sidebar: standardsSidebar
last_reviewed: 2026-11-10
description: NIST symmetric block-cipher standard specifying AES-128, AES-192, and AES-256.
---

| Field | Detail |
| --- | --- |
| Authority | National Institute of Standards and Technology (NIST) |
| Publication | Federal Information Processing Standards Publication 197 (2001; updated 2023) |
| Status | Final standard |
| Official source | [NIST publication page via DOI (HTML)](https://doi.org/10.6028/NIST.FIPS.197) |

## What it covers

FIPS 197 specifies the Advanced Encryption Standard (AES), a symmetric block cipher operating on 128-bit blocks with key lengths of 128, 192, and 256 bits. AES is used across modes of operation for bulk data encryption, authenticated encryption, message authentication, and symmetric key wrapping.

## Role in the post-quantum transition

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, places AES-128, AES-192, and AES-256 in NIST post-quantum security categories 1, 3, and 5 respectively, and states that NIST does not expect to transition away from AES as part of the post-quantum migration. In real protocols, post-quantum key establishment ([FIPS 203](/standards/post-quantum/fips-203/)) replaces how the session key is agreed, while AES continues to encrypt the bulk payload.

## Sources

- NIST, Advanced Encryption Standard (AES), FIPS 197. [FIPS 197](https://doi.org/10.6028/NIST.FIPS.197)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Symmetric, hash, and KDF primitives](/standards/symmetric-and-primitives/)
- [Quantum threat](/learn/quantum-threat/)
- [Glossary](/resources/glossary/)
