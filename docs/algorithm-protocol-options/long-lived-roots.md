---
title: Long-lived roots of trust
sidebar_label: Long-lived roots
sidebar_position: 5
displayed_sidebar: algorithmProtocolOptionsSidebar
last_reviewed: 2026-11-10
description: When a verifier cannot be updated later and the device will remain in use, record the procurement checklist and the authority for the root-of-trust work.
---

## When this applies

A firmware or hardware root of trust will remain in the field, and the organisation suspects the verifier cannot accept a new trust anchor or signature algorithm after deployment.

## Do this

Run the applicability test, then complete the procurement checklist.

**Applicability test**

**Handbook practice:** Confirm both conditions: the verifier cannot be updated later in the field, and the device will remain in use while the organisation still cares about the integrity of the signed code.

**Procurement checklist**

**Handbook practice:** Record verifier updateability, device lifetime, signing chain, replacement options, stateful-key controls, and supplier commitments before the product is locked for production.

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says that in those cases the devices should be designed to require quantum-resistant signatures on the executable code. It says stateful hash-based schemes, LMS and XMSS in SP 800-208, are not for general use because, per NIST, the signer must never use a one-time key twice, and that they may be useful for software and firmware signing.

**Authority recommendation:** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, list LMS and XMSS as algorithms with a more limited set of uses, and the 2028 plan row includes long-lived hardware roots of trust.

**Handbook practice:** SLH-DSA in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) is the stateless hash-based signature named on this page when a stateful scheme is not appropriate. Record which authority defends the construction next to the product decision.

## Keep this evidence

The procurement checklist, the product decision, the lifetime, and the algorithm family.

## Example

An insufficient record is "We will patch the boot check later."

A decision-ready record states that the field device cannot update the verifier, cites the UK NCSC timelines modified 3 August 2026 for the 2028 plan row that includes long-lived hardware roots of trust, names the firmware-signing construction the cited NIST guidance allows, and records how state is controlled if the scheme is stateful.

## Limits and next page

General signature coordination stays on [Signatures](/algorithm-protocol-options/signatures/). The next page is [Release dates](/migration-practices/release-dates/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Signatures](./signatures.md)
- [Release dates](../migration-practices/release-dates.md)
- [Vendor plan](../migration-practices/vendor-plan.md)
- [Protect this first](../resources/protect-this-first.md)
