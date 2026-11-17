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

function assertInOrder(text, parts) {
  let cursor = -1;
  for (const part of parts) {
    const at = text.indexOf(part, cursor + 1);
    assert.ok(at > cursor, part);
    cursor = at;
  }
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
  assert.match(page, /\/learn\/in-real-systems\//);
  assert.match(page, /shared secret/);
  assert.match(page, /signature/);
  assert.match(page, /Classical/);
  assert.match(page, /Hybrid/);
  assert.match(page, /Post-quantum-only/);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Client[\s\S]*participant Server/);
    assert.match(body, /signature/);
  });
  assert.match(page, /https:\/\/doi\.org\/10\.6028\/NIST\.IR\.8547/);
  assert.match(page, /October 2026/);
  assert.match(page, /hybrid/i);
  assert.match(page, /https:\/\/www\.ncsc\.gov\.uk\/guidance\/pqc-migration-timelines/);
  assert.match(page, /not yet standardised/);
  assert.match(page, /3 August 2026/);
  assert.match(page, /\]\(\/learn\/\)/);
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
  assert.match(page, /\/learn\/algorithms\//);
  assert.match(page, /shared secret/);
  assert.match(page, /health record/);
  assert.match(page, /file/);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Sender[\s\S]*participant Recipient/);
    assert.match(body, /encapsulat/i);
    assert.match(body, /decapsulat/i);
  });
  assert.match(page, /\/learn\/explainers\/tls\//);
  assert.match(page, /https:\/\/csrc\.nist\.gov\/pubs\/fips\/203\/final/);
  assert.match(page, /ML-KEM/);
  assert.equal(page.includes('ML-KEM-768'), false);
  assert.equal(page.includes('parameter set'), false);
  assert.equal(page.toLowerCase().includes('clinic'), false);
  assert.equal(page.includes('!['), false);
});

test('quantum explainer keeps the contrast inside NIST IR 8547', () => {
  const page = read('docs/learn/explainers/quantum-computers.md');
  assert.match(page, /displayed_sidebar: learnSidebar/);
  assert.match(page, /last_reviewed: 2026-11-10/);
  assert.match(page, /\/learn\/quantum-threat\//);
  assert.match(page, /Shor/);
  assert.match(page, /Grover/);
  assert.match(page, /symmetric/);
  assert.match(page, /harvest-now, decrypt-later/i);
  assert.match(page, /signature/);
  assert.match(page, /confidentiality/);
  assert.match(page, /\*\*Authority statement:\*\*/);
  assert.match(page, /https:\/\/doi\.org\/10\.6028\/NIST\.IR\.8547/);
  assert.match(page, /October 2026/);
  assert.match(page, /\/learn\/explainers\/kem\//);
  assert.equal(page.includes('already exists'), false);
  assert.equal(page.includes('This page does not say'), false);
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
  assert.match(page, /\/learn\/public-key-cryptography\//);
  assert.match(page, /public key/i);
  assert.match(page, /private key/i);
  assert.match(page, /Key establishment/);
  assert.match(page, /Encryption/);
  assert.match(page, /Signing/);
  assert.match(page, /Verification/);
  assert.match(page, /shared secret/);
  assert.match(page, /signature/);
  assert.match(page, /FIPS 203/);
  assert.match(page, /FIPS 204/);
  assert.match(page, /FIPS 205/);
  assert.match(page, /public-key encryption/);
  assert.equal(page.includes('standardises public-key encryption'), false);
  assertSingleSequenceDiagram(page, (body) => {
    assert.match(body, /participant Publisher[\s\S]*participant Device/);
    assert.match(body, /signature/);
  });
  assert.match(page, /\/learn\/explainers\/quantum-computers\//);
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
  assertInOrder(landing, [
    '/learn/public-key-cryptography/',
    '/learn/quantum-threat/',
    '/learn/what-post-quantum-means/',
    '/learn/algorithms/',
    '/learn/in-real-systems/',
    '/learn/standardisation/',
    '/learn/timelines/',
    '/resources/glossary/',
  ]);
  assert.match(landing, /background/);
  assert.match(landing, /migration procedure/);
  assert.match(landing, /homepage/);
  const deeperAt = landing.indexOf('## Go deeper');
  const planAt = landing.indexOf('When you are ready to plan');
  assert.ok(deeperAt > -1 && planAt > deeperAt);
  const deeper = landing.slice(deeperAt, planAt);
  assert.match(deeper, /optional/);
  assertInOrder(deeper, [
    '/learn/explainers/keys/',
    '/learn/explainers/quantum-computers/',
    '/learn/explainers/kem/',
    '/learn/explainers/tls/',
  ]);

  const linked = [
    ['docs/learn/public-key-cryptography.md', '/learn/quantum-threat/', '/learn/explainers/keys/'],
    ['docs/learn/quantum-threat.md', '/learn/what-post-quantum-means/', '/learn/explainers/quantum-computers/'],
    ['docs/learn/algorithms.md', '/learn/in-real-systems/', '/learn/explainers/kem/'],
    ['docs/learn/in-real-systems.md', '/learn/standardisation/', '/learn/explainers/tls/'],
  ];
  for (const [file, next, explainer] of linked) {
    const page = read(file);
    assert.match(page, new RegExp(next.replaceAll('/', '\\/')));
    assert.match(page, new RegExp(explainer.replaceAll('/', '\\/')));
  }

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
