import React from "react";

const FlexCenter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center gap-2">{children}</div>;
};

export default FlexCenter;
