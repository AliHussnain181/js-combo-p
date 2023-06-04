import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleStarClick = (star) => {
    setSelectedStars(star);
  };

  const handleStarHover = (star) => {
    setHoveredStar(star);
  };

  const handleStarDrag = (star) => {
    if (dragging) {
      setSelectedStars(star);
    }
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="flex items-center"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isSelected = starValue <= selectedStars;
        const isHovered = starValue <= hoveredStar && !isSelected;
        const starColor = isSelected ? 'text-yellow-400' : isHovered ? 'text-gray-400' : 'text-gray-300';
        return (
          <div
            key={starValue}
            className="flex items-center"
            onMouseEnter={() => handleStarHover(starValue)}
            onMouseLeave={() => handleStarHover(0)}
            onMouseMove={(e) => handleStarDrag(Math.ceil(e.clientX / 32))}
            onClick={() => handleStarClick(starValue)}
          >
            <FaStar className={`text-2xl ${starColor}`} />
          </div>
        );
      })}
      <p className="ml-2">{selectedStars} of {totalStars} stars</p>
    </div>
  );
};

export default StarRating;
