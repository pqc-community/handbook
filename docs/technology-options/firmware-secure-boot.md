---
title: Firmware and secure boot
search_title: Post-quantum firmware signing and secure boot
sidebar_label: Firmware and secure boot
displayed_sidebar: technologyOptionsSidebar
description: "For devices whose boot verifier cannot be updated after shipment: what to settle before design freeze, choosing a scheme it supports, and what if none exists."
---

## What it is

Secure boot checks a signature on firmware before it runs, against a trust anchor held in the device, often in boot ROM. If that verifier cannot be updated in the field, the only way to change it is to replace the device. That is the hardest case: **a verifier that cannot be updated**. Where the verifier can be updated, use [Code and software signing](/technology-options/code-signing/).

This card applies when both are true: the verifier cannot be updated in the field, and the device will still be in use while the integrity of its code matters. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), written for US federal agencies and technology providers, among others, says that where signature verification cannot be updated after manufacture, it is important for devices to be designed to require quantum-resistant signatures on their executable code if they may still be in use once a [cryptographically relevant quantum computer](/templates/reference/glossary/#cryptographically-relevant-quantum-computer-crqc) exists. The UK NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) (published and reviewed 20 March 2025) ask organisations, by 2028, to build an initial plan that identifies any requirement to migrate long-lived hardware roots of trust; they are primarily aimed at large organisations, operators of critical national infrastructure, and companies with bespoke IT, though the NCSC says the core timelines are relevant to all organisations.

## Post-quantum options and status

The option is whatever the device's boot verifier supports. Choose from those with the signature-schemes rule on [Choosing an option](/technology-options/choosing/); for firmware, the UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, lists the general-purpose ML-DSA and, for uses such as firmware signing, SLH-DSA, LMS, and XMSS. LMS and XMSS also require you to control signing state for the life of the key. Because the choice cannot change after shipment, prefer a scheme every applicable authority accepts for the device's whole service life.

## Who usually chooses

The microcontroller, secure element, or boot-code supplier decides what the verifier can do; the product security lead chooses among those options; the sponsor decides if none fits in time.

## What good looks like

1. **Order verifiers by the earliest design freeze.** Where you have more than one product with a verifier that cannot be updated, take first the one with the earliest design freeze, as [Decide what to migrate first](/plan/programme/priority/) sets out.
2. **Ask each shortlisted component supplier in writing** which post-quantum schemes its verifier supports, how the trust anchor is provisioned, and when samples are available; make a `complete` answer a condition of selection.
3. **Check fit before design freeze**: signature and key sizes against storage, and verification time against boot time.
4. **Decide before the design freeze, with an escalation point before it**, at least as far ahead as the lead time to change components; this handbook suggests no less than three months. While no supported option exists, record the verifier as blocked with the freeze as the date to resolve by. If there is still no supported option at the escalation point, escalate to the sponsor, who decides between another component, a later freeze, or written risk acceptance with a review date, recorded on the [register](/templates/records/register/), and get specialist advice on alternatives, such as hardware that can accept a new key later. Do not record a blocked verifier as migrated.
5. **Track the signing key with the verifier.** It has its own [register](/templates/records/register/) row, and that row moves with the verifier's.
6. **For devices already in service**, record them on the register, ask the maker in writing for an upgrade or replacement route, and plan to have one by the device's end of life. Record the retirement or replacement date and any compensating controls on the verifier's row; their verifier will not change.
7. **Support devices you have already shipped on their current key.** Their verifiers accept only the classical signatures they were built for, so keep the current signing key protected and usable for every update you ship to that fleet while you support it. Tell customers in writing how long the fleet will receive updates and whether, and when, a post-quantum replacement is planned, and record the fleet, its end of support, and the replacement date on the [register](/templates/records/register/).

## What to ask or test

- Whether signature and key sizes fit the device's storage, and verification fits its boot time, tested on supplier samples.
- For LMS or XMSS, how the signing side will control state for the whole life of the key.
- How update signing keys are protected and whether updates are protected against replay. France's ANSSI, in its [views on crypto agility](/standards/national-algorithm-positions/anssi-pqc-position/) (19 January 2026) for developers and system architects, recommends the most trusted mechanisms for updates, naming hash-based signatures first and hybrid signatures as a good alternative, update keys that are not shared across devices and are held in a hardware security element, and replay protection.
- For devices already shipped, whether any field update path for the verifier exists at all, confirmed with the supplier rather than assumed; if one does, the device moves to [Code and software signing](/technology-options/code-signing/).

## Traps

- **"We will patch it later"** is not available for a boot ROM.
- **Choosing a scheme the signing side cannot run safely**, such as LMS without state control.
- **Claiming a test** before a supported option exists.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A `non-updatable verifier` row for the device's verifier, with the supplier's answer, the design freeze in `dates that apply`, the escalation point in `next step`, and blocked as the status until a supported option exists; a `signatures` row for the signing key, which moves with it, recording where the key is held once known; for devices already in service, the retirement or replacement date; and any written risk acceptance, with its review date |
| [Purchase wording](/templates/records/purchase-wording/) | A `non-updatable verifier` row for the component selection, with the design freeze in `decide by` |
| [Change record](/templates/records/change-record/) | The option and authority, or `unknown` in `option` and blocked in `result`, with the freeze as the date to resolve by |

## Example

An insufficient record is "The microcontroller supplier will add post-quantum support."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the product sensor's trust anchor sits in write-protected boot ROM and the sensor will stay in service. Procurement asked the two shortlisted microcontroller suppliers on 5 October 2026; the other has not answered, and the one reply so far, of 30 October 2026, says a post-quantum boot verifier is planned but names no scheme, date, or trust-anchor provisioning, so it is judged `vague`, with a written answer due by 15 December 2026. The date that applies is the production design freeze on 30 June 2027, with escalation to the managing director if there is still no supported option by 31 March 2027. The change record shows the option as `unknown` and the change as blocked. The key that signs the sensor's firmware has its own register row; where it is held is still to be recorded.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- ANSSI, ANSSI views on crypto agility, 19 January 2026 (Recommendations 4 and 5). [ANSSI crypto-agility note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/ANSSI-views-on-crypto-agility.pdf)

## Related pages

- [Code and software signing](/technology-options/code-signing/)
- [Choosing an option](/technology-options/choosing/)
- [Programme](/plan/programme/)
- [Set dates and milestones](/plan/programme/dates/)
