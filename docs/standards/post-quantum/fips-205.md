---
title: "FIPS 205: Stateless Hash-Based Digital Signature Standard"
sidebar_label: FIPS 205 (SLH-DSA)
displayed_sidebar: standardsSidebar
description: NIST standard specifying SLH-DSA, a stateless post-quantum signature algorithm built from hash functions.
---

## What it covers

FIPS 205 specifies the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), derived from the SPHINCS+ submission. It defines parameter sets instantiated with either SHA-2 ([FIPS 180-4](/standards/symmetric-and-primitives/fips-180-4/)) or SHAKE ([FIPS 202](/standards/symmetric-and-primitives/fips-202/)), without requiring the signer to track per-signature key state across operations.

:::info[Official texts]

- [FIPS 205: Stateless Hash-Based Digital Signature Standard](https://doi.org/10.6028/NIST.FIPS.205)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time datetime="2024">2024</time> | Publication or revision: Federal Information Processing Standards Publication 205 (2024). |

## Relationship with other standards

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names FIPS 205 as one of the three core post-quantum standards. Because its security rests on hash-function properties rather than structured lattices, it offers an approved signature option distinct from ML-DSA in [FIPS 204](/standards/post-quantum/fips-204/), and avoids the state-management burden of [NIST SP 800-208](/standards/post-quantum/sp-800-208/).

## Sources

- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 2024. [FIPS 205](https://doi.org/10.6028/NIST.FIPS.205)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [FIPS 204](/standards/post-quantum/fips-204/)
- [NIST SP 800-208](/standards/post-quantum/sp-800-208/)
- [Signatures](/technology-options/signatures/)
