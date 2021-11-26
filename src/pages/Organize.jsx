import React from "react";
import Navigation from "../components/Navigation";

const Organize = () => {

  return (
    <div className="organise">
      <Navigation />
      <div className="">
        <div className="Titre">
          <h1>Ce soir c'est chez : Léo</h1>
        </div>
        <div className="nomsoiréeBlame">
          <h2>Nom soirée : </h2>
          <input placeholder=" Soirée 30 ans de Léo..." />
        </div>
        <div className="nombreBlame">
          <h2>Nombre blame / pers : </h2>
          <input placeholder=" .......... " />
        </div>
      </div>
    </div>
  );
};

export default Organize;
