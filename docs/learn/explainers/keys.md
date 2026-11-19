---
title: What the keys actually do
sidebar_label: What the keys actually do
description: Which job the public key does, and which job the private key does.
displayed_sidebar: learnSidebar
---

The names “public key” and “private key” stay the same across schemes, but the operation each key enables changes. This comparison shows what each pair does and what it produces.

| Scheme or job | Public-key role | Private-key role |
| --- | --- | --- |
| Diffie–Hellman key establishment | Shared with the other party | Combined with the other party's public value to derive a shared secret |
| KEM key establishment | Used by the sender to create a ciphertext and shared secret | Used by the recipient to derive the same shared secret from the ciphertext |
| Classical public-key encryption, where used | Encrypts data | Decrypts data |
| Digital signatures | Verifies the signature against the message | Creates the signature |

Diffie–Hellman uses both parties' key pairs to derive the same secret; it is not a one-way “public key creates, private key recovers” exchange. The KEM row shows the ML-KEM pattern. Neither method encrypts the page, file, or message an application sends: symmetric keys derived from the shared secret do that job. FIPS 203 standardises key establishment, while FIPS 204 and FIPS 205 standardise digital signatures.

A valid signature check connects a message to a particular public key. It does not, by itself, tell the device who controls that key. A certificate and the device's trust policy provide the key-to-identity association used when a device checks a software publisher.

In this update example, the publisher signs the firmware with its private key and the device checks the signature using a trusted public key. The check does not reverse the signature or recover a private key.

```mermaid
sequenceDiagram
    participant Publisher
    participant Device
    Publisher->>Device: Software update and a signature created with the private key
    Device->>Device: Check the signature with the public key
    Note over Device: The check does not reverse the signature
```

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026, for the distinction between key-establishment schemes and signature algorithms in the transition. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography, SP 800-56A Rev. 3, April 2018. [SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- IETF, PKCS #1: RSA Cryptography Specifications Version 2.2, RFC 8017, November 2016. [RFC 8017](https://www.rfc-editor.org/rfc/rfc8017)

## Related pages

- [Public-key cryptography](/learn/public-key-cryptography/)
- [What a quantum computer changes](/learn/explainers/quantum-computers/)
