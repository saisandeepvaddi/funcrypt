import {
  CHANGE_KEYBOARD,
  CHANGE_TEMP_KEYBOARD,
  CHANGE_SINGLE_KEY,
  CHANGE_CURRENT_KEYBOARD,
  TOGGLE_KEYBOARD
} from "../constants";
const INITIAL_STATE = {
  showKeyboard: false,
  keyboardId: ""
};

const keyboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_KEYBOARD:
      return { ...state, keyboardId: action.keyboardId, keys: action.keys };
    case CHANGE_TEMP_KEYBOARD:
      return { ...state, tempKeyboard: action.keys };
    case CHANGE_SINGLE_KEY:
      return {
        ...state,
        tempKeyboard: {
          ...state.tempKeyboard,
          [action.englishKey]: action.newKey
        }
      };
    case CHANGE_CURRENT_KEYBOARD:
      return {
        ...state,
        keys: {
          ...state.keys,
          ...action.keys
        }
      };
    case TOGGLE_KEYBOARD:
      return {
        ...state,
        showKeyboard: !state.showKeyboard
      };
    default:
      return state;
  }
};

export default keyboardReducer;
