import React from "react";

const FlexCenter = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: string;
}) => {
  return (
    <div className={`flex items-center justify-center ${gap ? gap : "gap-2"}`}>
      {children}
    </div>
  );
};

export default FlexCenter;
