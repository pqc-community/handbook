---
title: Prioritisation checklist
sidebar_label: Prioritisation checklist
sidebar_position: 3
displayed_sidebar: resourcesSidebar
description: Yes or no questions after a first inventory and before a budget.
---

Use this after a first inventory, before a budget. Each item is a yes or no with a note.

## Checklist

- Does this data still need to be secret after 10 years, or in 2030? If yes, it is on the key-establishment list. The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), 11 June 2025, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes harvest-now, decrypt-later: adversaries collect encrypted data now and decrypt it when a cryptanalytically relevant quantum computer exists.
- Is this a signature that many parties must change together? If yes, it is on the signature list even though it is not a harvest-now problem. NIST IR 8547 says signatures are not vulnerable to that attack, and that the transition is still urgent because it takes longer and more parties must coordinate.
- Can the verifier be updated later? If no, it is on the long-lived root list. NIST IR 8547 says that where a firmware or trust root cannot update its signature check later, and it will still be in use when a cryptanalytically relevant quantum computer exists, the devices should be designed to require quantum-resistant signatures on the executable code. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, include long-lived hardware roots of trust in the 2028 plan row.
- Is this commodity IT that the vendor will update? If yes, the action is to keep it updated, not to redesign it. The NCSC timelines say that for organisations that rely on commodity IT, such as standard browsers, operating systems, and mobile devices, migration should happen as vendors update those services.
- Is the organisation a regular adopter with none of the above? The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) says regular adopters do not need to react yet. If the answer is uncertain, follow the urgent path.

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Priority](../migration-practices/priority.md)
- [Protect this first](./protect-this-first.md)
- [Keep software updated](../start-here/keep-software-updated.md)
