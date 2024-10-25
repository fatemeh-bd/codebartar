import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import { AcademyIcon } from "./LastCourses/LastCourses";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";

const SectionTitle = ({
  title,
  desciption,
  className,
}: {
  title: string;
  desciption: string;
  className?: string;
}) => {
  return (
    <FlexItemCenter gap="gap-4" className={className || ""}>
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
