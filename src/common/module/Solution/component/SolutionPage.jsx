import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { SolutionAllItem } from "@/common/constant/CardItem";
export default function SolutionPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Platform Solutions
          </h1>
          <div className=" absolute w-[80%] h-[250px] z-[-99] top-[-70px]">
            <Rails />
            <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Comprehensive tools engineered specifically for towing and recovery operators.
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-10 flex-row justify-center relative flex-wrap">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
        {SolutionAllItem?.map((item, index) => (
          <ComponentTransition
            className="w-full h-auto pb-5 md:basis-[48%] overflow-hidden bg-neutral-100 dark:bg-neutral-950/50 border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl"
            key={index}
            delay={index * 0.1}
          >
            <Image
              src={item.img}
              alt="Header Image"
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-[250px] object-cover scale-110"
            />
            <div className="px-5 py-5">
              <h1 className="md:text-3xl text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                {item.title}
              </h1>
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 mt-2">
                {item.content}
              </p>
            </div>
          </ComponentTransition>
        ))}
      </div>
    </ComponentTransition>
  );
}
