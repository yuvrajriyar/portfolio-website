import type { ReactNode } from "react";
import Link from "next/link";

export function ExternalArrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

export function CaseStudyHeader() {
  return (
    <header className="subpage-header section-shell">
      <Link className="classic-mark" href="/" aria-label="Return home"><span>Y</span><span>R</span></Link>
      <nav><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/references">References</Link></nav>
      <a className="header-contact" href="mailto:ysriyar30@gmail.com">Contact</a>
    </header>
  );
}

type Fact = { label: string; value: string };

export function CaseStudyHero({
  status,
  eyebrow,
  title,
  deck,
  facts,
  repository,
  children,
}: {
  status: string;
  eyebrow: string;
  title: string;
  deck: string;
  facts: Fact[];
  repository?: string;
  children: ReactNode;
}) {
  return (
    <section className="estate-hero section-shell project-case-hero">
      <div className="estate-breadcrumb"><Link href="/projects">Portfolio</Link><span>/</span><strong>{title}</strong></div>
      <div className="estate-hero-grid">
        <div>
          <div className="estate-status"><span /> {status}</div>
          <p className="section-index">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="estate-deck">{deck}</p>
          <div className="estate-actions">
            {repository ? <a className="primary-button" href={repository} target="_blank" rel="noreferrer">View repository <ExternalArrow /></a> : null}
            <a className={repository ? "secondary-button" : "primary-button"} href="#project-story">Read the case study</a>
          </div>
        </div>
        <div className="estate-hero-facts">
          {facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </div>
      </div>
      <div className="project-case-hero-visual">{children}</div>
    </section>
  );
}

export function CaseStudyFooter({ repository, repositoryLabel = "Open repository" }: { repository?: string; repositoryLabel?: string }) {
  return (
    <>
      <section className="estate-footer-cta section-shell">
        <div><p className="section-index">Continue exploring</p><h2>{repository ? "See the implementation." : "A private tool built for real operations."}</h2><p>{repository ? "Review the source, documentation, and technical implementation on GitHub." : "The operational data remains private, but the case study documents the problem, workflow, and measurable impact."}</p></div>
        {repository ? <a className="primary-button" href={repository} target="_blank" rel="noreferrer">{repositoryLabel} <ExternalArrow /></a> : <Link className="primary-button" href="/projects">View other projects</Link>}
      </section>
      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/projects">Return to projects</Link></footer>
    </>
  );
}
