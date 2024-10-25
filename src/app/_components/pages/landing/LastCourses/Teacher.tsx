import React from "react";
import FlexItemCenter from "../../../flex/FlexItemCenter";
import Image from "next/image";
import Paragraph from "../../../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";

const Teacher = ({
  name,
  desc,
  avatar,
}: {
  name: string;
  desc: string;
  avatar: string;
}) => {
  return (
    <FlexItemCenter>
      <Image
        className="size-10 rounded-full"
        src={avatar}
        alt="Rounded avatar"
        width={40}
        height={40}
      />
      <div className=" space-y-1 text-right">
        <Paragraph size={Sizes.xs}>{name}</Paragraph>
        <Paragraph size={Sizes.xs} className="font-bold" type={ColorType.BLACK}>
          {desc}
        </Paragraph>
      </div>
    </FlexItemCenter>
  );
};

export default Teacher;
