---
title: A lower resource estimate for breaking RSA-2048
description: Craig Gidney's preprint estimates RSA-2048 could be factored in under a week with fewer than a million noisy qubits, a resource estimate rather than a date.
date: 2025-05-21
authors: [pqc_handbook]
tags: [analysis, key-establishment, signatures]
---

On 21 May 2025 Craig Gidney posted a preprint, [How to factor 2048 bit RSA integers with less than a million noisy qubits](https://arxiv.org/abs/2505.15917), estimating that a quantum computer with fewer than a million noisy qubits could factor a 2048-bit RSA integer in under a week. It is a resource estimate under stated physical assumptions, not a demonstration, and it does not change any authority's [migration timeline](/learn/timelines/).

{/* truncate */}

## What the preprint estimates

In 2019 Gidney and Ekerå estimated that a 2048-bit RSA integer could be factored in eight hours by a quantum computer with 20 million noisy qubits. The new paper cuts the qubit count to fewer than a million, at the cost of a longer run of less than a week. Gidney attributes the reduction mainly to approximate residue arithmetic, to storing idle logical qubits more compactly, and to spending less of the machine on producing the special states that the computation consumes.

The estimate keeps the 2019 assumptions: a square grid of qubits connected only to their nearest neighbours, a uniform gate error rate of 0.1%, a surface-code cycle time of one microsecond, and a control system that reacts in ten microseconds. No machine with those properties at that scale exists, and the paper is a preprint on arXiv, so its figures are the author's estimate rather than an established result.

## Why a lower estimate matters

A smaller estimate does not tell anyone when a cryptographically relevant quantum computer will exist. What it shows is that the target hardware builders need to reach has moved closer than the 2019 figure suggested, so earlier planning that relied on a very large qubit count has less margin than it assumed. RSA, Diffie–Hellman and elliptic-curve cryptography all fall to the same family of quantum algorithms, as [The quantum threat](/learn/quantum-threat/) explains, so the estimate is a signal for public-key cryptography in general rather than only for RSA keys of one size.

For key establishment, the pressure comes from harvest-now, decrypt-later. Traffic and files recorded today stay readable to whoever holds them once such a machine exists, so the question is whether your data must stay confidential for longer than the time left. [When to start](/learn/explainers/when-to-start/) turns that into a calculation, and a lower estimate argues for using the earlier end of any range you plug into it.

For signatures there is no recorded secret to harvest, but long-lived verifiers raise a different problem. A device that checks firmware or boot images against a fixed classical key cannot be fixed after it ships, so a verifier bought today may still be in service when that key can be forged. [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/) and the [firmware and secure boot card](/technology-options/firmware-secure-boot/) cover how to handle those devices through procurement rather than later replacement.

## What it means for your plan

The dates you plan against still come from the authorities that apply to you, not from a single paper. At the time of writing, the UK NCSC's timelines of 20 March 2025 set milestones for 2028, 2031 and 2035 for its stated audience, and NIST's initial public draft of IR 8547, of 12 November 2024, proposed deprecating quantum-vulnerable public-key algorithms at the 112-bit security strength after 2030 and disallowing all quantum-vulnerable public-key algorithms under NIST standards after 2035. [Why migration timelines differ](/learn/explainers/why-timelines-differ/) sets such dates side by side, and [Set dates and milestones](/plan/programme/dates/) shows how to record which apply to you.

Treat estimates like this one as inputs to your own judgement about exposure: record the estimate and its date alongside your reasoning, and revisit it at your next review, because estimates have fallen before and may fall again.

## Sources

- Craig Gidney, How to factor 2048 bit RSA integers with less than a million noisy qubits, arXiv:2505.15917, preprint version 1, 21 May 2025. [arXiv abstract page (HTML)](https://arxiv.org/abs/2505.15917)
- UK NCSC, Timelines for migration to post-quantum cryptography, 20 March 2025. [Guidance page (HTML)](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024. [NIST IR 8547 draft (HTML)](https://csrc.nist.gov/pubs/ir/8547/ipd)

## Related pages

- [What a quantum computer changes](/learn/explainers/quantum-computers/)
- [Decide what to migrate first](/plan/programme/priority/)
- [Which plan you need](/plan/)
