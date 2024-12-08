"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Carbon Emission Tracking",
    description:
      "Track and monitor carbon emissions from all mining activities in real time. EcoTrail helps you visualize and reduce your mine's environmental footprint by analyzing excavation, transportation, and equipment usage data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#319e0d,#7ed957)] flex items-center justify-center text-white">
        Carbon Emission Tracking
      </div>
    ),
  },
  {
    title: "Carbon Neutrality Pathways",
    description:
      "Simulate the impact of adopting clean technologies, afforestation projects, and renewable energy. EcoTrail provides you with actionable insights to drive your mine towards carbon neutrality.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/neutrality.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Carbon neutrality demo"
        />
      </div>
    ),
  },
  {
    title: "Afforestation Offsets",
    description:
      "Calculate the amount of land required for tree plantation to offset your mine's carbon emissions. EcoTrail helps you explore afforestation as a viable solution to balance emissions and carbon sinks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#2b580c,#76b947)] flex items-center justify-center text-white">
        Afforestation Offsets
      </div>
    ),
  },
  {
    title: "Carbon Credit Estimation",
    description:
      "Estimate potential carbon credits your mine could earn based on emission reduction initiatives. EcoTrail provides detailed reports and visualizations to help you navigate the carbon credit market effectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#4caf50,#81c784)] flex items-center justify-center text-white">
        Carbon Credit Estimation
      </div>
    ),
  },
];

export function Features() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
