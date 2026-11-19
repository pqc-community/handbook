---
title: The quantum threat
sidebar_label: Quantum threat
description: What Shor's algorithm threatens, the more limited effect of Grover's algorithm, and harvest-now, decrypt-later.
displayed_sidebar: learnSidebar
---

A cryptographically relevant quantum computer, if one is built, would threaten the mathematical problems behind today's public-key cryptography. Two quantum algorithms matter, but the confidentiality risk from collected data can begin before such a machine exists.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), published in October 2026, identifies Shor's algorithm as a threat to today's public-key key-establishment schemes and digital signatures. Grover's algorithm has a more limited effect on symmetric cryptography and does not place it on the same transition timetable.

Harvest-now, decrypt-later means collecting encrypted data now and attempting to decrypt it later, if a future breakthrough makes that possible. This is a confidentiality risk: information that must remain secret for years could be exposed if the key-establishment scheme protecting it is broken. The duration that data needs protection for therefore matters before such a computer exists.

Continue with [What post-quantum means](/learn/what-post-quantum-means/).

For how the effects differ over time for encrypted data and signatures, read [What a quantum computer changes](/learn/explainers/quantum-computers/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Learn the basics](/learn/)
