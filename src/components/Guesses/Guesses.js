import React from "react";
import Guess from "../Guess/Guess";

function Guesses({ guesses, answer }) {
  return (
    <ul className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <li key={index} className="guess">
            <Guess guess={guess} answer={answer} />
          </li>
        );
      })}
    </ul>
  );
}

export default Guesses;
