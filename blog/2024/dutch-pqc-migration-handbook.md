---
title: Dutch PQC Migration Handbook second edition
description: AIVD, CWI and TNO's extended PQC Migration Handbook adds advice on finding cryptographic assets, assessing quantum risk and building crypto-agility.
date: 2024-12-03
authors: [pqc_handbook]
tags: [authority-updates, netherlands, crypto-agility]
---

On 3 December 2024 the Netherlands General Intelligence and Security Service (AIVD), with the research institutes CWI and TNO, [announced](https://english.aivd.nl/latest/news/2024/12/03/aivd-cwi-and-tno-publish-renewed-handbook-for-quantum-safe-cryptography) the extended second edition of [The PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/). It is guidance for organisations planning a post-quantum migration, aimed above all at those that handle important encrypted information such as state or corporate secrets, and it does not set legal obligations.

{/* truncate */}

## What AIVD, CWI and TNO published

The handbook's document page is dated 29 November 2024, and the news release followed on 3 December 2024, when the handbook was presented to the State Secretary for Digital Affairs and Kingdom Relations at a post-quantum cryptography symposium in The Hague. It organises migration work into three stages, diagnose, plan and execute, and it sorts organisations into groups by how urgently they need to act, with a separate group for those that supply cryptographic standards or infrastructure, so that each can match the effort of its programme to its risk profile.

## What the second edition adds

According to the release, the new edition gives more concrete advice on finding cryptographic assets, assessing quantum risks and setting up cryptographic agility. It draws on experience gained since the first edition, shares practical lessons from migrations, and introduces an advisory tool, the PQChoiceAssistant, to help organisations choose a post-quantum method.

The release explains why AIVD considers the work urgent for its audience: data intercepted today could be decrypted once a capable quantum computer exists, and moving to new cryptography might take ten years or longer. That is the harvest-now, decrypt-later argument applied to key establishment, and it is strongest for information that must stay confidential for many years. The release also notes that RSA and elliptic-curve cryptography are used for digital signatures as well as encryption, which is a separate job with its own drivers.

## What it means for your plan

The handbook is a programme methodology rather than an algorithm specification, so it complements the standards rather than replacing them. Its diagnose stage lines up with the handbook's [Inventory the cryptography](/plan/programme/inventory/) practice, and its quantum risk assessment is a useful input when you [decide what to migrate first](/plan/programme/priority/), because it asks how realistic it is that an attacker with a quantum computer would target your organisation.

If you are still working out whether you need a full programme or can rely mainly on supplier updates, [Which plan you need](/plan/) sets out how this handbook routes that decision, and the Dutch handbook's groups are a useful cross-check on where your organisation sits. The emphasis on cryptographic agility also reinforces [Keep the ability to change again](/plan/programme/changing-algorithms-again/), since a migration that hard-codes its new algorithms leaves the next change as costly as this one.

The handbook is Dutch national guidance, so treat its advice as one authority's view for its audience, and record any dates or priorities you adopt from it with that attribution.

## Sources

- AIVD, CWI and TNO, The PQC Migration Handbook, extended second edition, document page 29 November 2024. [AIVD document page (HTML)](https://english.aivd.nl/documents/2024/12/3/the-pqc-migration-handbook), [Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- AIVD, AIVD, CWI, and TNO publish renewed handbook for quantum-safe cryptography, news release, 3 December 2024. [News release (HTML)](https://english.aivd.nl/latest/news/2024/12/03/aivd-cwi-and-tno-publish-renewed-handbook-for-quantum-safe-cryptography)

## Related pages

- [Post-quantum migration guides](/standards/migration-guides/)
- [Crypto-agility and the next transition](/learn/crypto-agility/)
- [The quantum threat](/learn/quantum-threat/)
