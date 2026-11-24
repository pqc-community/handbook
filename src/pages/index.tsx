import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Node = {title: string; to: string; text: string};

// The two ways in. Each card shows what is inside it, so a first-time reader can choose.
const firstLessons = [
  {title: 'Public-key cryptography', to: '/learn/public-key-cryptography/'},
  {title: 'Signatures and trust', to: '/learn/signatures-and-trust/'},
  {title: 'Quantum threat', to: '/learn/quantum-threat/'},
];

// Why people arrive, each with where to go. Keep it to six lines; the questions and
// outcomes themselves live only on Which plan you need.
const situations: {when: string; then: string; to: string; link: string}[] = [
  {
    when: 'Someone asked whether you are “ready for quantum”, or whether you need to do anything',
    then: 'Answer the four questions. Many organizations need only the core actions.',
    to: '/plan/',
    link: 'Which plan you need',
  },
  {
    when: 'Your board wants a plan',
    then: 'Answer the four questions to find which plan you need, and give the board the register; a full program also reports with the progress report.',
    to: '/plan/',
    link: 'Which plan you need',
  },
  {
    when: 'Customers are sending post-quantum questionnaires',
    then: 'Answer the four questions, then start your register and answer from it with the dates you can stand behind and what is still unknown.',
    to: '/plan/program/suppliers/#6-answer-your-own-customers-consistently',
    link: 'Answer your customers',
  },
  {
    when: 'You run critical national infrastructure, or a service whose security a sector regulator oversees',
    then: "Bring in specialist advice and speak to your sector regulator; a professional body, a data protection authority, or a governance-only regulator does not count. Take the program's first moves meanwhile; they only gather facts.",
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
    then: 'Each authority’s dates are listed with the audience it names.',
    to: '/plan/#which-dates-apply-to-you',
    link: 'Which dates apply to you',
  },
];

// Reference sections, each naming a few of the pages inside so a returning reader can
// see where to go, then News and analysis for what has changed since their last visit.
// The news card names no dates or posts, so it cannot go stale when the blog is quiet.
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
  {
    title: 'News and analysis',
    to: '/news/',
    text: 'Dated authority updates, standards, and deployment milestones, each linked to the handbook pages it affects.',
  },
];

function Box({node, className}: {node: Node; className?: string}) {
  return (
    <Link className={`${styles.box} ${className ?? ''}`} to={node.to}>
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
          Every organization needs a post-quantum migration plan.
        </Heading>
        <p className={styles.heroLead}>
          A future quantum computer could break the public-key cryptography in use today. For many organizations,
          suppliers make the changes and the plan is a short list of core actions. Some also need a migration
          program. This handbook helps you work out which plan you need.
        </p>
        <p className={styles.heroLimit}>The guidance is vendor-neutral and is not a formal risk assessment.</p>
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
            <p>Ten short lessons, with no mathematics assumed. Start with:</p>
            <ol className={styles.steps}>
              {firstLessons.map((lesson) => (
                <li key={lesson.to}>
                  <Link to={lesson.to}>{lesson.title}</Link>
                </li>
              ))}
            </ol>
            <p>
              Then what post-quantum means, the new algorithms, hybrid cryptography, standardization, post-quantum in
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
                <strong>Answer four questions</strong> about your data, devices, signatures, and systems.
              </li>
              <li>
                <strong>Follow the core actions</strong> for everything you buy in: in a small organization, a day to
                set up and an hour or two at each review.
              </li>
              <li>
                <strong>Add a program</strong> if a question applied: small for one or two systems, full for
                devices with fixed keys or a larger or regulated estate.
              </li>
            </ol>
            <p className={styles.choiceExamples}>
              Worked examples: <Link to="/templates/examples/stay-on-supplier-updates/">a small agency following the core
              actions</Link> and <Link to="/templates/examples/protect-this-first/">a manufacturer running a full
              program</Link>.
            </p>
            <p className={styles.choiceNext}>
              <Link to="/plan/">Answer the four questions</Link>
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
              <p className={styles.situationWhen}>{s.when}.</p>
              <p className={styles.situationThen}>
                {s.then} <Link to={s.to}>{s.link}</Link>
              </p>
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
          Reference and news
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
  'Practical, source-backed guidance for planning, prioritizing and evidencing a post-quantum cryptography migration without specialist cryptography staff.';

// Names the site for search engines (schema.org WebSite).
const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PQC Handbook',
  url: 'https://pqchandbook.com/',
  description: homeDescription,
  inLanguage: 'en-US',
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
