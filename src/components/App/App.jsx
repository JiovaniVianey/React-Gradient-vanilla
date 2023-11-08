import ColorButtons from '../ColorButtons/ColorButtons';
import Counter from '../Counter/Counter';
import Gradient from '../Gradient/Gradient';
import DirectionButtons from '../DirectionButtons/DirectionButtons';
import './App.scss';

/* Plan d'action pour avoir un générateur de dégradé en React :
- intégration statique et mise en place des composants (on garde le SCSS qu'on
avait dans la version vanilla) => pas de traitement sur les boutons
- dynamisation avec les interactions utilisateur (clic sur les boutons) => il
nous faudra un state parce que les couleurs et direction changent au fil du
temps (mise en place d'un store Redux et utilisation avec les composants React)
*/

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorButtons />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}

export default App;
