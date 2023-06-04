import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    {
      title: "Tab 1",
      content: <p>This is the content of tab 1.</p>,
    },
    {
      title: "Tab 2",
      content: <p>This is the content of tab 2.</p>,
    },
    {
      title: "Tab 3",
      content: <p>This is the content of tab 3.</p>,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex border-b border-gray-200">
        {data.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 border-b-2 border-transparent ${
              activeTab === index
                ? "border-indigo-500 text-indigo-600 font-medium"
                : "text-gray-500 hover:text-gray-700 font-medium"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {data.map(
          (tab, index) =>
            activeTab === index && (
              <div key={index} className="p-4 bg-white rounded shadow">
                {tab.content}
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setActiveTab(null)}
                >
                  <FaTimes />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
