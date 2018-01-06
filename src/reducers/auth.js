import { SIGN_IN, SIGN_OUT } from "../constants";
import { auth } from "../firebase";

const INITIAL_STATE = {
  signedIn: auth.currentUser ? true : false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signedIn: true,
        user: action.payload
      };
    case SIGN_OUT: {
      return {
        ...state,
        signedIn: false
      };
    }
    default:
      return state;
  }
};

export default authReducer;
