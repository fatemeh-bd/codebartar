import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <FlexItemCenter gap="gap-3" className="mb-4">
      <FlexItemCenter>
        <div className="size-1 bg-black rounded-full"></div>
        <div className="size-2 bg-black rounded-full"></div>
      </FlexItemCenter>
      <div className="font-black">{title}</div>
    </FlexItemCenter>
  );
};

export default FooterTitle;
