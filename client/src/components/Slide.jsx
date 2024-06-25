import React from "react";
import "../styles/Slide.scss";

const Slide = () => {
  return (
    <div className="slide">
    <h2>Roam Anywhere, Stay Present,</h2>
    <div className="heading-container">
      <h1>
        Make <span className="highlight">Memories</span>.
      </h1>
      <div className="highlight-arc1">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0 20 Q50 0 100 20" stroke="white" fill="transparent" strokeWidth="2"/>
        </svg>
      </div>
      <div className="highlight-arc2">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0 20 Q50 0 100 20" stroke="white" fill="transparent" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  </div>
  );
};

export default Slide;
