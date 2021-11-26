import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Join = () => {
  const [searchArtist, setSearchArtist] = useState('');

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
      <div className="input">
        <input placeholder="Tape ton son .." value={searchArtist} onChange={handleSearchArtist}/>
      </div>
      <div className="pochetteAlbum">
        <p>photo pochette album</p>
        <p>photo pochette album</p>
        <p>photo pochette album</p>
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
