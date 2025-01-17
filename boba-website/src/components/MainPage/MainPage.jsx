import React from 'react';
import './MainPage.css';
import CoffeeShop1 from '../../images/coffeeshop1.jpg'; // Ensure the path is correct
import Bottle from '../../images/bottle.PNG'; // Ensure the path is correct

export default function MainPage() {
  return (
    <div
      className="main-page"
      style={{ backgroundImage: `url(${CoffeeShop1})` }}
    >
      <div className="overlay"></div>
      <div className="content-container">
        <div className="text-section">
          <p className="large-text">REAL MILK.</p>
          <p className="large-text">REAL TEA.</p>
          <p className="medium-text">NO FAKE CREAMER.</p>
          <p className="medium-text">NO FAKE TEA POWDER.</p>
          <p className="large-text">BOBA’S ALL</p>
          <p className="large-text">GROWN UP.</p>
          <button className="find-store-button">Find a Store</button>
        </div>
        <div className="image-section">
          <img src={Bottle} alt="Bottle" className="bottle-image" />
        </div>
      </div>
    </div>
  );
}
