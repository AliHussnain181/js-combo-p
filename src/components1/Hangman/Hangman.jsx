// App.js

import React, { useState, useEffect } from 'react';
import HangmanCanvas from './HangmanCanvas';
import Keyboard from './Keyboard';
import Word from './Word';
import WrongLetters from './WrongLetters';

const Hangman = () => {
  const words = ['hangman', 'react', 'javascript', 'openai', 'developer'];
  const maxAttempts = 6;

  const [word, setWord] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
  }, []);

  useEffect(() => {
    const checkGameOver = () => {
      if (wrongLetters.length >= maxAttempts) {
        setGameOver(true);
      }
    };

    const checkWin = () => {
      const revealedWord = word
        .split('')
        .filter((letter) => correctLetters.includes(letter));

      if (revealedWord.length === word.length) {
        setWin(true);
      }
    };

    checkGameOver();
    checkWin();
  }, [correctLetters, wrongLetters, word]);

  const handleLetterClick = (letter) => {
    if (!gameOver && !correctLetters.includes(letter) && !wrongLetters.includes(letter)) {
      if (word.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setWrongLetters([...wrongLetters, letter]);
      }
    }
  };

  const handleRestart = () => {
    setWord('');
    setCorrectLetters([]);
    setWrongLetters([]);
    setGameOver(false);
    setWin(false);

    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 overflow-hidden">Hangman Game</h1>
      <div className="flex flex-col items-center">
        <HangmanCanvas wrongLetters={wrongLetters} />
        <Word word={word} correctLetters={correctLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        {!gameOver && !win && <Keyboard handleLetterClick={handleLetterClick} />}
        {gameOver && <p className="text-red-500">Game Over! The word was: {word}</p>}
        {win && <p className="text-green-500">You won!</p>}
        {(gameOver || win) && (
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleRestart}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default Hangman;
