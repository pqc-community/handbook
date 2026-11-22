---
title: HSMs and key management
sidebar_label: HSMs and key management
displayed_sidebar: technologyOptionsSidebar
description: What to check in hardware security modules, cloud key management services and TPMs before any other post-quantum change depends on them, and the traps in validation and lead times.
---

## What it is

Hardware security modules (HSMs), cloud key management services (KMS), and Trusted Platform Modules (TPMs) generate, hold, and use keys for every other job: certification authorities, code signing, TLS servers, and storage encryption. They are not a job of their own; they are often the dependency that decides when the other jobs can move.

## Post-quantum options and status

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, says hardware modules such as HSMs and TPMs must be upgraded or redesigned to support post-quantum algorithms, and that, given long lead times for hardware, it is a high priority for vendors to start integrating support now. Module validation for US federal use is under [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/) (22 March 2019); NIST IR 8547 says NIST will accommodate hybrid key establishment and dual signatures in FIPS 140 validation when they are suitably combined with a NIST-approved scheme.

| What to establish | Why |
| --- | --- |
| Which post-quantum algorithms the module or service supports, by firmware or service release | It sets what the CA, signing pipeline, or server can use |
| Whether that support is validated, and the certificate that says so, where validation is required | Support and validation arrive at different times |
| Whether it can manage signing state for LMS or XMSS, if you need those | State errors break hash-based signing |
| Throughput and key sizes for the new algorithms | Larger keys and signatures affect capacity |

## Who usually chooses

The HSM or cloud provider decides what the module supports and when; you decide when to upgrade firmware, change service tiers, or replace hardware.

## What good looks like

- Each HSM, KMS, and TPM model on the [inventory](/resources/inventory-record/), named in the `dependencies` of each key and system that relies on it.
- A `complete` supplier answer for every module the plan depends on.
- Firmware upgrades or replacements scheduled ahead of the PKI, signing, and server work that depends on them, allowing for hardware lead times.

## What to ask or test

- The supplier's written answer on supported algorithms, releases, and validation status, recorded on the [vendor response log](/resources/vendor-response-log/).
- Whether a firmware upgrade is enough or new hardware is needed, and the replacement lead time.
- A test key generation and signing or decapsulation with the new algorithm in a non-production partition, account, or test device.

## Traps

- **Supported is not validated.** Where you need a validated module, check the validation, not the datasheet.
- **Hardware refresh cycles.** An HSM that needs replacing can hold up the PKI and code-signing work behind it.
- **Keys that cannot be exported** have to be regenerated in the new module, with everything that trusts them updated.

## Record it fills

An [inventory](/resources/inventory-record/) row for each HSM or KMS, named in the `dependencies` cell of every key and system that relies on it; the module's upgrade or replacement as a dependency on the [migration plan](/resources/migration-plan/) lines it blocks.

## Example

An insufficient record is "Our HSMs are quantum-ready."

From [Protect this first](/resources/protect-this-first/): where the key that signs the product sensor's firmware is held is still to be recorded. A decision-ready record would name the HSM, its firmware release, the post-quantum signature schemes it supports and their validation status, and whether it can manage state if the sensor's verifier needs LMS or XMSS.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Security Requirements for Cryptographic Modules, FIPS 140-3, 22 March 2019. [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final)

## Related pages

- [PKI and certificates](/technology-options/pki/)
- [Code and software signing](/technology-options/code-signing/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Work with suppliers](/migration-practices/suppliers/)
