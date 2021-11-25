import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

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
          <NavLink exact to="/tutoriel">
            <button className="buttonTuto">Tutoriel</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
