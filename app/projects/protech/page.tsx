import type { Metadata } from "next";
import ProTechCarousel from "../../protech-carousel";
import { CaseStudyFooter, CaseStudyHeader, CaseStudyHero } from "../case-study-components";

export const metadata: Metadata = {
  title: "ProTech Case Study | Yuvraj Riyar",
  description: "How a six-person Aggie Sports Analytics team built an athlete-performance platform for UC Davis Football staff.",
};

const contributions = [
  ["Project coordination", "Coordinated project tasks and stakeholder feedback within a six-person team. Sachin Venkat was the project manager; I contributed across implementation, data preparation, and delivery."],
  ["Data systems", "Contributed Supabase uploads and storage workflows, record validation, missing-data checks, and consistency fixes across multi-year athlete data."],
  ["Visual analytics", "Developed and refined React spider charts, ForcePlate and NordBoard components, roster formatting, and missing-data handling so empty charts did not distract from useful measurements."],
  ["Product delivery", "Prepared athlete images, incorporated coaching feedback, and presented the finished platform at the ASA case competition."],
];

export default function ProTechPage() {
  return (
    <main className="subpage estate-case-study project-case-study protech-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Delivered to UC Davis Football"
        eyebrow="Athlete performance platform"
        title="ProTech"
        deck="A full-stack dashboard for UC Davis Football that turns athlete testing exports into performance histories, teammate comparisons, and written summaries for coaching and strength staff."
        facts={[
          { label: "Role", value: "Data analyst · Coordination and front end" },
          { label: "Team", value: "Six contributors" },
          { label: "Users", value: "Coaches and strength staff" },
          { label: "Stack", value: "React · Supabase · Chart.js" },
        ]}
        repository="https://github.com/AggieSportsAnalytics/ProTech"
        website="https://aggiesportsanalytics.com/projects/protech"
      >
        <ProTechCarousel />
      </CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Context</p><h2>Performance data existed. A usable system did not.</h2></div>
          <div className="estate-narrative"><p>Testing records were spread across files and seasons. ProTech gave coaching and strength staff a shared place to follow each athlete, compare teammates, and review changes in performance.</p><p>The sections below describe the team product. My contribution centered on visualizations, data quality, upload and image workflows, stakeholder feedback, and presentation.</p></div>
          <aside className="estate-principle"><span>Product principle</span><p>Make complex performance data fast enough to use inside a real coaching workflow.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / My contribution</p><h2>Coordination, data quality, and product work in one role.</h2></div>
        <div className="project-contribution-grid">{contributions.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="project-flow-section">
        <div className="section-shell">
          <div className="estate-section-heading"><p className="section-index">03 / System</p><h2>From raw testing records to an athlete profile.</h2></div>
          <div className="project-flow-grid">
            <article><span>01</span><h3>Import</h3><p>Python prepares testing exports; Node scripts load Supabase. An Express upload route also parses spreadsheets for ad hoc entry.</p></article>
            <article><span>02</span><h3>Store</h3><p>Supabase holds testing records, athlete images, and saved overviews. Upload checks help keep player and season data consistent.</p></article>
            <article><span>03</span><h3>Compare</h3><p>React retrieves athlete records and uses Chart.js and Recharts to show testing history and side-by-side athlete comparisons.</p></article>
            <article><span>04</span><h3>Review</h3><p>Coaches review charts alongside written overviews generated from computed trends, with cached results avoiding repeated requests.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Features</p><h2>Visuals built around the questions staff actually ask.</h2></div>
        <div className="project-feature-list">
          <article><strong>Athlete profiles and comparisons</strong><p>Testing history, season-specific photos, spider charts, and ForcePlate / NordBoard views help staff review development and compare two athletes.</p></article>
          <article><strong>Spreadsheet imports</strong><p>CSV, XLS, and XLSX entry supports existing equipment-export workflows alongside scripted cleaning and bulk loading.</p></article>
          <article><strong>Player overviews</strong><p>Trend calculations are passed to the language model rather than unprocessed measurements. Supabase caches each overview against its analytical inputs; staff can request regeneration.</p></article>
          <article><strong>Pose-aware image handling</strong><p>MoveNet body keypoints guide Sharp cropping. Unreliable poses are rejected; accepted photos are organized by athlete and year, with previous images archived.</p></article>
          <article><strong>Protected athlete information</strong><p>Supabase authentication restricts recruitment and alumni routes.</p></article>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">05 / Architecture</p><h2>The stack behind the coaching workflow.</h2></div>
        <div className="project-feature-list">
          <article><strong>Interface</strong><p>React 19, Vite, Tailwind CSS, and Radix UI, with Chart.js and Recharts for visualization.</p></article>
          <article><strong>Services and storage</strong><p>Express on Node.js; Supabase for PostgreSQL data, authentication, image storage, and overview caching. The frontend runs on Vercel and the backend on Render.</p></article>
          <article><strong>AI and image processing</strong><p>Groq is the default overview provider, with OpenRouter support. TensorFlow.js / MoveNet and Sharp handle pose detection and cropping.</p></article>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">06 / Delivery and next steps</p><h2>Delivered, with clear room to develop.</h2></div>
          <div><p>We demonstrated the platform to UC Davis Football staff and at the ASA case competition. Coaching and strength staff used the delivered dashboard. Working through uploads, inconsistent records, and photo feedback taught me how much a useful product depends on the details around its charts.</p><p>The project page identifies direct equipment ingestion, additional testing sources, richer multi-season summaries, and better mobile views as future improvements. These remain opportunities rather than completed features.</p><p>Project manager: Sachin Venkat. Project members: Munneth Gill, Devin Sidhu, Jessica Ting, Yuvi Riyar, and Advik Gupta.</p><p><a href="https://aggiesportsanalytics.com/projects/protech" target="_blank" rel="noreferrer">Read the ASA project overview ↗</a> for the team&apos;s feature and architecture documentation.</p></div>
        </div>
      </section>
      <CaseStudyFooter repository="https://github.com/AggieSportsAnalytics/ProTech" />
    </main>
  );
}
