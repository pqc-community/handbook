---
title: What a quantum computer changes
sidebar_label: What a quantum computer changes
description: Which quantum effect applies to confidentiality, and which does not.
displayed_sidebar: learnSidebar
---

Which quantum effect applies to confidentiality, and which does not?

[The quantum threat](/learn/quantum-threat/) introduces how a cryptographically relevant quantum computer would affect existing cryptography. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026) separates those effects into four points:

- **Shor's algorithm** threatens today's public-key key establishment and digital signatures.
- **Grover's algorithm** has a more limited impact and does not by itself retire symmetric cryptography on the same timetable.
- **Harvest-now, decrypt-later** is an immediate confidentiality risk for encrypted traffic or stored data recorded today that will still be sensitive later.
- **Signatures verified at the time of use** are not exposed to that retroactive confidentiality risk.

The table contrasts those last two cases directly:

| What is under consideration | What applies (NIST IR 8547, October 2026) |
| --- | --- |
| Information protected now and still sensitive later | Harvest-now, decrypt-later, a confidentiality risk |
| A signature checked at the time of use | Not that confidentiality risk |

Shor's algorithm applies to today's public-key key establishment and digital signatures. Grover's algorithm does not, by itself, retire symmetric cryptography on the same timetable. Harvest-now, decrypt-later is the confidentiality risk, and a signature checked at the time of use is not that risk.

That is the same distinction as [The quantum threat](/learn/quantum-threat/). From here, read [What a KEM is](/learn/explainers/kem/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
