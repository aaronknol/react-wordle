import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  // console.log("guess: ", guess);

  let letterArray = [];
  for (var i = 0; i < 5; i++) {
    letterArray[i] =
      guess.length > 1
        ? checkGuess(guess, answer)[i]
        : { letter: "", status: "" };
  }

  return letterArray.map((letter, index) => {
    return (
      <span className={`cell ${letter.status}`} key={`guess-${index}`}>
        {letter.letter}
      </span>
    );
  });
}

export default Guess;
