import type { Metadata } from "next";
import ProTechCarousel from "../../protech-carousel";
import { CaseStudyFooter, CaseStudyHeader, CaseStudyHero } from "../case-study-components";

export const metadata: Metadata = {
  title: "ProTech Case Study | Yuvraj Riyar",
  description: "How a six-person Aggie Sports Analytics team built an athlete-performance platform for UC Davis Football staff.",
};

const contributions = [
  ["Project leadership", "Coordinated a six-person cross-functional team, priorities, stakeholder requirements, and development workflows."],
  ["Data systems", "Contributed Supabase uploads, storage workflows, record validation, and checks across multi-year athlete data."],
  ["Visual analytics", "Built React charts, spider profiles, force-production views, and year-over-year athlete comparisons."],
  ["Product delivery", "Helped translate technical outputs into player- and position-level insights for coaches and strength staff."],
];

export default function ProTechPage() {
  return (
    <main className="subpage estate-case-study project-case-study protech-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Delivered to UC Davis Football"
        eyebrow="Athlete performance platform"
        title="ProTech"
        deck="A centralised performance platform designed to help football staff explore multi-year athlete development without relying on fragmented spreadsheets."
        facts={[
          { label: "Role", value: "Project lead · Data and front end" },
          { label: "Team", value: "Six contributors" },
          { label: "Users", value: "Coaches and strength staff" },
          { label: "Stack", value: "React · Supabase · Chart.js" },
        ]}
        repository="https://github.com/AggieSportsAnalytics/ProTech"
      >
        <ProTechCarousel />
      </CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Context</p><h2>Performance data existed. A usable system did not.</h2></div>
          <div className="estate-narrative"><p>UC Davis Football staff worked across roster, strength, ForcePlate, NordBord, speed, and body-composition records collected over multiple seasons. The challenge was not simply drawing charts. It was creating a dependable product that made those records easier to navigate and compare.</p><p>ProTech brought the information into one athlete-focused experience, giving staff a clearer way to review individual development, compare positions, and recognise changes over time.</p></div>
          <aside className="estate-principle"><span>Product principle</span><p>Make complex performance data fast enough to use inside a real coaching workflow.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / My contribution</p><h2>Leadership, data quality, and product work in one role.</h2></div>
        <div className="project-contribution-grid">{contributions.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="project-flow-section">
        <div className="section-shell">
          <div className="estate-section-heading"><p className="section-index">03 / System</p><h2>From raw testing records to an athlete profile.</h2></div>
          <div className="project-flow-grid">
            <article><span>01</span><h3>Collect</h3><p>Roster, strength, ForcePlate, NordBord, speed, jump, and body-composition records.</p></article>
            <article><span>02</span><h3>Validate</h3><p>Check uploads, field consistency, player matching, and multi-year record integrity.</p></article>
            <article><span>03</span><h3>Visualise</h3><p>Convert measurements into charts, profiles, comparisons, and position-level views.</p></article>
            <article><span>04</span><h3>Use</h3><p>Give staff a central place to review athlete development and support conversations.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Features</p><h2>Visuals built around the questions staff actually ask.</h2></div>
        <div className="project-feature-list">
          <article><strong>Athlete profiles</strong><p>Centralised performance history with roster context and images.</p></article>
          <article><strong>Spider charts</strong><p>Multi-metric profiles for quickly reading an athlete&apos;s relative strengths.</p></article>
          <article><strong>Year-over-year views</strong><p>Comparisons designed to surface development rather than isolated test results.</p></article>
          <article><strong>Automated image handling</strong><p>Pose-aware cropping and structured uploads to reduce repetitive preparation.</p></article>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">05 / Outcome</p><h2>Delivered to the people it was built for.</h2></div>
          <div><p>The finished platform was presented to UC Davis Football stakeholders and used by coaching and strength staff. The project strengthened my ability to lead across technical disciplines, protect data quality, and present analytical work in language decision-makers can act on.</p><p>The repository shows the product structure, while athlete data and internal programme information remain appropriately private.</p></div>
        </div>
      </section>
      <CaseStudyFooter repository="https://github.com/AggieSportsAnalytics/ProTech" />
    </main>
  );
}
