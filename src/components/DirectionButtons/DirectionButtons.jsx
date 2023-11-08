import { useDispatch } from 'react-redux';
import { changeDirection } from '../../actions/gradient';

const DirectionButtons = () => {
  const dispatch = useDispatch();

  console.log('rendu de DirectionButtons');

  return (
    <div className="buttons group">
      <button
        className="button"
        id="toLeft"
        type="button"
        onClick={() => {
          const action = changeDirection('270deg');
          dispatch(action);
        }}
      >
        to left
      </button>
      <button
        className="button"
        id="toRight"
        type="button"
        onClick={() => {
          const action = changeDirection('90deg');
          dispatch(action);
        }}
      >
        to right
      </button>
    </div>
  );
};

export default DirectionButtons;
