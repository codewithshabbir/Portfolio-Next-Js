"use client";
import React, { useEffect, useRef, useState } from "react";
import Projects from "./Projects";
import { projectsData } from "@/data/projects";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabId, setTabId] = useState<string | null>("core-frontend");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = [
    { id: "core-frontend", label: "Core Frontend" },
    { id: "react-js", label: "React.js Projects" },
    { id: "next-js", label: "Next.js Projects" },
    { id: "mini-projects", label: "Mini Projects" },
    { id: "wordpress-projects", label: "WordPress Projects" },
    { id: "shopify-projects", label: "Shopify Projects" },
  ];

  // Update indicator position on tab change
  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col w-full" data-aos="fade-up">
      {/* Tabs */}
      <div className="bg-white bg-opacity-30 rounded-full p-4 overflow-hidden">
        <div className="relative flex overflow-x-auto whitespace-nowrap scrollbar-hide px-2 py-4">
          {/* sliding indicator */}
          <div
            className="absolute top-2 bottom-2 bg-orange-500 rounded-full transition-all duration-300"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => {
                setActiveTab(index);
                setTabId(tab.id);
              }}
              className={`relative z-10 px-4 py-2 flex-shrink-0 rounded-full transition-all duration-300 ${
                activeTab === index ? "text-white" : "text-white/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="mt-6">
        <Projects
          projectsData={projectsData.filter(
            (project) => project.category === tabId
          )}
        />
      </div>
    </div>
  );
};

export default TabsComponent;
