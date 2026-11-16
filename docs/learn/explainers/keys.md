---
title: What the keys actually do
sidebar_label: What the keys actually do
description: Which job the public key does, and which job the private key does.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Which job does the public key do, and which job does the private key do?

This page is for a reader who has read [Public-key cryptography](/learn/public-key-cryptography/) and wants one further distinction. That lesson says the two keys do different jobs. This page sets the jobs side by side.

**Handbook explanation:**

| Job | What the public key does | What the private key does |
| --- | --- | --- |
| Key establishment | Used to create a shared secret | Recovers that secret |
| Encryption | Encrypts | Decrypts |
| Signing | Checks the signature | Creates the signature |
| Verification | The check itself | Does not reverse the signature |

The encryption row is a handbook explanation of that classical job. This page does not claim that FIPS 203, FIPS 204, or FIPS 205 standardises public-key encryption.

An unnamed web session uses key establishment. An unnamed software update uses signing and verification. This page names no algorithm.

The figure shows that software update. The publisher signs it with the private key, and the device checks it with the public key.

```mermaid
sequenceDiagram
    participant Publisher
    participant Device
    Publisher->>Device: Software update and a signature created with the private key
    Device->>Device: Check the signature with the public key
    Note over Device: The check does not reverse the signature
```

The public key is used to create a shared secret, and the private key recovers it. The private key creates a signature, and the public key checks it. Checking a signature does not reverse it.

This distinction continues from [Public-key cryptography](/learn/public-key-cryptography/).

Next: [What a quantum computer changes](/learn/explainers/quantum-computers/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026, for the public-key jobs that report names. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- FIPS 203 for post-quantum key establishment. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- FIPS 204 for post-quantum signatures. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- FIPS 205 for post-quantum signatures. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
