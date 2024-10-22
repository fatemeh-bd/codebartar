import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import MainButton from "../buttons/MainButton";
import Paragraph from "../typography/Paragraph";
import { TicketIcon } from "@heroicons/react/24/outline";
import { ArrowUpLeftIcon } from "@heroicons/react/16/solid";
import vector from "../../assets/images/mainVector.png";
import { ColorType, Sizes } from "@/app/_components/_utiles/enums";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" space-y-14 p-4 mx-auto">
      <div className="bg-gradient-to-l from-secondary-200 to-transparent rounded-2xl  mx-auto">
        <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col items-center justify-center gap-10 py-16">
          <div className=" space-y-6 px-6">
            <FlexItemCenter>
              <MainButton className=" font-semibold !text-xs animate-pulse !py-1 px-2">
                <TicketIcon className="size-4" />
                جشنــــواره تخفیف !
              </MainButton>
              <Paragraph size={Sizes.sm} type={ColorType.PRIMARY}>
                به زودی :)
              </Paragraph>
            </FlexItemCenter>
            <h1 className="text-black font-black sm:text-5xl  text-3xl text-foreground">
              داستان برنامه‌نویس شدنت
              <br />
              از اینجا شروع میشه!
            </h1>
            <Paragraph>
              یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته
              باشید، بقیه‌اش با نابغه
            </Paragraph>
            <MainButton>
              شروع یادگیری برنامه‌نویسی
              <ArrowUpLeftIcon className="size-6" />
            </MainButton>
          </div>
          <div className="flex-shrink-0 flex justify-center md:w-72 w-full md:order-2 -order-1">
            <Image
              className="max-w-full"
              src={vector}
              alt="vector"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
