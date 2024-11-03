import React from "react";
import { FlexComponentsType } from "./types";

const FlexBetween = ({ children, className, gap }: FlexComponentsType) => {
  return (
    <div
      className={`flex items-center justify-between ${className || ""} ${
        gap || ""
      }`}
    >
      {children}
    </div>
  );
};

export default FlexBetween;
