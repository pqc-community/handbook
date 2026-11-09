---
title: The vendor's migration plan
sidebar_label: Vendor plan
sidebar_position: 5
displayed_sidebar: migrationPracticesSidebar
description: How to keep the written post-quantum answer from the organisation that owns the stack.
---

Decide what to ask the organisation that owns the stack, and how to keep the answer.

## What can go wrong

A sales sentence with no date, no algorithm, and no scope is not a plan. A call you did not write down cannot be checked later.

## A stronger practice

The [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023, urges organisations to ask vendors for a quantum-readiness roadmap that describes how they will migrate, including timelines for testing and integration, for both on-premises and cloud products, and to plan contract changes so new products arrive with PQC and older products can be upgraded.

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, say that where you rely entirely on commodity platforms, the provider delivers the upgrade, and your work is the timely refresh. Where you do not, you choose an approach per system.

Supplier evidence packages are onward reading in the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/practices-controls/supplier-assurance-procurement/). That link is not the authority for a post-quantum date.

## What to ask

Ask, in writing: which products, which algorithms, which date, and what happens to hardware that cannot be updated?

## Evidence

The tracking sheet on [Vendor questions](../resources/vendor-questions.md): vendor, question, answer, date, and source.

## A weak answer

"They told us on a call that they are quantum safe."

## A stronger answer

"The vendor's roadmap, dated, says hybrid key establishment in this product line in this year, and says signatures are not in that release. We stored the page we were shown."

## Which pass

This pass can run beside the inventory.

## Options

The option for a system stays on [Choosing an option](../algorithm-protocol-options/choosing.md). A vendor answer is evidence for that choice. It is not a substitute for naming the authority you are following.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Vendor questions](../resources/vendor-questions.md)
- [Choosing an option](../algorithm-protocol-options/choosing.md)
- [Changing algorithms again](./changing-algorithms-again.md)
