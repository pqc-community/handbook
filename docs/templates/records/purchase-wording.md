---
title: Purchase wording
search_title: Post-quantum purchase wording template
sidebar_label: Purchase wording
description: "One row per purchase or renewal, job and supplier: the post-quantum wording put to the supplier before signing, its commitment, and whether it was met."
displayed_sidebar: templatesSidebar
---

## When to use it

Use this record whenever anything new or renewed uses public-key cryptography, before the contract is signed. Every organisation keeps it as part of the [core actions](/plan/core-actions/), whose page gives a sentence to start from. [Work with suppliers](/plan/programme/suppliers/) explains what to ask for. The supplier's answers to your questions go on the [register](/templates/records/register/); this record holds what you required and what the supplier committed to.

## Minimum fields

system, job, purchase or renewal, supplier, product and version, wording, decide by, supplier commitment, support until, evidence, owner, status

Use one row per purchase or renewal, job, and candidate supplier, with `job` set to `key establishment`, `signatures`, or `non-updatable verifier`, and a qualifier in brackets where it helps. In `system`, use the register name; for a product not yet on the register, add its row first with `unknown` cells. In `wording`, write the text you put to the supplier: the algorithm or scheme and the standard it follows, or a dated plan to deliver it, plus how updates are delivered and validated and whether any key is fixed in hardware.

In `supplier commitment`, quote what the supplier agreed and where, such as a contract clause or a written answer, or write `none yet`. Set `status`, with the date, to `drafted`; `sent`; `agreed`, once the supplier commits in writing or in the contract; `met`, once the evidence has arrived and been checked; or `not met`, if the supplier refuses or `decide by` passes without a commitment. Once a row is `agreed`, copy `support until` into the register row's `end of support`. Refer a `not met` row to the sponsor, or to the owner where there is no sponsor, to decide whether to buy anyway, and record that decision on the register.

Record `unknown` in any cell you cannot verify yet, and keep keys, secrets, and personal data out of the file by naming the system only.

## Filled example

From [Protect this first](/templates/examples/protect-this-first/), with a fictional supplier, product, and dates. For a renewal of a hosted service, [Stay on supplier updates](/templates/examples/stay-on-supplier-updates/) shows the wording a small agency used.

| system | job | purchase or renewal | supplier | product and version | wording | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Fictional microcontroller supplier | next microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; the reply of 2026-10-30 is vague (fictional supplier email) | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Second fictional microcontroller supplier | candidate microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; no answer by 2026-11-02 | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |

## Blank template

| system | job | purchase or renewal | supplier | product and version | wording | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [purchase-wording.csv](/downloads/purchase-wording.csv).


Be strictest where the product cannot change later: for a verifier that cannot be updated, the requirement is a condition of selection, not a request. CISA's [product categories list](/standards/us-government-requirements/cisa-pqc-product-categories/) (23 January 2026) is addressed to organisations generally, with specific direction for US federal civilian agencies. It shows the categories in which products supporting post-quantum standards are widely available, which helps judge where a requirement is realistic today. CISA notes that most of those categories support post-quantum key establishment rather than signatures, so the list says little about whether a signature requirement, such as one for a boot verifier, is realistic.

Keep a real record off a public ticket and off an unlocked shared drive: requirements and commitments describe how your systems are protected.

## Sources

- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Work with suppliers](/plan/programme/suppliers/)
- [Register](/templates/records/register/)
- [Core actions](/plan/core-actions/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Protect this first](/templates/examples/protect-this-first/)
