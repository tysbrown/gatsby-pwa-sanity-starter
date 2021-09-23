import React from "react";

const Chevron = (props) => {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1L5.00009 4.99991L1 1" stroke={props.stroke} strokeWidth="2" />
    </svg>
  );
};

export default Chevron;
