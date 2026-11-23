---
title: Inventory the cryptography
search_title: Build a cryptographic inventory for PQC migration
sidebar_label: Inventory the cryptography
description: List public-key cryptography system by system, with several discovery methods, including embedded and supplier-controlled cryptography a scanner misses.
displayed_sidebar: journeySidebar
---

## When this applies

At least one of the [four questions](/plan/) applies, and you need to know where public-key cryptography is used before prioritising, planning, or claiming that anything has migrated. Start with the systems the questions found.

## Who does what

- The **migration lead** sets the scope, keeps the [register](/templates/records/register/), and chases unknowns.
- **System owners** confirm each row for their systems.
- **Operations** runs scans, log reviews, and configuration checks.
- **Procurement** asks suppliers for what cannot be seen from inside the organisation (see [Work with suppliers](/plan/programme/suppliers/)).

## Do this

1. **Start where the risk is.** List each system that holds sensitive or long-lived data, exposes an external connection, operates signing infrastructure, or contains a device or product that verifies signatures. Add the rest later.
2. **Make a minimum first pass before anything else.** For each system from step 1, ask its owner what it does with public-key cryptography; export the certificate list from your certificate authority or certificate manager, if you have one; and, where a supplier controls the system, send the supplier the questions in [Work with suppliers](/plan/programme/suppliers/). Mark everything you cannot confirm as unknown. That is enough to start deciding what to migrate first; supplier answers can follow, and the methods below fill the gaps over time.
3. **Add further discovery methods as you go**, because each one misses something:
   - **connections**: certificate and TLS scans, plus server or load-balancer logs that show which key-exchange groups and signature algorithms are actually negotiated;
   - **certificates**: internal certificate authority issuance records and certificate transparency logs for public certificates;
   - **software**: library and dependency scans, software bills of materials, and code review for direct use of cryptographic APIs;
   - **keys**: hardware security module and key management service inventories, SSH host and user keys, and code-signing and firmware-signing keys;
   - **stored data**: backups and archives whose keys are wrapped or encrypted to a public key;
   - **products and services**: supplier documentation and written answers for what you cannot inspect.
4. **Record one row per system and job** on the register, naming each system, service, product, or key the same way on every row, and giving key establishment and signatures separate rows. In each row, record what protects that job today. A cell can hold several values: a TLS endpoint's key-establishment row may list its key-exchange groups, and its signature row its handshake signature and certificate-chain algorithms. A system that does only one job, such as a firmware verifier that only checks signatures, has only that row.
5. **Give a public-key infrastructure you operate its own rows.** A certificate authority, its signing keys and hardware security modules, and the services that publish revocation information have their own algorithms and lifetimes. For a certificate authority you only consume, or a shared library, name it in the next step of the rows that depend on it, so a change to it is not missed.
6. **Record what decides urgency**: who controls the software (`supplier`), the data confidentiality period (`why it is here`), the renewal or refresh date (`dates that apply`), and the version where known.
7. **Mark what a scan cannot see**, including embedded firmware, hardware-bound keys, boot trust anchors, and cryptography inside a supplier's product or hosted service.
8. **Be honest about what is known.** Treat a row as known only when what protects it today names a specific algorithm or scheme, such as X25519MLKEM768 or ECDSA P-256, rather than "TLS" or "encrypted"; otherwise record unknown. An unknown row stays on the register with an owner.

A first list of rows is a **first-pass inventory**. With a named owner and a next review date on each row, it becomes a **maintained inventory** that the rest of the programme can rely on. Keep a note of the discovery methods used for each system, so a reviewer can judge coverage.

The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) urges organisations to build an inventory of quantum-vulnerable cryptography and to ask technology vendors about it.

## Keep this evidence

The [register](/templates/records/register/), with every cell filled, marked unknown, or marked not applicable; a note of the discovery methods used; and each row's next review date, showing when the inventory will next be checked.

## Example

An insufficient record is "Our TLS scan found no issues."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/), lists four systems on six rows:

- **the supplier-hosted product-design archive:** 15-year confidentiality under company policy, with cryptography supplier-hosted and not visible to a scan, and separate rows for connections, stored data, and signatures;
- **the product sensor's firmware verifier:** a single non-updatable verifier row, with a boot ROM trust anchor a scan cannot see;
- **the key that signs the sensor's firmware:** its own row, as one of the keys found in step 3; where the key is held is still to be recorded;
- **the office laptops:** one row for both jobs, covered by the core actions.

Every algorithm the manufacturer has not verified is `unknown`, and each row names its owner.

## Limits and next step

The inventory records what exists; it does not decide order or algorithms. Large estates may need specialist discovery tooling and support. Next, [decide what to migrate first](/plan/programme/priority/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Register](/templates/records/register/)
- [Decide what to migrate first](/plan/programme/priority/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [NCCoE Migration to PQC](/standards/migration-guides/nccoe-migration-to-pqc/)
