import type { Metadata } from "next";
import { DispatchVisual } from "../../project-visuals";
import { CaseStudyFooter, CaseStudyHeader, CaseStudyHero } from "../case-study-components";

export const metadata: Metadata = {
  title: "Dispatch Command Centre Case Study | Yuvraj Riyar",
  description: "A private Streamlit dispatch tool built to improve daily fleet visibility and backload planning across roughly 20 trucks.",
};

export default function DispatchPage() {
  return (
    <main className="subpage estate-case-study project-case-study dispatch-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Private operational system · Internship project"
        eyebrow="Operations analytics · Soaring Eagle Roadlines"
        title="Dispatch Command Centre"
        deck="A practical fleet-visibility tool that converts twice-daily dispatch updates into clearer priorities for active loads, empty dates, and backhaul searches."
        facts={[
          { label: "Environment", value: "Family transportation business" },
          { label: "Fleet", value: "Approximately 20 trucks" },
          { label: "Cadence", value: "AM and PM reviews" },
          { label: "Stack", value: "Python · Streamlit · SQLite" },
        ]}
      >
        <DispatchVisual />
      </CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Problem</p><h2>Dispatch information was available, but not easy to act on.</h2></div>
          <div className="estate-narrative"><p>Tracking active freight across a roughly 20-truck fleet required repeated manual checks across drivers, routes, delivery dates, empty dates, and broker follow-ups. That made it easier to miss when a truck needed its next load or which backhaul search deserved attention first.</p><p>I translated operational needs into ETA visibility, empty-date tracking and backhaul-priority flags. Using an AI-assisted development workflow with Python, Streamlit, SQLite and pandas, I built the Dispatch Command Centre to bring those updates into one working view. I verified the outputs against manually calculated dates and priorities before using it in the morning and afternoon review process.</p></div>
          <aside className="estate-principle"><span>Operational principle</span><p>The best internal tool removes friction from a decision the team already makes every day.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / Workflow</p><h2>One active load per truck, updated twice a day.</h2></div>
        <div className="dispatch-workflow">
          <article><span>INPUT</span><h3>Load and driver</h3><p>Truck, driver, broker, load status, pickup, delivery, and route information.</p></article>
          <article><span>CALCULATE</span><h3>Empty-date visibility</h3><p>Expected delivery and availability dates establish when the next search should begin.</p></article>
          <article><span>PRIORITISE</span><h3>Backload attention</h3><p>Green, yellow, and red states surface which trucks require immediate follow-up.</p></article>
          <article><span>REVIEW</span><h3>AM and PM action</h3><p>A shared operational view supports twice-daily dispatch and broker conversations.</p></article>
        </div>
      </section>

      <section className="project-flow-section">
        <div className="section-shell dispatch-decision-layout">
          <div><p className="section-index">03 / Decision system</p><h2>Colour communicates urgency, not decoration.</h2><p className="project-section-copy">The status logic makes it possible to scan the fleet quickly, then spend time on the trucks that need action.</p></div>
          <div className="dispatch-priority-board">
            <article className="priority-green"><i /><div><span>GREEN</span><h3>Covered</h3><p>Next movement is arranged or the truck is not yet ready for active backhaul search.</p></div></article>
            <article className="priority-amber"><i /><div><span>YELLOW</span><h3>Search approaching</h3><p>Availability is close enough that broker outreach and lane planning should begin.</p></div></article>
            <article className="priority-red"><i /><div><span>RED</span><h3>Immediate attention</h3><p>The truck is empty or at risk of idle time without a confirmed next load.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Impact</p><h2>A smaller workflow with a measurable operational benefit.</h2></div>
        <div className="dispatch-impact-grid">
          <article><strong>≈50%</strong><h3>Less tracking time</h3><p>In my own use, the central view reduced routine fleet-status tracking time by an estimated 50%.</p></article>
          <article><strong>20</strong><h3>Trucks represented</h3><p>The tool brought active loads, delivery timing, and backhaul priorities into one place.</p></article>
          <article><strong>2×</strong><h3>Daily operating rhythm</h3><p>Morning and afternoon updates keep records current and follow-ups visible.</p></article>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">05 / Financial context</p><h2>Operational priorities need a financial view.</h2></div>
        <div className="estate-narrative"><p>Alongside dispatch planning, I analysed revenue, gross profit, fuel and transportation expenses in Excel to support load, truck and route profitability reviews. Reconciliation and discrepancy investigation kept those reports grounded in current freight records.</p><p>The work included broker follow-ups and communicating findings across the operation. Building the tool was one part of the internship; validating its inputs and connecting them to daily decisions made it useful.</p></div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">06 / Boundaries</p><h2>Built for the operation, not for public release.</h2></div>
          <div><p>The application contains business and freight information, so the source code and live data remain private. This case study documents the system design and measured workflow improvement without exposing customer, broker, driver, lane, or transaction details.</p><p>The next useful expansion would connect profitability reporting more directly to the dispatch workflow while preserving a clear separation between operational and financial records.</p></div>
        </div>
      </section>
      <CaseStudyFooter />
    </main>
  );
}
