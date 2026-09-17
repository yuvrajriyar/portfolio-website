import Link from "next/link";
import ContactForm from "./contact-form";
import IntroLoader from "./intro-loader";
import { DispatchVisual, EstateFlowVisual, NBAVisual, ProTechVisual } from "./project-visuals";

const skills = [
  { mark: "SQL", name: "SQL", detail: "Queries & analysis" },
  { mark: "Py", name: "Python", detail: "Data & automation" },
  { mark: "R", name: "R", detail: "Statistics & modelling" },
  { mark: "BI", name: "Power BI", detail: "Business intelligence" },
  { mark: "XL", name: "Excel", detail: "Financial analysis" },
  { mark: "Ay", name: "Alteryx", detail: "Data workflows" },
  { mark: "Rx", name: "React", detail: "Analytical products" },
  { mark: "DB", name: "PostgreSQL", detail: "Relational data" },
  { mark: "Tb", name: "Tableau", detail: "Data visualisation" },
  { mark: "Sb", name: "Supabase", detail: "Data & storage" },
  { mark: "Git", name: "Git & GitHub", detail: "Version control" },
  { mark: "Fg", name: "Figma", detail: "Interface design" },
  { mark: "Cv", name: "Canva", detail: "Visual communication" },
  { mark: "Mg", name: "MongoDB", detail: "NoSQL data" },
  { mark: "M", name: "MATLAB", detail: "Numerical computing" },
  { mark: "PP", name: "PowerPoint", detail: "Presentation design" },
];

function ArrowUpRight() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <header className="site-header">
        <a className="classic-mark" href="#top" aria-label="Return to the top"><span>Y</span><span>R</span></a>
        <nav aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <Link href="/references">References</Link>
        </nav>
        <a className="header-contact" href="mailto:ysriyar30@gmail.com">Contact <ArrowUpRight /></a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" />California · Open to opportunities</div>
          <p className="kicker">Introduction</p>
          <h1>I&apos;m Yuvraj Riyar.</h1>
          <p className="hero-reflection">Long before I studied statistics, I was already the person comparing every option, questioning assumptions, and researching a decision until it made sense.</p>
          <p className="hero-summary">I&apos;m a recent UC Davis graduate with a B.S. in Statistics (Applied) and a minor in Managerial Economics. My background combines analytics, statistics, and business through work in sports technology, transportation operations, financial analysis, and end-to-end data systems.</p>
          <div className="hero-details" aria-label="Professional background">
            <div><span>Education</span><strong>UC Davis · Statistics (Applied)</strong></div>
            <div><span>Focus</span><strong>Data, business &amp; operations</strong></div>
            <div><span>Approach</span><strong>Curious, thorough &amp; practical</strong></div>
          </div>
          <div className="hero-actions">
            <Link className="primary-button" href="/projects">See my projects</Link>
            <a className="secondary-button" href="/Yuvraj-Riyar-Resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
            <a className="linkedin-button" href="https://www.linkedin.com/in/yuvrajriyar" target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a>
            <a className="github-button" href="https://github.com/yuvrajriyar" target="_blank" rel="noreferrer"><span>GH</span> GitHub</a>
          </div>
        </div>

        <aside className="identity-panel" aria-label="Yuvraj Riyar profile">
          <div className="portrait-frame"><img src="/yuvraj-graduation-portrait.jpeg" alt="Yuvraj Riyar at his UC Davis graduation" /><div className="portrait-index">YUVRAJ S. RIYAR</div></div>
        </aside>
      </section>

      <div className="signal-strip" aria-label="Personal qualities"><span>Observant</span><span>Self-starting</span><span>Impact-driven</span><span>People-oriented</span></div>

      <section id="work" className="section-shell section-block home-projects">
        <div className="section-heading">
          <p className="section-index">01 / Portfolio</p>
          <h2>Projects shaped by real questions.</h2>
          <p>Each began with something worth understanding properly, then became a practical system, analysis, or tool someone could use.</p>
        </div>
        <div className="featured-project-grid">
          <article className="featured-project-card">
            <ProTechVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">UC Davis Football</p><h3>ProTech</h3><p>An athlete-performance platform created with Aggie Sports Analytics for football staff.</p><Link href="/projects/protech">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card">
            <NBAVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Statistical modelling</p><h3>NBA Injury Risk Analysis</h3><p>A reproducible R analysis exploring injury risk through player characteristics, workload, and injury history.</p><Link href="/projects/nba-injury-risk">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card">
            <DispatchVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Soaring Roadlines Inc.</p><h3>Dispatch Command Centre</h3><p>A practical system for load visibility, backload priorities, and daily fleet decisions.</p><Link href="/projects/dispatch-command-centre">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card estateflow-card">
            <EstateFlowVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">End-to-end data pipeline</p><h3>EstateFlow</h3><p>A housing-market pipeline transforming Zillow home-value and rent data into validated ZIP-month investment metrics.</p><Link href="/projects/estateflow">View case study <ArrowUpRight /></Link></div>
          </article>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-shell section-block">
          <div className="skills-heading"><div><p className="section-index">02 / Skills</p><h2>The tools behind the work.</h2></div><p>A working toolkit built across analytics, engineering, visualisation, product development, and communication.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => <article className="skill-card" key={skill.name}><div className="skill-mark">{skill.mark}</div><div><h3>{skill.name}</h3><p>{skill.detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-shell section-block">
          <div className="section-heading compact-heading"><p className="section-index">03 / Experience</p><h2>Where the work comes from.</h2></div>
          <div className="experience-grid">
            <div className="timeline">
              <article><p className="timeline-date">2025 · 2026</p><h3>Aggie Sports Analytics</h3><p className="timeline-role">Project Lead · Data &amp; Front-End Contributor</p><p>Coordinated a multidisciplinary team and helped deliver athlete-performance tooling for UC Davis Football staff.</p></article>
              <article><p className="timeline-date">Operations</p><h3>Soaring Roadlines Inc.</h3><p className="timeline-role">Operations &amp; Data Analytics</p><p>Supported load tracking, cost and margin analysis, reconciliation, and dispatch decisions for my family&apos;s transportation business.</p></article>
              <article><p className="timeline-date">Class of 2026</p><h3>University of California, Davis</h3><p className="timeline-role">B.S. Statistics (Applied) · Minor in Managerial Economics</p><p>Built a foundation in statistical modelling, forecasting, econometrics, data analysis, and quantitative decision-making.</p></article>
            </div>
            <div className="personal-note-card"><p className="capability-label">How I think</p><p>I enjoy getting close to how a business or system actually works. The numbers matter, but so do the people using them, the judgement behind the decision, and whether the answer holds up in practice.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="about-label"><p className="section-index">04 / About</p></div>
        <div className="about-copy">
          <p className="about-lead">Analysis was already how I thought.</p>
          <div className="about-story">
            <p>Before I knew analytics was a profession, it was already how I moved through the world. I compared options, looked for patterns, questioned assumptions, and kept researching until a decision made sense. In high school, statistics gave that habit structure and showed me that the way I naturally approached problems could become useful work.</p>
            <p>That realisation took me to UC Davis, where I earned a B.S. in Statistics (Applied) with a minor in Managerial Economics. Since then, I have brought the same approach to athlete performance, transportation operations, housing data, and financial analysis. I like learning how a system works from the inside, noticing what may have been overlooked, and building an answer that remains useful beyond the presentation.</p>
            <p>I am equally shaped by what happens away from a screen. I am competitive about sport, devoted to the Raiders and Warriors, and happiest around good friends and new experiences. I play soccer, lift, follow basketball and golf, and love travelling because unfamiliar places and cultures change how you see your own. At home, that curiosity usually becomes Neapolitan pizza or an espresso I am still trying to perfect. I care about craft, conversation, and enjoying the process as much as the result.</p>
          </div>
          <div className="about-gallery" aria-label="Life outside work and school">
            <figure className="about-gallery-card about-gallery-wide">
              <img src="/asa-soccer-team.jpeg" alt="Yuvraj with the Aggie Sports Analytics soccer team after a match" />
              <figcaption><span>Team</span><strong>ASA soccer, outside the analytics room</strong></figcaption>
            </figure>
            <figure className="about-gallery-card">
              <img src="/neapolitan-pizza.jpeg" alt="A Neapolitan pizza made by Yuvraj at home" />
              <figcaption><span>Craft</span><strong>Neapolitan pizza, made at home</strong></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <div className="contact-intro"><p className="footer-kicker">Contact</p><h2>Let&apos;s start a conversation.</h2><p>I&apos;m open to opportunities, collaborations, and thoughtful introductions.</p><div className="contact-direct"><a href="mailto:ysriyar30@gmail.com">Email</a><a href="tel:+15103424349">Phone</a><a href="https://www.linkedin.com/in/yuvrajriyar" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
          <ContactForm />
        </div>
      </section>

      <footer><div className="footer-bottom section-shell"><span>© 2026 Yuvraj Riyar</span><div><a href="mailto:ysriyar30@gmail.com">Email</a><a href="https://github.com/yuvrajriyar" target="_blank" rel="noreferrer">GitHub</a><Link href="/references">References</Link></div></div></footer>
    </main>
  );
}
