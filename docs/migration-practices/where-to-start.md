---
title: Where to start a post-quantum migration
sidebar_label: Where to start
sidebar_position: 2
displayed_sidebar: migrationPracticesSidebar
description: Do not claim a post-quantum migration before you can list the cryptography that has to move.
---

Do not claim a migration before you can list what has to move.

## What can go wrong

A roadmap with no inventory does not say what has to move. One project that treats key establishment and signatures as the same job hides two different pieces of work.

## A stronger practice

The [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023, says begin with a quantum-readiness roadmap, an inventory of quantum-vulnerable cryptography, a risk assessment, and vendor engagement.

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) calls the first step a quantum-vulnerability diagnosis and gives its concrete steps to urgent adopters, organisations that need to start because they cannot afford to delay. Regular adopters, in that handbook, do not need to react yet.

Handbook guidance: if you are not sure which you are, read [Keep software updated](../start-here/keep-software-updated.md) and then [Priority](./priority.md).

## What to ask

What data or keys must stay good for a long time, and who owns the stack?

## Evidence

An inventory record, not a slogan.

## A weak answer

"We are quantum safe."

## A stronger answer

"We have a first inventory, a reason the top items are first, and a date for the next pass."

## Which pass

This is the first pass.

## Options

The choice for a listed system is on [Choosing an option](../algorithm-protocol-options/choosing.md). This page does not make that choice.

The Dutch handbook advises against relying on the security of quantum key distribution for the time being.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Inventory](./inventory.md)
- [Priority](./priority.md)
- [Keep software updated](../start-here/keep-software-updated.md)
- [Dates](../standards-timelines/dates.md)
