import React from "react";


const Header = () => {

  return (
    <div>
    <nav role="navigation">
    <div id="menuToggle">
      
      <input type="checkbox" />
      
      <span></span>
      <span></span>
      <span></span>
      
      
      <ul id="menu">
        <a href="#"><li>J'organise</li></a>
        <a href="#"><li>Je rejoins</li></a>
        <a href="#"><li>Tutoriel</li></a>
      </ul>
    </div>
  </nav>
  <div className="logo">
      <img src="src/assets/logobulbify2.png" alt="logo bulbify" />
    </div>
  </div>
  );
};

export default Header;
