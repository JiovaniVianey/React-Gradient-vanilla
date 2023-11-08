import { useSelector } from 'react-redux';

const Gradient = () => {
  // const firstColor = useSelector(fonctionDeSelection);
  // => react-redux va appeler cette fonction en fournissant le state en argument
  const firstColor = useSelector((state) => state.firstColor);

  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);

  // => le composant Gradient refait son rendu automatiquement si firstColor ou
  // lastColor ou direction change dans le state

  // si on avait essayé de mutualiser :
  // const stateComplet = useSelector((state) => state);
  // => dommage, le composant Gradient referait son rendu chaque fois que
  // n'importe quelle information du state change, ça casse les optimisations de
  // performance de react-redux.

  // on construit un objet Javascript pour le style inline du premier span
  // => ce sera traduit en CSS pour le navigateur : <span style="color: blue;">
  const styleFirstSpan = {
    color: firstColor,
  };

  console.log('rendu de Gradient');

  return (
    <>
      <div id="colors">
        <span style={styleFirstSpan}>{firstColor}</span> -{' '}
        <span
          style={{
            color: lastColor,
          }}
        >
          {lastColor}
        </span>
      </div>
      <div
        id="gradient"
        style={{
          background: `linear-gradient(${direction},${firstColor},${lastColor})`,
        }}
      />
    </>
  );
};

export default Gradient;
