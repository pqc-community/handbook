---
title: OT and industrial systems
search_title: Post-quantum OT and industrial systems
sidebar_label: OT and industrial systems
displayed_sidebar: technologyOptionsSidebar
description: Post-quantum readiness for OT, industrial control systems and fielded sensors, where standards are missing, and how to plan around long-lived equipment.
---

## What it is

Operational technology (OT) runs physical processes: industrial control systems (ICS), controllers, field devices and sensors, and the networks that link them to enterprise IT. It does every job:

- **key establishment** for remote access and links between zones;
- **signatures** to authenticate commands, data, and users;
- **verifiers that cannot be updated** in devices built into plant or products, which follow [Firmware and secure boot](/technology-options/firmware-secure-boot/).

The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) (published and reviewed 20 March 2025), primarily aimed at large organisations, operators of critical national infrastructure, and companies with bespoke IT, list IoT and ICS devices with a communications function among the systems to discover. They note that for fielded OT devices and sensors the confidentiality of data may not need strong protection, but its integrity is likely to be critical, because faulty readings or commands can make an ICS fail.

## Post-quantum options and status

Status as checked on 21 November 2026: there is no single post-quantum standard for OT. What exists depends on the layer:

| Layer | Position |
| --- | --- |
| IT zones and remote access into them | Same as enterprise IT: [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), [SSH](/technology-options/ssh/). The NCSC timelines say remote access to ICS IT zones will need to become quantum-secure |
| Industrial protocols | The NCSC timelines name ICS protocols as one of two areas where post-quantum protocols will be harder to develop, because some legacy protocols have never had modern cryptography and the architectures around them will need to change |
| Field devices and sensors | Whatever the device and its supplier support; ask in writing |
| Product categories | The US Cybersecurity and Infrastructure Security Agency's [product categories list](/standards/us-government-requirements/cisa-pqc-product-categories/) (23 January 2026), addressed to organisations generally with specific direction for US federal civilian agencies, leaves OT and IoT devices out of scope, while saying they should also be transitioning |

The UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, says that for the minority of systems with bespoke IT or OT, such as those that implement public-key cryptography in proprietary communications systems, system and risk owners will need to choose which algorithms and protocols are best to use. Apply the rules on [Choosing an option](/technology-options/choosing/), with a specialist adviser for bespoke or proprietary protocols; code you build follows [Libraries and bespoke code](/technology-options/libraries-bespoke-code/).

## Who usually chooses

The control-system, device, and protocol suppliers, often within an industry standard you do not control. You choose what you buy, when you replace it, and how you segment and protect what cannot change.

## What good looks like

- A register that includes OT and ICS devices with a communications function, including what a scan cannot see, as [Inventory the cryptography](/plan/programme/inventory/) describes.
- Integrity of commands and sensor data treated as the priority job for fielded devices, with confidentiality judged case by case.
- Remote access and IT/OT boundaries moved on the enterprise IT timetable.
- Changes to physical infrastructure planned to coincide with other maintenance and refresh, which the NCSC timelines advise, and post-quantum requirements written into equipment purchases.
- A written answer from each control-system and device supplier to the questions in [Work with suppliers](/plan/programme/suppliers/), judged on the [register](/templates/records/register/), and a review date for protocols that have no post-quantum path yet.

## What to ask or test

- For each control-system and device supplier, which post-quantum algorithms the product supports or will support for each job (key establishment, signatures, and any verifier that cannot be updated), from which release, and whether it can be updated in the field.
- Whether remote-access and boundary systems support post-quantum key exchange, using the questions on [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), and [SSH](/technology-options/ssh/).
- Whether devices can handle larger keys and signatures, tested on spare or test-bench equipment rather than live plant.
- When each system is next due for maintenance or refresh.

## Traps

- **Equipment that outlives the plan.** Controllers and sensors stay in service for decades and may not be upgradeable or easy to reach.
- **Proprietary or legacy protocols** with no post-quantum path; record them with an owner rather than leaving them off the register.
- **Internet-connected field devices**, for example for a cloud service, can give attackers a way into control networks; the NCSC timelines flag this.
- **Resource-constrained devices** may not handle larger keys and signatures.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | One row per job for each OT system and device type, naming its supplier and protocol, using `non-updatable verifier` for embedded verifiers, with supplier answers and their judgement, the planned outage or refresh in `dates that apply`, the device's expected service life in `why it is here`, the purchase that will carry post-quantum wording in `next step`, and, where no option exists yet, the protocol's next check in `next review`; exceptions and accepted risks, each with an owner and status |
| [Purchase wording](/templates/records/purchase-wording/) | A row per job for each equipment purchase or refresh, with the planned outage or refresh date in `decide by` |
| [Change record](/templates/records/change-record/) | `unknown` and blocked where no option exists yet |

## Example

An insufficient record is "The plant network is isolated, so post-quantum does not apply."

A decision-ready record lists each controller and sensor type with its supplier, protocol, and expected service life on the register, separates remote-access links (on the IT timetable) from field protocols (awaiting supplier answers, with review dates), and ties replacements to the next planned outage.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- Cybersecurity and Infrastructure Security Agency, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Programme](/plan/programme/)
- [Inventory the cryptography](/plan/programme/inventory/)
- [Work with suppliers](/plan/programme/suppliers/)
