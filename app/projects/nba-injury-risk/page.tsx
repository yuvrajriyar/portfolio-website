import type { Metadata } from "next";
import { NBAVisual } from "../../project-visuals";
import { CaseStudyFooter, CaseStudyHeader, CaseStudyHero } from "../case-study-components";

export const metadata: Metadata = {
  title: "NBA Injury Risk Case Study | Yuvraj Riyar",
  description: "An R-based analysis of more than 11,000 NBA player-seasons using statistical and machine-learning models.",
};

const models = [
  ["Logistic regression", "An interpretable statistical baseline for estimating injury probability."],
  ["Random forest", "A non-linear ensemble model suited to interactions among workload and player features."],
  ["XGBoost", "A boosted model used to compare predictive performance and feature relationships."],
];

export default function NBAInjuryPage() {
  return (
    <main className="subpage estate-case-study project-case-study nba-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Completed academic analysis"
        eyebrow="Statistical modelling · NBA"
        title="NBA Injury Risk"
        deck="A reproducible R analysis examining how workload, player characteristics, and injury history relate to injury risk across NBA player-seasons."
        facts={[
          { label: "Dataset", value: "11,000+ player-seasons" },
          { label: "Features", value: "26+ engineered variables" },
          { label: "Best result", value: "88.3% accuracy · 0.956 AUC" },
          { label: "Stack", value: "R · tidyverse · XGBoost" },
        ]}
        repository="https://github.com/yuvrajriyar/STA-141A-NBA-INJURIES"
      >
        <NBAVisual />
      </CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Question</p><h2>Can historical player data help identify injury risk?</h2></div>
          <div className="estate-narrative"><p>The project combined player biography, season workload, and historical injury information to study whether patterns in past data could distinguish higher-risk player-seasons.</p><p>The objective was not to produce a medical diagnosis. It was to practise a complete modelling workflow: clean and join imperfect sources, engineer useful predictors, compare model families, evaluate performance, and document what the results can and cannot support.</p></div>
          <aside className="estate-principle"><span>Analytical principle</span><p>Strong model metrics do not remove the need for context, limitations, or human judgement.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / Data preparation</p><h2>More than 26 features built from player and season context.</h2></div>
        <div className="project-feature-list nba-feature-list">
          <article><strong>Workload</strong><p>Games, minutes, usage, and accumulated season exposure.</p></article>
          <article><strong>Player profile</strong><p>Age, position, physical characteristics, and career context.</p></article>
          <article><strong>Injury history</strong><p>Past injury indicators and season-level injury outcomes.</p></article>
          <article><strong>Derived features</strong><p>Cleaned, joined, and engineered variables designed for reproducible modelling.</p></article>
        </div>
      </section>

      <section className="project-flow-section">
        <div className="section-shell">
          <div className="estate-section-heading"><p className="section-index">03 / Model comparison</p><h2>Three approaches, evaluated against the same question.</h2></div>
          <div className="model-comparison-grid">{models.map(([name, detail], index) => <article key={name}><span>MODEL 0{index + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">04 / Results</p><h2>Performance was measured from more than one angle.</h2></div>
        <div className="nba-results-layout">
          <div className="nba-score-card"><span>BEST REPORTED ACCURACY</span><strong>88.3<small>%</small></strong><p>The share of evaluated observations classified correctly by the strongest reported model.</p></div>
          <div className="nba-score-card"><span>AREA UNDER ROC CURVE</span><strong>0.956</strong><p>A measure of how effectively the model ranked higher-risk and lower-risk observations.</p></div>
          <div className="nba-result-note"><h3>Interpretation before celebration.</h3><p>The results demonstrate a strong academic modelling pipeline, but they depend on the available injury labels, source quality, feature definitions, and train-test design. They should not be treated as clinical predictions.</p></div>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">05 / Limitations</p><h2>Predictive association is not medical causation.</h2></div>
          <div><p>Public injury data can be incomplete or inconsistently classified, and a player-season record cannot capture every medical, biomechanical, or contextual factor. Class balance and threshold selection can also make accuracy appear stronger than it is in isolation.</p><p>The project therefore reports AUC alongside accuracy and treats model outputs as analytical evidence, not medical advice or a replacement for professional evaluation.</p></div>
        </div>
      </section>
      <CaseStudyFooter repository="https://github.com/yuvrajriyar/STA-141A-NBA-INJURIES" />
    </main>
  );
}
