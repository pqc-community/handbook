---
title: Changing algorithms again
sidebar_label: Changing algorithms again
sidebar_position: 6
displayed_sidebar: migrationPracticesSidebar
description: Can you change algorithm again after this pass?
---

Can you change algorithm again after this pass?

## What can go wrong

A one-time swap that assumes the algorithm names will not move leaves the next change with no owner and no record of what is in use now.

## A stronger practice

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) says stakeholders should remain cryptographically agile so they can adapt to new developments.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says hybrid solutions, when used, are typically expected to be temporary measures that lead to a second transition to tools that use only post-quantum algorithms, and that quantum-vulnerable and quantum-resistant algorithms will be used side by side during the transition.

Handbook guidance: crypto-agility here means that operating capability. It is not a product.

## What to ask

Who can change the algorithm in this system, and what record shows the current one?

## Evidence

A named owner and a place where the algorithm in use is written down.

## A weak answer

"We picked an algorithm, so we are done."

## A stronger answer

"This pass uses the construction our authority defends. The inventory names the algorithm. The next pass has a date."

## Which pass

This page is the capability to change algorithms again. [The next pass](./next-pass.md) is the later review of the same estate.

## Options

The construction this pass uses is chosen on [Choosing an option](../algorithm-protocol-options/choosing.md). Hybrid use, where an authority defends it, is a temporary measure on the way to a later change, not the end of the programme.

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [The next pass](./next-pass.md)
- [Vendor plan](./vendor-plan.md)
- [Choosing an option](../algorithm-protocol-options/choosing.md)
