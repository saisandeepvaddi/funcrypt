import React from "react";
import Field from "./Field";

const Alphabet = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  return (
    <div className="Config--Alphabet--container">
      {alphabet.map(alpha => <Field key={alpha} character={alpha} />)}
    </div>
  );
};

export default Alphabet;
