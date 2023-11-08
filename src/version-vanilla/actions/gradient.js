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

export const changeLastColor = (colorValue) => ({
  type: CHANGE_LAST_COLOR,
  color: colorValue,
});

export const changeDirection = (directionValue) => ({
  type: CHANGE_DIRECTION,
  direction: directionValue,
});
