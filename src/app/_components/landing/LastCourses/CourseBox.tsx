import Link from "next/link";
import React from "react";
import Image from "next/image";
import Paragraph from "../../typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";
import Title from "../../typography/Title";
import FlexCenter from "../../flex/FlexCenter";
import {
  ArrowUpLeftIcon,
  ClockIcon,
  HeartIcon,
  Square2StackIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import FlexItemCenter from "../../flex/FlexItemCenter";
import FlexBetween from "../../flex/FlexBetween";
import Toman from "../../Toman";
import { CourseType } from "../types";
import MainButton from "../../buttons/MainButton";
import Teacher from "./Teacher";
const CourseBox = ({ data }: { data: CourseType }) => {
  return (
    <div>
      <div className="relative z-10">
        <Link href={"/"} className="block">
          <Image
            src={data.img}
            className="w-full rounded-3xl"
            alt="..."
            width={200}
            height={100}
          />
        </Link>
        <Link
          href={"/"}
          className="absolute left-3 top-3 h-11 inline-flex items-center justify-center gap-1 bg-black/20 rounded-full text-white transition-all hover:opacity-80 px-4"
        >
          <Squares2X2Icon className="size-6" />
          <span className="font-semibold text-sm">{data.label}</span>
        </Link>
      </div>
      <div className="w-[90%] mx-auto space-y-5">
        <div className="bg-secondary-200 space-y-1 rounded-b-3xl py-4 px-6 ">
          <Paragraph
            type={ColorType.SUCCSESS}
            className="list-disc list-item mr-3"
            size={Sizes.sm}
          >
            {data.status}
          </Paragraph>
          <Title
            size={Sizes.xs}
            className="line-clamp-1 hover:text-primary cursor-pointer"
          >
            {data.title}
          </Title>
        </div>
        <FlexItemCenter gap="gap-6" className="text-xs my-4 text-secondary-700">
          <FlexCenter gap="gap-1">
            <Square2StackIcon className="size-4" />
            {data.session}
          </FlexCenter>
          <FlexCenter gap="gap-1">
            <ClockIcon className="size-4" />
            {data.time}
          </FlexCenter>
        </FlexItemCenter>
        <FlexBetween>
          <Teacher name={'مدرس دوره:'} desc={data.name} avatar={data.avatar} />
          <FlexItemCenter>
            {data.type === "free" ? (
              <Paragraph
                type={ColorType.SUCCSESS}
                size={Sizes.xl}
                className="font-black"
              >
                رایگان!
              </Paragraph>
            ) : (
              <>
                <Paragraph
                  size={Sizes.xl}
                  type={ColorType.BLACK}
                  className="font-black"
                >
                  {" "}
                  {data.price}
                </Paragraph>
                <Toman />
              </>
            )}
          </FlexItemCenter>
        </FlexBetween>
        <FlexCenter>
          <MainButton className="w-[90%]">
            مشاهده دوره
            <ArrowUpLeftIcon className="size-6" />
          </MainButton>
          <MainButton
            themeType={ColorType.SECONDARY}
            className="size-12 !p-2 rounded-full text-secondary-700  hover:!text-rose-600"
          >
            <HeartIcon className="size-5" />
          </MainButton>
        </FlexCenter>
      </div>
    </div>
  );
};

export default CourseBox;
