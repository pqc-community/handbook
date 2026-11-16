---
title: What a KEM is
sidebar_label: What a KEM is
description: What a key-encapsulation mechanism produces, and why that is not bulk encryption.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

What does a key-encapsulation mechanism produce, and why is that not bulk encryption?

This page is for a reader who has read [Algorithms](/learn/algorithms/) and wants one further distinction. That lesson describes encapsulation and decapsulation. This page shows that the result is a shared secret, not the page or the file.

One party encapsulates with the other's public key and produces a ciphertext and a shared secret. The other decapsulates with the private key and recovers the same secret. A protocol such as TLS then derives symmetric keys from that secret, and those keys protect the bulk of the traffic. The KEM does not carry the page, the file, or the health record. The health record here is an unnamed example of bulk data.

The figure shows encapsulation and decapsulation between two parties.

```mermaid
sequenceDiagram
    participant Sender
    participant Recipient
    Sender->>Sender: Encapsulate with the recipient's public key
    Note over Sender: Ciphertext and shared secret
    Sender->>Recipient: Ciphertext
    Recipient->>Recipient: Decapsulate with the private key
    Note over Recipient: The same shared secret
```

The KEM does not carry the page, the file, or the health record.

Encapsulation produces a ciphertext and a shared secret. Decapsulation recovers that secret. The KEM does not carry the page, the file, or the health record.

This distinction continues from [Algorithms](/learn/algorithms/).

Next: [What changes in a TLS connection](/learn/explainers/tls/).

## Sources

- NIST, FIPS 203, Module-Lattice-Based Key-Encapsulation Mechanism, for ML-KEM. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026, for that pattern of use. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
