---
title: PKI and certificates
sidebar_label: PKI and certificates
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum move looks like for certification authorities and the certificates they issue, the published X.509 formats, the order in which parties must move, and the traps.
---

## What it is

A public-key infrastructure (PKI) issues and checks certificates: public certificates for websites, private certification authorities for internal services and devices, and the revocation services that go with them. Its job is **signatures**: the authority signs certificates and revocation information, and every [relying party](/resources/glossary/#relying-party) verifies them. Signatures are not exposed to harvest-now, decrypt-later, but [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says the transition is urgent because it takes longer, is more complex, and needs more parties to coordinate.

## Post-quantum options and status

Status as checked on 21 November 2026. All are Proposed Standards.

| Certificate contents | Specification | Published |
| --- | --- | --- |
| [ML-DSA](/resources/glossary/#ml-dsa-module-lattice-based-digital-signature-algorithm) keys and signatures | [RFC 9881](/standards/modules-protocols-identity/rfc-9881/) | October 2025 |
| [Composite](/resources/glossary/#composite-signature) ML-DSA with a classical algorithm | [RFC 10073](/standards/modules-protocols-identity/rfc-10073/) | November 2026 |
| SLH-DSA keys and signatures | [RFC 9909](https://www.rfc-editor.org/info/rfc9909) | December 2025 |
| HSS and XMSS hash-based signatures | [RFC 9802](https://www.rfc-editor.org/info/rfc9802) | June 2025 |
| ML-KEM keys, for certificates used in key establishment | [RFC 9935](https://www.rfc-editor.org/info/rfc9935) | March 2026 |

NIST IR 8547 says PKI components must be updated to issue certificates and sign revocation information with post-quantum algorithms, and stresses backward compatibility during the transition; it also says existing NIST standards accommodate dual signatures provided at least one component is NIST-approved. The UK NCSC's whitepaper *Next steps in preparing for post-quantum cryptography* (version 2.0, August 2024), written for system and risk owners in commercial enterprises, public sector organisations, and critical national infrastructure, notes that hybrid authentication in a PKI needs either a PKI that signs with both kinds of algorithm or two parallel PKIs, and prefers a single migration to a fully post-quantum PKI. Its later [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (15 October 2026) says private PKIs may be able to adopt post-quantum authentication sooner than the public Web PKI.

## What good looks like

1. **List everyone who touches the signature**: certification authorities, hardware security modules, signers, trust stores, verifiers, and relying parties. [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/) shows how.
2. **Move in this order: verifiers, then issuers, then signers.** Verifiers and trust stores accept the new algorithm before any authority issues with it, and old certificates stay acceptable until every relying party has moved.
3. **Choose the certificate form** by the hybrid rule on [Choosing an option](/technology-options/choosing/): composite or dual signatures where an applicable authority recommends hybrid and does not also accept post-quantum alone; otherwise ML-DSA alone is an option NIST approves. The scheme follows the signature-schemes rule on the same page.
4. **Run old and new chains side by side** while relying parties move at different times, and set a date to stop issuing from the old chain.

## Who usually chooses

You choose for a private PKI, within what your CA software and hardware security modules support. Public certificates follow the public Web PKI's rules and the browsers that trust it. Any verifier that cannot be updated moves to [Firmware and secure boot](/technology-options/firmware-secure-boot/).

## Traps

- **Issuing before verifiers are ready** breaks every relying party that cannot check the new signature.
- **Rollback is harder** than for key establishment once relying parties depend on a new chain.
- **Revocation services** (CRLs and OCSP responders) sign too; they move with the authority.
- **Long-lived roots.** A root expected to last decades needs its successor planned early.

## Record it fills

The signatures line on the [migration plan](/resources/migration-plan/), with the parties in `dependencies` in the order they move, a milestone from the applicable timeline, and the date the old chain stops being issued; the [change record](/resources/change-record/), with tests against every class of verifier and the rollback trigger.

## Example

An insufficient record is "We'll switch the CA to post-quantum next year."

A decision-ready record names the private CA and its HSM, lists the relying parties by class with the date each can verify ML-DSA, records the chosen form and the authority behind it, and sets the cut-over and old-chain end dates on the plan.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF, Internet X.509 Public Key Infrastructure -- Algorithm Identifiers for the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), RFC 9881, October 2025. [RFC 9881](https://www.rfc-editor.org/info/rfc9881)
- IETF, Composite Module-Lattice-Based Digital Signature Algorithm (ML-DSA) for Use in X.509 Public Key Infrastructure, RFC 10073, November 2026. [RFC 10073](https://www.rfc-editor.org/info/rfc10073)
- IETF, Internet X.509 Public Key Infrastructure -- Algorithm Identifiers for the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), RFC 9909, December 2025. [RFC 9909](https://www.rfc-editor.org/info/rfc9909)
- IETF, Use of the HSS and XMSS Hash-Based Signature Algorithms in Internet X.509 Public Key Infrastructure, RFC 9802, June 2025. [RFC 9802](https://www.rfc-editor.org/info/rfc9802)
- IETF, Internet X.509 Public Key Infrastructure - Algorithm Identifiers for the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), RFC 9935, March 2026. [RFC 9935](https://www.rfc-editor.org/info/rfc9935)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)

## Related pages

- [Signatures, certificates, and trust](/learn/signatures-and-trust/)
- [Choosing an option](/technology-options/choosing/)
- [HSMs and key management](/technology-options/hsm-kms/)
- [TLS and web services](/technology-options/tls/)
