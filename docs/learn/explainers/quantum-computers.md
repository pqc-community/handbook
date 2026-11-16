---
title: What a quantum computer changes
sidebar_label: What a quantum computer changes
description: Which quantum effect applies to confidentiality, and which does not.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Which quantum effect applies to confidentiality, and which does not?

You have read [The quantum threat](/learn/quantum-threat/). That lesson covers a cryptographically relevant quantum computer, if one is built. The further distinction is which effect applies to confidentiality, and which does not.

**Authority statement:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names Shor's algorithm as the quantum algorithm that threatens today's public-key key establishment and digital signatures.

**Authority statement:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names Grover's algorithm as the more limited effect, which does not by itself retire symmetric cryptography on the same timetable.

**Authority statement:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes harvest-now, decrypt-later as a confidentiality risk for information protected now and still sensitive later.

**Authority statement:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, states that a signature checked at the time of use is not that confidentiality risk.

**Handbook explanation:** the rows below set the confidentiality risk beside a signature checked at the time of use. The right-hand column is an **Authority statement**, cited to NIST IR 8547, October 2026.

| What is under consideration | What applies |
| --- | --- |
| Information protected now and still sensitive later | Harvest-now, decrypt-later, a confidentiality risk |
| A signature checked at the time of use | Not that confidentiality risk |

Shor's algorithm applies to today's public-key key establishment and digital signatures. Grover's algorithm does not by itself retire symmetric cryptography on the same timetable. Harvest-now, decrypt-later is a confidentiality risk, and a signature checked at the time of use is not that risk.

This distinction continues from [The quantum threat](/learn/quantum-threat/).

Continue with [What a KEM is](/learn/explainers/kem/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
