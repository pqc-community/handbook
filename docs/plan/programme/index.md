---
title: Programme
search_title: Run a post-quantum migration programme
sidebar_label: Overview
description: "First moves for each question that applied, small and full programme sizes, and the practices in three phases: diagnose, order and schedule, and execute."
displayed_sidebar: journeySidebar
---

Run a programme when any of the [four questions](/plan/) applies, and keep following the core actions for everything you buy in, because the programme covers only what the questions found. Start by naming the owner, which is core action 1.

If you run critical national infrastructure, a regulated service, or a large estate you build yourself, bring in specialist advice and ask your sector regulator which requirements and dates apply to you and what evidence it expects. The first moves only gather facts, so they need not wait for the regulator's answer.

## First moves

This week, take the first move for each question that applied. Record each as its own register row, for one system and one job, because each runs on its own clock.

| What applied | Its clock | First move |
| --- | --- | --- |
| Data that must stay secret for years | How long the data must stay secret | Ask the supplier, or the team that runs the system, in writing which method protects connections and which protects stored data, and when each changes. Keep connections and stored data as separate rows. |
| Devices with a fixed key | The design freeze, then the device's service life | For products you make: ask component suppliers in writing which post-quantum signature the boot verifier supports, and make one a condition of selection before the next design freeze. For devices you have already shipped: keep their signing key protected for the fleet's life, tell customers when a replacement is planned, and record the date. For devices you run: ask the maker for an upgrade or replacement route, and plan by end of life. |
| Signatures others rely on | How long you and everyone who checks your signatures take to move together | List who checks your signatures, because their verifiers have to accept new signatures before you switch. Treat a verifier that can never change as a device with a fixed key, and where another party controls one, such as an operating system, record that party's plan and date. |
| Systems you build or configure | Your own release cycle | Record each system's cryptographic library, protocols, and versions. |

If customers are asking about your post-quantum plans, answer from the register: the dates you can stand behind, and what is still unknown.

## Size

Count a system as one service or product with one owner, such as a portal and its servers, or one device model, not each server or site.

- **Small programme**: one or two systems, with no device that has a fixed key, such as a single in-house portal. The owner runs it with the sign-off of a sponsor, such as a director or senior risk owner, keeping the register and a change record for each change, but needs no charter or progress report.
- **Full programme**: anything larger, any device with a fixed key, or any organisation whose answers send it to a specialist and regulator first. It needs a named sponsor and migration lead, a one-page programme charter, and a progress report at each review.

## Diagnose, order and schedule, execute

The practices run in three phases, which overlap, because supplier questions start during diagnosis and each review reopens earlier work.

**Diagnose**

- [Set up the programme](/plan/programme/set-up/): sponsor, lead, scope, and a first budget line.
- [Inventory the cryptography](/plan/programme/inventory/): find where public-key cryptography is used, starting with the systems the questions found.

**Order and schedule**

- [Decide what to migrate first](/plan/programme/priority/): order the rows within each job, with key establishment going by the longest confidentiality period, devices with a fixed key by the earliest design freeze, and other signatures by the most relying parties.
- [Set dates and milestones](/plan/programme/dates/): the dates that apply, and four dates for each row.
- [Work with suppliers](/plan/programme/suppliers/): written questions, judged answers, and purchase wording.

**Execute**

- [Choose an option](/technology-options/choosing/), using the technology card for the system. For key establishment, start with TLS, VPN and IPsec, SSH, or backups and archives; for signatures, PKI, code signing, or document signing; for devices with a fixed key, firmware and secure boot.
- [Make and verify one change](/plan/programme/implementation/): pilot, rollback trigger, and a check that the new method is live.
- [Keep the ability to change again](/plan/programme/changing-algorithms-again/).
- [Review and report](/plan/programme/subsequent-review/): every six months, and every three months while a fixed date, such as a design freeze or end of support, falls within the next year. A programme review replaces the separate six-monthly review of the core actions, so check them at the same time.

## When no option exists in time

If no supported option exists before a fixed date, such as a design freeze or the end of support, record the row as blocked with a date and escalate to the sponsor. Get specialist advice on alternatives, such as hardware that can accept a new key later, and do not record a blocked row as migrated.

## Records

Every programme keeps the register and a change record for each change you make, and a full programme adds the programme charter and a progress report at each review. [Protect this first](/templates/examples/protect-this-first/) shows a full programme for a fictional manufacturer, and [Templates](/templates/) has every record.

## Sources

This page sets out the handbook's own method. The practices it links cite the authorities they draw on.

## Related pages

- [Which plan you need](/plan/)
- [Core actions](/plan/core-actions/)
- [Technology options](/technology-options/)
- [Templates](/templates/)
