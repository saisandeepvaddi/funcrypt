import React, { Component } from "react";
import chars from "../keys";
import Key from "./Key";

class Keyboard extends Component {
  render() {
    const keyboardBoxes = Object.keys(chars).map((char, i) => (
      <Key key={i} char={char} />
    ));
    return <div className="Keyboard--keyboard">{keyboardBoxes}</div>;
  }
}

export default Keyboard;
