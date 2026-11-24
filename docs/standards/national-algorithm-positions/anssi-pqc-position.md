---
title: "ANSSI: Post-Quantum Position (2023) and Protocol and Crypto-Agility Notes (2026)"
search_title: ANSSI post-quantum position and 2026 notes
sidebar_label: ANSSI position (France)
displayed_sidebar: standardsSidebar
description: "France's ANSSI post-quantum position of 2023, applied to TLS 1.3, IPsec and SSHv2 in 2026 notes: hybridization preferred, pre-shared keys only as a stopgap."
---

## What it covers

This page summarizes five documents from France's national cybersecurity agency (ANSSI). The core is ANSSI's follow-up position paper on the post-quantum transition, dated December 21, 2023, which updates ANSSI's 2022 position and is to be read as an addendum to it. It sets out ANSSI's recommendations on post-quantum algorithms and on hybridization, meaning the combination of a post-quantum algorithm with established classical public-key cryptography.

The paper is addressed to industry and to designers of security products: ANSSI encourages them to include the quantum threat in their risk analysis and to define a progressive transition strategy. It sets out ANSSI's recommendations and views. For the security evaluation of products, however, it states that a product offering post-quantum mitigation shall implement hybridation, unless it relies only on XMSS, LMS or SPHINCS+ (SLH-DSA).

On February 2, 2026, ANSSI published three technical notes (*fiches techniques*), in French, that apply this position to TLS 1.3 (ANSSI-FT-115), SSHv2 (ANSSI-FT-116) and IPsec (ANSSI-FT-117). Each describes itself as a state of play of the protocol's post-quantum transition, complementing ANSSI's position, and its cover names developers, administrators, information-security managers and IT directors as its audience. Each states that, unless a regulation provides otherwise, its recommendations are not normative, and that their implementation should first be validated by the system's administrator or those responsible for information-system security. The notes set no dates and name no mandatory mechanism: ML-KEM appears as an example of a post-quantum key-encapsulation mechanism, and the drafts, RFCs and implementations they cite are described as existing work rather than endorsed. On January 19, 2026, ANSSI also published a note in English, *ANSSI views on crypto agility*, for developers and system architects. This summary does not cover ANSSI's other material, which is listed on its [post-quantum cryptography page](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/).

:::info[Official texts]

- **ANSSI 2023 follow-up position paper** — [ANSSI views on the Post-Quantum Cryptography transition, 2023 follow-up (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf).
- **Transition post-quantique de TLS 1.3** (ANSSI-FT-115, version 1.0, in French) — [technical note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_tls_1_3.pdf) / [publication page (HTML)](https://messervices.cyber.gouv.fr/guides/Transition-post-quantique-protocole-TLS-1-3).
- **Transition post-quantique de SSHv2** (ANSSI-FT-116, version 1.0, in French) — [technical note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ssh_v2.pdf) / [publication page (HTML)](https://messervices.cyber.gouv.fr/guides/Transition-post-quantique-protocole-SSHv2).
- **Transition post-quantique d'IPsec** (ANSSI-FT-117, version 1.0, in French) — [technical note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ipsec.pdf) / [publication page (HTML)](https://messervices.cyber.gouv.fr/guides/Transition-post-quantique-protocole-IPsec).
- **ANSSI views on crypto agility** — [note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/ANSSI-views-on-crypto-agility.pdf) / [publication page (HTML)](https://messervices.cyber.gouv.fr/guides/ANSSI-views-on-crypto-agility).
- **Current ANSSI material** — [Cryptographie post-quantique (HTML)](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/).

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2022">2022</time> | ANSSI published its earlier position paper on the post-quantum transition, which the 2023 paper updates. |
| <time dateTime="2023-12-21">2023&#8209;12&#8209;21</time> | ANSSI published its follow-up position paper, reaffirming hybridization and listing post-quantum algorithms it considers appropriate. |
| <time dateTime="2026-01-19">2026&#8209;01&#8209;19</time> | ANSSI published *ANSSI views on crypto agility*, for developers and system architects. |
| <time dateTime="2026-02-02">2026&#8209;02&#8209;02</time> | ANSSI published technical notes on the post-quantum transition of TLS 1.3, SSHv2 and IPsec, recommending hybridization for key exchange and signature authentication in each. |
| <time dateTime="2030">2030</time> | ANSSI recommends hybrid post-quantum protection especially for products that protect information until after 2030 or may be used after 2030 without updates. |

## Relationship with other standards

ANSSI strongly stresses the need for hybridization wherever post-quantum protection is needed, in both the short and medium term, and notes that hybridization is necessary only where post-quantum protection is relevant. The paper describes this as aligned with the BSI's position in [TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/). It differs from the NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/), which does not require hybrids, and from [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/), which treats hybrids as typically temporary.

ANSSI does not give a closed list of recommended algorithms. The paper's non-exhaustive list names CRYSTALS-Kyber (ML-KEM, [FIPS 203](/standards/post-quantum/fips-203/)) and FrodoKEM for key encapsulation, and CRYSTALS-Dilithium (ML-DSA, [FIPS 204](/standards/post-quantum/fips-204/)), Falcon, SPHINCS+ (SLH-DSA, [FIPS 205](/standards/post-quantum/fips-205/)), and XMSS and LMS ([NIST SP 800-208](/standards/post-quantum/sp-800-208/)) for signatures, generally preferring the highest security levels. The paper predates the final NIST standards of August 2024, so it refers to the algorithms by their submission names and draft standards.

For signatures, hybridization is optional for the stateful hash-based schemes XMSS and LMS, which ANSSI considers relevant where state can be carefully stored, typically for software updates, and may also be optional for SLH-DSA; the paper's product-evaluation section lists SPHINCS+ (SLH-DSA) alongside XMSS and LMS as exceptions. That distinction matters for long-lived verifiers such as firmware and update roots.

## The 2026 protocol notes

The three notes share one position. In each protocol only the handshake uses public-key cryptography, so only the handshake has to change: the TLS 1.3 handshake, IKEv2 in IPsec, and in SSHv2 the key exchange and server authentication of the transport layer plus client authentication by signature. ANSSI names hybridization as its preferred solution and, in each note's conclusion, recommends it for both key exchange and signature authentication. It describes moving confidentiality as more urgent than moving authentication because of store-now, decrypt-later attacks, so key establishment comes first. The function that combines the classical and post-quantum shared secrets has to keep both kinds of security, and ANSSI refers to its position for acceptable combiners.

A pre-shared key is ANSSI's other route, possible where its classical and post-quantum confidentiality and integrity are assured and its management and distribution are handled with particular care. The notes treat it as a temporary measure, with hybridization and post-quantum mechanisms to be put in place eventually. They warn that compromising a pre-shared key exposes every session that used it, so a recorded session protected by the key and a classical key exchange loses post-quantum forward secrecy once the key is stolen.

| Protocol | Pre-shared key route | Hybrid key exchange, as the note describes it | Hybrid authentication |
| --- | --- | --- | --- |
| TLS 1.3 (FT-115) | Possible: an external pre-shared key gives post-quantum confidentiality and mutual authentication, as a temporary measure | Hybrid groups combining elliptic-curve Diffie-Hellman with ML-KEM, then in Internet-Drafts; it also notes a draft for ML-KEM alone | No standard for hybrid certificates or signatures yet; more work needed |
| IPsec (FT-117) | Possible for authentication; for confidentiality, [RFC 8784](https://www.rfc-editor.org/info/rfc8784) protects only the IPsec traffic keys, not the IKEv2 exchanges themselves, which [RFC 9867](https://www.rfc-editor.org/info/rfc9867) (November 2025) extends to cover | Additional key exchanges under [RFC 9370](https://www.rfc-editor.org/info/rfc9370), carried in intermediate exchanges because the first IKEv2 messages cannot be fragmented; ML-KEM then in an Internet-Draft | No standard yet; IKEv2 message fragmentation can carry the larger certificates and signatures |
| SSHv2 (FT-116) | Not available: the protocol has no pre-shared-key mechanism, so hybridization is the only route | Hybrid methods combining elliptic-curve Diffie-Hellman with ML-KEM or with NTRU Prime, then in Internet-Drafts | No standard for hybrid host or client authentication yet |

The notes reflect standards as at February 2, 2026, and some have since moved on: the TLS and SSH hybrid key exchanges they cite as drafts are now published, as the [TLS](/technology-options/tls/) and [SSH](/technology-options/ssh/) cards record, and composite ML-DSA for X.509 certificates has been published as [RFC 10073](/standards/modules-protocols-certificates/rfc-10073/), although its use in these protocols is still in drafts. Use the technology cards for current mechanism status and these notes for ANSSI's position. Each note ends by saying that the protocol's post-quantum transition is still being studied and that work and implementations need to be followed.

## Crypto-agility

ANSSI defines crypto-agility as the ability to extend or replace cryptographic components within IT systems without affecting their functionality, while minimizing service downtime during the update. It distinguishes changing parameters within an algorithm family from replacing an algorithm entirely, and recommends full algorithm replacement wherever the context allows; if it does not, it recommends using the strongest parameter set from the start, with parameter changes only where efficiency rules that out. The ability to update a system is, in ANSSI's words, the cornerstone of crypto-agility: components that cannot be updated, such as hardware accelerators or a secure boot in read-only memory, can change only by selecting, through configuration or negotiation, among algorithms they shipped with.

The note's six recommendations ask that agility be consistent across sub-systems, so that a protocol can carry a larger signature that a component can produce; that systems be sized for the worst case any negotiation could produce; that selection or negotiation never end on an unwanted algorithm, with deprecated algorithms not allowed in new systems and configuration protected against tampering and replay; and that updates be protected against replay and signed with the mechanisms in which ANSSI has the most confidence. For update signing it names stateful or stateless hash-based signatures as the most trustworthy choice, hybrid signatures as a good alternative, and message authentication codes only with careful key management, and it recommends that update keys not be shared across devices and be protected by a hardware security element. It warns that more cryptographic options widen the attack surface, for example to downgrade attacks, and asks for a threat analysis and worst-case evaluation first. The handbook's [crypto-agility lesson](/learn/crypto-agility/) and [Keep the ability to change again](/plan/program/changing-algorithms-again/) draw on it.

## Sources

- ANSSI, ANSSI views on the Post-Quantum Cryptography transition (2023 follow-up), December 21, 2023. [Follow-up position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- ANSSI, Transition post-quantique de TLS 1.3, ANSSI-FT-115, version 1.0, February 2, 2026 (§3, §4). [ANSSI TLS 1.3 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_tls_1_3.pdf)
- ANSSI, Transition post-quantique de SSHv2, ANSSI-FT-116, version 1.0, February 2, 2026 (§3, §4). [ANSSI SSHv2 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ssh_v2.pdf)
- ANSSI, Transition post-quantique d'IPsec, ANSSI-FT-117, version 1.0, February 2, 2026 (§3, §4, annex A). [ANSSI IPsec note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ipsec.pdf)
- ANSSI, ANSSI views on crypto agility, January 19, 2026. [ANSSI crypto-agility note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/ANSSI-views-on-crypto-agility.pdf)
- ANSSI, Cryptographie post-quantique (topic page). [ANSSI post-quantum page (HTML)](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/)
- IETF, Mixing Preshared Keys in the Internet Key Exchange Protocol Version 2 (IKEv2) for Post-quantum Security, RFC 8784, June 2020. [RFC 8784](https://www.rfc-editor.org/info/rfc8784)
- IETF, Mixing Preshared Keys in the IKE_INTERMEDIATE and CREATE_CHILD_SA Exchanges of IKEv2 for Post-Quantum Security, RFC 9867, November 2025. [RFC 9867](https://www.rfc-editor.org/info/rfc9867)
- IETF, Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2), RFC 9370, May 2023. [RFC 9370](https://www.rfc-editor.org/info/rfc9370)

## Related pages

- [National algorithm positions](/standards/national-algorithm-positions/)
- [BSI TR-02102-1](/standards/national-algorithm-positions/bsi-tr-02102-1/)
- [Hybrid cryptography](/learn/hybrid/)
- [Choosing a post-quantum option](/technology-options/choosing/)
- [Hash-based signatures](/learn/explainers/hash-based-signatures/)
