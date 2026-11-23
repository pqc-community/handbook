import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Node = {label?: string; title: string; to: string; text: string};

// The two ways in. Each card shows what is inside it, so a first-time reader can choose.
const firstLessons = [
  {title: 'Public-key cryptography', to: '/learn/public-key-cryptography/'},
  {title: 'Signatures and trust', to: '/learn/signatures-and-trust/'},
  {title: 'Quantum threat', to: '/learn/quantum-threat/'},
];

const questionNames = [
  'data that must stay secret for years',
  'devices with a fixed key',
  'signatures others rely on',
  'systems you build or configure',
];

// Why people arrive, each with where to go. Keep it to six lines; the questions and
// outcomes themselves live only on Which plan you need.
const situations: {when: string; then: string; to: string; link: string}[] = [
  {
    when: 'Someone asked whether you are “ready for quantum”, or whether you need to do anything',
    then: 'Answer the four questions. Most organisations need only the core actions.',
    to: '/plan/',
    link: 'Which plan you need',
  },
  {
    when: 'Your board wants a plan',
    then: 'Answer the four questions, then report on the plan with the progress report.',
    to: '/templates/records/progress-report/',
    link: 'Progress report',
  },
  {
    when: 'Customers are sending post-quantum questionnaires',
    then: 'Start your register and answer from it: the dates you can stand behind, and what is still unknown.',
    to: '/templates/records/register/',
    link: 'Register',
  },
  {
    when: 'You run critical national infrastructure or a regulated service',
    then: "Bring in specialist advice and speak to your sector regulator. Take the programme's first moves meanwhile; they only gather facts.",
    to: '/plan/#your-plan',
    link: 'Your plan',
  },
  {
    when: 'You need the card for a technology, such as VPN, TLS, or SSH',
    then: 'Each card gives the job it does, its post-quantum status, and what to ask.',
    to: '/technology-options/',
    link: 'Technology options',
  },
  {
    when: 'You need the dates that apply to you',
    then: 'Each authority’s dates, with the audience it names.',
    to: '/plan/#which-dates-apply-to-you',
    link: 'Which dates apply to you',
  },
];

// Reference sections, each naming a few of the pages inside so a returning reader can
// see where to go.
const reference: Node[] = [
  {
    title: 'Technology options',
    to: '/technology-options/',
    text: 'A card per technology: TLS, VPN and IPsec, SSH, PKI, code signing, firmware and secure boot, and more.',
  },
  {
    title: 'Standards',
    to: '/standards/',
    text: 'FIPS 203, 204, and 205, government requirements, and migration guides such as the UK NCSC timelines.',
  },
  {
    title: 'Templates',
    to: '/templates/',
    text: 'The register and the other migration records, two worked examples, and the glossary.',
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
        <p className={styles.heroLabel}>{siteConfig.title}</p>
        <Heading as="h1" className={styles.heroTitle}>
          Every organisation needs a post-quantum migration plan.
        </Heading>
        <p className={styles.heroLead}>
          A future quantum computer could break the public-key cryptography that protects connections and proves
          software is genuine, and data recorded now could be decrypted later. For most organisations, suppliers will
          make the changes. The work is to ask them the right questions, keep the records, and recognise the systems
          that need more. This handbook explains how, for teams without specialist cryptography staff.
        </p>
        <p className={styles.heroLimit}>
          Vendor-neutral and based on published guidance. It is not a formal risk assessment. Operators of critical
          national infrastructure and regulated services should take specialist advice and speak to their sector
          regulator.
        </p>
      </div>
    </header>
  );
}

function Choices() {
  return (
    <section className={`${styles.section} ${styles.choicesSection}`} aria-label="Two ways in">
      <div className="container">
        <div className={styles.choices}>
          <div className={styles.choice}>
            <Heading as="h2" className={styles.choiceTitle}>
              <Link to="/learn/">Learn the basics</Link>
            </Heading>
            <p>Ten short lessons. No mathematics assumed. Start with:</p>
            <ol className={styles.steps}>
              {firstLessons.map((lesson) => (
                <li key={lesson.to}>
                  <Link to={lesson.to}>{lesson.title}</Link>
                </li>
              ))}
            </ol>
            <p>
              Then what post-quantum means, the new algorithms, hybrid cryptography, standardisation, post-quantum in
              real systems, timelines, and crypto-agility. Optional explainers go deeper on topics such as TLS, keys,
              and hash-based signatures.
            </p>
            <p className={styles.choiceNext}>
              <Link to="/learn/public-key-cryptography/">Start the first lesson</Link>
            </p>
          </div>

          <div className={styles.choice}>
            <Heading as="h2" className={styles.choiceTitle}>
              <Link to="/plan/">Plan your migration</Link>
            </Heading>
            <p>Three steps:</p>
            <ol className={styles.steps}>
              <li>
                <strong>Answer four questions</strong>: {questionNames.join('; ')}.
              </li>
              <li>
                <strong>Follow the core actions</strong>: seven actions for everything you buy in. In a small
                organisation, about a day to set up, then an hour or two at each review.
              </li>
              <li>
                <strong>Add a programme if a question applied</strong>: small, for one or two systems you run
                yourself, or full, for devices with a fixed key or a larger or regulated estate. A full programme
                has a named sponsor and lead, a one-page charter, and a progress report at each review.
              </li>
            </ol>
            <p className={styles.choiceNext}>
              <Link to="/plan/">Answer the four questions</Link>
            </p>
            <p className={styles.choiceExamples}>
              Worked examples: <Link to="/templates/examples/stay-on-supplier-updates/">a small agency under the core
              actions</Link> and <Link to="/templates/examples/protect-this-first/">a manufacturer running a full
              programme</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Situations() {
  return (
    <section className={styles.section} aria-labelledby="why-here">
      <div className="container">
        <Heading as="h2" id="why-here">
          Why you might be here
        </Heading>
        <ul className={styles.situations}>
          {situations.map((s) => (
            <li key={s.when}>
              <span className={styles.situationWhen}>{s.when}</span>
              <span className={styles.situationThen}>
                {s.then} <Link to={s.to}>{s.link}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reference() {
  return (
    <section className={`${styles.section} ${styles.last}`} aria-labelledby="reference">
      <div className="container">
        <Heading as="h2" id="reference">
          Reference
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
        <Choices />
        <Situations />
        <Reference />
      </main>
    </Layout>
  );
}
