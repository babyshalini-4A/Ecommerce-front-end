import React from "react";

const Button = ({ text, bgcolor, textcolor, handler = () => {} }) => {
  return (
    <button
      className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
