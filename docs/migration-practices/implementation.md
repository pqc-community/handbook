---
title: Make and verify one change
sidebar_label: Make and verify one change
description: Pilot, test, cut over, and verify one post-quantum change with a rollback trigger and evidence, handling key establishment, signature chains, and non-updatable verifiers differently.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

An option has been chosen for one system, with the standard or authority it follows recorded (see [Choosing an option](/technology-options/choosing/)), and the system is next in the plan.

## Who does what

- The **asset owner** owns the change and decides whether it is complete.
- **Operations** runs the pilot, the cutover, any rollback, and the deployed-state check.
- The **supplier** provides the release and support where the change is in their product.
- The **migration lead** updates the plan and the evidence record.

## Do this

1. **Name the pilot scope**: which environment, which users, clients, or devices, and which data.
2. **Name the tests**, including:
   - **interoperability** with every party that connects, including clients and partners you do not manage;
   - **network equipment in the path**: load balancers, firewalls, inspection proxies, and intrusion-detection systems may mishandle larger handshakes or strip unfamiliar options;
   - **performance and size effects**: handshake size and latency, CPU and hardware security module throughput, certificate chain size, and, for firmware, image size and boot time;
   - **failure behaviour**: what a client does when the new option is refused.
3. **Write the rollback trigger and who may invoke it** before the pilot starts, including a silent fallback to classical-only cryptography as a trigger, not just an outage.
4. **Write the cutover communication** for users, operations, and any connected parties.
5. **Write how the deployed state will be checked in production**, by inspection rather than by a supplier statement. Examples: server or load-balancer logs showing the negotiated key-exchange group, a client-side check against the production endpoint, certificate inspection, or the verifier's accepted-key list. Then watch over time for fallback to classical-only connections.
6. **Record the result honestly.** A result of `unknown` means the change is not closed. A passed pilot is not a production migration.

**Handle each job differently.**

- **Key establishment.** Changes are negotiated per connection, so they can often be rolled back by configuration. The risk is in the path: unmanaged clients and network equipment that may fail or quietly fall back. Hybrid constructions are designed for this period; [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) describes them as typically temporary measures. See [Key establishment](/technology-options/key-establishment/) and [RFC 10024](/standards/modules-protocols-identity/rfc-10024/) for the hybrid groups defined for TLS 1.3.
- **Signatures.** Signers, certificate authorities, and every relying party that verifies must move in a coordinated order. Verifiers must accept the new signatures before signers switch, and new trust anchors take time to distribute. Once relying parties depend on a new chain, rollback is harder than for key establishment, so plan dual or overlapping chains and certificate lifetimes before cutover. See [Signatures](/technology-options/signatures/) and [Why signatures affect more than the signer](/learn/explainers/signature-dependencies/).
- **Verifiers that cannot be updated.** Resolve these before a product's design freeze. Check the signature size and boot-time effects against the device's storage and timing. If you choose a stateful hash-based scheme, confirm you can manage its signing state: NIST IR 8547 says these schemes need strict operational controls and are not intended for general use. If no supported option exists yet, record the change as blocked rather than guessing (see [Long-lived roots](/technology-options/long-lived-roots/)). For devices already in the field, record a retirement or replacement plan and any compensating controls in the [migration plan](/resources/migration-plan/).

## Keep this evidence

The [change record](/resources/change-record/) for the change — system, change, option, authority, pilot scope, tests, rollback trigger and who may roll back, deployed-state check, result, and date — and an [evidence record](/resources/evidence-record/) that states exactly what has been shown and what has not, citing the test and inspection evidence rather than the standard.

## Example

An insufficient record is "We enabled PQC."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), shows the product-design archive's staging pilot of Workspace 4.2:

- **option:** hybrid X25519MLKEM768 for TLS connections, recorded against FIPS 203;
- **pilot:** a test client connects, the supplier's connection log shows X25519MLKEM768 negotiated, and an authorised test account retrieves sample files;
- **rollback triggers:** failed retrieval, or a classical-only connection;
- **result:** the staging pilot passed on 2026-10-21. Production rollout is pending, and production connection logs will be inspected after rollout.

A blocked record is the product sensor's firmware verifier. The signature and trust-root option is `unknown`, so no test is claimed. Rollback is `not applicable`, because the boot ROM cannot change after shipment. The change stays blocked until a supported option can be tested before the design freeze on 2027-06-30.

## Limits and next step

Protocol and product configuration belong in product documentation and specialist hands; this page records the change and how it was proved, not the settings. Next, [keep the ability to change again](/migration-practices/changing-algorithms-again/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)

## Related pages

- [Change record](/resources/change-record/)
- [Evidence record](/resources/evidence-record/)
- [Choosing an option](/technology-options/choosing/)
- [Keep the ability to change again](/migration-practices/changing-algorithms-again/)
