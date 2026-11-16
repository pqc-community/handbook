import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const read = (file) => fs.readFileSync(file, 'utf8');

function walk(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walk(full));
    else if (entry.name.endsWith('.md')) found.push(full);
  }
  return found;
}

function mermaidFences(page) {
  const fences = [];
  const re = /```mermaid\n([\s\S]*?)```/g;
  let match;
  while ((match = re.exec(page)) !== null) {
    fences.push(match[1]);
  }
  return fences;
}

function assertSingleSequenceDiagram(page, bodyAssert) {
  const fences = mermaidFences(page);
  assert.equal(fences.length, 1);
  assert.match(fences[0], /^sequenceDiagram/);
  bodyAssert(fences[0]);
}

test('mermaid theme is enabled at the Docusaurus 3.10.1 pin', () => {
  const pkg = JSON.parse(read('package.json'));
  assert.equal(pkg.dependencies['@docusaurus/theme-mermaid'], '3.10.1');
  assert.equal(pkg.dependencies['@docusaurus/core'], '3.10.1');
  assert.equal(pkg.dependencies['@docusaurus/preset-classic'], '3.10.1');
  assert.equal(pkg.dependencies['@docusaurus/faster'], '3.10.1');
  assert.match(pkg.scripts.test, /scripts\/check-explainers\.test\.mjs/);
  assert.equal(pkg.dependencies['@mermaid-js/layout-elk'], undefined);
  const config = read('docusaurus.config.ts');
  assert.match(config, /mermaid:\s*true/);
  assert.match(config, /@docusaurus\/theme-mermaid/);
  assert.match(config, /light:\s*'neutral'/);
  assert.match(config, /dark:\s*'dark'/);
  assert.equal(config.includes('layout-elk'), false);
  assert.equal(config.includes('@theme/Mermaid'), false);
  assert.equal(config.includes('/learn/explainers/'), false);
});

test('tls explainer separates the shared secret from the server check', () => {
  const page = read('docs/learn/explainers/tls.md');
  assert.match(page, /displayed_sidebar: learnSidebar/);
  assert.match(page, /last_reviewed: 2026-11-10/);
  assert.match(page, /Where is the shared secret established in a TLS connection, and how is that different from checking who the server is\?/);
  assert.match(page, /You have read \[In real systems\]\(\/learn\/in-real-systems\/\)/);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Client[\s\S]*participant Server[\s\S]*Key establishment[\s\S]*Check the server with a signature/);
  });
  assert.match(page, /\| Classical \| Today's public-key key establishment \| A separate signature check \|/);
  assert.match(page, /\| Hybrid \| A classical key establishment and a post-quantum key establishment used together \| A separate signature check \|/);
  assert.match(page, /\| Post-quantum-only \| Post-quantum key establishment alone \| A separate signature check \|/);
  assert.match(page, /\*\*Authority recommendation:\*\* \[NIST IR 8547\]\(https:\/\/doi\.org\/10\.6028\/NIST\.IR\.8547\), October 2026, treats a hybrid construction as a temporary hedge\./);
  assert.match(page, /https:\/\/www\.ncsc\.gov\.uk\/guidance\/pqc-migration-timelines/);
  assert.match(page, /an exact industry-wide mechanism was not yet standardised at publication/);
  assert.match(page, /modified 3 August 2026/);
  assert.match(page, /Key establishment produces the shared secret, and checking the server is a separate signature check\. That split holds for a classical exchange, a hybrid exchange, and a post-quantum-only exchange\./);
  assert.match(page, /This distinction continues from \[In real systems\]\(\/learn\/in-real-systems\/\)\./);
  assert.match(page, /Continue with \[Learn the basics\]\(\/learn\/\)\./);
  assert.equal(page.toLowerCase().includes('handshake'), false);
  assert.equal(page.includes('ML-KEM-768'), false);
  assert.equal(page.toLowerCase().includes('clinic'), false);
  assert.equal(page.includes('!['), false);
  assert.equal(page.includes('RFC 10024'), false);
});

test('kem explainer stops at the shared secret', () => {
  const page = read('docs/learn/explainers/kem.md');
  assert.match(page, /displayed_sidebar: learnSidebar/);
  assert.match(page, /last_reviewed: 2026-11-10/);
  assert.match(page, /What does a key-encapsulation mechanism produce, and why is that not bulk encryption\?/);
  assert.match(page, /You have read \[Algorithms\]\(\/learn\/algorithms\/\)/);
  assert.match(page, /The KEM does not carry the page, the file, or the health record\./);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Sender[\s\S]*participant Recipient[\s\S]*Encapsulate with the recipient's public key[\s\S]*Decapsulate with the private key/);
  });
  assert.match(page, /Encapsulation produces a ciphertext and a shared secret, and decapsulation recovers that secret\. The KEM does not carry the page, the file, or the health record\./);
  assert.match(page, /This distinction continues from \[Algorithms\]\(\/learn\/algorithms\/\)\./);
  assert.match(page, /Continue with \[What changes in a TLS connection\]\(\/learn\/explainers\/tls\/\)\./);
  assert.match(page, /https:\/\/csrc\.nist\.gov\/pubs\/fips\/203\/final/);
  assert.match(page, /for ML-KEM/);
  assert.equal(page.includes('ML-KEM-768'), false);
  assert.equal(page.includes('parameter set'), false);
  assert.equal(page.toLowerCase().includes('clinic'), false);
  assert.equal(page.includes('!['), false);
});

test('quantum explainer keeps the contrast inside NIST IR 8547', () => {
  const page = read('docs/learn/explainers/quantum-computers.md');
  assert.match(page, /displayed_sidebar: learnSidebar/);
  assert.match(page, /last_reviewed: 2026-11-10/);
  assert.match(page, /Which quantum effect applies to confidentiality, and which does not\?/);
  assert.match(page, /You have read \[The quantum threat\]\(\/learn\/quantum-threat\/\)/);
  assert.match(page, /names Shor's algorithm as the quantum algorithm that threatens today's public-key key establishment and digital signatures/);
  assert.match(page, /names Grover's algorithm as the more limited effect, which does not by itself retire symmetric cryptography on the same timetable/);
  assert.match(page, /confidentiality risk for information protected now and still sensitive later/);
  assert.match(page, /a signature checked at the time of use is not that confidentiality risk/);
  assert.match(page, /if one is built/);
  assert.equal(page.includes('This page does not say'), false);
  assert.match(page, /\| Information protected now and still sensitive later \| Harvest-now, decrypt-later, a confidentiality risk \|/);
  assert.match(page, /\| A signature checked at the time of use \| Not that confidentiality risk \|/);
  assert.match(page, /The right-hand column is an \*\*Authority statement\*\*, cited to NIST IR 8547, October 2026\./);
  assert.match(page, /Shor's algorithm applies to today's public-key key establishment and digital signatures, and Grover's algorithm does not by itself retire symmetric cryptography on the same timetable\. Harvest-now, decrypt-later is a confidentiality risk, and a signature checked at the time of use is not that risk\./);
  assert.match(page, /This distinction continues from \[The quantum threat\]\(\/learn\/quantum-threat\/\)\./);
  assert.match(page, /Continue with \[What a KEM is\]\(\/learn\/explainers\/kem\/\)\./);
  assert.match(page, /https:\/\/doi\.org\/10\.6028\/NIST\.IR\.8547/);
  assert.equal(page.includes('mermaid'), false);
  assert.equal(page.includes('sequenceDiagram'), false);
  assert.equal(page.includes('fips/203'), false);
  assert.equal(page.includes('ncsc.gov.uk'), false);
  assert.equal(page.toLowerCase().includes('clinic'), false);
  assert.equal(page.includes('!['), false);
});

test('keys explainer assigns each job to a key', () => {
  const page = read('docs/learn/explainers/keys.md');
  assert.match(page, /displayed_sidebar: learnSidebar/);
  assert.match(page, /last_reviewed: 2026-11-10/);
  assert.match(page, /Which job does the public key do, and which job does the private key do\?/);
  assert.match(page, /You have read \[Public-key cryptography\]\(\/learn\/public-key-cryptography\/\)/);
  assert.match(page, /\| Key establishment \| Used to create a shared secret \| Recovers that secret \|/);
  assert.match(page, /\| Encryption \| Encrypts \| Decrypts \|/);
  assert.match(page, /\| Signing \| Checks the signature \| Creates the signature \|/);
  assert.match(page, /\| Verification \| The check itself \| Does not reverse the signature \|/);
  assert.match(page, /The encryption row describes that classical job/);
  assert.match(page, /FIPS 203, FIPS 204, and FIPS 205 do not standardise public-key encryption/);
  assert.match(page, /An unnamed web session uses key establishment/);
  assert.match(page, /an unnamed software update uses signing and verification/);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Publisher[\s\S]*participant Device[\s\S]*The check does not reverse the signature/);
  });
  assert.match(page, /The public key is used to create a shared secret, and the private key recovers it\. The private key creates a signature, and the public key checks it, and checking a signature does not reverse it\./);
  assert.match(page, /This distinction continues from \[Public-key cryptography\]\(\/learn\/public-key-cryptography\/\)\./);
  assert.match(page, /Continue with \[What a quantum computer changes\]\(\/learn\/explainers\/quantum-computers\/\)\./);
  assert.match(page, /https:\/\/doi\.org\/10\.6028\/NIST\.IR\.8547/);
  assert.match(page, /https:\/\/csrc\.nist\.gov\/pubs\/fips\/203\/final/);
  assert.match(page, /https:\/\/csrc\.nist\.gov\/pubs\/fips\/204\/final/);
  assert.match(page, /https:\/\/csrc\.nist\.gov\/pubs\/fips\/205\/final/);
  assert.equal(page.includes('ML-KEM'), false);
  assert.equal(page.includes('RSA'), false);
  assert.equal(page.toLowerCase().includes('clinic'), false);
  assert.equal(page.includes('!['), false);
});

test('go deeper lists the four explainers without changing the core path', () => {
  const landing = read('docs/learn/index.md');
  assert.match(landing, /1\. \[Public key cryptography\]\(\/learn\/public-key-cryptography\/\)/);
  assert.match(landing, /2\. \[Quantum threat\]\(\/learn\/quantum-threat\/\)/);
  assert.match(landing, /3\. \[What post-quantum means\]\(\/learn\/what-post-quantum-means\/\)/);
  assert.match(landing, /4\. \[Algorithms\]\(\/learn\/algorithms\/\)/);
  assert.match(landing, /5\. \[In real systems\]\(\/learn\/in-real-systems\/\)/);
  assert.match(landing, /6\. \[Standardisation\]\(\/learn\/standardisation\/\)/);
  assert.match(landing, /7\. \[Glossary\]\(\/resources\/glossary\/\)/);
  assert.match(landing, /The sequence is background\. A migration procedure starts from the homepage\./);
  const deeperAt = landing.indexOf('## Go deeper');
  const planAt = landing.indexOf('When you are ready to plan');
  assert.ok(deeperAt > -1 && planAt > deeperAt);
  const deeper = landing.slice(deeperAt, planAt);
  assert.match(deeper, /These pages are optional\./);
  assert.match(deeper, /1\. \[What the keys actually do\]\(\/learn\/explainers\/keys\/\)/);
  assert.match(deeper, /2\. \[What a quantum computer changes\]\(\/learn\/explainers\/quantum-computers\/\)/);
  assert.match(deeper, /3\. \[What a KEM is\]\(\/learn\/explainers\/kem\/\)/);
  assert.match(deeper, /4\. \[What changes in a TLS connection\]\(\/learn\/explainers\/tls\/\)/);

  const publicKey = read('docs/learn/public-key-cryptography.md');
  assert.match(publicKey, /Continue with \[The quantum threat\]\(\/learn\/quantum-threat\/\)\.\n\nFor how the two keys differ by job, read \[What the keys actually do\]\(\/learn\/explainers\/keys\/\)\./);
  const quantum = read('docs/learn/quantum-threat.md');
  assert.match(quantum, /Continue with \[What post-quantum means\]\(\/learn\/what-post-quantum-means\/\)\.\n\nFor which quantum effect applies to confidentiality, read \[What a quantum computer changes\]\(\/learn\/explainers\/quantum-computers\/\)\./);
  const algorithms = read('docs/learn/algorithms.md');
  assert.match(algorithms, /Continue with \[In real systems\]\(\/learn\/in-real-systems\/\)\.\n\nFor why a KEM is not bulk encryption, read \[What a KEM is\]\(\/learn\/explainers\/kem\/\)\./);
  const systems = read('docs/learn/in-real-systems.md');
  assert.match(systems, /Continue with \[Standardisation\]\(\/learn\/standardisation\/\)\.\n\nFor where the shared secret sits in a connection, read \[What changes in a TLS connection\]\(\/learn\/explainers\/tls\/\)\./);

  const sidebars = read('sidebars.ts');
  const categoryAt = sidebars.indexOf("label: 'Go deeper'");
  assert.ok(categoryAt > sidebars.indexOf("'learn/standardisation'"));
  const categoryEnd = sidebars.indexOf('],', categoryAt);
  const goDeeperCategory = sidebars.slice(categoryAt, categoryEnd > -1 ? categoryEnd : undefined);
  assert.match(goDeeperCategory, /collapsed: false/);
  const category = sidebars.slice(categoryAt);
  const keysAt = category.indexOf("'learn/explainers/keys'");
  const quantumAt = category.indexOf("'learn/explainers/quantum-computers'");
  const kemAt = category.indexOf("'learn/explainers/kem'");
  const tlsAt = category.indexOf("'learn/explainers/tls'");
  assert.ok(keysAt > -1 && keysAt < quantumAt && quantumAt < kemAt && kemAt < tlsAt);

  const nav = read('navigation-structure.md');
  assert.match(nav, /\/learn\/explainers\/keys\//);
  assert.match(nav, /\/learn\/explainers\/quantum-computers\//);
  assert.match(nav, /\/learn\/explainers\/kem\//);
  assert.match(nav, /\/learn\/explainers\/tls\//);
  assert.match(nav, /The learn landing lists six lessons; the glossary on the resources sidebar is the seventh step in the sequence\. Go deeper is an optional list of four explainers on the Learn landing page and in `learnSidebar`\./);
});

test('explainer links stay on the learn path', () => {
  const allowed = new Set([
    'docs/learn/index.md',
    'docs/learn/public-key-cryptography.md',
    'docs/learn/quantum-threat.md',
    'docs/learn/algorithms.md',
    'docs/learn/in-real-systems.md',
    'docs/learn/explainers/keys.md',
    'docs/learn/explainers/quantum-computers.md',
    'docs/learn/explainers/kem.md',
    'docs/learn/explainers/tls.md',
  ]);
  const leaks = walk('docs')
    .map((file) => file.split(path.sep).join('/'))
    .filter((file) => read(file).includes('/learn/explainers/') && !allowed.has(file));
  assert.deepEqual(leaks, []);
});
