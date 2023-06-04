import React, { useState } from 'react';

const BirthdayReminderApp = () => {
  const [people, setPeople] = useState([]);

  // Sample data for demonstration
  const sampleData = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      birthday: '1998-06-10',
      image: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      birthday: '1989-09-22',
      image: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    // Add more data as needed
  ];

  // Load sample data on initial render
  useState(() => {
    setPeople(sampleData);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Birthday Reminder App</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="p-4 border border-gray-200 rounded shadow"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-bold mb-2">{person.name}</h2>
            <p className="text-gray-500 mb-2">Age: {person.age}</p>
            <p className="text-gray-500">Birthday: {person.birthday}</p>
          </div>
        ))}
      </div>
      {people.length === 0 && (
        <p className="text-center mt-8">No birthdays to display.</p>
      )}
      <button
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setPeople([])}
      >
        Clear All
      </button>
    </div>
  );
};

export default BirthdayReminderApp;
