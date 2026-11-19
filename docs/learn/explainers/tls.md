---
title: What changes in a TLS connection
sidebar_label: What changes in a TLS connection
description: Where the shared secret is established in a TLS connection, and how that differs from checking who the server is.
displayed_sidebar: learnSidebar
---

TLS combines distinct cryptographic jobs in one connection. Moving the key exchange to a post-quantum mechanism does not automatically change the algorithm that authenticates the server.

| Part of TLS | Job | Post-quantum transition |
| --- | --- | --- |
| Key exchange | Establishes a shared secret from which traffic keys are derived. | Post-quantum or hybrid key exchange can protect this job. |
| Server authentication | Uses certificates and signatures to let the client check the server's identity. | This remains a separate job; it may still use classical signatures even when key exchange is post-quantum. |
| Traffic protection | Uses symmetric cryptography to protect the exchanged data. | It is not replaced simply because the key-exchange mechanism changes. |

The current protocol status makes this separation concrete. In guidance updated 15 October 2026, the UK NCSC recommends hybrid and pure post-quantum key-exchange profiles for TLS 1.3, while noting that post-quantum authentication and the wider public Web PKI are still being standardised. Its earlier March 2025 migration timeline described the target dates; the later TLS guidance reflects the newer protocol status.

This is why “TLS supports PQC” needs qualification: it may describe key exchange while leaving server authentication on a separate transition path.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- Internet Engineering Task Force, Post-quantum traditional hybrid key agreement mechanisms for TLS 1.3, RFC 10024, 2026. [RFC 10024](https://www.rfc-editor.org/rfc/rfc10024)
- UK National Cyber Security Centre, Using Transport Layer Security to protect data, updated 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [In real systems](/learn/in-real-systems/)
- [What a KEM is](/learn/explainers/kem/)
