import { auth, googleAuthProvider, database } from "../firebase";
import { SIGN_IN, SIGN_OUT } from "../constants";
import pick from "lodash/pick";
import { registerDatabase } from "@firebase/database";
import { initKeyboard } from "./keyboard";

const userDetails = user => {
  return { type: SIGN_IN, payload: user };
};

const registerUserInDataBase = user => {
  const usersRef = database.ref("/users");
  const userRef = usersRef.child(user.uid);
  userRef.once("value").then(snapshot => {
    if (snapshot.val()) return;
    const userData = pick(user, ["displayName", "photoURL", "email"]);
    userRef.set(userData);
  });
};

export const initAuth = () => {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        registerUserInDataBase(user);
        dispatch(userDetails(user));
        dispatch(initKeyboard());
      }
    });
  };
};

export const signInAction = () => {
  return dispatch => {
    if (!auth.currentUser) {
      auth
        .signInWithPopup(googleAuthProvider)
        .then(result => {
          const user = result.user;
          registerUserInDataBase(user);
          dispatch(userDetails(user));
          dispatch(initKeyboard());
        })
        .catch(err => {
          console.error(`Error Signing in: ${err.message}`);
        });
    } else {
      dispatch(userDetails(auth.currentUser));
    }
  };
};

export const signOutAction = () => {
  return dispatch => {
    auth.signOut();
    dispatch({
      type: SIGN_OUT
    });
  };
};
