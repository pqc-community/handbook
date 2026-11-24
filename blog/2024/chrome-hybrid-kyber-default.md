---
title: Chrome 124 turns on hybrid Kyber key exchange
description: Chrome 124 for desktop offers hybrid X25519Kyber768 key exchange by default in TLS 1.3 and QUIC, so test middleboxes against the larger ClientHello.
date: 2024-04-16
authors: [pqc_handbook]
tags: [deployment-milestones, key-establishment, ietf]
---

On April 16, 2024, Google released [Chrome 124](https://developer.chrome.com/release-notes/124), which offers a hybrid X25519Kyber768 key exchange by default in TLS 1.3 and QUIC connections from desktop Chrome. It matters to anyone who runs web servers, load balancers or TLS-inspecting middleboxes, because those connections now carry a ClientHello over a kilobyte larger than before, and [post-quantum TLS](/technology-options/tls/) moves from experiment to everyday traffic.

{/* truncate */}

## What Chrome changed

Chrome's release notes describe the change as "a hybrid X25519 and Kyber768 key agreement" that protects current Chrome TLS traffic against future quantum cryptanalysis, and say it should be transparent to users. It combines the elliptic-curve X25519 exchange with Kyber-768, so the session key stays protected if either component holds; the [hybrid lesson](/learn/hybrid/) explains the construction. Google first announced support in August 2023, starting in Chrome 116, and has now made it the default on desktop platforms.

The change covers key establishment only. It protects connections against harvest-now, decrypt-later attacks on recorded traffic, but the server's certificate and its signatures stay classical, so the [PKI and certificates](/technology-options/pki/) work runs on its own timetable. Both Kyber and the X25519Kyber768 TLS specification were still drafts at this date, and Google warned in August 2023 that its implementation could change before they were finalized.

## Compatibility risks

In its August 2023 announcement Google said X25519Kyber768 adds over a kilobyte to the TLS ClientHello message. Earlier experiments had shown that most TLS implementations cope with that increase, but in limited cases TLS middleboxes failed because of hardcoded limits on message size. For enterprises affected by such appliances, Chrome offers the PostQuantumKeyAgreementEnabled enterprise policy to turn the hybrid key exchange off. Google describes the policy as temporary and asks administrators to get the affected vendors to fix their products.

## What it means for your plan

If you run TLS endpoints or anything that inspects TLS in the path, test them with current desktop Chrome now. Check that firewalls, proxies, load balancers and servers handle the larger ClientHello without failing, and record what each connection actually negotiates, as the [TLS card](/technology-options/tls/) describes. Where a device fails, ask its supplier for a fixed release and a date, using the approach in [Work with suppliers](/plan/program/suppliers/), rather than relying on the enterprise policy for longer than necessary.

Record the Kyber-based group as provisional. It is a pre-standard mechanism that a browser can change in a later release, so your register should show which group a connection uses and when you last checked.

:::note[Later update]

On May 23, 2024, Google reported that the rollout had revealed previously existing bugs in several TLS middlebox products. On September 13, 2024, Google announced that Chrome would move from Kyber to standard ML-KEM; see [Chrome to switch from Kyber to ML-KEM](/news/2024/chrome-switches-to-ml-kem/).

:::

## Sources

- Google, Chrome 124 release notes, April 16, 2024. [Release notes (HTML)](https://developer.chrome.com/release-notes/124)
- Google Chromium blog, Protecting Chrome Traffic with Hybrid Kyber KEM, August 10, 2023. [Blog post (HTML)](https://blog.chromium.org/2023/08/protecting-chrome-traffic-with-hybrid.html)
- Google, Advancing our amazing bet on asymmetric cryptography, May 23, 2024. [Blog post (HTML)](https://blog.google/chromium/advancing-our-amazing-bet-on-asymmetric/)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [Forward secrecy and recorded traffic](/learn/explainers/forward-secrecy/)
- [Make and verify one change](/plan/program/implementation/)
