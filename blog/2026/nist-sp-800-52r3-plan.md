---
title: NIST plans SP 800-52r3 with post-quantum TLS
description: NIST says it will revise SP 800-52, its TLS guidelines for US federal systems, and draft SP 800-52r3 with post-quantum support; a plan, not yet a draft.
date: 2026-11-19
authors: [pqc_handbook]
tags: [standards-and-protocols, nist, key-establishment]
---

On November 19, 2026, NIST posted a planning note on its [SP 800-52 Rev. 2 publication page](https://csrc.nist.gov/pubs/sp/800/52/r2/final) saying it will revise its TLS guidelines and next develop a draft SP 800-52r3 that includes post-quantum support. SP 800-52 is written for US federal agencies, and this is a plan for a revision, not a draft for comment, so Rev. 2 remains the current guidance.

{/* truncate */}

## What NIST announced

The handbook's [SP 800-52 page](/standards/modules-protocols-certificates/sp-800-52/) covers the guidelines, which tell federal agencies how to select, configure and use TLS implementations: which protocol versions to support, which cipher suites and extensions to enable, and how certificates should be handled. The current revision, SP 800-52 Rev. 2 of August 29, 2019, predates the post-quantum standards and does not cover post-quantum key establishment.

The planning note says the revision will include post-quantum support, a 128-bit security minimum, authenticated encryption with associated data (AEAD), and alignment with RFC 9846, the current TLS 1.3 specification. It also proposes that servers may, rather than should, support TLS 1.2. NIST says it will next develop a draft of SP 800-52r3 and post it for public comment, so the detail of what the draft will require is not yet known.

## Why it follows from IR 8547

The note follows through on a commitment in the final [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/), published on October 27, 2026, and covered in the [post on the final report](/news/2026/nist-ir-8547-final/), which names TLS as an early priority because it protects data in transit for nearly every federal system, and says guidance on quantum-resistant key establishment in TLS, including hybrid key exchange that combines ML-KEM with classical algorithms, will be reflected in the next revision of SP 800-52. The IETF published the hybrid groups for TLS 1.3 in [RFC 10024](/standards/modules-protocols-certificates/rfc-10024/) in August 2026.

For US federal agencies, [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/) and EO 14306 already require support for TLS 1.3 no later than January 2, 2030; that deadline applies to those agencies, not to every organization, and it does not depend on the revision. The post-quantum groups are defined only for TLS 1.3, because the IETF will not specify post-quantum cryptography for TLS 1.2.

## What it means for your plan

If your organization follows SP 800-52, because you are a federal agency, supply one, or use it as your own TLS baseline, record the planned revision as a subsequent review trigger rather than as new requirements, and review your TLS configuration again when the draft appears. Until then the work it signals is already worth doing: find endpoints still limited to TLS 1.2, because they must move to TLS 1.3 before they can use any post-quantum group, and check which RFC 10024 groups your servers and suppliers support. The [TLS and web services card](/technology-options/tls/) lists what to ask and test.

The revision concerns key establishment, which protects data against harvest-now, decrypt-later collection. Certificate signatures in TLS are a separate migration with their own timing, covered under PKI and certificates.

## Sources

- NIST, Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations, SP 800-52 Rev. 2, August 29, 2019, with planning note of November 19, 2026. [SP 800-52 Rev. 2 publication page (HTML)](https://csrc.nist.gov/pubs/sp/800/52/r2/final), [SP 800-52 Rev. 2 (PDF)](https://doi.org/10.6028/NIST.SP.800-52r2)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, final, October 27, 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, June 24, 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- IETF, TLS 1.2 is in Feature Freeze, RFC 9851, Proposed Standard, July 2026. [RFC 9851 information page (HTML)](https://www.rfc-editor.org/info/rfc9851)

## Related pages

- [PKI and certificates](/technology-options/pki/)
- [Review and report](/plan/program/subsequent-review/)
- [TLS explainer](/learn/explainers/tls/)
