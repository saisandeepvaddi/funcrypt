import { database } from "../firebase";
import defaultKeyboard from "../keys";
import {
  CHANGE_KEYBOARD,
  CHANGE_TEMP_KEYBOARD,
  CHANGE_SINGLE_KEY,
  CHANGE_CURRENT_KEYBOARD
} from "../constants";

const defaultKeyboardId = "00001111";

const registerNewKeyboard = async (uid, keyboardId, keyboard) => {
  const keyboardsDataRef = database.ref("/keyboards");
  const keyboardUserRef = keyboardsDataRef.child(uid);
  const keyboardRef = keyboardUserRef.child(keyboardId);
  await keyboardRef.update(keyboard);
};

export const changeSingleKeyAction = (englishKey, newKey) => {
  return {
    type: CHANGE_SINGLE_KEY,
    englishKey,
    newKey: String(newKey)
  };
};

export const changeKeyboardAction = (keyboardId, keys) => {
  return {
    type: CHANGE_KEYBOARD,
    keyboardId,
    keys
  };
};

export const makeTempKeyboardPermanentAction = () => {
  return async (dispatch, getState) => {
    const { tempKeyboard, keyboardId } = getState().keyboard;
    const { auth: { user } } = getState();
    await registerNewKeyboard(user.uid, keyboardId, tempKeyboard);
    dispatch({
      type: CHANGE_CURRENT_KEYBOARD,
      keyboardId: keyboardId,
      keys: tempKeyboard
    });
  };
};

export const changeTempKeyboardAction = keys => {
  return {
    type: CHANGE_TEMP_KEYBOARD,
    keys
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
        dispatch(changeKeyboardAction(defaultKeyboardId, snapshot.val()));
        return;
      }
      defaultKeyboardRef.set(defaultKeyboard);
      dispatch(changeKeyboardAction(defaultKeyboardId, defaultKeyboard));
    });
  };
};
