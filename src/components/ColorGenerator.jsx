import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { random } from 'lodash';

const ColorGenerator = () => {
  const [color, setColor] = useState('#FFFFFF');
  const [copied, setCopied] = useState(false);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
    setCopied(false);
  };

  const generateRandomPalette = () => {
    const palette = [];
    for (let i = 0; i < 5; i++) {
      const newColor = `#${random(0, 0xFFFFFF).toString(16).padStart(6, '0')}`;
      palette.push(newColor);
    }
    setColor(palette[0]);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-6">
        <div
          className="w-64 h-64 rounded-md shadow-md"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-gray-700 text-xl font-bold mt-4">{color}</p>
        <CopyToClipboard text={color} onCopy={handleCopy}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-4"
          onClick={generateRandomColor}
        >
          Generate Color
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
          onClick={generateRandomPalette}
        >
          Generate Palette
        </button>
      </div>
    </div>
  );
};

export default ColorGenerator;
