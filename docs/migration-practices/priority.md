---
title: What to migrate first
sidebar_label: Priority
sidebar_position: 4
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
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

**Handbook practice:** Two assets may both be first when their jobs differ. Within key establishment, the longer confidentiality period comes first, then the longer lead time. A non-updatable verifier comes before a verifier that can be changed on a long cycle, then the longer lead time. Signatures are ordered by how many parties have to change together, then the longer lead time. An unknown factor keeps the row. The inventory owner accepts the order.

**Authority recommendation:** NIST IR 8547, October 2026, United States, describes harvest-now, decrypt-later and states that digital signatures are not vulnerable to that attack.

**Authority recommendation:** The EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025, European Union Member States, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage.

## Keep this evidence

The priority record.

## Example

An insufficient record is "We will migrate all cryptography in one programme."

A decision-ready record places the clinic health records first for key establishment because the data confidentiality period extends well past 2030, places the clinic firmware signature check first for a non-updatable verifier because the field devices cannot accept a new trust root later, and leaves commodity laptops on the supplier-update path.

One tied case: the clinic's health records and its firmware check are both first, for different jobs (`key establishment` and `non-updatable verifier`).

A short-lived channel with a confidentiality period under one year comes after the health records for key establishment.

One uncertain case: a row whose algorithm confidence is `unknown` stays on the priority list with an owner and is not dropped.

## Limits and next page

This page does not select a post-quantum algorithm. The next page is the [priority record](/resources/priority-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)

## Related pages

- [Inventory](./inventory.md)
- [Key establishment](../algorithm-protocol-options/key-establishment.md)
- [Signatures](../algorithm-protocol-options/signatures.md)
- [Protect this first](../resources/protect-this-first.md)
