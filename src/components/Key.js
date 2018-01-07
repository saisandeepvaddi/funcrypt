import React from "react";
import { connect } from "react-redux";

const Key = ({ signedIn, keyboard, char }) => {
  if (!signedIn || keyboard.keys === undefined) {
    return null;
  }

  return (
    <div style={keyStyle}>
      <div>{char}</div>
      <div>{keyboard.keys[char]}</div>
    </div>
  );
};

const keyStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50px",
  height: "50px",
  border: "1px solid magenta",
  alignItems: "center",
  justifyContent: "center",
  background: "lightyellow"
};

const mapStateToProps = ({ auth, keyboard }) => {
  const { signedIn } = auth;

  return { signedIn, keyboard };
};

export default connect(mapStateToProps)(Key);
