---
title: Products or systems that may be hard to change
sidebar_label: Hard to change
description: The track for bespoke systems, signatures that others rely on, and verifiers that cannot be updated. Its clocks, the steps, the deadlines that may apply, and the technology cards to open.
displayed_sidebar: routesSidebar
---

This track covers systems where a change takes a long time to make or must be coordinated with others: bespoke systems, signatures that other people or devices rely on, and verifiers that cannot be updated after shipment. The urgency comes from the time a change needs, not from data being recorded today, but each of the three has a different clock: a device's service life, relying-party coordination, or your own change lead time. A product that fails the fifth condition adds a fourth line, whose clock is its replacement or upgrade lead time. Keep them as separate lines. The programme runs from [Organisation-wide](/routes/organisation-wide/); this page holds the steps for each asset on the track.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) is intended for a broad audience, including US federal agencies, technology providers, standards organisations, and validation laboratories. It says signatures are not vulnerable to harvest-now, decrypt-later attacks. It also says the move to post-quantum signatures is urgent because the transition takes longer, is more complex, and needs more parties to coordinate (§3).

## Who it is for

This track is for assets that answer yes to question B, C, or D on [Decide whether to act](/migration-practices/diagnose/), recorded as Hard-to-change systems in the `route` cell of the [decision note](/resources/records/decision-note/). It also takes products that fail the fifth of Decide whether to act's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route). If the same asset also answers yes to question A, its key-establishment line follows [Long-lived confidentiality](/routes/long-lived-confidentiality/).

| Line | From question | Clock | What sets the date |
| --- | --- | --- | --- |
| Verifier that cannot be updated | B | The device's service life | The design freeze or production date, before which the verifier must be chosen |
| Signatures others rely on: a public-key infrastructure, or code, firmware, or document signing | C | Relying-party coordination | How long signers, certificate authorities, and relying parties take to move together |
| Bespoke systems | D | Change lead time | Your own development, test, and release cycle, and the supplier releases it depends on |
| Product out of support, or with no supplier plan | Fifth condition | Replacement or upgrade lead time | The date support ends, or the next renewal, before which the replacement or upgrade must be chosen |

## Steps

Take each line through these steps.

1. [Inventory the cryptography](/migration-practices/inventory/). Record on the [inventory record](/resources/records/inventory/):
   - its own rows for any public-key infrastructure you operate;
   - what a scan cannot see, such as boot trust anchors and embedded firmware.
2. [Decide what to migrate first](/migration-practices/priority/). Record the order and reason on the [migration plan](/resources/records/migration-plan/), under that page's rule for the line's job, and its tie-breakers, which include the earliest fixed date and the longest lead time.
3. [Plan the migration](/migration-practices/plan/). Record on the migration plan:
   - the applicable timeline;
   - the four dates;
   - the dependencies that can move them, including any design freeze.
4. [Work with suppliers](/migration-practices/suppliers/). Record answers on the [vendor response log](/resources/records/vendor-response-log/). Record what each component selection or renewal requires on the [purchase requirements record](/resources/records/purchase-requirements/). Step 5 of that practice says how strict to be before a design freeze.
5. [Choose an option](/technology-options/choosing/), using the cards below. Record the option and its authority on the [change record](/resources/records/change-record/).
6. [Make and verify one change](/migration-practices/implementation/). Complete the change record. When no supported option exists yet, a `blocked` change record, with a resolve-by date, counts as that change record.
7. [Keep the ability to change again](/migration-practices/changing-algorithms-again/). Record the agility evidence in the existing records.

Reviews run for the whole programme, under [Review and report](/migration-practices/subsequent-review/) on the Organisation-wide route.

## Deadlines that may apply

Each date binds or guides only the audience its authority names. Record the one that applies to you on the plan row, as step 1 of [Plan the migration](/migration-practices/plan/) describes, and see [Why migration timelines differ](/learn/explainers/timelines/).

| Authority | Audience | Line it applies to | What it sets |
| --- | --- | --- | --- |
| UK NCSC, [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/), published and reviewed 20 March 2025 | Primarily large organisations, operators of critical national infrastructure, and companies with bespoke IT; the NCSC says the core timelines are relevant to all organisations | Verifiers that cannot be updated | By 2028, an initial migration plan that identifies any requirement to migrate long-lived hardware roots of trust |
| UK NCSC, as above | As above | Every line | General milestones: early, highest-priority activities by 2031, and migration of all systems, services, and products completed by 2035 |
| NIST, [IR 8547](/standards/transition-and-key-management/nist-ir-8547/), October 2026 | A broad audience, including US federal agencies, technology providers, standards organisations, and validation laboratories | Verifiers that cannot be updated | Where a device's signature verification cannot be updated after manufacture and the device may still be in use once a cryptographically relevant quantum computer exists, says it is important for the device to be designed to require quantum-resistant signatures on its code (§3.1.1) |
| NIST IR 8547, as above | As above | Signatures others rely on | Schedules quantum-vulnerable signatures for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines (§4.1.1) |
| EU NIS Cooperation Group, [roadmap](/standards/migration-guides/eu-nis-roadmap/), version 1.1, 11 June 2025 | EU Member States. It says public administrations and critical infrastructure entities, notably those in scope of the NIS2 Directive, should refer to it | Systems with a long life cycle, and complex systems such as public-key infrastructures (the source's terms) | Says it is necessary to plan the migration of systems with a long life cycle, and of complex systems such as public-key infrastructures, well in advance, and recommends starting detailed transition plans for them as soon as possible |
| EU roadmap, as above | As above | Verifiers that cannot be updated | Highly recommends that products entering the market with an expected lifetime beyond 2030 be upgradable to post-quantum cryptography, with post-quantum signatures in their software and firmware upgrade mechanism. Sets, as a 31 December 2030 milestone in the timeline it recommends to Member States, that quantum-safe software and firmware upgrades are enabled by default |
| [EO 14412](/standards/us-federal-directives/eo-14412/) and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/), as recorded in NIST IR 8547 | US federal agencies | Signatures | High value assets and high-impact systems must adopt post-quantum digital signatures by 31 December 2031 (§4) |

Beyond the general milestones, no authority above sets a date specific to bespoke change lead time or to out-of-support products; their dates come from your own release cycle and the supplier's end-of-support date. NIST IR 8547 says, without a date, that systems that cannot support post-quantum cryptography should be identified and prioritised for replacement or decommissioning (§4).

## Technology cards

Open the card for each technology the line depends on:

- **Verifiers and signing:** [firmware and secure boot](/technology-options/firmware-secure-boot/), [code and software signing](/technology-options/code-signing/), and [documents and email signing](/technology-options/document-signing/).
- **Certificates and identity:** [PKI and certificates](/technology-options/pki/), [DNSSEC](/technology-options/dnssec/), [identity and sign-in](/technology-options/identity/), and [Kerberos and directory sign-in](/technology-options/kerberos/).
- **Connections, for a bespoke system's key establishment:** [TLS and web services](/technology-options/tls/), [VPNs and IPsec](/technology-options/vpn-ipsec/), and [SSH](/technology-options/ssh/).
- **Bespoke systems and platforms:** [libraries and bespoke code](/technology-options/libraries-bespoke-code/), [HSMs and key management](/technology-options/hsm-kms/), and [OT and industrial systems](/technology-options/ot-industrial/).

## Output records

- Inventory rows for each asset, including its own rows for any public-key infrastructure you operate.
- For each line, the four dates on the migration plan: supplier release, testing, production deployment, and end of support.
- A change record for each change, which may be a `blocked` record with a resolve-by date.
- Vendor response log rows and purchase requirements where a supplier or a component selection is involved.

The track's work for a line is in place when its four dates are recorded and its change record exists.

## When to leave

- **The asset is replaced by supported commodity software or a supplier-hosted service.** Re-answer the four questions on the decision note. The asset moves to the track its new answers give.
- **Something changes the asset's answer to question A.** Re-answer the four questions on the decision note; step 3 of [Decide whether to act](/migration-practices/diagnose/) sets the new route, which may add [Long-lived confidentiality](/routes/long-lived-confidentiality/).
- **A design freeze is approaching and there is still no option.** Escalate it, as step 4 of [Plan the migration](/migration-practices/plan/) says. [Review and report](/migration-practices/subsequent-review/) is where decisions needed reach the executive sponsor, on the [progress report](/resources/records/progress-report/).
- **A product that failed the fifth condition is back in support with a plan.** Check the five conditions again, as Decide whether to act's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) section says; if they hold, the product returns to [Vendor-managed software](/routes/vendor-managed-software/).
- **You cannot choose a route for an asset.** Follow [When you cannot answer or cannot choose](/migration-practices/diagnose/#when-you-cannot-answer-or-cannot-choose). A large bespoke estate, critical national infrastructure, or a regulated system stays on this route and brings in a specialist as well, as that section says.

## Worked example

[Protect this first](/resources/examples/protect-this-first/) takes the fictional manufacturer's product sensor along this track. The sensor's firmware verifier holds its trust anchor in boot ROM, and the manufacturer signs the firmware with its own key. With no supported option yet, the verifier's change record stays `blocked`, to be resolved before production design freeze on 30 June 2027.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)

## Related pages

- [Situation routes](/routes/)
- [Plan the migration](/migration-practices/plan/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Protect this first](/resources/examples/protect-this-first/)
