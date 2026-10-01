import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EstateFlow Case Study | Yuvraj Riyar",
  description: "An end-to-end housing-market analytics system, from Zillow data through Python and PostgreSQL into an interactive Power BI market explorer.",
};

const qualityChecks = [
  { number: "01", title: "Required values", detail: "Flags missing ZIP codes, months, home values, rents and derived metrics." },
  { number: "02", title: "Valid measures", detail: "Rejects non-positive home values, rents and calculated market metrics." },
  { number: "03", title: "Unique grain", detail: "Confirms every record represents one ZIP code in one month." },
  { number: "04", title: "Layer reconciliation", detail: "Compares row counts as data moves from transformation to the analytical mart." },
  { number: "05", title: "Metric verification", detail: "Independently recalculates annualised rent and gross rent-to-value percentage." },
  { number: "06", title: "Fail-fast pipeline", detail: "Raises a SQL exception when required checks fail, stopping invalid data before downstream reporting." },
];

const milestones = [
  { status: "complete", title: "Environment and database", detail: "Python 3.12, uv, Docker Compose and PostgreSQL 17." },
  { status: "complete", title: "Repeatable data pipeline", detail: "Latest August sources loaded and reconciled; all PostgreSQL quality gates passed on 1 October 2026." },
  { status: "complete", title: "Market analytics", detail: "Historical and latest-ZIP measures for annualised rent, gross rent-to-value, and year-over-year movement." },
  { status: "complete", title: "Five-page Power BI report", detail: "National overview, Market Explorer, ZIP Detail, Forecast Experiment, and Guide & Definitions." },
  { status: "complete", title: "Forecast experiment and CI", detail: "31,566 August-vintage forecast rows published with chronological evaluation and empirical intervals; PostgreSQL integration tests pass in CI." },
  { status: "complete", title: "Local Desktop acceptance", detail: "All five pages refreshed and visually reviewed on 1 October 2026; navigation, Clear filters, and launcher-based startup reset confirmed by the author." },
  { status: "complete", title: "Public Power BI download", detail: "October 2026 release includes a self-contained PBIX with all five pages and imported August data, available without a Power BI Service account." },
  { status: "next", title: "Interactive online publication", detail: "The case study and screenshots are public. A browser-accessible interactive report remains to be published and access-tested." },
];

const dashboardImages = [
  { src: "/images/estateflow-national-market.png", width: 2048, height: 1113, alt: "EstateFlow National Housing Market dashboard showing national medians, home-value and rent trends, and ZIP-level market opportunities", title: "National Housing Market", detail: "Headline measures, long-term movement, coverage, and ZIP-level screening in one view." },
  { src: "/images/estateflow-market-explorer.png", width: 2048, height: 1128, alt: "EstateFlow Market Explorer dashboard comparing state-level growth and gross yield, rent momentum, and metro markets", title: "Market Explorer", detail: "Compare home-value growth, gross yield, and rent momentum by state and metro." },
  { src: "/images/estateflow-zip-detail.png", width: 2048, height: 1128, alt: "EstateFlow August 2026 profile for San Francisco ZIP 94112 with history and geographic benchmarks", title: "ZIP Detail", detail: "Compare a selected ZIP with its metro, state and national benchmarks." },
  { src: "/images/estateflow-forecast-experiment.png", width: 2048, height: 1131, alt: "Experimental forecasts for Amherst ZIP 01002 with 3-, 6- and 12-month projections and empirical bounds", title: "Forecast Experiment", detail: "Separate experimental index projections from observed data and inspect their empirical ranges." },
  { src: "/images/estateflow-dashboard-guide.png", width: 2048, height: 1128, alt: "EstateFlow dashboard guide explaining the reading order, metrics, and limitations", title: "How to Read the Dashboard", detail: "A plain-English guide to the measures, practical reading order, and limits of the comparison." },
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

function DashboardGallery() {
  return (
    <div className="estate-dashboard-gallery">
      {dashboardImages.map((item, index) => (
        <figure className={`estate-dashboard-card${index === 0 ? " estate-dashboard-card-featured" : ""}`} key={item.src}>
          <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open full-size dashboard: ${item.title}`}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={index === 0 ? "(max-width: 900px) 100vw, 82vw" : "(max-width: 900px) 100vw, 41vw"} />
          </a>
          <figcaption><span>0{index + 1} / POWER BI</span><strong>{item.title}</strong><p>{item.detail}</p></figcaption>
        </figure>
      ))}
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
            <div className="estate-status"><span /> Released October 2026 · August data</div>
            <p className="section-index">Independent analytics and data engineering</p>
            <h1>EstateFlow</h1>
            <p className="estate-deck">A reproducible analytics system that transforms Zillow home-value and rent data through Python and PostgreSQL into a five-page Power BI report for comparing housing markets across the United States.</p>
            <div className="estate-actions">
              <a className="primary-button" href="https://github.com/yuvrajriyar/EstateFlow/releases/download/v1.0.0/EstateFlow_Dashboard.pbix">Download Power BI report <ExternalArrow /></a>
              <a className="secondary-button" href="https://github.com/yuvrajriyar/EstateFlow" target="_blank" rel="noreferrer">View source on GitHub <ExternalArrow /></a>
            </div>
          </div>
          <div className="estate-hero-facts">
            <div><span>Role</span><strong>Solo builder</strong></div>
            <div><span>Core grain</span><strong>ZIP × month</strong></div>
            <div><span>Data</span><strong>Zillow ZHVI + ZORI</strong></div>
            <div><span>Stack</span><strong>Python · PostgreSQL · Power BI</strong></div>
          </div>
        </div>
        <p className="estate-dashboard-caption">The 55 MiB download includes all five pages and the August 2026 data. Open it in free Power BI Desktop for Windows; no database setup is needed to explore the saved report. Refreshing requires the source project and your own database.</p>
        <PipelineDiagram />
      </section>

      <section className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Overview</p><h2>From public files to a decision-ready market view.</h2></div>
          <div className="estate-narrative">
            <p>Housing data is plentiful, but comparing markets responsibly requires more than downloading a spreadsheet. Home-value and rent histories arrive with different coverage, wide monthly columns, missing observations and geographic inconsistencies.</p>
            <p>EstateFlow creates a controlled path from those files to two usable views: a historical ZIP-month model and a latest-market snapshot. Python profiles and reshapes the sources, PostgreSQL stages and joins them, SQL checks the grain and derived measures, and Power BI makes the result easier to explore.</p>
          </div>
          <aside className="estate-principle"><span>The design principle</span><p>Every reported metric should be traceable to its source and independently testable.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section estate-dashboard-section">
        <div className="estate-section-heading"><p className="section-index">02 / Dashboard</p><h2>From the national picture to a closer market comparison.</h2></div>
        <p className="estate-dashboard-intro">The five-page report moves from national and state-level comparisons to a ZIP-level detail view and a separately labelled forecast experiment. A dedicated guide explains the measures and their limits.</p>
        <DashboardGallery />
        <p className="estate-dashboard-caption">Screenshots show the August 2026 Zillow snapshot, refreshed and reviewed in Power BI Desktop on 1 October 2026. These are static previews. Download the Power BI report above to interact with the full dashboard in Desktop.</p>
      </section>

      <section id="architecture" className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">03 / Architecture</p><h2>Four layers, each with a clear responsibility.</h2></div>
        <div className="estate-architecture-grid">
          <article><span>01</span><h3>Source</h3><p>Zillow Home Value Index and Observed Rent Index files, accompanied by documented coverage and limitations.</p></article>
          <article><span>02</span><h3>Transform</h3><p>Python and pandas profile the sources, preserve ZIP codes, reshape dates and enforce row-level assertions.</p></article>
          <article><span>03</span><h3>Model</h3><p>PostgreSQL staging tables feed a shared intermediate view joined on ZIP code and month.</p></article>
          <article><span>04</span><h3>Explore</h3><p>Power BI reads the historical and latest-market marts for geographic filters, trends, growth comparisons, and ZIP-level screening.</p></article>
        </div>
      </section>

      <section className="estate-data-section">
        <div className="section-shell estate-data-grid">
          <div className="estate-source-profile">
            <div className="estate-section-heading compact"><p className="section-index">04 / Source profile</p><h2>Similar shape. Very different coverage.</h2></div>
            <div className="coverage-chart" aria-label="Source profile comparing the number of ZIP codes in ZHVI and ZORI">
              <div className="coverage-row"><div><strong>ZHVI</strong><span>Home values</span></div><i><b style={{ width: "100%" }} /></i><em>26,268 ZIPs</em></div>
              <div className="coverage-row"><div><strong>ZORI</strong><span>Monthly rent</span></div><i><b style={{ width: "32.2%" }} /></i><em>8,459 ZIPs</em></div>
            </div>
            <p className="coverage-note">Verified source snapshot through August 2026. The joined mart contains 462,410 ZIP-month records across 8,424 ZIP codes; its latest matched snapshot contains 8,421 ZIPs.</p>
          </div>
          <div className="estate-source-cards">
            <article><span>ZHVI</span><h3>Typical home value</h3><p>A modelled estimate for the middle portion of the housing market. It is not an individual appraisal or a future forecast.</p><small>Monthly · January 2000 onward</small></article>
            <article><span>ZORI</span><h3>Typical observed rent</h3><p>A weighted measure derived from listed rents. It represents the wider rental stock, not every lease signed.</p><small>Monthly · January 2015 onward</small></article>
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">05 / Analytical model</p><h2>The first mart answers a focused set of questions.</h2></div>
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
          <div className="estate-section-heading"><p className="section-index">06 / Data quality</p><h2>Checks are part of the pipeline, not an afterthought.</h2></div>
          <div className="estate-quality-grid">
            {qualityChecks.map((check) => <article key={check.number}><span>{check.number}</span><div><h3>{check.title}</h3><p>{check.detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">07 / Progress</p><h2>The pipeline and five-page report are verified locally.</h2></div>
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
            <p className="section-index">Final release check</p>
            <h3>Explore the released report</h3>
            <p>The August pipeline, forecasts, and Desktop report passed local acceptance. The public release includes a ready-to-use Power BI download, screenshots and source code. Browser-based Power BI access remains a future option.</p>
            <div><span>01</span>August pipeline and forecasts verified</div><div><span>02</span>Five refreshed pages visually reviewed</div><div><span>03</span>Navigation and filter resets confirmed</div>
          </aside>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">08 / Judgement</p><h2>What the metric does not claim.</h2></div>
          <div><p>Gross rent-to-value is useful for a first-pass comparison, but it is not net yield or cash flow. It does not account for financing, vacancy, taxes, insurance, management, maintenance or transaction costs. Zillow indices are modelled estimates, and coverage varies across ZIP codes and months.</p><p>The report keeps those limits visible, does not estimate missing values, and shows year-over-year coverage alongside growth measures so a reader can judge how much of the market supports the comparison.</p></div>
        </div>
      </section>

      <section className="estate-footer-cta section-shell">
        <div><p className="section-index">Project repository</p><h2>See the implementation.</h2><p>Explore the Python pipeline, layered SQL models, Power BI project, data-quality checks, and source documentation on GitHub.</p></div>
        <a className="primary-button" href="https://github.com/yuvrajriyar/EstateFlow" target="_blank" rel="noreferrer">Open EstateFlow <ExternalArrow /></a>
      </section>

      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/projects">Return to projects</Link></footer>
    </main>
  );
}
