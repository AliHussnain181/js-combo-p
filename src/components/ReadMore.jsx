import React, { useState } from 'react';

const ReadMoreComponent = () => {
  const [showFullText, setShowFullText] = useState(false);
  const wordLimit = 30;

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  const text = "Once upon a time, in a lush green forest, there lived a clever and mischievous crow named Charlie. Charlie was no ordinary crow; he possessed an extraordinary intelligence and a knack for solving problemsOne sunny morning as Charlie flew across the forest he spotted a group of animals gathered around a small pond.Curiosity piqued Charlie decided to investigate and landed on a nearby tree branch to observe.To his surprise, he discovered that the animals were in great distress.Their drinking water had been contaminated by a fallen tree, and they were desperately searching for a solution.Charlie knew he had to help.With a flutter of his wings, he descended to the ground and approached the animals."


  const words = text.split(' ');
  const truncatedText = words.slice(0, wordLimit).join(' ');

  return (
    <div className="p-4">
      {showFullText ? (
        <p className="text-lg">
          {text}{' '}
          {words.length > wordLimit && (
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={handleClick}
            >
              Read Less
            </button>
          )}
        </p>
      ) : (
        <p className="text-lg">
          {truncatedText}{' '}
          {words.length > wordLimit && (
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={handleClick}
            >
              Read More
            </button>
          )}
        </p>
      )}
    </div>
  );
};

export default ReadMoreComponent;
