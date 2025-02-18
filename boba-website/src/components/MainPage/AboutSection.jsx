import React from "react";
import "./AboutSection.css";
import AboutImage from "../../images/bottle2.JPG";
import TopWave from "../../images/wave-1.svg";

export default function AboutSection() {
  return (
    <div className="about-section">

      <div className="about-container">
        {/* Text Area */}
        <div className="about-text">
          <p className="about-large-1">NOT YOUR</p>
          <p className="about-large-2">AVERAGE BOBA</p>
          <p className="about-medium-1">
            We’re not about leaving boba behind — we’re about
            <br />
            bringing it forward.
          </p>
          <p className="about-medium-2">
            Our vision was to reimagine the beloved flavors that many Asian
            Americans grew up with, adding a fun and sophisticated twist for
            those of us who’ve grown up but still want a taste of nostalgia with
            a little something extra.
          </p>
        </div>

        {/* Image Area */}
        <div className="about-image-container">
          <img src={AboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
}
