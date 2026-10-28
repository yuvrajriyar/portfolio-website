import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyHeader, CaseStudyHero, ExternalArrow } from "../case-study-components";

const site = "https://prism-75v.pages.dev";
export const metadata: Metadata = {
  title: "PRISM | Yuvraj Riyar",
  description: "Building PRISM: a founder-led technology service for local businesses, with a public React website and an interactive discovery tool. Current progress and the first pilot ahead.",
};

const contributions = [
  ["The offer", "A service built around understanding an existing workflow, choosing one useful improvement and developing it with the people who will use it."],
  ["The product", "A React and TypeScript website with a five-step discovery experience, conditional questions, editable review and downloadable briefs."],
  ["The identity", "A prism-led brand, porcelain and graphite palette, restrained blue accents, selective glass optics and custom WebGL graphics."],
  ["The delivery", "Version-controlled source, a production build, discovery-logic tests and DOM interaction checks. Browser and cross-device verification remain part of the next refinement."],
];

export default function PrismPage() {
  return (
    <main className="subpage estate-case-study project-case-study prism-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Founding stage · Public site available"
        eyebrow="PRISM / Modern Professional Services"
        title="PRISM"
        website={site}
        deck="My next step is working directly with business owners: understanding the details of their operation and building technology around the people in it."
        facts={[
          { label: "Role", value: "Founder · Product and development" },
          { label: "Started", value: "October 2026" },
          { label: "Audience", value: "Local and family-owned businesses" },
          { label: "Stack", value: "React · TypeScript · Vite · WebGL" },
        ]}
      ><figure className="prism-product-shot"><Image src="/images/prism-home.jpg" alt="PRISM public homepage with its geometric logo, glass navigation and business-focused introduction" width={1348} height={926} sizes="(max-width: 900px) 100vw, 85vw" /><figcaption>The current public website: PRISM’s own identity, offer and founder-led approach.</figcaption></figure></CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Why I’m building it</p><h2>The work starts with a conversation.</h2></div>
          <div className="estate-narrative"><p>Working inside a family transportation business showed me how much of an operation can depend on scattered records, manual updates and someone remembering to follow up. A well-chosen tool can help, but only if you understand the working day first.</p><p>PRISM is how I’m taking that interest further. I want to work with local owners who know their business well but don’t have an internal technology team. The starting point is their workflow, constraints and priorities. The solution might be an integration, internal application, automation, data system or a better customer experience.</p><p>The relationship matters to me as much as the implementation. I want people to feel comfortable asking questions, giving feedback and knowing who is responsible for the work.</p></div>
          <aside className="estate-principle"><span>Working principle</span><p>Start with one improvement worth making. Use AI when it helps and conventional software when it is the better choice.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / Built so far</p><h2>A working foundation, not just an idea.</h2></div>
        <div className="project-contribution-grid">{contributions.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="project-flow-section"><div className="section-shell">
        <div className="estate-section-heading"><p className="section-index">03 / Opportunity Blueprint</p><h2>From a broad idea to a brief we can discuss.</h2></div>
        <div className="project-flow-grid">
          <article><span>01</span><h3>Understand</h3><p>Describe the business, the current workflow and the outcome you want. Follow-up questions adapt to the goal.</p></article>
          <article><span>02</span><h3>Explore</h3><p>Choose a visual direction, add reference images and record practical constraints.</p></article>
          <article><span>03</span><h3>Review</h3><p>Check the assembled brief, edit answers and revisit earlier steps without losing the session.</p></article>
          <article><span>04</span><h3>Share</h3><p>Export text or JSON to share directly with me. The five-step form stays in browser memory and does not submit an enquiry.</p></article>
        </div>
        <figure className="prism-product-shot prism-blueprint-shot"><Image src="/images/prism-blueprint.jpg" alt="The first step of PRISM’s Opportunity Blueprint, with four selectable business workflow goals and progress indicator" width={1348} height={926} sizes="(max-width: 900px) 100vw, 85vw" /><figcaption>The working discovery interface. Conditional questions lead to an editable brief that can be exported as text or JSON.</figcaption></figure>
        <p className="prism-site-link"><a className="card-link" href={`${site}/#blueprint`} target="_blank" rel="noreferrer">Explore the discovery tool ↗</a></p>
      </div></section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Technical decisions</p><h2>Careful presentation. Clear behaviour.</h2></div>
        <div className="project-feature-list">
          <article><strong>React and TypeScript</strong><p>Separate components for navigation, optical surfaces, graphics and discovery. Typed branching logic keeps the brief-building workflow explicit.</p></article>
          <article><strong>Selective glass</strong><p>Liquid Glass React provides optics in the navigation and secondary hero control. Text-heavy sections use simpler, readable surfaces; reduced-motion and transparency preferences receive simpler treatments.</p></article>
          <article><strong>Custom WebGL prism</strong><p>A lazy-loaded shader creates the brand’s optical centrepiece, with a fallback when graphics are unavailable. It simulates optics within the canvas.</p></article>
          <article><strong>Browser-local discovery</strong><p>Reference images and answers stay in the current browser session. There are no AI calls or server submissions in the Blueprint; refreshing clears the session.</p></article>
          <article><strong>Checks and source control</strong><p>TypeScript and production-build checks, six discovery and graphics logic tests, and DOM checks for branching, validation, editing, exports and navigation. The source is maintained in a private GitHub repository.</p></article>
        </div>
      </section>

      <section className="estate-limitations"><div className="section-shell estate-limitations-grid">
        <div><p className="section-index">05 / Current progress</p><h2>The first real engagement is next.</h2></div>
        <div><p>The public site, visual identity and discovery experience are built. Enquiries currently go through my LinkedIn profile. The first family-business pilot is in planning, with discovery and a focused scope still to agree.</p><p>My dispatch application, ProTech and EstateFlow are prior work that informs PRISM. Their results are not outcomes from PRISM engagements. I’ll add a measured case study once the new pilot has been delivered.</p><p>The next priorities are browser and mobile verification, the pilot itself, and a clear handover and support process. AI-backed consultation, client portals and payments are possible later additions, rather than features currently connected.</p></div>
      </div></section>

      <section className="estate-footer-cta section-shell">
        <div><p className="section-index">See the current product</p><h2>Explore PRISM.</h2><p>Visit the public website and try the Opportunity Blueprint. This case study will grow alongside the work.</p></div>
        <a className="primary-button" href={site} target="_blank" rel="noreferrer">Visit PRISM <ExternalArrow /></a>
      </section>
      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/projects">Return to projects</Link></footer>
    </main>
  );
}
