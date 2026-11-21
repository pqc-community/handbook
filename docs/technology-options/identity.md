---
title: Identity and sign-in
sidebar_label: Identity and sign-in
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness means for single sign-on, federation tokens, smart cards and other sign-in technology, where standards are still missing, and what to plan now.
---

## What it is

Identity and sign-in covers single sign-on and federation (signed assertions and tokens), smart cards and other hardware tokens, and device and machine authentication. Most of it is a **signatures** job: an identity provider signs, and applications or devices verify. Some protocols also establish keys, and those follow the connection cards such as [TLS and web services](/technology-options/tls/).

## Post-quantum options and status

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026), addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, says an authentication system stays secure as long as its algorithms and keys are secure when the authentication is performed, so authentication is not exposed to harvest-now, decrypt-later. It adds that moving authentication to quantum-resistant algorithms needs upgrades to both the system performing and the system accepting the authentication, to supporting infrastructure such as a PKI, and possibly new hardware tokens.

| Technology | What to rely on, as checked on 21 November 2026 |
| --- | --- |
| Certificates used for sign-in, including smart-card certificates | The published X.509 formats on [PKI and certificates](/technology-options/pki/) |
| US federal PIV smart cards | [FIPS 201-3](/standards/modules-protocols-identity/fips-201-3/) (January 2022) does not itself specify post-quantum algorithms |
| Federation tokens and assertions, passkeys, and other sign-in protocols | The supplier's written answer on which signature algorithms it supports and which specification it follows, checked against the signature-schemes rule on [Choosing an option](/technology-options/choosing/) |

## What good looks like

- An inventory row for each identity provider and each token or card type, naming the signature algorithm it uses today.
- The applications and devices that verify its signatures listed, because they have to accept a new algorithm before the provider switches.
- A written answer from each identity or token supplier on its post-quantum signing plan, judged on the vendor response log, and a requirement for post-quantum signing written into the next purchase or renewal.
- For hardware tokens and cards, the replacement cycle set against the applicable timeline, so that tokens bought now are not still in use after the date the algorithm has to change.

## Who usually chooses

The identity provider, token maker, or platform supplier. You choose when to require support in purchases and renewals, and you own the inventory of what signs and what verifies.

## What to ask or test

- Which signature algorithms the identity provider uses for tokens and assertions, and its written plan for post-quantum signing.
- Whether applications and service providers that verify those tokens can accept a new algorithm, and how they learn the provider's new keys.
- For hardware tokens and smart cards, the replacement cycle and whether new tokens support post-quantum algorithms.

## Traps

- **Hardware lead times.** Tokens, cards, and readers are replaced over years; a card bought now may still be in use when the algorithm must change.
- **Verifiers you do not control.** Every application that trusts the identity provider has to accept the new signatures before the provider switches.
- **Assuming no urgency means no action.** Authentication has time, but the plan and the purchase requirements do not.

## Record it fills

An [inventory](/resources/inventory-record/) row for the identity provider and each token type, with the verifying applications in `dependencies`; supplier answers in the [vendor response log](/resources/vendor-response-log/); requirements in purchases and renewals under [Work with suppliers](/migration-practices/suppliers/).

## Example

An insufficient record is "Single sign-on is a vendor service, so it is their problem."

A decision-ready record names the identity provider and its token-signing algorithm, the supplier's written answer judged on the vendor response log, the applications that verify its tokens, and the renewal at which a post-quantum signing commitment will be required.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Personal Identity Verification (PIV) of Federal Employees and Contractors, FIPS 201-3, January 2022. [FIPS 201-3](https://csrc.nist.gov/pubs/fips/201-3/final)

## Related pages

- [PKI and certificates](/technology-options/pki/)
- [Signatures, certificates, and trust](/learn/signatures-and-trust/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Modules, protocols, and certificates](/standards/modules-protocols-identity/)
