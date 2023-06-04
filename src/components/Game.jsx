import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createBoard, checkCollision,useInterval } from './utils';
// import { useInterval } from './hooks';

const TetrisGame = () => {
  const [board, setBoard] = useState(createBoard());
  const [player, setPlayer] = useState({ position: { x: 0, y: 0 }, tetromino: null });
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const boardRef = useRef(board);

  useEffect(() => {
    boardRef.current = board;
  }, [board]);

  const movePlayer = (direction) => {
    if (!checkCollision(player, board, { x: direction, y: 0 })) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        position: { x: prevPlayer.position.x + direction, y: prevPlayer.position.y },
      }));
    }
  };

  const startGame = useCallback(() => {
    setBoard(createBoard());
    setPlayer({ position: { x: 0, y: 0 }, tetromino: null });
    setIsGameOver(false);
    setScore(0);
  }, []);

  const dropPlayer = () => {
    if (!checkCollision(player, boardRef.current, { x: 0, y: 1 })) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        position: { x: prevPlayer.position.x, y: prevPlayer.position.y + 1 },
      }));
    } else {
      if (player.position.y < 1) {
        setIsGameOver(true);
      }
      mergePlayerWithBoard();
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        position: { x: 0, y: 0 },
        tetromino: null,
      }));
    }
  };

  const mergePlayerWithBoard = () => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newBoard[y + player.position.y][x + player.position.x] = value;
          }
        });
      });
      return newBoard;
    });
    clearLines();
  };

  const clearLines = () => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.reduce((acc, row) => {
        if (row.every((value) => value !== 0)) {
          setScore((prevScore) => prevScore + 10);
          acc.unshift(new Array(row.length).fill(0));
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);
      return newBoard;
    });
  };

  const rotatePlayer = (matrix, direction) => {
    const rotatedTetromino = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (direction > 0) {
      return rotatedTetromino.map((row) => row.reverse());
    }
    return rotatedTetromino.reverse();
  };

  const handleKeyPress = useCallback((event) => {
    if (!isGameOver) {
      if (event.key === 'ArrowLeft') {
        movePlayer(-1);
      } else if (event.key === 'ArrowRight') {
        movePlayer(1);
      } else if (event.key === 'ArrowDown') {
        dropPlayer();
      } else if (event.key === 'ArrowUp') {
        rotatePlayer(player.tetromino, 1);
      }
    }
  }, [isGameOver, movePlayer, dropPlayer, rotatePlayer, player.tetromino]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useInterval(() => {
    dropPlayer();
  }, 1000);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-300 rounded p-4">
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Tetris Game</h2>
            <p className="text-sm text-gray-500">Score: {score}</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded" onClick={startGame}>
            Start Game
          </button>
        </div>
        <div className="flex">
          <div className="mr-8">
            <div className="grid grid-cols-10 gap-1">
              {board.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}${colIndex}`}
                    className={`w-8 h-8 border border-gray-300 ${cell !== 0 ? 'bg-blue-500' : ''}`}
                  />
                ))
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-1">
              {player.tetromino && player.tetromino.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}${colIndex}`}
                    className={`w-8 h-8 border border-gray-300 ${cell !== 0 ? 'bg-blue-500' : ''}`}
                  />
                ))
              ))}
            </div>
            {isGameOver && (
              <p className="text-red-500 text-center">Game Over</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TetrisGame;
