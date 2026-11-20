---
title: Reading "quantum-safe" claims
sidebar_label: Reading "quantum-safe" claims
description: How to break a supplier's "quantum-safe" or "PQC-ready" statement into checkable facts about job, algorithm, layer, scope, and date, with insufficient and decision-ready examples.
displayed_sidebar: learnSidebar
---

**Question this answers:** a supplier says their product is "quantum-safe". What should you record, and what should you ask? **Background:** [Standardisation](/learn/standardisation/), [Hybrid cryptography](/learn/hybrid/).

"Quantum-safe", "quantum-ready", "PQC-enabled", and "quantum-resistant" have no agreed definition. None of them tells you which cryptographic job changed, in which version, or whether it is switched on. Treat them as an invitation to ask questions, not as an answer.

## Five questions

| Question | Why it matters | A useful answer names |
| --- | --- | --- |
| **1. Which job?** | Key establishment, signatures, and long-lived verifiers migrate separately | "Key exchange for the TLS endpoint" or "firmware signature verification" |
| **2. Which algorithm and construction?** | "Post-quantum" could mean ML-KEM alone, a hybrid, or a proprietary scheme | A standard and parameter set, such as ML-KEM-768 in FIPS 203, or a named hybrid such as X25519MLKEM768 from RFC 10024 |
| **3. Which layer?** | A library feature, a protocol profile, a validated module, and a deployed setting are different things | Product version, whether it is default or configurable, validation certificate if claimed |
| **4. Where, exactly?** | Coverage is often partial | Which interfaces, hops, services, and client types |
| **5. When, and on whose authority?** | Release dates slip; deadlines belong to named authorities | A release date, and any authority the supplier is aligning with |

The questions follow the handbook's model: separate jobs, separate [layers](/learn/standardisation/), and dates that belong to [named authorities](/learn/timelines/). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §2.2) supports the layer question: libraries, hardware modules, protocols, and PKI each need their own updates before an application can use post-quantum algorithms.

## Insufficient and decision-ready

An insufficient record: *"Vendor confirms the platform is quantum-safe."*

A decision-ready record, from the fictional [Protect this first](/resources/protect-this-first/) example: *"The supplier's letter of 4 September 2026 states that Workspace 4.2, scheduled for 1 October 2026, uses ML-KEM-768 (FIPS 203) for the hosted archive's key-establishment service and does not include post-quantum signing changes. Staging pilot of Workspace 4.2 passed on 21 October 2026; production rollout pending. Signatures tracked separately: written signature-support plan due 1 December 2026."*

The second record names the job, the algorithm and its standard, the version, the evidence, and what is still open. It can be tested, compared with an authority's timeline, and revisited.

## Warning signs

- A claim covers "the product" without naming a job or interface.
- Only symmetric key sizes are mentioned ("we use AES-256, so we are quantum-safe"). NIST IR 8547 (§4.1.3) and the UK NCSC treat symmetric cryptography as largely unaffected; the public-key jobs are what need to change.
- Quantum key distribution is offered as the answer. The UK NCSC's [paper on quantum networking technologies](https://www.ncsc.gov.uk/whitepaper/quantum-security-technologies) (5 August 2025) states that post-quantum cryptography is the best mitigation and that it will not support QKD for government or military applications.
- An unpublished or proprietary algorithm is presented as equivalent to a NIST or IETF standard.
- "Compliant with" a standard that is still a draft, or with a date that is really another jurisdiction's deadline.

## Where this goes next

Record the answers in the [vendor response log](/resources/vendor-response-log/) and judge them with [Vendor plan](/migration-practices/vendor-plan/). For question lists published by authorities, see the [supplier question guides](/standards/migration-guides/vendor-questions/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.2, §4.1.3). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/rfc/rfc10024)
- UK National Cyber Security Centre, Quantum networking technologies, 5 August 2025. [NCSC paper](https://www.ncsc.gov.uk/whitepaper/quantum-security-technologies)

## Related pages

- [Vendor plan](/migration-practices/vendor-plan/)
- [Vendor response log](/resources/vendor-response-log/)
- [From research to deployment](/learn/explainers/research-to-deployment/)
