import Image from "@/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import OurTeam from "./OurTeam";
import TheChallenge from "./TheChallenge";
import OurStory from "./OurStory";

const CardAbout = () => {
  return (
    <div className="py-10 w-full flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] top-[100px] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition delay={0.1} className="w-full h-[20%]  md:basis-[60%] overflow-hidden rounded-3xl">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
          alt="Tow Truck Fleet"
          width={400}
          height={400}
          priority
          className="w-full h-auto object-cover rounded-3xl"
          />
          </div>
        <div className="mt-5 py-5 gap-5 h-full ">
          <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <FaBullseye size={50} />
            <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Our Mission
            </h1>
            <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
              At WNCH Hub, our mission is to eliminate the chaos and inefficiencies inherent in the traditional towing and roadside assistance industry. We recognized that fleet owners and dispatchers were relying on fragmented systems, whiteboards, and endless phone calls to manage their daily operations. By delivering an all-in-one, cloud-based platform, we empower towing businesses of all sizes to streamline their dispatching, automate their billing, track their fleets with pinpoint GPS accuracy, and ultimately provide a vastly superior experience to stranded motorists.
            </p>
          </div>
        </div>
      </ComponentTransition>
      <ComponentTransition delay={0.1} className=" py-5 md:basis-[35%] gap-5 h-full ">
        <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <TbDeviceVisionPro size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Our Vision
          </h1>
          <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
            We envision a future where towing operations run autonomously, bridging the gap between motor clubs, drivers, and customers instantly. WNCH Hub aims to be the undisputed digital backbone of the global roadside assistance network. By continuously leveraging AI-driven dispatching, predictive analytics, and seamless API integrations, we are setting a new standard for operational excellence. Our ultimate goal is to ensure every tow truck operates at maximum capacity, with zero deadhead miles, while motorists receive help faster than ever before.
          </p>
        </div>
        <div className="w-full overflow-hidden h-full mt-10  bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <div className="w-full h-[380px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
          alt="Dispatcher Technology"
          width={400}
          height={400}
          priority
          className="w-full h-auto object-cover rounded-3xl"
          />
          </div>
        </div>
      </ComponentTransition>
      <TheChallenge />
      <OurStory />
      <OurTeam/>

    </div>
  );
};

export default CardAbout;
