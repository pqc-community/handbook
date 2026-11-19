---
title: Public-key cryptography
sidebar_label: Public-key cryptography
description: Public and private keys, key establishment, encryption, and digital signatures, including where RSA and elliptic-curve cryptography are used.
displayed_sidebar: learnSidebar
---

Public-key cryptography uses related public and private keys, but what each key does depends on the scheme. In key establishment, parties use public-key operations to agree a secret; symmetric cryptography then protects the bulk data. A key-encapsulation mechanism (KEM) is one way to establish that secret. Its steps are explained in [What a KEM is](/learn/explainers/kem/).

In some classical public-key encryption schemes, the public key encrypts data and the private key decrypts it. This is a different job from establishing a shared secret.

For a digital signature, the private key creates a signature and the public key checks it against the message. A valid check shows that the signature matches that message and public key. By itself, it does not establish the identity of the person or organisation that controls the key; that association depends on certificates and trust decisions.

RSA and elliptic-curve cryptography are familiar public-key families in current systems. A TLS or VPN session may use public-key cryptography for key establishment and authentication; software and firmware updates use signatures. In each case, the public-key operation has a distinct job from the symmetric cryptography that protects bulk data.

Continue with [The quantum threat](/learn/quantum-threat/).

For a comparison of what the key pairs permit—and how a signature becomes associated with a publisher—read [What the keys actually do](/learn/explainers/keys/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography, SP 800-56A Rev. 3, April 2018. [SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Digital Signature Standard, FIPS 186-5, February 2023. [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final)
- IETF, PKCS #1: RSA Cryptography Specifications Version 2.2, RFC 8017, November 2016. [RFC 8017](https://www.rfc-editor.org/rfc/rfc8017)

## Related pages

- [Learn the basics](/learn/)
