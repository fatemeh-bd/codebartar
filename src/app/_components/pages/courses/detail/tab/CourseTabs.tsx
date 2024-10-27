"use client";
import {
  ChatBubbleLeftRightIcon,
  ListBulletIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useRef } from "react";
import { TabType } from "./types";
import Intro from "./Intro";
import Headlines from "./Headlines";

const tabs: TabType[] = [
  { id: 1, label: "معرفی", icon: PencilIcon },
  { id: 2, label: "سرفصلها", icon: ListBulletIcon },
  { id: 3, label: "دیدگاه و پرسش", icon: ChatBubbleLeftRightIcon },
];

const CourseTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const introRef = useRef<HTMLDivElement>(null);
  const headlinesRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);

    const offset = 160;

    const targetRef = tabId === 1 ? introRef.current : headlinesRef.current;

    if (targetRef) {
      const targetPosition =
        targetRef.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const renderTab = (tab: TabType) => {
    const isSelected = selectedTab === tab.id;
    const tabClass = isSelected
      ? "bg-background text-foreground rounded-full"
      : "text-secondary-700";

    return (
      <li
        key={tab.id}
        className={`${tabClass} flex items-center gap-1 py-1 px-3 cursor-pointer`}
        onClick={() => handleTabClick(tab.id)}
      >
        <tab.icon className="size-5" />
        {tab.label}
      </li>
    );
  };

  return (
    <>
      <div className="sticky top-24 z-10">
        <div className="relative overflow-x-auto">
          <ul className="inline-flex gap-2 bg-secondary-200 border border-border border-secondary-500 md:text-base text-xs rounded-full p-1">
            {tabs.map(renderTab)}
          </ul>
        </div>
      </div>
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={headlinesRef}>
        <Headlines />
      </div>
    </>
  );
};

export default CourseTabs;
