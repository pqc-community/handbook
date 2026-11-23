---
title: Start here
search_title: Start a post-quantum migration
sidebar_label: Start here
description: Four questions decide whether supplier updates and a short baseline are enough, or whether you also need a post-quantum migration programme.
displayed_sidebar: journeySidebar
---

Post-quantum cryptography replaces the public-key methods that a future quantum computer could break. Most organisations will not change any cryptography themselves: their suppliers will. Every organisation follows the same [baseline](/baseline/). Four questions decide whether you also need a [programme](/programme/).

## Four questions

Answer for the organisation as a whole. A question applies if any system, service, or product you run fits it. **Not sure counts as yes** until someone who knows confirms it: write down who will confirm, and by when, on the [register](/templates/records/register/). Do not wait for a complete inventory before answering: one system that fits is enough.

1. **Data that must stay secret for years.** Do you hold information that must stay confidential for many years and that travels over networks, or is stored, under public-key protection? An attacker can record it now and decrypt it later. As this handbook's guide, treat ten years or more as many years.
2. **Devices with a fixed key.** Do you make or run products or devices that check signatures with a key or method that cannot be changed after they ship, whether in hardware or in software?
3. **Signatures others rely on.** Do you run a certificate authority, public or internal, or sign code, firmware, or documents that other people or devices check?
4. **Systems you build or configure.** Do you build software, or set up the cryptography yourself on your own servers, load balancers, VPNs, or applications? One such system is enough, even if you buy in everything else.

A supplied product that is out of support, or whose supplier has no post-quantum plan, is not a reason for a programme on its own. The baseline replaces it.

## What to do

| Your answers | What to do |
| --- | --- |
| None apply | Follow the [baseline](/baseline/). That is your plan. |
| Any applies | Follow the baseline for everything you buy in, and run a [programme](/programme/) for what the questions found. Start with its first moves. |
| You run critical national infrastructure, a service whose security a sector regulator oversees, or a large estate you build yourself | First, bring in specialist advice and speak to your sector regulator or authority. Then follow the baseline and run a full programme. |

## Which dates apply to you

Dates belong to the authority that set them and the audience it names. There is no single global deadline. Record the dates that apply to you, with their authority, on the register.

| If you are | Dates to record |
| --- | --- |
| A UK organisation | The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) (20 March 2025) are aimed primarily at large organisations, operators of critical national infrastructure, and organisations with bespoke IT. The NCSC says the core timelines are relevant to all organisations: defined goals, discovery, and an initial plan by 2028; early, highest-priority migration by 2031; and migration completed by 2035. They expect smaller organisations using mainly commodity IT to receive most upgrades from their service providers, and organisations with custom software to follow the same timetable as larger ones. |
| An EU public administration or critical-infrastructure entity | The EU NIS Cooperation Group's [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, 11 June 2025), addressed to Member States, which set national roadmaps from it. Its milestones: first steps and initial national roadmaps by the end of 2026; high-risk use cases transitioned by the end of 2030; medium-risk use cases, and low-risk ones as far as feasible, by the end of 2035. |
| A US federal agency, or a supplier to one | The [US government requirements](/standards/us-government-requirements/), which bind federal agencies. Under EO 14412 and OMB M-26-15, high value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030, and post-quantum signatures by 31 December 2031. A contractor date applies only if and when the procurement rule EO 14412 directs takes effect. National security systems follow NSA requirements such as [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/). |
| Anywhere else | Your national authority, your sector regulator, and your customers' contract dates. [Why migration timelines differ](/learn/explainers/why-timelines-differ/) explains how to read them. |

## Words used on these pages

- **Key establishment**: how two systems agree a secret key, and how stored data keys are protected.
- **Signatures**: how software, firmware, documents, and certificates prove who made them.
- **Verifier**: the part of a device or program that checks a signature, such as a boot loader.
- **Trust anchor**: the key a verifier trusts first, often fixed in a device's hardware.
- **Design freeze**: the date after which a product's hardware design cannot change.
- **Hybrid**: a post-quantum method and a classical one used together.
- **Relying parties**: the people and devices that check your signatures.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, 24 June 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Baseline](/baseline/)
- [Programme](/programme/)
- [Register](/templates/records/register/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
