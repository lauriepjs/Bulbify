import React from "react";
import Navigation from "../components/Navigation";

const Play = () => {
  return (
    <div className="play">
      <Navigation />
      <div className="pochette">
          <p>Pochette en cours de lecture</p>
      </div>
      <div className="divblame">
        <button className="blamebutton">BLAME</button>
      </div>
    </div>
  );
};

export default Play;
