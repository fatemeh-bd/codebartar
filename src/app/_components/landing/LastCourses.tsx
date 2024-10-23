import React from "react";
import GradientBox from "../GradientBox";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowUpLeftIcon,
} from "@heroicons/react/16/solid";
import FlexCenter from "../flex/FlexCenter";
import { ColorType, Sizes } from "@/_utiles/enums";
import MainButton from "../buttons/MainButton";
import FlexBetween from "../flex/FlexBetween";

const LastCourses = () => {
  return (
    <div>
      <GradientBox className="!p-5">
        <FlexBetween>
          <FlexCenter gap="gap-6">
            <AcademicCapIcon className="size-12 text-white bg-primary rounded-full p-3" />
            <div className="space-y-2">
              <Title size={Sizes.lg} color={ColorType.PRIMARY}>
                آخرین دوره های
              </Title>
              <Paragraph>منتشر شده</Paragraph>
            </div>
          </FlexCenter>
          <MainButton themeType={ColorType.SECONDARY} className="md:!w-fit size-10 md:!p-4 !p-1">
            <span className="md:inline-block hidden"> مشاهده همه</span>
            <ArrowUpLeftIcon className="size-5" />
          </MainButton>
        </FlexBetween>
      </GradientBox>
    </div>
  );
};

export default LastCourses;
