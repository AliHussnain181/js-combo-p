import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How does React work?',
      answer:
        'React uses a virtual DOM and diffing algorithm to efficiently update the user interface.',
    },
    {
      question: 'What are React components?',
      answer:
        'React components are reusable building blocks for creating UI elements.',
    },
    // Add more data as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Accordion Menu</h1>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded p-4 shadow"
          >
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-bold">{item.question}</h2>
              {activeIndex === index ? (
                <BsDash className="text-blue-500 text-xl" />
              ) : (
                <BsPlus className="text-blue-500 text-xl" />
              )}
            </button>
            {activeIndex === index && (
              <p className="text-gray-500 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionMenu;
