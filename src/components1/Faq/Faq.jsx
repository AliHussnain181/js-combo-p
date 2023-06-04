// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const data = [
    {
      question: 'What is the FAQ component?',
      answer: 'The FAQ component is a reusable component that displays frequently asked questions and their corresponding answers in an accordion format.',
    },
    {
      question: 'How do I toggle a FAQ?',
      answer: 'To toggle a FAQ, simply click on the question. This will expand or collapse the corresponding answer.',
    },
    {
      question: 'Can I have multiple FAQs on the same page?',
      answer: 'Yes, you can have multiple FAQs on the same page. Each FAQ will maintain its own state and can be toggled independently.',
    },
    {
      question: 'How can I customize the styling of the FAQ component?',
      answer: 'You can customize the styling of the FAQ component by modifying the CSS classes used in the component or by applying additional CSS styles to the component container.',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {data.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            className="flex justify-between items-center w-full focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-lg">{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <div className="mt-4">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
