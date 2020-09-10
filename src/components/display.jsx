import React, { useEffect, useRef } from 'react';
import "./calculator.scss";

const Display = ({ operands, total }) => {
  const screen = useRef();

  useEffect(() => {
    screen.current.scrollTop = screen.current.scrollHeight;
  });

  return <div className="display" ref={screen}>{ total ? <>{operands} <br/> = {total}</> : operands }</div>
}

export default Display;
