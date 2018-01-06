import { combineReducers } from "redux";
import keyboard from "./keyboard";
import auth from "./auth";

export default combineReducers({
  keyboard,
  auth
});
