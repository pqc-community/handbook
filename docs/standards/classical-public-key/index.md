---
title: Classical public-key standards (transitioning)
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: NIST classical signature, elliptic-curve and pair-wise key-establishment standards, which NIST will deprecate after 2030 and disallow after 2035.
---

These NIST publications specify the classical public-key cryptography in use today: RSA, which relies on integer factorisation, and finite-field and elliptic-curve schemes, which rely on discrete logarithms. NIST IR 8547 identifies all of them as vulnerable to Shor's algorithm on a cryptanalytically relevant quantum computer, so they are what post-quantum standards replace. FIPS 186-5 is a Federal Information Processing Standard, whose applicability section says when it is mandatory for federal systems; the SPs are guidance and recommendations for US federal agencies. Others widely use all four as a reference.

The schedule below is NIST's, for its own standards and guidelines, from [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (Tables 2 and 4). It applies at every security strength. US federal high value assets and high-impact systems face earlier deadlines under [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/), and other authorities set their own dates; see [Why migration timelines differ](/learn/explainers/timelines/).

| Family | Deprecated | Disallowed under NIST standards and guidelines |
| --- | --- | --- |
| ECDSA, EdDSA and RSA signatures (FIPS 186-5) | After 2030 | After 2035 |
| Finite-field and elliptic-curve DH and MQV (SP 800-56A) | After 2030 | After 2035 |
| RSA key establishment (SP 800-56B) | After 2030 | After 2035 |

## Which document do I need?

- Which classical signature algorithms are we replacing? See [FIPS 186-5](/standards/classical-public-key/fips-186-5/).
- Which elliptic curves are affected? See [NIST SP 800-186](/standards/classical-public-key/sp-800-186/).
- Is our Diffie-Hellman or ECDH key agreement affected, and how does it fit into a hybrid? See [NIST SP 800-56A](/standards/classical-public-key/sp-800-56a/).
- Is our RSA key transport affected? See [NIST SP 800-56B](/standards/classical-public-key/sp-800-56b/).

### Signatures and curves

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 186-5 | Final, 3 February 2023; planning note 12 May 2025. ECDSA, EdDSA and RSA signatures. | [FIPS 186-5](/standards/classical-public-key/fips-186-5/) |
| NIST SP 800-186 | Final, 3 February 2023; planning note 17 April 2023. Elliptic curves for signatures and key establishment. | [NIST SP 800-186](/standards/classical-public-key/sp-800-186/) |

### Pair-wise key establishment

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST SP 800-56A | Rev. 3 final, 16 April 2018; NIST decided to update it on 6 January 2026. Finite-field and elliptic-curve DH and MQV. | [NIST SP 800-56A](/standards/classical-public-key/sp-800-56a/) |
| NIST SP 800-56B | Rev. 2 final, 21 March 2019; reaffirmed 6 January 2026. RSA key transport and key agreement. | [NIST SP 800-56B](/standards/classical-public-key/sp-800-56b/) |

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [CSRC publication page](https://csrc.nist.gov/pubs/ir/8547/final)
- NIST, Digital Signature Standard (DSS), FIPS 186-5, February 2023. [CSRC publication page](https://csrc.nist.gov/pubs/fips/186-5/final)
- NIST, SP 800-186, February 2023. [CSRC publication page](https://csrc.nist.gov/pubs/sp/800/186/final)
- NIST, SP 800-56A Rev. 3, April 2018. [CSRC publication page](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
- NIST, SP 800-56B Rev. 2, March 2019. [CSRC publication page](https://csrc.nist.gov/pubs/sp/800/56/b/r2/final)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), updated 2 November 2026. [NIST FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)

## Related pages

- [Standards](/standards/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Why migration timelines differ](/learn/explainers/timelines/)
- [Inventory](/migration-practices/inventory/)
