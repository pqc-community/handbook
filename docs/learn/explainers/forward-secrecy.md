---
title: Forward secrecy and recorded traffic
sidebar_label: Forward secrecy and recorded traffic
description: Why forward secrecy protects past sessions against a stolen server key but not against a quantum computer, and what that means for harvest-now, decrypt-later.
displayed_sidebar: learnSidebar
---

**Question this answers:** "We use forward secrecy, so recorded traffic is safe — isn't it?" **Background:** [The quantum threat](/learn/quantum-threat/), [What a KEM is](/learn/explainers/kem/).

## What forward secrecy does

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §3.1.3) explains that modern network security protocols use separate asymmetric keys for key establishment and authentication. The long-term key authenticates the server; the key-establishment keys are used briefly, usually for a single exchange, and then discarded. That gives **forward secrecy**: if the long-term key is stolen later, sessions that happened before the theft stay protected, because their session keys never depended on it.

Forward secrecy is a real and valuable defense against a common attack: an adversary who records traffic and later steals or compels disclosure of a server's private key.

## Why it does not stop harvest-now, decrypt-later

Forward secrecy relies on the attacker being unable to solve the recorded key exchange itself. With a classical exchange such as elliptic-curve Diffie–Hellman, the public values from both sides travel in the handshake and are captured in the recording. A cryptanalytically relevant quantum computer running Shor's algorithm could compute the shared secret directly from those captured values — no long-term key needed. Discarding the ephemeral private keys does not help, because the attacker never needed them.

NIST IR 8547 (§3.1.3) draws the same conclusion in planning terms: because the symmetric keys produced by key establishment protect confidentiality, harvest-now, decrypt-later has to be considered when setting the migration timeline for the key-establishment scheme — separately from the authentication algorithm.

| Threat | Classical key exchange with forward secrecy | Post-quantum or hybrid key exchange with forward secrecy |
| --- | --- | --- |
| Server's long-term key stolen later | Past sessions protected | Past sessions protected |
| Recorded handshake attacked with a future quantum computer | Past sessions exposed | Past sessions protected, assuming the post-quantum component holds |

## What to take away

- Keep forward secrecy; it remains good practice.
- Do not treat it as a mitigation for harvest-now, decrypt-later. Only changing the key-establishment algorithm does that.
- When assessing exposure, ask which key-establishment algorithm protected recorded sessions, not whether the keys were ephemeral.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§3.1.3). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [The quantum threat](/learn/quantum-threat/)
- [What changes in a TLS connection](/learn/explainers/tls/)
- [TLS and web services](/technology-options/tls/)
