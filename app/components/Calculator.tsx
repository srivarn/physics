"use client";

import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<number | null>(null);

  const handleNumberClick = (number: number | string) => {
    if (display === '0') {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
    setFirstValue(parseFloat(display) || null);
    setDisplay('0');
  };

  const handleEqualClick = () => {
    if (operator && firstValue) {
      const secondValue = parseFloat(display);
      let result;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case '*':
          result = firstValue * secondValue;
          break;
        case '/':
          result = firstValue / secondValue;
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setOperator(null);
      setFirstValue(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperator(null);
    setFirstValue(null);
  };

  return (
    <div className="calculator" style={{ border: '1px solid black' }}>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClearClick}>C</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
