---
title: Register
search_title: Post-quantum migration register template
sidebar_label: Register
description: One row per system and job, from why it is on the list to the supplier's answer, the dates that apply, the next step and the next review.
displayed_sidebar: templatesSidebar
---

## When to use it

Start the register on the first day, with the [core actions](/plan/core-actions/): it is the one record every organisation keeps. List each system, service, or product you rely on, and add a row for each job it does once you know. A [programme](/plan/programme/) adds rows for the systems identified by the four questions in [Which plan you need](/plan/), and keeps their order and dates here.

## Minimum fields

system, job, owner, why it is here, protected by today, version or plan, supplier, supplier answer, judgement, dates that apply, supplier release, testing, production deployment, end of support, order, next step, status, next review

If you follow only the core actions, fill in system, job, owner, why it is here, version or plan (with the date checked), supplier, supplier answer, judgement, dates that apply, end of support, next step (such as a replacement date), status, and next review. Fill in the other columns when you have the facts or when a programme needs them.

Give each system one row per job, with `job` set to `key establishment`, `signatures`, or `non-updatable verifier`, and a qualifier in brackets where one job needs separate work, such as `key establishment (stored data)`. A supported commodity product can share one row for both jobs until something differs between them. Name each system the same way on every record, so its change records and purchase wording can be found from its row.

- **why it is here:** which of the four questions in [Which plan you need](/plan/) applies, with the reason and its source, such as "question 1: designs confidential for 15 years (company retention policy)", or `core actions` for a system no question applies to. For a `not sure` answer, name who will confirm it and by when.
- **protected by today:** the algorithm or scheme in use for this job, such as X25519MLKEM768 or ECDSA P-256, or `unknown`. A protocol name such as "TLS" is not enough.
- **supplier answer** and **judgement:** what the supplier said in writing, with the date, and your judgement of it: `complete`, `vague`, `missing`, or `concerning`, as [Work with suppliers](/plan/programme/suppliers/) defines them, or `not asked` or `not applicable`.
- **dates that apply:** each date with its authority and audience, such as a national milestone or a design freeze, as [Which dates apply to you](/plan/#which-dates-apply-to-you) explains.
- **the four dates:** keep them separate. A supplier's release is not your testing, your production deployment is not the supplier's release, and end of support is the date security fixes stop for the version you run now.
- **order:** the row's place within its job, as [Decide what to migrate first](/plan/programme/priority/) sets it, or `tracked, not ranked (core actions)` for a supplied product.
- **status:** `open`, `blocked` with the date it must be resolved by, `migrated` once a deployed-state check shows the new method live, or `closed`.

Record `unknown` in any cell you cannot verify yet, and keep the row on the register with its owner. Separate several values in one cell with semicolons. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

From [Protect this first](/templates/examples/protect-this-first/), as updated at the review on 10 November 2026. Every company fact, supplier, product, and date is fictional.

| system | job | owner | why it is here | protected by today | version or plan | supplier | supplier answer | judgement | dates that apply | supplier release | testing | production deployment | end of support | order | next step | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | question 1: designs confidential for 15 years (company retention policy, fictional) | in transit: X25519MLKEM768 in staging; unknown in production | Workspace 4.2 in staging; Workspace 4.1 in production (fictional) | Fictional design-platform supplier | letter of 2026-09-04: Workspace 4.2, due 2026-10-01, uses hybrid X25519MLKEM768 for TLS connections to the hosted workspace | complete | UK NCSC: highest-priority migration by 2031, complete by 2035 (20 March 2025) | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | first for key establishment | roll out Workspace 4.2 and repeat the client handshake check in production | open | 2027-02-10 |
| Product-design archive in supplier-hosted workspace | key establishment (stored data) | product engineering lead | question 1: designs confidential for 15 years (company retention policy, fictional) | unknown | Workspace 4.1 in production (fictional) | Fictional design-platform supplier | the letter of 2026-09-04 does not say whether a public-key step protects stored files' keys, or when Workspace 4.1 support ends | missing | UK NCSC: highest-priority migration by 2031, complete by 2035 (20 March 2025) | unknown | unknown | unknown | unknown | first for key establishment, with the connections row | obtain the written answer due 2026-12-01; do not count stored data as migrated | open | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | on the register for question 1; its signatures are supplier-led | unknown | Workspace 4.2 (fictional) | Fictional design-platform supplier | letter of 2026-09-04: Workspace 4.2 has no post-quantum signing changes and gives no date | vague | UK NCSC: complete by 2035 (20 March 2025) | unknown | unknown | unknown | unknown | tracked, not ranked (supplier-led) | obtain the supplier's written signature plan, due 2026-12-01 | open | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | question 2: the boot ROM trust anchor cannot be changed after shipment (product design documentation, fictional) | unknown | pre-production product (fictional) | Fictional microcontroller supplier; Second fictional microcontroller supplier | email of 2026-10-30: a post-quantum boot verifier is planned, with no scheme, date, or trust-anchor provisioning named; second supplier: no answer by 2026-11-02 | vague; missing | production design freeze 2027-06-30 (product plan, fictional); UK NCSC: long-lived hardware roots of trust in the initial plan by 2028 (20 March 2025) | unknown | unknown | unknown | not applicable | first for non-updatable verifier | obtain written answers due 2026-12-15; escalate to the managing director if no supported option by 2027-03-31 | blocked: resolve before 2027-06-30 | 2026-12-15 |
| Firmware-signing key for product sensor | signatures | product security lead | questions 3 and 4: every sensor shipped checks firmware the manufacturer builds and signs with this key | unknown | current firmware-signing process (fictional) | not applicable (the manufacturer's own signing) | not applicable | not applicable | production design freeze 2027-06-30 (product plan, fictional) | not applicable | unknown | unknown | not applicable | first for signatures; moves with the verifier row | choose the signing scheme with the verifier option; record where the key is held and the signing tool's library and version | open | 2026-12-15 |
| Office laptops | key establishment; signatures | IT lead | core actions: supported commodity software; no question applies (office records kept 6 years, fictional) | unknown | supported browser and operating-system versions, recorded 2026-11-10 from the device-management console | browser and operating-system suppliers | published support pages and post-quantum roadmaps cover both jobs for the installed versions (fictional) | not asked (in support) | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | unknown | not applicable | unknown | unknown | tracked, not ranked (core actions) | keep on supported versions; check support at each review | open | 2027-02-10 |

## Blank template

| system | job | owner | why it is here | protected by today | version or plan | supplier | supplier answer | judgement | dates that apply | supplier release | testing | production deployment | end of support | order | next step | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [register.csv](/downloads/register.csv).

Keep a real register with the access controls of an asset register, off public tickets and unlocked shared drives: it describes how your systems are protected.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Which plan you need](/plan/)
- [Core actions](/plan/core-actions/)
- [Inventory the cryptography](/plan/programme/inventory/)
- [Decide what to migrate first](/plan/programme/priority/)
- [Protect this first](/templates/examples/protect-this-first/)
