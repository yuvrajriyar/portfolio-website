import ProTechCarousel from "./protech-carousel";

export function ProTechVisual() {
  return <ProTechCarousel />;
}

export function DispatchVisual() {
  return (
    <div className="project-visual dispatch-visual" aria-label="Stylised fleet dispatch dashboard preview">
      <div className="visual-topline"><span>ACTIVE FLEET</span><span>AM DISPATCH VIEW</span></div>
      <div className="route-board">
        <div className="route-line"><span className="route-city">CA</span><i /><span className="truck-marker">18</span><i /><span className="route-city">FL</span></div>
        <div className="fleet-table">
          <div><span className="status green" />TRK 118<strong>Loaded</strong><small>ETA 14:20</small></div>
          <div><span className="status amber" />TRK 132<strong>Backload</strong><small>Search now</small></div>
          <div><span className="status red" />TRK 126<strong>Empty</strong><small>Priority</small></div>
        </div>
      </div>
    </div>
  );
}

export function NBAVisual() {
  const bars = [44, 71, 54, 88, 62, 76, 48, 69];
  return (
    <div className="project-visual nba-visual" aria-label="Stylised NBA injury analysis preview">
      <div className="visual-topline"><span>INJURY LOAD</span><span>MODEL DIAGNOSTICS</span></div>
      <div className="nba-chart">
        <div className="bar-chart">
          {bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <div className="chart-axis"><span>G</span><span>F</span><span>C</span><span>ALL</span></div>
      </div>
      <div className="metric-ribbon"><span>WORKLOAD</span><span>HISTORY</span><span>POSITION</span></div>
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
