// HangmanCanvas.js

import React, { useEffect, useRef } from 'react';

const HangmanCanvas = ({ wrongLetters }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the hangman figure based on the number of wrong letters
    // You can customize the figure here using the HTML canvas API

    // Head
    ctx.beginPath();
    ctx.arc(150, 50, 25, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    if (wrongLetters.length > 0) {
      ctx.moveTo(150, 75);
      ctx.lineTo(150, 150);
      ctx.stroke();
    }

    // Left arm
    if (wrongLetters.length > 1) {
      ctx.moveTo(150, 85);
      ctx.lineTo(125, 100);
      ctx.stroke();
    }

    // Right arm
    if (wrongLetters.length > 2) {
      ctx.moveTo(150, 85);
      ctx.lineTo(175, 100);
      ctx.stroke();
    }

    // Left leg
    if (wrongLetters.length > 3) {
      ctx.moveTo(150, 150);
      ctx.lineTo(125, 175);
      ctx.stroke();
    }

    // Right leg
    if (wrongLetters.length > 4) {
      ctx.moveTo(150, 150);
      ctx.lineTo(175, 175);
      ctx.stroke();
    }
  }, [wrongLetters]);

  return (
    <canvas ref={canvasRef} width="300" height="200"></canvas>
  );
};

export default HangmanCanvas;
