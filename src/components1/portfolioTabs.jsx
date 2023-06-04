import React, { useState } from 'react';
import { FaCode, FaPaintBrush, FaFileAlt } from 'react-icons/fa';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <div className="flex justify-center space-x-4">
        <button
          className={`${
            activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabChange('projects')}
        >
          <FaCode className="mr-2" />
          Projects
        </button>
        <button
          className={`${
            activeTab === 'designs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabChange('designs')}
        >
          <FaPaintBrush className="mr-2" />
          Designs
        </button>
        <button
          className={`${
            activeTab === 'resume' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabChange('resume')}
        >
          <FaFileAlt className="mr-2" />
          Resume
        </button>
      </div>
      <div className="mt-8">
        {activeTab === 'projects' && (
          <div>
            {/* Projects content */}
            <p>Projects content goes here</p>
          </div>
        )}
        {activeTab === 'designs' && (
          <div>
            {/* Designs content */}
            <p>Designs content goes here</p>
          </div>
        )}
        {activeTab === 'resume' && (
          <div>
            {/* Resume content */}
            <p>Resume content goes here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
