---
title: "ANSSI: Views on the Post-Quantum Cryptography Transition (2023 follow-up)"
sidebar_label: ANSSI position (France)
displayed_sidebar: standardsSidebar
description: France's ANSSI 2023 follow-up position paper on post-quantum cryptography, stressing hybridisation and listing suitable post-quantum algorithms.
---

## What it covers

This position paper from France's national cybersecurity agency (ANSSI), dated 21 December 2023, updates ANSSI's 2022 position on the post-quantum transition and is to be read as an addendum to it. It sets out ANSSI's recommendations on post-quantum algorithms and on hybridisation, meaning the combination of a post-quantum algorithm with established classical public-key cryptography.

The paper is addressed to industry and to designers of security products: ANSSI encourages them to include the quantum threat in their risk analysis and to define a progressive transition strategy. It expresses ANSSI's recommendations and views rather than a binding requirement. ANSSI publishes further post-quantum material that could not be verified for this summary on 21 November 2026; check [ANSSI's post-quantum cryptography page](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/) for its current positions.

:::info[Official texts]

- **ANSSI 2023 follow-up position paper** — [ANSSI views on the Post-Quantum Cryptography transition, 2023 follow-up (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf).
- **Current ANSSI material** — [Cryptographie post-quantique](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/).

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2022">2022</time> | ANSSI published its earlier position paper on the post-quantum transition, which the 2023 paper updates. |
| <time dateTime="2023-12-21">2023&#8209;12&#8209;21</time> | ANSSI published its follow-up position paper, reaffirming hybridisation and listing post-quantum algorithms it considers appropriate. |
| <time dateTime="2030">2030</time> | ANSSI recommends hybrid post-quantum protection especially for products that protect information until after 2030 or may be used after 2030 without updates. |

## Relationship with other standards

ANSSI strongly stresses the need for hybridisation wherever post-quantum protection is needed, in both the short and medium term, and notes that hybridisation is necessary only where post-quantum protection is relevant. The paper describes this as aligned with the BSI's position in [TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/). It differs from the NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/), which does not require hybrids, and from [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/), which treats hybrids as typically temporary.

ANSSI does not give a closed list of recommended algorithms. The paper's non-exhaustive list names CRYSTALS-Kyber (ML-KEM, [FIPS 203](/standards/post-quantum/fips-203/)) and FrodoKEM for key encapsulation, and CRYSTALS-Dilithium (ML-DSA, [FIPS 204](/standards/post-quantum/fips-204/)), Falcon, SPHINCS+ (SLH-DSA, [FIPS 205](/standards/post-quantum/fips-205/)), and XMSS and LMS ([NIST SP 800-208](/standards/post-quantum/sp-800-208/)) for signatures, generally preferring the highest security levels. The paper predates the final NIST standards of August 2024, so it refers to the algorithms by their submission names and draft standards.

For signatures, hybridisation is optional for the stateful hash-based schemes XMSS and LMS, which ANSSI considers relevant where state can be carefully stored, typically for software updates, and may be optional for SLH-DSA. That distinction matters for long-lived verifiers such as firmware and update roots.

## Sources

- ANSSI, ANSSI views on the Post-Quantum Cryptography transition (2023 follow-up), 21 December 2023. [Follow-up position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- ANSSI, Cryptographie post-quantique (topic page; current material not reviewed for this summary). [ANSSI post-quantum page](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/)

## Related pages

- [National algorithm positions](/standards/national-algorithm-positions/)
- [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/)
- [Hybrid cryptography](/learn/hybrid/)
- [Choosing a post-quantum option](/technology-options/choosing/)
- [Hash-based signatures](/learn/explainers/hash-based-signatures/)
