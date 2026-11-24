---
title: Backups, archives and storage
search_title: Post-quantum backups, archives and storage
sidebar_label: Backups, archives and storage
displayed_sidebar: technologyOptionsSidebar
description: How to tell whether stored data depends on public-key cryptography at all, what good looks like when it does, and what to do about data already encrypted.
---

## What it is

Backups, archives, object storage, and encrypted databases hold data for years. Whether they need a post-quantum change depends on one question: **is any key protected by public-key cryptography?**

- **Symmetric encryption only**, with keys held in a key management service rather than wrapped to a public key: the UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, says existing symmetric algorithms with at least 128-bit keys, such as AES, can continue to be used. The data itself does not need a post-quantum change, though the way keys reach the key service may.
- **Data keys wrapped or encrypted to a public key**, such as archive formats, backup tools, or SaaS storage that wrap keys for recipients or escrow: this is a **key-establishment** job, exposed to [harvest-now, decrypt-later](/learn/glossary/#harvest-now-decrypt-later) for as long as the data must stay confidential.

## Post-quantum options and status

There is no single storage standard. The mechanism depends on the format: CMS and OpenPGP formats follow [Encrypted email and files](/technology-options/encrypted-files/); products with their own key wrapping need a written answer from the supplier naming the algorithm.

## Who usually chooses

The backup, archive, or storage supplier for products you buy; you for formats and tools you run. For supplier-hosted storage, the supplier also decides how existing data is re-wrapped.

## What good looks like

1. **Protect new data under the chosen option** as soon as it is available.
2. **Keep stored data on its own register row.** Give it a `key establishment (stored data)` row, separate from the row for connections to the same system. A supplier's answer about connections says nothing about stored data, so ask about each in writing and judge each answer on its own row.
3. **Treat a confidentiality period nobody can confirm as long.** Until the data owner confirms how long the data must stay secret, treat it as long-lived, as [Which plan you need](/plan/) does when the answer to its first question is uncertain, and name on the register who will confirm it and by when.
4. **Decide what happens to data already encrypted** when its confidentiality period, counted from when the data was created, is long enough to meet the first of the four questions:
   - if you still hold the only copies, [re-wrap](/learn/glossary/#key-wrapping) the data keys under the new option where the format allows it without decrypting the data, and re-encrypt the data where it does not; record that work on the stored-data row;
   - if copies have already left your control, such as data sent out or held by a third party, re-wrapping your copy does not protect theirs; record the exposure on the [register](/templates/records/register/) for the sponsor, advised by legal or risk, to accept or act on;
   - delete data and keys you no longer need rather than migrating them.
5. **Check what is actually in use** by inspecting a sample object and confirming which algorithm protects its key.

## What to ask or test

- For each product, whether data keys are wrapped to a public key or held symmetrically in a key service, in the supplier's written answer.
- Whether the format can re-wrap data keys without decrypting the data.
- Where every copy lives: replicas, other media and sites, and third parties.

## Traps

- **Assuming at-rest encryption is affected, or that it is not.** Find out which kind it is before planning.
- **Old backups and replicas.** Copies on other media or sites are easy to forget when re-wrapping.
- **Counting the new option as migration** while stored data still sits under the old wrapping.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A `key establishment (stored data)` row, separate from the connections row, with the algorithm that protects stored data keys in `protected by today`, the confidentiality period and its source in `why it is here`, the supplier's answer and its judgement, re-wrapping or re-encrypting data already stored as the `next step`, and exposures of copies outside your control with the sponsor's decision |

## Example

An insufficient record is "Backups are encrypted, so they are fine."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the algorithm that protects the key wrapping of the design archive's stored files is `unknown`, the supplier's answer is `missing`, and a written answer is due by 1 December 2026, so stored-data protection is not counted as migrated. Because the designs must stay confidential for 15 years, files already stored under Workspace 4.1 need the same protection; once the answer arrives, the manufacturer decides whether to re-wrap or re-encrypt them and records that work on the stored-data row.

## Sources

- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Encrypted email and files](/technology-options/encrypted-files/)
- [Cloud and SaaS](/technology-options/cloud-saas/)
- [HSMs and key management](/technology-options/hsm-kms/)
- [Which plan you need](/plan/)
