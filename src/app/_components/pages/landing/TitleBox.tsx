import React, { ReactNode } from "react";
import FlexItemCenter from "../../flex/FlexItemCenter";
import { AcademyIcon } from "./LastCourses/LastCourses";
import Title from "../../typography/Title";
import Paragraph from "../../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";

const TitleBox = ({
  title,
  desciption,
  className,
}: {
  title: string;
  desciption: string | ReactNode;
  className?: string;
}) => {
  return (
    <FlexItemCenter gap="gap-4" className={className || ""}>
      <AcademyIcon />
      <div className="space-y-2 w-[90%]">
        <Title size={Sizes.lg} color={ColorType.PRIMARY}>
          {title}
        </Title>

        {typeof desciption === "string" ? (
          <Paragraph>{desciption}</Paragraph>
        ) : (
          desciption
        )}
      </div>
    </FlexItemCenter>
  );
};

export default TitleBox;
