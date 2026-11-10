---
title: What post-quantum means
sidebar_label: What post-quantum means
description: Post-quantum cryptography, and the difference from quantum cryptography and quantum key distribution.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Post-quantum cryptography is public-key cryptography intended to stay secure against a cryptographically relevant quantum computer. The algorithms run on ordinary computers. Parties still use public keys, private keys, key establishment, and signatures, but the hard mathematical problems are chosen so that known quantum attacks against today's RSA and elliptic-curve schemes do not apply on the same terms.

Quantum cryptography is a different idea. It builds security claims on quantum physical effects rather than on computational hardness in software running on conventional hardware. Quantum key distribution is one form of quantum cryptography. It tries to deliver keys through specialised quantum channels rather than through public-key cryptography on ordinary networks.

**Authority recommendation:** The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) advises against relying on the security of quantum key distribution for the time being.

This page does not say that a cryptographically relevant quantum computer already exists.

Next: [Algorithms](/learn/algorithms/).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Learn the basics](/learn/)
- [The quantum threat](/learn/quantum-threat/)
