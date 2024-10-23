import React from "react";
import FlexBetween from "../flex/FlexBetween";
import FlexItemCenter from "../flex/FlexItemCenter";
import { Counter, Logo, navItems } from "./Header";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Paragraph from "../typography/Paragraph";
import { ColorType, Sizes } from "../../../_utiles/enums";

const DesktopHeader = () => {
  return (
    <FlexBetween>
      <FlexItemCenter gap={"gap-8"}>
        <Logo />
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li className="flex items-center gap-2" key={index}>
                {item.text}
                {!item.path && <ChevronDownIcon className="size-3" />}
              </li>
            ))}
          </ul>
        </nav>
      </FlexItemCenter>
      <FlexItemCenter gap={"gap-6"}>
        <div className="relative">
          <ShoppingCartIcon className="size-9 bg-secondary-100 rounded-full p-2" />
          <Counter value={2} />
        </div>
        <UserIcon className="size-9 bg-secondary-100 rounded-full p-2" />
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
