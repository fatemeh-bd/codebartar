import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import { AcademyIcon } from "./LastCourses/LastCourses";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";

const SectionTitle = ({
  title,
  desciption,
}: {
  title: string;
  desciption: string;
}) => {
  return (
    <FlexItemCenter gap="gap-4">
      <AcademyIcon />
      <div className="space-y-2 w-[90%]">
        <Title size={Sizes.lg} color={ColorType.PRIMARY}>
          {title}
        </Title>
        <Paragraph>{desciption}</Paragraph>
      </div>
    </FlexItemCenter>
  );
};

export default SectionTitle;
