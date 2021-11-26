import React from "react";
import Navigation from "../components/Navigation";
import Taste from '../components/Taste'

const Play = () => {
  return (
    <div className="play">
      <Navigation />
      <div className="divblame">
        <button className="blamebutton">BLAME</button>
      </div>
    </div>
  );
};

export default Play;
