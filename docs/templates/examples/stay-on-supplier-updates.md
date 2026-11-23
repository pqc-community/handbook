---
title: Stay on supplier updates
search_title: "Worked example: a small agency's PQC core actions"
sidebar_label: Stay on supplier updates
displayed_sidebar: templatesSidebar
description: The core actions followed by a fictional UK marketing agency on supported devices and a hosted suite, with its register and purchase wording filled in.
---

This worked example follows one fictional organisation through the [core actions](/plan/core-actions/). Its IT consists entirely of supported devices and supplier-hosted services. It keeps the two records the core actions call for: the [register](/templates/records/register/) and the [purchase wording](/templates/records/purchase-wording/). For a full programme, see [Protect this first](/templates/examples/protect-this-first/).

The agency is a 25-person marketing agency based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, service plan, roadmap, email, version number, release date, and check result below is invented for illustration.

## Initial facts

- **Roles**: The office manager owns the agency's IT and purchasing, and is the owner for post-quantum work. The managing director signs off spending. A fictional IT support provider, under contract, manages the devices and applies updates.
- **Staff laptops**: 25 laptops on a supported operating system and browser, managed by the IT support provider through a device-management console.
- **Staff phones**: 25 company phones on a supported mobile operating system, managed through the same console.
- **Hosted email and office suite**: Email, documents, and file storage on a supplier-hosted service whose cryptography the supplier controls. The supplier's published security roadmap of 14 May 2026 states hybrid post-quantum key establishment for connections and gives 2028 as the target for post-quantum signatures, without naming an algorithm. The annual subscription renews on 1 March 2027, and the contract requires notice by 1 February 2027 not to renew.
- **Data**: Client work is confidential until a campaign launches, usually within a year. The records policy keeps client contracts, finance, and staff records for up to six years.

## The four questions

On 7 September 2026 the office manager answered the four questions in [Which plan you need](/plan/) with the IT support provider, and the managing director agreed:

- **Question 1**: does not apply. Nothing the agency holds needs to stay confidential for ten years or more; the office manager recorded the six-year records policy on the register.
- **Questions 2 and 3**: do not apply. The agency makes no devices, and signs no code, firmware, or documents that clients rely on.
- **Question 4**: does not apply. The agency builds no software and configures no servers; the supplier runs the hosted suite.

So the core actions are the agency's whole plan.

## Core actions in practice

- **Owner named**: the office manager, as notified to the IT support provider on 7 September 2026.
- **What is in use**: the IT support provider listed the devices and the hosted suite on the register from the device-management console and the suppliers' published documentation.
- **Supported and updated**: every device is on a supported version, and the IT support provider applies updates.
- **Out of support**: nothing is out of support.
- **Purchase wording**: the hosted suite was due for renewal, so the office manager asked its supplier in writing on 12 October 2026, one question per job, and put post-quantum wording into the renewal.
- **Not counted as migrated without evidence**: a supplier's statement is not evidence that the agency's own connections use it, because a browser policy or an inspection proxy can remove the post-quantum option. On 12 November 2026 the IT support provider opened the hosted suite in the standard browser on one staff laptop and saw X25519MLKEM768 negotiated. X25519MLKEM768 combines ML-KEM-768, specified in [FIPS 203](/standards/post-quantum/fips-203/), with the classical X25519 exchange, and is one of the groups defined in [RFC 10024](/standards/modules-protocols-certificates/rfc-10024/). The check says nothing about stored data or signatures.
- **Review**: the office manager held the review on 16 November 2026, and brought the next one forward to 18 January 2027, before the renewal notice date.

## Register

The register below is as updated at the review on 16 November 2026. The devices share one row each for both jobs, because nothing about them differs by job yet. The hosted suite has a row per job, and a separate row for stored data, because the supplier's answers and follow-up dates differ. The agency also filled some columns the core actions do not require, such as `protected by today` and `order`, where the facts were to hand.

| system | job | owner | why it is here | protected by today | version or plan | supplier | supplier answer | judgement | dates that apply | supplier release | testing | production deployment | end of support | order | next step | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Staff laptops | key establishment; signatures | office manager | core actions: supported commodity software; no question applies (records kept up to 6 years, fictional) | unknown | operating system 24.2 and browser 142 on all 25 laptops, in support, rechecked 2026-11-16 (fictional) | operating-system and browser suppliers; IT support provider | published support pages and post-quantum roadmaps (fictional) | not asked (in support) | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | unknown | not applicable | unknown | unknown | tracked, not ranked (core actions) | keep on supported versions; write wording into the laptop refresh planned for 2027-09-30 | open | 2027-01-18 |
| Staff phones | key establishment; signatures | office manager | core actions: supported commodity software; no question applies (records kept up to 6 years, fictional) | unknown | mobile operating system 19.1 on all 25 phones, in support, rechecked 2026-11-16 (fictional) | mobile operating-system supplier; IT support provider | published support page and post-quantum roadmap (fictional) | not asked (in support) | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | unknown | not applicable | unknown | unknown | tracked, not ranked (core actions) | keep on supported versions | open | 2027-01-18 |
| Hosted email and office suite | key establishment | office manager | core actions: supplier-hosted service; no question applies (mail and documents kept up to 6 years, fictional) | in transit: X25519MLKEM768 from a staff laptop browser, checked 2026-11-12 | Business plan (fictional) | Fictional office-suite supplier | email of 2026-11-02: hybrid X25519MLKEM768 enabled for browser and mail-client connections since 2026-06-01; no announced end of support | complete | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | 2026-06-01 | 2026-11-12 (connection check from a staff laptop) | not applicable (supplier-hosted) | no announced end of support | tracked, not ranked (core actions) | secure the wording in the renewal before 2027-02-01 | open | 2027-01-18 |
| Hosted email and office suite | key establishment (stored data) | office manager | core actions: supplier-hosted service; no question applies (mail and documents kept up to 6 years, fictional) | unknown | Business plan (fictional) | Fictional office-suite supplier | email of 2026-11-02: stored data is encrypted under keys the supplier manages, without saying whether a public-key step protects those keys | vague | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | unknown | not applicable | not applicable (supplier-hosted) | no announced end of support | tracked, not ranked (core actions) | written answer requested 2026-11-16, due 2026-12-14; do not count stored data as migrated | open | 2026-12-14 |
| Hosted email and office suite | signatures | office manager | core actions: supplier-hosted service; no question applies (mail and documents kept up to 6 years, fictional) | unknown | Business plan (fictional) | Fictional office-suite supplier | email of 2026-11-02: repeats the roadmap's 2028 target for post-quantum signatures without naming an algorithm or scheme | vague | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | 2028 target (fictional supplier roadmap, 2026-05-14) | unknown | not applicable (supplier-hosted) | no announced end of support | tracked, not ranked (core actions) | algorithm or scheme and a firm date requested 2026-11-16, due 2027-01-11 | open | 2027-01-18 |

## Purchase wording

Because the subscription renews on 1 March 2027, the office manager put post-quantum wording into the renewal, one row per job, and sent it with the questions. The supplier's email of 2 November 2026 describes how the service works today; it does not commit to keeping it, so no row is agreed.

| system | job | purchase or renewal | supplier | product and version | wording | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hosted email and office suite | key establishment | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | standards-based post-quantum key establishment for connections to the service, such as ML-KEM (FIPS 203) in a hybrid TLS group, kept in place for the contract term; updates applied and tested by the supplier, with written notice of changes to the service's cryptography; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the email of 2026-11-02 describes current behaviour (X25519MLKEM768 for connections) without a commitment (fictional) | no announced end of support (fictional supplier email, 2026-11-02) | a contract clause or written commitment; a connection check from a staff laptop | office manager | sent, 2026-10-12 |
| Hosted email and office suite | key establishment (stored data) | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | a written statement of whether any public-key step protects the keys for stored mail and documents and, if so, a dated plan to move it to a standards-based post-quantum algorithm or scheme, naming the standard it follows; updates applied and tested by the supplier, with written notice; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the reply of 2026-11-02 is vague (fictional supplier email) | no announced end of support (fictional supplier email, 2026-11-02) | a written statement from the supplier | office manager | sent, 2026-10-12 |
| Hosted email and office suite | signatures | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | a dated plan for post-quantum signatures on the service's certificates and sign-in tokens, naming the algorithm or scheme and the standard it follows; updates applied and tested by the supplier, with written notice; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the reply of 2026-11-02 gives a 2028 target with no algorithm (fictional supplier email) | no announced end of support (fictional supplier email, 2026-11-02) | a written, dated signature plan naming the algorithm or scheme | office manager | sent, 2026-10-12 |

If a row still has no commitment when the notice date passes, its status becomes `not met`, and the managing director's decision to renew anyway goes on the register as a risk acceptance.

## What would start a programme

The core actions stay the agency's whole plan while none of the four questions applies. The office manager answers them again at each review, and starts a [programme](/plan/programme/) if any changes:

- a client contract requires files to stay confidential for ten years or more (question 1);
- the agency starts making or running a device whose signature check cannot be changed, such as a product it builds for a client (question 2);
- the agency starts signing code or documents that clients rely on, or runs its own certificate authority (question 3);
- the agency starts building or configuring its own systems, such as a client portal it hosts (question 4).

A device or service that leaves support, or whose supplier withdraws its plan, does not start a programme: the core action to replace what is out of support applies.

The UK NCSC's migration timelines (20 March 2025) note that for many organisations, managed service providers are likely to deliver most of their IT capability, and that it is then important to make sure they are also carrying out the discovery and assessment work it describes. Here the IT support provider records the versions and runs the connection check, and the office manager keeps the records.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, Proposed Standard, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)

## Related pages

- [Core actions](/plan/core-actions/)
- [Which plan you need](/plan/)
- [Register](/templates/records/register/)
- [Purchase wording](/templates/records/purchase-wording/)
- [Protect this first](/templates/examples/protect-this-first/)
