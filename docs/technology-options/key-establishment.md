---
title: Post-quantum key establishment
sidebar_label: Key establishment
displayed_sidebar: technologyOptionsSidebar
description: Move key establishment to a post-quantum option for data in transit and for stored data encrypted to a public key, decide what happens to data already encrypted, and check what is actually in use.
---

## When this applies

The [migration plan](/resources/migration-plan/) has a key-establishment line for a system, because data it protects must stay confidential long enough to be at risk from harvest-now, decrypt-later. The line covers data in transit, such as TLS, SSH, VPN, and email connections, and stored data whose keys are wrapped or encrypted to a public key, such as encrypted email, encrypted files and archives, and backups.

## Who does what

- The **asset owner** lists where the system uses key establishment and owns the change.
- The **supplier**, where it controls the software, names the scheme and release; [Choosing an option](/technology-options/choosing/) says when you can rely on that answer.
- **Operations** checks what connections actually negotiate and what stored objects actually use.
- The **migration lead** carries any re-wrapping of existing stored data onto the plan as its own work.

## Do this

1. **List every place the system establishes keys for confidentiality.** Separate data in transit from stored data, and record each on the system's [inventory](/resources/inventory-record/) row, with several values in one cell where needed. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) explains that harvest-now, decrypt-later applies wherever key establishment protects confidentiality, and notes that email encryption with S/MIME or OpenPGP is subject to it as well as network sessions.
2. **Name the component that establishes or wraps the keys, and who controls it.** If a supplier controls it, take the option from the supplier's written answer, as [Choosing an option](/technology-options/choosing/) describes. If you configure it, choose under step 3 and the hybrid rule on Choosing an option.
3. **For data in transit, use a mechanism the protocol's own specification defines.** For TLS 1.3, that means one of the groups in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/), such as X25519MLKEM768. For SSH, IKEv2 VPNs, and email and file formats, [Modules, protocols, and certificates](/standards/modules-protocols-identity/) lists the specifications and whether each is a published RFC or still an Internet-Draft. If you deploy a mechanism that is still a draft, record it as provisional on the change record and add a review trigger for its publication. Do not build your own combination.
4. **For stored data, decide what happens to data already encrypted.** Protect new data under the chosen option as soon as it is available. For existing data whose confidentiality period runs beyond the migration:
   - if you still hold the only copies, re-wrap the data keys, or re-encrypt the data, under the new option, and put that work on the plan with its own owner and date;
   - if copies have already left your control, for example sent by email or held by a third party, re-wrapping your copy does not protect theirs. Record the exposure for the risk owner to accept or act on;
   - delete data and keys you no longer need, rather than migrating them.
5. **Check what is actually in use, not what is configured.** For connections, inspect what is negotiated, as [Make and verify one change](/migration-practices/implementation/) describes. For stored data, inspect a sample object and confirm which algorithm protects its key. Watch for connections that fall back to classical-only key establishment.
6. **Record the result.** The option and authority go on the [change record](/resources/change-record/); update the inventory row's algorithm cells once the change is deployed and checked.

Forward secrecy does not remove the need to migrate: it protects past sessions against a stolen long-term key, not against a quantum computer that breaks the key exchange itself; see [Forward secrecy and recorded traffic](/learn/explainers/forward-secrecy/). Signatures on the same product run on a different clock and are tracked on [Signatures](/technology-options/signatures/).

## Keep this evidence

The inventory row, listing each channel and stored-data format with its algorithm; the [change record](/resources/change-record/), with the option, authority, tests, and deployed-state check; and, for existing stored data, a line on the [migration plan](/resources/migration-plan/) for the re-wrapping work or a note of the exposure the risk owner accepted.

## Example

An insufficient record is "TLS is done organisation-wide."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), treats the product-design archive's key establishment as two parts:

- **connections to the hosted workspace:** the supplier's letter, judged `complete`, names hybrid X25519MLKEM768 for TLS connections in Workspace 4.2. The staging pilot passed on 2026-10-21, checked from the test client's handshake log; production rollout is pending, so the change is not closed;
- **stored design files:** the algorithm that protects the key wrapping of stored files is `unknown`, the supplier's answer is `missing`, and a written answer is due by 2026-12-01. Stored-data protection is not counted as migrated. Once the answer arrives, the manufacturer decides whether files stored under Workspace 4.1 must be re-wrapped and, if so, adds that work to the plan.

## Limits and next page

This page records which mechanism protects each channel and stored format and how that was checked; it does not configure protocols or products, which belongs in product documentation and specialist hands. Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Signatures](/technology-options/signatures/)
- [What changes in a TLS connection](/learn/explainers/tls/)
- [Modules, protocols, and certificates](/standards/modules-protocols-identity/)
- [Make and verify one change](/migration-practices/implementation/)
