import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Node = {label?: string; title: string; to: string; text: string};

const questions = [
  {name: 'Data that must stay secret for years', text: 'Information that must stay confidential for ten years or more and is protected by public-key methods.'},
  {name: 'Devices with a fixed key', text: 'Products or devices that check signatures with a key or method that cannot change after they ship.'},
  {name: 'Signatures others rely on', text: 'A certificate authority, or code, firmware, or documents you sign that others check.'},
  {name: 'Systems you build or configure', text: 'Software you build, or cryptography you set up on your own servers, VPNs, or applications.'},
];

const outcomes: Node[] = [
  {
    label: 'None apply',
    title: 'Baseline',
    to: '/baseline/',
    text: 'Seven actions: list what you use, keep it supported, replace what is not, put post-quantum wording into purchases, and review every six months.',
  },
  {
    label: 'Any applies',
    title: 'Baseline and a programme',
    to: '/programme/',
    text: 'The baseline for everything you buy in, and a first move this week for each question that applied, then diagnose, plan, and execute.',
  },
  {
    label: 'Critical, regulated, or a large estate you build',
    title: 'Specialist advice first',
    to: '/start-here/',
    text: 'Bring in specialist advice and speak to your sector regulator, then follow the baseline and run a full programme.',
  },
];

const clocks = [
  {
    job: 'Key establishment',
    clock: 'Confidentiality',
    starts: 'Now, for data that is recorded or stored.',
    measured: 'How long the data must stay secret, plus how long migration takes.',
  },
  {
    job: 'Updatable signatures',
    clock: 'Coordination',
    starts: 'When the many parties involved need to start moving.',
    measured: 'How long signers, certificate authorities, and relying parties take to move together.',
  },
  {
    job: 'Verifiers that cannot be updated',
    clock: 'Lifetime',
    starts: 'When a device is designed or bought.',
    measured: 'Whether the device will outlive trust in its classical algorithm.',
  },
];

const registerRows = [
  {
    system: 'Product-design archive in supplier-hosted workspace',
    job: 'key establishment',
    why: 'Question 1: designs confidential for 15 years',
    status: 'Open: staging pilot passed; production not migrated',
  },
  {
    system: 'Firmware verifier for product sensor',
    job: 'non-updatable verifier',
    why: 'Question 2: boot ROM trust anchor',
    status: 'Blocked: resolve before the 30 June 2027 design freeze',
  },
  {
    system: 'Office laptops',
    job: 'key establishment; signatures',
    why: 'Baseline: supported commodity software',
    status: 'Open: tracked on the baseline',
  },
];

const reference: Node[] = [
  {
    title: 'Learn the basics',
    to: '/learn/',
    text: 'Ten short lessons on the cryptography a migration affects. No mathematics assumed.',
  },
  {
    title: 'Technology options',
    to: '/technology-options/',
    text: 'One card per technology: the job or jobs it does and its post-quantum status.',
  },
  {
    title: 'Standards',
    to: '/standards/',
    text: 'Standards, government requirements, and migration guides, each with its audience and status.',
  },
  {
    title: 'Templates',
    to: '/templates/',
    text: 'The five migration records, two worked examples, and the glossary.',
  },
];

function Box({node, className}: {node: Node; className?: string}) {
  return (
    <Link className={`${styles.box} ${className ?? ''}`} to={node.to}>
      {node.label ? <span className={styles.boxLabel}>{node.label}</span> : null}
      <span className={styles.boxTitle}>{node.title}</span>
      <span className={styles.boxText}>{node.text}</span>
    </Link>
  );
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroLead}>{siteConfig.tagline}.</p>
        <p className={styles.heroAudience}>
          For security, engineering, product, procurement, and risk professionals responsible for a post-quantum
          migration without specialist cryptography staff.
        </p>
        <p className={styles.heroLimit}>
          Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke
          estates, critical national infrastructure, or regulated systems.
        </p>
      </div>
    </header>
  );
}

function StartHere() {
  return (
    <section className={styles.section} aria-labelledby="start">
      <div className="container">
        <Heading as="h2" id="start">
          Start here: four questions
        </Heading>
        <p className={styles.intro}>
          Most organisations will not change any cryptography themselves: their suppliers will. Answer for the
          organisation as a whole. A question applies if any system you run fits it, and not sure counts as yes until
          someone confirms. <Link to="/start-here/">Read the questions in full</Link>.
        </p>

        <div className={styles.chooser}>
          <ol className={`${styles.box} ${styles.decide} ${styles.questions}`}>
            {questions.map((q) => (
              <li key={q.name}>
                <span className={styles.boxTitle}>{q.name}</span>
                <span className={styles.boxText}>{q.text}</span>
              </li>
            ))}
          </ol>

          <div className={styles.connector} aria-hidden="true" />

          <div className={styles.outcomeRow}>
            {outcomes.map((outcome) => (
              <div key={outcome.title} className={styles.pathCol}>
                <Box node={outcome} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Clocks() {
  return (
    <section className={styles.section} aria-labelledby="clocks">
      <div className="container">
        <Heading as="h2" id="clocks">
          Three jobs, three clocks
        </Heading>
        <p className={styles.intro}>
          Migration is not one cutover. Public-key cryptography does three jobs, and each has its own reason to move and
          its own timing, so the handbook keeps them on separate lines. <Link to="/learn/timelines/">Read the Timelines lesson</Link>.
        </p>
        <div className={styles.clockGrid}>
          {clocks.map((c) => (
            <div key={c.job} className={styles.clock}>
              <Heading as="h3" className={styles.clockName}>
                {c.job}
              </Heading>
              <p className={styles.clockJob}>{c.clock} clock</p>
              <dl className={styles.clockFacts}>
                <dt>Starts</dt>
                <dd>{c.starts}</dd>
                <dt>Measured by</dt>
                <dd>{c.measured}</dd>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section className={styles.section} aria-labelledby="evidence">
      <div className="container">
        <Heading as="h2" id="evidence">
          Records you can check
        </Heading>
        <p className={styles.intro}>
          The register holds one row per system and job, so the answer to &ldquo;have we migrated?&rdquo; is a row
          someone can check. This is part of the register kept by the fictional manufacturer in the{' '}
          <Link to="/templates/examples/protect-this-first/">Protect this first</Link> worked example.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.record}>
            <caption>Register, as reviewed on 10 November 2026 (fictional)</caption>
            <thead>
              <tr>
                <th scope="col">System</th>
                <th scope="col">Job</th>
                <th scope="col">Why it is here</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {registerRows.map((row) => (
                <tr key={row.system}>
                  <th scope="row" data-label="System">
                    {row.system}
                  </th>
                  <td data-label="Job">{row.job}</td>
                  <td data-label="Why it is here">{row.why}</td>
                  <td data-label="Status">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.after}>
          See <Link to="/templates/records/">all five migration records</Link>, or the baseline filled in for a small
          agency in <Link to="/templates/examples/stay-on-supplier-updates/">Stay on supplier updates</Link>.
        </p>
      </div>
    </section>
  );
}

function Reference() {
  return (
    <section className={`${styles.section} ${styles.last}`} aria-labelledby="reference">
      <div className="container">
        <Heading as="h2" id="reference">
          Background and reference
        </Heading>
        <div className={styles.refGrid}>
          {reference.map((node) => (
            <Box key={node.to} node={node} className={styles.ref} />
          ))}
        </div>
      </div>
    </section>
  );
}

const homeTitle = 'PQC Handbook: planning a post-quantum cryptography migration';
const homeDescription =
  'Practical, source-backed guidance for planning, prioritising and evidencing a post-quantum cryptography migration without specialist cryptography staff.';

// Names the site for search engines (schema.org WebSite).
const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PQC Handbook',
  url: 'https://pqchandbook.com/',
  description: homeDescription,
  inLanguage: 'en-GB',
};

export default function Home(): ReactNode {
  return (
    <Layout description={homeDescription}>
      <Head>
        <title>{homeTitle}</title>
        <meta property="og:title" content={homeTitle} />
        <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
      </Head>
      <Hero />
      <main>
        <StartHere />
        <Clocks />
        <Evidence />
        <Reference />
      </main>
    </Layout>
  );
}
