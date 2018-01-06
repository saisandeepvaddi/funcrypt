import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB0XhzKKwGz8ziRjGpVm84zHmSwkhv5RnE",
  authDomain: "funcrypt-16530.firebaseapp.com",
  databaseURL: "https://funcrypt-16530.firebaseio.com",
  projectId: "funcrypt-16530",
  storageBucket: "",
  messagingSenderId: "1077239996969"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
