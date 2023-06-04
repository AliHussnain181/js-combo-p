import React, { useState, useEffect } from "react";

const BookNoteApp = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (newBook.trim() !== "") {
      setBooks([...books, newBook]);
      setNewBook("");
    }
  };

  const removeBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 overflow-hidden">Book Note-Taking App</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          className="border border-gray-300 rounded py-2 px-4 mr-2"
          placeholder="Enter a book title"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </div>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{book}</span>
              <button
                onClick={() => removeBook(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No books added yet.</div>
      )}
    </div>
  );
};

export default BookNoteApp;
