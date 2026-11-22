---
title: Secure messaging and collaboration
sidebar_label: Secure messaging
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness looks like for end-to-end encrypted chat and collaboration tools, the status of post-quantum Messaging Layer Security, and what to ask a provider.
---

## What it is

Secure messaging and collaboration tools protect chat, calls, and shared content, often end to end between users' devices. They do two jobs:

- **key establishment** for message keys, which protects confidentiality and is exposed to [harvest-now, decrypt-later](/resources/glossary/#harvest-now-decrypt-later) for anything sensitive that is recorded today;
- **signatures** to authenticate users and devices.

Messages kept in history or exports are also stored data; see [Backups, archives and storage](/technology-options/stored-data/).

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Mechanism | Status |
| --- | --- | --- |
| Standard group messaging protocol | Messaging Layer Security (MLS), [RFC 9420](https://www.rfc-editor.org/info/rfc9420) | Proposed Standard, July 2023 |
| Post-quantum MLS, message keys and signatures | ML-KEM and hybrid cipher suites for MLS, draft-ietf-mls-pq-ciphersuites, with either traditional or ML-DSA signatures | Internet-Draft in IETF Last Call (ending 3 December 2026), intended as a Proposed Standard |
| Proprietary messaging protocols | Each provider's own design | Ask the provider in writing |

The draft registers MLS cipher suites built on ML-KEM, optionally combined with traditional elliptic-curve key encapsulation, paired with either traditional or ML-DSA signatures; it says the suites with traditional signatures address harvest-now, decrypt-later without the cost of post-quantum signatures. Until it is published, apply the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/): use a draft mechanism only where the product ships it and no applicable authority advises against it, and record it as provisional. For UK readers, the UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, strongly advises that operational systems use protocol implementations based on RFCs, not Internet-Drafts. The US Cybersecurity and Infrastructure Security Agency's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026), which focuses on US federal purchasing, lists collaboration software (chat and messaging) among categories where products using post-quantum standards are widely available.

## Who usually chooses

The provider. Your job is to ask the right questions, choose a product whose answer is complete, and configure retention and exports.

## What good looks like

- A written answer from the provider for each job (message keys, user and device authentication) and for stored history, each judged on the [vendor response log](/resources/vendor-response-log/).
- Post-quantum protection of message keys switched on for every client and group conversation, with a minimum client version enforced where the product allows it; if it relies on draft-ietf-mls-pq-ciphersuites, recorded as provisional.
- Retention and exports set so that sensitive history is kept no longer than it is needed.

## What to ask or test

- Which post-quantum mechanism protects message keys, from which release, and whether it is on for every client and for group conversations.
- Whether user and device authentication has a post-quantum plan, asked as a separate row.
- How message history, backups, and exports are protected, and for how long they are kept.

## Traps

- **Old clients** that cannot use the new mechanism can keep a group on a classical cipher suite, because each MLS group uses one cipher suite, or be unable to join it.
- **Messages already sent** stay protected by the old key exchange in any recording an attacker holds.
- **"Quantum-safe" without a job**: post-quantum message keys do not make authentication or stored history post-quantum; see [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/).

## Record it fills

One [vendor response log](/resources/vendor-response-log/) row per job; an [inventory](/resources/inventory-record/) row for the service, with the provider in `dependencies` and labelled values in the key-establishment cell, for example "messages: …; stored history: …"; a [migration plan](/resources/migration-plan/) line per job; if you rely on the draft mechanism, "provisional: Internet-Draft" in the [change record](/resources/change-record/)'s `option` and an item on the [review log](/resources/review-log/) to revisit it when it is published.

## Example

An insufficient record is "Our chat app says it is post-quantum."

A decision-ready record names the product and release, the provider's written answer on message keys with its judgement, a separate row for authentication, whether older clients fall back, and the retention period for message history.

## Sources

- IETF, The Messaging Layer Security (MLS) Protocol, RFC 9420, July 2023. [RFC 9420](https://www.rfc-editor.org/info/rfc9420)
- IETF Datatracker, draft-ietf-mls-pq-ciphersuites, ML-KEM and Hybrid Cipher Suites for Messaging Layer Security, checked 21 November 2026. [draft-ietf-mls-pq-ciphersuites](https://datatracker.ietf.org/doc/draft-ietf-mls-pq-ciphersuites/)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- Cybersecurity and Infrastructure Security Agency, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Cloud and SaaS](/technology-options/cloud-saas/)
- [Encrypted email and files](/technology-options/encrypted-files/)
- [Choosing an option](/technology-options/choosing/)
- [Work with suppliers](/migration-practices/suppliers/)
