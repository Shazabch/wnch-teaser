import React from "react";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function OurStory() {
  return (
    <ComponentTransition delay={0.2} className="w-full py-16 flex flex-col-reverse md:flex-row gap-10 items-center justify-between border-t-[1px] border-neutral-300 dark:border-neutral-800">
      <div className="md:basis-[45%] w-full h-[400px] overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
          alt="Modern Dispatch Dashboard"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:basis-[50%]">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">Our Story & Solution</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          We built WNCH Hub to solve these exact problems. Combining deep industry expertise with top-tier software engineering, we developed a cloud-native platform that centralizes the entire towing workflow into one intuitive interface.
        </p>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          By integrating real-time GPS fleet tracking, direct motor club API connections, and automated digital invoicing, we effectively eliminated the friction of manual dispatching. Today, WNCH Hub processes thousands of rescue operations daily, helping fleets scale their business, increase driver commissions, and get motorists back on the road safely and swiftly.
        </p>
      </div>
    </ComponentTransition>
  );
}
