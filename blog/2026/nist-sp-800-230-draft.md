---
title: NIST drafts limited-use SLH-DSA parameter sets
description: Draft NIST SP 800-230 proposes six extra SLH-DSA parameter sets capped at 2^24 signatures per key, for uses such as firmware and software signing.
date: 2026-04-13
authors: [pqc_handbook]
tags: [standards-and-protocols, nist, signatures]
---

On 13 April 2026 the US National Institute of Standards and Technology (NIST) released the initial public draft of [SP 800-230, Additional SLH-DSA Parameter Sets for Limited Signature Use Cases](https://csrc.nist.gov/pubs/sp/800/230/ipd), with comments due by 12 June 2026. The draft proposes smaller or faster variants of the hash-based signature algorithm in FIPS 205 for signers that will only ever make a limited number of signatures, such as firmware and software publishers.

{/* truncate */}

## What NIST published

[FIPS 205](/standards/post-quantum/fips-205/), published on 13 August 2024, specifies the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA). Its parameter sets are designed to remain secure for up to 2^64 signatures per key, which makes them suitable for general use but gives them signatures or verification times that some applications find too costly. The draft SP 800-230 proposes six additional parameter sets, at NIST security categories 1, 3 and 5, that gain performance by limiting each signing key to 2^24 signatures.

NIST names applications that need fast verification and smaller signatures, such as signing software, firmware and digital certificates, as the intended uses. It also states that the new parameter sets are not approved for general-purpose use, and that anyone using them needs to evaluate their application thoroughly to make sure the signature limit is never exceeded over a key's lifetime.

## A draft, not an approved specification

SP 800-230 is an initial public draft. Until NIST publishes a final version, its parameter sets are not an approved specification, and the details may change in response to comments. The published FIPS 205 parameter sets are unaffected, and so are [FIPS 204](/standards/post-quantum/fips-204/) and the stateful hash-based schemes in [SP 800-208](/standards/post-quantum/sp-800-208/).

## What it means for your plan

The draft speaks to signature uses where the number of signatures per key is small and known, which is most common in [code and software signing](/technology-options/code-signing/) and in boot verifiers for devices. If you are choosing a verifier that cannot be updated once deployed, note the draft in your design records and ask suppliers whether they are tracking it, but plan against the published standards rather than wait for a final version; the [firmware and secure boot card](/technology-options/firmware-secure-boot/) sets out what to require before design freeze.

Do not put the draft parameter sets into purchase requirements yet. If a supplier proposes them, ask how it will enforce the signature limit for each key, and record the answer as dependent on a draft. [Hash-based signatures explained](/learn/explainers/hash-based-signatures/) covers why signature counts matter for this family of algorithms.

## Sources

- NIST, Additional SLH-DSA Parameter Sets for Limited Signature Use Cases, SP 800-230 initial public draft, 13 April 2026. [Publication page (HTML)](https://csrc.nist.gov/pubs/sp/800/230/ipd), [Draft (PDF)](https://doi.org/10.6028/NIST.SP.800-230.ipd)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [Publication page (HTML)](https://csrc.nist.gov/pubs/fips/205/final)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Keep the ability to change again](/plan/programme/changing-algorithms-again/)
