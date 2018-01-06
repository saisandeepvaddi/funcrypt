import React from "react";
import Field from "./Field";

const Numbers = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="Config--Numbers--container">
      {digits.map(digit => <Field key={digit} character={digit} />)}
    </div>
  );
};

export default Numbers;
