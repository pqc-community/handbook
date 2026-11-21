---
title: Post-quantum key establishment
sidebar_label: Key establishment
displayed_sidebar: technologyOptionsSidebar
description: The confidentiality job where harvest-now, decrypt-later applies. List channels, record the construction, and carry the fields onto the change record.
---

## When this applies

The migration plan orders key establishment first for a system whose data confidentiality period is long enough that recorded traffic or stored ciphertext remains sensitive after a migration date.

## Do this

1. List the channels that carry that confidentiality period: TLS, VPN, SSH, and email, including recorded network sessions and encrypted email where they apply.
2. For each channel, name the component that negotiates keys and the supplier that ships or hosts it.
3. On the [change record](/resources/change-record/), record compatibility, performance, testing, and deployment for the construction you will run in production.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, explains that harvest-now, decrypt-later applies where a public-key scheme establishes symmetric keys that protect confidentiality — including recorded network sessions and encrypted email — rather than authentication. At the time of that report, NIST names ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) as the approved post-quantum public-key key-establishment scheme and recommends ML-KEM-768 as the default parameter set (other parameter sets remain in FIPS 203 and NIST IR 8547).

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), published and reviewed 20 March 2025, note that popular browsers already negotiate post-quantum keys using a hybrid of classical key exchange and ML-KEM, while an exact industry-wide profile was still maturing at publication.

The option and authority recorded on [Choosing an option](/technology-options/choosing/) govern whether this channel uses a hybrid or post-quantum-only construction. Signatures on the same product are tracked separately on [Signatures](/technology-options/signatures/).

## Keep this evidence

The [change record](/resources/change-record/) fields for compatibility, performance, testing, deployment, and the deployed-state check.

## Example

An insufficient record is "TLS is done organisation-wide."

A decision-ready record names the supplier-hosted product-design archive as the first key-establishment system, records the supplier's ML-KEM-768 option against FIPS 203, gives the manufacturer's 15-year confidentiality requirement as its reason for priority, and keeps the product sensor's unknown verifier option blocked for separate review.

## Limits and next page

Leave protocol configuration for the product documentation. The next record is the [change record](/resources/change-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Choosing an option](./choosing.md)
- [Signatures](./signatures.md)
- [Decide what to migrate first](../migration-practices/priority.md)
- [Make and verify one change](../migration-practices/implementation.md)
