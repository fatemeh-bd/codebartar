"use client";
import React from "react";
import Paragraph from "../_components/typography/Paragraph";
import TitleBox from "../_components/pages/landing/TitleBox";
import { Sizes, startMobileSize } from "@/_utiles/enums";
import Filter from "../_components/pages/courses/Filter";
import AllCourse from "../_components/pages/courses/AllCourse";
import useScreenWidth from "../_components/hooks/useScreenWidth";

const Page = () => {
  const isMobile = useScreenWidth(startMobileSize);
  return (
    <div>
      <TitleBox
        title="دوره های آموزشی"
        desciption={
          <Paragraph size={Sizes.sm}>
            دوره ببین، تمرین کن، برنامه نویس شو
          </Paragraph>
        }
      />

      <div className="grid grid-cols-12 items-start gap-6 my-6">
        {!isMobile && (
          <div className="md:col-span-3 hidden md:block sticky top-24">
            <Filter />
          </div>
        )}

        <div className="md:col-span-9 col-span-12">
          <AllCourse />
        </div>
      </div>
    </div>
  );
};

export default Page;
