---
title: Hash-based signatures
search_title: "Hash-based signatures: SLH-DSA, LMS and XMSS"
sidebar_label: Hash-based signatures
description: How stateless SLH-DSA differs from stateful LMS and XMSS, why reusing a one-time key is catastrophic, and why stateful schemes suit firmware, not general use.
displayed_sidebar: learnSidebar
---

**Question this answers:** why are there two kinds of hash-based signature, and why are some of them only for firmware? **Background:** [Post-quantum algorithms](/learn/algorithms/), [Signatures, certificates, and trust](/learn/signatures-and-trust/).

## Why hash-based

Hash-based signatures build a signature scheme from a hash function such as SHA-256 or SHAKE. Their appeal is that their security rests on hash functions, which, as [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §4.1.3) notes, are significantly less vulnerable to known quantum attacks than today's public-key algorithms. They are an alternative to the lattice-based ML-DSA that does not depend on lattice assumptions.

The cost is size. The UK NCSC's [Next steps](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) whitepaper (August 2024) notes that hash-based signatures are large and therefore not suitable for general-purpose use.

## Stateful and stateless

The building block is a **one-time signature**: a key pair that can safely sign one message only. Signing two different messages with the same one-time key leaks enough information for an attacker to forge signatures. Practical schemes bundle very many one-time keys under a single public key.

| | Stateful: LMS, HSS, XMSS, XMSS^MT | Stateless: SLH-DSA |
| --- | --- | --- |
| Standard | [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final), October 2020 | [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final), 13 August 2024 |
| How one-time keys are chosen | The signer tracks which ones have been used and must never reuse one | Chosen in a way that makes reuse risk negligible without tracking |
| Operational burden | High: state must be stored, protected, and never rolled back or cloned | Low: behaves like an ordinary signature key |
| Intended use (NIST IR 8547) | Not for general use; may suit software and firmware signing | General use where its size is acceptable |

NIST IR 8547 (§2.1.1) describes the stateful private key as a large set of one-time keys and states that security relies on the signer ensuring no one-time key ever signs more than one message. Because that requires strict operational controls to track signature indices across distributed systems, stateful schemes are not intended for general use. The NCSC whitepaper says LMS and XMSS should only be used where state can be managed in a trusted manner.

## What can go wrong with state

The state is a counter of used one-time keys. Ordinary operational events can corrupt it:

- restoring a signing server or HSM from a backup taken before the latest signatures;
- cloning a virtual machine or key so two signers share one key;
- running signing jobs in parallel without a single authority over the counter;
- a failure between producing a signature and saving the updated state.

Each can cause a one-time key to be reused. This is why the handbook treats "how is state controlled?" as a required question on [Firmware and secure boot](/technology-options/firmware-secure-boot/) and [Code and software signing](/technology-options/code-signing/) when a stateful scheme is chosen.

## Why firmware signing is the sweet spot

Firmware and boot code are signed rarely, by a small, tightly controlled team, often in an offline HSM — exactly the setting where state can be managed, and NIST IR 8547 (§2.1.1) names software and firmware signing as the uses where stateful schemes may be useful. The UK NCSC's [migration timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (20 March 2025) list LMS and XMSS for a more limited set of uses and note that some vendors have already developed secure boot solutions based on them.

NIST's draft [SP 800-230](https://csrc.nist.gov/pubs/sp/800/230/ipd) (13 April 2026) proposes additional SLH-DSA parameter sets for limited-signature uses, establishing a strict limit of 2^24 signatures per key; if finalised, it would offer another option for the same niche without stateful tracking.

## What to take away

- Stateless SLH-DSA is an ordinary, if large, signature scheme.
- Stateful LMS and XMSS demand rigorous state management; treat them as specialist tools for firmware and similar tightly controlled signing.
- If a supplier proposes a stateful scheme, ask how state is protected against backup restores, cloning, and parallel signing.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.1.1, §4.1.3). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Additional SLH-DSA Parameter Sets for Limited Signature Use Cases, SP 800-230 (initial public draft), 13 April 2026. [SP 800-230 draft](https://csrc.nist.gov/pubs/sp/800/230/ipd)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Post-quantum algorithms](/learn/algorithms/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [NIST SP 800-208](/standards/post-quantum/sp-800-208/)
