import React from "react";

interface ButtonProps {
  text: string;
  handler: () => any;
}

export const Button = ({
  text,
  handler,
}: ButtonProps) => {
  return (
    <button
      onClick={handler}
      className={`bg-gray-500 w-11/12 rounded-sm`}
    >
      {text}
    </button>
  );
};
