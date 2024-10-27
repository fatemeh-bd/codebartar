import { gradientToTop, Sizes } from "@/_utiles/enums";
import Image from "next/image";
import React from "react";
import Title from "../../../typography/Title";
import Paragraph from "../../../typography/Paragraph";
import Status from "../../landing/LastCourses/Status";
import InfoItemsList from "./InfoItemsList";
import CourseTabs from "./tab/CourseTabs";

const CourseContent = () => {
  return (
    <div className="space-y-8">
     <div>
     <Image
        className="rounded-3xl w-full"
        width={600}
        height={400}
        loading="eager"
        alt="poster"
        src={"/images/react.jpg"}
      />

      <div className={`${gradientToTop} w-[96%] mx-auto`}>
        <Status text="تکمیل شده" />

        <Title size={Sizes.xl}>دوره پروژه محور React و Next</Title>
        <Paragraph>
          ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است
          که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش
          دهیم.
        </Paragraph>
      </div>
     </div>
      <InfoItemsList />
      <CourseTabs />
    </div>
  );
};

export default CourseContent;
