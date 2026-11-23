---
title: "FIPS 197: Advanced Encryption Standard (AES)"
sidebar_label: FIPS 197 (AES)
displayed_sidebar: standardsSidebar
description: NIST block-cipher standard specifying AES with 128-, 192- and 256-bit keys, which NIST does not expect to replace for post-quantum migration.
---

## What it covers

FIPS 197 specifies the Advanced Encryption Standard (AES), a symmetric block cipher on 128-bit blocks with 128-, 192- and 256-bit keys. Through modes of operation specified elsewhere, AES provides bulk encryption, authenticated encryption, message authentication and key wrapping in almost every protocol and product a migration team will inventory.

FIPS 197 is issued by NIST. NIST's [FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips) (content last updated 3 July 2024) describes FIPS as standards for federal computer systems that are not always mandatory for federal agencies (each FIPS's applicability section says when it is), notes that FIPS do not apply to national security systems, and says private-sector organisations use them voluntarily, although companies with government contracts must comply with FISMA, which mandates the use of FIPS.

:::info[Official texts]

- [FIPS 197, updated 2023 edition (PDF)](https://doi.org/10.6028/NIST.FIPS.197-upd1)
- [NIST CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/197/final)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2001-11-26">2001&#8209;11&#8209;26</time> | NIST published FIPS 197, specifying AES. |
| <time dateTime="2023-05-09">2023&#8209;05&#8209;09</time> | NIST published an updated edition of FIPS 197 with editorial changes only; the algorithm is technically unchanged. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) places AES-128, AES-192 and AES-256 in post-quantum security categories 1, 3 and 5 respectively, and says NIST does not expect to need to transition away from its symmetric standards as part of the post-quantum migration. The post-quantum change sits around AES rather than in it: [FIPS 203](/standards/post-quantum/fips-203/) changes how the session key is established, while AES continues to protect the data.

For US national security systems, the NSA's CNSA 2.0 FAQ (October 2026) specifies AES with 256-bit keys; see [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/). That is a requirement for that audience, not a NIST rule for everyone. Lightweight authenticated encryption for constrained devices is covered separately by [NIST SP 800-232](/standards/symmetric-and-hash/sp-800-232/).

## Sources

- NIST, Advanced Encryption Standard (AES), FIPS 197, published 26 November 2001, updated 9 May 2023. [FIPS 197 updated edition (PDF)](https://doi.org/10.6028/NIST.FIPS.197-upd1), [CSRC publication page](https://csrc.nist.gov/pubs/fips/197/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NSA, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, U/OO/6072712-26, Version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated 3 July 2024. [NIST FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)

## Related pages

- [Symmetric, hash, and KDF primitives](/standards/symmetric-and-hash/)
- [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/)
- [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/)
- [Quantum threat](/learn/quantum-threat/)
- [Glossary](/templates/reference/glossary/)
