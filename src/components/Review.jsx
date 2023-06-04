import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const reviews = [
    {
      name: 'John Doe',
      comment: 'Great product!',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Jane Smith',
      comment: 'Excellent service!',
      image: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    // Add more review objects as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = reviews.length - 1;
      return prevIndex === lastIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = reviews.length - 1;
      return prevIndex === 0 ? lastIndex : prevIndex - 1;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-2/3 sm:w-1/2 lg:w-1/3">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-md"
          onClick={prevSlide}
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-md"
          onClick={nextSlide}
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-auto"
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            {reviews[currentIndex].name}
          </h3>
          <p className="text-gray-600">{reviews[currentIndex].comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
