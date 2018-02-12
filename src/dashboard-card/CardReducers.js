import types from './CardTypes';

const initialState = {
  open: false,
  cards: [],
};

const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MENU:
      return {
        ...state,
        anchorEl: action.anchorEl,
      };
    case types.CLOSE_MENU:
      return {
        ...state,
        open: false,
      };
    case types.DELETE_CARD:
      return state;
    default:
      return state;
  }
};

export default cardReducers;
