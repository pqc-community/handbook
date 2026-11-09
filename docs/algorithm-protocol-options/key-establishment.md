---
title: Key establishment
sidebar_label: Key establishment
sidebar_position: 3
displayed_sidebar: algorithmProtocolOptionsSidebar
description: The confidentiality job. Harvest-now, decrypt-later applies here, not to authentication.
---

This is the confidentiality job.

## What can go wrong

Treating key establishment as the same project as signatures. Recorded traffic can wait on one clock while the people who must change a signature wait on another.

## A stronger practice

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says harvest-now, decrypt-later applies where symmetric keys established by a public-key scheme protect confidentiality, including recorded network sessions and encrypted email. It says authentication is not that problem. It says ML-KEM, specified in FIPS 203, is at this time the only approved post-quantum key-establishment scheme based on public-key cryptography, and it recommends ML-KEM-768 as the default parameter set. This page does not reprint the other parameter sets. ML-KEM is the NIST key-establishment algorithm.

The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, say popular browsers can agree a post-quantum key using a hybrid of traditional key exchange and ML-KEM, and that an exact industry-wide mechanism was not yet standardised, so further updates can be expected.

Device key handling is onward reading in the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/technology-options/signing-keys-credentials/). Key provisioning is onward reading in the [Secure-by-Design Handbook](https://www.securebydesignhandbook.com/docs/implementation/build-phase/key-provisioning). Those links are not the authority for the post-quantum clock.

## What to ask

Which channels carry data with a long secrecy life, and who configures the key establishment?

## Evidence

A configuration or a vendor page that shows the construction in use, stored on the tracking sheet in [Vendor questions](../resources/vendor-questions.md).

## A weak answer

"TLS is done."

## A stronger answer

"The VPN that carries the health records is the first key-establishment item. Signatures on the firmware are a separate item."

## Which pass

This is the confidentiality item the first pass selects on [Priority](../migration-practices/priority.md). Signatures are not closed because this channel moved.

## Options

The construction in use may be hybrid or post-quantum, depending on the authority you recorded on [Choosing an option](./choosing.md). NIST IR 8547 recommends ML-KEM-768 as the default parameter set and does not, on this page, become a table of the other sets. The NCSC timelines describe a hybrid of traditional key exchange and ML-KEM in popular browsers, with further updates expected.

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Priority](../migration-practices/priority.md)
- [Signatures](./signatures.md)
- [Choosing an option](./choosing.md)
- [Vendor plan](../migration-practices/vendor-plan.md)
