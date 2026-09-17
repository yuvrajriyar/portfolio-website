import ProTechCarousel from "./protech-carousel";

export function ProTechVisual() {
  return <ProTechCarousel />;
}

export function DispatchVisual() {
  return (
    <div className="project-visual dispatch-visual" aria-label="Fleet dispatch dashboard showing routes, load status, ETAs, and backload priorities">
      <div className="visual-topline"><span>ACTIVE FLEET · DECISION VIEW</span><span>AM / PM</span></div>
      <div className="visual-insight-strip">
        <div><strong>20</strong><span>Trucks tracked</span></div>
        <div><strong>2×</strong><span>Daily reviews</span></div>
        <div><strong>3</strong><span>Priority states</span></div>
      </div>
      <div className="route-board">
        <div className="route-line"><span className="route-city">CA</span><i /><span className="truck-marker">18</span><i /><span className="route-city">FL</span></div>
        <div className="fleet-table">
          <div><span className="status green" /><strong>TRK 118 · Loaded</strong><small>ETA 14:20</small><em>On plan</em></div>
          <div><span className="status amber" /><strong>TRK 132 · Backload</strong><small>Empty tomorrow</small><em>Search now</em></div>
          <div><span className="status red" /><strong>TRK 126 · Empty</strong><small>Available today</small><em>Priority</em></div>
        </div>
      </div>
    </div>
  );
}

export function NBAVisual() {
  return (
    <div className="project-visual nba-visual" aria-label="NBA injury-risk model summary showing sample size, features, accuracy, AUC, and model comparison">
      <div className="visual-topline"><span>NBA INJURY RISK</span><span>MODEL EVALUATION</span></div>
      <div className="nba-overview">
        <div className="nba-kpis">
          <div><strong>11K+</strong><span>Player-seasons</span></div>
          <div><strong>26+</strong><span>Engineered features</span></div>
          <div className="nba-kpi-accent"><strong>0.956</strong><span>Best AUC</span></div>
          <div><strong>88.3%</strong><span>Accuracy</span></div>
        </div>
        <div className="model-comparison">
          <p>Model comparison</p>
          <div><span>Logistic</span><i><b style={{ width: "72%" }} /></i></div>
          <div><span>Random Forest</span><i><b style={{ width: "86%" }} /></i></div>
          <div><span>XGBoost</span><i><b style={{ width: "95.6%" }} /></i></div>
        </div>
      </div>
      <div className="metric-ribbon"><span>WORKLOAD</span><span>INJURY HISTORY</span><span>PLAYER PROFILE</span></div>
    </div>
  );
}

export function PipelineVisual() {
  return (
    <div className="project-visual pipeline-visual" aria-label="Stylised financial data pipeline preview">
      <div className="visual-topline"><span>RECONCILIATION</span><span>PIPELINE / BUILDING</span></div>
      <div className="pipeline-flow">
        <div><span>01</span><strong>Source</strong><small>Transactions</small></div><i />
        <div><span>02</span><strong>Validate</strong><small>Quality rules</small></div><i />
        <div><span>03</span><strong>Model</strong><small>SQL layers</small></div><i />
        <div><span>04</span><strong>Report</strong><small>Power BI</small></div>
      </div>
    </div>
  );
}

export function EstateFlowVisual() {
  return (
    <div className="project-visual pipeline-visual" aria-label="EstateFlow pipeline from Zillow housing data through Python and PostgreSQL to validated market metrics">
      <div className="visual-topline"><span>RAW DATA → DECISION METRICS</span><span>GRAIN · ZIP × MONTH</span></div>
      <div className="pipeline-flow">
        <div><span>01 · SOURCE</span><strong>Zillow</strong><small>Home value + rent</small></div><i />
        <div><span>02 · TRANSFORM</span><strong>Python</strong><small>Profile, reshape, validate</small></div><i />
        <div><span>03 · MODEL</span><strong>PostgreSQL</strong><small>Stage → intermediate → mart</small></div><i />
        <div><span>04 · ANALYSE</span><strong>Market metrics</strong><small>Annualised rent / value</small></div>
      </div>
      <div className="metric-ribbon pipeline-metrics"><span>✓ REQUIRED VALUES</span><span>✓ POSITIVE VALUES</span><span>✓ UNIQUE GRAIN</span></div>
    </div>
  );
}
