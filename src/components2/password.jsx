import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = lowercaseLetters;
    let passwordCharacters = [];
    if (useUppercase) characters += uppercaseLetters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      passwordCharacters.push(characters[randomIndex]);
    }

    setPassword(passwordCharacters.join(""));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Password Generator</h1>
      <div className="mb-4">
        <label htmlFor="lengthSlider" className="font-semibold">
          Length: {length}
        </label>
        <input
          type="range"
          id="lengthSlider"
          min="4"
          max="20"
          step="1"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="uppercaseCheckbox" className="font-semibold">
          Uppercase Letters
        </label>
        <input
          type="checkbox"
          id="uppercaseCheckbox"
          checked={useUppercase}
          onChange={(e) => setUseUppercase(e.target.checked)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numbersCheckbox" className="font-semibold">
          Numbers
        </label>
        <input
          type="checkbox"
          id="numbersCheckbox"
          checked={useNumbers}
          onChange={(e) => setUseNumbers(e.target.checked)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symbolsCheckbox" className="font-semibold">
          Symbols
        </label>
        <input
          type="checkbox"
          id="symbolsCheckbox"
          checked={useSymbols}
          onChange={(e) => setUseSymbols(e.target.checked)}
        />
      </div>
      <div className="mb-4">
        <button
          onClick={generatePassword}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Generate Password
        </button>
      </div>
      {password && (
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      )}
      {password && (
        <div>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
