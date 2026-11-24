# Section reviewer brief (template)

The brief the lead gives each section reviewer in a periodic review, under [periodic-review.md](../periodic-review.md). The lead copies it into the run's scratchpad, fills in the bracketed values, and points each reviewer at it with its letter and scope. It is not part of the site.

---

# Brief for section reviewers: PQC Handbook periodic review, [YYYY-MM]

Repository: the handbook repository, with branch `review/[YYYY-MM]` already checked out. Do not switch branches, commit, or push. Today is [run date]. The last report is [reviews/previous.md, or "none" on a first run].

Read first: `periodic-review.md` (questions 2 to 5 and Fetching Sources), `style-guide.md`, and `AGENTS.md`. Read `navigation-structure.md` before adding or moving a page and `reader-journey.md` before changing the questions, outcomes, core actions, or first moves. Never cite or link `.ai-helper-files/`.

## Inputs from the lead

- `[path]/fetch-with-pages.tsv`: one line per external URL cited in `docs/`, with HTTP status, final URL, content type, page title, and citing pages. A `403`, `429`, `202` with no content, `000`, a final URL on an unblock or challenge page, or a page with no title or the wrong title means the source was blocked.
- `[path]/owners.tsv`: one line per URL with the section that owns it, the first section in sidebar order whose pages cite it. Give a status only for the sources your section owns.

## Your job for each page in your scope

1. Read the whole page.
2. For each external source it cites, confirm that what the page says about it (title, version, status, publication or revision date, and any dates or positions quoted) still holds. Fetch it with WebFetch or `curl -sL -A "PQC-Handbook-Review/1.0 (+https://github.com/pqc-community/handbook)"`, one request at a time per site. A landing page that shows status, version and date is usually enough; read full text only where the page quotes or paraphrases it. For a source another section owns, check the claims your page makes and report any mismatch, but do not give it a status.
3. Never solve a challenge, change user agent to look like a browser, use proxies or archives, or otherwise get past bot protection. A blocked source is could not verify unless the issuer's own alternative route confirms the same facts: its publication listing, a DOI record, an IETF Datatracker page, the Federal Register API, or another official host of the same issuer. Third-party copies never count.
4. Check currency against the run date: deadlines, comment periods and expected dates now past; words such as recently, new, upcoming, this year, next year, currently, and expected; and worked-example dates presented as future but now past.
5. Decide and do: fix anything wrong, out of date, or inconsistent within your pages, and make any relevance change you judge necessary under the guide that owns it, where a source or a clear change in practice supports it. Do not defer: if a change needs more reading, do the reading. Edit only files in your scope; if a fact you change is also stated outside it, list it under cross-section notes.
6. Follow the style guide, including: no checked or accessed dates on doc pages; prose dates such as "5 November 2026"; quote any front-matter value that contains ": "; attribute every date and recommendation to its authority and audience; keep key establishment, signatures, and verifiers separate.
7. Run `npm test` and `npm run check` before you finish. Do not run the build; the lead runs it after merging the sections.

## Output

Write your results to `[path]/out-[letter].md` and return the same content as your final message, with these sections:

```
## Sources
| URL | Status | Note |
(one row per source your section owns; Status is Confirmed, Updated, Replaced, or Could not verify, with a reason for the last)

## Claim mismatches on sources owned elsewhere
(URL, page, what the page says, what the source says; "None" if none)

## Pages
| Page | Changed? | What changed or was checked |
(one row per page in your scope)

## Decisions
(each change beyond a straight correction, with reason and source; changes held back only where a guide's rule cannot be met, naming the rule; "None" if none)

## Currency findings

## Cross-section notes
(facts changed or found wrong that are also stated outside your scope, with the correct value, the source, and the pages you know state it; "None" if none)
```

Never mark a source Confirmed unless you fetched it, or its issuer's alternative route, in this run and checked the claims.
