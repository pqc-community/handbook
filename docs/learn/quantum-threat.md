---
title: The quantum threat
sidebar_label: Quantum threat
description: What Shor's algorithm threatens, the more limited effect of Grover's algorithm, and harvest-now, decrypt-later.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

A cryptographically relevant quantum computer, if one is built, would change the maths problems that protect today's public-key cryptography. This lesson names the main quantum algorithms involved and one confidentiality risk that does not wait for that machine to exist.

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names Shor's algorithm as the quantum algorithm that threatens today's public-key key establishment and digital signatures. It names Grover's algorithm as the more limited threat, which does not by itself retire symmetric cryptography on the same timetable.

Harvest-now, decrypt-later means collecting ciphertext now and decrypting it later, when a breakthrough makes that possible. The risk applies to confidentiality: information that was meant to stay secret for years could be read later if the public-key cryptography that protected it is broken. Long-lived secrets therefore matter even before such a computer exists.

This page does not say that a cryptographically relevant quantum computer already exists.

Next: [What post-quantum means](/learn/what-post-quantum-means/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Learn the basics](/learn/)
