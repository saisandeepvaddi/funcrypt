import { auth, database } from "../firebase";
import defaultKeyboard from "../keys";
import { CHANGE_KEYBOARD } from "../constants";

const defaultKeyboardId = "00001111";

const registerNewKeyboard = (keyboardId, keyboard) => {};

const changeKeyboard = (keyboardId, keyboard) => {
  return {
    type: CHANGE_KEYBOARD,
    keyboardId,
    keyboard
  };
};

export const initKeyboard = () => {
  return (dispatch, getState) => {
    const { auth: { user } } = getState();
    const keyboardRef = database.ref("/keyboards");
    const keyboardUserRef = keyboardRef.child(user.uid);
    const defaultKeyboardRef = keyboardUserRef.child(defaultKeyboardId);
    defaultKeyboardRef.once("value", snapshot => {
      if (snapshot.val()) {
        console.log(`Already has a keyboard. Setting that...`);
        dispatch(changeKeyboard(defaultKeyboardId, defaultKeyboard));
        return;
      }
      defaultKeyboardRef.set(defaultKeyboard);
      dispatch(changeKeyboard(defaultKeyboardId, defaultKeyboard));
    });
  };
};
