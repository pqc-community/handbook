# PQC Handbook - Reader Journey

How a reader moves from first arrival to their first useful action, why the handbook routes readers this way, and the rules that keep the journey simple. Mission and audience: [purpose-and-positioning.md](./purpose-and-positioning.md). Sections, URLs, and sidebars: [navigation-structure.md](./navigation-structure.md). Voice: [style-guide.md](./style-guide.md). Visual identity: [brand-guidelines.md](./brand-guidelines.md).

**Status**: Adopted and implemented on 23 November 2026. It replaced the situation routes, the two paths and three asset tracks, Decide whether to act, and the nine-record set.

## The Journey in One Picture

Four questions about the organisation, a baseline that everyone follows, and a programme only when the questions find something that cannot wait for suppliers.

```text
Start here: four questions about the organisation
(yes / no / not sure; not sure counts as yes until someone confirms)
 ├── None apply ─────────────► Baseline
 ├── Any applies ────────────► Baseline + Programme
 │                              ├── First moves, one per question that applied
 │                              └── Diagnose → Plan → Execute
 └── Critical, regulated, or ──► Specialist advice and the sector regulator first,
     a large estate you build      then Baseline + Programme
```

The reader learns three terms to act: **baseline**, **programme**, and **register**. Key establishment, signatures, verifier, hybrid, and relying parties are glossed in one line where they first appear.

## Principles

- **Ask only what changes the outcome**: Each question exists because its answer changes what the reader does next. If a rule fits on the page, state it there instead of asking a question.
- **Serve the majority first**: Most readers buy in their technology and need a short, complete plan. The baseline is that plan, written so a reader who needs nothing more can stop there with confidence.
- **Everyone does the baseline**: Programme organisations keep doing the baseline for everything they buy in. The programme covers only what the four questions found.
- **Separate jobs where their clocks differ**: Key establishment, signatures, and verifiers that cannot be updated each get their own first move, register line, and ordering rule. Job separation lives in the programme, not in the routing.
- **A first move, not a framework**: Every outcome ends in an action the reader can take this week, named with who does it.
- **Hand off as an action**: Where the handbook reaches its limit, the page tells the reader whom to contact first, rather than noting a caveat.
- **Readable alone**: Each journey page makes sense to a reader who arrived from search and opens nothing else.

## Start Here

Start here asks four questions about the organisation as a whole. A question applies if any system, service, or product the organisation runs fits it.

| # | Question | Why it is asked |
| --- | --- | --- |
| 1 | **Data that must stay secret for years.** Information that must stay confidential for many years and is protected in transit or at rest by public-key methods. Measured by how long it must stay secret, not how long it is kept. | Recorded traffic and wrapped keys can be decrypted later, so the exposure has already started. |
| 2 | **Devices with a fixed key.** Products or devices, made or run, that check signatures with a key or method that cannot be changed after shipment, in hardware or software. A key a normal update can replace is not fixed. | The design freeze, then the device's service life, sets the deadline. |
| 3 | **Signatures others rely on.** A certificate authority, public or internal, or code, firmware, or document signing that other people or devices check. | Everyone who checks the signatures has to move with the signer. |
| 4 | **Systems you build or configure.** Software the organisation builds, or cryptography it sets up on its own servers, load balancers, VPNs, or applications. One such system is enough. Set-up an IT provider does and keeps updated counts as supplied. | Only the organisation can change it, on its own release cycle. |

Rules for the questions:

- **Not sure counts as yes** until a named person confirms, by a named date. Record both on the register.
- **Many years**: As this handbook's guide, treat ten years or more as many years. Where an authority sets a threshold for its audience, such as the EU NIS Cooperation Group roadmap for Member States, cite it with that audience.
- **Out-of-support products are not a trigger.** A supplied product with no updates or no post-quantum plan is a baseline item with a replacement date, never a reason on its own to start a programme.
- **Three outcomes only**: none apply (baseline); any applies (baseline and programme); critical, regulated, or a large self-built estate (specialist advice and the sector regulator first, then baseline and programme).

Start here also carries a short **Which dates apply to you** table: each authority's milestones, the audience the authority names, and what to record when no authority addresses the reader. It never presents one authority's dates as universal.

## Baseline

The baseline is about seven actions, each marked **you** or **ask** (your IT provider or supplier), with the time it takes. It covers naming an owner, listing what is in use, keeping it supported and updated, replacing what is out of support (with interim limits until replaced), post-quantum wording for purchases and renewals, not counting anything as migrated without evidence, and a review every six months.

- Purchase wording is given as a sentence the reader can copy, with each standard named once and glossed.
- The baseline keeps two records: the register and the purchase wording.
- The baseline is the whole plan for organisations where no question applies. It says so plainly.

## Programme

The programme page opens with **first moves**: one row per question, naming the clock it runs on and the action to take this week. A reader who answered yes to two questions does two first moves.

| Question that applied | First move |
| --- | --- |
| Data that must stay secret for years | Ask the supplier, or the team that runs it, in writing which method protects connections and which protects stored data, and when each changes. Separate register lines for each. |
| Devices with a fixed key | For products being designed: make a post-quantum signature option a condition of component selection before the design freeze. For devices already shipped: keep their signing key protected for the fleet's life, tell customers when a replacement is planned, and record the date. For devices you run: ask the maker for an upgrade or replacement route, and plan by end of life. |
| Signatures others rely on | List who checks the signatures; verifiers must accept new signatures before signers switch. |
| Systems you build or configure | Record each system's cryptographic library, protocols, and versions. |

The programme has two sizes:

- **Small programme**: one or two systems, with no device that has a fixed key. The owner runs it with the sponsor's sign-off, keeps the register, and adds a change record for each change. No charter or progress report; reviews every six months unless a fixed date falls within a year.
- **Full programme**: anything larger, any device with a fixed key, or any organisation in the specialist outcome. A named sponsor and lead, a one-page programme charter, and a progress report at each review.

After the first moves, the existing migration practices run in three phases: **Diagnose** (set up, find the cryptography), **Plan** (order the work within each job, record the dates that apply, work with suppliers), and **Execute** (choose an option from the technology card, make and verify each change, keep the ability to change again, review and report). The page also says what to do when no option exists before a fixed date, and that suppliers asked by their customers answer from the register.

## Records

| Record | Holds | Kept by |
| --- | --- | --- |
| **Register** | One row per system and job: owner, what protects it today, the supplier's answer and its judgement (complete, vague, missing, or concerning), the dates that matter, the next step, status, and the next review | Everyone |
| **Purchase wording** | The requirement used in each purchase or renewal, and the supplier's commitment; the supplier's answer and its judgement go on the register | Everyone who buys or renews |
| **Programme charter** | Sponsor, lead, scope, first budget line, and reporting | Full programmes |
| **Change record** | One change to one system and job: option and authority, tests, rollback, and the check that it is live | Anyone making a change |
| **Progress report** | What moved, what is blocked, decisions needed, and the next review | Full programmes |

The register replaces the decision note, inventory record, migration plan, vendor response log, and review log. Record field names stay in record pages and their templates; journey pages describe records in plain words.

## Navigation and Placement

- **Navbar**: Start here, Baseline, and Programme lead, followed by Learn, Technology options, Standards, and Templates (the renamed Resources section).
- **Homepage**: The four questions and three outcomes appear on the homepage itself, so a first-time reader is one page from a first action. The hero, the jobs-and-clocks thesis, and the reference cards follow.
- **Retired**: Situation routes, the short and full paths, the three asset tracks, Decide whether to act, the five conditions, and the urgent and regular adopter categories. Their unique content moves to the page that uses it: deadline tables to Which dates apply to you and the plan step, stored-data rules to the backups and archives card, and verifier rules to the firmware and secure boot card.
- **Reference sections stay**: Technology options are linked from the programme by job; Learn holds the concepts the journey glosses; Standards holds the sources the journey cites.

## Writing Rules for Journey Pages

Start here, Baseline, and the Programme overview are held to reading budgets, checked by `npm test` and `npm run check` (`scripts/checks/reading.mjs`):

- At most `900` words per page.
- At most `2` internal links per `100` words.
- No sentence longer than `40` words.
- No backticked record field names in prose.
- The retired routing labels (short path, full path, situation route, asset track, five conditions, urgent adopter, regular adopter) do not appear as labels anywhere on the site, except where quoting a source. The ordinary words path, route, track, and condition remain available.

How the rules work in practice:

- **Restate short rules**: A one-line rule may appear on every page that needs it. Only long procedures have a single home that others link to.
- **Special cases last**: The main flow covers the common case. Exceptions sit in a short section at the end of the page, or go to a specialist.
- **No new classification**: Do not add a category, path, or track to the journey. A new reader situation becomes a question only if it changes what the reader does, and becomes a first-move row only if it has its own clock.

## Keeping It Simple

The previous routing grew more complex one careful fix at a time: each review checked for contradictions and missing exits, and each fix added a clause. These rules stop that recurring:

- **Measure before and after**: Every change to a journey page reports its reading metrics (words, links per 100 words, longest sentence, backticked terms, retired labels) before and after the change, using `npm run metrics`. A fix that raises a budget needs a stated reason.
- **Test with readers**: Before a change to the questions, outcomes, or first moves merges, fresh readers given only the changed pages and one persona brief each say what they would do first and which records they would keep. The five personas are a small firm on supplied software; a manufacturer with long-lived data and devices with fixed keys; a software supplier asked by its customers; a public body with one in-house system; and a regulated critical-infrastructure operator. Every programme decision must be right, and every edge case must land where this guide says.
- **Count what a rule change touches**: Changing a question should touch Start here, one first-move row, and the register template. If it touches more, the journey has started to grow a routing layer again.

## Why This Journey

### The problem it replaces

A full-site review in November 2026 scored reading and navigation 4 out of 10. The load sat in the routing layer: five route pages carried 223 of the site's 554 uses of path, route, track, and condition, at about four internal links per 100 words. Four questions produced an urgency category that no later step used, a path that amounted to whether a charter existed, a route, and five conditions that mostly restated the questions. A first-time reader read about 1,600 to 1,850 words and met about 20 terms before a first useful action, and kept six to nine records. Two rules kept the complexity in place: one page owned every rule and others had to link rather than restate it, and worked-example rows had to match record pages verbatim, which carried field names into prose.

### What others do

A survey of authorities, industry bodies, vendors, and routing exemplars outside post-quantum cryptography found:

- **Few serve the majority.** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (20 March 2025) are aimed primarily at large organisations, critical national infrastructure, and bespoke IT, and say that for organisations using mainly commodity IT, upgrades are likely to be delivered by their service providers. The AIVD, CWI, and TNO [PQC Migration Handbook](https://ir.cwi.nl/pub/34604/34604D.pdf) (December 2024) gives regular adopters about a page. Singapore CSA's [advisory for organisations](https://www.csa.gov.sg/alerts-and-advisories/advisories/advisory-on-quantum-safe-migration-for-organisations/) (14 October 2026) is the exception, with short steps for organisations generally.
- **Good triage is short and changes the outcome.** The GOV.UK Design System advises against a questionnaire when the rules fit on a start page and allows a "not sure" answer where valid ([check a service is suitable](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/), [question pages](https://design-system.service.gov.uk/patterns/question-pages/)).
- **Small organisations get a baseline.** UK [Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview) and CISA's [Cyber Essentials](https://www.cisa.gov/cyber-essentials) give a short fixed list, and CISA splits actions between the leader and what to take to IT.
- **Separating jobs is rare and valuable.** Few journeys keep key establishment, signatures, and long-lived devices apart; the handbook keeps that distinction inside the programme.

### What was tested

Five designs were written as short prototypes and tested with fresh readers, each given one prototype and one persona brief, twice per persona: today's routing; per-system clocks with task pages; one gate followed by diagnose, plan, and execute; a baseline plus add-ons chosen from situation descriptions; and this journey.

| Design | Correct programme decisions | Words to a first useful action |
| --- | --- | --- |
| Today's routing | 10 of 10 | About 1,600 to 1,850 |
| Per-system clocks | 8 of 10: the small firm was sent to a programme over one out-of-support product, in both runs | About 390 |
| Gate, then phases | 10 of 10 | About 330 to 400 |
| Baseline plus add-ons | 10 of 10 | About 245 |
| This journey | 10 of 10 | About 380 to 420 |

Only this journey, in both runs, scoped the public body to a small programme, had the supplier answer its customers from the register, sent the manufacturer to its boot-chip supplier before the design freeze, and put the critical operator's regulator and specialist first.

### Alternatives not chosen

- **Today's routing**: Correct, but four to seven times the reading, about 20 terms, and more records than readers needed.
- **Per-system clocks**: Treating an out-of-support product as hard to change sent the smallest reader into a programme. Its first-move table is kept.
- **Gate, then phases**: Correct, but opening the programme with setup delayed the manufacturer's most urgent action, and programme organisations lost the baseline. Its questions are kept.
- **Baseline plus add-ons**: The fastest start, but readers had to describe themselves, and mixed estates were drawn to "we buy in our IT" before reading on. Its baseline, its you and ask split, and its specialist outcome are kept.
- **Role entry points and an interactive plan builder**: Not prototyped. Role indexes tend to become their own triage layer, and most readers hold several roles. A plan builder hides its logic and needs answers readers often cannot give yet; it may suit a later front end to this journey.

### What the evidence does not show

The test readers were language models acting from persona briefs, not people. Their results show where pages mislead an attentive first-time reader, not how real readers behave. Differences in accuracy between the shortlisted designs are indicative; the reduction in reading effort and the per-system-clocks failure were consistent across every run.

## Open Questions

- **Suppliers' urgency**: Whether a supplier with no long-lived data or systems of its own should take its urgency from customers who are urgent. No test covered that case.
- **Section names**: Start here, Baseline, Programme, and Templates are working names. Baseline may read as a certification term to some readers.
