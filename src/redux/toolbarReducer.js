import { TOGGLE_MENU } from './actions';

const initialState = {
  isMenuOpen: false,
};

const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};

export default toolbarReducer;