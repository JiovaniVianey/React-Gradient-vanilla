// annuaire des actions
// ===== action type
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// ===== action creator
// une fonction qui nous facilite la création d'une action de type CHANGE_FIRST_COLOR
export const changeFirstColor = (colorValue) => ({
  type: CHANGE_FIRST_COLOR,
  color: colorValue,
});

// le nom du (des) paramètre(s) est utilisé uniquement à l'intérieur de la fonction
export const changeLastColor = (newColor) => ({
  type: CHANGE_LAST_COLOR,
  // le nom des infos de payload doit être cohérent avec le reducer (ici on fait
  // exprès de l'appeler 'toto')
  toto: newColor,
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  newDirection: direction,
});
