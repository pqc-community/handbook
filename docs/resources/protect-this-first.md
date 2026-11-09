---
title: Protect this first
sidebar_label: Protect this first
sidebar_position: 5
displayed_sidebar: resourcesSidebar
description: A labelled illustration of a clinic with long-lived health records and a firmware root that cannot be updated in the field.
---

This page is a labelled illustration, not a real organisation.

The case is a clinic with long-lived health records on a vendor system, and a device whose firmware signature check cannot be updated in the field.

## Walk the checklist

The records are first because confidentiality still matters after 10 years. The [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), 11 June 2025, treats that case as high-risk where confidentiality is protected by public-key cryptography. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes harvest-now, decrypt-later for that confidentiality problem.

The firmware root is first for a different reason. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, include long-lived hardware roots of trust in the 2028 plan row. NIST IR 8547 says that where a firmware or trust root cannot update its signature check later, and it will still be in use when a cryptanalytically relevant quantum computer exists, the devices should be designed to require quantum-resistant signatures on the executable code.

The clinic's browsers and laptops stay on the keep-updated path. The NCSC timelines say that for organisations that rely on commodity IT, such as standard browsers, operating systems, and mobile devices, migration should happen as vendors update those services.

## Outcome

One page: the two assets, why each is first, the vendor question, and the date of the next pass.

| Asset | Why it is first | Vendor question | Next pass |
| --- | --- | --- | --- |
| Health records on the vendor system | Confidentiality still matters after 10 years | Which product, which key-establishment construction, which date | Write the review date |
| Firmware signature check that cannot be updated in the field | 2028 root-of-trust work, and the NIST IR 8547 code-signing case | What happens to firmware that cannot be updated | Write the review date |

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Priority](../migration-practices/priority.md)
- [Vendor questions](./vendor-questions.md)
- [Product release dates](../start-here/product-release-dates.md)
