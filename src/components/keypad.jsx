import React from 'react';
import Button from './button';
import "./calculator.scss";

const Keypad = ({ clear, allClear, selectOperand, getResult }) => {
  return (
    <div className="keypad">
      <div className="numbers">
        <Button className="button" onClick={selectOperand} text="9" />
        <Button className="button" onClick={selectOperand} text="8" />
        <Button className="button" onClick={selectOperand} text="7" />
        <Button className="button" onClick={selectOperand} text="6" />
        <Button className="button" onClick={selectOperand} text="5" />
        <Button className="button" onClick={selectOperand} text="4" />
        <Button className="button" onClick={selectOperand} text="3" />
        <Button className="button" onClick={selectOperand} text="2" />
        <Button className="button" onClick={selectOperand} text="1" />
        <Button className="button" onClick={selectOperand} text="0" />
        <Button className="button" onClick={selectOperand} text="00" />
        <Button className="button" onClick={getResult} text="=" />
      </div>
      <div className="operators">
        <Button className="button" onClick={selectOperand} text="^" />
        <Button className="button" onClick={selectOperand} text="." />
        <Button className="button" onClick={selectOperand} text="(" />
        <Button className="button" onClick={selectOperand} text=")" />
        <Button className="button" onClick={selectOperand} text="+" />
        <Button className="button" onClick={selectOperand} text="-" />
        <Button className="button" onClick={selectOperand} text="*" />
        <Button className="button" onClick={selectOperand} text="/" />
        <Button className="button" onClick={selectOperand} text="%" />
        <Button className="button" onClick={clear} text="CE" />
        <Button className="button" onClick={allClear} text="C" />
      </div>
    </div>
  );
}

export default Keypad;
