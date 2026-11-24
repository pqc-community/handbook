# PQC Handbook - Periodic Review

How the handbook is kept current: a full review of the whole site, run once a month from Claude Code with `/goal`, that finds new developments, rechecks every cited source and page, and leaves a dated report. Mission and news scope: [purpose-and-positioning.md](./purpose-and-positioning.md). Sourcing, freshness, and post rules: [style-guide.md](./style-guide.md). Placement and linking: [navigation-structure.md](./navigation-structure.md). Journey rules: [reader-journey.md](./reader-journey.md).

**Status**: Adopted on 24 November 2026; first run in November 2026 (see [reviews/2026-11.md](./reviews/2026-11.md)).

## Principles

- **Full, every month**: Every run reviews every doc page and every source cited in `docs/`. Nothing is skipped because it was fine last month, and nothing is carried forward between runs except the date of the last report.
- **Derived, not maintained**: The source list is built from the pages at the start of each run, and the watchlist from the publishers the handbook already cites, so neither can drift from what is published.
- **Unverified is a status, not a pass**: A source that cannot be fetched is recorded as could not verify, with the reason, and is never counted as confirmed or as broken.
- **Decide and do**: The run makes every change it judges necessary, from correcting a date to revising guidance, adding a page, or upgrading a dependency, and records each decision in the report with its reason and source. A change is held back only when a guide's own rule cannot be met in the run, and then the report says which rule and why. The maintainer reviews the committed result before it is pushed.
- **Existing rules apply**: The same-change rule for authority updates, the freshness rules for posts, and the rule that reference pages never link an individual post are in [purpose-and-positioning.md](./purpose-and-positioning.md#news-and-analysis), [style-guide.md](./style-guide.md#news-and-analysis-posts), and [navigation-structure.md](./navigation-structure.md). This guide does not restate them.

## What a Run Covers

A run answers six questions in order. The report has one section for each.

### 1. What is new?

Check each publisher the handbook cites for anything issued since the last report (or, for the first run, since 21 November 2026): new or revised publications, drafts that became final, opened or closed comment periods, withdrawn documents, and changed positions or dates. The watchlist is derived, not kept by hand:

- every body whose document is summarised under `docs/standards/` (NIST, the US government and CISA, NSA, NCSC, BSI, ANSSI, AIVD and the Dutch government, ASD, the Canadian Centre for Cyber Security, CFDIR, CSA Singapore, ETSI, the European Commission, and PQCC);
- every IETF working group whose draft or RFC is cited in `docs/` (on 24 November 2026: tls, lamps, ipsecme, sshm, and mls), found through the IETF Datatracker;
- the platforms cited for deployment milestones on Technology options and Learn pages.

For each development, decide whether it changes anything the handbook states or should state. If it does, write the news post and make every page change in the same run. If it does not, record it in one line with the reason, so the next run knows it was seen. A publisher whose pages cannot be fetched is recorded as could not verify, like a source.

### 2. Is it still true?

Build the source list, then check every source on it. The list is every external URL cited in `docs/`, with the pages that cite it:

```bash
grep -rnoE "https?://[^][)(<>\"' \`]+" docs \
  | sed -E 's/[.,;:]+$//' \
  | awk -F: '{f=$1; sub(/^[^:]*:[0-9]+:/,""); if ($0 !~ /pqchandbook\.com|github\.com\/pqc-community/) print $0 "\t" f}' \
  | sort -u \
  | awk -F'\t' '{a[$1]=a[$1] (a[$1]?", ":"") $2} END{for(u in a) print u "\t" a[u]}' \
  | sort
```

Fetch each source and confirm that it is the document cited and that what the citing pages say about it (title, version, status, publication or revision date, and any dates or positions quoted) still holds. A landing page that shows status, version, and date is usually enough; read the full text only where a page quotes or paraphrases it. Give each source one status:

| Status | Meaning |
| --- | --- |
| **Confirmed** | Fetched this run; it is the cited document and the citing pages match it |
| **Updated** | Fetched this run; the source has changed, and every citing page now matches it |
| **Replaced** | The URL is gone or now points elsewhere; the citation now points to the issuing body's own current copy |
| **Could not verify** | Not fetched this run; the reason is recorded (blocked, timed out, or no official copy found) |

### 3. Is it still current?

Read every page for text that time alone has made wrong: deadlines, comment periods, and expected publication dates now in the past; words such as *recently*, *new*, *upcoming*, *this year*, *next year*, *currently*, and *expected* that no longer hold at the run date; and dates in the worked examples and the records' filled examples that are presented as still to come but are now past. Pages carry no checked or accessed dates ([style-guide.md](./style-guide.md#5-sourcing-and-citations)), so a run never adds or moves one: a status that still holds stays as it is, and the report records when it was checked.

### 4. Is it consistent?

Every date, status, and position that appears on more than one page must agree everywhere: the Standards summaries, Technology options cards, Set dates and milestones, Learn pages and explainers, the records' filled examples, and the glossary. When a run changes one, search for every other statement of it and change those too.

### 5. Is it still relevant?

Read each section as its audience would, against the developments found in question 1 and the run date. Does a Technology options card still give the right supplier questions now that a protocol default has changed? Do the four questions in Which plan you need and the core actions still hold? Is there a technology, situation, or authority that readers now meet and the handbook does not cover? Where the answer calls for change, make it, following the guide that owns that kind of change: [navigation-structure.md](./navigation-structure.md) for a new or moved page, [reader-journey.md](./reader-journey.md) for the questions, outcomes, core actions, or first moves (including its reader test, run with fresh subagents given only the changed pages as built and one persona brief each), and [style-guide.md](./style-guide.md) for everything written. Record each decision in the report with its reason and the source behind it, including decisions not to change something a reader might expect to have changed.

### 6. Is the site healthy?

Run the four checks in [README.md](./README.md#verification-and-build) (`npm test`, `npm run check`, `npm run typecheck`, and `npm run build`). The build already fails on broken internal links and anchors, and `npm run check` on an out-of-date records zip. Also run `npm outdated` and `npm audit`, and record any build warnings. Apply dependency updates, including major versions and fixes for security advisories, one package or related group at a time, keeping each only if all four checks still pass afterwards and the built site still renders its homepage, a doc page, and a post correctly. Revert any update that fails, and record it in the report with the failure.

News posts are not rechecked as current, because each is a snapshot at its date. Where a development found in question 1 supersedes what a post reported, add the later-update note the style guide describes.

## Fetching Sources

Some publishers block automated requests, and which ones do varies by run and by network. A test on 24 November 2026 from one connection could not fetch 13 of 195 cited URLs, among them pages from ANSSI, EUR-Lex, ASD, CISA, NSA, NIST's NCCoE, and PQCC.

- **Be polite**: Fetch one page at a time from each site, use the tools' normal behaviour, and never solve a challenge, rotate addresses, or otherwise try to get past bot protection.
- **Detect blocking by response, not keywords**: Treat a `403`, `429`, `202` with no content, a connection failure, or a page whose title is not the cited document as could not verify. Do not search the page body for words such as *captcha*: in a test run that flagged about 40 NIST pages that had loaded correctly.
- **Use the issuer's own alternative route**: Where the issuing body offers another official route to the same facts (such as its publication listing, a DOI record, or an IETF Datatracker page), confirming through it counts. A third-party copy, cache, or archive does not.
- **Hand-check afterwards**: After the goal finishes, a maintainer opens each could-not-verify source in a browser, and Claude records the result in the report as confirmed, updated, or replaced, with "checked by hand" in its note. Anything still unverified stays so.
- **Escalate what stays unverified**: A source that could not be verified in two consecutive reports is listed at the top of the next report for the maintainer to decide on, with the claims that rest on it and any other official copy from the same issuer that might be tried. The run does not reword or remove those claims: a blocked fetch is not evidence that a claim is wrong, so the page stays as it is until the maintainer decides.

## Running the Review

1. Start Claude Code in the repository on an up-to-date `main`, in auto mode so the run is not stopped for permission prompts.
2. Paste the goal below. It takes `YYYY-MM` to be the current year and month, so it can be pasted unchanged.
3. When the goal ends, read the closing summary and the report, then do the hand-check of could-not-verify sources and ask Claude to record the results in the report.
4. Review the decisions in the report and the diff, and push the branch and open a pull request yourself. To undo a decision, ask Claude to revert it on the branch and note the reversal in the report.

### The goal

```text
/goal The YYYY-MM periodic review in periodic-review.md is complete, where YYYY-MM is the current year and month. Steps: (1) Create branch review/YYYY-MM from main before any edit. (2) Create reviews/YYYY-MM.md with the six sections in periodic-review.md and fill each section as you work, so the report is the record if the session compacts or resumes. (3) Build the source list with the command in periodic-review.md and give every listed source exactly one status (confirmed, updated, replaced, or could not verify with a reason), fetching politely and never bypassing bot protection. (4) Review every page under docs/, split by sidebar section across subagents if useful; fix what is wrong, out of date, or inconsistent, make the relevance changes you judge necessary under the guide that owns each, and record every decision with its reason. (5) Write any news posts and later-update notes that new developments need. (6) Apply dependency updates as periodic-review.md describes, reverting any that fail. Run npm test, npm run check, npm run typecheck and npm run build, and fix failures. (7) Confirm the current branch is review/YYYY-MM, then commit all changes. Do not push. Done when your final message, in one turn, shows: the branch name; the number of sources listed and the count for each status; doc pages reviewed out of the total; the number of new developments, page changes, posts, relevance decisions, and dependency updates kept and reverted; each of the four commands with exit code 0 from this session; and the commit hash. Stop and report what remains if not done after 40 turns.
```

The goal stays under the 4,000-character limit. The evaluator that decides whether a goal is met reads only the conversation, not files, so the final message must show the evidence itself. The first run, in November 2026, completed under it; the hand-check, the escalation rule and the checked-dates rule were settled during that run and are reflected here.

## The Report

Each run writes `reviews/YYYY-MM.md`, which is the review log. It is not part of the site and is not linked from it. It holds, in order:

- the run date, the branch, the commit, and the closing summary counts;
- sources that could not be verified in the previous report as well as this one, if any, with the claims that rest on them, for the maintainer to decide on;
- one section for each of the six questions, with sources as a table of URL, citing pages, status, and note, and pages listed by sidebar section;
- every decision the run made beyond a straight correction (relevance changes, new or moved pages, journey changes and their reader-test results, dependency updates kept or reverted, and changes held back with the rule that held them), each with its reason and source;
- the hand-check results, added after the goal ends.

Never rewrite an earlier report; correct it in the next one.
