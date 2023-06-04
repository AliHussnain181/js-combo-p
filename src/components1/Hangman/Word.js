import React from 'react';

const Word = ({ word, correctLetters }) => {
  const revealWord = word.split('').map((letter, index) => (
    <span
      key={index}
      className={`mr-1 p-1 text-xl border border-gray-300 rounded ${
        correctLetters.includes(letter) ? 'bg-green-300' : ''
      }`}
    >
      {correctLetters.includes(letter) ? letter : '_'}
    </span>
  ));

  return <div className="flex flex-wrap mt-4">{revealWord}</div>;
};

export default Word;
