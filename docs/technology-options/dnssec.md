---
title: DNSSEC
sidebar_label: DNSSEC
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness looks like for DNSSEC-signed zones and validating resolvers, the status of ML-DSA in DNSSEC, and why validators have to move before signers.
---

## What it is

Domain Name System Security Extensions (DNSSEC) let a resolver check that DNS answers really come from the zone owner. It is a **signatures** job: zone owners, or their DNS provider, sign zone data, and validating resolvers verify a chain of signatures from the root down. There is no key establishment, so it is not exposed to harvest-now, decrypt-later.

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Position |
| --- | --- |
| Algorithm number for ML-DSA in DNSSEC | The IANA DNSSEC algorithm registry (last updated 10 August 2026) lists ML-DSA-44 as algorithm 18, marked MAY for use and implementation in signing and validation, with draft-westerbaan-dnssec-mldsa as its reference |
| Specification | draft-westerbaan-dnssec-mldsa is an individual Internet-Draft, not adopted into an IETF working group or stream |
| How algorithm recommendations change | [RFC 9904](https://www.rfc-editor.org/info/rfc9904) (Proposed Standard, November 2025) sets the process for updating DNSSEC algorithm recommendations |

So a post-quantum DNSSEC algorithm has a number but not a published standard. Only the ML-DSA-44 parameter set is registered, which may not satisfy every applicable authority: [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/), for example, requires ML-DSA-87 for US national security systems. Under the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/), a draft is used only where the product ships it and no applicable authority advises against it, and it is recorded as provisional. For UK readers, the UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, strongly advises that operational systems use protocol implementations based on RFCs, not Internet-Drafts. The scheme itself follows the signature-schemes rule on the same page.

## Who usually chooses

Your DNS hosting provider or DNS software chooses which algorithms it can sign with; resolver operators and software choose which they can validate. Your parent zone, through its registry and your registrar, has to accept your new key information.

## What good looks like

- Validators move first: resolvers you run, and the ones your users rely on, validate the new algorithm before you sign with it.
- Signing switches through a normal algorithm rollover, keeping the old signatures valid until validators have moved.
- Response sizes are tested, because post-quantum signatures are much larger than today's and DNS answers carry them.

## What to ask or test

- Whether your DNS provider and resolver software support the new algorithm, and from which release.
- Whether your registrar and parent registry accept delegation records for it.
- How larger signed responses behave over UDP, fallback to TCP, and through firewalls.

## Traps

- **Signing before validators can check.** A resolver that does not support the algorithm may treat the zone as unsigned, so users lose protection without anything visibly breaking.
- **Response size.** Larger answers can be truncated or dropped by middleboxes.
- **The chain above you.** Full protection depends on the root and top-level domain moving too, which you do not control.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/inventory-record/) | A row for each signed zone and each validating resolver you run, with the DNS provider and registrar in `dependencies` |
| [Vendor response log](/resources/vendor-response-log/) | The DNS provider's and registrar's answers |
| [Migration plan](/resources/migration-plan/) | A signatures line |
| [Change record](/resources/change-record/) | If you rely on the draft mechanism, "provisional: Internet-Draft" in `option` |
| [Review log](/resources/review-log/) | An item to revisit the draft mechanism when it is published |

## Example

An insufficient record is "Our domains use DNSSEC, so they are fine."

A decision-ready record lists each signed zone with its DNS provider, current algorithm, and the provider's written answer on post-quantum signing; notes that the ML-DSA mechanism is still an Internet-Draft, so no change is scheduled; and adds an item to the review log to recheck its status.

## Sources

- IANA, Domain Name System Security (DNSSEC) Algorithm Numbers registry, last updated 10 August 2026. [IANA registry](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)
- IETF Datatracker, draft-westerbaan-dnssec-mldsa, Module-Lattice Digital Signature Algorithm for DNSSEC, checked 21 November 2026. [draft-westerbaan-dnssec-mldsa](https://datatracker.ietf.org/doc/draft-westerbaan-dnssec-mldsa/)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- IETF, DNSSEC Cryptographic Algorithm Recommendation Update Process, RFC 9904, November 2025. [RFC 9904](https://www.rfc-editor.org/info/rfc9904)

## Related pages

- [PKI and certificates](/technology-options/pki/)
- [Choosing an option](/technology-options/choosing/)
- [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/)
- [Work with suppliers](/migration-practices/suppliers/)
