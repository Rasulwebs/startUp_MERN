import React from 'react';

const Button = ({ btnData, btnClass }) => {
  return (
    <>
          <button className={btnClass} value={btnData}></button>
    </>
  );
};

export default Button;