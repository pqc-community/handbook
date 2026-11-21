---
title: Post-quantum technology options
sidebar_label: Technology options
displayed_sidebar: technologyOptionsSidebar
description: A decision map from each cryptographic job to the page that sets its post-quantum option and the records that option goes on.
---

Use these pages once a system is on the inventory and has a line on the [migration plan](/resources/migration-plan/). They answer one question per job: which post-quantum option the system will use, who decides, and what evidence shows it. Start with [Choosing an option](/technology-options/choosing/), which applies to every job, then open the page for the job on the plan line.

| If you need to decide | Open | Records it fills |
| --- | --- | --- |
| Who chooses the option, whether to use hybrid, and which authority you follow | [Choosing an option](/technology-options/choosing/) | Change record: option and authority |
| How data in transit, or stored data encrypted to a public key, moves to post-quantum key establishment, and what happens to data already encrypted | [Key establishment](/technology-options/key-establishment/) | Inventory, change record, and migration plan |
| How certificates, signed documents, and code signing move, in what order, when every verifier can be updated | [Signatures](/technology-options/signatures/) | Migration plan, vendor response log, inventory, and change record |
| What a device whose verifier cannot be updated needs before design freeze, and what to do if no option exists | [Long-lived roots of trust](/technology-options/long-lived-roots/) | Vendor response log, migration plan, change record, and inventory |

Keep the three jobs separate even on one product: key establishment runs to the data's confidentiality period, because of [harvest-now, decrypt-later](/resources/glossary/#harvest-now-decrypt-later); signatures to the coordination of everyone who verifies them, which [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) notes takes longer and involves more parties; and a verifier that cannot be updated to its design freeze, the date after which the product's hardware can no longer change. The algorithms themselves are summarised in [Post-quantum cryptography standards](/standards/post-quantum/), and how authorities differ on them, especially on hybrid use, in [National algorithm positions](/standards/national-algorithm-positions/). These pages link to those summaries rather than repeating them, and leave parameter choices and product configuration to the standards and to specialists.

Commodity products that receive post-quantum support through supplier updates need no option chosen here; see [Keep commodity software updated](/migration-practices/commodity-software/). When an option is recorded, the next step is [Make and verify one change](/migration-practices/implementation/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Migration practices](/migration-practices/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Hybrid cryptography](/learn/hybrid/)
