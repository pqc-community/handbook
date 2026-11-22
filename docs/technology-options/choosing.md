---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
displayed_sidebar: technologyOptionsSidebar
description: Decide who chooses the option, find what every applicable authority accepts, apply the hybrid rule, and record the option and the authority that justifies it on the change record before implementation.
---

## When this applies

A system has a line on the [migration plan](/resources/records/migration-plan/), and you need to name the post-quantum option it will use and the authority that justifies it. These rules apply to every technology; each [technology card](/technology-options/) applies them. In the [migration practices](/migration-practices/), this step sits between working with suppliers and making the change.

## Who does what

- The **asset owner** proposes the option and records it on the change record.
- The **supplier**, where it controls the software, names the algorithm or scheme and the release that delivers it.
- **Legal or risk** confirms which authorities' positions apply to the system, its sector, and its customers.
- The **migration lead** checks the option against the system's line on the migration plan.
- A **specialist adviser** reviews the choice for bespoke protocols, embedded devices, or regulated systems.

## Do this

1. **Read the facts you already hold.** The inventory row gives who controls the software and the data confidentiality period; the plan line gives the job, including `non-updatable verifier`, and the applicable timeline. Resolve any `unknown` that changes the steps below.
2. **Decide who chooses.**
   - **The supplier controls the software:** its named algorithm or scheme is the proposed option once the [vendor response log](/resources/records/vendor-response-log/) judges the answer `complete`; follow up a `vague` or `missing` answer under [Work with suppliers](/migration-practices/suppliers/). If the option conflicts with an applicable authority, judge the answer `concerning` and escalate it there.
   - **You configure or build it:** you choose, using steps 3 to 5.
3. **List the authorities that apply.** Legal or risk confirms them. For each one, take the algorithms, parameter sets, and hybrid position from the comparison on [National algorithm positions](/standards/national-algorithm-positions/), which states each authority's audience, and the [Hybrid cryptography](/learn/hybrid/) lesson, which adds the UK NCSC. They differ: for US national security systems, [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) requires ML-KEM-1024 and ML-DSA-87; [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) names ML-KEM ([FIPS 203](/standards/post-quantum/fips-203/)) as, at this time, NIST's only approved post-quantum key-establishment scheme; and [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) also recommends FrodoKEM and Classic McEliece.
4. **Choose an algorithm and parameter set every applicable authority accepts**, and settle the form with [the hybrid rule](#the-hybrid-rule) below.
5. **Apply the technology card**, with the [protocol-mechanisms](#protocol-mechanisms) and [signature-schemes](#signature-schemes) rules below. For a verifier that cannot be updated, the option has to be one the device's verifier supports; see [Firmware and secure boot](/technology-options/firmware-secure-boot/).
6. **Check that the option fits**: protocols, certificates, storage, and hardware can carry the larger keys and signatures. Name the tests on the change record; [Make and verify one change](/migration-practices/implementation/) runs them.
7. **Record the option and the authority that justifies it.** The `authority` cell names every position the option relies on, for both the algorithm and the form: the authority, the document, its date, and the audience it addresses. Where the supplier chose, name the positions you checked its choice against. If no supported option exists yet, write `unknown` in `option` and "blocked" in `result`, with the date by which it has to be resolved, such as a design freeze.

## The hybrid rule

Place each applicable authority in its row; the highest row any of them reaches decides the form. This is the handbook's rule of thumb: it keeps you inside every applicable position and, where they differ, sides with the one that asks for hybrid. Each example applies only to the audience named.

| If an applicable authority | For example | Use | Record in `authority` |
| --- | --- | --- | --- |
| Recommends or expects hybrid and does not also accept post-quantum alone | BSI TR-02102-1, recommendations mainly for developers, for key encapsulation and for signatures other than hash-based; [ANSSI's 2023 position](/standards/national-algorithm-positions/anssi-pqc-position/), for industry and security product designers, which expects hybridation in the products it evaluates except those relying only on XMSS, LMS, or SLH-DSA (check ANSSI's current material); the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (11 June 2025), for Member States, which recommends standardised, tested hybrid solutions whenever feasible and suitable and does not itself specify algorithms | A hybrid the other applicable authorities also accept | That authority's position |
| Recommends hybrid but also accepts post-quantum alone | The UK NCSC's [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (version 1.2, 15 October 2026), for system administrators who configure TLS: hybrid as an interim measure, ML-KEM alone acceptable | Either form: the one your products and the parties you connect to support | The positions, then why, for example "hybrid because the supplier ships it" |
| Neither requires nor recommends hybrid | NIST IR 8547, for US federal agencies, technology providers, standards organisations, and validation laboratories, which describes hybrids as typically temporary and accommodates hybrid key establishment and dual signatures in validation; CNSA 2.0, for US national security systems, which does not require hybrid and, where NSA has given public guidance on hybrid use for a protocol, counts as compliant only the hybrid it identified; the Australian Signals Directorate's [planning guidance](/standards/migration-guides/asd-planning/), for Australian organisations, which "does not recommend, but does not prohibit" hybrids | Either form, within the algorithms each names; under CNSA 2.0, a hybrid only where NSA has identified one | The positions, then why |

If no authority applies, either form is acceptable; record that legal or risk confirmed none applies, and why you chose the form.

If no option satisfies every applicable authority, for example because their accepted algorithms or forms do not overlap, take the conflict to legal or risk and the sponsor, who decide which position governs. Record the decision and its reason in the `authority` cell and as an item on the [review log](/resources/records/review-log/). A row-one authority and a row-three authority do not conflict where the row-three authority permits the hybrid, as ASD does.

If you choose hybrid, record the path away from it under [Keep the ability to change again](/migration-practices/changing-algorithms-again/). For signatures, the same table applies, with the hash-based exceptions under [Signature schemes](#signature-schemes).

## Protocol mechanisms

- Use a mechanism the protocol's own specification defines, in the form the hybrid rule settled; do not build your own combination.
- Prefer a published RFC. The UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, strongly advises that operational systems use protocol implementations based on RFCs, not Internet-Drafts.
- Where an authority's general advice and its later protocol-specific guidance differ, follow the later, specific guidance for that protocol; this is the handbook's rule of thumb.
- Use a draft mechanism only when the product you run ships it and no applicable authority advises against it for that protocol. Then write "provisional: Internet-Draft" in the change record's `option` cell and add an item to the [review log](/resources/records/review-log/) to revisit it when the specification is published.

Each technology card gives the current status of its mechanisms.

## Signature schemes

Choose from the schemes every applicable authority accepts. This is the handbook's rule of thumb, following the NIST and UK NCSC positions where no applicable authority says otherwise:

| Use | Scheme | Why |
| --- | --- | --- |
| Certificates, documents, and other general signing | [ML-DSA](/resources/reference/glossary/#ml-dsa-module-lattice-based-digital-signature-algorithm) ([FIPS 204](/standards/post-quantum/fips-204/)) | The NCSC whitepaper says hash-based signatures are not suitable for general-purpose use, because their signatures are large and the algorithms much slower |
| Code, software, and firmware signing | A hash-based scheme where an applicable authority requires one or every verifier supports only that; otherwise ML-DSA | NIST IR 8547 says stateful schemes are not intended for general use but may suit software and firmware signing; the NCSC whitepaper lists SLH-DSA, LMS, and XMSS for such uses |
| Choosing among hash-based schemes | [SLH-DSA](/resources/reference/glossary/#slh-dsa-stateless-hash-based-digital-signature-algorithm) ([FIPS 205](/standards/post-quantum/fips-205/)) unless you can control signing state; Leighton-Micali Signatures (LMS) or the eXtended Merkle Signature Scheme (XMSS) ([SP 800-208](/standards/post-quantum/sp-800-208/)) only if you can show no one-time key will ever be reused | [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains the state problem |

The authority check can change the answer:

- **CNSA 2.0**, for US national security systems, approves ML-DSA for any signing use and allows LMS and XMSS for firmware and software, but does not approve SLH-DSA, so there the choice is ML-DSA, or LMS or XMSS with state control.
- **BSI TR-02102-1** recommends a post-quantum signature scheme only in combination with a classical one, but says hash-based signatures can in principle be used alone, provided their implementation security is carefully considered; it recommends XMSS and LMS only with secure state management.
- **ANSSI's 2023 position** makes hybridisation optional for XMSS and LMS, and possibly for SLH-DSA.

## Keep this evidence

The `option` and `authority` cells of the system's [change record](/resources/records/change-record/), as step 7 describes. Update the [inventory](/resources/records/inventory/) row's algorithm cells as the change reaches each environment, naming it, for example "X25519MLKEM768 in staging". Commodity products on the supplier-update path need no option recorded here (see [Keep commodity software updated](/migration-practices/commodity-software/)).

## Example

An insufficient record is "Hybrid is required for everyone."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/): the design-archive supplier's letter, judged `complete`, names hybrid X25519MLKEM768 for TLS connections. The manufacturer, a UK company, checks it against the UK NCSC's TLS guidance (15 October 2026), written for system administrators who configure TLS, which falls in the second row of the hybrid rule: it recommends hybrid as an interim measure and accepts ML-KEM on its own. It records that guidance, with FIPS 203 (NIST, 13 August 2024; for US federal systems) as the specification of ML-KEM, in the `authority` cell, followed by "hybrid because the supplier ships it". The cards for [TLS and web services](/technology-options/tls/), [Backups, archives and storage](/technology-options/stored-data/), and [Firmware and secure boot](/technology-options/firmware-secure-boot/) carry the rest of the example.

## Limits and next page

This page records which option applies and why; it does not configure protocols or products, and it does not decide whether a regulation binds you, which is a question for your risk owner or sector authority. Do not treat one authority's position as a requirement for an audience it does not address. This handbook does not cover quantum key distribution; [ETSI TR 103 619](/standards/migration-guides/etsi-tr-103-619/) (July 2020) likewise sets it outside its scope. Bespoke protocols, embedded devices, and regulated systems need specialist review. Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- ANSSI, ANSSI views on the Post-Quantum Cryptography transition (2023 follow-up), 21 December 2023. [Follow-up position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, last reviewed 22 September 2025. [ASD publication](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- Federal Office for Information Security (BSI), BSI TR-02102-1: Cryptographic Mechanisms: Recommendations and Key Lengths, Version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf?__blob=publicationFile)
- ETSI TC CYBER, CYBER; Migration strategies and recommendations to Quantum Safe schemes, ETSI TR 103 619 V1.1.1, July 2020. [ETSI TR 103 619 (PDF)](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Technology options overview](/technology-options/)
- [TLS and web services](/technology-options/tls/)
- [PKI and certificates](/technology-options/pki/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Hybrid cryptography](/learn/hybrid/)
