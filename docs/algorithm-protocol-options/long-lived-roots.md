---
title: Long-lived roots of trust
sidebar_label: Long-lived roots
sidebar_position: 5
displayed_sidebar: algorithmProtocolOptionsSidebar
description: A firmware or trust root needs a post-quantum signature now if it cannot update that check later and will still be in use when a cryptanalytically relevant quantum computer exists.
---

A firmware or trust root that cannot update its signature check later has to be designed for a post-quantum signature now, if it will still be in use when a cryptanalytically relevant quantum computer exists.

## What can go wrong

A general-purpose stateful scheme without a way to control the state, or a root of trust left on a signature the device can never replace.

## A stronger practice

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says that in those cases the devices should be designed to require quantum-resistant signatures on the executable code. It says stateful hash-based schemes, LMS and XMSS in SP 800-208, are not for general use because the signer must never use a one-time key twice, and that they may be useful for software and firmware signing.

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, list LMS and XMSS as algorithms with a more limited set of uses, and the 2028 plan row includes long-lived hardware roots of trust.

SLH-DSA is the stateless hash-based signature. It is named here and does not have its own page. This edition does not link FIPS 205 and does not reprint parameters.

[Secure OTA updates](https://www.securebydesignhandbook.com/docs/implementation/build-phase/ota-updates) is the update path this book does not re-explain. That link is not the authority for the post-quantum clock.

## What to ask

Can this device update its verifier in the field?

## Evidence

The product decision, the lifetime, and the algorithm family, written down.

## A weak answer

"We will patch the boot check later."

## A stronger answer

"This product cannot update the verifier. The 2028 plan includes the root of trust. We are using a firmware-signing construction the cited guidance allows, and we have said how state is controlled if the scheme is stateful."

## Which pass

The UK NCSC 2028 plan row includes long-lived hardware roots of trust. The product decision, the lifetime, and the algorithm family are written down in that early plan.

## Options

NIST IR 8547 allows stateful hash-based schemes, LMS and XMSS, for software and firmware signing, and says they are not for general use because the signer must never use a one-time key twice. The NCSC timelines list LMS and XMSS as algorithms with a more limited set of uses. SLH-DSA is the stateless hash-based signature and stays on this page. Who defends the choice is the authority you write next to the product decision.

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Signatures](./signatures.md)
- [Product release dates](../start-here/product-release-dates.md)
- [Vendor plan](../migration-practices/vendor-plan.md)
