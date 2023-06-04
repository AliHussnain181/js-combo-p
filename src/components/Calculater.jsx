import React, { useState } from 'react';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);

    const handleDigitClick = (digit) => {
        if (displayValue === '0') {
            setDisplayValue(digit);
        } else {
            setDisplayValue(displayValue + digit);
        }
    };

    const handleDecimalClick = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const handleOperationClick = (nextOperation) => {
        const inputValue = parseFloat(displayValue);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = eval(`${currentValue} ${operation} ${inputValue}`);
            setPreviousValue(newValue);
            setDisplayValue(String(newValue));
        }

        setOperation(nextOperation);
        setDisplayValue('0');
    };

    const handleEqualsClick = () => {
        const inputValue = parseFloat(displayValue);

        if (previousValue !== null && operation) {
            const currentValue = previousValue || 0;
            const newValue = eval(`${currentValue} ${operation} ${inputValue}`);
            setPreviousValue(null);
            setOperation(null);
            setDisplayValue(String(newValue));
        }
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setPreviousValue(null);
        setOperation(null);
    };

    return (
        <div className="max-w-xs mx-auto shadow-xl border-[black] border-4 mb-9">
            <div className="bg-white shadow p-4 rounded">
                <div className="mb-2">
                    <div className="text-right text-gray-600">{displayValue}</div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <button
                        className="col-span-2 bg-gray-300 rounded py-2"
                        onClick={handleClearClick}
                    >
                        AC
                    </button>
                    <button
                        className="bg-gray-300 rounded py-2"
                        onClick={() => handleOperationClick('/')}
                    >
                        /
                    </button>
                    <button
                        className="bg-gray-300 rounded py-2"
                        onClick={() => handleOperationClick('*')}
                    >
                        x
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('7')}
                    >
                        7
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('8')}
                    >
                        8
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('9')}
                    >
                        9
                    </button>
                    <button
                        className="bg-gray-300 rounded py-2"
                        onClick={() => handleOperationClick('-')}
                    >
                        -
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('4')}
                    >
                        4
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('5')}
                    >
                        5
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={() => handleDigitClick('6')}
                    >
                        6
                    </button>
                    <button
                        className="bg-gray-300 rounded py-2"
                        onClick={() => handleOperationClick('+')}
                    >
                        +
                    </button>
                    <button
                        className="rounded py-2 col-span-2"
                        onClick={() => handleDigitClick('0')}
                    >
                        0
                    </button>
                    <button
                        className="rounded py-2"
                        onClick={handleDecimalClick}
                    >
                        .
                    </button>
                    <button
                        className="bg-yellow-500 rounded py-2"
                        onClick={handleEqualsClick}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
