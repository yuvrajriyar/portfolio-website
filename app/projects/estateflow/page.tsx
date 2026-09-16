import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstateFlow Case Study | Yuvraj Riyar",
  description: "How EstateFlow transforms Zillow housing data into validated ZIP-month market metrics using Python, PostgreSQL, SQL and Docker.",
};

const qualityChecks = [
  { number: "01", title: "Required values", detail: "Flags missing ZIP codes, months, home values, rents and derived metrics." },
  { number: "02", title: "Valid measures", detail: "Rejects non-positive home values, rents and calculated market metrics." },
  { number: "03", title: "Unique grain", detail: "Confirms every record represents one ZIP code in one month." },
  { number: "04", title: "Layer reconciliation", detail: "Compares row counts as data moves from transformation to the analytical mart." },
  { number: "05", title: "Metric verification", detail: "Independently recalculates annualised rent and gross rent-to-value percentage." },
];

const milestones = [
  { status: "complete", title: "Environment and database", detail: "Python 3.12, uv, Docker Compose and PostgreSQL 17." },
  { status: "complete", title: "Source research", detail: "ZHVI and ZORI coverage, grain, limitations and missingness documented." },
  { status: "complete", title: "Transformation layer", detail: "Wide monthly source files reshaped into validated ZIP-month records." },
  { status: "complete", title: "Analytical mart", detail: "Home values and rents joined with two derived market metrics." },
  { status: "next", title: "Dashboard and automation", detail: "Power BI reporting, market rankings and a repeatable pipeline runner." },
];

function ExternalArrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

function PipelineDiagram() {
  const stages = [
    { index: "01", name: "Zillow", detail: "ZHVI + ZORI", tone: "blue" },
    { index: "02", name: "Python", detail: "Profile + reshape", tone: "teal" },
    { index: "03", name: "PostgreSQL", detail: "Stage + join", tone: "violet" },
    { index: "04", name: "Market mart", detail: "Compare + report", tone: "gold" },
  ];

  return (
    <div className="estate-pipeline" aria-label="EstateFlow data pipeline from Zillow sources to the analytical market mart">
      <div className="estate-visual-top"><span>DATA LINEAGE</span><span>ESTATEFLOW / 01</span></div>
      <div className="estate-pipeline-track">
        {stages.map((stage, index) => (
          <div className="estate-stage-wrap" key={stage.name}>
            <article className={`estate-stage estate-stage-${stage.tone}`}>
              <span>{stage.index}</span>
              <strong>{stage.name}</strong>
              <small>{stage.detail}</small>
            </article>
            {index < stages.length - 1 ? <i aria-hidden="true">→</i> : null}
          </div>
        ))}
      </div>
      <div className="estate-visual-footer"><span>RAW</span><span>VALIDATED</span><span>ANALYSIS READY</span></div>
    </div>
  );
}

export default function EstateFlowPage() {
  return (
    <main className="subpage estate-case-study">
      <header className="subpage-header section-shell">
        <Link className="classic-mark" href="/" aria-label="Return home"><span>Y</span><span>R</span></Link>
        <nav><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/references">References</Link></nav>
        <a className="header-contact" href="mailto:ysriyar30@gmail.com">Contact</a>
      </header>

      <section className="estate-hero section-shell">
        <div className="estate-breadcrumb"><Link href="/projects">Portfolio</Link><span>/</span><strong>EstateFlow</strong></div>
        <div className="estate-hero-grid">
          <div>
            <div className="estate-status"><span /> Active development</div>
            <p className="section-index">Solo data pipeline project</p>
            <h1>EstateFlow</h1>
            <p className="estate-deck">A housing-market analytics pipeline built to turn large, inconsistent public datasets into reliable comparisons across ZIP codes and time.</p>
            <div className="estate-actions">
              <a className="primary-button" href="https://github.com/yuvrajriyar/EstateFlow" target="_blank" rel="noreferrer">View repository <ExternalArrow /></a>
              <a className="secondary-button" href="#architecture">Explore the pipeline</a>
            </div>
          </div>
          <div className="estate-hero-facts">
            <div><span>Role</span><strong>Solo builder</strong></div>
            <div><span>Core grain</span><strong>ZIP × month</strong></div>
            <div><span>Data</span><strong>Zillow ZHVI + ZORI</strong></div>
            <div><span>Stack</span><strong>Python · PostgreSQL · SQL</strong></div>
          </div>
        </div>
        <PipelineDiagram />
      </section>

      <section className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Overview</p><h2>From public files to a decision-ready market view.</h2></div>
          <div className="estate-narrative">
            <p>Housing data is plentiful, but comparing markets responsibly requires more than downloading a spreadsheet. Home-value and rent histories arrive with different coverage, wide monthly columns, missing observations and geographic inconsistencies.</p>
            <p>EstateFlow creates a controlled path from those source files to one analytical model. The workflow profiles each dataset, reshapes it into a consistent ZIP-month grain, validates the records, joins compatible home-value and rent observations, and calculates transparent comparison metrics.</p>
          </div>
          <aside className="estate-principle"><span>The design principle</span><p>Every reported metric should be traceable to its source and independently testable.</p></aside>
        </div>
      </section>

      <section id="architecture" className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / Architecture</p><h2>Four layers, each with a clear responsibility.</h2></div>
        <div className="estate-architecture-grid">
          <article><span>01</span><h3>Source</h3><p>Zillow Home Value Index and Observed Rent Index files, accompanied by documented coverage and limitations.</p></article>
          <article><span>02</span><h3>Transform</h3><p>Python and pandas profile the sources, preserve ZIP codes, reshape dates and enforce row-level assertions.</p></article>
          <article><span>03</span><h3>Model</h3><p>PostgreSQL staging tables feed a shared intermediate view joined on ZIP code and month.</p></article>
          <article><span>04</span><h3>Serve</h3><p>An analysis-ready mart exposes market measures for rankings, trends and future Power BI reporting.</p></article>
        </div>
      </section>

      <section className="estate-data-section">
        <div className="section-shell estate-data-grid">
          <div className="estate-source-profile">
            <div className="estate-section-heading compact"><p className="section-index">03 / Source profile</p><h2>Similar shape. Very different coverage.</h2></div>
            <div className="coverage-chart" aria-label="Source profile comparing the number of ZIP codes in ZHVI and ZORI">
              <div className="coverage-row"><div><strong>ZHVI</strong><span>Home values</span></div><i><b style={{ width: "100%" }} /></i><em>26,269 ZIPs</em></div>
              <div className="coverage-row"><div><strong>ZORI</strong><span>Monthly rent</span></div><i><b style={{ width: "32.5%" }} /></i><em>8,543 ZIPs</em></div>
            </div>
            <p className="coverage-note">Source profiling snapshot through July 2026. Analysis is limited to ZIP-month combinations available in both datasets.</p>
          </div>
          <div className="estate-source-cards">
            <article><span>ZHVI</span><h3>Typical home value</h3><p>A modelled estimate for the middle portion of the housing market. It is not an individual appraisal or a future forecast.</p><small>Monthly · January 2000 onward</small></article>
            <article><span>ZORI</span><h3>Typical observed rent</h3><p>A weighted measure derived from listed rents. It represents the wider rental stock, not every lease signed.</p><small>Monthly · January 2015 onward</small></article>
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Analytical model</p><h2>The first mart answers a focused set of questions.</h2></div>
        <div className="estate-metric-layout">
          <div className="estate-metric-cards">
            <article><span>Source measure</span><strong>ZHVI</strong><p>Typical home value in US dollars.</p></article>
            <article><span>Source measure</span><strong>ZORI</strong><p>Typical monthly rent in US dollars.</p></article>
            <article><span>Derived measure</span><strong>Annualised rent</strong><p>Monthly rent multiplied by twelve.</p></article>
            <article><span>Derived measure</span><strong>Rent-to-value</strong><p>Annualised rent divided by home value.</p></article>
          </div>
          <div className="estate-formula-card">
            <span>CORE COMPARISON METRIC</span>
            <p><strong>Monthly rent</strong><b>× 12</b><i>÷</i><strong>Home value</strong><b>× 100</b></p>
            <h3>Gross rent-to-value %</h3>
            <small>A screening measure for comparing markets, not a complete investment return.</small>
          </div>
        </div>
      </section>

      <section className="estate-quality-section">
        <div className="section-shell">
          <div className="estate-section-heading"><p className="section-index">05 / Data quality</p><h2>Checks are part of the pipeline, not an afterthought.</h2></div>
          <div className="estate-quality-grid">
            {qualityChecks.map((check) => <article key={check.number}><span>{check.number}</span><div><h3>{check.title}</h3><p>{check.detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">06 / Progress</p><h2>A working foundation, with the reporting layer next.</h2></div>
        <div className="estate-progress-layout">
          <div className="estate-milestones">
            {milestones.map((milestone) => (
              <article key={milestone.title} className={milestone.status}>
                <i aria-hidden="true" />
                <div><span>{milestone.status === "complete" ? "Complete" : "Next"}</span><h3>{milestone.title}</h3><p>{milestone.detail}</p></div>
              </article>
            ))}
          </div>
          <aside className="estate-next-card">
            <p className="section-index">Next release</p>
            <h3>Power BI market explorer</h3>
            <p>The dashboard will turn the mart into a visual comparison tool for market rankings, time trends and geographic filtering.</p>
            <div><span>01</span>Market ranking table</div><div><span>02</span>Value and rent trends</div><div><span>03</span>State, metro and ZIP filters</div>
          </aside>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">07 / Judgement</p><h2>What the metric does not claim.</h2></div>
          <div><p>Gross rent-to-value percentage is useful for high-level comparison, but it does not account for financing, vacancy, taxes, insurance, maintenance or transaction costs. Zillow indices are modelled estimates, and rent coverage is materially narrower than home-value coverage.</p><p>Those limitations are documented intentionally so the eventual dashboard remains useful without pretending the data is more precise than it is.</p></div>
        </div>
      </section>

      <section className="estate-footer-cta section-shell">
        <div><p className="section-index">Project repository</p><h2>See the implementation.</h2><p>Explore the Python transformations, layered SQL models, validation queries and source documentation on GitHub.</p></div>
        <a className="primary-button" href="https://github.com/yuvrajriyar/EstateFlow" target="_blank" rel="noreferrer">Open EstateFlow <ExternalArrow /></a>
      </section>

      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/projects">Return to projects</Link></footer>
    </main>
  );
}
