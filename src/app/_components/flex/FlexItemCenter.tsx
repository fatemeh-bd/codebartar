import React from "react";

const FlexItemCenter = ({
  children,
  gap,
  className
}: {
  children: React.ReactNode;
  gap?: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center ${gap ? gap : "gap-2"} ${className??className}`}>{children}</div>
  );
};

export default FlexItemCenter;
