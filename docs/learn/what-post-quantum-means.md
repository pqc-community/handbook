---
title: What post-quantum means
search_title: What post-quantum cryptography means
sidebar_label: 4. What post-quantum means
description: Post-quantum cryptography runs on ordinary computers and replaces the problems a quantum computer breaks; it is not quantum key distribution.
displayed_sidebar: learnSidebar
---

"Post-quantum" describes the threat the cryptography is designed to survive, not the technology it runs on. Post-quantum algorithms are ordinary software and hardware cryptography: they run on today's servers, phones, and chips, over today's networks. This lesson pins down the term, separates it from quantum cryptography, and explains what a claim of quantum resistance does and does not promise.

## The definition

The IETF's terminology for the transition, [RFC 9794](https://www.rfc-editor.org/rfc/rfc9794) (June 2025), defines a post-quantum asymmetric algorithm as one intended to be secure against attacks using quantum computers as well as classical computers. It calls RSA, Diffie–Hellman, and elliptic-curve algorithms *traditional*: algorithms based on factorization, discrete logarithms, or related problems.

Post-quantum cryptography keeps the same jobs and the same shape as the public-key cryptography it replaces. There are still key pairs, public keys still go in certificates, and the two jobs — key establishment and signatures — stay separate. What changes is the underlying hard problem. Instead of factorization or discrete logarithms, the new algorithms rely on problems for which no efficient quantum attack is known:

- **Lattice problems.** FIPS 203 states that ML-KEM's security relates to the difficulty of the Module Learning with Errors problem; ML-DSA in FIPS 204 is also module-lattice-based.
- **Hash functions.** SLH-DSA in FIPS 205 and the stateful schemes in SP 800-208 build signatures from hash functions, the same kind of symmetric primitive that Grover's algorithm affects only modestly. The NCSC's [Next steps](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) whitepaper (August 2024) notes the trade-off: their signatures are large, so they are not suitable for general-purpose use.

NIST IR 8547 (§3.2) notes that some hybrid designs deliberately combine post-quantum algorithms that rely on different mathematical assumptions, so that one unexpected weakness does not break the whole.

## What "quantum-resistant" does and does not promise

A post-quantum algorithm is designed to resist the attacks known today, from both classical and quantum computers. That is a strong, evidence-based belief built on years of public analysis — not a proof, and not a guarantee against every future attack or every implementation mistake. NIST IR 8547 (§3.2) warns that early implementations of new algorithms may introduce risks of their own, such as implementation errors or side-channel weaknesses. That is one reason this handbook asks for evidence of *which* algorithm, in *which* product version, deployed *where* — rather than accepting "quantum-safe" as a property. See [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/).

## Quantum cryptography is something else

**Quantum cryptography** uses quantum physics itself as a security mechanism. Its best-known form, **quantum key distribution (QKD)**, sends key material over specialized optical links so that eavesdropping disturbs the signal. It needs dedicated hardware and point-to-point links, and it does not replace the public-key jobs on ordinary networks.

Authorities are skeptical of relying on it:

- The UK NCSC's paper on [quantum networking technologies](https://www.ncsc.gov.uk/paper/quantum-networking-technologies) (August 5, 2025) states that it will not support the use of QKD for government or military applications and that post-quantum cryptography is the best mitigation to the quantum threat. It notes that QKD does not provide authentication and should not be solely relied on for generating and distributing keys in other sectors.
- [The PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) describes QKD as a partial solution and reports that many security agencies currently recommend only post-quantum cryptography.

This handbook therefore covers post-quantum cryptography and sets QKD aside, as those authorities do.

| | Post-quantum cryptography | Quantum key distribution |
| --- | --- | --- |
| Runs on | Existing computers and networks | Specialized quantum optical equipment and links |
| Jobs covered | Key establishment and signatures | Key distribution only; no authentication |
| Security basis | Mathematical problems believed hard for quantum and classical computers | Physical properties of the quantum channel, plus implementation |
| Position of NCSC (UK) | Recommended mitigation | Not supported for government or military use |

## Check your understanding

- What stays the same, and what changes, when a system moves from ECDSA to ML-DSA?
- Why is "quantum-resistant" a belief about known attacks rather than a guarantee?
- Why does quantum key distribution not remove the need to migrate signatures?

Continue with [Post-quantum algorithms](/learn/algorithms/).

## Sources

- IETF, Terminology for Post-Quantum Traditional Hybrid Schemes, RFC 9794, June 2025. [RFC 9794](https://www.rfc-editor.org/rfc/rfc9794)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 13, 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, August 13, 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, August 13, 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§3.2). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- UK National Cyber Security Centre, Quantum networking technologies, August 5, 2025. [NCSC paper](https://www.ncsc.gov.uk/paper/quantum-networking-technologies)
- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Learn the basics](/learn/)
- [The quantum threat](/learn/quantum-threat/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
