// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import './styles/index.scss';

import store from './store';

// console.log(store);
// console.log(store.getState());

// Objectif : placer le state dans un store Redux (pour découvrir le vocabulaire
// de Redux) et se servir du state, le lire et le modifier

// == Rendu dans le DOM
// faire le rendu du compteur (remplir le DOM)

function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

// remplir le DOM pour le dégradé
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  // https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}

// remplir le DOM pour la partie affichage des couleurs
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// on veut que l'affichage soit mis à jour automatiquement quand le state change
// (plus précisément, quand store.dispatch a été appelé)
// => on s'abonne aux changements pour déclencher automatiquement un traitement
// on fournit en argument une callback
store.subscribe(() => {
  // console.log('déclenchement du traitement subscribe');

  // ici le traitement à appliquer après chaque changement du state
  // = reconstruire l'affichage dans notre cas
  renderNbColors();
  renderGradient();
  renderColors();
});
// c'est un peu comme si on avait un addEventListener pour les changements du state

// == Controls
document.getElementById('randAll').addEventListener('click', () => {
  // debug
  // console.log('Random all colors');

  // data
  // traitement équivalent à cliquer sur 'random first' et 'random last' : on
  // appelle ces deux traitements en faisant 2 dispatch (pas besoin de modifier
  // le reducer)
  const actionFirst = {
    type: 'CHANGE_FIRST_COLOR',
    // bien respecter les noms de payload attendus par le reducer
    color: randomHexColor(),
  };
  store.dispatch(actionFirst);

  const actionLast = {
    type: 'CHANGE_LAST_COLOR',
    color: randomHexColor(),
  };
  store.dispatch(actionLast);
});

document.getElementById('randFirst').addEventListener('click', () => {
  const newColor = randomHexColor();

  const action = {
    type: 'CHANGE_FIRST_COLOR',
    color: newColor,
  };
  /*
  L'intention CHANGE_FIRST_COLOR ne suffit pas, on fournit la couleur à utiliser
  */

  store.dispatch(action);
});

document.getElementById('randLast').addEventListener('click', () => {
  const newColor = randomHexColor();

  const action = {
    type: 'CHANGE_LAST_COLOR',
    color: newColor,
  };

  store.dispatch(action);

  /* sans variables intermédiaires
  store.dispatch({
    type: 'CHANGE_LAST_COLOR',
    color: randomHexColor(),
  });
  */
});

document.getElementById('toLeft').addEventListener('click', () => {
  // "store, s'il te plaît, change la direction pour aller vers la gauche"

  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '90deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});

document.getElementById('toRight').addEventListener('click', () => {
  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '270deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});

document.getElementById('to45Degrees').addEventListener('click', () => {
  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '45deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});

document.getElementById('to135Degrees').addEventListener('click', () => {
  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '135deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});

document.getElementById('to225Degrees').addEventListener('click', () => {
  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '225deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});

document.getElementById('to315Degrees').addEventListener('click', () => {
  // on construit une action
  const action = {
    type: 'CHANGE_DIRECTION',
    direction: '315deg',
  };

  // on l'envoie au store
  store.dispatch(action);
});
