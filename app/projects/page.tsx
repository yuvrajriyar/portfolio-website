import Link from "next/link";
import { DispatchVisual, NBAVisual, PipelineVisual, ProTechVisual } from "../project-visuals";

const projects = [
  {
    eyebrow: "Athlete performance",
    title: "ProTech",
    description: "A full-stack athlete performance platform built with Aggie Sports Analytics for UC Davis Football staff. My work covered project coordination, data visualisation, Supabase workflows, validation, and front-end features.",
    stack: ["React", "Supabase", "Recharts", "Data validation"],
    href: "https://github.com/AggieSportsAnalytics/ProTech",
    visual: <ProTechVisual />,
  },
  {
    eyebrow: "Statistical modelling",
    title: "NBA Injury Risk Analysis",
    description: "A team academic analysis examining NBA injury risk through player characteristics, workload, and injury-history data, with reproducible modelling and documentation in R.",
    stack: ["R", "Statistics", "Data cleaning", "Visualisation"],
    href: "https://github.com/yuvrajriyar/STA-141A-NBA-INJURIES",
    visual: <NBAVisual />,
  },
  {
    eyebrow: "Operations analytics · Soaring Roadlines Inc.",
    title: "Dispatch Command Centre",
    description: "A practical dispatch tool for tracking active loads across a 20-truck fleet, estimating empty dates, prioritising backloads, and making twice-daily planning easier.",
    stack: ["Python", "Streamlit", "SQLite", "Pandas"],
    visual: <DispatchVisual />,
  },
  {
    eyebrow: "Next flagship build",
    title: "Financial Data Pipeline",
    description: "An end-to-end solo project in development around financial reconciliation, data-quality testing, SQL transformation, and Power BI reporting.",
    stack: ["SQL", "Python", "Power BI", "Data quality"],
    visual: <PipelineVisual />,
  },
];

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <header className="subpage-header section-shell">
        <Link className="classic-mark" href="/" aria-label="Return home"><span>Y</span><span>R</span></Link>
        <nav><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/references">References</Link></nav>
        <a className="header-contact" href="mailto:ysriyar30@gmail.com">Contact</a>
      </header>
      <section className="subpage-intro section-shell">
        <p className="section-index">Portfolio</p>
        <h1>A closer look at what I&apos;ve built.</h1>
        <p>Each project here reflects a different part of how I work: understanding the real problem, organising the data, building the solution, and making the result useful to someone else.</p>
      </section>
      <section className="project-gallery section-shell">
        {projects.map((project, index) => (
          <article className="gallery-card" key={project.title}>
            {project.visual}
            <div className="gallery-card-copy">
              <div className="gallery-card-meta"><span>0{index + 1}</span><p>{project.eyebrow}</p></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              {project.href ? <a className="card-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a> : <span className="card-status">{project.title.includes("Pipeline") ? "In development" : "Private operational system"}</span>}
            </div>
          </article>
        ))}
      </section>
      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/">Return home</Link></footer>
    </main>
  );
}
