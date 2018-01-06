import { database } from "../firebase";

export const initKeyboard = () => {
  return (dispatch, getState) => {
    const { auth } = getState();
    console.log(`Trying`);

    if (auth.user) {
      const uid = auth.user.uid;
      console.log(uid);
    } else {
      console.log(`User Not Logged In`);
    }
  };
};
