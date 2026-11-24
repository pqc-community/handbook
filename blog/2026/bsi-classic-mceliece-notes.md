---
title: BSI advises against Classic McEliece for now
description: The BSI's notes of 29 September 2026 advise against Classic McEliece in new developments after progress in cryptanalysis, pending a revised TR-02102-1.
date: 2026-09-29
authors: [pqc_handbook]
tags: [authority-updates, germany, key-establishment]
---

On 29 September 2026 Germany's Federal Office for Information Security (BSI) published [notes on Classic McEliece](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Crypto/Notes_Classic_McEliece.pdf?__blob=publicationFile) advising that the key-establishment scheme should currently no longer be used in new developments or when planning new cryptographic applications. Classic McEliece is one of the post-quantum KEMs that [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/) recommends, so the advice matters to anyone following the BSI's algorithm positions.

{/* truncate */}

## What the BSI said

The notes, followed by a German notice on the BSI website dated 1 October 2026, say that cryptanalysis of Classic McEliece made clear progress in 2026. The BSI says the results so far do not allow a practical attack on the parameter sets the guideline recommends, but it expects further improvements and is monitoring them. For key agreement it advises FrodoKEM or ML-KEM instead, or HQC once its standard is published, and says those schemes rest on different mathematics and are not affected.

The advice is a recommendation addressed to the guideline's audience, mainly developers and planners of new cryptographic systems. TR-02102-1 Version 2026-01 still lists Classic McEliece; the BSI says it will revise that recommendation in the next version of the guideline, expected in early 2027. Because the BSI recommends post-quantum KEMs only in hybrid form, it notes that a hybrid with Classic McEliece still gives at least the security of the classical scheme, and its end-2031 date for completing the move to post-quantum key agreement is unchanged.

## What it means for your plan

The BSI's position stands apart from NIST's, under which ML-KEM in [FIPS 203](/standards/post-quantum/fips-203/) is the only approved post-quantum key-establishment scheme, so the notes change nothing for organisations that follow NIST alone. Where the BSI is one of the authorities that apply to you, take the algorithm list from [National algorithm positions](/standards/national-algorithm-positions/) with this caveat, as step 3 of [Choosing an option](/technology-options/choosing/) describes.

If a supplier offers Classic McEliece, ask whether the product also supports ML-KEM or FrodoKEM, and record its answer and your judgement on the [register](/templates/records/register/). A product already deployed with a hybrid Classic McEliece exchange keeps at least its classical security, so it needs a dated plan to move rather than an emergency change.

## Sources

- Federal Office for Information Security (BSI), Notes on recent developments concerning Classic McEliece, 29 September 2026. [BSI notes on Classic McEliece (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Crypto/Notes_Classic_McEliece.pdf?__blob=publicationFile)
- Federal Office for Information Security (BSI), Hinweise zu aktuellen Entwicklungen um Classic McEliece, in German, 1 October 2026. [BSI notice (HTML)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Krypto/Hinweis_Classic_McEliece.html)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [Work with suppliers](/plan/programme/suppliers/)
