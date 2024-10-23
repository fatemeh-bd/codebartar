import { ColorType, Sizes } from "@/_utiles/enums";
import React from "react";
import { ParagraphType } from "./types";

const Paragraph = ({ children, type, size }: ParagraphType) => {
  return (
    <p
      className={`${size === Sizes.sm ? "text-sm" : "sm:text-base text-sm"} ${
        type === ColorType.PRIMARY
          ? "text-primary"
          : type === ColorType.BLACK
          ? "text-black"
          : "text-secondary-700"
      } `}
    >
      {children}
    </p>
  );
};

export default Paragraph;
