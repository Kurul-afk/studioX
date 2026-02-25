import React from "react";

export default function BaseBtn({ onClick, text, ...props }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`bg-gradient-to-r from-orange-700 to-orange-800 w-full text-white py-4 px-6 font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-colors duration-300`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
}
