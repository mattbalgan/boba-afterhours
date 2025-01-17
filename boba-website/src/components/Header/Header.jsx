import React from 'react';
import './Header.css';
import MainLogo from '../../images/MainLogo.PNG';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={MainLogo} alt="Logo" className="logo" />
        <div className="header-buttons">
          <button className="header-button">REQUEST A STORE (CLICK THIS PLEASE)</button>
          <button className="header-button">SPILL THE TEA (CONTACT US)</button>
        </div>
      </div>
    </header>
  );
}