---
title: Long-lived roots of trust
sidebar_label: Long-lived roots
displayed_sidebar: technologyOptionsSidebar
description: For a device whose signature verifier cannot be updated after shipment, settle a supported post-quantum signature and trust anchor before design freeze, or record the change as blocked and escalate.
---

## When this applies

A product or device checks signatures, usually on its firmware or software, with a verifier and trust anchor that cannot be changed after it ships, such as a check in boot ROM. Once the product is in the field, the only way to change that check is to replace the device, so the decision has to be made before the design is frozen.

## Who does what

- The **product security lead**, or the asset owner for the device, owns the verifier line and the decision.
- **Procurement** asks the suppliers of the microcontroller, secure element, or boot code in writing what their verifier supports.
- The **migration lead** sets the design freeze as the plan milestone and escalates when an option is still missing.
- The **executive sponsor** decides what happens if no supported option exists in time.

## Do this

1. **Run the applicability test.** The page applies when both are true: the verifier cannot be updated in the field, and the device will still be in use while the integrity of its code matters. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, says that where signature verification cannot be updated after manufacture, it is important for devices to be designed to require quantum-resistant signatures on their executable code if they may still be in use once a [cryptanalytically relevant quantum computer](/resources/glossary/#cryptographically-relevant-quantum-computer-crqc) exists. If either condition is false, use [Signatures](/technology-options/signatures/).
2. **Ask the component supplier in writing** which post-quantum signature schemes its verifier supports, how the trust anchor is provisioned, and when samples are available. Record the answer in the [vendor response log](/resources/vendor-response-log/) with the job `non-updatable verifier`, and make a `complete` answer a condition of selecting the component.
3. **Choose the scheme from those the verifier supports**, applying the hybrid rule on [Choosing an option](/technology-options/choosing/) and the code-signing rule in step 4 of [Signatures](/technology-options/signatures/): a hash-based scheme where an applicable authority names one or the verifier supports only that, otherwise ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)). Choose LMS or XMSS ([SP 800-208](/standards/post-quantum/sp-800-208/)) only if you can show how signing state is controlled for the life of the key, and SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)) otherwise; [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains why. Because this choice cannot be changed after shipment, prefer a scheme every applicable authority accepts for the device's whole service life.
4. **Check that the scheme fits the device** before design freeze: signature and key sizes against storage, and verification time against boot time. Name these tests on the [change record](/resources/change-record/).
5. **Set the design freeze as the deadline, with an escalation point before it.** The plan line's `milestone` is the design freeze. Set the escalation point at least as far before it as the lead time to change component or redesign, taken from the suppliers; this handbook suggests no less than three months. Write it in the plan line's `next action` and in the programme charter's report triggers. If there is still no supported option at the escalation point, the sponsor decides between choosing a different component, moving the design freeze, or accepting the risk in writing with a review date. Until then, the change record shows the option as `unknown` and the change as blocked; do not claim a test.
6. **Track the signing key with the verifier.** Give the key that signs the device's code its own [inventory](/resources/inventory-record/) row, recording where it is held in the `dependencies` cell. Its line on the plan moves with the verifier's, because it has to switch to whatever scheme the verifier accepts.
7. **For devices already shipped**, record a retirement or replacement date in the plan line's `milestone` and any compensating controls in its `next action` on the [migration plan](/resources/migration-plan/); their verifier will not change.

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) ask the organisations they address, technical decision-makers and risk owners in large organisations, critical national infrastructure, and bespoke IT, by 2028, to build an initial plan that identifies any requirement to migrate long-lived hardware roots of trust.

## Keep this evidence

The supplier's answer in the vendor response log; the verifier line on the migration plan with the design freeze as its milestone; the change record, with the option and authority, or `unknown` and blocked; the inventory row for the signing key; and, for shipped devices, the retirement or replacement plan.

## Example

An insufficient record is "We will patch the boot check later."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), covers the product sensor. Its firmware verifier passes the applicability test: the trust anchor sits in write-protected boot ROM, and the sensor will stay in service. Procurement asked the shortlisted microcontroller supplier on 2026-10-05; its reply of 2026-10-30 says a post-quantum boot verifier is planned but names no scheme, date, or trust-anchor provisioning, so it is judged `vague`, with a written answer due by 2026-12-15. The plan's milestone is the production design freeze on 2027-06-30, and the programme charter escalates to the managing director if there is still no supported option three months before it. The change record shows the option as `unknown` and the change as blocked. The key that signs the sensor's firmware has its own inventory row and moves with the verifier line; where it is held is still to be recorded.

## Limits and next page

This page decides whether a verifier must be settled before design freeze and records the decision; it does not design secure boot or choose a component. Device security engineering, such as secure boot and update delivery, needs specialist input. Next, [plan the migration](/migration-practices/plan/) around the design freeze, then [make and verify one change](/migration-practices/implementation/) once an option exists.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Signatures](/technology-options/signatures/)
- [Choosing an option](/technology-options/choosing/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Plan the migration](/migration-practices/plan/)
- [Protect this first](/resources/protect-this-first/)
