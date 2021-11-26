import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { TextField } from '@mui/material';

const Join = () => {
  const [searchArtist, setSearchArtist] = useState([]);

  const handleSearchArtist = (e) => {
    setSearchArtist(e.target.value);
  }

  return (
    <div className="jerejoins">
      <Navigation />
      <div className="titrejoins">
        <h2>Ce soir chez Léo</h2>
        <h3>Propose ton son !</h3>
      </div>
      <div className="inputs">
        <form action="" method="get" onSubmit={handleSearchArtist}>

        <input  className="donneartiste" placeholder=" Donne moi un artiste !" />

        </form>
      </div>
      <div className="buttonvalidemusique">
        <NavLink exact to="/joue">
          <button className="buttonvalide" onSubmit={handleSearchArtist}> Je valide ma liste</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Join;
