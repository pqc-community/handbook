---
title: Post-quantum glossary
sidebar_label: Glossary
displayed_sidebar: resourcesSidebar
description: Terms used across this handbook, from asymmetric cryptography and key encapsulation to hybrid constructions and harvest-now, decrypt-later.
---

Keep the glossary open while working through [Learn the basics](/learn/). Formal definitions are attributed to their defining standards where cited. When you are ready to plan, return to the [homepage](/).

### Asymmetric cryptography

Cryptography that uses a matched pair of keys. The public key can be shared, and the private key stays secret, because the two keys do different jobs. In key establishment the public key is used to create a shared secret and the private key recovers it. In signing, the private key creates the signature and the public key checks it, and that check does not reverse the signature. [Symmetric cryptography](#symmetric-cryptography) is the other family: one shared secret protects the bulk of the traffic once the public-key step is finished. The lessons call this [public-key cryptography](#public-key-cryptography). See [Public-key cryptography](/learn/public-key-cryptography/).

### Block cipher

A symmetric algorithm that encrypts data in fixed-size blocks under one secret key. The same key decrypts those blocks. AES is the familiar example. A block cipher encrypts one block at a time, and the protocol decides how those blocks are combined for a longer message. It is not [public-key cryptography](#public-key-cryptography), which uses a matched pair of keys, and it is not a key-encapsulation mechanism, which only establishes a shared secret. A stream cipher is the neighbouring symmetric algorithm: it encrypts a stream of bits rather than a fixed-size block. In the lessons, a protocol such as TLS derives symmetric keys from a shared secret, and a block cipher is one way those keys protect the bulk of the traffic. See [Public-key cryptography](/learn/public-key-cryptography/).

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names Grover's algorithm as the more limited threat, which does not by itself retire [symmetric cryptography](#symmetric-cryptography) on the same timetable. See [The quantum threat](/learn/quantum-threat/).

### CBOM (cryptography bill of materials)

A list of the cryptographic components in a product, on the same idea as a software bill of materials. NIST SP 1800-38B ([preliminary draft](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf), December 2023) describes it as a developing model, and it is not a requirement of this handbook. In the United States, [Executive Order 14412](/standards/us-federal-directives/eo-14412/) (22 June 2026) directs CISA, with NIST, to publish guidance on the minimum elements of a CBOM within 270 days. The inventory still needs one row per system, including cryptography a scan cannot see. See [Inventory the cryptography](/migration-practices/inventory/).

### Certificate

A signed binding between a name and a public key. The issuer signs that binding, and a verifier checks the signature before it trusts the key for the named site, device, or organisation. The certificate does not contain the private key, and one certificate is not the whole chain. The leaf certificate is the one for the site or the device. The [certificate chain](#certificate-chain) runs from that leaf, through an intermediate, to a trust anchor the verifier already holds. A new signature algorithm has to be accepted by the issuer and by the verifiers, not only written onto the leaf. See [Signatures](/technology-options/signatures/) and [In real systems](/learn/in-real-systems/).

### Certificate chain

The linked certificates from the leaf certificate for a site or a device, through an intermediate, to a trust anchor the verifier already holds. Checking the leaf is not enough when the verifier does not already trust the issuer. A new signature algorithm on the leaf still has to chain to an anchor that verifier accepts, so the signers, the intermediates, and the trust stores move together. See [Signatures](/technology-options/signatures/) and [In real systems](/learn/in-real-systems/).

### CNSA 2.0

The Commercial National Security Algorithm Suite 2.0: the quantum-resistant algorithms the US National Security Agency approves for national security systems. NSA's CNSA 2.0 FAQ (version 2.2, October 2026) names AES-256, ML-KEM-1024, ML-DSA-87, SHA-384 or SHA-512, and, for firmware and software signing, LMS and XMSS. It applies to national security systems and the suppliers to them, not to organisations in general. See [NSA CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/).

### Composite signature

A single signature object that combines a post-quantum and a classical signature, so both must verify. [RFC 10073](/standards/modules-protocols-identity/rfc-10073/) (November 2026) defines composite ML-DSA for X.509 certificates. NIST IR 8547 treats composite, dual, and hybrid signatures together; see [Dual signature](#dual-signature).

### Crypto-agility

The ability to change algorithms again after this migration. Choosing a construction now does not close the programme. Configuration, an owner, dependencies, tests, a change window, and a deprecation path still have to exist so a later construction can replace the one in use. The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) tells stakeholders to remain cryptographically agile so they can adapt. See [Changing algorithms again](/migration-practices/changing-algorithms-again/).

### Cryptographic module

The [Cryptographic Module Validation Program](https://csrc.nist.gov/projects/cryptographic-module-validation-program) (CMVP), a joint programme of NIST and the Canadian Centre for Cyber Security, validates modules to [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final), March 2019. The [NIST glossary](https://csrc.nist.gov/glossary/term/cryptographic_module), citing that standard, defines a cryptographic module as the set of hardware, software, and/or firmware that implements approved security functions, including cryptographic algorithms and key generation, and is contained within the cryptographic boundary.

The module is that implementation, not the name of an algorithm. ML-KEM is not a cryptographic module. A library, a chip, or a firmware image can be one when those functions sit inside its cryptographic boundary. A claim that a product is FIPS 140 validated names that module. It does not say the product has moved to a post-quantum algorithm. See [Algorithms](/learn/algorithms/) and [Choosing an option](/technology-options/choosing/).

### Cryptographically relevant quantum computer (CRQC)

A quantum computer large and reliable enough to break today's public-key cryptography using Shor's algorithm. The UK NCSC's [Next steps in preparing for post-quantum cryptography](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (August 2024) uses this term; [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says *cryptanalytically* relevant, and states that none exists today. Nobody can say reliably when one will. See [The quantum threat](/learn/quantum-threat/) and [When to start](/learn/explainers/when-to-start/).

### Digital signature

A value created with a private key so that anyone with the matching public key can check that the holder of the private key approved a message or a file. Checking the signature does not reverse it, and it does not recover the private key. A signature is not encryption. Encryption hides the message, and a signature shows who approved it. The signature is often computed on a digest from a [hash function](#hash-function), or on output from an [extendable-output function](#extendable-output-function-xof), so a long message can be signed. That digest is not the signature. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) specifies ML-DSA and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specifies SLH-DSA, the two general-purpose post-quantum signature standards; [stateful hash-based signatures](#stateful-hash-based-signature) serve narrower uses. See [Public-key cryptography](/learn/public-key-cryptography/) and [Signatures](/technology-options/signatures/).

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines a digital signature as the result of a cryptographic transformation of data that, when properly implemented, provides a mechanism to verify origin authenticity and data integrity and to enforce signatory non-repudiation. The same report says signature algorithms provide support for non-repudiation, and that they are used with hash functions or extendable-output functions to sign messages of arbitrary length. It also says digital signatures are not vulnerable to harvest-now, decrypt-later. The transition is still urgent because it takes longer and more parties coordinate. An authentication system remains secure until the algorithm can be broken at the time of authentication. See [The quantum threat](/learn/quantum-threat/).

Origin authenticity means the check shows that the holder of the private key approved the message. Data integrity means the check shows the message was not altered after signing. Signatory non-repudiation means the signer cannot later deny that approval. The report's own wording is "support for" that claim, and it applies when the signature is properly implemented. The algorithm does not by itself keep the identity binding, the time, or the policy a later dispute needs.

### Discovery

Finding where cryptography is used, including what a scan cannot see. A scan of libraries and configurations finds some of it and misses embedded and hardware-bound cryptography, and cryptography inside a supplier's product. Those gaps stay on the inventory as unknown until both algorithm cells name a construction. See [Inventory the cryptography](/migration-practices/inventory/).

### Dual signature

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes dual signatures as two or more signatures on a common message, all of which must verify; they are also called hybrid or composite signatures. NIST's standards accommodate them provided at least one component algorithm is NIST-approved. They are the signature form of a [hybrid](#hybrid) construction. See [Hybrid cryptography](/learn/hybrid/).

### Encryption

A transformation that hides data so it can be read again only with the matching key. The reversal is decryption. A [digital signature](#digital-signature) does not do this job: the signature shows who approved the message, and checking it does not recover a hidden message. Symmetric encryption uses one shared secret both to encrypt and to decrypt, and that step carries the bulk of the traffic once a key has been established. A [block cipher](#block-cipher) is one symmetric algorithm that does it. Public-key encryption uses the public key to encrypt and the private key to decrypt. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) do not standardise public-key encryption. A key-encapsulation mechanism establishes a shared secret and does not encrypt the message. See [Public-key cryptography](/learn/public-key-cryptography/) and [Algorithms](/learn/algorithms/).

### eXtendable-Output Function (XOF)

[FIPS 202](https://csrc.nist.gov/pubs/fips/202/final), August 2015, defines an extendable-output function as a function on bit strings in which the output can be extended to any desired length. It specifies two: SHAKE128 and SHAKE256. Those numbers name a security strength, not a fixed output length.

A [hash function](#hash-function) such as SHA3-256 produces one fixed-length digest. A XOF does not. The caller chooses how many bits to take, and a longer output of the same input is an extension of the shorter one. It is not encryption, and it is not a signature. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) and [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) use SHAKE128 and SHAKE256 inside ML-KEM and ML-DSA. See [Algorithms](/learn/algorithms/).

### FIPS (Federal Information Processing Standard)

A standard NIST issues for US federal computer systems, such as FIPS 203 for ML-KEM. NIST's [FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips) (updated 2 November 2026) says FIPS are not always mandatory for federal agencies: each FIPS's applicability section says when it is. FIPS do not apply to national security systems, and many private-sector organisations use them voluntarily. See [How to read status](/standards/#how-to-read-status).

### Forward secrecy

[NIST SP 800-52 Rev. 2](https://csrc.nist.gov/pubs/sp/800/52/r2/final), August 2019, describes perfect forward secrecy as the condition in which the compromise of a long-term private key, after it has been used to establish a session key, does not cause the compromise of that session key. Cipher suites that use ephemeral Diffie-Hellman provide that property.

The long-term private key is the one a certificate holds. The session key is a fresh secret for one connection, established with an ephemeral private key that is then discarded. A later theft of the long-term private key does not recover those session keys. A static key pair reused across connections does not give that property. Forward secrecy is not a defence against [harvest-now, decrypt-later](#harvest-now-decrypt-later): an attacker who recorded the handshake can still recover the session key later if the ephemeral key-establishment algorithm itself is broken. See [The quantum threat](/learn/quantum-threat/) and [Key establishment](/technology-options/key-establishment/).

### Harvest-now, decrypt-later

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names collecting encrypted data now and decrypting it later. It applies to confidentiality, not to authentication. Information protected now and still sensitive later is the case that matters, including recorded traffic and stored ciphertext. A signature checked at the time of use is not that risk. See [The quantum threat](/learn/quantum-threat/).

### Hash function

[FIPS 202](https://csrc.nist.gov/pubs/fips/202/final), August 2015, defines a hash function as a function on bit strings for which the length of the output is fixed. The input is the message, and the output is the digest. It specifies SHA3-224, SHA3-256, SHA3-384, and SHA3-512. In each name, the number is that fixed length. SHAKE128 and SHAKE256, in the same standard, are [extendable-output functions](#extendable-output-function-xof), not hash functions.

The same message always produces the same digest, and the digest does not recover the message. SHA-256 is the familiar example. A hash function is not encryption, and it is not a [digital signature](#digital-signature). A signature is often computed on the digest rather than on the whole message. SLH-DSA in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) is a signature algorithm built from hash functions. The hash function is not that signature.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says NIST's existing standards in symmetric cryptography, including hash functions, are significantly less vulnerable to known quantum attacks than the public-key standards in SP 800-56A, SP 800-56B, and FIPS 186. See [The quantum threat](/learn/quantum-threat/) and [Algorithms](/learn/algorithms/).

### HQC

A key-encapsulation mechanism that NIST selected in [NIST IR 8545](https://csrc.nist.gov/pubs/ir/8545/final) (March 2025) as an alternative to ML-KEM. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says a FIPS specifying it is under development and that it will become an approved scheme once published. Until then it is selected, not standardised. See [Post-quantum algorithms](/learn/algorithms/).

### Hybrid

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes a classical algorithm and a post-quantum algorithm used together so the exchange or the signature still holds if either one fails. The construction is secure if at least one component is secure. The same report says hybrid solutions add complexity and, when used, are typically temporary measures leading to a second transition to post-quantum-only cryptography.

Hybrid key establishment combines a classical and a post-quantum exchange into one shared secret; the signature form is a [dual signature](#dual-signature). Supporting two algorithms and negotiating one per session is not hybrid. Authorities differ on when hybrid is appropriate. See [Hybrid cryptography](/learn/hybrid/).

### Key agreement

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines key agreement as a pair-wise key-establishment procedure in which the shared secret is a function of information contributed by both parties, so that neither party can set that secret independently of the other. It contrasts this with [key transport](#key-transport), in which one party selects the secret and sends it to the other. The same report places Diffie-Hellman and MQV among the discrete-logarithm schemes in SP 800-56A, and says SP 800-56B includes approved methods for both key agreement and key transport. It says the key-establishment algorithms in both of those publications are vulnerable to Shor's algorithm. It describes a key-encapsulation mechanism as a particular type of key-establishment scheme, and names ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) for that scheme.

Both parties contribute, and neither can choose the secret alone. That is the difference from [key transport](#key-transport). A [KEM](#key-encapsulation-mechanism-kem) also produces a shared secret, which is the job these lessons call [key establishment](#key-establishment), and ML-KEM is specified as a KEM rather than as Diffie-Hellman key agreement. The shared secret is not the message, and the exchange is not a signature. A later [key derivation](#key-derivation) can turn that secret into the keys that protect traffic. See [Key establishment](/technology-options/key-establishment/) and [Algorithms](/learn/algorithms/).

### Key derivation

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines key derivation as the process of deriving a key in a non-reversible manner from shared information, some of which is secret. It defines a shared secret as a value computed during [key establishment](#key-establishment) and used as input to a key-derivation method. It defines a shared secret key as a shared secret that can be used directly as a symmetric key and does not require further derivation. The output of [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) is a shared secret key. The same report includes key-derivation functions, in SP 800-56C, SP 800-132, and SP 800-108, among the symmetric standards that are significantly less vulnerable to known quantum attacks than the public-key standards in SP 800-56A, SP 800-56B, and FIPS 186.

[Key agreement](#key-agreement) and a [KEM](#key-encapsulation-mechanism-kem) establish a shared secret. Key derivation starts from a secret that already exists and produces keys for a later use, such as the symmetric keys that protect the bulk of a TLS session. The step does not recover the secret it started from. It is not encryption, and it is not a signature. ML-KEM's output may be used directly as a symmetric key, and a protocol may still derive separate keys from it. See [Key establishment](/technology-options/key-establishment/) and [In real systems](/learn/in-real-systems/).

### Key-encapsulation mechanism (KEM)

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines a key-encapsulation mechanism as a set of three algorithms, KeyGen, Encaps, and Decaps, that two parties can use to establish a shared secret key over a public channel. It describes a KEM as a particular type of [key establishment](#key-establishment), and names ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) for that scheme.

One party uses the other's public key to produce a ciphertext and a shared secret, and the other party uses the private key to recover that same secret. The mechanism does not carry the message, the file, or the record. A protocol such as TLS then uses [key derivation](#key-derivation) to produce symmetric keys from the shared secret, and those keys protect the bulk of the traffic. ML-KEM is the post-quantum mechanism these lessons name for that job. A [key agreement](#key-agreement) is a different pattern: both parties contribute, and neither sets the secret alone. See [Algorithms](/learn/algorithms/) and [Key establishment](/technology-options/key-establishment/).

### Key establishment

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines key establishment as a procedure that results in secret keying material shared among different parties. [Key agreement](#key-agreement) and [key transport](#key-transport) are pair-wise procedures of that kind. A [key-encapsulation mechanism](#key-encapsulation-mechanism-kem) is a particular type of key-establishment scheme, and the report names ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) as the only approved post-quantum key-establishment scheme based on public-key cryptography at the time of the report. It says that because symmetric keys established through key establishment provide confidentiality, harvest-now, decrypt-later needs to be considered when setting the migration timeline for that scheme.

This is the shared-secret job these lessons record separately from signatures. Key agreement, [key transport](#key-transport), and a KEM are ways to do it. [Key derivation](#key-derivation) starts from a secret that this step has already produced. The secret is not the message, and the exchange is not a [digital signature](#digital-signature). See [Key establishment](/technology-options/key-establishment/) and [The quantum threat](/learn/quantum-threat/).

### Key transport

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines key transport as a pair-wise [key-establishment](#key-establishment) procedure in which one party, the sender, selects the secret and then securely distributes that value to the other party, the receiver. It contrasts this with [key agreement](#key-agreement). The same report says SP 800-56B includes approved methods for both key agreement and key transport, and that the key-establishment algorithms in SP 800-56A and SP 800-56B are vulnerable to Shor's algorithm.

The sender chooses the secret and sends it. In [key agreement](#key-agreement), both parties contribute and neither sets the secret alone. A [KEM](#key-encapsulation-mechanism-kem) also establishes a shared secret. ML-KEM is not key transport: the sender does not choose a key and then encrypt that key to the receiver. When the receiver's private key is kept, a later theft of that key can recover the secrets it carried. An ephemeral key agreement whose private key is discarded gives [forward secrecy](#forward-secrecy). The transported secret is not the message. See [Key establishment](/technology-options/key-establishment/).

### Key wrapping

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines key wrapping as a method of protecting secret keying material, along with associated integrity information, that provides both confidentiality and integrity protection when using symmetric-key algorithms. It lists key wrapping among the uses of those algorithms, and says the existing standards for symmetric cryptography are less vulnerable to attacks by quantum computers. NIST does not expect to need to transition away from these standards as part of the post-quantum migration.

A wrapping key that the parties already share protects another key. The method hides that key and checks that it was not altered. [Key transport](#key-transport) is a different procedure: the sender selects a secret and sends it protected by the receiver's public key. Wrapping does not establish a shared secret, and it is not a [digital signature](#digital-signature). AES Key Wrap is the familiar example. A [block cipher](#block-cipher) such as AES supplies the symmetric algorithm underneath.

### Message authentication code (MAC)

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines a message authentication code as a cryptographic checksum on data that uses a symmetric key to detect both accidental and intentional modifications of data. It lists data authentication with a block-cipher mode, and data authentication with a keyed hash, among the uses of symmetric-key algorithms. It says the existing standards for symmetric cryptography are less vulnerable to attacks by quantum computers, and NIST does not expect to need to transition away from these standards as part of the post-quantum migration.

The sender and the checker share one secret. Someone without that secret cannot produce a code the checker will accept. A [hash function](#hash-function) has no key, so anyone can recompute the digest. A [digital signature](#digital-signature) is checked with the public key, so anyone can check it. A code of this kind does not hide the message. HMAC is the familiar example.

### ML-DSA (Module-Lattice-Based Digital Signature Algorithm)

NIST's lattice-based digital signature algorithm in [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final). It creates and checks signatures. It does not establish a shared secret, which is the job of ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final). SLH-DSA in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) also signs, with a hash-based design rather than this lattice construction. See [Algorithms](/learn/algorithms/).

### ML-KEM (Module-Lattice-Based Key-Encapsulation Mechanism)

NIST's key-establishment algorithm in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final). It is a [key-encapsulation mechanism](#key-encapsulation-mechanism-kem): two parties establish a shared secret, and that secret is not the message. ML-DSA in [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) and SLH-DSA in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) are the signature algorithms, and they do not do this job. See [Algorithms](/learn/algorithms/).

### Mosca's inequality

A way to decide when to start protecting confidential data. If X is how long data must stay secure, Y how long migration takes, and Z how long until a cryptanalytically relevant quantum computer exists, migration needs to start before X + Y exceeds Z. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, and [The PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) both describe it. See [When to start: Mosca's inequality](/learn/explainers/when-to-start/).

### PKI (public-key infrastructure)

The public-key infrastructure that issues and checks certificates. A certificate binds a name to a public key and takes its place in a chain to a trust anchor.

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says supporting a [quantum-resistant algorithm](#quantum-resistant-algorithm) means upgrading the systems that perform and accept the authentication, including the PKI. See [Signatures](/technology-options/signatures/).

### Post-quantum cryptography (PQC)

[Public-key cryptography](#public-key-cryptography) intended to stay secure against a cryptographically relevant quantum computer, if one is built. The algorithms run on ordinary computers. Parties still use public keys, private keys, key establishment, and signatures, and the hard problems are chosen so that known quantum attacks on today's RSA and elliptic-curve schemes do not apply on the same terms. It is not a guarantee against every future attack. It is also not quantum key distribution, which uses specialised quantum channels rather than public-key cryptography on ordinary networks. See [What post-quantum means](/learn/what-post-quantum-means/).

### Public-key cryptography

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines public-key cryptography as cryptography that uses two separate keys to exchange data, one to encrypt or digitally sign the data and one to decrypt the data or verify the digital signature. It says this is also known as [asymmetric cryptography](#asymmetric-cryptography).

These lessons use that name for the same matched pair of keys. The public key can be shared, and the private key stays secret. The jobs in these lessons are [key establishment](#key-establishment) and a [digital signature](#digital-signature). [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) do not standardise public-key encryption of the message. [Symmetric cryptography](#symmetric-cryptography) uses one shared secret for the bulk of the traffic once that public-key step is finished. [Post-quantum cryptography](#post-quantum-cryptography-pqc) is public-key cryptography aimed at a quantum computer. A [PKI](#pki-public-key-infrastructure) issues the certificates. It is not the cryptography itself. See [Asymmetric cryptography](#asymmetric-cryptography) and [Public-key cryptography](/learn/public-key-cryptography/).

### Quantum-resistant algorithm

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, uses quantum-resistant for the algorithms that replace a [quantum-vulnerable algorithm](#quantum-vulnerable-algorithm). Its glossary defines a post-quantum algorithm as one that is believed to be secure even against an adversary with a cryptanalytically relevant quantum computer, which the same glossary also calls a cryptographically relevant quantum computer. The report says [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specify quantum-resistant digital signature schemes, and it lists ML-KEM in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) among the quantum-resistant key-establishment schemes.

The belief is about known attacks, including a cryptographically relevant quantum computer if one is built. It is not a guarantee against every future attack. The algorithm still runs on an ordinary computer. It is not quantum key distribution. See [Post-quantum cryptography](#post-quantum-cryptography-pqc) and [What post-quantum means](/learn/what-post-quantum-means/).

### Quantum-vulnerable algorithm

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines a quantum-vulnerable algorithm as one that is believed to be secure against an adversary with only a classical computer, but is known to be insecure against an adversary with a cryptanalytically relevant quantum computer. It says the public-key signature algorithms in FIPS 186, and the key-establishment schemes in SP 800-56A and SP 800-56B, are vulnerable to Shor's algorithm. It says an authentication system may keep using these algorithms until a quantum computer that can break them is available, and that authentication then moves immediately to a [quantum-resistant algorithm](#quantum-resistant-algorithm).

RSA and elliptic-curve public-key schemes are the familiar examples. A [block cipher](#block-cipher) such as AES, and a [hash function](#hash-function) such as SHA-256, are not in this class on the same timetable. Harvest-now, decrypt-later is the confidentiality case for a quantum-vulnerable [key establishment](#key-establishment). A signature checked at the time of use is not that case. See [The quantum threat](/learn/quantum-threat/).

### Regular adopter

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) classifies organisations that do not need to react yet as regular adopters. Urgent adopters are the organisations that cannot afford to delay. An organisation on the boundary follows Section 3.2 of that handbook for when to start particular assets. See [Choosing an option](/technology-options/choosing/).

### Relying party

The person, service, or device that acts on the result of a signature or certificate check — for example, a browser deciding to trust a website, or a device deciding to install firmware. Changing a signature algorithm is useful only once relying parties accept the new algorithm. See [Signatures, certificates, and trust](/learn/signatures-and-trust/).

### Root of trust

A check the device cannot replace later. The case that matters is a verifier that cannot be updated in the field, on a device that will stay in use. A new signature algorithm cannot be introduced there after deployment, so the root is recorded before the product is locked, and long-lived roots come before the signature choice. See [Long-lived roots of trust](/technology-options/long-lived-roots/).

### SLH-DSA (Stateless Hash-Based Digital Signature Algorithm)

NIST's stateless hash-based digital signature algorithm in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final). It signs, as ML-DSA in [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) does, and the hash-based design is the difference. It is the stateless scheme to record when a stateful hash-based scheme is not appropriate, and it does not establish a shared secret. See [Algorithms](/learn/algorithms/) and [Long-lived roots of trust](/technology-options/long-lived-roots/).

### Stateful hash-based signature

A hash-based signature scheme in which the signer must track which one-time keys have been used and never reuse one. LMS, HSS, XMSS, and XMSS^MT in [NIST SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final) are the approved examples. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says they are not intended for general use but may suit software and firmware signing. Compare [SLH-DSA](#slh-dsa-stateless-hash-based-digital-signature-algorithm), which is stateless. See [Hash-based signatures](/learn/explainers/hash-based-signatures/).

### Symmetric cryptography

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, defines symmetric-key cryptography as an algorithm that uses the same secret key for its operation and, if applicable, for reversing that operation. An AES key used to encrypt and decrypt is the report's example. It also calls these secret-key algorithms: the same key applies the protection and removes or checks it. The report says the existing standards in symmetric cryptography, including hash functions, extendable-output functions, block ciphers, and key-derivation functions, are significantly less vulnerable to known quantum attacks than the public-key standards in SP 800-56A, SP 800-56B, and FIPS 186. NIST does not expect to need to transition away from these standards as part of the post-quantum migration.

One shared secret does both jobs. The same key encrypts and decrypts, and the same key creates and checks a [message authentication code](#message-authentication-code-mac). A [block cipher](#block-cipher) such as AES is the familiar encryption example. [Key derivation](#key-derivation) and [key wrapping](#key-wrapping) are other uses of a key the parties already share. [Public-key cryptography](#public-key-cryptography) uses a matched pair instead. [Key establishment](#key-establishment) produces a shared secret, and symmetric cryptography then protects the bulk of the traffic. It is not a [digital signature](#digital-signature). See [Public-key cryptography](/learn/public-key-cryptography/) and [The quantum threat](/learn/quantum-threat/).

### Trust anchor

A public key or certificate that a verifier trusts without further proof, and from which it checks every other certificate in a [certificate chain](#certificate-chain). Browsers and operating systems hold many in trust stores; an embedded device may hold one publisher key in its boot code. A new signature algorithm usually needs new trust anchors. See [Signatures, certificates, and trust](/learn/signatures-and-trust/).

### Urgent adopter

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) classifies organisations that cannot afford to delay as urgent adopters. Long-lived sensitive data sits with that group. Regular adopters do not need to react yet. See [Choosing an option](/technology-options/choosing/).

### Verifier

The component that checks a signature. When every verifier can be updated, the signature algorithm can change in a later release. When a verifier cannot be updated later, stop the signature checklist and open long-lived roots instead. A blocked row still counts as the change record. See [Signatures](/technology-options/signatures/) and [Long-lived roots of trust](/technology-options/long-lived-roots/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Status Report on the Fourth Round of the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8545, March 2025. [NIST IR 8545](https://csrc.nist.gov/pubs/ir/8545/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Learn the basics](/learn/)
- [Public-key cryptography](/learn/public-key-cryptography/)
- [The quantum threat](/learn/quantum-threat/)
- [What post-quantum means](/learn/what-post-quantum-means/)
- [Algorithms](/learn/algorithms/)
- [In real systems](/learn/in-real-systems/)
- [Hybrid cryptography](/learn/hybrid/)
- [Signatures, certificates, and trust](/learn/signatures-and-trust/)
- [Standardisation](/learn/standardisation/)
- [Homepage](/)
- [Changing algorithms again](/migration-practices/changing-algorithms-again/)
- [Curated references](/resources/curated-references/)
- [Choosing an option](/technology-options/choosing/)
- [Key establishment](/technology-options/key-establishment/)
- [Signatures](/technology-options/signatures/)
- [Long-lived roots of trust](/technology-options/long-lived-roots/)
- [Inventory the cryptography](/migration-practices/inventory/)
- [Priority](/migration-practices/priority/)
- [Diagnose](/migration-practices/diagnose/)
