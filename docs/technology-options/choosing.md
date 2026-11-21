---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
displayed_sidebar: technologyOptionsSidebar
description: Decide who chooses the option, apply one rule per job, and record the option and the authority that supports it on the change record before implementation.
---

## When this applies

A system is on the inventory and has its place in the order on the [migration plan](/resources/migration-plan/), and you need to name the post-quantum option it will use and the authority that supports that choice. This page sits in Technology options because it is a technical decision; it is a step on the full path of the [migration practices](/migration-practices/), between working with suppliers and making the change.

## Who does what

- The **asset owner** proposes the option and records it on the change record.
- The **supplier**, where it controls the software, names the algorithm or scheme and the release that delivers it.
- **Legal or risk** confirms which authorities' positions apply to the system, its sector, and its customers.
- The **migration lead** checks the option against the system's line on the migration plan.
- A **specialist adviser** reviews the choice for bespoke protocols, embedded devices, or regulated systems.

## Do this

1. **Read the facts you already hold.** The inventory row gives the system, who controls the software, whether it can be updated, and the data confidentiality period; the plan line gives the job and the applicable timeline. Do not re-record them here. If one of them is `unknown` and it changes the rule below, resolve it first.
2. **Decide who chooses.**
   - **The supplier controls the software:** the supplier's named algorithm or scheme is the option. Use it only once the [vendor response log](/resources/vendor-response-log/) judges that answer `complete`; otherwise go back to [Work with suppliers](/migration-practices/suppliers/) rather than guessing. Commodity products on the supplier-update path need no option here (see [Keep commodity software updated](/migration-practices/commodity-software/)).
   - **You configure or build it:** you choose, using the rule for the job in step 3.
3. **Apply the rule for the job.**
   - **Key establishment.** The algorithm is ML-KEM, specified in [FIPS 203](/standards/post-quantum/fips-203/), which [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) names as NIST's only approved post-quantum key-establishment scheme. Whether to run it in hybrid form, combined with a classical exchange, depends on the authorities that apply to you. If any applicable authority requires or strongly recommends hybrid, use hybrid: for example, Germany's [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) recommends post-quantum key establishment only in hybrid form for the developers it addresses, and the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (11 June 2025) recommends standardised, tested hybrid solutions wherever feasible for the Member States it addresses. Otherwise, either form is supported by at least one authority: NIST IR 8547 accommodates hybrid key establishment and describes it as typically temporary. Record which form you chose and the authority you followed. For TLS 1.3, use a hybrid group defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/), such as X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange. See [Key establishment](/technology-options/key-establishment/).
   - **Signatures.** Choose a scheme that every relying party's verifier can accept, and plan for verifiers to accept it before signers switch. For general use, the NIST options are ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)) and SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)). Use a stateful hash-based scheme, LMS or XMSS in [SP 800-208](/standards/post-quantum/sp-800-208/), only for tightly controlled software or firmware signing where you can guarantee that no one-time key is reused. Apply the same hybrid test as for key establishment, since some authorities expect post-quantum signatures to be combined with classical ones. See [Signatures](/technology-options/signatures/).
   - **Verifiers that cannot be updated.** Do not choose here. Open [Long-lived roots](/technology-options/long-lived-roots/): the option must be one the device's verifier supports, settled before the design freeze. If no supported option exists yet, record the change as blocked, with the date by which it must be resolved.
4. **Check that the option fits before you record it.** Confirm that protocols, certificates, storage, and hardware can carry the larger keys and signatures, and name the tests that will prove it on the change record; [Make and verify one change](/migration-practices/implementation/) runs them.
5. **Record the option and its authority.** Name the authority, the document, its date, and the audience it addresses, so a reader can see why this position applies to this system.

Positions differ, most visibly on hybrid use; [National algorithm positions](/standards/national-algorithm-positions/) sets them side by side with their audiences. Do not treat one authority's position as a requirement for an audience it does not address. This handbook does not cover quantum key distribution; [ETSI TR 103 619](/standards/migration-guides/etsi-tr-103-619/) (July 2020) likewise sets it outside its scope.

## Keep this evidence

The option, the authority, and the date of that authority, in the `option` and `authority` cells of the system's [change record](/resources/change-record/). Update the inventory row's algorithm cells once the change is deployed and checked.

## Example

An insufficient record is "Hybrid is required for everyone."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), covers three of the manufacturer's lines:

- **the product-design archive's key establishment:** the supplier controls the software, and its letter, judged `complete`, names hybrid X25519MLKEM768 for TLS connections. The change record gives that option, recorded against FIPS 203 (NIST, 13 August 2024) as the standard for ML-KEM, and the staging pilot proceeds;
- **the office laptops:** on the supplier-update path, so no option is chosen here;
- **the product sensor's firmware verifier and signing key:** the option must be one the microcontroller's boot verifier supports, and the supplier's answer is `vague`. The change record shows the option as `unknown` and the change as blocked until a supported option exists, before the design freeze on 2027-06-30.

## Limits and next page

This page records which option applies and why; it does not configure protocols or products, and it does not decide whether a regulation binds you, which is a question for your risk owner or sector authority. Bespoke protocols, embedded devices, and regulated systems need specialist review. Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- Federal Office for Information Security (BSI), BSI TR-02102-1: Cryptographic Mechanisms: Recommendations and Key Lengths, Version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf)
- ETSI TC CYBER, CYBER; Migration strategies and recommendations to Quantum Safe schemes, ETSI TR 103 619 V1.1.1, July 2020. [ETSI TR 103 619 (PDF)](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Key establishment](/technology-options/key-establishment/)
- [Signatures](/technology-options/signatures/)
- [Long-lived roots](/technology-options/long-lived-roots/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Make and verify one change](/migration-practices/implementation/)
