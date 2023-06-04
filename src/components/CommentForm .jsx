import React, { useState } from 'react';

function CommentForm() {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentsList([...commentsList, comment]);
    setComment('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="mt-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index} className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-2">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentForm;
