# PQC Handbook - Reader Journey

How a reader moves from first arrival to their first useful action, why the handbook routes readers this way, and the rules that keep the journey simple. Mission and audience: [purpose-and-positioning.md](./purpose-and-positioning.md). Sections, URLs, and sidebars: [navigation-structure.md](./navigation-structure.md). Voice: [style-guide.md](./style-guide.md). Visual identity: [brand-guidelines.md](./brand-guidelines.md).

**Status**: Adopted and implemented on 23 November 2026, and refined the same month by reader tests: the section is Plan your migration, its first page is Which plan you need, and the plan every organisation follows is Core actions. It replaced the situation routes, the two paths and three asset tracks, Decide whether to act, and the nine-record set.

## The Journey in One Picture

Four questions about the organisation, core actions that everyone follows, and a programme only when the questions find something that cannot wait for suppliers.

```text
Which plan you need: four questions about the organisation
(yes / no / not sure; not sure counts as yes until someone confirms)
 ├── None apply ─────────────► Core actions
 ├── Any applies ────────────► Core actions + Programme
 │                              ├── First moves, one per question that applied
 │                              └── Diagnose → Order and schedule → Execute
 └── Critical, regulated, or ──► Specialist advice and the sector regulator first,
     a large estate you build      then Core actions + Programme
```

The reader learns three terms to act: **core actions**, **programme**, and **register**. Key establishment, signatures, verifier, hybrid, and relying parties are glossed in one line where they first appear.

## Principles

- **Ask only what changes the outcome**: Each question exists because its answer changes what the reader does next. If a rule fits on the page, state it there instead of asking a question.
- **Serve the majority first**: Most readers buy in their technology and need a short, complete plan. The core actions are that plan, written so a reader who needs nothing more can stop there with confidence.
- **Everyone does the core actions**: Programme organisations keep doing the core actions for everything they buy in. The programme covers only what the four questions found.
- **Separate jobs where their clocks differ**: Key establishment, signatures, and verifiers that cannot be updated each get their own first move, register row, and ordering rule. Job separation lives in the programme, not in the routing.
- **A first move, not a framework**: Every outcome ends in an action the reader can take this week, named with who does it.
- **Hand off as an action**: Where the handbook reaches its limit, the page tells the reader whom to contact first, rather than noting a caveat.
- **Readable alone**: Each journey page makes sense to a reader who arrived from search and opens nothing else.

## Which Plan You Need

Which plan you need asks four questions about the organisation as a whole. A question applies if any system, service, or product the organisation runs fits it.

| # | Question | Why it is asked |
| --- | --- | --- |
| 1 | **Data that must stay secret for years.** Information that must stay confidential for many years and is protected in transit or at rest by public-key methods. Measured by how long it must stay secret, not how long it is kept. | Recorded traffic and wrapped keys can be decrypted later, so the exposure has already started. |
| 2 | **Devices with a fixed key.** Products or devices, made or run, that check signatures with a key or method that cannot be changed after shipment, in hardware or software. A key a normal update can replace is not fixed. | The design freeze, then the device's service life, sets the deadline. |
| 3 | **Signatures others rely on.** A certificate authority, public or internal, or code, firmware, or document signing that other people or devices check. Signing through a supplier's e-signature service is supplied IT. | Everyone who checks the signatures has to move with the signer. |
| 4 | **Systems you build or configure.** Software or firmware the organisation builds, or cryptography it sets up on its own servers, load balancers, VPNs, or applications. One such system is enough. Set-up an IT provider does and keeps updated counts as supplied. | Only the organisation can change it, on its own release cycle. |

Rules for the questions:

- **Not sure counts as yes** until a named person confirms, by a named date. Record both on the register.
- **Do not wait for a complete inventory.** One system that fits is enough to answer yes.
- **Many years**: This handbook treats ten years or more as many years. The page says that ordinary business records, such as accounts, client files, and staff records, usually fall short, and long-lived designs, health records, and security-sensitive files often do not; without that line, a small firm answered not sure and was sent to a programme. Where an authority sets a threshold for its audience, such as the EU NIS Cooperation Group roadmap for Member States, cite it with that audience.
- **Out-of-support products are not a trigger.** A supplied product with no updates or no post-quantum plan is a core-actions item with a replacement date, never a reason on its own to start a programme.
- **Three outcomes only**: none apply (core actions); any applies (core actions and a programme); critical, regulated, or a large self-built estate (specialist advice and the sector regulator first, then core actions and a full programme).

The page also carries a short **Which dates apply to you** table: each authority's milestones, the audience the authority names, and what to record when no authority addresses the reader. It never presents one authority's dates as universal.

## Core Actions

The core actions are seven actions, each marked **you** or **ask** (your IT provider or supplier), with the time each takes. They cover naming an owner, listing what is in use, keeping it supported and updated, replacing what is out of support (with interim limits until replaced), post-quantum wording for purchases and renewals, not counting anything as migrated without evidence, and a review every six months. In a small organisation they take about a day to set up and an hour or two at each review.

- Purchase wording is given as a sentence the reader can copy, with each standard named once and glossed.
- The core actions keep two records: the register and the purchase wording.
- The core actions are the whole plan for organisations where no question applies. The page says so plainly.

## Programme

The programme page opens by saying who runs one and in what order: name the owner (core action 1) first, then take the first moves. Organisations in the specialist outcome bring in specialist advice and speak to their regulator, but the first moves only gather facts, so they need not wait.

The **first moves** are one row per question, naming the clock it runs on and the action to take this week. A reader who answered yes to two questions does two first moves. Each is its own register row, for one system and one job.

| Question that applied | First move |
| --- | --- |
| Data that must stay secret for years | Ask the supplier, or the team that runs it, in writing which method protects connections and which protects stored data, and when each changes. Separate register rows for each. |
| Devices with a fixed key | For products being designed: make a post-quantum signature option a condition of component selection before the design freeze. For devices already shipped: keep their signing key protected for the fleet's life, tell customers when a replacement is planned, and record the date. For devices you run: ask the maker for an upgrade or replacement route, and plan by end of life. |
| Signatures others rely on | List who checks the signatures; verifiers must accept new signatures before signers switch. A verifier that can never change is treated as a device with a fixed key; one another party controls, such as an operating system, is recorded with that party's plan and date. |
| Systems you build or configure | Record each system's cryptographic library, protocols, and versions. |

The programme has two sizes. A system counts as one service or product with one owner, such as a portal and its servers, or one device model, not each server or site.

- **Small programme**: one or two systems, with no device that has a fixed key. The owner runs it with the sign-off of a sponsor, such as a director or senior risk owner, keeps the register, and adds a change record for each change. No charter or progress report.
- **Full programme**: anything larger, any device with a fixed key, or any organisation in the specialist outcome. A named sponsor and lead, a one-page programme charter, and a progress report at each review. Every programme reviews every six months, and every three months while a design freeze, contract renewal, or end of support falls within the next year; those reviews replace the core actions' own six-monthly review and include it.

After the first moves, the existing migration practices run in three phases: **Diagnose** (set up, find the cryptography), **Order and schedule** (order the work within each job, set dates and milestones, work with suppliers), and **Execute** (choose an option from the technology card, make and verify each change, keep the ability to change again, review and report). The page also says what to do when no option exists before a fixed date, and that suppliers asked by their customers answer from the register.

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

- **Navbar**: Learn the basics and Plan your migration lead, as the two ways in: one to understand, one to act. Technology options, Standards, and Templates follow. Core actions and Programme sit inside Plan your migration, under `/plan/`, with Which plan you need as its first page, so a reader sees one home for the plan.
- **Homepage**: A short hero, then two equal ways in, then the situations readers arrive with. The hero's heading is "Every organisation needs a post-quantum migration plan."; four plain sentences follow (why, that most organisations need only core actions, that some also need a programme, and what the handbook does) and one note that the guidance is vendor-neutral and not a formal risk assessment. Two equal cards, Learn the basics and Plan your migration, each show what is inside them and end level on one link. **Why you might be here** lists six situations, each linked to its answer, including critical and regulated services. Three reference cards close the page. The four questions and outcomes live only on Which plan you need, so the homepage cannot drift from them.
- **Retired**: Situation routes, the short and full paths, the three asset tracks, Decide whether to act, the five conditions, and the urgent and regular adopter categories. Their unique content moves to the page that uses it: deadline tables to Which dates apply to you and Set dates and milestones, stored-data rules to the backups and archives card, and verifier rules to the firmware and secure boot card.
- **Reference sections stay**: Technology options are linked from the programme by job; Learn holds the concepts the journey glosses; Standards holds the sources the journey cites.

## Writing Rules for Journey Pages

Which plan you need, Core actions, and the Programme overview are held to reading budgets, checked by `npm test` and `npm run check` (`scripts/checks/reading.mjs`):

- At most `900` words per page.
- At most `2` internal links per `100` words.
- No sentence longer than `40` words.
- No backticked record field names in prose.
- No staccato paragraphs: a paragraph of three or more sentences must average at least `15` words a sentence. Short sentences are fine; a run of them, each a separate rule, reads as small print. Join related points, as the style guide's "Connected, not staccato" rule describes.
- The retired routing labels (short path, full path, situation route, asset track, five conditions, urgent adopter, regular adopter) and the retired page names (Decide whether to act, Start here, Plan the migration, Baseline) do not appear as labels anywhere on the site, except where quoting a source. The ordinary words path, route, track, and condition remain available.

How the rules work in practice:

- **Restate short rules**: A one-line rule may appear on every page that needs it. Only long procedures have a single home that others link to.
- **Special cases last**: The main flow covers the common case. Exceptions sit in a short section at the end of the page, or go to a specialist.
- **No new classification**: Do not add a category, path, or track to the journey. A new reader situation becomes a question only if it changes what the reader does, and becomes a first-move row only if it has its own clock.

## Keeping It Simple

The previous routing grew more complex one careful fix at a time: each review checked for contradictions and missing exits, and each fix added a clause. The same happens at sentence level, where each fix appends a short sentence until the page reads as small print. These rules stop both recurring:

- **Measure before and after**: Every change to a journey page reports its reading metrics (words, links per 100 words, longest sentence, backticked terms, retired labels, staccato paragraphs) before and after the change, using `npm run metrics`. A fix that raises a budget needs a stated reason.
- **Test with readers**: Before a change to the questions, outcomes, or first moves merges, fresh readers given only the changed pages, as built, and one persona brief each say what they would do first and which records they would keep. Test the built pages, not the Markdown: the navbar and sidebar are part of what readers see. The five core personas are a small firm on supplied software; a manufacturer with long-lived data and devices with fixed keys; a software supplier asked by its customers; a public body with one in-house system; and a regulated critical-infrastructure operator. Add a newcomer, an executive, or a returning practitioner when testing the homepage or names. Every programme decision must be right, and every edge case must land where this guide says.
- **Count what a rule change touches**: Changing a question should touch Which plan you need, one first-move row, and the register template. If it touches more, the journey has started to grow a routing layer again.

## Why This Journey

### The problem it replaces

A full-site review in November 2026 scored reading and navigation 4 out of 10. The load sat in the routing layer: five route pages carried 223 of the site's 554 uses of path, route, track, and condition, at about four internal links per 100 words. A first-time reader read about 1,600 to 1,850 words and met about 20 terms before a first useful action, and kept six to nine records. Two rules kept the complexity in place: one page owned every rule and others had to link rather than restate it, and worked-example rows had to match record pages verbatim, which carried field names into prose.

### What others do

- **Few serve the majority.** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (20 March 2025) are aimed primarily at large organisations, critical national infrastructure, and bespoke IT, and say that for organisations using mainly commodity IT, upgrades are likely to be delivered by their service providers. The AIVD, CWI, and TNO [PQC Migration Handbook](https://ir.cwi.nl/pub/34604/34604D.pdf) (December 2024) gives regular adopters about a page. Singapore CSA's [advisory for organisations](https://www.csa.gov.sg/alerts-and-advisories/advisories/advisory-on-quantum-safe-migration-for-organisations/) (14 October 2026) is the exception, with short steps for organisations generally.
- **Good triage is short and changes the outcome.** The GOV.UK Design System advises against a questionnaire when the rules fit on a start page and allows a "not sure" answer where valid ([check a service is suitable](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/), [question pages](https://design-system.service.gov.uk/patterns/question-pages/)).
- **Small organisations get a short fixed list.** UK [Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview) and CISA's [Cyber Essentials](https://www.cisa.gov/cyber-essentials) give one, and CISA splits actions between the leader and what to take to IT.
- **Separating jobs is rare and valuable.** Few journeys keep key establishment, signatures, and long-lived devices apart; the handbook keeps that distinction inside the programme.

### Why this design

Five designs were prototyped and tested with fresh readers, one persona each, twice: the previous routing; per-system clocks; one gate followed by phases; a short list plus add-ons; and this journey. All but per-system clocks routed every reader correctly, and that design sent the small firm into a programme over one out-of-support product. This journey reached a first useful action in about 400 words, against about 1,700 for the previous routing, and was the only design that, in both runs, scoped the public body to a small programme, had the supplier answer its customers from the register, sent the manufacturer to its boot-chip supplier before the design freeze, and put the critical operator's regulator first.

It keeps the best part of each alternative: the first-move table from per-system clocks, the questions from the gate design, and the short list, the you-and-ask split, and the specialist outcome from the add-ons design. Role entry points and an interactive plan builder were not prototyped: role indexes tend to become their own triage layer, and a plan builder hides its logic.

### Why these names

- **Plan your migration**: The first page was called Start here, which sorted readers rather than introducing the subject, so a reader who wanted the basics first was sent to the wrong place. Learn the basics and Plan your migration are now the two ways in. The name works only with its structure: on its own, "migration" read as a project for someone else, but with Core actions and Programme inside it, and a hero saying every organisation needs a plan, readers knew where their plan lived. Keep the name, the section, and the hero together.
- **Core actions**: The plan every organisation follows was called Baseline, which on its own already means a security or control baseline, a current-state inventory (as in the PQC Coalition roadmap's "Baseline Understanding"), a certification, or a project baseline; no test reader expected a plan behind it. Size-based pairs such as Mini-plan and Full programme read as tiers to choose between, so programme organisations would drop the actions for what they buy in. Name the page by what it is, not by its size. Keep Programme.

### Why the homepage looks like this

- **No questions on the homepage**: With the four questions and outcomes inline, most test readers found the homepage too much, and the copy drifted from Which plan you need. Two cards that show what is inside them, and a list of the situations readers arrive with, let readers recognise themselves and reach a first action in one click.
- **A short hero**: A hero that stacked qualifiers and dated caveats read as small print. Four plain sentences and one note keep it short; dates, sizes, and specialist advice sit one click away, where they keep their authority, audience, and detail.

### What the evidence does not show

The test readers were language models acting from persona briefs, not people. Their results show where pages mislead an attentive first-time reader, not how real readers behave. They are sensitive to how a test is framed: Baseline scored lowest on its own and well beside Programme. Treat differences between close options as indicative, and act on results that hold across framings.

## Open Questions

- **Suppliers' urgency**: Whether a supplier with no long-lived data or systems of its own should take its urgency from customers who are urgent. No test covered that case.
- **Terms on the programme page**: Some readers could not tell what a job is, or whether signing an installer is a separate system from the app it installs. The page defines a system, but not a job.
- **One owner or two**: Readers asked whether the core-actions owner and the programme owner should be the same person. The pages do not say.
- **"Migration"**: It felt heavy to the newcomer persona, who is served by Learn the basics.
