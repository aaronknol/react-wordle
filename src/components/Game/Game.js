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
  const [guesses, setGuesses] = useState(range(NUM_OF_GUESSES_ALLOWED));
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [guessWasCorrect, setGuessWasCorrect] = useState(false);

  const [letters, setLetters] = useState([...initialLetters]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses];
    nextGuesses[numOfGuesses] = guess;

    if (guess === answer) {
      setGuessWasCorrect(true);
    }

    setGuesses(nextGuesses);
    setNumOfGuesses(numOfGuesses + 1);
    guessedLetters(guess);
  }

  function guessedLetters(guess) {
    const checkedGuess = checkGuess(guess, answer);

    letters.forEach((letter, index) => {
      const target = checkedGuess.filter(
        (checkedLetter) => checkedLetter.letter === letter.letter
      );
      if (target.length > 0) {
        const nextLetters = [...letters];
        nextLetters[index].status = target[0].status;
        setLetters(nextLetters);
      }
    });
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses(range(NUM_OF_GUESSES_ALLOWED));
    setNumOfGuesses(0);
    setGuessWasCorrect(false);

    setLetters(initialLetters);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disableInput={guessWasCorrect}
      />
      {guessWasCorrect && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
          <button type="button" onClick={restartGame}>
            Play again
          </button>
        </div>
      )}

      {guesses.length === numOfGuesses && !guessWasCorrect && (
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
