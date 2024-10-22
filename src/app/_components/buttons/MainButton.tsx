import React from "react";
import { ButtonProps } from "./types";

const MainButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2  bg-primary rounded-full text-white transition-all hover:opacity-80 py-3 px-4 ${
        className ?? className
      }`}
    >
      {children}
    </button>
  );
};

export default MainButton;
