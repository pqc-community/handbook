---
title: Learn the basics
sidebar_label: Learn the basics
description: Background before you choose a migration route.
displayed_sidebar: learnSidebar
---

This section is for security, engineering, product, procurement, and risk professionals who understand systems and change control but want a shared model of the cryptography affected by a post-quantum migration. It provides conceptual grounding before you choose a route; it is not a migration procedure.

After the core lessons, you should be able to distinguish key establishment from signatures, explain what a quantum computer threatens, identify the jobs of the first NIST post-quantum algorithms, and connect an algorithm standard to its use in a product and to an applicable migration date.

## Core lessons

Read these in order. The path starts with the jobs public-key cryptography performs and the quantum threat to those jobs. It then introduces post-quantum algorithms, shows where they fit in products, and ends by separating algorithm standards, product support, and migration dates.

1. [Public-key cryptography](/learn/public-key-cryptography/) — distinguish key establishment, encryption, and signatures.
2. [Quantum threat](/learn/quantum-threat/) — understand the threat to today's public-key schemes and the confidentiality risk from collected data.
3. [What post-quantum means](/learn/what-post-quantum-means/) — distinguish post-quantum cryptography from quantum cryptography.
4. [Algorithms](/learn/algorithms/) — recognise what ML-KEM, ML-DSA, and SLH-DSA do.
5. [In real systems](/learn/in-real-systems/) — locate these cryptographic jobs in products and services.
6. [Standardisation](/learn/standardisation/) — distinguish a standard from a protocol profile and a product release.
7. [Timelines](/learn/timelines/) — understand why standards and migration dates are different.

Use the [glossary](/resources/glossary/) when you need a definition while reading. To choose a migration route, start with the [homepage situation chooser](/) or [Not sure which route applies](/routes/not-sure/).

## Further explanations

These pages expand a particular distinction; read them when you want a more detailed model.

- [What the keys actually do](/learn/explainers/keys/) — compare the public and private key roles in different schemes.
- [What a quantum computer changes](/learn/explainers/quantum-computers/) — compare the effects on confidentiality and signatures.
- [What a KEM is](/learn/explainers/kem/) — follow encapsulation and decapsulation, and see why they are not bulk encryption.
- [What changes in a TLS connection](/learn/explainers/tls/) — trace key establishment and server authentication as separate jobs.
- [Why timelines differ](/learn/explainers/timelines/) — compare dates set for different audiences and milestones.

When you are ready to plan, return to the [homepage](/) or browse [curated references](/resources/curated-references/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Homepage](/)
- [Curated references](/resources/curated-references/)
- [Not sure which route applies](/routes/not-sure/)
