---
title: "CISA: Product Categories for Technologies That Use Post-Quantum Cryptography Standards"
sidebar_label: CISA PQC product categories
displayed_sidebar: standardsSidebar
description: January 2026 CISA list, made under EO 14306, of product categories where post-quantum-capable products are widely available, with advice to buy only those.
---

## What it covers

This CISA list identifies the product categories in which products supporting post-quantum cryptography standards are already widely available, and those still transitioning. The widely available categories are cloud platform and infrastructure services (PaaS and IaaS), collaboration chat and messaging, web browsers and web servers, and endpoint data-at-rest security such as full-disk encryption. Other collaboration tools (such as email, conferencing and file sharing) and other endpoint tools are listed as still transitioning. For those categories CISA advises acquiring only products that are post-quantum capable. In most of them the post-quantum support available is for key establishment rather than digital signatures. Categories CISA lists as still transitioning include networking, software as a service, telecommunications, computers, identity and access management, and databases. Operational technology and Internet of Things products are excluded.

CISA published the list on 23 January 2026 in response to [EO 14306](/standards/us-federal-directives/eo-14306/), which directed CISA, working with NSA, to produce it. It is addressed to organisations generally, with specific direction for federal civilian executive branch agencies, and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/) refers to it. It names categories, not individual products, and it does not bind private organisations, though any buyer can use it to judge where a post-quantum requirement in a purchase is realistic today.

:::info[Official texts]

- [CISA: Product Categories for Technologies That Use Post-Quantum Cryptography Standards (HTML)](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2025-06-06">2025&#8209;06&#8209;06</time> | EO 14306 directed CISA, with NSA, to list product categories with widely available post-quantum products by 1 December 2025. |
| <time dateTime="2026-01-23">2026&#8209;01&#8209;23</time> | CISA published the product-category list. |
| <time dateTime="2026-06-24">2026&#8209;06&#8209;24</time> | OMB M-26-15 referred federal agencies to the CISA list as part of their post-quantum migration. |

## Relationship with other standards

The list tells buyers where to expect post-quantum support; the algorithms behind that support are defined in NIST standards such as [FIPS 203](/standards/post-quantum/fips-203/) for key establishment. Because the widely available support is mostly for key establishment, a product in a "widely available" category may still rely on classical signatures, certificates and firmware signing. Ask separately about signature support and about long-lived verifiers such as roots of trust, which follow a different timetable; see [Post-quantum signatures](/technology-options/signatures/) and [Long-lived roots of trust](/technology-options/long-lived-roots/).

For turning the list into supplier conversations, see [Get each supplier's plan](/migration-practices/vendor-plan/), [Ask a supplier](/routes/ask-a-supplier/) and the ASD, CISA and NSA [questions to ask your vendors](/standards/migration-guides/vendor-questions/).

## Sources

- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Sustaining Select Efforts to Strengthen the Nation's Cybersecurity and Amending Executive Order 13694 and Executive Order 14144, EO 14306, 6 June 2025. [EO 14306](https://www.govinfo.gov/app/details/DCPD-202500669)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, 24 June 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)

## Related pages

- [US government requirements](/standards/us-federal-directives/)
- [Get each supplier's plan](/migration-practices/vendor-plan/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [ASD's ACSC, CISA and NSA: questions to ask your vendors](/standards/migration-guides/vendor-questions/)
- [EO 14306](/standards/us-federal-directives/eo-14306/)
