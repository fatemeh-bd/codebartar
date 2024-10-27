"use client";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Paragraph from "../typography/Paragraph";
import { convertIndexToPersianWord } from "@/_utiles/helper";
import { ColorType, Sizes } from "@/_utiles/enums";
import FlexItemCenter from "../flex/FlexItemCenter";
import FlexBetween from "../flex/FlexBetween";
import MainButton from "../buttons/MainButton";
import { ArrowUpLeftIcon } from "@heroicons/react/20/solid";
import FlexCenter from "../flex/FlexCenter";
import Link from "next/link";

interface AccordionChild {
  id: number;
  name: string;
  time: string;
}

interface AccordionType {
  title: string | React.ReactNode;
  id: number;
  headLines: AccordionChild[];
}

const HeadlinesAccordions = ({ lists }: { lists: AccordionType[] }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionToggle = (id: number) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {lists.map(({ title, headLines, id }, index) => {
        const isActive = activeAccordion === id;

        return (
          <div key={id} className="py-2 ">
            <div
              className={`w-full cursor-pointer rounded-2xl bg-secondary-200`}
              id={`heading-${id}`}
            >
              <div
                className={`group relative flex justify-between items-center w-full px-5 py-4 text-sm text-secondary-700 ${
                  isActive ? "!text-foreground" : ""
                }`}
                onClick={() => handleAccordionToggle(id)}
                aria-expanded={isActive}
                aria-controls={`collapse-${id}`}
              >
                <FlexItemCenter
                  className={`${
                    isActive ? "text-black font-medium" : "text-secondary-700"
                  }`}
                >
                  <Paragraph
                    type={ColorType.BLACK}
                    size={Sizes.xs}
                    className="flex items-center"
                  >
                    فصل
                    <span className="ml-4">
                      {convertIndexToPersianWord(index + 1)}
                    </span>
                  </Paragraph>
                  {title}
                </FlexItemCenter>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-200 ease-in-out ${
                    isActive ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`${
                isActive ? "p-4" : ""
              } w-[90%] mx-auto transform transition-all duration-300 ease-in-out ${
                isActive
                  ? "max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95 overflow-hidden"
              }`}
              id={`collapse-${id}`}
              aria-labelledby={`heading-${id}`}
            >
              {headLines.map(({ id: childId, name, time }, index) => (
                <FlexBetween
                  key={childId}
                  className="border lg:flex-nowrap flex-wrap border-secondary-500 py-2 my-2 px-4 rounded-xl text-sm"
                >
                  <FlexItemCenter gap="gap-6">
                    <span className="text-secondary-700">{index + 1}</span>
                    <Link
                      href={"/"}
                      className=" cursor-pointer hover:underline text-sm text-foreground"
                    >
                      {name}
                    </Link>
                  </FlexItemCenter>
                  <FlexItemCenter className="!text-xs !mr-auto">
                    <FlexCenter gap="gap-1 text-secondary-700">
                      {time}
                      <ClockIcon className="size-4" />
                    </FlexCenter>
                    <MainButton
                      className="!text-xs font-normal text-secondary-700"
                      themeType={ColorType.SECONDARY}
                    >
                      مشاهده
                      <ArrowUpLeftIcon className="size-4" />
                    </MainButton>
                  </FlexItemCenter>
                </FlexBetween>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadlinesAccordions;
