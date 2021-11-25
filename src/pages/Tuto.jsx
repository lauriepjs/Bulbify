import React from "react";
import Navigation from "../components/Navigation";

const Tuto = () => {
  return (
    <div>
      <Navigation />
      <h1>Première fois sur le site ?</h1>
      <h2>N'aie pas d'inquiètudes ! C'est très simple.</h2>
      <p>Marre de toute ces soirées ou c'est tout le temps le même qui met sa musique ?
        Envie de rajouter un peu de fun dans tes futures soirées ?
        Tu es au bon endroit !
        <br />
        Etape 1 : Le créateur de la soirée est invité à créer un lien en ajoutant tout d'abord son nom, 
        ainsi que le nom de la future soirée.
        Ce lien peut être aussitôt disponible pour tout les potes qui seront conviés à l'evenement.
        <br />
        Etape 2 : Les invités doivent chacun se rendre sur le lien et renseigner 3 artistes dont ils saignent les sons.
        <br />
        Etape 3 (la meilleure) : le jour J, l'organisateur peut ainsi lancer la playlist basée sur les gouts des uns et des autres, 
        générée par leurs différents goûts musicaux.
        <br />
        Aussi, si un son n'est vraiment pas de votre gout, vous aurez la possibilité de voter directement sur l'application
        pour passer au suivant. (Courage aux fans de K-Pop...)
      </p>
    </div>
  );
};

export default Tuto;
