---
title: Post-quantum signatures
sidebar_label: Signatures
sidebar_position: 4
displayed_sidebar: algorithmProtocolOptionsSidebar
description: Signatures are a different migration from key establishment. The urgency is coordinating the parties, not harvest-now, decrypt-later.
---

Signatures are a different migration from key establishment.

## What can go wrong

Delaying them because they are not a harvest-now, decrypt-later problem, and then discovering the PKI and the verifiers cannot move in the time you have left.

## A stronger practice

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says signatures are not vulnerable to harvest-now, decrypt-later. It says the transition is still urgent because it takes longer and more parties must coordinate. It says an authentication system remains secure until the algorithm can be broken at the time of authentication, and that supporting a quantum-resistant algorithm means upgrading the systems that perform and accept the authentication, including the PKI.

FIPS 204 specifies ML-DSA and FIPS 205 specifies SLH-DSA. ML-DSA and SLH-DSA are the two NIST signature algorithms. This edition does not link the FIPS and does not reprint their parameters.

If the checker cannot be updated later, go to [Long-lived roots](./long-lived-roots.md).

[Secure Boot](https://www.securebydesignhandbook.com/docs/implementation/build-phase/secure-boot) and [signing, keys, and credentials](https://supplychainsecurityhandbook.com/technology-options/signing-keys-credentials/) are onward reading. They are not the authority for the post-quantum clock.

## What to ask

Who has to change at the same time, and can the checker be updated later?

## Evidence

The list of parties and the date they can move.

## A weak answer

"Signatures can wait until quantum computers arrive."

## A stronger answer

"The document-signing service has a long coordination lead. It is on this year's plan for that reason. The recorded-traffic problem is on the key-establishment page."

## Which pass

A long coordination lead can put signatures on the first pass even though they are not a harvest-now, decrypt-later problem. The reason is the time the parties need, which NIST IR 8547 states.

## Options

ML-DSA and SLH-DSA are the two NIST signature algorithms named here. The choice between a signature migration and a key-establishment migration is on [Priority](../migration-practices/priority.md). A root that cannot update its check later is on [Long-lived roots](./long-lived-roots.md), not a general signature project.

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Long-lived roots](./long-lived-roots.md)
- [Key establishment](./key-establishment.md)
- [Priority](../migration-practices/priority.md)
- [Product release dates](../start-here/product-release-dates.md)
