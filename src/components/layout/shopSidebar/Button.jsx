import React from 'react'

const Button = ({ onClickHandler, value, title, className }) => {
  return (
    <button onClick={onClickHandler} value={value} className={`font-DMSans font-regular text-md capitalize block w-full text-left ${className}`}>
      {title}
    </button>
  );
};

export default Button;
