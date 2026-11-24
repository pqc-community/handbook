---
title: What a quantum computer changes
search_title: What a quantum computer changes for cryptography
sidebar_label: What a quantum computer changes
description: Shor's and Grover's algorithms side by side, how NIST's security categories are anchored to AES and SHA, and when harm to data and signatures can occur.
displayed_sidebar: learnSidebar
---

**Question this answers:** what exactly does a quantum computer break, and when does that become harmful? **Background:** [The quantum threat](/learn/quantum-threat/).

## Two algorithms, two very different effects

| | Shor's algorithm | Grover's algorithm |
| --- | --- | --- |
| Problem it speeds up | Factorization and discrete logarithms | Unstructured search, such as guessing a key |
| Size of the speed-up | Turns an infeasible problem into a feasible one | Much smaller; NIST describes its symmetric standards as significantly less vulnerable |
| Affected cryptography | RSA, finite-field and elliptic-curve Diffie–Hellman, ECDSA, EdDSA | Symmetric ciphers and hash functions, in principle |
| Fix | Replace the algorithm | None needed for approved primitives of at least 128-bit strength, per NIST and the NCSC |

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §2.1) lists the NIST signature and key-establishment standards that are vulnerable to Shor's algorithm on a cryptanalytically relevant quantum computer. Section 4.1.3 states that NIST's symmetric standards are significantly less vulnerable to known quantum attacks. The UK NCSC's [Next steps](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) whitepaper (August 2024) says symmetric algorithms with at least 128-bit keys, such as AES, can continue to be used.

## How post-quantum strength is measured

Because the cost of future quantum attacks is hard to predict, NIST does not describe post-quantum strength in bits alone. NIST IR 8547 (§4.1, Table 1) uses five security categories, each anchored to the cost of attacking a familiar symmetric primitive:

| Category | Anchored to |
| --- | --- |
| 1 | Key search on a 128-bit block cipher (AES-128) |
| 2 | Collision search on a 256-bit hash (SHA-256) |
| 3 | Key search on a 192-bit block cipher (AES-192) |
| 4 | Collision search on a 384-bit hash (SHA3-384) |
| 5 | Key search on a 256-bit block cipher (AES-256) |

This framing is itself a statement of confidence in symmetric cryptography: the yardstick for post-quantum algorithms is "at least as hard to break as AES-128". It also explains parameter-set names: ML-KEM-768, which NIST recommends as the default, is a category 3 parameter set.

## When harm can occur

The practical difference between attacks on encryption and on signatures is *when* an attacker can cause damage.

| Case | What an attacker can do | When the harm occurs |
| --- | --- | --- |
| Key establishment protects confidential data in transit or at rest | Record ciphertext now; once a quantum computer can break the key establishment, recover keys and read the data | Exposure is locked in when data is recorded, even if decryption happens years later |
| A signature is checked by a verifier | Once the signature scheme can be broken, forge signatures that a verifier still accepts | Only from the point a quantum computer exists and only against verifiers still accepting the old algorithm |
| A device trusts a classical public key it cannot replace | Forge firmware or credentials the device accepts | From the point a quantum computer exists, for the rest of the device's service life |

NIST IR 8547 (§3.1.2) states that an authentication system remains secure as long as its algorithms and keys are secure *when the authentication is performed*, and that systems will need to transition immediately once capable quantum computers become available. That is why recorded signatures give an attacker nothing to exploit before a capable quantum computer exists, but leave no time to react if verifiers are not ready. Signed records that must still be trusted after that point, such as contracts or approvals kept for years, are the exception: they are checked at that later time, so they need a plan to stay verifiable; see [Documents and email signing](/technology-options/document-signing/).

## What remains uncertain

No one knows when a cryptographically relevant quantum computer will exist; NIST IR 8547 (§3) states that none exists today. Because migration takes years, the arrival date is only one input. The UK NCSC, for example, bases its 2035 target on how long it expects standards, products, and uptake to take. [The quantum threat](/learn/quantum-threat/#what-remains-uncertain) sets out what else decides when you act, and [When to start](/learn/explainers/when-to-start/) shows how your own numbers combine.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.1, §3, §3.1.2, §4.1). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [The quantum threat](/learn/quantum-threat/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
- [Forward secrecy and recorded traffic](/learn/explainers/forward-secrecy/)
