---
title: What a quantum computer changes
sidebar_label: What a quantum computer changes
description: Which quantum effect applies to confidentiality, and which does not.
displayed_sidebar: learnSidebar
---

The practical difference between a future quantum attack on encryption and one on signatures is when an attacker can cause harm. NIST IR 8547 (October 2026) separates these risks because they affect different cryptographic jobs.

| Case | What an attacker may do | When the harm can occur |
| --- | --- | --- |
| Public-key key establishment protects data that must remain confidential | Record encrypted data now and attempt to decrypt it later if a quantum computer can break the key-establishment scheme. | The confidentiality risk can begin when the data is collected, before a quantum computer exists. |
| A digital signature is checked by a system | If the signature scheme is broken, create a signature that may pass the verifier's checks, depending on that system's trust and acceptance rules. | The risk arises when a verifier accepts a forged signature; it does not retroactively reveal data encrypted in the past. |

Grover's algorithm affects symmetric cryptography differently and does not by itself put it on the same transition timetable. These are different risk timelines, even though both relate to future quantum capabilities.

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [The quantum threat](/learn/quantum-threat/)
- [What a KEM is](/learn/explainers/kem/)
