---
title: Post-quantum signatures and code signing
sidebar_label: Signatures
displayed_sidebar: technologyOptionsSidebar
description: Move certificates, documents, and code signing to post-quantum signatures where every verifier can be updated, in an order that keeps relying parties working, and record who has to move together.
---

## When this applies

The [migration plan](/resources/migration-plan/) has a signatures line for a system whose verifiers can all be updated: certificates and the public-key infrastructure (PKI) that issues them, signed documents and email, or code and software updates checked by software you can change. If any verifier cannot be updated after deployment, use [Long-lived roots of trust](/technology-options/long-lived-roots/) for that verifier and its signing key instead.

## Who does what

- The **asset owner** owns the signatures line and the change.
- **Operations**, or whoever runs the certification authority or signing service, changes keys, certificates, and signing.
- **Suppliers** of the verifying software, such as browsers, operating systems, and devices, say when their products accept the new signatures; **procurement** asks them in writing.
- The **migration lead** keeps the list of parties that must move together on the plan.

## Do this

1. **List everyone who touches the signature.** For one signed artefact, such as a server certificate, a signed document, or a software update, list the certification authorities, hardware security modules, signers, trust stores, verifiers, and relying parties. [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/) shows how. Put the list in the plan line's `dependencies` cell. Any verifier that cannot be updated moves to [Long-lived roots of trust](/technology-options/long-lived-roots/).
2. **Move in this order: verifiers, then issuers, then signers.** Update verifiers and trust stores to accept the new algorithm before any certification authority issues with it or any signer switches to it, and keep old signatures acceptable until every relying party has moved. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, says that PKI components must be updated to issue certificates and sign revocation information with post-quantum algorithms, and stresses backward compatibility during the transition. Set the plan line's milestone from the slowest party.
3. **Choose how certificates carry the new signature**, applying the hybrid rule on [Choosing an option](/technology-options/choosing/):
   - if any applicable authority recommends hybrid signatures, use a [composite](/resources/glossary/#composite-signature) certificate, as defined in [RFC 10073](/standards/modules-protocols-identity/rfc-10073/), or another [dual signature](/resources/glossary/#dual-signature) that the other applicable authorities accept. NIST IR 8547 says existing NIST standards and guidelines accommodate dual signatures provided at least one component is NIST-approved;
   - otherwise, sign with a post-quantum algorithm alone. The UK NCSC's whitepaper below, for example, prefers a single migration to a fully post-quantum PKI over an interim hybrid PKI. [ML-DSA](/resources/glossary/#ml-dsa-module-lattice-based-digital-signature-algorithm) on its own, as encoded for certificates in [RFC 9881](/standards/modules-protocols-identity/rfc-9881/), is an option NIST approves;
   - if relying parties will move at different times, run the old and new chains side by side, and put the date the old chain stops being issued in the plan line's `milestone`.
4. **Choose the signature scheme.** For certificates and documents, use ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)), unless an applicable authority names another: the UK NCSC's whitepaper below says hash-based signatures are not suitable for general-purpose use because their signatures are large and slow to produce. For code and software signing, use a hash-based scheme where an applicable authority requires or prefers one, or where every verifier supports only that; otherwise use ML-DSA. [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/), for example, approves LMS and XMSS as well as ML-DSA for software and firmware signing in US national security systems. Among hash-based schemes, use [SLH-DSA](/resources/glossary/#slh-dsa-stateless-hash-based-digital-signature-algorithm) ([FIPS 205](/standards/post-quantum/fips-205/)) unless you can control signing state. Use a stateful hash-based scheme, LMS or XMSS in [SP 800-208](/standards/post-quantum/sp-800-208/), only if you can show that no one-time key will ever be reused, for example a single signing system whose state is never restored from an old backup. NIST IR 8547 says stateful schemes are not intended for general use but may suit software and firmware signing, and the UK NCSC's whitepaper *Next steps in preparing for post-quantum cryptography* (version 2.0, August 2024), written for system and risk owners in commercial enterprises, public sector organisations, and critical national infrastructure, lists SLH-DSA, LMS, and XMSS for use cases such as signing firmware and software. [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains the state problem. Ship the verifier update, signed with the current key, before you switch signing.
5. **Give each signing key its own inventory row**, as [Inventory the cryptography](/migration-practices/inventory/) asks, and record where it is held and how it is protected in the row's `dependencies` cell, for example the hardware security module that holds it. A signing key whose signatures any non-updatable verifier checks moves with that verifier's line on the plan.
6. **Test with every class of verifier and plan the rollback before cutover.** Once relying parties depend on a new chain, rolling back is harder than for key establishment; [Make and verify one change](/migration-practices/implementation/) covers the tests and the rollback trigger.

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) explains why this cannot wait even though signatures are not exposed to harvest-now, decrypt-later: the transition takes longer, is more complex, and needs more parties to coordinate.

## Keep this evidence

The signatures line on the [migration plan](/resources/migration-plan/), with its order, the parties in `dependencies`, and a milestone set by the slowest party; supplier answers in the [vendor response log](/resources/vendor-response-log/); an [inventory](/resources/inventory-record/) row for each signing key; and the [change record](/resources/change-record/), with the option, authority, tests, and rollback trigger.

## Example

An insufficient record is "Signatures can wait until a quantum computer exists."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), covers two signatures lines:

- **the product-design archive:** the supplier signs and verifies within its hosted service, and its letter gives no date for post-quantum signatures, judged `vague`. The plan line's order reads "tracked, not ranked (supplier-led; no bespoke work yet)", with a written signature plan due by 2026-12-01;
- **the key that signs the product sensor's firmware:** it comes first for signatures and moves with the sensor's verifier line, because every sensor shipped will check firmware signed with it and its boot ROM cannot be updated. Its scheme is therefore chosen on [Long-lived roots of trust](/technology-options/long-lived-roots/), and where the key is held is still to be recorded.

## Limits and next page

This page sets the order and the option for signatures; it does not configure certification authorities, signing services, or products. Large or public PKIs, and signing that others depend on across organisations, need specialist support. Next, [make and verify one change](/migration-practices/implementation/), or for a verifier that cannot be updated, [Long-lived roots of trust](/technology-options/long-lived-roots/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- IETF, Internet X.509 Public Key Infrastructure -- Algorithm Identifiers for the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), RFC 9881, October 2025. [RFC 9881](https://www.rfc-editor.org/info/rfc9881)
- IETF, Composite Module-Lattice-Based Digital Signature Algorithm (ML-DSA) for Use in X.509 Public Key Infrastructure, RFC 10073, November 2026. [RFC 10073](https://www.rfc-editor.org/info/rfc10073)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Long-lived roots of trust](/technology-options/long-lived-roots/)
- [Choosing an option](/technology-options/choosing/)
- [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/)
- [Signatures, certificates, and trust](/learn/signatures-and-trust/)
- [Make and verify one change](/migration-practices/implementation/)
