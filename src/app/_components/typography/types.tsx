import { ColorType, Sizes } from "@/app/_components/_utiles/enums";
import React from "react";

export interface ParagraphType {
  children: React.ReactNode;
  type?: ColorType;
  size?: Sizes;
}
