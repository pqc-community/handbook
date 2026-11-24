---
title: RFC 9881 defines ML-DSA in X.509 certificates
description: IETF RFC 9881, published on October 29, 2025, sets the algorithm identifiers and encodings for ML-DSA keys and signatures in X.509 certificates and CRLs.
date: 2025-10-29
authors: [pqc_handbook]
tags: [standards-and-protocols, ietf, signatures]
---

On October 29, 2025, the Internet Engineering Task Force (IETF) published [RFC 9881](https://www.rfc-editor.org/info/rfc9881), which specifies how ML-DSA, the post-quantum signature algorithm in FIPS 204, is identified and encoded in X.509 certificates and certificate revocation lists (CRLs). It is a Proposed Standard for certification authorities, PKI software and relying parties, and it gives post-quantum certificates a common format to interoperate on.

{/* truncate */}

## What the IETF published

RFC 9881, Internet X.509 Public Key Infrastructure: Algorithm Identifiers for the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), comes from the IETF's LAMPS working group and is summarized on the handbook's [RFC 9881 page](/standards/modules-protocols-certificates/rfc-9881/). It defines the algorithm identifiers for ML-DSA and the encodings for its public keys, private keys and signatures, so that a certificate signed with ML-DSA, or carrying an ML-DSA public key, can be issued by one product and checked by another.

[FIPS 204](/standards/post-quantum/fips-204/), which NIST published on August 13, 2024, specifies the algorithm itself. RFC 9881 is the missing piece for certificates: without agreed identifiers and encodings, each vendor would have to choose its own, and certificates would not work across products.

## Status and scope

RFC 9881 is a Proposed Standard on the IETF Standards Track. Like other RFCs it is a voluntary technical specification and binds no organization by itself, but certificate policies, products and sector rules that adopt ML-DSA in X.509 will rely on it.

It covers ML-DSA on its own. Certificates that pair ML-DSA with a classical algorithm, and the other post-quantum signature schemes, are matters for other specifications, and publishing a format does not by itself mean that public certification authorities, browsers or other relying parties accept ML-DSA certificates.

## What it means for your plan

Certificates are a signatures problem, not a key-establishment one, so the urgency comes from how many parties must move together and how long verifiers stay in service rather than from harvest-now, decrypt-later. [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/) explains that coordination.

For a private PKI you run, RFC 9881 gives you a format to ask for. Ask the suppliers of your certification authority software, hardware security modules and relying-party software whether they support ML-DSA certificates as RFC 9881 specifies them, and from which release, then record the answers on the signatures rows of your [register](/templates/records/register/). The [PKI and certificates card](/technology-options/pki/) sets out the order to move in: verifiers and trust stores first, then issuers, then signers.

Devices that verify certificate chains and cannot be updated, such as some embedded systems, need the most attention, because they will only ever accept the algorithms they shipped with.

## Sources

- IETF, Internet X.509 Public Key Infrastructure — Algorithm Identifiers for the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), RFC 9881, Proposed Standard, October 2025 (published October 29, 2025). [RFC information page (HTML)](https://www.rfc-editor.org/info/rfc9881), [Datatracker history (HTML)](https://datatracker.ietf.org/doc/rfc9881/history/)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, August 13, 2024. [Publication page (HTML)](https://csrc.nist.gov/pubs/fips/204/final)

## Related pages

- [Signatures and trust](/learn/signatures-and-trust/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
