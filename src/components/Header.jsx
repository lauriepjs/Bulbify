import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <NavLink exact to="/organise">
                <a href="#">
                  <li>J'organise</li>
                </a>
              </NavLink>
              <NavLink exact to="/rejoins">
                <a href="#">
                  <li>Je rejoins</li>
                </a>
              </NavLink>
              <NavLink exact to="/tutoriel">
                <a href="#">
                  <li>Tutoriel</li>
                </a>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
      <div className="logo">
        <NavLink exact to="/">
          <img src="src/assets/logobulbify2.png" alt="logo" />
        </NavLink>
      </div>

    </div>
  </nav>
  </div>
  );
};
export default Header;
