// components/HeroSection.tsx
"use client";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative bg-[#7ed957]">
      <div className="relative z-10 container px-4 md:px-6">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-gray-100 dark:text-gray-300">
                Manage Your Coal Mine's Carbon Footprint
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  With EcoTrail
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/image.png`}
            alt="EcoTrail Hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
