---
title: Priority
sidebar_label: Priority
sidebar_position: 4
displayed_sidebar: migrationPracticesSidebar
description: Order the work by how long the data or the key must stay good, and split key establishment from signatures.
---

Order the work by how long the data or the key must stay good, and split key establishment from signatures.

## What can go wrong

One programme called "migrate to PQC" spends the year on signatures while recorded traffic waits. The two jobs are not the same clock.

## A stronger practice

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes harvest-now, decrypt-later: adversaries collect encrypted data now and decrypt it when a cryptanalytically relevant quantum computer exists. It says signatures are not vulnerable to that attack. It also says transitioning signatures is urgent for a different reason: the work takes longer, more parties have to coordinate, and some devices cannot update the code that checks a signature later.

The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), version 1.1, 11 June 2025, treats a use case as high-risk, where confidentiality is protected by public-key cryptography, if a compromise after 10 years or more would still cause significant damage.

## What to ask

Which datasets must still be secret in 2030, and which products cannot change their signature check later?

## Evidence

A priority record that names the asset, the lifetime, and whether the job is key establishment or signatures.

## A weak answer

"We will do all cryptography in one project."

## A stronger answer

"The health records are first because they must stay confidential well past 2030. The firmware root is first for a different reason: we cannot update the check later. The office laptops wait for the vendor update."

## Which pass

This is how the first pass chooses its scope.

## Options

Key establishment and signatures are different options for different assets. Read [Key establishment](../algorithm-protocol-options/key-establishment.md) and [Signatures](../algorithm-protocol-options/signatures.md). The clocks those choices sit on are on [Dates](../standards-timelines/dates.md).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)

## Related pages

- [Dates](../standards-timelines/dates.md)
- [Key establishment](../algorithm-protocol-options/key-establishment.md)
- [Signatures](../algorithm-protocol-options/signatures.md)
- [Protect this first](../resources/protect-this-first.md)
