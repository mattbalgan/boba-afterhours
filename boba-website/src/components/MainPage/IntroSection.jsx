import React from "react";
import "./IntroSection.css";
import CoffeeShop1 from "../../images/coffeeshop1.jpg";
import Bottle from "../../images/bottle.PNG";
import Wave from "../../images/wave-1.svg"; // Import the wave

export default function IntroSection() {
  return (
    <div className="intro-section">
      <div className="content-container">
        <div className="text-section">
          <p className="large-text-1">REAL MILK.</p>
          <p className="large-text-2">REAL TEA.</p>
          <p className="medium-text-1">NO FAKE CREAMER.</p>
          <p className="medium-text-2">NO FAKE TEA POWDER.</p>
          <p className="large-text-3">BOBA’S ALL</p>
          <p className="large-text-4">GROWN UP.</p>
          <button className="find-store-button">FIND STORE</button>
        </div>

        <div className="image-section">
          <img src={Bottle} alt="Bottle" className="bottle-image" />
        </div>
      </div>

      {/* Wave at the bottom */}
      <div className="wave-container">
        <img src={Wave} alt="Wave Transition" className="intro-wave" />
      </div>
    </div>
  );
}
