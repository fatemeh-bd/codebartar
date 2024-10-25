import { ColorType, Sizes } from "@/_utiles/enums";
import React from "react";
import { ParagraphType } from "./types";

const Paragraph = ({ children, type, size, className }: ParagraphType) => {
  return (
    <p
      className={`${
        size === Sizes.sm
          ? "text-sm"
          : size === Sizes.xs
          ? "text-xs"
          : size === Sizes.xl
          ? "text-xl"
          : "sm:text-base text-sm"
      } ${
        type === ColorType.PRIMARY
          ? "text-primary"
          : type === ColorType.BLACK
          ? "text-black"
          : type === ColorType.SUCCSESS
          ? "text-success"
          : "text-secondary-700"
      } ${className || ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
