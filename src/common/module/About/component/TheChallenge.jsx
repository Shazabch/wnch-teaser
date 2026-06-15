import React from "react";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function TheChallenge() {
  return (
    <ComponentTransition delay={0.1} className="w-full py-16 flex flex-col md:flex-row gap-10 items-center justify-between border-t-[1px] border-neutral-300 dark:border-neutral-800 mt-10">
      <div className="md:basis-[50%]">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">The Challenge We Saw</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          For decades, the towing and roadside assistance industry has been plagued by extreme fragmentation and operational bottlenecks. Dispatchers were forced to rely on chaotic whiteboards, frantic phone calls, and manual spreadsheets to route drivers. 
        </p>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          This lack of digital infrastructure led to massive inefficiencies: long wait times for stranded motorists, high deadhead mileage for fleet owners, and lost revenue due to missed calls and inaccurate billing. Motor clubs and insurance companies struggled with poor visibility, unable to give their customers accurate ETAs. The entire ecosystem was ripe for disruption.
        </p>
      </div>
      <div className="md:basis-[45%] w-full h-[400px] overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop"
          alt="Traffic Jam Chaos"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </ComponentTransition>
  );
}
