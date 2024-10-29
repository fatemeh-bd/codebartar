"use client";
import React, { useState } from "react";
import FlexBetween from "../../flex/FlexBetween";
import FlexItemCenter from "../../flex/FlexItemCenter";
import { navItems } from "../Header";
import {
  ChevronDownIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Paragraph from "../../typography/Paragraph";
import { ColorType, Sizes } from "../../../../_utiles/enums";
import SubMenu from "../SubMenu";
import { Logo } from "./Logo";
import { Counter } from "./Counter";

const DesktopHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <FlexBetween className="md:flex hidden">
      <FlexItemCenter gap={"gap-8"}>
        <Logo />
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) =>
              item.path ? (
                <li
                  className="flex items-center gap-2 relative cursor-pointer"
                  key={index}
                >
                  {item.text}
                </li>
              ) : (
                <SubMenu data={item} key={index} />
              )
            )}
          </ul>
        </nav>
      </FlexItemCenter>
      <FlexItemCenter gap={"gap-4"}>
        {/* <MoonIcon
          className="size-9 bg-secondary-100 text-black rounded-full p-2"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
        /> */}
        {isDarkMode ? (
          <SunIcon
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setIsDarkMode(false);
            }}
            className="size-9 bg-secondary-100 text-black rounded-full p-2"
          />
        ) : (
          <MoonIcon
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setIsDarkMode(true);
            }}
            className="size-9 bg-secondary-100 text-black rounded-full p-2"
          />
        )}
        <div className="relative">
          <ShoppingCartIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
          <Counter value={2} />
        </div>
        <UserIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
        <FlexItemCenter>
          <div>
            <Paragraph type={ColorType.BLACK} size={Sizes.sm}>
              جلال بهرامی راد
            </Paragraph>
            <Paragraph size={Sizes.sm}>خوش آمـــدید</Paragraph>
          </div>
          <ChevronDownIcon className="size-4" />
        </FlexItemCenter>
      </FlexItemCenter>
    </FlexBetween>
  );
};

export default DesktopHeader;
