---
title: Inventory the cryptography
sidebar_label: Inventory the cryptography
description: List public-key cryptography system by system, including embedded and supplier-controlled cryptography a scanner cannot see, and mark what is still unknown.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You have decided to act and need to know where public-key cryptography is used before prioritising, planning, or claiming that anything has migrated.

## Who does what

- The **migration lead** sets the scope, keeps the [inventory record](/resources/inventory-record/), and chases unknowns.
- **Asset owners** confirm each row for their systems.
- **Operations** runs scans and configuration checks.
- **Procurement** asks suppliers for what cannot be seen from inside the organisation.

## Do this

1. **Start where the risk is.** List each system that holds sensitive or long-lived data, exposes an external connection, or contains a device or product that verifies signatures. Add the rest later.
2. **Use more than one discovery method.** Combine network and certificate scans, configuration and code review, the questions in supplier contracts and support portals, and product documentation. Each method misses something; record which methods you used.
3. **Record one row per system** with its key-establishment algorithm and its signature algorithm as separate cells. Shared libraries, hardware security modules, certificate authorities, and services go in `dependencies` rather than in separate rows.
4. **Record what decides urgency**: who controls the software, the data confidentiality period, the renewal or refresh date, and the version where known.
5. **Mark what a scan cannot see**, including embedded firmware, hardware-bound keys, boot trust anchors, and cryptography inside a supplier's product or service.
6. **Set confidence honestly.** Use `known` only when both algorithm cells name a construction; otherwise `unknown`. An `unknown` row stays on the inventory with an owner.

A first list of rows is a **first-pass inventory**. With a named owner per row and a subsequent-review date, it becomes a **maintained inventory** that the rest of the programme can rely on.

The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) urges organisations to build an inventory of quantum-vulnerable cryptography and to ask technology vendors about it. ASD's [planning guidance](/standards/migration-guides/asd-planning/) describes a cryptography bill of materials (CBOM) as an effective way to record cryptographic dependencies, and notes that an organisation's first CBOM can be a simple list of critical security functions. In the United States, [Executive Order 14412](/standards/us-federal-directives/eo-14412/) (22 June 2026) directs CISA, with NIST, to publish guidance on the minimum elements of a CBOM within 270 days; until it is published, treat CBOM formats as developing rather than settled.

## Keep this evidence

The [inventory record](/resources/inventory-record/), with every column filled or marked `unknown`, the discovery methods used, and the date the inventory was last reviewed.

## Example

An insufficient record is "Our TLS scan found no issues."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), lists the supplier-hosted product-design archive (15-year confidentiality under company policy), the product sensor's firmware verifier (boot ROM trust anchor marked as not visible to a scan), and the office laptops. Every algorithm the manufacturer has not verified is `unknown`, and each row names its owner.

## Limits and next step

The inventory records what exists; it does not decide order or algorithms. Large estates may need specialist discovery tooling and support. Next, [decide what to migrate first](/migration-practices/priority/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, published 6 July 2022, last reviewed 22 September 2025. [ASD guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)

## Related pages

- [Inventory record](/resources/inventory-record/)
- [Decide what to migrate first](/migration-practices/priority/)
- [Long-lived roots](/technology-options/long-lived-roots/)
- [NCCoE Migration to PQC](/standards/migration-guides/nccoe-migration-to-pqc/)
