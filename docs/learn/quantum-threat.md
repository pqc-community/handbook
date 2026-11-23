---
title: The quantum threat
search_title: The quantum threat to public-key cryptography
sidebar_label: 3. Quantum threat
description: What a cryptographically relevant quantum computer would break, why symmetric cryptography is affected less, harvest-now, decrypt-later, and what is uncertain.
displayed_sidebar: learnSidebar
---

Quantum computers are not faster versions of today's computers. For most tasks they offer no advantage. For a few specific mathematical problems, though, known quantum algorithms are dramatically better than any known classical method, and two of those problems happen to underpin today's public-key cryptography. This lesson explains what is threatened, what is not, and why the risk to some data starts before such a machine exists.

## What would be broken

The threat comes from a machine large and reliable enough to run these attacks at useful scale. The UK NCSC's [Next steps in preparing for post-quantum cryptography](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (August 2024) calls this a cryptographically relevant quantum computer (CRQC); NIST uses the term *cryptanalytically* relevant. No such machine exists today: [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §3) says there are no existing cryptanalytically relevant quantum computers that currently threaten security levels.

**Shor's algorithm** solves integer factorisation and discrete logarithms efficiently. Those problems are the basis of RSA, Diffie–Hellman, and elliptic-curve cryptography. NIST IR 8547 §2.1 lists the signature algorithms in FIPS 186 (ECDSA, EdDSA, RSA) and the key-establishment schemes in SP 800-56A and SP 800-56B (finite-field and elliptic-curve Diffie–Hellman and MQV, and RSA) as vulnerable to Shor's algorithm on such a machine. Increasing key sizes does not fix this; the algorithms have to be replaced.

**Grover's algorithm** speeds up brute-force search, which in principle helps an attacker guess a symmetric key or find a hash preimage. The speed-up is far smaller and much harder to exploit in practice. NIST IR 8547 §4.1.3 states that NIST's symmetric standards are significantly less vulnerable to known quantum attacks, and that approved symmetric primitives giving at least 128 bits of classical security are believed to meet the lowest post-quantum security category. The NCSC whitepaper likewise says that existing symmetric algorithms with at least 128-bit keys, such as AES, can continue to be used.

| Cryptography | Quantum algorithm | Effect | What the transition does |
| --- | --- | --- | --- |
| RSA, Diffie–Hellman, ECC (public-key) | Shor | Broken outright by a CRQC | Replace with post-quantum algorithms |
| AES and other symmetric ciphers with keys of at least 128 bits | Grover | Reduced margin; not broken | No replacement needed under NIST and NCSC guidance |
| SHA-2 and SHA-3 hash functions | Generic quantum search | Significantly less vulnerable than public-key schemes | No replacement needed for approved variants, although NIST will disallow its few 112-bit-strength symmetric options in 2030 |

This is why the handbook does not cover a symmetric migration programme: NIST says it does not expect to need to move away from its symmetric standards as part of the post-quantum migration (IR 8547 §2.1.3).

## Harvest-now, decrypt-later

An attacker who records encrypted traffic or copies encrypted files today can store them and wait. If the public-key key establishment that protected those sessions is later broken, the attacker can recover the session keys and read the data. NIST IR 8547 §1 describes this as one of the main reasons the transition is urgent, because sensitive data often keeps its value for many years.

The risk applies to **confidentiality**, through key establishment and public-key encryption. It does not apply to signatures in the same way: a recorded signature does not reveal a secret later. Forging signatures becomes possible only once a CRQC exists, which is why signature urgency depends on coordination time and device lifetimes rather than on data already collected. The [previous lesson](/learn/signatures-and-trust/) covers that clock.

```mermaid
flowchart TD
    T1[Today: data encrypted with classical key establishment] --> R[Attacker records ciphertext]
    R --> W[Stored for years]
    W --> Q[CRQC becomes available]
    Q --> X[Session keys recovered and data read]
```

## What remains uncertain

Nobody can say when a CRQC will exist. The NCSC whitepaper says it is hard to predict because many engineering and physical challenges remain. The EU NIS Cooperation Group [roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) (version 1.1, 11 June 2025) reports that an updated study for Germany's BSI considered such a machine likely to be feasible within at most 16 years (by 2040 or earlier), and possibly within 10 if current heuristics are fully verified. Treat such estimates as planning inputs from named studies, not forecasts the handbook endorses.

Migration decisions do not depend on knowing the date precisely. They depend on how long your data must stay confidential, how long the migration will take, and how long your devices will be in service. [When to start](/learn/explainers/when-to-start/) shows how those three numbers combine.

## Check your understanding

- Why does doubling an RSA key size not solve the quantum threat, when larger symmetric keys are not even necessary?
- Which job is exposed to harvest-now, decrypt-later, and which is not?
- What three quantities matter more to your planning than a predicted CRQC date?

Continue with [What post-quantum means](/learn/what-post-quantum-means/). For the timing of harm to encrypted data and signatures, read [What a quantum computer changes](/learn/explainers/quantum-computers/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§1, §2.1, §3, §4.1.3). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025 (§5). [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)

## Related pages

- [Learn the basics](/learn/)
- [What a quantum computer changes](/learn/explainers/quantum-computers/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
