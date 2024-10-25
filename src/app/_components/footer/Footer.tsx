"use client";
import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import MainButton from "../buttons/MainButton";
import { ColorType, Sizes } from "@/_utiles/enums";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import FlexBetween from "../flex/FlexBetween";
import { Logo } from "../header/Header";
import { scrollToTop } from "@/_utiles/helper";
import { ClockIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Paragraph from "../typography/Paragraph";
import FooterItem from "./FooterItem";
import FooterTitle from "./FooterTitle";
import SocialMedias from "./SocialMedias";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto mt-20 space-y-8">
      <FlexItemCenter gap="gap-4">
        <div className="flex-grow border-t border-border border-dashed"></div>
        <MainButton
          onClick={scrollToTop}
          themeType={ColorType.SECONDARY}
          className="font-normal text-xs"
        >
          برگشت به بالا
          <ChevronUpIcon className="size-4" />
        </MainButton>
      </FlexItemCenter>
      <FlexBetween className="md:flex-nowrap flex-wrap gap-8">
        <div className="md:w-5/12 w-full">
          <Logo />
        </div>
        <div className="md:w-7/12 w-full">
          <FlexItemCenter gap="gap-10" className="md:!flex-row flex-col w-fit">
            <FooterItem
              title="شماره تلفن"
              desc="۰۲۱−۱۲۳۴۵۶۷"
              icon={
                <PhoneIcon className="size-11 bg-secondary-200  rounded-full p-3 text-secondary-700" />
              }
            />

            <FooterItem
              title="ساعات کاری"
              desc="۰۹:۰۰ - ۱۷:۰۰"
              icon={
                <ClockIcon className="size-11 bg-secondary-200  rounded-full p-3 text-secondary-700" />
              }
            />
          </FlexItemCenter>
        </div>
      </FlexBetween>
      <FlexBetween className="md:flex-nowrap flex-wrap gap-8">
        <div className="md:w-5/12 w-full bg-secondary-200 rounded-2xl p-6">
          <FooterTitle title="درباره" />
          <Paragraph size={Sizes.sm}>
            نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن
            برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
          </Paragraph>
        </div>
        <div className="md:w-7/12 w-full gap-8 grid grid-cols-5">
          <div className="md:col-span-2 col-span-5">
            <FooterTitle title="لینک های مفید" />

            <ul className="flex flex-col space-y-1 text-secondary-700 [&>li]:text-sm font-medium">
              <li>قوانین و مقررات</li>
              <li>مدرسان</li>
              <li>درباره نابغه</li>
              <li>ارتباط با ما</li>
            </ul>
          </div>
          <div className="md:col-span-3 col-span-5 space-y-6">
            <div>
              <FooterTitle
                title="
خبرنامه"
              />
              <Paragraph>
                برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی نابغه ایمیل
                خود را وارد کنید.
              </Paragraph>
            </div>
            <NewsLetter />
            <div>
              <FooterTitle title="شبکه های اجتماعی" />
              <SocialMedias />
            </div>
          </div>
        </div>
      </FlexBetween>
      <FlexItemCenter>
        <Paragraph size={Sizes.xs}>© کليه حقوق محفوظ است</Paragraph>
        <div className="flex-grow border-t border-border border-dashed"></div>

      </FlexItemCenter>
    </div>
  );
};

export default Footer;
