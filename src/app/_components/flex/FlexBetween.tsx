import React from "react";
import { FlexComponentsType } from "./types";

const FlexBetween = ({ children, className }: FlexComponentsType) => {
  return (
    <div className={`flex items-center justify-between ${className || ""}`}>
      {children}
    </div>
  );
};

export default FlexBetween;
