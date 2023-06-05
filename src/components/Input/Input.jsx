import React from 'react';
import "./input.scss"
const Input = ({ type, placeholder, className }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={className} />
    </>
  );
};

export default Input;