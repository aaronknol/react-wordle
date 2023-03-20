import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, disableInput }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    handleSubmitGuess(value);
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value.toUpperCase());
        }}
        pattern="[A-Z]{5,5}"
        disabled={disableInput}
      />
    </form>
  );
}

export default GuessInput;
