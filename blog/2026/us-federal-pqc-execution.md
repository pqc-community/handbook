---
title: US sets federal post-quantum deadlines
description: EO 14412 and OMB M-26-15 give US federal agencies 2030 and 2031 post-quantum deadlines for priority systems; other organizations are not bound by them.
date: 2026-06-24
authors: [pqc_handbook]
tags: [authority-updates, us-federal, key-establishment, signatures]
---

On June 22, 2026, the US President signed [Executive Order 14412](https://www.govinfo.gov/app/details/DCPD-202600417), Securing the Nation Against Advanced Cryptographic Attacks, and on June 24 the Office of Management and Budget (OMB) issued [Memorandum M-26-15](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf) telling agencies how to carry it out. Together they set dated post-quantum deadlines for US federal agencies, and suppliers to those agencies will feel the effect.

{/* truncate */}

## What the executive order sets

[EO 14412](/standards/us-government-requirements/eo-14412/) is presidential direction to US federal agencies. It requires each agency to designate a post-quantum migration lead within 30 days, and directs OMB to issue guidance within 90 days requiring high-value assets and high-impact systems to use post-quantum key establishment by December 31, 2030, and post-quantum digital signatures by December 31, 2031. It also tells NIST to run a migration pilot to be completed by December 31, 2027, and to revise its module validation processes within 180 days to accelerate validations, and it asks CISA, with NIST, to publish guidance on the minimum elements of a cryptographic bill of materials within 270 days. National security systems are handled separately, through reporting by NSA, and critical infrastructure operators are engaged through their Sector Risk Management Agencies and CISA rather than bound directly.

For contractors, the order directs the Federal Acquisition Regulatory (FAR) Council to propose a rule, within 180 days, requiring covered contractors to comply with NIST's Federal Information Processing Standards, including those for post-quantum cryptography, by December 31, 2030. That requirement binds contractors only if and when a final FAR rule takes effect.

## What the OMB memorandum adds

[OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/) is the guidance the order called for, addressed to the heads of executive departments and agencies. Its objective is to mitigate as much quantum risk as feasible for priority systems, meaning high-impact systems, high-value assets and systems holding highly sensitive information, by December 31, 2030. Each agency is to send a migration plan to OMB and the Office of the National Cyber Director within 120 days, and the memorandum sets out phases running from discovery in 2026–27 to post-quantum key establishment in 2028–30, signature migration in 2031 and remaining systems by 2035. It states that it does not apply to national security systems, which follow NSA requirements such as [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/).

The separate key-establishment and signature dates reflect their different drivers: recorded traffic can be decrypted later, while a forged signature is only possible once a capable quantum computer exists.

## What it means for your plan

These instruments bind US federal agencies, not other organizations, so do not copy 2030 and 2031 into your plan as universal deadlines; [Why migration timelines differ](/learn/explainers/why-timelines-differ/) explains how to tell which dates apply to you. If you supply US federal agencies, expect their migration plans to reach you as questions about your products, and watch the FAR rulemaking rather than treating 2030 as a contract term already in force. [Work with suppliers](/plan/program/suppliers/) covers how to answer your own customers consistently from your records.

For other organizations the memorandum's phasing is a useful reference, particularly its early start on discovery. Long-lived roots of trust need decisions well before any signature date, as the [firmware and secure boot card](/technology-options/firmware-secure-boot/) explains.

## Sources

- The White House, Securing the Nation Against Advanced Cryptographic Attacks, EO 14412, signed June 22, 2026; 91 FR 38483, June 25, 2026. [EO 14412 (HTML)](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, June 24, 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)

## Related pages

- [US government requirements](/standards/us-government-requirements/)
- [Set dates and milestones](/plan/program/dates/)
- [Timelines](/learn/timelines/)
