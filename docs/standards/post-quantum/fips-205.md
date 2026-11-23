---
title: "FIPS 205: Stateless Hash-Based Digital Signature Standard"
search_title: "FIPS 205: SLH-DSA hash-based signature standard"
sidebar_label: FIPS 205 (SLH-DSA)
displayed_sidebar: standardsSidebar
description: NIST standard specifying SLH-DSA (formerly SPHINCS+), a stateless hash-based post-quantum signature algorithm, and the SP 800-230 draft parameter sets.
---

## What it covers

Federal Information Processing Standards Publication 205 (FIPS 205) specifies the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), derived from the SPHINCS+ submission. It defines parameter sets instantiated with either SHA-2 ([FIPS 180-4](/standards/symmetric-and-hash/fips-180-4/)) or SHAKE ([FIPS 202](/standards/symmetric-and-hash/fips-202/)). Its security rests on hash-function properties rather than lattices, and unlike the schemes in [SP 800-208](/standards/post-quantum/sp-800-208/) the signer does not have to track per-signature state.

FIPS 205 is issued by the National Institute of Standards and Technology (NIST). NIST's FIPS compliance FAQ describes FIPS as standards for federal computer systems that are not always mandatory for federal agencies: each FIPS's applicability section says when it is mandatory. FIPS do not apply to national security systems, and private-sector organisations use them voluntarily, although contractors with government contracts must comply with FISMA, which mandates the use of FIPS.

:::info[Official texts]

- [FIPS 205 full text (PDF)](https://doi.org/10.6028/NIST.FIPS.205)
- [NIST CSRC publication page](https://csrc.nist.gov/pubs/fips/205/final)
- [NIST SP 800-230 initial public draft](https://csrc.nist.gov/pubs/sp/800/230/ipd)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2023-08-24">2023&#8209;08&#8209;24</time> | NIST released the draft of FIPS 205 for public comment. |
| <time dateTime="2024-08-13">2024&#8209;08&#8209;13</time> | NIST published FIPS 205 as a final standard. |
| <time dateTime="2026-04-13">2026&#8209;04&#8209;13</time> | NIST released the initial public draft of SP 800-230, proposing six additional SLH-DSA parameter sets limited to 2^24 signatures per key; comments closed on 12 June 2026. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) lists SLH-DSA among NIST's approved quantum-resistant digital signature schemes, alongside ML-DSA in [FIPS 204](/standards/post-quantum/fips-204/) and the stateful schemes in [SP 800-208](/standards/post-quantum/sp-800-208/). Because it relies on different security assumptions from ML-DSA, it gives organisations a signature option that does not depend on lattice problems.

The draft [SP 800-230](https://csrc.nist.gov/pubs/sp/800/230/ipd) would add six parameter sets with a limit of 2^24 signatures per key; NIST states they are not approved for general-purpose use. Until it is final, it is not an approved specification. For certificates and signed messages, [RFC 9909](https://www.rfc-editor.org/info/rfc9909) (December 2025) specifies SLH-DSA in X.509, and [RFC 9814](https://www.rfc-editor.org/info/rfc9814) (July 2025) specifies SLH-DSA in CMS.

## Sources

- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205 publication page](https://csrc.nist.gov/pubs/fips/205/final), [FIPS 205 (PDF)](https://doi.org/10.6028/NIST.FIPS.205)
- NIST, SP 800-230 initial public draft, 13 April 2026. [NIST SP 800-230 IPD](https://csrc.nist.gov/pubs/sp/800/230/ipd)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated 3 July 2024. [NIST FIPS FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF, RFC 9909 (SLH-DSA in X.509), December 2025, and RFC 9814 (SLH-DSA in CMS), July 2025. [RFC 9909](https://www.rfc-editor.org/info/rfc9909), [RFC 9814](https://www.rfc-editor.org/info/rfc9814)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [FIPS 204](/standards/post-quantum/fips-204/)
- [NIST SP 800-208](/standards/post-quantum/sp-800-208/)
- [Hash-based signatures explained](/learn/explainers/hash-based-signatures/)
- [Code and software signing](/technology-options/code-signing/)
