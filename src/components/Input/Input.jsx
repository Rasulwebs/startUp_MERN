import React from "react";
import "./input.scss";
const Input = ({
  type,
  placeholder,
  className,
  InputValue,
  InputId,
  setValue,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={InputValue}
        onChange={(e) => {
          if (e.target.value.length > 0) {
            console.log(e.target.value);
          }
        }}
        id={InputId}
      />
    </>
  );
};

export default Input;
