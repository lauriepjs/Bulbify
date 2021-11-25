import React from "react";
import Navigation from "../components/Navigation";

const Join = () => {
  return (
    <div className="jerejoins">
      <Navigation />
      <div className="titrejoins">
        <h2>Ce soir chez Léo</h2>
        <h3>Propose ton son !</h3>
      </div>
      <div className="input">
      </div>
      <div className="pochetteAlbum">
          <p>photo pochettes album</p>
          <p>photo pochettes album</p>
          <p>photo pochettes album</p>
      </div>
      <div className="buttonvalidemusique">
          <button className="buttonvalide"> Je valide ma liste</button>
      </div>
    </div>
  );
};

export default Join;
