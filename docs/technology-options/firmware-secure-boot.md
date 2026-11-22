---
title: Firmware and secure boot
sidebar_label: Firmware and secure boot
displayed_sidebar: technologyOptionsSidebar
description: For devices whose boot verifier cannot be updated after shipment, what to settle before design freeze, how to choose a scheme the verifier supports, and what to do if none exists.
---

## What it is

Secure boot checks a signature on firmware before it runs, against a trust anchor held in the device, often in boot ROM. If that verifier cannot be updated in the field, the only way to change it is to replace the device. That is the hardest case: **a verifier that cannot be updated**. Where the verifier can be updated, use [Code and software signing](/technology-options/code-signing/).

This card applies when both are true: the verifier cannot be updated in the field, and the device will still be in use while the integrity of its code matters. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), written for US federal agencies and technology providers, among others, says that where signature verification cannot be updated after manufacture, it is important for devices to be designed to require quantum-resistant signatures on their executable code if they may still be in use once a [cryptographically relevant quantum computer](/resources/reference/glossary/#cryptographically-relevant-quantum-computer-crqc) exists. The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) ask organisations, by 2028, to build an initial plan that identifies any requirement to migrate long-lived hardware roots of trust; they are primarily aimed at large organisations, operators of critical national infrastructure, and companies with bespoke IT, though the NCSC says the core timelines are relevant to all organisations.

## Post-quantum options and status

The option is whatever the device's boot verifier supports. Choose from those with the signature-schemes rule on [Choosing an option](/technology-options/choosing/); for firmware, the UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, lists SLH-DSA, LMS, and XMSS for use cases such as signing firmware alongside the general-purpose ML-DSA, and LMS or XMSS need signing state controlled for the life of the key. Because the choice cannot change after shipment, prefer a scheme every applicable authority accepts for the device's whole service life.

## Who usually chooses

The microcontroller, secure element, or boot-code supplier decides what the verifier can do; the product security lead chooses among those options; the sponsor decides if none fits in time.

## What good looks like

1. **Ask each shortlisted component supplier in writing** which post-quantum schemes its verifier supports, how the trust anchor is provisioned, and when samples are available; make a `complete` answer a condition of selection.
2. **Check fit before design freeze**: signature and key sizes against storage, and verification time against boot time.
3. **Set the design freeze as the deadline, with an escalation point before it**, at least as far ahead as the lead time to change component; this handbook suggests no less than three months. If there is still no supported option, the sponsor decides between another component, a later freeze, or written risk acceptance with a review date, recorded on the [review log](/resources/records/review-log/).
4. **Track the signing key with the verifier.** It has its own [inventory](/resources/records/inventory/) row, and its plan line moves with the verifier's.
5. **For devices already shipped**, record a retirement or replacement date as the plan line's `milestone` and any compensating controls in `next action`; their verifier will not change.

## What to ask or test

- Whether signature and key sizes fit the device's storage, and verification fits its boot time, tested on supplier samples.
- For LMS or XMSS, how the signing side will control state for the whole life of the key.
- For devices already shipped, whether any field update path for the verifier exists at all, confirmed with the supplier rather than assumed; if one does, the device moves to [Code and software signing](/technology-options/code-signing/).

## Traps

- **"We will patch it later"** is not available for a boot ROM.
- **Choosing a scheme the signing side cannot run safely**, such as LMS without state control.
- **Claiming a test** before a supported option exists.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/records/inventory/) | A row for the device's verifier and one for the signing key, with where the key is held in `dependencies` once known |
| [Vendor response log](/resources/records/vendor-response-log/) | The supplier's answer, with the job `non-updatable verifier` |
| [Purchase requirements](/resources/records/purchase-requirements/) | A `non-updatable verifier` row for the component selection, with the design freeze in `decide by` |
| [Migration plan](/resources/records/migration-plan/) | The verifier line, with the design freeze as `milestone` and the escalation point in `next action`; the signing key's `signatures` line, which moves with it; for devices already shipped, the retirement or replacement date |
| [Change record](/resources/records/change-record/) | The option and authority, or `unknown` in `option` and blocked in `result`, with the freeze as the date to resolve by |
| [Review log](/resources/records/review-log/) | Any written risk acceptance, with its review date |

## Example

An insufficient record is "The microcontroller supplier will add post-quantum support."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/): the product sensor's trust anchor sits in write-protected boot ROM and the sensor will stay in service. Procurement asked the two shortlisted microcontroller suppliers on 5 October 2026; the other has not answered, and the one reply so far, of 30 October 2026, says a post-quantum boot verifier is planned but names no scheme, date, or trust-anchor provisioning, so it is judged `vague`, with a written answer due by 15 December 2026. The milestone is the production design freeze on 30 June 2027, with escalation to the managing director if there is still no supported option by 31 March 2027. The change record shows the option as `unknown` and the change as blocked. The key that signs the sensor's firmware has its own inventory row; where it is held is still to be recorded.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Code and software signing](/technology-options/code-signing/)
- [Choosing an option](/technology-options/choosing/)
- [Hard-to-change systems](/routes/hard-to-change-systems/)
- [Plan the migration](/migration-practices/plan/)
