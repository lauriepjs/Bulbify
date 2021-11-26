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
        <TextField id="outlined-basic" label="Donne moi un artiste!" variant="outlined" />
        <TextField id="outlined-basic" label="Aller un autre !" variant="outlined" />
        <TextField id="outlined-basic" label="Un dernier pour la route !" variant="outlined" />
        </form>
      </div>
      <div className="buttonvalidemusique">
        <NavLink exact to="/joue">
          <button className="buttonvalide"> Je valide ma liste</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Join;
