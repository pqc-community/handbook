---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
displayed_sidebar: technologyOptionsSidebar
description: Decide who chooses the option, find what every applicable authority accepts, apply the hybrid rule, and record the option and the authority that justifies it on the change record before implementation.
---

## When this applies

A system is on the inventory and has its place in the order on the [migration plan](/resources/migration-plan/), and you need to name the post-quantum option it will use and the authority that justifies that choice. This page sits in Technology options because it is a technical decision; it is a step on the full path of the [migration practices](/migration-practices/), between working with suppliers and making the change.

## Who does what

- The **asset owner** proposes the option and records it on the change record.
- The **supplier**, where it controls the software, names the algorithm or scheme and the release that delivers it.
- **Legal or risk** confirms which authorities' positions apply to the system, its sector, and its customers.
- The **migration lead** checks the option against the system's line on the migration plan.
- A **specialist adviser** reviews the choice for bespoke protocols, embedded devices, or regulated systems.

## Do this

1. **Read the facts you already hold.** The inventory row gives the system, who controls the software, and the data confidentiality period; the plan line gives the job, including whether a verifier cannot be updated (`non-updatable verifier`), and the applicable timeline. Do not re-record them here. If one of them is `unknown` and it changes the steps below, resolve it first.
2. **Decide who chooses.**
   - **The supplier controls the software:** the supplier's named algorithm or scheme is the proposed option. Use it only once the [vendor response log](/resources/vendor-response-log/) judges that answer `complete`; for a `vague` or `missing` answer, follow up under step 4 of [Work with suppliers](/migration-practices/suppliers/). Then check it against step 3. If it conflicts with an authority that applies to you, treat the answer as `concerning` and escalate it under [Work with suppliers](/migration-practices/suppliers/). Commodity products on the supplier-update path need no option here (see [Keep commodity software updated](/migration-practices/commodity-software/)).
   - **You configure or build it:** you choose, using steps 3 and 4.
3. **Find what each applicable authority accepts.** For every authority legal or risk has confirmed, note the algorithms and parameter sets it names and its position on hybrid use, from [National algorithm positions](/standards/national-algorithm-positions/) and the [Hybrid cryptography](/learn/hybrid/) lesson, which adds the UK NCSC. They differ. For key establishment, [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, names [ML-KEM](/resources/glossary/#ml-kem-module-lattice-based-key-encapsulation-mechanism) ([FIPS 203](/standards/post-quantum/fips-203/)) as NIST's only approved post-quantum scheme, while Germany's [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/), which addresses developers in a recommendatory manner, also recommends FrodoKEM and Classic McEliece, and the US National Security Agency's (NSA) Commercial National Security Algorithm Suite 2.0 ([CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/)) requires ML-KEM-1024 and [ML-DSA](/resources/glossary/#ml-dsa-module-lattice-based-digital-signature-algorithm)-87 for US national security systems.
4. **Choose an algorithm, parameter set, and form that every applicable authority accepts.** This handbook's rule of thumb for hybrid use, which keeps you inside every applicable position and, where authorities differ, settles the difference in favour of the one that asks for hybrid:
   - if any applicable authority recommends hybrid for your audience and does not also accept post-quantum alone, use a hybrid that the other applicable authorities also accept. BSI TR-02102-1, for example, recommends using quantum-safe key encapsulation in a hybrid manner for the developers it addresses, and the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (11 June 2025) recommends standardised, tested hybrid solutions whenever feasible and suitable for the Member States it addresses. CNSA 2.0, by contrast, does not require hybrid for US national security systems, and where NSA has given public guidance on hybrid use, counts as compliant only the hybrid solution it identified;
   - otherwise, either form is acceptable to them. This includes an authority that recommends hybrid but also accepts post-quantum alone, as the UK NCSC's [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (version 1.2, 15 October 2026) does: it recommends hybrid as an interim measure and considers ML-KEM on its own acceptable. Choose the form your products and the parties you connect to support, and record why. NIST IR 8547 describes hybrids as typically temporary, so if you choose hybrid, record the path away from it under [Keep the ability to change again](/migration-practices/changing-algorithms-again/);
   - for signatures, BSI TR-02102-1 recommends a quantum-safe signature scheme only in combination with a classical one, but says hash-based signatures can in principle be used alone, provided their implementation security is carefully considered.
   If no option satisfies every applicable authority, take the conflict to legal or risk and the sponsor, who decide which position governs; record the decision and its reason in the `authority` cell and as an item on the [review log](/resources/review-log/).
5. **Apply the job page.** For key establishment, in transit or for stored data, use [Key establishment](/technology-options/key-establishment/). For signatures, including certificates and code signing, where every verifier can be updated, use [Signatures](/technology-options/signatures/), which also gives the rule for choosing a signature scheme. For a verifier that cannot be updated, do not choose here: use [Long-lived roots of trust](/technology-options/long-lived-roots/), because the option has to be one the device's verifier supports.
6. **Check that the option fits before you record it.** Confirm that protocols, certificates, storage, and hardware can carry the larger keys and signatures, and name the tests that will prove it on the change record; [Make and verify one change](/migration-practices/implementation/) runs them.
7. **Record the option and the authority that justifies it.** The `authority` cell names every position the option relies on, for both the algorithm and the form: the authority, the document, its date, and the audience it addresses. Where the supplier chose, name the positions you checked its choice against. If no supported option exists yet, write `unknown` in `option` and write "blocked" in `result`, with the date by which it has to be resolved, such as a design freeze.

Do not treat one authority's position as a requirement for an audience it does not address. This handbook does not cover quantum key distribution; [ETSI TR 103 619](/standards/migration-guides/etsi-tr-103-619/) (July 2020) likewise sets it outside its scope.

## Keep this evidence

The option and the authority, as above, in the `option` and `authority` cells of the system's [change record](/resources/change-record/). Update the inventory row's algorithm cells as the change reaches each environment, naming the environment, for example "X25519MLKEM768 in staging".

## Example

An insufficient record is "Hybrid is required for everyone."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), covers three of the manufacturer's lines:

- **the product-design archive's key establishment:** the supplier controls the software, and its letter, judged `complete`, names hybrid X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange, for TLS connections. The manufacturer, a UK company, checks that choice against FIPS 203 (NIST, 13 August 2024), written for US federal systems, for ML-KEM and against the UK NCSC's TLS guidance (15 October 2026), written for system administrators who configure TLS, which recommends hybrid as an interim measure, and records both as the authority. The same NCSC guidance also accepts ML-KEM on its own, so hybrid is not mandatory here; the manufacturer accepts it because it is what the supplier ships. The staging pilot passed on 2026-10-21; production rollout is pending;
- **the office laptops:** on the supplier-update path, so no option is chosen here;
- **the product sensor's firmware verifier and signing key:** the option has to be one the microcontroller's boot verifier supports, and the supplier's answer is `vague`. The change record shows the option as `unknown` and the change as blocked until a supported option exists, before the design freeze on 2027-06-30.

## Limits and next page

This page records which option applies and why; it does not configure protocols or products, and it does not decide whether a regulation binds you, which is a question for your risk owner or sector authority. Bespoke protocols, embedded devices, and regulated systems need specialist review. Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- Federal Office for Information Security (BSI), BSI TR-02102-1: Cryptographic Mechanisms: Recommendations and Key Lengths, Version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf?__blob=publicationFile)
- ETSI TC CYBER, CYBER; Migration strategies and recommendations to Quantum Safe schemes, ETSI TR 103 619 V1.1.1, July 2020. [ETSI TR 103 619 (PDF)](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Key establishment](/technology-options/key-establishment/)
- [Signatures](/technology-options/signatures/)
- [Long-lived roots of trust](/technology-options/long-lived-roots/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Hybrid cryptography](/learn/hybrid/)
