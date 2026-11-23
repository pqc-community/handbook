---
title: Programme
search_title: Run a post-quantum migration programme
sidebar_label: Overview
description: "First moves for each question that applied, small and full programme sizes, and the practices in three phases: diagnose, plan, and execute."
displayed_sidebar: journeySidebar
---

Run a programme when any of the four questions on [Start here](/start-here/) applies. Keep following the baseline for everything you buy in; the programme covers only what the questions found. If you run critical national infrastructure, a regulated service, or a large estate you build yourself, bring in specialist advice and speak to your sector regulator first. Name the owner (baseline action 1) before the first moves; the first moves only gather facts, so they need not wait for the regulator.

## First moves

Take the first move for each question that applied, this week. Each one is a separate line on the register, because each runs on its own clock.

| What applied | Its clock | First move |
| --- | --- | --- |
| Data that must stay secret for years | How long the data must stay secret | Ask the supplier, or the team that runs the system, in writing which method protects connections and which protects stored data, and when each changes. Keep connections and stored data as separate lines. |
| Devices with a fixed key | The design freeze, then the device's service life | For products you make: ask component suppliers in writing which post-quantum signature the boot verifier supports, and make one a condition of selection before the next design freeze. For devices you have already shipped: keep their signing key protected for the fleet's life, tell customers when a replacement is planned, and record the date. For devices you run: ask the maker for an upgrade or replacement route, and plan by end of life. |
| Signatures others rely on | How long you and everyone who checks your signatures take to move together | List who checks your signatures. Their verifiers must accept new signatures before you switch. Where a verifier can never change, treat it as a device with a fixed key; where another party controls it, such as an operating system, record its plan and date. |
| Systems you build or configure | Your own release cycle | Record each system's cryptographic library, protocols, and versions. |

If customers are asking about your post-quantum plans, answer from the register: the dates you can stand behind, and what is still unknown.

## Size

- **Small programme**: one or two systems, with no device that has a fixed key, such as a single in-house portal. The owner runs it with the sponsor's sign-off, keeps the register, and adds a change record for each change. No charter or progress report.
- **Full programme**: anything larger, any device with a fixed key, or any organisation Start here sends to a specialist and regulator first. A named sponsor and migration lead, a one-page programme charter, and a progress report at each review.

## Diagnose, plan, execute

The practices run in three phases. They overlap: supplier questions start during diagnosis, and each review reopens earlier work.

**Diagnose**

- [Set up the programme](/programme/set-up/): sponsor, lead, scope, and a first budget line.
- [Inventory the cryptography](/programme/inventory/): find where public-key cryptography is used, starting with the systems the questions found.

**Plan**

- [Decide what to migrate first](/programme/priority/): order the lines within each job. Key establishment goes by the longest confidentiality period, devices with a fixed key by the earliest design freeze, and other signatures by the most relying parties.
- [Plan the migration](/programme/plan/): the dates that apply, and four dates for each line.
- [Work with suppliers](/programme/suppliers/): written questions, judged answers, and purchase wording.

**Execute**

- [Choose an option](/technology-options/choosing/), using the technology card for the system. For key establishment, start with TLS, VPN and IPsec, SSH, or backups and archives; for signatures, PKI, code signing, or document signing; for devices with a fixed key, firmware and secure boot.
- [Make and verify one change](/programme/implementation/): pilot, rollback trigger, and a check that the new method is live.
- [Keep the ability to change again](/programme/changing-algorithms-again/).
- [Review and report](/programme/subsequent-review/): every three months while a line is first in its order or a fixed date falls within a year, and every six months otherwise. A programme's reviews replace the baseline's: check the baseline items at the same time.

## When no option exists in time

If no supported option exists before a fixed date, such as a design freeze or the end of support, record the line as blocked with a date, escalate to the sponsor, and get specialist advice on alternatives. One alternative is hardware that can accept a new key later. Do not record a blocked line as migrated.

## Records

The register for every line; a change record for each change you make; and, for a full programme, the programme charter and a progress report at each review. [Protect this first](/templates/examples/protect-this-first/) shows a full programme for a fictional manufacturer, and [Templates](/templates/) has every record.

## Sources

This page sets out the handbook's own method. The practices it links cite the authorities they draw on.

## Related pages

- [Start here](/start-here/)
- [Baseline](/baseline/)
- [Technology options](/technology-options/)
- [Templates](/templates/)
