---
title: Standards and official guidance
sidebar_label: Standards
displayed_sidebar: standardsSidebar
description: Reference summaries of post-quantum standards, government requirements, national algorithm positions, protocol specifications, and migration guides, with status, audience, and dates.
---

Use these reference summaries to find the official text of each standard, government requirement, and migration guide cited in this handbook. Each summary says what the document is for, who issued it, who it applies to, whether it binds that audience or only recommends, and how it relates to the other documents a migration team will meet. Status and dates were last checked against the official sources on 21 November 2026.

## Start with your question

- **What must we do, and by when?** Binding dates belong to a named authority and audience. US federal agencies are bound by the [US government requirements](/standards/us-federal-directives/). Other organisations usually meet dates through national guidance, sector regulators, or contracts. Compare them in [Why migration timelines differ](/learn/explainers/timelines/).
- **Which algorithms are approved?** Start with the [post-quantum cryptography standards](/standards/post-quantum/), then NIST's transition schedule in [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/).
- **Do authorities agree on hybrid use?** No. Each position is recorded with its audience in [National algorithm positions](/standards/national-algorithm-positions/).
- **How does an algorithm reach products?** Module validation, protocols, and certificate formats are in [Modules, protocols, and certificates](/standards/modules-protocols-identity/).
- **How do we run the programme?** Read the [migration guides](/standards/migration-guides/), including supplier question sets.

## Categories

Publications are grouped by their role in the transition:

- **[Post-quantum cryptography](/standards/post-quantum/)**: NIST's approved post-quantum key-encapsulation and signature standards, KEM guidance, standardisation status reports, and what is still in development.
- **[Transition and key management](/standards/transition-and-key-management/)**: NIST's transition schedule, algorithm and key-length transition rules, key management, and crypto-agility guidance.
- **[Classical public-key (transitioning)](/standards/classical-public-key/)**: The quantum-vulnerable signature, curve, and key-establishment standards that post-quantum schemes replace.
- **[Symmetric, hash, and KDF primitives](/standards/symmetric-and-primitives/)**: Block ciphers, hash functions, MACs, key derivation, and random bit generators — largely not replaced, with named exceptions.
- **[Modules, protocols, and certificates](/standards/modules-protocols-identity/)**: Cryptographic module validation, TLS guidance and hybrid key agreement, post-quantum certificate formats, and federal identity credentials.
- **[US government requirements](/standards/us-federal-directives/)**: The statute, presidential directives, OMB memorandum, and CISA acquisition guidance that govern US federal agencies.
- **[National algorithm positions](/standards/national-algorithm-positions/)**: Where national authorities set algorithm choices and expectations on hybrid use.
- **[Migration guides](/standards/migration-guides/)**: National, ETSI, and consortium guides for programme setup, discovery, and supplier engagement.

## How to read status

- **Final** standards and RFCs can be cited as published; **drafts** can change and are labelled as drafts. **Selected** algorithms are not yet standards.
- A NIST FIPS is not automatically mandatory for every federal system. NIST's FIPS compliance FAQ says each FIPS's applicability section sets when it is mandatory, and that FIPS do not apply to national security systems.
- NIST Special Publications and Internal Reports, IETF RFCs, ETSI reports, and national guides recommend or inform. They bind an organisation only where a law, directive, regulator, or contract makes them do so.
- Standards publication is not product release or deployment. See [From research to deployment](/learn/explainers/research-to-deployment/).

## Sources

- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), updated 2 November 2026. [NIST FIPS FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Standardisation](/learn/standardisation/)
- [Timelines](/learn/timelines/)
- [Why migration timelines differ](/learn/explainers/timelines/)
- [Choosing options](/technology-options/choosing/)
