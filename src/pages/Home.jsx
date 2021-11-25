import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Organize from "./organize";

const Home = () => {
  return (
    <div>
      <Navigation />
      <img src="src/assets/logobulbify2.png" alt="logo bulbify" />
      <div className="organise">
        <NavLink exact to="/organise">
          <Button variant="contained">J'organise</Button>
        </NavLink>
      </div>
      <div className="join">
        <NavLink exact to="/joue">
          <Button variant="contained">Je rejoins</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
