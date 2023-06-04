import { useState } from "react";

function Chips() {
  const [tags, setTags] = useState(["React", "Tailwind CSS", "JavaScript"]);


  const handleAddTag = (event) => {
    if (event.key === "Enter" && event.target.value) {
      setTags((prevTags) => [...prevTags, event.target.value]);
      event.target.value = "";
    }
  };

  const handleRemoveTag = (tag) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  return (
    <div className="mx-auto max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 flex items-center"
            key={index}
          >
            <span className="mr-2">{tag}</span>
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="Add a tag"
          className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 focus:outline-none"
          onKeyDown={handleAddTag}
        />
      </div>
    </div>
  );
}

export default Chips;
