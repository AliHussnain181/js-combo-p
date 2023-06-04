// utils.js
import { useEffect, useRef } from 'react';

export const createBoard = () => {
    const rows = 20;
    const cols = 10;
    const board = [];
    for (let row = 0; row < rows; row++) {
      board.push(Array(cols).fill(0));
    }
    return board;
  };
  
  export const checkCollision = (player, board, { x: moveX, y: moveY }) => {
    const tetromino = player.tetromino;
    const position = player.position;
    for (let row = 0; row < tetromino.length; row++) {
      for (let col = 0; col < tetromino[row].length; col++) {
        if (tetromino[row][col] !== 0) {
          if (
            !board[row + position.y + moveY] ||
            !board[row + position.y + moveY][col + position.x + moveX] ||
            board[row + position.y + moveY][col + position.x + moveX] !== 0
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  
  // hooks.js
  
  export const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
  
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  