---
title: Post-quantum key establishment
sidebar_label: Key establishment
displayed_sidebar: technologyOptionsSidebar
last_reviewed: 2026-11-10
description: The confidentiality job where harvest-now, decrypt-later applies. List channels, record the construction, and carry the fields onto the change record.
---

## When this applies

The priority record marks key establishment for a system whose data confidentiality period is long enough that recorded traffic or stored ciphertext remains sensitive after a migration date.

## Do this

1. List the channels that carry that confidentiality period: TLS, VPN, SSH, and email, including recorded network sessions and encrypted email where they apply.
2. For each channel, name the component that negotiates keys and the supplier that ships or hosts it.
3. On the [change record](/resources/change-record/), record compatibility, performance, testing, and deployment for the construction you will run in production.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, explains that harvest-now, decrypt-later applies where a public-key scheme establishes symmetric keys that protect confidentiality — including recorded network sessions and encrypted email — rather than authentication. At the time of that report, NIST names ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) as the approved post-quantum public-key key-establishment scheme and recommends ML-KEM-768 as the default parameter set (other parameter sets remain in FIPS 203 and NIST IR 8547).

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, note that popular browsers already negotiate post-quantum keys using a hybrid of classical key exchange and ML-KEM, while an exact industry-wide profile was still maturing at publication.

The option and authority recorded on [Choosing an option](/technology-options/choosing/) govern whether this channel uses a hybrid or post-quantum-only construction. Signatures on the same product are tracked separately on [Signatures](/technology-options/signatures/).

## Keep this evidence

The [change record](/resources/change-record/) fields for compatibility, performance, testing, deployment, and the deployed-state check.

## Example

An insufficient record is "TLS is done organisation-wide."

A decision-ready record names the VPN that carries the clinic health records as the first key-establishment channel, records the supplier and component, names NIST IR 8547, October 2026, as the authority for ML-KEM-768 as the default parameter set, notes that the firmware check is blocked until an option is known, and notes that long-lived roots comes before a signature choice.

## Limits and next page

Leave protocol configuration for the product documentation. The next record is the [change record](/resources/change-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Choosing an option](./choosing.md)
- [Signatures](./signatures.md)
- [Priority](../migration-practices/priority.md)
- [Implementation](../migration-practices/implementation.md)
