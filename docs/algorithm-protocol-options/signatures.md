---
title: Post-quantum signatures
sidebar_label: Signatures
displayed_sidebar: algorithmProtocolOptionsSidebar
last_reviewed: 2026-11-10
description: A many-party migration coordinated across signers, verifiers, PKI, trust stores, clients, firmware, and relying parties.
---

## When this applies

The priority record marks signatures, or a verifier that can still be updated, and the organisation is ready to list every party that needs to move together.

## Do this

1. List the signers, verifiers, the PKI (the public-key infrastructure that issues and checks certificates), trust stores, clients, firmware, and relying parties that depend on the current signature algorithm or trust anchor.
2. Write the dependency and test checklist: who moves in which order, what interoperability tests run before cutover, and what rollback looks like if a party cannot move on the same date.
3. If the verifier cannot be updated later, stop this checklist and open [Long-lived roots](/algorithm-protocol-options/long-lived-roots/) instead.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, notes that while digital signatures are not vulnerable to harvest-now, decrypt-later, planning remains urgent because signature transitions take longer and require coordination across relying parties and PKI; an authentication system remains secure until the signature algorithm can be broken at the time of verification. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) specifies ML-DSA and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specifies SLH-DSA, where full parameter tables are published.

## Keep this evidence

The dependency and test checklist, with owners and target dates for each party.

## Example

An insufficient record is "Signatures can wait until a quantum computer exists."

A decision-ready rollout checklist for the clinic's field-device firmware covers the firmware build pipeline, the trust anchor in field devices, the workshop test harness, and the operations lead who signs release manifests — recording which party moves first, the pilot device result, and the date the spare workshop device is due to pass verification before deployment.

## Limits and next page

Recorded-traffic confidentiality stays on [Key establishment](/algorithm-protocol-options/key-establishment/). The next page is [Long-lived roots](/algorithm-protocol-options/long-lived-roots/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Long-lived roots](./long-lived-roots.md)
- [Key establishment](./key-establishment.md)
- [Priority](../migration-practices/priority.md)
- [Release dates](../migration-practices/release-dates.md)
