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
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
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
