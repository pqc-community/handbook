---
title: Stay on supplier updates
sidebar_label: Stay on supplier updates
displayed_sidebar: resourcesSidebar
description: The short-path records filled in for one fictional UK marketing agency that runs only supported devices and a hosted email and office suite, from the decision note to the sponsor's report.
---

This worked example shows the short path through the [record set](/resources/records/) for one fictional organisation whose IT is entirely supported devices and supplier-hosted services. It uses the records the short path keeps: the decision note, the inventory, supplier answers, purchase requirements, tracking lines on the migration plan, the review log, and the progress report. For the full path, with a programme charter and change records, see [Protect this first](/resources/examples/protect-this-first/).

The agency is a 25-person marketing agency based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, service plan, roadmap, email, version number, release date, and check result below is invented for illustration.

The UK National Cyber Security Centre's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) say that for small and medium-sized enterprises using mainly commodity IT, such as standard browsers, operating systems, and mobile devices, migration will be more straightforward and should happen seamlessly as their vendors update services. The NCSC names devices and software, not hosted services; the agency's hosted suite is on the short path because this handbook applies the same path to supplier-hosted services, as [Keep commodity software updated](/migration-practices/commodity-software/) explains. The agency's records exist to show that migration is happening through its suppliers, and to catch the point at which it stops.

## Initial facts

- **Roles**: The managing director is the executive sponsor. The office manager is the migration lead and owns the agency's IT assets and purchasing. A fictional IT support provider, under contract, manages the devices and applies updates.
- **Staff laptops**: 25 laptops on a supported operating system and browser, managed by the IT support provider through a device-management console.
- **Staff phones**: 25 company phones on a supported mobile operating system, managed through the same console.
- **Hosted email and office suite**: Email, documents, and file storage on a supplier-hosted service whose cryptography the supplier controls. The supplier's published security roadmap of 14 May 2026 states hybrid post-quantum key establishment for connections and gives 2028 as the target for post-quantum signatures, without naming an algorithm. The annual subscription renews on 1 March 2027, and the contract requires notice by 1 February 2027 not to renew.
- **Data**: Client work is confidential until a campaign launches, usually within a year. The agency's records policy keeps client contracts, finance, and staff records for up to six years.

## Inventory

Before the decision, the IT support provider records one row per asset on the [inventory record](/resources/records/inventory/) on 1 September 2026, from the device-management console and the suppliers' published documentation. The table shows the rows as first recorded; the review on 16 November 2026 updated the hosted suite's row (see [Review](#review)).

| asset | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Staff laptops | office manager | unknown | unknown | operating-system and browser suppliers; updates applied by the IT support provider | up to 6 years (records policy, fictional) | 2027-09-30 (planned laptop refresh, fictional) | operating system 24.2 and browser 142 on all 25 laptops, both in support, recorded 2026-09-01 (fictional) | operating-system and browser suppliers; IT support provider | unknown | device-management console; the suppliers' published support pages and post-quantum roadmaps (fictional); IT support provider | unknown |
| Staff phones | office manager | unknown | unknown | mobile operating-system suppliers; updates applied by the IT support provider | up to 6 years (records policy, fictional) | unknown | mobile operating system 19.1 on all 25 phones, in support, recorded 2026-09-01 (fictional) | mobile operating-system suppliers; IT support provider | unknown | device-management console; the supplier's published support page and post-quantum roadmap (fictional); IT support provider | unknown |
| Hosted email and office suite | office manager | unknown | unknown | office-suite supplier | up to 6 years (records policy, fictional) | 2027-03-01 (annual subscription, fictional) | Business plan; the supplier's security roadmap of 2026-05-14 states hybrid post-quantum key establishment for connections and a 2028 target for post-quantum signatures, checked 2026-09-01 (fictional) | office-suite supplier's hosting service; Staff laptops; Staff phones | supplier-hosted cryptography | supplier's published security roadmap (fictional); IT support provider | unknown |

## Decision note

The office manager answers the four questions on the [decision note](/resources/records/decision-note/) for each asset, with the IT support provider. Every asset answers no to all four, so the agency is a regular adopter on the short path. Before the managing director accepted the note on 7 September 2026, the office manager checked the vendor-managed route's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) on Decide whether to act against the inventory: every product is in support, and the suppliers' published roadmaps are the plans the route asks for, each covering the jobs its product performs, so each route cell already records them. For the hosted suite, the roadmap's key-establishment plan covers connections; whether any public-key step protects stored data at all is the open question on its stored-data line, so it is followed up as a supplier question rather than treated as a missing plan.

| asset | A long-lived confidentiality | B fixed verifier | C others rely on your signatures | D bespoke systems | category | path | route | next step | owner | confirm by | accepted by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Staff laptops | no (client work is confidential until launch; records kept up to 6 years under the records policy, fictional) | no | no (the agency signs no code, firmware, or documents that others rely on) | no (supported commodity software) | regular adopter | short | Vendor-managed software (all five conditions hold) | keep commodity software updated | office manager | 2026-10-05 | managing director, 2026-09-07 |
| Staff phones | no (client work is confidential until launch; records kept up to 6 years under the records policy, fictional) | no | no (the agency signs no code, firmware, or documents that others rely on) | no (supported commodity software) | regular adopter | short | Vendor-managed software (all five conditions hold) | keep commodity software updated | office manager | 2026-10-05 | managing director, 2026-09-07 |
| Hosted email and office suite | no (mail and documents kept up to 6 years under the records policy, fictional) | no | no (the supplier operates the service's certificates) | no (supplier-hosted service) | regular adopter | short | Vendor-managed software (all five conditions hold) | keep commodity software updated | office manager | 2026-10-05 | managing director, 2026-09-07 |

The office manager judges six years short of the many years question A covers. There is no programme charter: on the short path the decision note names the owner, and the review cadence comes from [Review and report](/migration-practices/subsequent-review/). The managing director confirmed the decision unchanged on 5 October 2026, and the review log records it.

## Supplier answers

The agency does not send questions to its device suppliers while their products stay in support; it relies on their published support and release information. The hosted suite comes up for renewal on 1 March 2027, and [Keep commodity software updated](/migration-practices/commodity-software/) says to ask in writing when a product comes up for renewal, so the office manager asks its supplier on 12 October 2026 and records the answers on the [vendor response log](/resources/records/vendor-response-log/), one row per job, with end of support asked in each. The supplier and its email are fictional.

| supplier | product and version | asset | job | question | asked | answer due | answer | answered | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional office-suite supplier | Business plan (fictional) | Hosted email and office suite | key establishment | Which key-establishment algorithm or scheme protects connections to the service, from which date, and when does support for the Business plan end? | 2026-10-12 | 2026-11-09 | The reply says hybrid key establishment (X25519MLKEM768) has been enabled for browser and mail-client connections to the service since 2026-06-01, where the client supports it, and that the Business plan has no announced end of support. | 2026-11-02 | Fictional supplier email, 2026-11-02 | complete | none | check a connection from a staff laptop before counting connections as migrated |
| Fictional office-suite supplier | Business plan (fictional) | Hosted email and office suite | key establishment (stored data) | Does any public-key step protect the keys for stored mail and documents and, if so, which algorithm, when will it change, and when does support for the Business plan end? | 2026-10-12 | 2026-11-09 | The reply says stored data is encrypted under keys the supplier manages, without saying whether a public-key step protects those keys, and that the Business plan has no announced end of support. | 2026-11-02 | Fictional supplier email, 2026-11-02 | vague | written answer to the public-key question requested 2026-11-16, due 2026-12-14 | do not count stored data as migrated |
| Fictional office-suite supplier | Business plan (fictional) | Hosted email and office suite | signatures | Which post-quantum signature algorithm or scheme will the service's certificates and sign-in tokens use, from which date, and when does support for the Business plan end? | 2026-10-12 | 2026-11-09 | The reply repeats the roadmap's 2028 target for post-quantum signatures without naming an algorithm or scheme, and says the Business plan has no announced end of support. | 2026-11-02 | Fictional supplier email, 2026-11-02 | vague | algorithm or scheme and a firm date requested 2026-11-16, due 2027-01-11 | track signatures as a separate plan line; the dated roadmap target keeps the route's plan condition met |

## Purchase requirements

Because the subscription renews on 1 March 2027, the office manager writes post-quantum requirements into the renewal on the [purchase requirements record](/resources/records/purchase-requirements/), one row per job, and sends them with the questions. The supplier's email of 2 November 2026 describes how the service works today; it does not commit to keeping it, so no row is `agreed`.

| asset | job | purchase or renewal | supplier | product and version | requirement | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hosted email and office suite | key establishment | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | standards-based post-quantum key establishment for connections to the service, such as ML-KEM (FIPS 203) in a hybrid TLS group, kept in place for the contract term; updates applied and tested by the supplier, with written notice of changes to the service's cryptography; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the email of 2026-11-02 describes current behaviour (X25519MLKEM768 for connections) without a commitment (fictional) | no announced end of support (fictional supplier email, 2026-11-02) | a contract clause or written commitment; a connection check from a staff laptop | office manager | sent, 2026-10-12 |
| Hosted email and office suite | key establishment (stored data) | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | a written statement of whether any public-key step protects the keys for stored mail and documents and, if so, a dated plan to move it to a standards-based post-quantum algorithm or scheme, naming the standard it follows; updates applied and tested by the supplier, with written notice; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the reply of 2026-11-02 is vague (fictional supplier email) | no announced end of support (fictional supplier email, 2026-11-02) | a written statement from the supplier | office manager | sent, 2026-10-12 |
| Hosted email and office suite | signatures | annual renewal of the Business plan on 2027-03-01 (fictional) | Fictional office-suite supplier | Business plan (fictional) | a dated plan for post-quantum signatures on the service's certificates and sign-in tokens, naming the algorithm or scheme and the standard it follows; updates applied and tested by the supplier, with written notice; keys or trust anchors fixed in hardware: not applicable (supplier-hosted); a stated support period for the Business plan | 2027-02-01 (renewal notice date, fictional) | none yet; the reply of 2026-11-02 gives a 2028 target with no algorithm (fictional supplier email) | no announced end of support (fictional supplier email, 2026-11-02) | a written, dated signature plan naming the algorithm or scheme | office manager | sent, 2026-10-12 |

If a requirement is still without a commitment when the notice date passes, its row becomes `not met`, and the managing director's decision to renew anyway goes on the review log as a risk acceptance.

## Migration plan

On the short path the [migration plan](/resources/records/migration-plan/) holds tracking lines, not a ranked order. The devices share one line each for both jobs, because nothing about them differs by job yet. The hosted suite has a line per job, and a separate line for stored data, because the supplier's answers and the follow-up dates differ. The agency uses the UK NCSC target dates as planning guidance. The guidance is aimed primarily at large organisations, operators of critical national infrastructure, and companies with bespoke IT; it says all organisations should work towards its dates and sets completing migration by 2035 as its final milestone. The agency treats them as targets to work towards, not as a deadline that binds it.

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Staff laptops | key establishment; signatures | office manager | tracked, not ranked (supplier-update path) | no exception identified (decision note, 2026-09-07; UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | operating-system and browser suppliers; IT support provider | keep the fleet on supported versions; check support status at each review; write requirements into the laptop refresh | 2027-01-18 |
| Staff phones | key establishment; signatures | office manager | tracked, not ranked (supplier-update path) | no exception identified (decision note, 2026-09-07; UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | mobile operating-system suppliers; IT support provider | keep the phones on supported versions; check support status at each review | 2027-01-18 |
| Hosted email and office suite | key establishment | office manager | tracked, not ranked (supplier-update path) | the supplier controls the service's cryptography (decision note, 2026-09-07) | complete | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the service in the 2035 completion view | 2026-06-01 (fictional supplier email, 2026-11-02) | 2026-11-12 (connection check from a staff laptop) | not applicable (supplier-hosted) | no announced end of support (fictional supplier email, 2026-11-02) | office-suite supplier; Staff laptops; Staff phones | secure the requirement in the renewal before 2027-02-01 | 2027-01-18 |
| Hosted email and office suite | key establishment (stored data) | office manager | tracked, not ranked (supplier-led) | the supplier has not said whether a public-key step protects stored-data keys (fictional supplier email, 2026-11-02) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the service in the 2035 completion view | unknown | not applicable (supplier-hosted) | not applicable (supplier-hosted) | no announced end of support (fictional supplier email, 2026-11-02) | office-suite supplier | obtain the stored-data answer; secure the requirement in the renewal | 2026-12-14 |
| Hosted email and office suite | signatures | office manager | tracked, not ranked (supplier-led) | the supplier's roadmap gives a 2028 target without an algorithm (fictional supplier email, 2026-11-02) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the service in the 2035 completion view | 2028 target (fictional supplier roadmap, 2026-05-14) | unknown | not applicable (supplier-hosted) | no announced end of support (fictional supplier email, 2026-11-02) | office-suite supplier | obtain the algorithm or scheme and a firm date; secure the requirement in the renewal | 2027-01-18 |

## Connection check

A supplier's statement is not evidence that the agency's own connections use it: a browser policy or an inspection proxy can remove the post-quantum option. On 12 November 2026 the IT support provider opens the hosted suite in the standard browser on one staff laptop and inspects the connection details, which show X25519MLKEM768 negotiated. The agency keeps no change records on the short path, and this is a check of the deployed state for one client, not a change it made, so the result goes on the hosted suite's inventory row and the review log. X25519MLKEM768 combines ML-KEM-768, specified in [FIPS 203](/standards/post-quantum/fips-203/), with the classical X25519 exchange, and is one of the groups defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/). The check says nothing about stored data or signatures.

## Review

Because a contract renewal on the plan falls within the next year, the agency follows the handbook's [suggested cadence](/migration-practices/subsequent-review/#do-this) of a review every three months, brought forward when the renewal approaches. At the first review, on 16 November 2026, the office manager opens the decision note, the inventory, the supplier answers, the purchase requirements, and the plan, and records each item on the [review log](/resources/records/review-log/). The route's conditions still hold: every product is in support with a published, dated plan, and the vague answers are followed up as supplier questions rather than treated as a missing plan. The next review is brought forward from mid-February to 18 January 2027, two weeks before the renewal notice date.

| date | record | asset | job | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-10-05 | decision note | Staff laptops; Staff phones; Hosted email and office suite | key establishment; signatures | decision confirmed unchanged by the managing director | office manager | closed 2026-10-05 | not applicable |
| 2026-11-16 | inventory record | Hosted email and office suite | key establishment | update the row with X25519MLKEM768 seen from a staff laptop on 2026-11-12; stored data still unknown | office manager | closed 2026-11-16 | not applicable |
| 2026-11-16 | inventory record | Staff laptops; Staff phones | key establishment; signatures | check support status: every device on a supported version on 2026-11-16 (device-management console) | office manager | closed 2026-11-16 | not applicable |
| 2026-11-16 | vendor response log | Hosted email and office suite | key establishment (stored data) | written answer on whether a public-key step protects stored-data keys, requested 2026-11-16, due 2026-12-14 | office manager | open | 2026-12-14 |
| 2026-11-16 | vendor response log | Hosted email and office suite | signatures | algorithm or scheme and a firm date for post-quantum signatures, requested 2026-11-16, due 2027-01-11 | office manager | open | 2027-01-18 |
| 2026-11-16 | purchase requirements | Hosted email and office suite | key establishment; key establishment (stored data); signatures | requirements secured in the renewal before the notice date, 2027-02-01; any row without a commitment then becomes `not met`, and the managing director decides whether to renew anyway, recorded here as a risk acceptance | office manager | open | 2027-01-18 |
| 2026-11-16 | migration plan | Staff laptops | key establishment; signatures | draft the post-quantum requirements for the laptop refresh planned for 2027-09-30 | office manager | open | 2027-01-18 |

The review updates the hosted suite's inventory row. The algorithm cells now record what was checked, but the stored-data and signature values are still unknown, so `confidence` stays `unknown`:

| asset | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hosted email and office suite | office manager | in transit: X25519MLKEM768 from a staff laptop browser, checked 2026-11-12; stored data: unknown | unknown | office-suite supplier | up to 6 years (records policy, fictional) | 2027-03-01 (annual subscription, fictional) | Business plan; the supplier's security roadmap of 2026-05-14 states hybrid post-quantum key establishment for connections and a 2028 target for post-quantum signatures, checked 2026-09-01 and rechecked unchanged 2026-11-16 (fictional) | office-suite supplier's hosting service; Staff laptops; Staff phones | supplier-hosted cryptography | supplier's published security roadmap (fictional); supplier email, 2026-11-02; browser connection check, 2026-11-12 | unknown |

## Progress report

The office manager reports to the managing director the same day on the [progress report](/resources/records/progress-report/), written from the plan and the review log:

| field | entry |
| --- | --- |
| date | 2026-11-16 |
| reported by | office manager (migration lead) |
| reported to | managing director (executive sponsor) |
| records reviewed | decision note; inventory; vendor response log; purchase requirements; migration plan; review log |
| key establishment | Hosted email and office suite: connections from a staff laptop negotiate X25519MLKEM768 (checked 2026-11-12); stored-data answer vague, follow-up due 2026-12-14. Staff laptops and Staff phones: on supported versions, tracked on the supplier-update path. |
| signatures | Hosted email and office suite: the supplier's roadmap targets 2028 without naming an algorithm; details due 2027-01-11. Staff laptops and Staff phones: tracked on the supplier-update path. |
| non-updatable verifier | not applicable |
| blocked | none |
| milestones at risk | none |
| decisions needed | none at this review; at the review on 2027-01-18, the managing director decides whether to renew the hosted suite if any requirement still has no commitment, before the renewal notice date, 2027-02-01 |
| next review | 2026-12-14 (stored-data item); 2027-01-18 (full review, brought forward before the renewal notice date); signature details due 2027-01-11 |
| sponsor response | noted by the managing director, 2026-11-16; no decision needed |

## What would move the agency off the short path

The short path holds only while the answers to the four questions stay no and all five of the vendor-managed route's conditions on [Decide whether to act](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) hold. The agency reopens its decision note when any of these happens:

- a client contract requires its files to stay confidential for many years (question A);
- the agency starts shipping or running a device whose signature check cannot be updated, such as a product it builds for a client (question B);
- the agency starts signing code or documents that clients rely on, or runs its own certificate authority (question C);
- the agency starts building or running its own systems, such as a client portal it hosts and configures (question D);
- a device or service leaves support, or its supplier withdraws its published plan or has none for a job the product performs, which moves it to the [hard-to-change systems route](/routes/hard-to-change-systems/);
- the IT support provider can no longer show the devices' versions and support status.

The NCSC guidance notes that for many organisations, managed service providers are likely to deliver most of their IT capability, and that it is then important to make sure they are also carrying out the discovery and assessment work it describes. Here the IT support provider records the versions and runs the connection check, and the office manager keeps the records.

## Sources

- NIST, *Module-Lattice-Based Key-Encapsulation Mechanism Standard*, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- IETF, *Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3*, RFC 10024, Proposed Standard, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)
- UK NCSC, *Timelines for migration to post-quantum cryptography*, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Migration records](/resources/records/)
- [Protect this first](/resources/examples/protect-this-first/)
- [Vendor-managed software route](/routes/vendor-managed-software/)
- [Hard-to-change systems route](/routes/hard-to-change-systems/)
- [Decide whether to act](/migration-practices/diagnose/)
- [Keep commodity software updated](/migration-practices/commodity-software/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Review and report](/migration-practices/subsequent-review/)
- [Cloud and SaaS](/technology-options/cloud-saas/)
