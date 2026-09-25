import React from "react";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function OurStory() {
  return (
    <ComponentTransition delay={0.2} className="w-full py-16 flex flex-col-reverse md:flex-row gap-10 items-center justify-between border-t-[1px] border-neutral-300 dark:border-neutral-800">
      <div className="md:basis-[45%] w-full h-[400px] overflow-hidden rounded-3xl">
        <Image
          src="/Website Images/About/Our Story & Solution.png"
          alt="Modern Provider Dashboard"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:basis-[50%]">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">Our Story & Solution</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          We built WNCH Hub to centralize the entire towing workflow. With real-time GPS tracking, motor club API integrations, and automated invoicing, we help fleets scale their business and get motorists back on the road faster.
        </p>
      </div>
    </ComponentTransition>
  );
}
