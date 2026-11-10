---
title: Public-key cryptography
sidebar_label: Public-key cryptography
description: Public and private keys, key establishment, encryption, and digital signatures, including where RSA and elliptic-curve cryptography are used.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Public-key cryptography gives each party a matched pair of keys. The public key can be shared openly. The private key stays secret. The two keys do different jobs. For key establishment, the public key is used to create a shared secret and the private key recovers it. For a signature, the private key creates the signature and the public key checks it. Checking a signature does not reverse it.

Key establishment lets two parties agree on a shared secret across an open network, even when they have never met before. That secret is often turned into symmetric keys that encrypt the actual messages. The public-key step is usually short; the symmetric step carries the bulk of the traffic.

Encryption in everyday systems works this way. Symmetric cryptography is fast for large amounts of data. Public-key cryptography starts the exchange or protects the channel that delivers the symmetric keys.

A digital signature shows that someone who holds the private key approved a message or file. Anyone with the signer's public key can verify the signature without learning the private key. Signatures support trust in software, documents, and network identities.

RSA and elliptic-curve cryptography are the familiar public-key families in use today. They carry key establishment in TLS on the web and in VPN sessions. They back signatures in mail when the message uses modern protections. They sign software updates so devices and operating systems can check that an update came from the expected publisher.

Next: [The quantum threat](/learn/quantum-threat/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Learn the basics](/learn/)
