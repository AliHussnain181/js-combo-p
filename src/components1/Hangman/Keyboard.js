// Keyboard.js

import React from 'react';

const Keyboard = ({ handleLetterClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="flex flex-wrap justify-center">
      {alphabet.split('').map((letter, index) => (
        <button
          key={index}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
