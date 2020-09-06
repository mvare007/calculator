import React from 'react';

const Display = ({ firstOperand, secondOperand, operator, total }) => {
  return <div>{ total ? total : <>{firstOperand}{operator}{secondOperand}</>}</div>
}

export default Display;
