import React, { useState } from 'react';

const Vote = () => {
  const [count, setCount] = useState(0);

  const handleVote = (type) => {
    if (type === 'up') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Vote for your favorite</h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleVote('up')}
        >
          Upvote
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleVote('down')}
        >
          Downvote
        </button>
      </div>
    </div>
  );
};

export default Vote;
