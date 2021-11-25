import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <div className="buttons">
        <div className="organise">
          <NavLink exact to="/organise">
            <button className="buttonvalide"> J'organise </button>
          </NavLink>
        </div>
        <div className="join">
          <NavLink exact to="/rejoins">
            <button className="buttonvalide"> Je rejoins </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
