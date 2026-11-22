---
title: OT and industrial systems
sidebar_label: OT and industrial systems
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness looks like for operational technology, industrial control systems and fielded sensors, where standards are missing, and how to plan around long-lived equipment.
---

## What it is

Operational technology (OT) runs physical processes: industrial control systems (ICS), controllers, field devices and sensors, and the networks that link them to enterprise IT. It does every job:

- **key establishment** for remote access and links between zones;
- **signatures** to authenticate commands, data, and users;
- **verifiers that cannot be updated** in devices built into plant or products, which follow [Firmware and secure boot](/technology-options/firmware-secure-boot/).

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025), primarily aimed at large organisations, operators of critical national infrastructure, and companies with bespoke IT, list IoT and ICS devices with a communications function among the systems to discover. They note that for fielded OT devices and sensors the confidentiality of data may not need strong protection, but its integrity is likely to be critical, because faulty readings or commands can make an ICS fail.

## Post-quantum options and status

Status as checked on 21 November 2026: there is no single post-quantum standard for OT. What exists depends on the layer:

| Layer | Position |
| --- | --- |
| IT zones and remote access into them | Same as enterprise IT: [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), [SSH](/technology-options/ssh/). The NCSC timelines say remote access to ICS IT zones will need to become quantum-secure |
| Industrial protocols | The NCSC timelines name ICS protocols as one of two areas where post-quantum protocols will be harder to develop, because some legacy protocols have never had modern cryptography and the architectures around them will need to change |
| Field devices and sensors | Whatever the device and its supplier support; ask in writing |
| Product categories | The US Cybersecurity and Infrastructure Security Agency's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026), which focuses on US federal purchasing, leaves OT and IoT devices out of scope, while saying they should also be transitioning |

The UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, says owners of bespoke IT or OT that use public-key cryptography in proprietary systems will need to choose which algorithms and protocols to use themselves. Apply the rules on [Choosing an option](/technology-options/choosing/), with a specialist adviser for bespoke or proprietary protocols.

## Who usually chooses

The control-system, device, and protocol suppliers, often within an industry standard you do not control. You choose what you buy, when you replace it, and how you segment and protect what cannot change.

## What good looks like

- An inventory that includes OT and ICS devices with a communications function, including what a scan cannot see, as [Inventory the cryptography](/migration-practices/inventory/) describes.
- Integrity of commands and sensor data treated as the priority job for fielded devices, with confidentiality judged case by case.
- Remote access and IT/OT boundaries moved on the enterprise IT timetable.
- Changes to physical infrastructure planned to coincide with other maintenance and refresh, which the NCSC timelines advise, and post-quantum requirements written into equipment purchases.
- A written answer from each control-system and device supplier to the questions on the [vendor response log](/resources/vendor-response-log/), and a review date for protocols that have no post-quantum path yet.

## What to ask or test

- For each control-system and device supplier, which post-quantum algorithms the product supports or will support for each job (key establishment, signatures, and any verifier that cannot be updated), from which release, and whether it can be updated in the field.
- Whether remote-access and boundary systems support post-quantum key exchange, using the questions on [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), and [SSH](/technology-options/ssh/).
- Whether devices can handle larger keys and signatures, tested on spare or test-bench equipment rather than live plant.
- When each system is next due for maintenance or refresh.

## Traps

- **Equipment that outlives the plan.** Controllers and sensors stay in service for decades and may not be upgradeable or easy to reach.
- **Proprietary or legacy protocols** with no post-quantum path; record them with an owner rather than leaving them off the inventory.
- **Internet-connected field devices**, for example for a cloud service, can give attackers a way into control networks; the NCSC timelines flag this.
- **Resource-constrained devices** may not handle larger keys and signatures.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/inventory-record/) | Rows for OT systems and device types, with supplier and protocol in `dependencies` |
| [Vendor response log](/resources/vendor-response-log/) | Supplier answers |
| [Migration plan](/resources/migration-plan/) | One line per job, using `non-updatable verifier` for embedded verifiers, a `milestone` tied to the planned outage or refresh, the device's expected service life in `reason and source`, the purchase that will carry post-quantum requirements in `next action`, and, where no option exists yet, the protocol's next check in `subsequent review` |
| [Change record](/resources/change-record/) | `unknown` and blocked where no option exists yet |
| [Review log](/resources/review-log/) | Exceptions and accepted risks |

## Example

An insufficient record is "The plant network is isolated, so post-quantum does not apply."

A decision-ready record lists each controller and sensor type with its supplier and protocol on the inventory and its expected service life in the plan line's `reason and source`, separates remote-access links (on the IT timetable) from field protocols (awaiting supplier answers, with review dates), and ties replacements to the next planned outage.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- Cybersecurity and Infrastructure Security Agency, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Hard-to-change systems](/routes/hard-to-change-systems/)
- [Inventory the cryptography](/migration-practices/inventory/)
- [Work with suppliers](/migration-practices/suppliers/)
