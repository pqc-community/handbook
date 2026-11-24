---
title: CISA lists where post-quantum products are ready
description: CISA's January 2026 list, made under EO 14306, names product categories where post-quantum-capable products are widely available and advises buying only those.
date: 2026-01-23
authors: [pqc_handbook]
tags: [authority-updates, us-federal, key-establishment]
---

On January 23, 2026, the US Cybersecurity and Infrastructure Security Agency (CISA) published [Product Categories for Technologies That Use Post-Quantum Cryptography Standards](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards), a list made in response to Executive Order 14306. It tells buyers in which product categories post-quantum-capable products are already widely available, with specific direction for federal civilian agencies, and it gives any buyer a reference for where a post-quantum requirement is realistic today.

{/* truncate */}

## What CISA published

[Executive Order 14306](/standards/us-government-requirements/eo-14306/) of June 6, 2025, directed CISA, working with the National Security Agency (NSA), to list the product categories in which products supporting post-quantum cryptography standards are widely available. The list, summarized on the handbook's [CISA product categories page](/standards/us-government-requirements/cisa-pqc-product-categories/), names four such categories: cloud platform and infrastructure services (PaaS and IaaS), collaboration chat and messaging, web browsers and web servers, and endpoint data-at-rest security such as full-disk encryption. For those categories CISA advises organizations to acquire only products that are post-quantum capable.

A second table lists categories that are still transitioning, including networking hardware and software, software as a service, telecommunications hardware, computers, and identity and access management, which CISA expects to move into the first table as products mature. Operational technology and Internet of Things devices are excluded because CISA does not treat them as traditional IT products, though it says they should also transition. The list names categories rather than individual products, and CISA says it will update it regularly.

## Key establishment first, signatures later

CISA notes that most of the widely available categories have implemented post-quantum key establishment but have not yet widely implemented post-quantum digital signatures and authentication, so it does not consider them fully quantum resistant. A browser or cloud service in a listed category may therefore protect traffic against later decryption while still relying on classical certificates and signed updates. That matters because the two jobs have different drivers: key establishment protects data that must stay confidential for years, while signatures and the [PKI](/technology-options/pki/) behind them depend on coordination with every relying party.

## What it means for your plan

The direction to buy only post-quantum-capable products is addressed to federal civilian agencies; the list does not bind private organizations or buyers outside the United States. It is still a useful test of what to ask for. When you buy or renew a product in a widely available category, put post-quantum key establishment into the purchase wording as described in [Work with suppliers](/plan/program/suppliers/), and record what the supplier commits to on the [purchase wording](/templates/records/purchase-wording/) record.

Ask about signatures separately, and do not read a listed category as evidence that a product's update signing or certificates have moved. Be strictest for devices whose verifier cannot be updated once shipped, because a classical root of trust fixed today stays in service for the life of the device; the [firmware and secure boot card](/technology-options/firmware-secure-boot/) covers what to require before design freeze.

## Sources

- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, January 23, 2026. [CISA product categories (HTML)](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Sustaining Select Efforts to Strengthen the Nation's Cybersecurity and Amending Executive Order 13694 and Executive Order 14144, EO 14306, June 6, 2025. [EO 14306 (HTML)](https://www.govinfo.gov/app/details/DCPD-202500669)

## Related pages

- [Core actions](/plan/core-actions/)
- [US government requirements](/standards/us-government-requirements/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
