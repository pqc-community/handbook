# Critique v2 revision

Date: 2026-11-10

This spec is a content edit of the November 2026 edition. Where a clinic field, a label, or a page rule in this spec conflicts with [the edition design](./2026-11-10-site-revision-design.md), this spec wins. The edition design otherwise stays in force. The homepage, search, sitemap, robots file, CSV headers, and `last_reviewed: 2026-11-10` are unchanged.

The edit changes pages that already exist. It does not add a page, a diagram, a quiz, a parameter table, a second file format, or a LATICE phase.

## Clinic records

The clinic is an illustration, not a real organisation. The same values appear on every page that carries them. Table date cells use ISO dates. 14 August 2026 is `2026-08-14`. 1 December 2026 is `2026-12-01`.

`confidence` describes the algorithm cells. It is `known` only when both the key-establishment algorithm and the signature algorithm name a construction. Otherwise it is `unknown`.

### Inventory

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | unknown | unknown | the vendor | more than 10 years | unknown | unknown | unknown | unknown | unknown |
| Firmware signature check that cannot be updated in the field | the clinic operations lead | unknown | unknown | unknown | unknown | unknown | unknown | unknown | firmware trust anchor | unknown |

These two rows are on Protect this first. The inventory record’s filled example is the health-records row.

### Priority

Both assets are first, for different jobs.

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | more than 10 years | key establishment | unknown | unknown | unknown | unknown | first for key establishment | confidentiality period longer than 10 years | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | 2026-12-01 |
| Firmware signature check that cannot be updated in the field | unknown | non-updatable verifier | unknown | unknown | unknown | unknown | first for non-updatable verifier | verifier cannot be updated in the field | UK NCSC timelines, modified 3 August 2026 | 2026-12-01 |

The priority record’s filled example is the health-records row. Any page whose table cites the EU roadmap for this reason also lists it in Sources, at the URL already used on the dates page: `https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf`. NIST IR 8547 is not the source of the 10-year threshold. It remains the authority for the key-establishment option and for harvest-now, decrypt-later.

The subsequent-review date is an example. The sentence on Protect this first does not use the label Requirement.

### Supplier letter

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic software supplier | named in the supplier letter | What key-establishment construction and release date apply to the health-records platform? | The letter names the product and version, names ML-KEM-768, names the release date, and states that signatures are not in that release. | 2026-08-14 | supplier letter | complete | none | record the key-establishment date and open a signatures follow-up |

The same row is on Protect this first and the vendor response log. No real product version is introduced. The vendor-plan decision-ready example uses this letter, and drops the roadmap PDF and product version 4.2.

### Closed change

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | Adopt the supplier’s key-establishment construction | ML-KEM-768 | NIST IR 8547, October 2026 | One clinic site | Key establishment on the health-records channel | Clients cannot connect after the change | the clinic operations lead | The deployed configuration matches the supplier letter | Pilot passed | 2026-08-14 |

This row is the decision-ready change. It is the filled example on the change record and the decision-ready example on the implementation page. ML-KEM-768 is the default named by NIST IR 8547. The pages still do not print a parameter table.

The key-establishment example keeps the VPN that carries the clinic health records as a channel inside this asset, not as a third asset. It already names ML-KEM-768 and NIST IR 8547. The sentence that leaves the firmware check on the signatures page changes: the firmware check is blocked until an option is known, and long-lived roots comes before a signature choice.

### Blocked change

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | unknown | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |

A line above this row says it is blocked: implementation does not start while the option is unknown. The row is not described as decision-ready. The UK NCSC timelines stay on the priority row as the reason the asset is first. They are not the authority cell of this change. The row appears on Protect this first, the change record, and as the blocked example on the implementation page.

### Review log

| date | what was reviewed | unresolved items | owner | next review |
| --- | --- | --- | --- | --- |
| unknown | priority record and vendor response log for health records | blocked firmware option | the clinic operations lead | 2026-12-01 |

The supplier date is not an unresolved item.

### Migration plan

| asset | owner | why it is included | applicable timeline | authority | milestone | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | long data confidentiality period | end of 2030 | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | end of 2030 | supplier release named in the letter of 14 August 2026 | signatures follow-up | 2026-12-01 |

The end of 2030 is the EU roadmap’s date for protecting data that needs to remain confidential for at least 10 years. NIST IR 8547 is not this row’s authority.

### Evidence record

| claim | record | source | date | owner | subsequent review |
| --- | --- | --- | --- | --- | --- |
| The health-records key-establishment pilot passed | change record for health records | supplier letter of 14 August 2026; NIST IR 8547, October 2026 | 2026-08-14 | the clinic operations lead | 2026-12-01 |

## Practice pages

The existing headings stay. Each addition is a rule or one example.

**Diagnose.** The owner is the person who can name the systems and accept the subsequent-review date. Before the inventory, the reader uses the questions on Not sure: supplier-updated commodity software, data that stays confidential for years, a verifier that cannot be updated, and whether someone is coordinating many assets. An estate that fits none of those is written down as unclassified. The page links to Not sure.

**Inventory.** List systems that hold sensitive data or have an external connection. Then add supplier-controlled and hardware items a scan cannot see. One row per system. A shared library or service is named in `dependencies`, not given a second system row. `confidence` uses the clinic rule.

**Priority.** Two assets may both be first when their jobs differ. Within key establishment, the longer confidentiality period comes first, then the longer lead time. A non-updatable verifier comes before a verifier that can be changed on a long cycle, then the longer lead time. Signatures are ordered by how many parties have to change together, then the longer lead time. An unknown factor keeps the row. The inventory owner accepts the order. The worked pair on this page is the clinic health records and a short-lived channel with a confidentiality period under one year. The short-lived channel is not added to Protect this first or any other clinic table. There is no numeric score.

**Vendor plan.** A `complete` answer names the product, the version, the construction, and a date, and the source can be kept. The clinic letter is that example. If no commitment has arrived by the follow-up date, procurement records the gap and the system is not treated as migrated. A `concerning` answer still escalates to procurement and the contract owner.

**Implementation.** The decision-ready example is the closed health-records change. The firmware row is the blocked example. A result of `unknown` means the change is not closed. The page does not specify a protocol, a monitoring programme, or recovery beyond the rollback trigger and the person who can roll back.

**Changing algorithms again.** Each capability counts only with its evidence: a configuration change that has been shown, a named owner, a dependency row in the inventory, a test that has been run, a change window with a named approver, and a written deprecation path for the construction in use now.

## Routes

**More than one route.** Not sure and Organisation-wide say to use the organisation-wide route to coordinate the programme, and to follow the asset route for each system as well. Coordinating many assets is not a reason to leave the asset route.

**Vendor-managed software.** The reader stays only when all of these hold: the software is supplier-updated browsers, operating systems, or mobile devices; no record needs to stay confidential for years; there is no bespoke system; no verifier that cannot be updated later; and the product is in support with a written supplier plan. A product that is out of support, or has no written supplier plan, leaves for the hard-to-change route, the same rule Commodity software already states. An organisation coordinating many assets also opens the organisation-wide route.

**Hard to change.** The eight links stay. Inventory and release dates are required. Long-lived roots is read only when the verifier cannot be updated later. Signatures is read only when a signature construction is being chosen. Vendor plan and the vendor response log are read only when a supplier is involved. Implementation and the change record are read when the product will change, including when the change is intended and the option is still unknown. The reader stops when the release dates are recorded and the change record exists. A blocked row counts as that change record.

**Ask a supplier.** The output is one row per product, version, and cryptographic job. A route-specific plan is still required when the organisation has to change configuration or a verifier, rather than only wait for a release.

**LATICE.** The five phase names stay attributed to ASD’s planning publication. The alignment is handbook practice, not an ASD claim that verification is a LATICE phase. Name an owner is the step before LATICE. Find dependencies is Locate. Assess confidentiality and constraints is Assess. Prioritise is Triage. Engage suppliers and migrate is Implement. Handbook step 6 verifies the change, records it on the evidence record and the change record, and sets the subsequent review. LATICE’s Communicate and educate is the communication of that result. The learn sequence is the education material. The two lists still differ in length. The five question groups on the vendor response log stay as they are: they follow the vendor guide, and this edit does not move questions out of Communicate and educate there.

## Choosing an option

At the top of Do this:

- The reader records the system type, the confidentiality period, whether it can be updated, and who controls the software.
- The authority decides the timeline, and any hybrid rule, for its own audience.
- Where a supplier controls the software, the supplier decides the construction and the release date.

The jurisdiction branch and the hybrid paragraphs stay. A lead sentence says they are policy notes to record, and that the page does not choose among them. The existing sentence stays: record which authority is being followed, and do not treat one authority’s sentence as a product requirement for every reader.

The six lines that say to open the implementation check and note the subsequent-review condition come out. Limits and next page still names the implementation check once.

After the branches, this table. It names no algorithm.

| Job | What the reader records next | Evidence |
| --- | --- | --- |
| Key establishment | The supplier’s construction, or the authority’s stated default, and the confidentiality period | The inventory row and the authority citation |
| Signatures | Who has to change together | The priority row |
| Non-updatable verifier | Open long-lived roots before choosing a signature | The change record, closed or blocked |

In the compatibility branch, one sentence asks whether the protocol, the certificate, and the hardware can carry the larger values, and whether every verifier can be updated together. No size limit is stated. Parameter selection stays a link to the FIPS.

## Labels

The editorial policy defines five labels.

- **Requirement** is a binding obligation inside the audience named by that authority.
- **Authority recommendation** is the source advising an action.
- **Authority statement** is the source describing a fact.
- **Handbook practice** is what this handbook tells the reader to do.
- **Example** is an illustration, including the clinic.

A date or an obligation records the authority, the date of the source, the jurisdiction, the audience, and the status when those change the meaning. Existing sentences are not relabelled in a sweep. A sentence this edit already changes, and that only reports a fact, uses Authority statement.

## Learn the basics

No new lessons and no diagrams.

**Public-key cryptography.** Remove “What one key in the pair does, only the other key can undo or check.” Replace it with: the two keys do different jobs. For key establishment, the public key is used to create a shared secret and the private key recovers it. For a signature, the private key creates the signature and the public key checks it. Checking a signature does not reverse it. The later paragraphs stay.

**The quantum threat.** Keep the NIST paragraph, including that Grover’s algorithm does not by itself retire symmetric cryptography on the same timetable. Add nothing about Grover. Change the label from Authority recommendation to Authority statement.

**What post-quantum means.** After the opening paragraph, add: the design aims to resist known quantum attacks, and it is not a guarantee against every future attack.

**Algorithms.** Add one pointer: where the three standards sit among drafts, protocol profiles, and products is covered on Standardisation. No picture and no parameter table.

**In real systems.** Add: a browser chain runs from the leaf certificate for the site, through an intermediate, to a trust anchor the browser already holds. A firmware check uses the same relationship: the device holds a trust anchor and checks the signature on the image. There is no TLS handshake.

**Standardisation.** After the three final standards, add: a draft is still open to change. A published FIPS is a standard. A protocol profile, such as a TLS or PKIX specification, is a separate document for how a standard is used on the network. A vendor implementation is the product release that ships that behaviour. Further algorithms remain in development. Their status is on the NIST publication pages already linked. The page does not name candidates beyond the three final standards.

## Work-product field rules

The seven CSV files stay header-only, with their current headers. The HTML table is the readable copy.

Each work-product page keeps the sentence that a real record stays off a public ticket and an unlocked shared drive. Each page also says:

- An unfilled cell is the word `unknown`.
- Where the row has a dependencies cell, every dependency goes in that cell, separated by a semicolon. A shared component does not get its own system row.
- Where the row records a timeline or a source, more than one may be named in that cell, separated by a semicolon.
- Keys, secrets, and personal data stay out of the file. Name the system.

The vendor response log says to use a separate row for each product, version, and cryptographic job. `job` stays `key establishment`, `signatures`, or `non-updatable verifier`. `judgement` stays `complete`, `vague`, `missing`, or `concerning`. `confidence` uses the clinic rule.

## Left out

- Diagrams, lesson quizzes, a Grover tutorial, and a TLS handshake.
- A monitoring programme, a protocol specification, a parameter table, and any invented size limit.
- A jurisdiction selector, a second spreadsheet, and new pages.
- A sweep that relabels every Authority recommendation.
- A new LATICE phase, and any change to the homepage, search, sitemap, or robots file.
- A screen-reader audit and observed reader sessions. The editorial policy already says this build does not complete those two.

## Checks

`npm test`, `npm run check:voice`, `npm run check:sources`, `npm run check:records`, `npm run typecheck`, and the production build pass. The voice scan still rejects `must` and `shall` unless the same line names an allowed authority. The records scan still requires the CSV headers to match the pages. `last_reviewed` stays `2026-11-10`.

A read of the clinic values confirms, on every page that carries them:

- Both inventory rows have confidence `unknown`.
- The 10-year reason cites the EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025.
- The health-records option is ML-KEM-768 and the authority is NIST IR 8547, October 2026.
- The firmware option, authority, result, and date are `unknown`, and the row is marked blocked.
- The review date is an example, not a Requirement.
- The migration-plan next action is the signatures follow-up.

After the build, open Protect this first, Choosing an option, one route, one learn lesson, and one work-product page. The new sentences are present, the tables are readable, and the firmware row is visible as blocked.
