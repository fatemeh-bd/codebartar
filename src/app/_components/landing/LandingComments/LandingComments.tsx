import React from "react";
import FlexBetween from "../../flex/FlexBetween";
import Title from "../../typography/Title";
import { ColorType, Sizes } from "@/_utiles/enums";
import FlexItemCenter from "../../flex/FlexItemCenter";
import Paragraph from "../../typography/Paragraph";
import { AcademyIcon } from "../LastCourses/LastCourses";
import CommenstSlider from "./CommenstSlider";
import SectionTitle from "../SectionTitle";

const LandingComments = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-10 md:space-y-0 space-y-5 my-32 items-center">
      <div className="md:col-span-4 flex items-center gap-5">
        <SectionTitle
          title=" در مورد نابغه چه میشنویم؟"
          desciption="   این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه
          دارند."
        />
      </div>
      <div className="md:col-span-8 w-full max-w-xl mx-auto">
        <CommenstSlider />
      </div>
    </div>
  );
};

export default LandingComments;
