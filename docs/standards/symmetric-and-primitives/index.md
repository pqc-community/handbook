---
title: Symmetric, hash, and KDF primitives
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: NIST symmetric encryption, lightweight cryptography, hash, XOF, MAC, key-derivation, and random bit generator standards cited in IR 8547.
---

[NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547), October 2026, states that NIST's existing symmetric standards — block ciphers, authenticated encryption, hash functions, extendable-output functions, MACs, key-derivation functions, and deterministic random bit generators providing at least 128 bits of classical security — are significantly less vulnerable to known quantum attacks than public-key standards, and NIST does not expect to transition away from them as part of the post-quantum migration (aside from retiring legacy 112-bit variants and SHA-1).

### Encryption and lightweight cryptography

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 197 | Advanced Encryption Standard (AES-128, AES-192, and AES-256). | [FIPS 197](/standards/symmetric-and-primitives/fips-197/) |
| NIST SP 800-232 | Ascon-based lightweight authenticated encryption, hash, and XOF standards for constrained devices. | [NIST SP 800-232](/standards/symmetric-and-primitives/sp-800-232/) |

### Hash functions, XOFs, and MACs

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 180-4 | Secure Hash Standard specifying SHA-1 and the SHA-2 family. | [FIPS 180-4](/standards/symmetric-and-primitives/fips-180-4/) |
| FIPS 202 | SHA-3 permutation-based hash functions and SHAKE extendable-output functions. | [FIPS 202](/standards/symmetric-and-primitives/fips-202/) |
| NIST SP 800-185 | SHA-3 derived functions: cSHAKE, KMAC, TupleHash, and ParallelHash. | [NIST SP 800-185](/standards/symmetric-and-primitives/sp-800-185/) |
| FIPS 198-1 | Keyed-Hash Message Authentication Code (HMAC). | [FIPS 198-1](/standards/symmetric-and-primitives/fips-198-1/) |

### Key derivation and random bit generation

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST SP 800-56C | Key-derivation methods in key-establishment schemes, including hybrid composite inputs. | [NIST SP 800-56C](/standards/symmetric-and-primitives/sp-800-56c/) |
| NIST SP 800-108 | Key derivation using pseudorandom functions (counter, feedback, and double-pipeline modes). | [NIST SP 800-108](/standards/symmetric-and-primitives/sp-800-108/) |
| NIST SP 800-132 | Password-based key derivation (PBKDF) for storage applications. | [NIST SP 800-132](/standards/symmetric-and-primitives/sp-800-132/) |
| NIST SP 800-90A | Random number generation using deterministic random bit generators (DRBGs). | [NIST SP 800-90A](/standards/symmetric-and-primitives/sp-800-90a/) |

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/final)

## Related pages

- [Standards](/standards/)
- [Quantum threat](/learn/quantum-threat/)
- [Glossary](/resources/glossary/)
