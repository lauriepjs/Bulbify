import React from "react";
import Navigation from "../components/Navigation";

const Tuto = () => {
  return (
    <div className="tutoriel">
      <Navigation />
      <h1 className="h1">Première fois sur le site ?</h1>
      <h2 className="h2">N'aie pas d'inquiètudes ! C'est très simple.</h2>
      <p className="p">
        Marre de ces soirées où c'est toujours la même personne qui passe sa
        musique ? Envie d'y rajouter ta touche musicale ? Tu es au bon endroit !
        <br />
        Étape 1 : Le créateur de la soirée est invité à créer un lien en
        ajoutant tout d'abord son nom, ainsi que le nom de la future soirée. Ce
        lien pourra être aussitôt partagé aux invités de l'évènement.
        <br />
        Étape 2 : Chaque invité doit copier le lien, se rendre sur l'onglet "je
        rejoins" et renseigner 3 artistes dont ils saignent les sons.
        <br />
        Étape 3 : (la meilleure) : L'organisateur peut enfin lancer la playlist
        générée en fonction des gouts musicaux des uns et des autres.
        <br />
        Aussi, si un son n'est vraiment pas du goût de l'un des participants, il
        aura la possibilité de voter pour passer à la musique suivante (Courage
        aux fans de K-Pop...).
      </p>
    </div>
  );
};

export default Tuto;
