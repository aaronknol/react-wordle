import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess }) {
  return range(5).map((index) => {
    return guess ? (
      <span className={`cell ${guess[index].status}`} key={`guess-${index}`}>
        {guess[index].letter}
      </span>
    ) : (
      <span className={`cell`} key={`guess-${index}`}></span>
    );
  });
}

export default Guess;
