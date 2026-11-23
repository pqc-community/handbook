import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Node = {label?: string; title: string; to: string; text: string};

const questions = [
  {
    name: 'Data that must stay secret for years',
    text: 'Information that must stay confidential for ten years or more and is protected by public-key methods. Count how long it must stay secret, not how long you keep it; ordinary business records usually fall short.',
  },
  {
    name: 'Devices with a fixed key',
    text: 'Products or devices you make or run that check signatures with a key that cannot change after they ship. Laptops and phones their maker updates do not count.',
  },
  {
    name: 'Signatures others rely on',
    text: 'A certificate authority, public or internal, or code, firmware, or documents you sign that others check.',
  },
  {
    name: 'Systems you build or configure',
    text: 'Software or firmware you build, or cryptography you set up on your own servers, VPNs, or applications.',
  },
];

const outcomes: Node[] = [
  {
    label: 'If none apply',
    title: 'Your plan: the baseline',
    to: '/plan/baseline/',
    text: 'Seven actions on one page, starting with naming an owner and listing what you use. Your suppliers make the changes.',
  },
  {
    label: 'If any applies',
    title: 'Your plan: the baseline and a programme',
    to: '/plan/programme/',
    text: 'The baseline for everything you buy in. Name an owner, then take a first move this week for each question that applied.',
  },
  {
    label: 'If you run critical national infrastructure, a service whose security a sector regulator oversees, or a large estate you build yourself',
    title: 'Your plan: specialist advice and a full programme',
    to: '/plan/#your-plan',
    text: "Bring in specialist advice and speak to your sector regulator. Meanwhile, take the programme's first moves, which only gather facts.",
  },
];

// The two ways in, side by side under the hero.
const choices: Node[] = [
  {
    title: 'Learn the basics',
    to: '/learn/',
    text: 'Short lessons on what the quantum threat is, what changes, and why timelines differ.',
  },
  {
    title: 'Plan your migration',
    to: '/plan/',
    text: 'Four questions give you your plan. For most organisations it is seven actions on one page; for some, a programme as well.',
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
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroLead}>{siteConfig.tagline}.</p>
          <p className={styles.heroNext}>
            Every organisation needs a post-quantum migration plan. For most it is short: suppliers make the changes,
            and you keep a one-page baseline. If you build software, run your own servers, or customers are asking for
            your plans, you need more; critical and regulated operators also need specialist advice.
          </p>
          <p className={styles.heroWhen}>
            Why now: data recorded today could be decrypted later. The UK NCSC&rsquo;s timelines, aimed mainly at
            larger organisations, set an initial plan by 2028 and migration completed by 2035. Other authorities set
            their own.
          </p>
        </div>
        <aside className={styles.heroAside} aria-label="Who this handbook is for">
          <p className={styles.heroAudience}>
            <strong>For</strong> security, engineering, product, procurement, and risk professionals responsible for a
            post-quantum migration without specialist cryptography staff.
          </p>
          <p className={styles.heroLimit}>
            Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke
            estates, critical national infrastructure, or regulated systems.
          </p>
        </aside>
      </div>
    </header>
  );
}

function Choices() {
  return (
    <section className={`${styles.section} ${styles.choicesSection}`} aria-label="Two ways in">
      <div className="container">
        <div className={styles.choices}>
          {choices.map((node) => (
            <Box key={node.to} node={node} className={styles.choice} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhichPlan() {
  return (
    <section className={`${styles.section} ${styles.start}`} aria-labelledby="which-plan">
      <div className="container">
        <div className={styles.chooser}>
          <div>
            <Heading as="h2" id="which-plan">
              Which plan you need
            </Heading>
            <p className={styles.intro}>
              Answer for the organisation as a whole. A question applies if any system you run fits it.{' '}
              <strong>Not sure counts as yes</strong> until someone confirms.
            </p>
            <ol className={styles.questions}>
              {questions.map((q) => (
                <li key={q.name}>
                  <span className={styles.boxTitle}>{q.name}</span>
                  <span className={styles.boxText}>{q.text}</span>
                </li>
              ))}
            </ol>
            <p className={styles.after}>
              <Link to="/plan/">Read the questions in full</Link>, with the dates that apply to you.
            </p>
          </div>

          <div>
            <Heading as="h3" className={styles.outcomeHeading}>
              Your plan
            </Heading>
            <div className={styles.outcomes}>
              {outcomes.map((outcome) => (
                <Box key={outcome.title} node={outcome} className={styles.outcome} />
              ))}
            </div>
            <p className={styles.after}>
              Worked examples: <Link to="/templates/examples/protect-this-first/">a manufacturer&rsquo;s programme</Link>{' '}
              and <Link to="/templates/examples/stay-on-supplier-updates/">a small agency on the baseline</Link>.
            </p>
          </div>
        </div>
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
        <WhichPlan />
        <Reference />
      </main>
    </Layout>
  );
}
