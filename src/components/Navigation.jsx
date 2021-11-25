import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink exact to="/">
        Accueil
      </NavLink>
    </div>
  );
};

export default Navigation;
