import React, { useState } from 'react';
import Keypad from './keypad';
import Display from './display';
import runCalculator from './logic';

const Calculator = () => {

  const [ firstOperand, setFirstOperand ] = useState(null);
  const [ secondOperand, setSecondOperand ] = useState(null);
  const [ operator, setOperator ] = useState(null);
  const [ lastPressedKey, setLastPressedKey ] = useState(null);
  const [ total, calculate ] = useState(null);

  const selectOperand = (e) => {
    const number = e.target.innerHTML;
    const newNumber = e.target.innerHTML;
    if (firstOperand === null) {
      setFirstOperand(number)
    } if (firstOperand !== null && operator === null) {
      setFirstOperand(number => number + newNumber)
    } if (secondOperand === null && operator !== null) {
      setSecondOperand(number)
    } if (total === false && secondOperand !== null) {
      setSecondOperand(number => number + newNumber)
    }
    setLastPressedKey(number);
  }

  const selectOperator = (e) => {
    const operatorSign = (e.target.innerHTML);
    if (firstOperand !== null) {setOperator(operatorSign)}
    setLastPressedKey(operatorSign);
  }

  const result = () => {
    calculate(runCalculator(parseFloat(firstOperand), parseFloat(secondOperand), operator));
  }

  const clear = () => {
    setFirstOperand(null);
    setSecondOperand(null);
    setOperator(null);
    calculate(false);
  }

  return (
    <div>
      <Display
        firstOperand={firstOperand || null}
        secondOperand={secondOperand || null}
        operator={operator || null}
        total={total}/>
      <Keypad
        clear={clear}
        selectOperand={selectOperand}
        selectOperator={selectOperator}
        result={result}/>
    </div>
  );
}

export default Calculator;
