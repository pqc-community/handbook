---
title: Core actions
search_title: Post-quantum core actions for supplied IT
sidebar_label: Core actions
description: Seven actions every organisation takes for post-quantum migration, each marked as yours or your supplier's, with the time it takes and the two records to keep.
displayed_sidebar: journeySidebar
---

Every organisation follows these core actions, including those that also run a [programme](/plan/programme/), and if you answered no to all [four questions](/plan/), they are your whole plan. In a small organisation one person can own them, with about a day to set up and an hour or two at each review. For a smaller organisation on commodity IT, this handbook treats the core actions, kept up to date, as its migration plan. The UK NCSC's 2028 milestone is a discovery exercise and an initial plan, and the NCSC asks organisations that rely on managed service providers to make sure those providers carry out that work.

Each action says who does it: **you**, or **ask**, which means asking your IT provider or supplier.

## Seven actions

| # | Action | Who | Time |
| --- | --- | --- | --- |
| 1 | **Name an owner** for post-quantum work, and tell your IT provider and main suppliers who it is. | You | 5 minutes |
| 2 | **List what you use** on the [register](/templates/records/register/): devices, operating systems, hosted services, and products, with the version or service plan and the date checked. Servers, load balancers, and applications you configure yourself are your own systems, so if you have any, the fourth question applies. | You, with your IT provider | Half a day |
| 3 | **Keep everything in support and updated.** The UK NCSC expects smaller organisations using mainly commodity IT to receive most post-quantum upgrades from their service providers. | Ask | Ongoing |
| 4 | **Replace what is out of support**, with a date on the register. A product that gets no updates, or whose supplier has no post-quantum plan, will not migrate on its own, so until it is replaced, keep it off the internet where you can and limit what it holds. | You decide; ask for options | An hour to decide |
| 5 | **Put post-quantum wording into every purchase and renewal**, and keep the wording and the supplier's commitment on the [purchase wording](/templates/records/purchase-wording/) record. | You | Reuse the same wording |
| 6 | **Do not count anything as done** on the strength of an update alone. Updated products can still fall back to classical methods, and some settings or proxies switch post-quantum methods off, so ask the supplier, or check a connection, before recording a system as migrated. An update may also cover key establishment but not signatures, so record each job separately. | Ask | At each review |
| 7 | **Review every six months**, and when a product is renewed or leaves support. Answer the four questions again, and if one now applies, start a programme. | You | An hour or two |

## Wording for purchases and renewals

Copy and adapt this sentence for anything new or renewed that uses public-key cryptography:

> The product supports standards-based post-quantum or hybrid key establishment for its connections, naming the algorithm and the standard it follows, such as ML-KEM in NIST FIPS 203. The supplier gives a dated plan for post-quantum signatures, says whether any key is fixed in hardware, and states the date support ends for the version we buy.

ML-KEM is the post-quantum key-establishment method that NIST standardised in [FIPS 203](/standards/post-quantum/fips-203/), and hybrid means it is used together with a classical method. [Work with suppliers](/plan/programme/suppliers/) has the full list of questions, with how to judge an answer as complete, vague, missing, or concerning.

## Records

You keep two records: the [register](/templates/records/register/), with one row for each system you use and the columns the register page marks for the core actions, and the [purchase wording](/templates/records/purchase-wording/) for each purchase or renewal. The [Stay on supplier updates](/templates/examples/stay-on-supplier-updates/) example shows both filled in for a small agency.

## Special cases

- **A supplier will not answer.** Record the question, the date asked, and missing as the judgement, and ask again at renewal; until it answers, do not record the system as migrated.
- **A product cannot be replaced yet.** Keep it on the register with the reason and the earliest replacement date, and limit what it holds and who can reach it.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Which plan you need](/plan/)
- [Programme](/plan/programme/)
- [Work with suppliers](/plan/programme/suppliers/)
- [Stay on supplier updates](/templates/examples/stay-on-supplier-updates/)
