import React from "react";
import SectionTitle from "../../../typography/SectionTitle";
import FlexBetween from "../../../flex/FlexBetween";
import Paragraph from "../../../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";
import { numberWithCommas } from "@/_utiles/helper";
import Toman from "../../../Toman";
import FlexCenter from "../../../flex/FlexCenter";
import MainButton from "../../../buttons/MainButton";
import Like from "../../landing/LastCourses/Like";
import { ArrowUpLeftIcon } from "@heroicons/react/20/solid";
import FlexItemCenter from "../../../flex/FlexItemCenter";
import Image from "next/image";
import Link from "next/link";

const CourseInfo = () => {
  return (
    <div className="space-y-6">
        <div className="bg-gradient-to-b from-secondary-200 to-transparent space-y-6 rounded-2xl pb-4 pt-0 px-6 ">
      <div className="bg-background rounded-b-2xl  px-3 pb-1 pt-4">
        <SectionTitle title="نام نویسی در دوره" />
      </div>
      <FlexBetween>
        <Paragraph>هزینه ثبت نام:</Paragraph>
        <div className="flex gap-2 items-center">
          <Paragraph
            size={Sizes.xl}
            type={ColorType.BLACK}
            className="font-black"
          >
            {numberWithCommas(20000)}
          </Paragraph>
          <Toman />
        </div>
      </FlexBetween>
      <FlexCenter>
        <MainButton className="w-[90%]">
          اضافه به سبد
          <ArrowUpLeftIcon className="size-5" />
        </MainButton>
        <Like />
      </FlexCenter>

    </div>
      <div>
        <SectionTitle title="مدرس دوره" />
        <FlexItemCenter>
          <Image
            src={"/images/avatar.jpeg"}
            alt="avatar"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div className="font-medium">
            <Paragraph size={Sizes.sm} type={ColorType.BLACK}>
              جلال بهرامی راد
            </Paragraph>
            <Link href={"/"} className="text-primary text-xs">
              دیدن رزومه
            </Link>
          </div>
        </FlexItemCenter>
        <div className="bg-secondary-200 rounded-tl-2xl rounded-b-2xl text-sm text-secondary-700 p-4 mt-2">
          <Paragraph size={Sizes.sm}>
            اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد
            به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و
            چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم
            دانشی که در این راه بدست آوردم را در اختیار دیگران قرار بدم :)
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
