---
title: What the keys actually do
sidebar_label: What the keys actually do
description: Which job the public key does and which job the private key does in Diffie–Hellman, KEMs, RSA key transport, and digital signatures, and why a valid signature does not identify its signer.
displayed_sidebar: learnSidebar
---

**Question this answers:** if every scheme has a "public key" and a "private key", why do they behave so differently? **Background:** [Public-key cryptography](/learn/public-key-cryptography/).

The names stay the same across schemes, but the operation each key enables changes. Getting this right matters in a migration, because the replacement for each scheme does a different job and is recorded on a different line of the inventory.

## Key roles by scheme

| Scheme or job | Public-key role | Private-key role | Post-quantum replacement |
| --- | --- | --- | --- |
| Diffie–Hellman key agreement (finite-field or elliptic-curve) | Sent to the other party | Combined with the other party's public value to derive the same shared secret | ML-KEM, or a hybrid of the two |
| KEM key establishment (ML-KEM) | Used by the sender to produce a ciphertext and a shared secret | Used by the recipient to recover the same shared secret from the ciphertext | — (already post-quantum) |
| RSA key transport | Encrypts a secret chosen by the sender | Decrypts that secret | ML-KEM |
| Digital signature (RSA, ECDSA, EdDSA) | Checks the signature against the data | Creates the signature | ML-DSA, SLH-DSA, or, for limited uses, LMS or XMSS |

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §2.1.2) distinguishes the two classical forms of key establishment: key agreement, where both parties contribute (Diffie–Hellman), and key transport, where one party chooses the secret and sends it encrypted (RSA, in SP 800-56B). A KEM sits between them: as in key transport, only the recipient needs a key pair, but the shared secret is produced by the encapsulation step rather than chosen and encrypted by the sender. In TLS that key pair is usually generated fresh for each connection.

None of these schemes encrypts the web page, file, or message itself. Symmetric keys derived from the shared secret do that job.

## Signatures are not "encryption in reverse"

A common shorthand says a signature is "encrypting with the private key". It is misleading for every modern scheme and simply wrong for ML-DSA and SLH-DSA. The private key runs a signing algorithm; the public key runs a separate verification algorithm that returns accept or reject. Verification does not decrypt anything, recover the data, or reveal the private key.

```mermaid
sequenceDiagram
    participant Publisher
    participant Device
    Publisher->>Publisher: Sign the update with the private key
    Publisher->>Device: Update and signature
    Device->>Device: Verify with the trusted public key
    Note over Device: Result is accept or reject; nothing is decrypted
```

## A valid signature does not tell you who signed

Verification connects data to a public key. It does not say who controls that key. The association comes from a certificate issued by a trusted authority, or from a public key the device was built to trust. That is why changing a signature algorithm means changing certificates, trust anchors, and verifiers as well as the signer — covered in [Signatures, certificates, and trust](/learn/signatures-and-trust/).

## What to take away

- Each classical scheme has a different post-quantum replacement; record them separately.
- A KEM is closer to key transport than to Diffie–Hellman in shape, which is why protocols must change, not just swap identifiers.
- A signature check proves "matches this key", not "came from this organisation".

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.1). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography, SP 800-56A Rev. 3, April 2018. [SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- IETF, PKCS #1: RSA Cryptography Specifications Version 2.2, RFC 8017, November 2016. [RFC 8017](https://www.rfc-editor.org/rfc/rfc8017)

## Related pages

- [Public-key cryptography](/learn/public-key-cryptography/)
- [What a KEM is](/learn/explainers/kem/)
- [Why signatures affect more than the signer](/learn/explainers/signature-dependencies/)
