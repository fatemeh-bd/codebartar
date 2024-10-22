import React from "react";

const FlexBetween = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export default FlexBetween;
