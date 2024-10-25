import React from "react";
import { ButtonProps } from "./types";
import { ColorType } from "@/_utiles/enums";

const MainButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  themeType = ColorType.PRIMARY,
  ...props
}) => {
  const buttonClass = `flex text-sm cursor-pointer font-bold items-center justify-center gap-2 rounded-full transition-all hover:opacity-80 py-3 px-4 ${className} ${
    themeType === ColorType.SECONDARY
      ? "bg-secondary-200 hover:text-primary"
      : "bg-primary text-white"
  }`;

  return (
    <button type="button" name="mainButton" className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default MainButton;
