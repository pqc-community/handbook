---
title: Crypto-agility and the next transition
sidebar_label: 10. Crypto-agility
description: Why the post-quantum migration is unlikely to be the last algorithm change, what crypto-agility means in practice, and how to move from these lessons into planning.
displayed_sidebar: learnSidebar
---

It is tempting to treat the post-quantum migration as a one-off project: replace RSA and elliptic curves, then close the file. The sources this handbook relies on point the other way. More algorithms are still being standardised, hybrid deployments are expected to need a second step, and new weaknesses can always appear. This final lesson explains crypto-agility — the ability to change algorithms again without starting from scratch — and hands you on to planning.

## Why this will not be the last change

- **Hybrids imply a second transition.** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §3.2) says that, when used, hybrid solutions are typically temporary measures leading to a second transition to post-quantum-only cryptography.
- **The algorithm set is still growing.** NIST has selected HQC as an alternative to ML-KEM and is developing a FALCON-derived signature standard, and continues to evaluate further signature schemes (IR 8547 §2.1). Your systems may need to adopt them later.
- **New algorithms are less battle-tested.** NIST IR 8547 (§3.2) notes that early implementations may introduce implementation errors or side-channel weaknesses.
- **Cryptography keeps changing.** [The PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) points out that new algorithms or vulnerabilities may be discovered and advances in cryptanalysis may require larger keys.

NIST IR 8547 (§1.1) concludes that a smooth transition requires building long-term cryptographic agility into organisational infrastructure.

## What crypto-agility means

The EU NIS Cooperation Group [roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) (version 1.1, 11 June 2025) defines cryptographic agility as designing protocols and systems in a modular way so that cryptographic components can be replaced. The Dutch handbook frames it organisationally: the ability to modify or replace deployed cryptography quickly without significantly disrupting business processes, built into existing change management.

In practice, an agile estate tends to have:

| Capability | What it looks like |
| --- | --- |
| Knowing where cryptography is | A maintained inventory, not a one-off scan |
| Algorithms behind interfaces | Applications call a library or service by purpose, not by hard-coded algorithm |
| Negotiation and configuration | Protocols that can offer and select algorithms; policies changed by configuration |
| Updatable trust | Trust stores, certificates, and verifiers that can accept a new algorithm |
| Supplier commitments | Contracts and roadmaps that cover future algorithm changes, not just the current one |
| Practised change | A tested process to roll out, monitor, and roll back an algorithm change |

These are properties of an estate. [Keep the ability to change again](/migration-practices/changing-algorithms-again/) turns them into six capabilities you can evidence for each system, from a demonstrated configuration change to a written deprecation path. The fastest way to lose agility is a verifier that cannot be updated, which is why the [lifetime clock](/learn/timelines/) matters at procurement.

## From learning to planning

You now have the model the rest of the handbook uses:

- Public-key cryptography does **separate jobs**, and each job has its own **clock**.
- A post-quantum change passes through **layers** — standard, protocol, validated module, product release, deployment — and a claim at one layer says nothing about the next.
- **Dates belong to authorities and audiences**; your data lifetimes and device lifetimes decide which ones bind you, and when.
- The work is **repeatable**, so build the capability to do it again.

To act on it, choose the situation that fits your organisation on the [homepage](/) or start with [Not sure which route applies](/routes/not-sure/). The worked example in [Protect this first](/resources/protect-this-first/) applies these ideas to one fictional manufacturer. Keep the [glossary](/resources/glossary/) to hand.

## Check your understanding

- Why does choosing hybrid today create work later?
- Which of the properties in the table could your organisation evidence today?
- Which part of your estate would be hardest to change twice?

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§1.1, §2.1, §3.2). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025 (§3.2). [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Learn the basics](/learn/)
- [Keep the ability to change again](/migration-practices/changing-algorithms-again/)
- [Glossary](/resources/glossary/)
