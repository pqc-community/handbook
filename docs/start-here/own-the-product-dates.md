---
title: I own the product dates
sidebar_label: I own the product dates
sidebar_position: 3
displayed_sidebar: startHereSidebar
description: Which release has to carry a post-quantum signature or a root of trust, and what waits for a vendor.
---

## The decisions

Which release has to carry a post-quantum signature or a root of trust, and what waits for a vendor.

## Reading order

1. [Where to start](../migration-practices/where-to-start.md)
2. [Dates](../standards-timelines/dates.md)
3. [Priority](../migration-practices/priority.md)
4. [Signatures](../algorithm-protocol-options/signatures.md)
5. [Long-lived roots](../algorithm-protocol-options/long-lived-roots.md)
6. [Vendor plan](../migration-practices/vendor-plan.md)
7. [Protect this first](../resources/protect-this-first.md)

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, include long-lived hardware roots of trust in the 2028 plan row, and say commodity IT such as browsers, operating systems, and mobile devices picks up migration as vendors update those services. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says that where a device cannot update its signature check later, and it will still be in use when a cryptanalytically relevant quantum computer exists, the device should be designed to require quantum-resistant signatures on the executable code.

## What you leave with

A release date tied to one asset, and a vendor question if someone else owns the stack.

## A weak answer

"The platform will handle it."

## A stronger answer

"This product cannot update its firmware check. That release is on the 2028 root-of-trust work from the NCSC timelines. The laptops are on the vendor-update path."

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Where to start](../migration-practices/where-to-start.md)
- [Dates](../standards-timelines/dates.md)
- [Priority](../migration-practices/priority.md)
- [Signatures](../algorithm-protocol-options/signatures.md)
- [Long-lived roots](../algorithm-protocol-options/long-lived-roots.md)
- [Vendor plan](../migration-practices/vendor-plan.md)
- [Protect this first](../resources/protect-this-first.md)
