import React from "react";

const GradientBox = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`bg-gradient-to-l from-secondary-200 to-transparent rounded-2xl  p-4 mx-auto ${
        className ?? className
      }`}
    >
      {children}
    </div>
  );
};

export default GradientBox;
