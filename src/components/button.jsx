import React from 'react';

export const button = ({text, className, onClick}) => {
  return <button className={className} onClick={onClick(text)}>{text}</button>
}
