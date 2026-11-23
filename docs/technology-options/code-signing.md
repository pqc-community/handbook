---
title: Code and software signing
search_title: Post-quantum code and software signing
sidebar_label: Code and software signing
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum move looks like for signing packages, updates, containers and pipelines, which schemes fit, and why verifiers move before signers.
---

## What it is

Code signing proves that software packages, updates, scripts, and container images come from you and have not been changed. It is a **signatures** job: a build pipeline or release team signs, and operating systems, package managers, app stores, and update agents verify. This card covers verifiers that can be updated. Where a device's verifier cannot be updated, use [Firmware and secure boot](/technology-options/firmware-secure-boot/).

## Post-quantum options and status

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) treats code signing as a key use case and notes that the devices installing the code need to be able to verify the new signatures. Status as checked on 21 November 2026:

| Part | Option | Status |
| --- | --- | --- |
| Signature algorithm | ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)), SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)), LMS and XMSS ([SP 800-208](/standards/post-quantum/sp-800-208/)) | Final NIST standards |
| Signatures in CMS-based formats | ML-DSA ([RFC 9882](https://www.rfc-editor.org/info/rfc9882)), SLH-DSA ([RFC 9814](https://www.rfc-editor.org/info/rfc9814)), HSS/LMS ([RFC 9708](https://www.rfc-editor.org/info/rfc9708)) | Proposed Standards, 2025 |
| Platform-specific formats | App stores, package managers, container signing | Set by each platform; ask the platform owner |

Pick the scheme with the signature-schemes rule on [Choosing an option](/technology-options/choosing/): ML-DSA unless an applicable authority requires a hash-based scheme or every verifier supports only one; among hash-based schemes, SLH-DSA unless you can control signing state for LMS or XMSS.

## Who usually chooses

You choose for your own pipeline, within what your signing tools and [HSMs](/technology-options/hsm-kms/) support. Platform owners choose which algorithms their verifiers accept, so your choice has to fit theirs.

## What good looks like

1. **Know every verifier** of your signatures and when each can accept the new algorithm.
2. **Ship the verifier update first, signed with the current key**, then switch signing once verifiers are ready; keep the old signature acceptable until they have all moved.
3. **Give each signing key its own [inventory](/resources/records/inventory/) row**, recording where it is held, such as the hardware security module, in `dependencies`.
4. **If you choose LMS or XMSS, show how state is controlled**: one signing system, an index that is never reused, and backups that can never roll the state back.

## What to ask or test

- Which post-quantum signature schemes your signing tools and HSMs support, and from which release.
- For each platform and update agent that verifies your signatures, which algorithms it accepts and from which release, asked of the platform owner in writing.
- Whether a test signature verifies on each class of verifier, including older releases still in the field, before signing switches.
- How long verifiers will keep accepting signatures made with the old algorithm.

## Traps

- **Signing before verifiers can check** breaks installs and updates in the field.
- **A signer checked by a non-updatable verifier** moves with that verifier's line on the plan; it cannot switch on its own timetable.
- **Restoring a stateful signing key from backup** can reuse one-time keys and break LMS or XMSS security.
- **Old signatures on long-lived software** still need to verify after the switch; check how long verifiers keep accepting them.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/records/inventory/) | A row per signing key, with where it is held, such as the HSM, in `dependencies` |
| [Vendor response log](/resources/records/vendor-response-log/) | Answers from platform owners and from signing-tool and HSM suppliers |
| [Migration plan](/resources/records/migration-plan/) | The signatures line, with verifiers in `dependencies` in the order they move |
| [Change record](/resources/records/change-record/) | The scheme, the authority, and tests on each class of verifier |

## Example

An insufficient record is "We'll sign with ML-DSA from the next release."

A decision-ready record names the signing key and the HSM that holds it, lists the operating systems and update agents that verify, with the release in which each accepts ML-DSA, and records that the verifier update ships, signed with the current key, two releases before signing switches.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- IETF, Use of the ML-DSA Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9882, October 2025. [RFC 9882](https://www.rfc-editor.org/info/rfc9882)
- IETF, Use of the HSS/LMS Hash-Based Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9708, January 2025. [RFC 9708](https://www.rfc-editor.org/info/rfc9708)
- IETF, Use of the SLH-DSA Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9814, July 2025. [RFC 9814](https://www.rfc-editor.org/info/rfc9814)

## Related pages

- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Hash-based signatures](/learn/explainers/hash-based-signatures/)
- [HSMs and key management](/technology-options/hsm-kms/)
- [Choosing an option](/technology-options/choosing/)
