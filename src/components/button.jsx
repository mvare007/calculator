import React from 'react';

const button = ({text, className, onClick}) => {
  return(
    <div>
      <button className={className} onClick={onClick}>{text}</button>
    </div>
  )
}

export default button;
