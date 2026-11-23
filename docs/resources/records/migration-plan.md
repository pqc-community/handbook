---
title: Migration plan
search_title: Post-quantum migration plan template
sidebar_label: Migration plan
description: One row per asset and job, with its place in the order and why, the applicable timeline, the four separate dates, and the next review.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this plan from the moment an inventory exists. Two practices fill it: [Decide what to migrate first](/migration-practices/priority/) fills the order, the reason, and supplier readiness, and [Plan the migration](/migration-practices/plan/) fills the timeline, milestone, and four dates.

## Minimum fields

asset, job, owner, order, reason and source, supplier readiness, timeline and authority, milestone, supplier release, testing, production deployment, end of support, dependencies, next action, subsequent review

Use one row per asset and job, and set `job` to `key establishment`, `signatures`, or `non-updatable verifier`. Where one job needs separate pieces of work with their own owner or dates, such as re-wrapping data already stored, add a row with a qualifier in brackets, such as `key establishment (stored data)`. Combine jobs in one row only when they share every date, owner, and milestone. Record `unknown` in any cell you cannot verify yet.

- **order:** the line's place within its job, such as `first for key establishment`, `tracked, not ranked (supplier-update path)` for commodity products, or `tracked, not ranked (supplier-led)` for a line whose work waits on a supplier's plan.
- **reason and source:** the reason in plain words, with the source in brackets (a policy, a supplier letter, or an authority document).
- **supplier readiness:** the judgement from the [vendor response log](/resources/records/vendor-response-log/) (`complete`, `vague`, `missing`, or `concerning`), `not asked`, or `not applicable` where no supplier is involved. Where the answer differs for parts of the same job, label each value and separate them with semicolons, for example `complete (connections); missing (stored data)`.
- **the four dates:** keep them separate. A supplier's release is not your testing, your production deployment is not the supplier's release, and end of support is the date security fixes stop for the release you run now.

List every dependency inside the `dependencies` cell separated by a semicolon, rather than giving a shared component its own row. Separate multiple timelines or sources with a semicolon. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | first for key establishment | the designs must remain confidential for 15 years (company retention policy, fictional) | complete (connections); missing (stored data) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | workspace supplier's Workspace 4.2 release | complete production checks; obtain the stored-data key-wrapping answer and end of support for Workspace 4.1 | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | tracked, not ranked (supplier-led; no bespoke work yet) | the supplier has given no signature date (fictional supplier letter, 2026-09-04) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | complete migration by 2035 | unknown | unknown | unknown | unknown | workspace supplier | obtain the supplier's written signature plan | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | first for non-updatable verifier | the trust anchor cannot be changed after shipment (product design documentation, fictional; NIST IR 8547 device design advice) | vague (fictional microcontroller supplier email, 2026-10-30); missing (second fictional microcontroller supplier) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | resolve a supported signature option before production design freeze on 2027-06-30 (fictional); include the long-lived hardware root in the initial plan by 2028 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before design freeze; escalate to the managing director if none by 2027-03-31, three months before design freeze | 2026-12-15 |
| Firmware-signing key for product sensor | signatures | product security lead | first for signatures; moves with the non-updatable verifier line | every sensor shipped will check firmware signed with this key, so the signer must switch to the scheme the verifier accepts (product design documentation, fictional) | not applicable (the manufacturer's own signing process) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | choose the signing scheme with the verifier option, before production design freeze on 2027-06-30 (fictional) | not applicable | unknown | unknown | not applicable | firmware verifier option; signing-key storage | record where the signing key is held and how it is protected; choose the signing scheme with the verifier option | 2026-12-15 |
| Office laptops | key establishment; signatures | IT lead | tracked, not ranked (supplier-update path) | no unsupported product or other exception is identified (UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | browser and operating-system suppliers | keep the fleet on supported versions; check support status at each review | 2027-02-10 |

## Blank template

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [migration-plan.csv](/downloads/migration-plan.csv).

Keep a real plan off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Decide what to migrate first](/migration-practices/priority/)
- [Plan the migration](/migration-practices/plan/)
- [Organisation-wide route](/routes/organisation-wide/)
- [Protect this first](/resources/examples/protect-this-first/)
