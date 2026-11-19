---
title: What to migrate first
sidebar_label: Priority
displayed_sidebar: migrationPracticesSidebar
description: Order a post-quantum migration with a qualitative rubric, and split key establishment from signatures and from non-updatable verifiers.
---

## When this applies

A first-pass or maintained inventory exists.

## Do this

Apply this qualitative rubric to each inventory row. Assign no numeric score. Consider each branch:

- Data confidentiality period
- Signatures that many parties change together
- A verifier that cannot be updated later
- Impact
- Lead time
- Dependencies
- Supplier readiness

Two assets can both rank first when their cryptographic jobs differ. Within key establishment, order by longer data confidentiality period first and longer lead time second; [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, United States) notes that harvest-now, decrypt-later threatens confidentiality rather than digital signatures, and the [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf) (version 1.1, 11 June 2025, European Union) classifies public-key-protected confidentiality as high-risk when compromise after 10 years or more would still cause significant damage. Place non-updatable verifiers ahead of verifiers that can be updated on a long cycle, and order general signature migrations by how many relying parties must coordinate and by lead time. Keep rows with `unknown` factors on the list under their inventory owner until resolved.

## Keep this evidence

The priority record.

## Example

An insufficient record is "We will migrate all cryptography in one programme."

A decision-ready record places the manufacturer's product-design archive first for key establishment because its own retention policy requires 15 years of confidentiality, places the product sensor first for a non-updatable verifier because its boot-ROM trust anchor cannot change after shipment, and leaves office laptops on the supplier-update path.

One tied case: the design archive and product sensor are both first, for different jobs (`key establishment` and `non-updatable verifier`).

A short-lived channel with a confidentiality period under one year comes after the design archive for key establishment.

One uncertain case: a row whose algorithm confidence is `unknown` stays on the priority list with an owner and is not dropped.

## Limits and next page

Leave the post-quantum algorithm for a later record. The next record is the [priority record](/resources/priority-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)

## Related pages

- [Inventory](./inventory.md)
- [Key establishment](../technology-options/key-establishment.md)
- [Signatures](../technology-options/signatures.md)
- [Protect this first](../resources/protect-this-first.md)
