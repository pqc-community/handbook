---
title: Long-lived roots of trust
sidebar_label: Long-lived roots
displayed_sidebar: technologyOptionsSidebar
description: When a verifier cannot be updated later and the device will remain in use, record the procurement checklist and the authority for the root-of-trust work.
---

## When this applies

A firmware or hardware root of trust will remain in the field, and the organisation suspects the verifier cannot accept a new trust anchor or signature algorithm after deployment.

## Do this

Run the applicability test, then complete the procurement checklist.

**Applicability test**

Confirm both conditions: the verifier cannot be updated later in the field, and the device will remain in service while the integrity of signed code still matters.

**Procurement checklist**

Before locking the product for production, record verifier updateability, device service life, signing chain, replacement options, stateful-key controls, and supplier commitments.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, advises designing such devices to require quantum-resistant signatures on executable code. It notes that stateful hash-based schemes — LMS and XMSS in [NIST SP 800-208](/standards/post-quantum/sp-800-208/) — are unsuitable for general use because the signer must never reuse a one-time key, though they can suit tightly controlled software and firmware signing. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), published and reviewed 20 March 2025, likewise classify LMS and XMSS as specialist options and include long-lived hardware roots of trust in the 2028 planning milestone. Where stateful key management is impractical, SLH-DSA in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) provides a stateless hash-based alternative; record the supporting authority alongside the product decision.

## Keep this evidence

The procurement checklist, the product decision, the lifetime, and the algorithm family.

## Example

An insufficient record is "We will patch the boot check later."

A decision-ready record states that the field device cannot update the verifier, cites the UK NCSC timelines published and reviewed 20 March 2025 for the 2028 plan row that includes long-lived hardware roots of trust, names the firmware-signing construction the cited NIST guidance allows, and records how state is controlled if the scheme is stateful.

## Limits and next page

General signature coordination stays on [Signatures](/technology-options/signatures/). The next page is [Plan the migration](/migration-practices/plan/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Signatures](./signatures.md)
- [Plan the migration](/migration-practices/plan/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Protect this first](../resources/protect-this-first.md)
