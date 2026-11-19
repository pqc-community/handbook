---
title: Public-key cryptography
sidebar_label: Public-key cryptography
description: Public and private keys, key establishment, encryption, and digital signatures, including where RSA and elliptic-curve cryptography are used.
displayed_sidebar: learnSidebar
---

Public-key cryptography uses a public key that can be shared and a corresponding private key that is kept secret. The job of each key depends on the scheme. In Diffie–Hellman key establishment, both parties exchange public values and combine the other party's public value with their own private value to derive the same secret. With a key-encapsulation mechanism (KEM), one party uses the recipient's public key to create a ciphertext and shared secret; the recipient uses the matching private key to derive that same secret from the ciphertext.

In some classical public-key encryption schemes, the public key encrypts data and the private key decrypts it. This is a different job from establishing a shared secret. In modern secure communications, key establishment usually creates a secret from which symmetric keys are derived; symmetric cryptography protects the bulk of the data.

For a digital signature, the private key creates a signature and the public key verifies it against the message. Verification does not reverse the signature or reveal the private key. Signatures help detect changes and verify that a message was signed by the holder of the corresponding private key; they do not, by themselves, establish who controls that key.

RSA and elliptic-curve cryptography are familiar public-key families in current systems. A TLS or VPN session may use public-key cryptography for key establishment or authentication; software and firmware updates use signatures. In each case, the public-key operation has a distinct job from the symmetric cryptography that protects bulk data.

Continue with [The quantum threat](/learn/quantum-threat/).

For how the two keys differ by job, read [What the keys actually do](/learn/explainers/keys/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography, SP 800-56A Rev. 3, April 2018. [SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Digital Signature Standard, FIPS 186-5, February 2023. [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final)
- IETF, PKCS #1: RSA Cryptography Specifications Version 2.2, RFC 8017, November 2016. [RFC 8017](https://www.rfc-editor.org/rfc/rfc8017)

## Related pages

- [Learn the basics](/learn/)
