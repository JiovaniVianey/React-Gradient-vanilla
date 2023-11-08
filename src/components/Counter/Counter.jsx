// Objectif : le Counter doit lire nbColors dans le state
import { useSelector } from 'react-redux';

const Counter = () => {
  // sélecteur : fonction qui prend en paramètre le state et retourne (sélectionne)
  // l'info du state dont on a besoin

  // ---- première version
  // const selectNbColors = (state) => {
  //   return state.nbColors;
  // };

  // --- deuxième version, avec return implicite
  // const selectNbColors = (state) => state.nbColors;

  // --- troisième version : on fournit directement la définition de la fonction
  // à useSelector
  const nbColorsFromState = useSelector((state) => state.nbColors);

  // on lit la valeur de nbColors dans le state ET on s'abonne aux modifications de
  // cette information du state => si nbColors change dans le state, le composant
  // NbColors refait son rendu automatiquement. Mais il ne fait pas de rendu si
  // firstColor qui change

  console.log('rendu de Counter');

  return <div id="nbColors">{nbColorsFromState} couleur(s) générée(s)</div>;
};

export default Counter;
