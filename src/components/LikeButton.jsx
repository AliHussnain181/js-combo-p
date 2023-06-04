import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prevLikes => prevLikes - 1);
    } else {
      setLikes(prevLikes => prevLikes + 1);
    }
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  return (
    <div className="flex items-center mx-auto">
      <button
        className="flex items-center justify-center mr-2 text-gray-500 hover:text-red-500 transition-colors"
        onClick={handleLike}
      >
        <FaHeart className={`mr-1 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
        <span>{likes}</span>
      </button>
      <span className="text-sm text-gray-500">Likes</span>
    </div>
  );
};

export default LikeButton;
