import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

const NUM_OF_GUESSES_ALLOWED = 6;

function Game() {
  const initialLetters = [
    {
      letter: "Q",
      status: "",
    },
    {
      letter: "W",
      status: "",
    },
    {
      letter: "E",
      status: "",
    },
    {
      letter: "R",
      status: "",
    },
    {
      letter: "T",
      status: "",
    },
    {
      letter: "Y",
      status: "",
    },
    {
      letter: "U",
      status: "",
    },
    {
      letter: "I",
      status: "",
    },
    {
      letter: "O",
      status: "",
    },
    {
      letter: "P",
      status: "",
    },
    {
      letter: "A",
      status: "",
    },
    {
      letter: "S",
      status: "",
    },
    {
      letter: "D",
      status: "",
    },
    {
      letter: "F",
      status: "",
    },
    {
      letter: "G",
      status: "",
    },
    {
      letter: "H",
      status: "",
    },
    {
      letter: "J",
      status: "",
    },
    {
      letter: "K",
      status: "",
    },
    {
      letter: "L",
      status: "",
    },
    {
      letter: "Z",
      status: "",
    },
    {
      letter: "X",
      status: "",
    },
    {
      letter: "C",
      status: "",
    },
    {
      letter: "V",
      status: "",
    },
    {
      letter: "B",
      status: "",
    },
    {
      letter: "N",
      status: "",
    },
    {
      letter: "M",
      status: "",
    },
  ];
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);

  const [gameStatus, setGameStatus] = useState("running");

  const [letters, setLetters] = useState([...initialLetters]);
  function handleSubmitGuess(guess) {
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    guessedLetters(guess);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function guessedLetters(guess) {
    const checkedGuess = checkGuess(guess, answer);

    checkedGuess.forEach((obj) => {
      const theIndex = letters.findIndex(
        (current) => current.letter === obj.letter
      );
      let newLetters = letters;
      newLetters[theIndex] = obj;
      setLetters(newLetters);
    });
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
    setLetters(initialLetters);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disableInput={gameStatus !== "running"}
      />
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
            </strong>
          </p>
          <button type="button" onClick={restartGame}>
            Play again
          </button>
        </div>
      )}

      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button type="button" onClick={restartGame}>
            Play again
          </button>
        </div>
      )}

      <Keyboard letters={letters} />
    </>
  );
}

export default Game;
