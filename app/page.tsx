import Link from "next/link";
import ContactForm from "./contact-form";
import IntroLoader from "./intro-loader";
import { DispatchVisual, NBAVisual, PipelineVisual, ProTechVisual } from "./project-visuals";

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
          <p className="kicker">Executive summary</p>
          <h1>Applied Statistics graduate with a natural instinct for finding the signal in the noise.</h1>
          <p className="hero-summary">Curious, disciplined, and self-starting, I bring practical experience across sports technology, transportation operations, and financial analysis. I learn quickly, take ownership, and care about turning complex information into decisions that help people act with confidence.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/projects">See my projects</Link>
            <span className="secondary-button muted-button" aria-disabled="true">Résumé coming soon</span>
            <a className="linkedin-button" href="https://www.linkedin.com/in/yuvrajriyar" target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a>
          </div>
        </div>

        <aside className="identity-panel" aria-label="Yuvraj Riyar profile">
          <div className="portrait-frame"><img src="/yuvraj-graduation.jpeg" alt="Yuvraj Riyar at UC Davis graduation" /><div className="portrait-index">YUVRAJ S. RIYAR</div></div>
        </aside>
      </section>

      <div className="signal-strip" aria-label="Personal qualities"><span>Self-starter</span><span>Impact-driven</span><span>Curious</span><span>Ambitious</span></div>

      <section id="work" className="section-shell section-block home-projects">
        <div className="section-heading">
          <p className="section-index">01 / Portfolio</p>
          <h2>Work I&apos;m proud to stand behind.</h2>
          <p>My favourite projects begin with a messy, practical problem and end with something a coach, dispatcher, or analyst can actually use.</p>
        </div>
        <div className="featured-project-grid">
          <article className="featured-project-card">
            <ProTechVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">UC Davis Football</p><h3>ProTech</h3><p>An athlete-performance platform created with Aggie Sports Analytics for football staff.</p><a href="https://github.com/AggieSportsAnalytics/ProTech" target="_blank" rel="noreferrer">View repository <ArrowUpRight /></a></div>
          </article>
          <article className="featured-project-card">
            <NBAVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Statistical modelling</p><h3>NBA Injury Risk Analysis</h3><p>A reproducible R analysis exploring injury risk through player characteristics, workload, and injury history.</p><a href="https://github.com/yuvrajriyar/STA-141A-NBA-INJURIES" target="_blank" rel="noreferrer">View repository <ArrowUpRight /></a></div>
          </article>
          <article className="featured-project-card">
            <DispatchVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Soaring Roadlines Inc.</p><h3>Dispatch Command Centre</h3><p>A practical system for load visibility, backload priorities, and daily fleet decisions.</p><span>Private operational system</span></div>
          </article>
          <article className="featured-project-card">
            <PipelineVisual />
            <div className="featured-project-copy"><p className="project-eyebrow">Next flagship build</p><h3>Financial Data Pipeline</h3><p>An end-to-end solo project in development around reconciliation, SQL transformation, data-quality testing, and Power BI reporting.</p><span>In development</span></div>
          </article>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-shell section-block">
          <div className="skills-heading"><div><p className="section-index">02 / Skills</p><h2>Technical range, applied with purpose.</h2></div><p>Tools I&apos;ve used across analytics, engineering, visualisation, product work, and professional communication.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => <article className="skill-card" key={skill.name}><div className="skill-mark">{skill.mark}</div><div><h3>{skill.name}</h3><p>{skill.detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-shell section-block">
          <div className="section-heading compact-heading"><p className="section-index">03 / Experience</p><h2>Technical work, grounded in operations.</h2></div>
          <div className="experience-grid">
            <div className="timeline">
              <article><p className="timeline-date">2025 · 2026</p><h3>Aggie Sports Analytics</h3><p className="timeline-role">Project Lead · Data &amp; Front-End Contributor</p><p>Coordinated a multidisciplinary team and helped deliver athlete-performance tooling for UC Davis Football staff.</p></article>
              <article><p className="timeline-date">Operations</p><h3>Soaring Roadlines Inc.</h3><p className="timeline-role">Operations &amp; Data Analytics</p><p>Supported load tracking, cost and margin analysis, reconciliation, and dispatch decisions for my family&apos;s transportation business.</p></article>
              <article><p className="timeline-date">Class of 2026</p><h3>University of California, Davis</h3><p className="timeline-role">B.S. Applied Statistics · Minor in Managerial Economics</p><p>Built a foundation in statistical modelling, forecasting, econometrics, data analysis, and quantitative decision-making.</p></article>
            </div>
            <div className="personal-note-card"><p className="capability-label">A little beyond the résumé</p><p>I&apos;m drawn to work that combines technical depth with real-world judgement. Sports, transportation, financial systems, and business operations all interest me for the same reason: the numbers only matter when they help someone act.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="about-label"><p className="section-index">04 / About</p></div>
        <div className="about-copy">
          <p className="about-lead">I was an analyst before I knew it was a career.</p>
          <div className="about-story">
            <p>I have always been the person who researches the options, asks one more question, and turns over every rock before making a decision, whether the stakes are small or substantial. I first recognised that instinct as a real passion in high school, when I discovered that data could turn curiosity into a practical way of understanding people, systems, and outcomes.</p>
            <p>That instinct led me to UC Davis, where I studied Applied Statistics and Managerial Economics, and then into work spanning athlete performance, transportation operations, and financial analysis. I enjoy getting close to how a system actually works, finding what others may have overlooked, and translating the evidence into a clearer next move. I bring discipline, ownership, and a willingness to learn quickly, especially when the work carries real responsibility.</p>
            <p>Outside work and school, sport is a constant. I am a devoted Raiders and Warriors fan, and I enjoy weightlifting, basketball, golf, and soccer. I also love to cook and run a small Neapolitan pizza pop-up for fun. Travelling through more than ten countries has made me more independent, adaptable, and comfortable in unfamiliar environments. Across all of it, the thread is the same: I enjoy learning the details, improving the process, and taking things seriously without losing the human side.</p>
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
