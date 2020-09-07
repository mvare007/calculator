import React, { useState } from 'react';
import Keypad from './keypad';
import Display from './display';
import * as math from "mathjs";
import './calculator.scss';

const Calculator = () => {

  const [ operands, setOperands ] = useState([]);
  const [ total, setTotal ] = useState(null);

  const selectOperand = (e) => {
    const buttonText = e.target.innerHTML;
    operands.length === 0 ? setOperands([buttonText]) : setOperands(operands => [...operands, buttonText]);
  }

  const calculate = () => {
    setTotal(math.evaluate(operands.join("")));
  }

  const clear = () => {
    setOperands(operands.filter((e) => e !== operands[operands.length - 1]));
  }

  const allClear = () => {
    setOperands([]);
    setTotal(null);
  }

  return (
    <div className="calculator">
      <Display
        operands={operands || null}
        total={total}/>
      <Keypad
        clear={clear}
        allClear={allClear}
        selectOperand={selectOperand}
        getResult={calculate}/>
    </div>
  );
}

export default Calculator;
