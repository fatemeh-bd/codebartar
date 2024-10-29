import React from "react";
import Paragraph from "../_components/typography/Paragraph";
import TitleBox from "../_components/pages/landing/TitleBox";
import { Sizes } from "@/_utiles/enums";
import Filter from "../_components/pages/courses/Filter";
import AllCourse from "../_components/pages/courses/AllCourse";

const Page = () => {
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
        <div className="md:col-span-3 col-span-12 sticky top-24">
          <Filter />
        </div>
        <div className="md:col-span-9 col-span-12">
          <AllCourse />
        </div>
      </div>
    </div>
  );
};

export default Page;
