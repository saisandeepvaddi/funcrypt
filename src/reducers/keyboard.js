import { CHANGE_KEYBOARD } from "../constants";
const INITIAL_STATE = {
  keyboardId: ""
};

const keyboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_KEYBOARD:
      return {
        ...state,
        keyboardId: action.keyboardId,
        keyboard: action.keyboard
      };
      break;

    default:
      return state;
  }
};

export default keyboardReducer;
