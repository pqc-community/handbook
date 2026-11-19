---
title: What the keys actually do
sidebar_label: What the keys actually do
description: Which job the public key does, and which job the private key does.
displayed_sidebar: learnSidebar
---

Which job does the public key do, and which job does the private key do?

[Public-key cryptography](/learn/public-key-cryptography/) explains that the public and private keys perform distinct jobs. The table below sets those jobs side by side:

| Job | What the public key does | What the private key does |
| --- | --- | --- |
| Key establishment | Used to create a shared secret | Recovers that secret |
| Encryption | Encrypts | Decrypts |
| Signing | Checks the signature | Creates the signature |
| Verification | The check itself | Does not reverse the signature |

The encryption row describes that classical job. FIPS 203, FIPS 204, and FIPS 205 do not standardise public-key encryption.

A web session uses key establishment, and a software update uses signing and verification. The jobs above do not depend on a named algorithm.

The figure follows that software update. The publisher signs it with the private key, and the device checks it with the public key.

```mermaid
sequenceDiagram
    participant Publisher
    participant Device
    Publisher->>Device: Software update and a signature created with the private key
    Device->>Device: Check the signature with the public key
    Note over Device: The check does not reverse the signature
```

In key establishment the public key creates a shared secret and the private key recovers it. In signing, the private key creates the signature and the public key checks it, and that check does not reverse the signature.

That is the same distinction as [Public-key cryptography](/learn/public-key-cryptography/). From here, read [What a quantum computer changes](/learn/explainers/quantum-computers/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026, for the public-key jobs that report names. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- FIPS 203 for post-quantum key establishment. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- FIPS 204 for post-quantum signatures. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- FIPS 205 for post-quantum signatures. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
