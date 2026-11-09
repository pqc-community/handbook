---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
sidebar_position: 2
displayed_sidebar: algorithmProtocolOptionsSidebar
description: "For this system, which of four options applies: hybrid, pure post-quantum, wait for a vendor update, or do nothing yet."
---

For this system, which of four options applies: hybrid, pure post-quantum, wait for a vendor update, or do nothing yet.

## What can go wrong

Calling one of them required for every reader, when the filed guides do not agree. A sentence that fits one authority is then treated as a product requirement for every organisation.

## A stronger practice

Each option has an authority that defends it. Record which one you are following.

**Hybrid.** The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), 11 June 2025, says it is recommended to use standardised and tested hybrid solutions whenever feasible and suitable, and that for high-risk use cases quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030.

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) says Germany, France, and the Netherlands advocate deployment of PQC in hybrid combinations with established cryptography, and that the UK recommends hybridisation only when absolutely necessary.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says hybrid solutions are often a hedge, add complexity, and are typically a temporary measure on the way to post-quantum-only tools. NIST intends to accommodate hybrid techniques where their use is desired. For dual signatures, existing NIST standards and guidelines accommodate their use provided that at least one component digital signature algorithm is NIST-approved. For a composite key-establishment technique, the combination can be FIPS 140-validated when at least one input comes from an approved key-establishment scheme, even if other inputs are disallowed. This page does not print a parameter table.

**Pure post-quantum.** NIST IR 8547 says hybrid solutions are typically a temporary measure on the way to post-quantum-only tools. Handbook guidance: that sentence is not a product requirement for every reader.

**Wait for a vendor update.** Waiting for a vendor update is the [UK NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) path for commodity IT: browsers, operating systems, and mobile devices pick up the change from the vendor. Custom software does not.

**Do nothing yet.** Doing nothing yet matches the Dutch handbook's regular adopters, who do not need to react yet. The same handbook advises an organisation on the boundary between urgent and regular to follow Section 3.2, which gives further guidelines on when to start migrating particular assets. Long-lived sensitive data is the urgent case. See [Priority](../migration-practices/priority.md).

The Dutch handbook advises against relying on the security of quantum key distribution for the time being. Quantum random-number generators are outside this book. [ETSI TR 103 619](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf) sets them aside with quantum key distribution.

FIPS 203, FIPS 204, and FIPS 205 are the NIST algorithm standards named by the UK NCSC timelines (ML-KEM, ML-DSA, and SLH-DSA). This edition does not link them and does not reprint their parameters.

## What to ask

Which of the four options applies to this system, and which authority defends it? Is the system commodity IT, custom software, a high-risk confidentiality case, or a regular adopter with none of those?

## Evidence

The option, the authority, and the date of that authority, written on the system in the inventory.

## A weak answer

"Hybrid is required."

## A stronger answer

"For this high-risk confidentiality system we are following the EU roadmap and will not leave a quantum-vulnerable public-key mechanism standing alone after 2030. For the commodity laptops we are waiting for the vendor update, which is the NCSC path."

## Which pass

This choice comes after the inventory and the priority. It is the option for a system the first pass has already listed. [Changing algorithms again](../migration-practices/changing-algorithms-again.md) is how a later pass can change it.

## Options

The four options are the page. Who defends each one is in the practice above. Do not treat one authority's sentence as a product requirement for every reader.

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- ETSI TR 103 619. [Report](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Key establishment](./key-establishment.md)
- [Signatures](./signatures.md)
- [Vendor plan](../migration-practices/vendor-plan.md)
- [Keep software updated](../start-here/keep-software-updated.md)
