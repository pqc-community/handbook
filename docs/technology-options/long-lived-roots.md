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

1. **Run the applicability test.** The page applies when both are true: the verifier cannot be updated in the field, and the device will still be in use while the integrity of its code matters. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says that where signature verification cannot be updated after manufacture, devices should be designed to require quantum-resistant signatures on their executable code if they may still be in use once a cryptanalytically relevant quantum computer exists. If either condition is false, use [Signatures](/technology-options/signatures/).
2. **Ask the component supplier in writing** which post-quantum signature schemes its verifier supports, how the trust anchor is provisioned, and when samples are available. Record the answer in the [vendor response log](/resources/vendor-response-log/) with the job `non-updatable verifier`, and make a `complete` answer a condition of selecting the component.
3. **Choose the scheme from those the verifier supports**, applying the hybrid rule on [Choosing an option](/technology-options/choosing/). For firmware signing, the UK NCSC's whitepaper *Next steps in preparing for post-quantum cryptography* (version 2.0, August 2024) lists SLH-DSA ([FIPS 205](/standards/post-quantum/fips-205/)), LMS, and XMSS ([SP 800-208](/standards/post-quantum/sp-800-208/)) for use cases such as signing firmware and software; ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)) is the general-purpose NIST signature. Choose LMS or XMSS only if you can show how signing state is controlled, because NIST IR 8547 says these schemes need strict operational controls to ensure no one-time key is used twice; [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains why.
4. **Check that the scheme fits the device** before design freeze: signature and key sizes against storage, and verification time against boot time. Name these tests on the [change record](/resources/change-record/).
5. **Set the design freeze as the deadline, with an escalation point before it.** The plan line's milestone is the design freeze. If there is still no supported option at the escalation point, the sponsor decides between choosing a different component, moving the design freeze, or accepting the risk in writing with a review date. Until then, the change record shows the option as `unknown` and the change as blocked; do not claim a test.
6. **Track the signing key with the verifier.** Give the key that signs the device's code its own [inventory](/resources/inventory-record/) row, recording where it is held. Its line on the plan moves with the verifier's, because it must switch to whatever scheme the verifier accepts.
7. **For devices already shipped**, record a retirement or replacement date and any compensating controls on the [migration plan](/resources/migration-plan/); their verifier will not change.

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) ask organisations, by 2028, to build an initial plan that identifies any requirement to migrate long-lived hardware roots of trust.

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
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Signatures](/technology-options/signatures/)
- [Choosing an option](/technology-options/choosing/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Plan the migration](/migration-practices/plan/)
- [Protect this first](/resources/protect-this-first/)
