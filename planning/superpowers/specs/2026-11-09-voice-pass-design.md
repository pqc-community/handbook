# Voice pass design

Date: 2026-11-09

A tight edit of every visitor-facing string so the public site matches the W264C voice: practical, neutral, and decision-oriented, plain enough to use without a cryptographer in the room, and written as a briefing. The site is not yet registered with Google. This pass is the copy that will be indexed.

The voice source is the Voice section of `davysaurus/docs/work/26q4/W264C-pqc-handbook/style-guide.md`. Where a display name in this spec differs from [the first-edition design](./2026-11-09-pqc-handbook-design.md), this spec wins for the words a visitor reads. Page jobs and section order stay as in that design. That file is not rewritten. Before search indexing, the five Start here paths were renamed to match the labels in the table below.

## Edit contract

A visitor-facing sentence changes when it fails one of these tests.

1. **Lead.** A handbook page opens on an algorithm, a parameter set, or a proof. It opens on the reader's decision, the date, or the threat.
2. **Plainness.** The sentence needs a cryptographer in the room, or it uses handbook jargon the reader does not need.
3. **Split jobs.** It treats key establishment and signatures as one cutover where that split changes the action.
4. **Options.** It picks hybrid or pure post-quantum for the reader when the filed guides disagree, or it calls a construction required, the only way, or proof of compliance without a citation in that sentence.
5. **Voice.** Hype, a single-vendor recommendation, or the voice of a standards body.
6. **Entry.** The way into the page is a tools catalogue or an algorithm encyclopaedia.
7. **Professional register.** The handbook's own voice is a briefing: plain British English, complete sentences in body prose, neutral and serious. A line fails when it sounds like a campaign, a pitch, or casual American speech. Slogan fragments, pep, and cute metaphors fail. Homepage card text, and an Outcome line that is already a noun phrase, stay in that form.

A change keeps the same fact. Dates, duties, quotations, source names, and links stay. Page jobs stay. Section order stays. Second person stays when the sentence addresses the person who has to decide.

If the only smoother wording would change what an authority is said to require, recommend, or set aside, the sentence stays. Record it in the exceptions section below: the page, the sentence, the test it fails, and why it was left. Quoted weak answers stay in the casual voice. They are the voice the page is warning against.

Decision-page headings stay: "What can go wrong", "A stronger practice", "What to ask", "Evidence", "A weak answer", "A stronger answer", "Which pass", "Options", "Sources", and "Related pages".

The tagline stays: "A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding." The four navbar labels stay: Standards and timelines, Migration practices, Algorithm and protocol options, Resources.

Any other sentence that fails a test is rewritten under the same rules. The lines named below are the failures already identified.

## Labels

`sidebars.ts` document ids match the paths in the table. Other URL paths stay. The label a visitor sees comes from each page's `title` and `sidebar_label`, from footer items in `docusaurus.config.ts`, from homepage cards, and from in-page link text. Every visible use of an old seat name takes the new label, including meta descriptions.

**Keep software updated** stays.

| Path | Current label | New label |
| --- | --- | --- |
| `/start-here/the-migration-plan/` | I own the plan | The migration plan |
| `/start-here/product-release-dates/` | I own the product dates | Product release dates |
| `/start-here/questions-for-a-vendor/` | I have to ask a vendor | Questions for a vendor |
| `/start-here/evidence-of-the-migration/` | I have to show evidence | Evidence of the migration |
| `/start-here/changing-a-protocol/` | I have to change a protocol | Changing a protocol |

The homepage heading **Choose your path** becomes **Five responsibilities**. Each card states the outcome as a plain noun phrase:

| Card | Text |
| --- | --- |
| The migration plan | An inventory, a priority, and a one-page plan. |
| Product release dates | A release date tied to one asset, and a vendor question if someone else owns the stack. |
| Questions for a vendor | Written questions and a tracking sheet. |
| Evidence of the migration | The records that show the inventory, the priority, the vendor answer, and what shipped. |
| Changing a protocol | Which job is changing, which option an authority defends, and how to roll back. |

The heading **What you leave with** becomes **Outcome** on the five renamed seat pages and on Protect this first. The sentence under that heading on Protect this first stays: "One page: the two assets, why each is first, the vendor question, and the date of the next pass."

In `navigation-structure.md`, the seat table uses the new labels. The column heading **Seat** stays. The column heading **Leave with** becomes **Outcome**. The opening sentence of that section becomes: "Each Start here page names that responsibility's decisions, the reading order, the outcome, and a weak answer beside a stronger one." The Keep software updated row routes to **The migration plan**.

## Sentences already identified

**Migration practices**, body and description. Drop "operating layer". The description is: "How you run the programme: the inventory, the priority, the vendor plan, changing algorithms again, and the next pass." The opening is: "Use this section to run the programme: the inventory, the priority, the vendor plan, the ability to change algorithms again, and the next pass."

**Start here.** "The shared operating layer starts at Where to start" becomes "The migration practices start at Where to start."

**Changing algorithms again.** "This page is the capability. The next pass is the rhythm." becomes "This page is the capability to change algorithms again. The next pass is the later review of the same estate."

**Homepage.** "Each path opens the same handbook" becomes "Each responsibility uses the same handbook." The following sentence stays: "Keep software updated is linked from Start here." The heading "Guidance you can check" becomes "Named sources." The sentence under it stays: "Dates, duties, and options on this site name the authority and the date of the source."

## Files

Edit:

- Every public page in `docs/`.
- `src/pages/index.tsx`.
- Footer labels in `docusaurus.config.ts`.
- The seat table and the outcome wording in `navigation-structure.md`.

Leave in place:

- Every URL path except the five Start here paths in the label table.
- The tagline and the four navbar labels.
- [The first-edition design](./2026-11-09-pqc-handbook-design.md), the implementation plan, and the `.superpowers/sdd/` briefs.
- Quoted weak answers.
- Sources bibliography lines, except related-page link text that still uses an old seat name.

## Exceptions

None yet. A sentence left unchanged because a rewrite would change a sourced duty is added here before the pass is called done.

## Verification

The pass is done when all four of these are true.

1. A search of the files listed under Edit finds none of these phrases left unexplained: "I own the plan", "I own the product dates", "I have to ask a vendor", "I have to show evidence", "I have to change a protocol", "Choose your path", "Leave with", "What you leave with", "operating layer", and "the rhythm". Any remaining hit is an entry in Exceptions.
2. `npm run check:sources` passes.
3. `npm run typecheck` and `npm run build` pass.
4. The homepage, Start here, one renamed seat page, Migration practices, and Changing algorithms again are read in the browser. The new labels show in the page, the sidebar, and the footer, and the retired campaign lines are gone.
