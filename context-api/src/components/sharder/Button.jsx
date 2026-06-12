import React from "react";

const Button = ({ children, type, isDisabled, btnClass }) => {
  return (
    <button className={`btn btn-${btnClass}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
