---
title: Cloud and SaaS
search_title: Post-quantum readiness of cloud and SaaS
sidebar_label: Cloud and SaaS
displayed_sidebar: technologyOptionsSidebar
description: What good looks like for cloud platforms and SaaS you buy, where post-quantum support is available or still arriving, and how to check a provider's answer.
---

## What it is

Cloud platforms (infrastructure and platform as a service) and software as a service (SaaS) run cryptography you do not control: connections to the service, how stored data is protected, and what the provider signs. Each of those is still its own job, and each follows its technology card; this card covers judging what the provider has done.

## Post-quantum options and status

The US Cybersecurity and Infrastructure Security Agency's [product categories list](/standards/us-government-requirements/cisa-pqc-product-categories/) (23 January 2026), which focuses on US federal purchasing, lists cloud platform and infrastructure services among categories where products using post-quantum standards are widely available, and software as a service among categories still transitioning. For widely available categories it says organisations should acquire only post-quantum-capable products. The UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, says commodity IT will receive post-quantum support through updates, while owners of enterprise IT should ask their suppliers about their plans.

## Who usually chooses

The provider. Your job is to ask the right questions, judge the answer, write requirements into contracts and renewals, and check from your side what you can.

## What good looks like

- One written answer per job, each judged on the service's [register](/templates/records/register/) row for that job.
- Connections checked from your side, not only taken from the provider's statement.
- Post-quantum requirements for each job, and end-of-support dates, written into contracts and renewals.
- Where stored data keys are wrapped to a public key, a known plan from the provider for data already stored under the old wrapping.

## What to ask or test

If none of the four questions in [Which plan you need](/plan/) applies to a service, the [core actions](/plan/core-actions/) are enough: ask the provider about its post-quantum plans at renewal or end of support. If one does apply, for example because the service holds data that must stay secret for years, the service joins the [programme](/plan/programme/). Either way, ask separately for each job, in writing, as [Work with suppliers](/plan/programme/suppliers/) describes:

| Job | Ask | Check from your side |
| --- | --- | --- |
| Connections | Which post-quantum key exchange, from which release, on which endpoints | A client-side handshake check; see [TLS and web services](/technology-options/tls/) |
| Stored data | Which algorithm protects stored data keys, and how existing data is re-wrapped | Usually only the provider's written answer; see [Backups, archives and storage](/technology-options/backups-archives/) |
| Signatures | When the service signs and verifies with post-quantum algorithms | The provider's written plan |
| End of support, asked in the row for each job | When security fixes stop for the release you run | The contract |

## Traps

- **"Quantum-safe" without a job.** A provider can be post-quantum for connections and classical for stored data and signatures; see [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/).
- **Counting the provider's release as your migration.** A release is not your deployment until you have checked it.
- **Data already stored** under old key wrapping stays exposed until the provider re-wraps it.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A row per job for the service, with the provider as supplier, the provider's answer and its judgement, end of support asked in the row it affects, and the contract or renewal that will carry the wording in `next step`. A service covered by the core actions is tracked, not ranked; record your own client-side checks on its row |
| [Purchase wording](/templates/records/purchase-wording/) | A row per job for the contract or renewal, with end of support in `support until` |
| [Change record](/templates/records/change-record/) | Your own client-side checks, for a service the programme covers. A service that is out of support, or whose provider has no post-quantum plan, is replaced, with a date on the register, as the core actions describe |

## Example

An insufficient record is "The provider says it is quantum-safe."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the design-platform supplier's letter is judged `complete` for connections (hybrid X25519MLKEM768 in Workspace 4.2), `vague` for signatures (no date), and `missing` for stored-data key wrapping and the end of support for Workspace 4.1, with written answers due by 1 December 2026. The register keeps connections and stored data as separate key-establishment rows, judged `complete` and `missing`, and the signatures row as tracked, not ranked.

## Sources

- Cybersecurity and Infrastructure Security Agency, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Work with suppliers](/plan/programme/suppliers/)
- [TLS and web services](/technology-options/tls/)
- [Backups, archives and storage](/technology-options/backups-archives/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
