import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Node = {label?: string; title: string; to: string; text: string};

const paths: Node[] = [
  {
    label: 'Short path',
    title: 'Standard, vendor-managed software',
    to: '/routes/vendor-managed-software/',
    text: 'Every asset answers no. Keep supplier updates installed, write post-quantum requirements into purchases and renewals, and review.',
  },
  {
    label: 'Full path',
    title: 'Coordinating a migration across the organisation',
    to: '/routes/organisation-wide/',
    text: 'Any asset answers yes. Run the programme, send each asset to its track, and report to the sponsor.',
  },
];

const tracks: Node[] = [
  {
    label: 'Track',
    title: 'Data that needs to stay confidential for years',
    to: '/routes/long-lived-confidentiality/',
    text: 'Key establishment for long-lived data.',
  },
  {
    label: 'Track',
    title: 'Products or systems that may be hard to change',
    to: '/routes/hard-to-change-systems/',
    text: 'Bespoke systems, signatures others rely on, and verifiers that cannot be updated.',
  },
  {
    label: 'Track',
    title: 'Vendor-managed software',
    to: '/routes/vendor-managed-software/',
    text: 'The commodity assets of a full-path estate.',
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

const decisionRows = [
  {
    asset: 'Product-design archive in supplier-hosted workspace',
    answer: 'A yes: 15 years under the company retention policy',
    path: 'full',
    route: 'Long-lived confidentiality',
  },
  {
    asset: 'Firmware verifier for product sensor',
    answer: 'B yes: boot ROM trust anchor',
    path: 'full',
    route: 'Hard-to-change systems',
  },
  {
    asset: 'Office laptops',
    answer: 'No to all four: supported commodity software',
    path: 'short',
    route: 'Vendor-managed software',
  },
];

const reference: Node[] = [
  {
    title: 'Learn the basics',
    to: '/learn/',
    text: 'Ten short lessons on the cryptography a migration affects. No mathematics assumed.',
  },
  {
    title: 'Standards',
    to: '/standards/',
    text: 'Standards, government requirements, and migration guides, each with its audience and status.',
  },
  {
    title: 'Migration practices',
    to: '/migration-practices/',
    text: 'The repeatable practices in lifecycle order, and the record each produces.',
  },
  {
    title: 'Technology options',
    to: '/technology-options/',
    text: 'One card per technology: the job or jobs it does and its post-quantum status.',
  },
  {
    title: 'Resources',
    to: '/resources/',
    text: 'The nine migration records, both worked examples, and the glossary.',
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

function RouteChooser() {
  return (
    <section className={styles.section} aria-labelledby="choose">
      <div className="container">
        <Heading as="h2" id="choose">
          Find your route
        </Heading>
        <p className={styles.intro}>
          Four questions decide whether a migration is a programme or a supplier matter, asset by asset. Each answer
          leads to a route with its steps, its records, and when to change route.{' '}
          <Link to="/routes/">How the routes fit together</Link>.
        </p>

        <div className={styles.chooser}>
          <Link className={`${styles.box} ${styles.decide}`} to="/migration-practices/diagnose/">
            <span className={styles.boxLabel}>Start here</span>
            <span className={styles.boxTitle}>Decide whether to act</span>
            <span className={styles.boxText}>
              Four questions about long-lived data, devices you cannot update, signing others rely on, and bespoke
              systems.
            </span>
          </Link>

          <div className={styles.connector} aria-hidden="true" />

          <div className={styles.pathRow}>
            <div className={styles.pathCol}>
              <Box node={paths[0]} />
            </div>
            <div className={styles.pathCol}>
              <Box node={paths[1]} />
              <div className={styles.trackGroup}>
                <p className={styles.trackHeading}>The full path sends each asset to a track</p>
                <div className={styles.trackRow}>
                  {tracks.map((track) => (
                    <Box key={track.title} node={track} className={styles.track} />
                  ))}
                </div>
              </div>
            </div>
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
          Not one cutover: three jobs, three clocks
        </Heading>
        <p className={styles.intro}>
          Public-key cryptography does three jobs, and each has its own reason to move and its own timing. The
          handbook keeps them on separate lines. <Link to="/learn/timelines/">Read the Timelines lesson</Link>.
        </p>
        <div className={styles.clockGrid}>
          {clocks.map((c) => (
            <div key={c.job} className={styles.clock}>
              <p className={styles.clockJob}>{c.job}</p>
              <Heading as="h3" className={styles.clockName}>
                {c.clock}
              </Heading>
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
          Evidence, not assertions
        </Heading>
        <p className={styles.intro}>
          Each practice fills in a record, so the answer to &ldquo;have we migrated?&rdquo; is a row someone can
          check. This is part of the decision note kept by the fictional manufacturer in the{' '}
          <Link to="/resources/examples/protect-this-first/">Protect this first</Link> worked example.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.record}>
            <caption>Decision note, as accepted on 13 July 2026 (fictional)</caption>
            <thead>
              <tr>
                <th scope="col">Asset</th>
                <th scope="col">Answer that decided it</th>
                <th scope="col">Path</th>
                <th scope="col">Route</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
                <tr key={row.asset}>
                  <th scope="row" data-label="Asset">
                    {row.asset}
                  </th>
                  <td data-label="Answer that decided it">{row.answer}</td>
                  <td data-label="Path">{row.path}</td>
                  <td data-label="Route">{row.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.after}>
          See <Link to="/resources/records/">all nine migration records</Link>, or the short path filled in for a
          small agency in <Link to="/resources/examples/stay-on-supplier-updates/">Stay on supplier updates</Link>.
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

export default function Home(): ReactNode {
  return (
    <Layout description="Practical, source-backed guidance for organisations planning, prioritising, and evidencing a migration to post-quantum cryptography without specialist cryptography staff.">
      <Hero />
      <main>
        <RouteChooser />
        <Clocks />
        <Evidence />
        <Reference />
      </main>
    </Layout>
  );
}
