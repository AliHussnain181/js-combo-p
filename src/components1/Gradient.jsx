import React, { useState } from 'react';

const GradientGenerator = () => {
  const [gradientColor, setGradientColor] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');

  const generateGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    setGradientColor(gradient);
    setColor1(color1);
    setColor2(color2);
  };

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = gradientColor;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generateGradient}
      >
        Generate Gradient
      </button>
      {gradientColor && (
        <div className="w-64 h-32 mt-4 rounded-lg shadow-lg relative">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 rounded-lg"
            style={{ background: gradientColor }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-lg">{color1}</span>
            <span className="text-white text-lg">{color2}</span>
          </div>
          <button
            className="absolute bottom-0 right-0 bg-white text-gray-600 px-2 py-1 rounded-lg mr-2 mb-2 hover:bg-gray-200"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default GradientGenerator;
