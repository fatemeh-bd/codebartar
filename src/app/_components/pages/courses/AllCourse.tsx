"use client";

import React from "react";
import CourseBox from "../landing/LastCourses/CourseBox";
import { sampleData } from "../landing/LastCourses/LastCourses";

const AllCourse = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {sampleData?.map((item, index) => (
        <CourseBox data={item} key={index} className={"xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-12"} />
      ))}
    </div>
  );
};

export default AllCourse;
