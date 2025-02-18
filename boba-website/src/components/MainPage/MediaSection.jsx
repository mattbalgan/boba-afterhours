import React from "react";
import "./MediaSection.css";
import CoffeeShop2 from "../../images/coffeeshop2.jpg";
import Wave2 from "../../images/wave-2.svg";
import Wave4 from "../../images/wave-4.svg";
import Image1 from "../../images/media1.JPG";
import Image2 from "../../images/media2.JPG";
import Image3 from "../../images/media3.JPG";
import Image4 from "../../images/media4.JPG";
import Image5 from "../../images/media5.JPG";
import Image6 from "../../images/media6.JPG";
import Image7 from "../../images/media7.JPG";

export default function MediaSection() {
  return (
    <div className="media-section">
      {/* Top Wave Transition */}
      <div className="wave-container-media top-wave">
        <img src={Wave4} alt="Top Wave" className="wave-image" />
      </div>

      <div className="media-content">
        <h2 className="media-main-title">hello, have we met?</h2>
        <p className="media-sub-text">You might remember us from when we first started at the University of Washington under a different name…</p>
        
        <div className="media-row1">
          <p className="media-row-text1">Maybe you were lucky enough to try some at our popups before they sold out?</p>
            <img src={Image1} alt="Popup 1" className="gallery-image" />
            <img src={Image2} alt="Popup 2" className="gallery-image" />
            <img src={Image3} alt="Popup 3" className="gallery-image" />
        </div>
        
        <div className="media-row2">
            <img src={Image4} alt="Beta Testing 1" className="gallery-image" />
            <img src={Image5} alt="Beta Testing 2" className="gallery-image" />
            <img src={Image6} alt="Beta Testing 3" className="gallery-image" />
            <img src={Image7} alt="Beta Testing 3" className="gallery-image" />
            <p className="media-row-text2">Or maybe you were one of our beta testers that helped us develop our signature taste.</p>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="wave-container-media">
        <img src={Wave2} alt="Bottom Wave" className="wave-image" />
      </div>
    </div>
  );
}
