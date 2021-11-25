import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="organise">
        <NavLink exact to="/organise">
          <Button variant="contained">J'organise</Button>
        </NavLink>
      </div>
      <div className="join">
        <NavLink exact to="/rejoins">
          <Button className="accesbutton" variant="contained">Je rejoins</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
