---
title: Choosing a post-quantum library
search_title: Open-source or commercial post-quantum libraries
sidebar_label: Choosing a post-quantum library
description: "Five questions to put to any post-quantum library, open-source or commercial: platform testing, validation, maintenance, license, and support."
displayed_sidebar: learnSidebar
---

**Question this answers:** should software you build use an open-source or a commercial post-quantum library, and what should you check either way? **Background:** [In real systems](/learn/in-real-systems/), [Standardization](/learn/standardization/).

Applications rarely implement ML-KEM or ML-DSA themselves. They call a library, and that library decides how well the algorithms are implemented, how quickly fixes reach you, and whether you can meet a validation requirement. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §2.2.2) describes updated libraries as giving developers post-quantum functions "without implementing complex algorithms themselves", and says the transition includes making those implementations secure against side-channel attacks, in which an attacker learns secrets from timing, power use, or other physical effects rather than from the algorithm's outputs.

Whether a library is open-source or commercial is often the first question teams ask, but it settles less than it seems. NIST's Secure Software Development Framework, [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) (February 2022), written for software producers and acquirers, recommends in task PW.4.4 that they verify acquired "commercial, open-source, and all other third-party software components" comply with their own requirements throughout their life cycles, and it draws no distinction between those kinds, so put the same five questions to every candidate.

## Five questions for any library

| Question | Why it matters | A useful answer names |
| --- | --- | --- |
| **1. Has it been tested on your platform?** | Code that runs in constant time in source can leak secrets once your compiler, build options, and processor have changed it, so side-channel resistance belongs to the build you ship, not only to the code | The compilers, build options, and targets the maintainer tests, and the side-channel and fuzz testing run on them, ideally including yours |
| **2. Is the exact module you ship validated, where you need validation?** | The NIST Cryptographic Module Validation Program (CMVP) FAQ says each validation entry states the version or release validated and the operational environment, so a validated project does not by itself make every build of it validated; moving a module to another environment is governed by the program's own rules | The certificate number, the module version, the operational environment, and the post-quantum algorithms the certificate lists |
| **3. Who maintains it, and for how long?** | Post-quantum standards and implementations are still changing, and a library that stops receiving fixes leaves you to patch it, as does any change you keep in a private copy | The maintainer, its release and security-fix policy, a support horizon that covers your product's life, and any local changes you would carry |
| **4. What license obligations come with it?** | A library's license, and those of the components it bundles, can place conditions on how you distribute your own product | The license of the library and of each bundled component, reviewed by legal before adoption |
| **5. What does support cover?** | Help integrating new algorithms is a different service from delivering security fixes, and you may need both | Who answers integration questions, how and how fast vulnerability fixes are delivered, and for which releases |

The answers come from different places: release notes, security policies, and project documentation for an open-source library; written answers and contract terms for a commercial one, put through [Work with suppliers](/plan/program/suppliers/) and the [purchase wording](/templates/records/purchase-wording/) record. Question 1 also applies whether or not you deploy a hybrid, because the UK National Cyber Security Centre's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), written for cyber security professionals, large organizations, and the public sector, recommends that operational systems only use post-quantum cryptography based on robust implementations of the final standards, and lists implementation security among the reasons some choose a hybrid.

## What the label does and does not tell you

Open source means anyone can read the code, which is not the same as the code being reviewed or ready for production. The Open Quantum Safe project's [liboqs README](https://github.com/open-quantum-safe/liboqs), for example, describes the library as meant for research and prototyping, says the project does not currently recommend relying on it in a production environment or to protect sensitive data, and says the project is not commercially supported. Read a project's own statement of its intended use before adopting it in production.

Commercial does not mean validated, and validation is not reserved for commercial code. On the [CMVP](https://csrc.nist.gov/projects/cryptographic-module-validation-program) list, for example, one module from an open-source project, the OpenSSL FIPS Provider, holds FIPS 140-3 [certificate #5586](https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/5586), first issued on November 13, 2026, which lists ML-KEM, ML-DSA, and SLH-DSA; the OpenSSL project distributes its 3.0 and later releases under the [Apache License v2](https://openssl-library.org/source/license/). Check the list for the module and version you actually ship, because the certificate, not the project's reputation, is the evidence.

Validation also has limits whichever model you choose. NIST's [Cryptographic Algorithm Validation Program](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program) (CAVP), whose algorithm validation is a prerequisite for module validation, describes testing through its Automated Cryptographic Validation Test System (ACVTS) as entirely black-box, so treat an algorithm certificate as evidence that the implementation computes the algorithm correctly and ask question 1 separately.

A private fork changes who maintains the code. SP 800-218 (task PW.4.2) covers components an organization creates and maintains in-house under its own secure development processes, and a private fork of an open-source library, or a patched copy of a commercial one, effectively becomes such a component, so you update, test, and keep it current yourself. The implementation examples SP 800-218 gives for task PW.4.4 include checking that each component is still actively maintained and has not reached end of life, and planning for any that is no longer maintained.

## By job

The same five questions apply to every job, but the reasons to ask them differ:

- **Key establishment**: what the library protects stays exposed to [harvest-now, decrypt-later](/learn/glossary/#harvest-now-decrypt-later) for the data's confidentiality period, and decapsulation keys on internet-facing services can be probed repeatedly, so side-channel testing on your platform is part of the answer.
- **Signatures**: signing keys are long-lived and valuable to an attacker, so side-channel testing of signing on your platform matters too, and stateful hash-based schemes (LMS and XMSS) need a library and process that never reuse a one-time key, as [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains.
- **Verifiers that cannot be updated**: verification code in boot firmware or a device's fixed image cannot be patched after shipment, so settle the library's correctness and post-quantum support before the design freeze, as [Firmware and secure boot](/technology-options/firmware-secure-boot/) describes.

## Insufficient and decision-ready

An insufficient record: *"We use an open-source library, so it has been reviewed,"* or *"We bought a commercial library, so it is certified."*

A decision-ready record, for an illustrative customer-facing service: *"Portal API service: cryptographic library and release named on the register row, with ML-KEM-768 available from that release. FIPS 140-3 certificate number recorded for that module version; its operational environment matches our build. The maintainer's security-fix policy covers the release through 2029, and we carry no local patches. Licenses of the library and its bundled components reviewed by legal. Side-channel testing on our compiler is not documented by the maintainer, so it is an open question with an owner and a next review date."*

The second record names the library and release, the evidence for each question, and what is still open, so it can be checked again when the library or the build changes.

## Where this goes next

Record each library, its release, and the answers on the system's row in the [register](/templates/records/register/), and use the questions and traps on [Libraries and bespoke code](/technology-options/libraries-bespoke-code/) when you make the change. Where validation is required for US federal use, the [FIPS 140-3](/standards/modules-protocols-certificates/fips-140-3/) summary explains the standard behind it.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.2.2). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities, SP 800-218, February 2022 (tasks PW.4.2 and PW.4.4). [SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)
- NIST, Cryptographic Module Validation Program, project page and FAQ. [CMVP project page](https://csrc.nist.gov/projects/cryptographic-module-validation-program), [CMVP FAQ](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/faqs)
- NIST, CMVP certificate #5586, OpenSSL FIPS Provider, FIPS 140-3, first issued November 13, 2026. [Certificate #5586](https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/5586)
- NIST, Cryptographic Algorithm Validation Program, project page. [CAVP project page](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- Open Quantum Safe, liboqs README. [liboqs](https://github.com/open-quantum-safe/liboqs)
- OpenSSL Library, License. [OpenSSL license](https://openssl-library.org/source/license/)

## Related pages

- [Libraries and bespoke code](/technology-options/libraries-bespoke-code/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
- [Work with suppliers](/plan/program/suppliers/)
- [FIPS 140-3](/standards/modules-protocols-certificates/fips-140-3/)
