---
title: NIST finalises IR 8547 transition schedule
description: Final NIST IR 8547 deprecates quantum-vulnerable public-key algorithms after 2030 and disallows them after 2035 at every strength, unlike its 2024 draft.
date: 2026-10-27
authors: [pqc_handbook]
tags: [authority-updates, analysis, nist, key-establishment, signatures]
---

On 27 October 2026 NIST published the final [IR 8547, Transition to Post-Quantum Cryptography Standards](https://csrc.nist.gov/pubs/ir/8547/final). It sets NIST's schedule for deprecating quantum-vulnerable public-key algorithms after 2030 and disallowing them after 2035, now at every security strength, and records the earlier US federal deadlines. It is written for federal agencies, technology providers, standards organisations and validation laboratories.

{/* truncate */}

## What the final report says

The final report, summarised on the handbook's [NIST IR 8547 page](/standards/transition-and-key-management/nist-ir-8547/), says NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under NIST standards and guidelines after 2035. Tables 2 and 4 apply those dates to every listed security strength, for signatures (ECDSA, EdDSA and RSA) and for key establishment (finite-field and elliptic-curve Diffie-Hellman and MQV, and RSA). The report says the window between those two dates does not alter earlier deadlines set elsewhere.

Those earlier deadlines are recorded rather than created by the report. Under Executive Order 14412 and OMB Memorandum M-26-15, US federal high value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030 and post-quantum signatures by 31 December 2031, and agencies must support TLS 1.3 no later than 2 January 2030. As a NIST Internal Report, IR 8547 is informative and imposes no requirements of its own, so its 2030 and 2035 dates describe the status of algorithms in NIST's standards, while the binding dates for federal agencies come from [EO 14412](/standards/us-government-requirements/eo-14412/) and [M-26-15](/standards/us-government-requirements/omb-m-26-15/).

On hybrids, the final keeps the draft's position: when used, hybrid solutions are typically temporary measures that lead to a second transition to post-quantum-only tools, and NIST leaves the decision to each application while accommodating hybrid key establishment and dual signatures in FIPS 140 validation.

## How it differs from the 2024 draft

The [initial public draft](/news/2024/nist-ir-8547-draft/) of 12 November 2024 treated security strengths differently. It marked 112-bit classical algorithms as deprecated after 2030 and disallowed after 2035, but listed those at 128 bits and above only as disallowed after 2035, with no deprecation stage. The final deprecates all of them after 2030.

The draft framed timing around National Security Memorandum 10 and its 2035 goal. The final keeps 2035 as the overall goal but builds the report around EO 14412 and M-26-15, adds the federal deadlines above, and describes itself as a blueprint for critical infrastructure owners and operators and other organisations, although its stated audience is unchanged.

Several additions are new in the final. It names TLS as an early priority and says guidance on quantum-resistant key establishment in TLS, including hybrid key exchange, will be reflected in the next revision of [SP 800-52](/standards/modules-protocols-certificates/sp-800-52/). It says that, as EO 14412 directs, NIST is revising Cryptographic Module Validation Program processes to accelerate validation of post-quantum modules. It also states that a composite key-establishment technique is allowed even if one input comes from a disallowed algorithm, and points to the now-published SP 800-227 for combiner guidance.

## What it means for your plan

Outside US federal systems, the 2030 and 2035 dates are NIST's statement about its own standards, not a deadline for your organisation, so record them in your register as NIST's alongside whichever other authorities' dates apply; [why migration timelines differ](/learn/explainers/why-timelines-differ/) explains how to read them together. Because larger classical keys are now deprecated after 2030 as well, moving to a bigger RSA or elliptic-curve key no longer keeps an algorithm out of deprecated status under NIST's schedule, and any record that assumed otherwise from the draft should be updated.

The final keeps the two jobs' drivers apart: harvest-now, decrypt-later makes key establishment urgent for long-lived data, while signatures are urgent because their transition is longer and needs more parties to coordinate.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, final, 27 October 2026. [CSRC publication page (HTML)](https://csrc.nist.gov/pubs/ir/8547/final), [Full text (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024. [CSRC publication page (HTML)](https://csrc.nist.gov/pubs/ir/8547/ipd), [Draft (PDF)](https://doi.org/10.6028/NIST.IR.8547.ipd)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [Set dates and milestones](/plan/programme/dates/)
- [Transition and key-management publications](/standards/transition-and-key-management/)
