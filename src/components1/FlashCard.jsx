import React, { useState } from "react";

const FlashcardApp = () => {
  const flashcardsData = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the symbol for potassium on the periodic table?",
      answer: "K"
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest"
    }
  ];

  const [flashcards, setFlashcards] = useState(flashcardsData);
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard === flashcards.length - 1 ? 0 : prevCard + 1));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 overflow-hidden">Flashcard App</h1>
      {flashcards.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="text-lg mb-4">
            {showAnswer ? flashcards[currentCard].answer : flashcards[currentCard].question}
          </div>
          <button
            onClick={handleCardClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            {showAnswer ? "Show Question" : "Show Answer"}
          </button>
          <button
            onClick={handleNextCard}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded ml-2"
          >
            Next Card
          </button>
        </div>
      ) : (
        <div>Loading flashcards...</div>
      )}
    </div>
  );
};

export default FlashcardApp;
