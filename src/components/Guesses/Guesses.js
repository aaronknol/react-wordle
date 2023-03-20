import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Guesses({ guesses, answer }) {
  return (
    <ul className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
        return (
          <li key={index} className="guess">
            <Guess guess={guesses[num]} answer={answer} />
          </li>
        );
      })}
    </ul>
  );
}

export default Guesses;
