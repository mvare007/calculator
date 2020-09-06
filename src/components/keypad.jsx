import React from 'react';
import Button from './button';

const Keypad = ({ clear, selectOperand, selectOperator, result}) => {
  return (
      <div>
        <div className="numbers">
          <Button className="clear" onClick={clear} text="CE" />
          <Button className="number" onClick={selectOperand} text="0" />
          <Button className="number" onClick={selectOperand} text="1" />
          <Button className="number" onClick={selectOperand} text="2" />
          <Button className="number" onClick={selectOperand} text="3" />
          <Button className="number" onClick={selectOperand} text="4" />
          <Button className="number" onClick={selectOperand} text="5" />
          <Button className="number" onClick={selectOperand} text="6" />
          <Button className="number" onClick={selectOperand} text="7" />
          <Button className="number" onClick={selectOperand} text="8" />
          <Button className="number" onClick={selectOperand} text="9" />
        </div>
        <div className="operators">
          <Button className="operator" onClick={selectOperator} text="+" />
          <Button className="operator" onClick={selectOperator} text="-" />
          <Button className="operator" onClick={selectOperator} text="×" />
          <Button className="operator" onClick={selectOperator} text="÷" />
          <Button className="operator" onClick={selectOperator} text="%" />
          <Button className="total" onClick={result} text="=" />
        </div>
      </div>
  );
}

export default Keypad;
