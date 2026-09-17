import type { Metadata } from "next";
import { HousingRegressionVisual } from "../../project-visuals";
import { CaseStudyFooter, CaseStudyHeader, CaseStudyHero } from "../case-study-components";

export const metadata: Metadata = {
  title: "King County Housing Analysis | Yuvraj Riyar",
  description: "A multiple-linear-regression analysis of roughly 15,000 King County home sales, including interaction testing, diagnostics, and interpretation.",
};

const workflow = [
  ["Frame", "Define sale price as the outcome and organise structural, quality, and geographic predictors around an interpretable housing question."],
  ["Model", "Build multiple linear regression specifications and test whether interaction effects improve explanatory value."],
  ["Compare", "Use ANOVA and F-tests, standardised coefficients, and fit statistics to compare competing specifications."],
  ["Diagnose", "Check residual behaviour, heteroskedasticity, multicollinearity, and the limits those findings place on interpretation."],
];

export default function KingCountyHousingPage() {
  return (
    <main className="subpage estate-case-study project-case-study housing-case-study">
      <CaseStudyHeader />
      <CaseStudyHero
        status="Completed statistical analysis"
        eyebrow="Housing economics · King County"
        title="Housing Market Analysis"
        deck="A regression study of how structural, quality, and geographic characteristics relate to home sale prices across roughly 15,000 King County transactions."
        facts={[
          { label: "Dataset", value: "Approximately 15,000 home sales" },
          { label: "Method", value: "Multiple linear regression" },
          { label: "Explained variance", value: "55.7% in the structural model" },
          { label: "Stack", value: "R · diagnostics · ANOVA" },
        ]}
      >
        <HousingRegressionVisual />
      </CaseStudyHero>

      <section id="project-story" className="estate-overview">
        <div className="section-shell estate-overview-grid">
          <div><p className="section-index">01 / Question</p><h2>What actually explains differences in sale price?</h2></div>
          <div className="estate-narrative"><p>The analysis examined whether measurable property characteristics could explain meaningful variation in King County home prices. Rather than treating the model as a prediction contest, the work focused on interpretation: which features matter, how their effects interact, and whether the statistical assumptions support the conclusions.</p><p>Construction grade and living space emerged among the strongest drivers. The structural model explained 55.7% of sale-price variance, leaving a substantial share attributable to location, market timing, omitted characteristics, and factors the dataset could not fully represent.</p></div>
          <aside className="estate-principle"><span>Analytical principle</span><p>A useful model should explain its evidence and its weaknesses with equal clarity.</p></aside>
        </div>
      </section>

      <section className="section-shell estate-section">
        <div className="estate-section-heading"><p className="section-index">02 / Workflow</p><h2>Interpretation was built into every stage.</h2></div>
        <div className="project-flow-grid">{workflow.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="project-flow-section">
        <div className="section-shell">
          <div className="estate-section-heading"><p className="section-index">03 / Findings</p><h2>The strongest drivers were practical, but not the whole story.</h2></div>
          <div className="housing-findings-grid">
            <article><strong>55.7%</strong><h3>Variance explained</h3><p>The structural specification captured a meaningful share of price differences without claiming complete explanatory power.</p></article>
            <article><strong>Grade</strong><h3>Construction quality</h3><p>Construction grade was among the most influential characteristics after accounting for other variables.</p></article>
            <article><strong>Space</strong><h3>Living area</h3><p>Usable living space remained a central driver, while interaction tests examined how effects changed across property profiles.</p></article>
          </div>
        </div>
      </section>

      <section className="estate-limitations">
        <div className="section-shell estate-limitations-grid">
          <div><p className="section-index">04 / Model judgement</p><h2>Diagnostics changed how the results were communicated.</h2></div>
          <div><p>Heteroskedasticity was present, and several related housing variables showed moderate multicollinearity. Those findings do not erase the model, but they do require care with standard errors, coefficient interpretation, and claims about precision.</p><p>The final analysis therefore emphasised relative influence, model comparison, and transparent limitations rather than presenting a single equation as a complete account of the housing market.</p></div>
        </div>
      </section>
      <CaseStudyFooter />
    </main>
  );
}
