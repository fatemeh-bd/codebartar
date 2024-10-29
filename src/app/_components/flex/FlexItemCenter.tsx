import React from "react";
import { FlexComponentsType } from "./types";

const FlexItemCenter = ({ children, gap, className }: FlexComponentsType) => {
  return (
    <div
      className={`flex items-center ${gap ? gap : "gap-2"} ${
        className ?? className
      }`}
    >
      {children}
    </div>
  );
};

export default FlexItemCenter;
