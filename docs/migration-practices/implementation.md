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

1. **Name the pilot scope**: which environment, which users or devices, and which data.
2. **Name the tests**: interoperability with every party that connects, performance and size effects, and failure behaviour.
3. **Write the rollback trigger and who may invoke it** before the pilot starts.
4. **Write the cutover communication** for users, operations, and any connected parties.
5. **Write how the deployed state will be checked**: what you will inspect in production, not just in staging, to show the construction is in use.
6. **Record the result honestly.** A result of `unknown` means the change is not closed. A passed pilot is not a production migration.

**Handle each job differently.**

- **Key establishment** changes are usually within one system and its connections. The question is interoperability with every party that connects; hybrid key establishment is common during transition (see [Key establishment](/technology-options/key-establishment/)).
- **Signature changes** need signers, certificate authorities, and every relying party that verifies to move in a coordinated order. Check that verifiers accept the new signatures before signers switch (see [Signatures](/technology-options/signatures/) and [Why signatures affect more than the signer](/learn/explainers/signature-dependencies/)).
- **Verifiers that cannot be updated** must be resolved before a product's design freeze. If no supported option exists yet, record the change as blocked rather than guessing (see [Long-lived roots](/technology-options/long-lived-roots/)).

## Keep this evidence

The [change record](/resources/change-record/) for the change — system, change, option, authority, pilot scope, tests, rollback trigger and who may roll back, deployed-state check, result, and date — and an [evidence record](/resources/evidence-record/) that states exactly what has been shown and what has not.

## Example

An insufficient record is "We enabled PQC."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), shows the product-design archive's staging pilot of Workspace 4.2. The option is ML-KEM-768, the supplier's choice recorded against FIPS 203. An authorised test account retrieves sample files, and failed retrieval is the rollback trigger, which the product engineering lead may invoke with supplier support. The deployed-state check is the supplier's release record. The record shows the pilot passed on 2026-10-21 with production rollout pending, and the evidence record says exactly that.

A blocked record is the product sensor's firmware verifier. The signature and trust-root option is `unknown`, so no test is claimed and the change stays blocked until a supported option can be tested before design freeze.

## Limits and next step

Protocol configuration belongs in product documentation and specialist hands; this page records the change, not the settings. Next, [keep the ability to change again](/migration-practices/changing-algorithms-again/).

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Change record](/resources/change-record/)
- [Evidence record](/resources/evidence-record/)
- [Choosing an option](/technology-options/choosing/)
- [Keep the ability to change again](/migration-practices/changing-algorithms-again/)
