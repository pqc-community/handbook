---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
sidebar_position: 2
displayed_sidebar: algorithmProtocolOptionsSidebar
last_reviewed: 2026-11-10
description: Branch on system type, lifetime, jurisdiction, updateability, supplier control, and compatibility, then record the authority before implementation.
---

## When this applies

A system is already on the inventory and the priority record, and the reader is ready to name a post-quantum option and the authority that defends it.

## Do this

The reader records the system type, the confidentiality period, whether it can be updated, and who controls the software. The authority decides the timeline, and any hybrid rule, for its own audience. Where a supplier controls the software, the supplier decides the construction and the release date.

Work through these branches in order. None of them chooses the option for the reader; each branch narrows what to record before implementation.

### System type

**Handbook practice:** Classify whether the system is commodity information technology, custom software, embedded cryptography, or a mixed estate.

**Authority recommendation:** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, treat standard browsers, operating systems, and mobile devices as a supplier-update path: migration happens as vendors update those services. Custom software does not sit on that path by default.

### Lifetime

**Handbook practice:** Record the data confidentiality period and whether the asset will still matter after public timelines in your jurisdiction.

**Authority recommendation:** The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), version 1.1, 11 June 2025, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage.

**Authority recommendation:** The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) distinguishes urgent adopters from regular adopters. Long-lived sensitive data sits with urgent adopters. Regular adopters do not need to react yet; an organisation on the boundary between urgent and regular follows Section 3.2 of that handbook for when to start particular assets.

These are policy notes to record, and this page does not choose among them.

### Jurisdiction

**Handbook practice:** Record which timeline and which hybrid or post-quantum guidance applies where the organisation operates and where it sells.

**Authority recommendation:** The EU NIS Cooperation Group roadmap, 11 June 2025, is the European Union government plan for coordinated implementation.

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, is the United States standards timeline for users of NIST standards; it is not a universal deadline for every organisation.

### Updateability

**Handbook practice:** Record whether configuration, trust stores, firmware verifiers, or supplier releases can change after the first deployment.

**Handbook practice:** If the verifier cannot be updated later, send that row to [Long-lived roots](/algorithm-protocol-options/long-lived-roots/) before you treat it as a general signature migration.

### Supplier control

**Handbook practice:** Record who controls the software version, the protocol settings, and the migration date.

**Authority recommendation:** The UK NCSC timelines, modified 3 August 2026, describe the commodity path where the supplier delivers the post-quantum change. Where the organisation configures the channel itself, the option and the test plan are recorded on the organisation's change record.

### Compatibility

**Handbook practice:** Record whether the construction in use is hybrid, post-quantum-only, or awaiting a supplier release, and which authority defends that choice.

**Handbook practice:** Ask whether the protocol, the certificate, and the hardware can carry the larger values, and whether every verifier can be updated together.

These are policy notes to record, and this page does not choose among them.

**Authority recommendation:** The EU NIS Cooperation Group roadmap, 11 June 2025, recommends standardised and tested hybrid solutions whenever feasible and suitable, and states that for high-risk use cases quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030.

**Authority recommendation:** The PQC Migration Handbook, December 2024, reports that Germany, France, and the Netherlands advocate deployment of post-quantum cryptography in hybrid combinations with established cryptography, and that the United Kingdom recommends hybridisation only when absolutely necessary.

**Authority recommendation:** NIST IR 8547, October 2026, says hybrid solutions are often a hedge, add complexity, and are typically a temporary measure on the way to post-quantum-only tools. NIST intends to accommodate hybrid techniques where their use is desired. For dual signatures, existing NIST standards and guidelines accommodate their use provided that at least one component digital signature algorithm is NIST-approved. For a composite key-establishment technique, the combination can be FIPS 140-validated when at least one input comes from an approved key-establishment scheme, even if other inputs are disallowed.

**Authority recommendation:** NIST IR 8547, October 2026, describes post-quantum-only tools as the direction hybrid deployments typically move toward over time.

**Handbook practice:** Record which authority is being followed. Do not treat one authority's sentence as a product requirement for every reader.

**Handbook practice:** Quantum key distribution is set aside for the time being by the PQC Migration Handbook, December 2024, and by [ETSI TR 103 619](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf). Quantum random-number generators are outside this handbook.

**Handbook practice:** [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) names ML-KEM, [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) names ML-DSA, and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) names SLH-DSA. This page does not reprint parameters.

| Job | What the reader records next | Evidence |
| --- | --- | --- |
| Key establishment | The supplier's construction, or the authority's stated default, and the confidentiality period | The inventory row and the authority citation |
| Signatures | Who has to change together | The priority row |
| Non-updatable verifier | Open long-lived roots before choosing a signature | The change record, closed or blocked |

## Keep this evidence

The option, the authority, and the date of that authority, written on the system in the inventory and carried into the change record.

## Example

An insufficient record is "Hybrid is required for everyone."

A decision-ready record states that a high-risk confidentiality system follows the EU NIS Cooperation Group roadmap hybrid guidance dated 11 June 2025, that commodity laptops follow the UK NCSC timelines supplier-update path modified 3 August 2026, and that the reader opened the implementation check before cutover.

## Limits and next page

This page does not configure a protocol. The next page is the [implementation check](/migration-practices/implementation/).

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- ETSI, TR 103 619. [Report](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Key establishment](./key-establishment.md)
- [Signatures](./signatures.md)
- [Commodity software](../migration-practices/commodity-software.md)
- [Changing algorithms again](../migration-practices/changing-algorithms-again.md)
