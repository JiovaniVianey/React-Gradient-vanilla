const initialState = {
  firstColor: 'yellow',
  lastColor: '#f0f',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  // console.log('action reçue par le reducer', action);

  // on indique le traitement à appliquer selon le type de l'action
  switch (action.type) {
    case 'CHANGE_DIRECTION':
      return {
        ...state,
        direction: action.direction,
      };

    case 'CHANGE_FIRST_COLOR':
      return {
        // copie des infos du state actuel
        ...state,
        // on fait une ou plusieurs modifications
        // - on peut récupérer une information qui est en payload de l'action
        firstColor: action.color,
        // - on peut se servir d'une information du state actuel pour construire
        // le nouveau state (attention à l'immutabilité)
        nbColors: state.nbColors + 1, // on augmente de 1
      };

    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    // pour l'initialisation du store avec le state initial
    default:
      return state;
  }
};
export default reducer;

/*
initialisation du store : le store appelle le reducer avec undefined pour le state et
une action INIT
  reducer(undefined, INIT)

=> dans le corps de la fonction, le paramètre state vaut la valeur par défaut, donc
_initialState_

=> donc quand on "return state", en fait on return le state initial (que le store va
stocker)
*/

/*
if (laVariable === 1) {
  console.log('A');
} else if (laVariable === 2) {
  console.log('B');
} else {
  console.log('C');
}

switch : aiguillage entre des traitements par rapport à la valeur d'une variable

switch (laVariable) {
  case 1: console.log('A');
  case 2: console.log('B');
  default: console.log('C');
}

(on parlera de "break" plus tard)
*/
