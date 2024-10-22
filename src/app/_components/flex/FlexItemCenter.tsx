import React from "react";

const FlexItemCenter = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: string;
}) => {
  return <div className={`flex items-center ${gap?gap:"gap-2"}`}>{children}</div>;
};

export default FlexItemCenter;
