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

const skillGroups = [
  { label: "Working with data", items: "SQL, Python, and R are the core of my analytical work, supported by PostgreSQL, SQLite, and Excel when the problem calls for structured data, operational detail, or financial context." },
  { label: "Finding the answer", items: "I use regression, forecasting, time series, statistical testing, machine learning, and visual analysis to move from a broad question to a conclusion that can be explained and challenged." },
  { label: "Building the system", items: "My recent work has moved further into ETL and ELT workflows, pipelines, transformation, modelling, validation, reconciliation, and the quality controls that keep analysis trustworthy." },
  { label: "Making it usable", items: "Power BI, Tableau, Alteryx, Streamlit, React, and Supabase help me turn the underlying work into dashboards, applications, and reporting that people can actually use." },
  { label: "AI in the workflow", items: "I use Claude, ChatGPT, Codex, and Cursor to accelerate research, coding, documentation, and repetitive work, then validate the logic and final output myself." },
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
          <article className="featured-project-card estateflow-card">
            <EstateFlowVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">End-to-end data pipeline</p><h3>EstateFlow</h3><p>A housing-market pipeline transforming Zillow home-value and rent data into validated ZIP-month investment metrics.</p><Link href="/projects/estateflow">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card">
            <ProTechVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">UC Davis Football</p><h3>ProTech</h3><p>An athlete-performance platform created with Aggie Sports Analytics for football staff.</p><Link href="/projects/protech">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card">
            <DispatchVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Soaring Eagle Inc.</p><h3>Dispatch Command Centre</h3><p>A practical system for load visibility, backload priorities, and daily fleet decisions.</p><Link href="/projects/dispatch-command-centre">View case study <ArrowUpRight /></Link></div>
          </article>
          <article className="featured-project-card">
            <NBAVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Statistical modelling</p><h3>NBA Injury Risk Analysis</h3><p>A reproducible R analysis exploring injury risk through player characteristics, workload, and injury history.</p><Link href="/projects/nba-injury-risk">View case study <ArrowUpRight /></Link></div>
          </article>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-shell section-block">
          <div className="skills-heading"><div><p className="section-index">02 / Skills</p><h2>The tools behind the work.</h2></div><p>A working toolkit built across analytics, engineering, visualisation, product development, and communication.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => <article className="skill-card" key={skill.name}><div className="skill-mark">{skill.mark}</div><div><h3>{skill.name}</h3><p>{skill.detail}</p></div></article>)}
          </div>
          <div className="skill-depth" aria-label="Detailed technical capabilities">
            {skillGroups.map((group) => <article key={group.label}><h3>{group.label}</h3><p>{group.items}</p></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-shell section-block">
          <div className="section-heading compact-heading"><p className="section-index">03 / Experience</p><h2>Where the work comes from.</h2></div>
          <div className="experience-grid">
            <div className="timeline">
              <article>
                <p className="timeline-date">Jun 2026 · Present</p><h3>Soaring Eagle Inc.</h3><p className="timeline-role">Operations &amp; Financial Analyst · Fresno, California</p>
                <div className="experience-story"><p>Working inside a family transportation business has made analytics very concrete. A late follow-up can leave a truck idle, an incomplete record can distort a margin, and a useful answer needs to fit the pace of the operation.</p><p>I built a dispatch application in Python and Streamlit that brings ETAs, empty dates, and backhaul priorities for roughly 20 trucks into one view. It cut the routine tracking process by about half and made the morning and afternoon reviews far more focused. Alongside it, I analyse revenue, gross profit, fuel, and transportation costs in Excel and keep the underlying freight records current through reconciliation and broker follow-ups.</p></div>
                <div className="experience-evidence"><span><strong>≈50%</strong> less routine tracking time</span><span><strong>20</strong> trucks in one operating view</span><span><strong>2× daily</strong> review rhythm</span></div>
              </article>
              <article>
                <p className="timeline-date">Sep 2025 · Jun 2026</p><h3>Aggie Sports Analytics</h3><p className="timeline-role">Data Analyst · Davis, California</p>
                <div className="experience-story"><p>ProTech was my first chance to help take an analytical product from an open-ended stakeholder problem to something used inside a real programme. I led a six-person team working with UC Davis Football and helped shape the priorities, development rhythm, and final delivery.</p><p>My contribution crossed product and technical work: React visualisations, Supabase uploads, multi-year record validation, athlete profiles, and player- and position-level views. Presenting the platform to coaches reinforced an important lesson for me: the work is only complete when the person making the decision can understand and use it.</p></div>
                <div className="experience-evidence"><span><strong>6</strong> cross-functional contributors</span><span><strong>Multi-year</strong> athlete records</span><span><strong>Delivered</strong> to football staff</span></div>
              </article>
              <article>
                <p className="timeline-date">Sep 2022 · Jun 2026</p><h3>University of California, Davis</h3><p className="timeline-role">B.S. Statistics (Applied) · Minor in Managerial Economics</p>
                <div className="experience-story"><p>Statistics gave structure to the way I already approached decisions, while managerial economics made me think more carefully about the business behind the numbers. My coursework covered regression and statistical modelling, time series and forecasting, statistical data science, econometrics, operations research, and financial economics.</p></div>
              </article>
            </div>
            <div className="experience-aside">
              <div className="personal-note-card"><p className="capability-label">How I work</p><p>I get close to how a business or system actually operates before deciding what to build. The numbers matter, but so do the people using them, the judgement behind the decision, and whether the answer holds up in practice.</p></div>
              <div className="personal-note-card"><p className="capability-label">Current direction</p><p>I am building further depth in ETL workflows, data pipelines, transformation, validation, and end-to-end analytics systems while continuing to apply statistics and business judgement to practical decisions.</p></div>
            </div>
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
