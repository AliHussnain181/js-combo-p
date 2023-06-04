// WrongLetters.js

import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div>
      <p>Wrong Letters:</p>
      <p>{wrongLetters.join(', ')}</p>
    </div>
  );
};

export default WrongLetters;
