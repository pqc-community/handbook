---
title: Cryptographic libraries and bespoke code
search_title: Post-quantum cryptographic libraries and code
sidebar_label: Libraries and bespoke code
displayed_sidebar: technologyOptionsSidebar
description: Post-quantum readiness for software that calls cryptographic libraries or implements its own protocols and formats, and the size, agility and dependency traps.
---

## What it is

Some software calls cryptographic libraries directly instead of relying on a protocol a supplier configures: in-house applications, embedded software, custom file and message formats, and products you build. Such code can do any job:

- **key establishment** where it agrees, encapsulates, or wraps keys, exposed to [harvest-now, decrypt-later](/learn/glossary/#harvest-now-decrypt-later) for whatever it protects;
- **signatures** where it signs or verifies, with timing that follows the parties relying on those signatures;
- **verifiers that cannot be updated** where it checks signatures in devices that cannot be updated in the field, which follow [Firmware and secure boot](/technology-options/firmware-secure-boot/).

Where your code uses a standard protocol through a library, such as TLS or SSH, follow that protocol's card and name the library on the system's register row. This card covers code that uses cryptographic algorithms directly or defines its own protocols and formats, and the libraries it calls.

## Post-quantum options and status

| Part | Position |
| --- | --- |
| Algorithms | [ML-KEM](/standards/post-quantum/fips-203/) (FIPS 203), [ML-DSA](/standards/post-quantum/fips-204/) (FIPS 204), and [SLH-DSA](/standards/post-quantum/fips-205/) (FIPS 205) are final NIST standards (13 August 2024); LMS and XMSS are specified in [SP 800-208](/standards/post-quantum/sp-800-208/) |
| Library support | Varies by library and release; check the library's own release notes and, where you need a module validated for US federal use, its [FIPS 140-3](/standards/modules-protocols-certificates/fips-140-3/) validation |
| Bespoke protocols and formats | No standard path. The UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, says that for the minority of systems with bespoke IT or OT, such as those that implement public-key cryptography in proprietary communications systems, system and risk owners will need to choose which algorithms and protocols are best to use |

Choose the algorithm, parameter set, and form with the rules on [Choosing an option](/technology-options/choosing/). Where a published protocol or format already defines a post-quantum mechanism, use it rather than building your own combination, as the protocol-mechanisms rule says.

## Who usually chooses

You do, as the developer or product owner, within what your libraries support, while library maintainers and suppliers decide which algorithms are available and from which release. A specialist adviser should review bespoke protocols before release.

## What good looks like

- Every application or component that calls cryptography has a row on the [register](/templates/records/register/), with each library, its release, and the algorithm for each job, found by dependency scans, software bills of materials, and code review as [Inventory the cryptography](/plan/programme/inventory/) describes.
- Algorithm choices held in configuration or behind one internal interface, so a later change is one change rather than a rewrite and can be demonstrated as [Keep the ability to change again](/plan/programme/changing-algorithms-again/) describes.
- Algorithms taken from a maintained library rather than implemented in-house, with the library's own tests run in your build.
- New designs built on a published protocol or format with a post-quantum mechanism wherever one exists.
- Libraries kept current, with post-quantum support and, where required, validation confirmed for the release you ship.
- Bespoke protocols reviewed by a specialist adviser, with the review recorded.

## What to ask or test

- Which post-quantum algorithms each library supports, from which release, and whether that release is validated where you need validation.
- Whether message formats, database columns, packets, and storage can carry the larger keys, ciphertexts, and signatures.
- Whether algorithm identifiers are negotiated or fixed in the format, and what an older peer or reader does with a new one, including whether an attacker can force the older algorithm.
- Whether third-party components bundle or statically link their own cryptography.

## Traps

- **Fixed-size fields** in formats, columns, or packets that cannot hold post-quantum keys and signatures.
- **Hard-coded algorithms** spread through the code, so every change becomes a rewrite.
- **A home-made hybrid or protocol** where a specified mechanism exists.
- **Hidden copies**: vendored or statically linked libraries that the register misses.
- **Stateful signatures without state control**: LMS or XMSS signing code that can reuse a one-time key after a restart or restore, or across two signers.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | One row per application or component and job, with each library and its release in `version or plan`, a labelled value per use in `protected by today` (for example "file format: X25519; API client: unknown"), bundled or statically linked copies that a scan cannot see noted on the row, and the release that delivers support and its date in `supplier release`; answers from suppliers of commercial libraries and components with their judgement, or, for open-source libraries, which have no supplier to ask, the release notes used as the source; and, for bespoke protocols with no published post-quantum path yet, the specialist adviser's view in `next step` and a `next review` date |
| [Change record](/templates/records/change-record/) | The option, the authority, and the tests on size, interoperability, and older peers |

## Example

An insufficient record is "We'll swap the algorithms when the library supports post-quantum."

A decision-ready record lists each application with the library and release it uses and the algorithms it calls for each job, names the message fields and database columns that need resizing, notes the internal interface through which algorithms are chosen, and records the library release that adds ML-KEM and ML-DSA, with the change tested against an older peer.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, 29 October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- NIST, Security Requirements for Cryptographic Modules, FIPS 140-3, 22 March 2019. [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Keep the ability to change again](/plan/programme/changing-algorithms-again/)
- [Inventory the cryptography](/plan/programme/inventory/)
- [HSMs and key management](/technology-options/hsm-kms/)
