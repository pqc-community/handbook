---
title: Choosing a post-quantum option
sidebar_label: Choosing an option
displayed_sidebar: technologyOptionsSidebar
description: Branch on system type, lifetime, jurisdiction, updateability, supplier control, and compatibility, then record the authority before implementation.
---

## When this applies

A system is already on the inventory and the priority record, and you are ready to name a post-quantum option and the authority that defends it.

## Do this

Record the system type, the confidentiality period, whether it can be updated, and who controls the software. The authority decides the timeline, and any hybrid rule, for its own audience. Where a supplier controls the software, the supplier decides the construction and the release date.

Work through these branches in order. None of them chooses the option for you; each branch narrows what to record before implementation.

### System type

Classify whether the system is commodity information technology, custom software, embedded cryptography, or a mixed estate. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), published and reviewed 20 March 2025, treat standard browsers, operating systems, and mobile devices as a supplier-update path where migration arrives through vendor releases; custom software does not sit on that path by default.

### Lifetime

Record the data confidentiality period and whether the asset will still matter after public milestones in your jurisdiction. The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), version 1.1, 11 June 2025, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage. Similarly, [The PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) distinguishes urgent adopters — including organisations holding long-lived sensitive data — from regular adopters that do not need to react yet, directing boundary cases to Section 3.2 of that handbook.

Record which authority's framing applies to the asset.

### Jurisdiction

Record which timeline and hybrid or post-quantum guidance applies where the organisation operates and where it sells. In the European Union, the EU NIS Cooperation Group roadmap (11 June 2025) sets out the Member State plan for coordinated implementation. In the United States, [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026) defines the standards deprecation and disallowance schedule for users of NIST standards rather than a universal deadline for every organisation.

### Updateability

Record whether configuration, trust stores, firmware verifiers, or supplier releases can change after initial deployment. If a signature verifier cannot be updated later in the field, route that row to [Long-lived roots](/technology-options/long-lived-roots/) before treating it as a general signature migration.

### Supplier control

Record who controls the software version, protocol settings, and migration date. Where a supplier delivers the update on commodity platforms (as described in the UK NCSC timelines, published and reviewed 20 March 2025), track supplier delivery; where your organisation configures the channel directly, record the chosen option and test plan on your change record.

### Compatibility

Record whether the construction is hybrid, post-quantum-only, or awaiting a supplier release, check whether protocols, certificates, and hardware can carry larger keys or signatures and whether all verifiers can be updated together, and record which authority supports that choice:

- The EU NIS Cooperation Group roadmap (11 June 2025) recommends standardised, tested hybrid solutions wherever feasible and suitable, and states that quantum-vulnerable public-key mechanisms shall not be used stand-alone for high-risk use cases after the end of 2030.
- The PQC Migration Handbook (December 2024) notes that Germany, France, and the Netherlands advocate deploying post-quantum cryptography in hybrid combinations with established algorithms, whereas the United Kingdom recommends hybridisation only where necessary.
- NIST IR 8547 (October 2026) describes hybrid solutions as a temporary hedge that adds complexity on the way toward post-quantum-only deployments, while accommodating dual signatures (provided at least one component signature algorithm is NIST-approved) and FIPS 140 validation for composite key establishment (provided at least one input comes from an approved scheme).

Do not treat one authority's position as a universal product requirement outside its scope. Quantum key distribution is set aside for the time being by both the PQC Migration Handbook (December 2024) and [ETSI TR 103 619](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf), and quantum random-number generators are outside this handbook. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) specifies ML-KEM, [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) specifies ML-DSA, and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specifies SLH-DSA; parameter tables remain in those FIPS publications.

| Job | What you record next | Evidence |
| --- | --- | --- |
| Key establishment | The supplier's construction, or the authority's stated default, and the confidentiality period | The inventory row and the authority citation |
| Signatures | Who has to change together | The priority row |
| Non-updatable verifier | Open long-lived roots before choosing a signature | The change record, closed or blocked |

## Keep this evidence

The option, the authority, and the date of that authority, written on the system in the inventory and carried into the change record.

## Example

An insufficient record is "Hybrid is required for everyone."

A decision-ready record states that a high-risk confidentiality system follows the EU NIS Cooperation Group roadmap hybrid guidance dated 11 June 2025, that commodity laptops follow the UK NCSC timelines supplier-update path published and reviewed 20 March 2025, and that you opened the implementation check before cutover.

## Limits and next page

Leave protocol configuration for the implementation check. The next page is the [implementation check](/migration-practices/implementation/).

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- ETSI, TR 103 619. [Report](https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf)

## Related pages

- [Key establishment](./key-establishment.md)
- [Signatures](./signatures.md)
- [Commodity software](../migration-practices/commodity-software.md)
- [Changing algorithms again](../migration-practices/changing-algorithms-again.md)
