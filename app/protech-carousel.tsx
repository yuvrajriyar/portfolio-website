"use client";

import { useState } from "react";

const slides = ["Performance dashboard", "The ProTech team", "Case competition presentation"];

export default function ProTechCarousel() {
  const [active, setActive] = useState(0);
  const points = "160,40 219,83 197,153 123,153 101,83";

  function move(direction: number) {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <div className="project-visual protech-carousel" aria-label="ProTech project gallery">
      <div className="carousel-stage" aria-live="polite">
        {active === 0 && (
          <div className="protech-slide protech-dashboard-slide">
            <div className="visual-topline"><span>ATHLETE / 24</span><span>PERFORMANCE PROFILE</span></div>
            <svg viewBox="0 0 320 190" role="img" aria-label="Athlete performance radar chart">
              <polygon points="160,24 232,76 205,161 115,161 88,76" className="radar-grid" />
              <polygon points="160,55 207,89 189,145 131,145 113,89" className="radar-grid" />
              <line x1="160" y1="24" x2="160" y2="161" className="radar-line" />
              <line x1="88" y1="76" x2="205" y2="161" className="radar-line" />
              <line x1="232" y1="76" x2="115" y2="161" className="radar-line" />
              <polygon points={points} className="radar-data" />
              {points.split(" ").map((point) => {
                const [cx, cy] = point.split(",");
                return <circle key={point} cx={cx} cy={cy} r="3.5" className="radar-dot" />;
              })}
            </svg>
            <div className="metric-ribbon carousel-metrics"><span>POWER 92</span><span>SPEED 87</span><span>FORCE 84</span></div>
          </div>
        )}
        {active === 1 && <figure className="protech-slide protech-photo-slide"><img className="protech-team-photo" src="/protech-team.jpeg" alt="The six-person ProTech project team" /><figcaption><span>AGGIE SPORTS ANALYTICS</span><strong>The ProTech team</strong></figcaption></figure>}
        {active === 2 && <figure className="protech-slide protech-photo-slide"><img className="protech-presentation-photo" src="/protech-presentation.jpeg" alt="Yuvraj Riyar presenting ProTech at the Aggie Sports Analytics case competition" /><figcaption><span>ASA CASE COMPETITION</span><strong>Presenting ProTech</strong></figcaption></figure>}
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow carousel-prev" type="button" onClick={() => move(-1)} aria-label="Previous ProTech image">‹</button>
        <div className="carousel-dots">{slides.map((slide, index) => <button type="button" key={slide} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show ${slide}`} />)}</div>
        <button className="carousel-arrow carousel-next" type="button" onClick={() => move(1)} aria-label="Next ProTech image">›</button>
      </div>
    </div>
  );
}
