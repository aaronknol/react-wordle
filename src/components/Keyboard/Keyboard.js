import React from "react";

function Keyboard({ letters }) {
  return (
    <div className="keyboard">
      {letters.map((letter) => {
        return (
          <div
            key={letter.letter}
            type="button"
            className={`keyboard-letter ${letter.status}`}
          >
            {letter.letter}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
