import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  let letterArray = [];
  for (var i = 0; i < 5; i++) {
    letterArray[i] = guess
      ? checkGuess(guess, answer)[i]
      : { letter: "", status: "" };
  }

  return letterArray.map(({ letter, status }, index) => {
    return (
      <span className={`cell ${status}`} key={`guess-${index}`}>
        {letter}
      </span>
    );
  });
}

export default Guess;
