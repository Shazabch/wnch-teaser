import React from "react";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function TheChallenge() {
  return (
    <ComponentTransition delay={0.1} className="w-full py-16 flex flex-col md:flex-row gap-10 items-center justify-between border-t-[1px] border-neutral-300 dark:border-neutral-800 mt-10">
      <div className="md:basis-[50%]">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">The Challenge We Saw</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          The towing industry relied on whiteboards, phone calls, and spreadsheets — leading to long wait times, wasted mileage, and lost revenue. The entire ecosystem was ripe for disruption.
        </p>
      </div>
      <div className="md:basis-[45%] w-full h-[400px] overflow-hidden rounded-3xl">
        <Image
          src="/Website Images/About/The Challenge We Saw.png"
          alt="Traffic Jam Chaos"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </ComponentTransition>
  );
}
