import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="buttons">
      <NavLink exact to="/organise">
        <button className="button">J'organise</button>
      </NavLink>
      <NavLink exact to="/rejoins">
        <button className="button">Je rejoins</button>
      </NavLink>
      <NavLink exact to="/tutoriel">
        <button className="buttonTuto">Tutoriel</button>
      </NavLink>
    </div>
  );
};

export default Home;
