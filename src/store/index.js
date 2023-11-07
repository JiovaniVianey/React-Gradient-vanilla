// création du store
import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from './reducer';

// on crée l'améliorateur (enhancer) pour avoir le dev tool activé
const enhancer = devToolsEnhancer();

const store = createStore(
  // le reducer
  reducer,
  // le enhancer (améliorateur), ici pour activer le dev tool
  enhancer
);
export default store;
