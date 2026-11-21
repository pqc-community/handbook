---
title: Inventory the cryptography
sidebar_label: Inventory the cryptography
description: List public-key cryptography system by system, using several discovery methods, including embedded, supplier-controlled, and stored-data cryptography a scanner cannot see.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You have decided to act and need to know where public-key cryptography is used before prioritising, planning, or claiming that anything has migrated.

## Who does what

- The **migration lead** sets the scope, keeps the [inventory record](/resources/inventory-record/), and chases unknowns.
- **Asset owners** confirm each row for their systems.
- **Operations** runs scans, log reviews, and configuration checks.
- **Procurement** asks suppliers for what cannot be seen from inside the organisation (see [Work with suppliers](/migration-practices/suppliers/)).

## Do this

1. **Start where the risk is.** List each system that holds sensitive or long-lived data, exposes an external connection, operates signing infrastructure, or contains a device or product that verifies signatures. Add the rest later.
2. **Make a minimum first pass before anything else.** For each system from step 1, ask its owner what it does with public-key cryptography; export the certificate list from your certificate authority or certificate manager, if you have one; and, where a supplier controls the system, send the supplier the questions on the [vendor response log](/resources/vendor-response-log/). Mark everything you cannot confirm as `unknown`. That is enough to start deciding what to migrate first; supplier answers can follow, and the methods below fill the gaps over time.
3. **Add further discovery methods as you go**, because each one misses something:
   - **connections**: certificate and TLS scans, plus server or load-balancer logs that show which key-exchange groups and signature algorithms are actually negotiated;
   - **certificates**: internal certificate authority issuance records and certificate transparency logs for public certificates;
   - **software**: library and dependency scans, software bills of materials, and code review for direct use of cryptographic APIs;
   - **keys**: hardware security module and key management service inventories, SSH host and user keys, and code-signing and firmware-signing keys;
   - **stored data**: backups and archives whose keys are wrapped or encrypted to a public key;
   - **products and services**: supplier documentation and written answers for what you cannot inspect.
4. **Record one row per system**, with key-establishment and signature algorithms in separate cells. A cell can hold several values: a TLS endpoint may list its key-exchange groups, its handshake signature, and its certificate-chain algorithms. Use `not applicable` when a system does only one job, such as a firmware verifier that only checks signatures.
5. **Give a public-key infrastructure you operate its own rows.** A certificate authority, its signing keys and hardware security modules, and the services that publish revocation information have their own algorithms and lifetimes. For a certificate authority you only consume, or a shared library, list it in `dependencies`.
6. **Record what decides urgency**: who controls the software, the data confidentiality period, the renewal or refresh date, and the version where known.
7. **Mark what a scan cannot see**, including embedded firmware, hardware-bound keys, boot trust anchors, and cryptography inside a supplier's product or hosted service.
8. **Set confidence honestly.** Use `known` only when every applicable algorithm cell names a specific algorithm or scheme, such as X25519MLKEM768 or ECDSA P-256, rather than "TLS" or "encrypted"; otherwise `unknown`. An `unknown` row stays on the inventory with an owner.

A first list of rows is a **first-pass inventory**. With a named owner per row and a place on the [review log](/resources/review-log/), it becomes a **maintained inventory** that the rest of the programme can rely on. Record the discovery methods used for each row in its `how found` cell, so a reviewer can judge coverage.

The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) urges organisations to build an inventory of quantum-vulnerable cryptography and to ask technology vendors about it.

## Keep this evidence

The [inventory record](/resources/inventory-record/), with every column filled, marked `unknown`, or marked `not applicable`, including how each row was found, and the review-log entry showing when the inventory was last reviewed.

## Example

An insufficient record is "Our TLS scan found no issues."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), lists four rows:

- **the supplier-hosted product-design archive:** 15-year confidentiality under company policy, with cryptography marked as supplier-hosted and not visible to a scan;
- **the product sensor's firmware verifier:** key establishment `not applicable`, and a boot ROM trust anchor a scan cannot see;
- **the key that signs the sensor's firmware:** its own row, because step 3 lists firmware-signing keys among the keys to find, with where it is stored still to record;
- **the office laptops.**

Every algorithm the manufacturer has not verified is `unknown`, and each row names its owner.

## Limits and next step

The inventory records what exists; it does not decide order or algorithms. Large estates may need specialist discovery tooling and support. Next, [decide what to migrate first](/migration-practices/priority/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Inventory record](/resources/inventory-record/)
- [Decide what to migrate first](/migration-practices/priority/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [NCCoE Migration to PQC](/standards/migration-guides/nccoe-migration-to-pqc/)
