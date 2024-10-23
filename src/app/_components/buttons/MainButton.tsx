import React from "react";
import { ButtonProps } from "./types";
import { ColorType } from "@/_utiles/enums";

const MainButton: React.FC<ButtonProps> = ({
  children,
  className,
  themeType,
}) => {
  return (
    <button
      className={`flex text-sm font-bold items-center justify-center gap-2   rounded-full  transition-all hover:opacity-80 py-3 px-4 ${
        className ?? className
      } ${
        themeType === ColorType.SECONDARY
          ? "bg-secondary-200"
          : "bg-primary text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default MainButton;
