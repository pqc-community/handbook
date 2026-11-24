---
title: NIST selects HQC as a backup KEM to ML-KEM
description: NIST IR 8545 ends the fourth round of the PQC process by selecting HQC, a code-based key-encapsulation mechanism, as a backup to ML-KEM.
date: 2025-03-11
authors: [pqc_handbook]
tags: [standards-and-protocols, nist, key-establishment]
---

On 11 March 2025 the US National Institute of Standards and Technology (NIST) published [NIST IR 8545](/standards/post-quantum/nist-ir-8545/), its status report on the fourth round of the post-quantum standardisation process. It selects Hamming Quasi-Cyclic (HQC), a code-based key-encapsulation mechanism (KEM), for standardisation, which NIST's announcement describes as a backup to ML-KEM. The report is status news for anyone tracking key-establishment standards, and it does not change what organisations should deploy now.

{/* truncate */}

## What NIST published

IR 8545 describes how NIST evaluated the four key-establishment candidates it had carried into the fourth round, BIKE, Classic McEliece, HQC and SIKE, and records its decision: HQC is the only key-establishment algorithm from that round that will be standardised, and NIST will develop a standard based on it to augment its key-establishment portfolio. The report is an informative NIST Internal Report, so it imposes no requirements, and HQC will not be an approved algorithm until NIST publishes a final standard specifying it.

In its announcement the same day, NIST described HQC as a backup to ML-KEM, the lattice-based KEM it standardised in [FIPS 203](/standards/post-quantum/fips-203/) in August 2024, chosen because it rests on a different mathematical problem. NIST said it plans to release a draft standard for HQC in about a year, followed by a 90-day comment period, with a final standard expected in 2027.

## Why a second KEM

ML-KEM relies on structured lattices. If a future attack weakened that family of problems, a KEM built on error-correcting codes would give NIST an approved alternative that does not share the same weakness. HQC is not meant to replace ML-KEM, and NIST's announcement says ML-KEM remains the recommended choice for general encryption. The decision concerns key establishment only, so NIST's signature standards are unaffected.

## What it means for your plan

There is no reason to wait for HQC. NIST's announcement says organisations should continue to migrate their encryption systems to the standards it finalised in 2024, and HQC will not be available as an approved standard for some time. Key-establishment work that is driven by how long your data must stay confidential, as described in [When to start](/learn/explainers/when-to-start/), keeps its timetable.

What the selection does reinforce is the case for being able to change key-establishment algorithms without rebuilding the systems that use them. A backup KEM is only useful to an organisation whose protocols, libraries and supplier contracts let it switch, so treat it as a prompt to work through [Keep the ability to change again](/plan/programme/changing-algorithms-again/), and to ask suppliers how they would handle a change of algorithm, rather than as a new migration target. [Standardisation](/learn/standardisation/) explains how a selection like this becomes an approved standard.

## Sources

- NIST, Status Report on the Fourth Round of the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8545, 11 March 2025. [NIST IR 8545 publication page](https://csrc.nist.gov/pubs/ir/8545/final), [NIST IR 8545 (PDF)](https://doi.org/10.6028/NIST.IR.8545)
- NIST, NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption, news release, 11 March 2025. [News release (HTML)](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203 (PDF)](https://doi.org/10.6028/NIST.FIPS.203)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [What a KEM is](/learn/explainers/kem/)
- [Crypto-agility and the next transition](/learn/crypto-agility/)
