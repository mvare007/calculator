import React from 'react';
import "./calculator.scss";

const Display = ({ operands, total }) => {
  return <div className="display">{ total ? <>{operands} <br/>= {total}</> : operands}</div>
}

export default Display;
