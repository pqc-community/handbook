---
title: UK NCSC sets 2028, 2031 and 2035 milestones
description: The UK NCSC's migration timelines give large organizations, CNI operators and bespoke IT three post-quantum milestones, and leave commodity IT to suppliers.
date: 2025-03-20
authors: [pqc_handbook]
tags: [authority-updates, uk, key-establishment, signatures, verifiers]
---

On March 20, 2025, the UK National Cyber Security Centre (NCSC) published [Timelines for migration to post-quantum cryptography](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), which sets three milestones for 2028, 2031 and 2035. The guidance is written for large organizations, operators of critical national infrastructure, and organizations that run bespoke IT, and it expects most commodity IT to be migrated through normal supplier updates.

{/* truncate */}

## What NCSC published

The guidance, summarized on the handbook's [NCSC timelines page](/standards/migration-guides/ncsc-migration-timelines/), sets out how an organization should scope and stage its migration, from discovery and planning through to completed migration. By 2028, NCSC expects its audience to have defined migration goals, carried out full discovery, and built an initial migration plan. By 2031 it expects the early, highest-priority migration activities to be done and the roadmap refined, and by 2035 it expects migration of all systems, services and products to be complete.

It is guidance rather than law: NCSC says what these organizations should do, but the milestones do not create a legal obligation, and they apply to NCSC's stated audience rather than to every organization everywhere.

## Commodity and bespoke IT

The guidance sits alongside NCSC's whitepaper on preparing for post-quantum cryptography, version 2.0 of August 14, 2024, and gives UK planners dated milestones to work toward. It also draws a line between commodity IT, such as standard browsers, operating systems and mobile devices that follow normal supplier updates, and bespoke or specialized systems that need active planning. Long-lived hardware roots of trust sit on the bespoke side of that line, because they cannot be changed by a supplier update once deployed; the [firmware and secure boot card](/technology-options/firmware-secure-boot/) covers what to ask about them.

## What it means for your plan

If your organization is in NCSC's audience, the 2028 milestone is the one to plan against now, because discovery and an initial plan take longer than most teams expect. [Set dates and milestones](/plan/program/dates/) shows how to record them in your [register](/templates/records/register/) as NCSC's, with their audience, so they are not later read as a universal deadline.

If your organization mainly uses commodity IT, the guidance supports the approach in the [core actions](/plan/core-actions/): keep supported products up to date, and ask suppliers when they will deliver post-quantum support. Data that must stay confidential for many years, devices with fixed keys, and systems you build yourself are the exceptions that need a [program](/plan/program/) of their own.

Other authorities set different dates for different audiences, so check [which dates apply to you](/plan/#which-dates-apply-to-you) before adopting any of them.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, version 1.0, March 20, 2025. [Guidance page (HTML)](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- UK NCSC, Next steps in preparing for post-quantum cryptography, whitepaper version 2.0, August 14, 2024. [Whitepaper (HTML)](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Which plan you need](/plan/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
