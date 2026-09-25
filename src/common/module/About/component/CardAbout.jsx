import Image from "@/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { WNCH_APP } from "@/common/constant/AppLinks";
import OurTeam from "./OurTeam";
import TheChallenge from "./TheChallenge";
import OurStory from "./OurStory";

const CardAbout = () => {
  return (
    <div className="py-10 w-full flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] top-[100px] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition delay={0.1} className="w-full h-[20%]  md:basis-[60%] overflow-hidden rounded-3xl">
        <div className="w-full rounded-3xl overflow-hidden">
          <Image
            src="/Website Images/About/Our Mission.png"
            alt="Tow Truck Fleet"
            width={800}
            height={450}
            priority
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-2 w-full justify-center md:justify-start">
          <a href={WNCH_APP.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
            <FaApple size={28} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase">Download on the</span>
              <span className="text-sm font-bold">App Store</span>
            </div>
          </a>
          <a href={WNCH_APP.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
            <FaGooglePlay size={24} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase">GET IT ON</span>
              <span className="text-sm font-bold">Google Play</span>
            </div>
          </a>
        </div>
        <div className="mt-5 py-5 gap-5 h-full ">
          <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <FaBullseye size={50} />
            <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Our Mission
            </h1>
            <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
              At WNCH Hub, our mission is to eliminate chaos in the towing industry. We provide an all-in-one, cloud-based platform that empowers towing businesses to streamline provider matching, automate billing, and track fleets with pinpoint GPS accuracy.
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
            We envision a future where towing operations run autonomously, instantly bridging the gap between motor mechanisms, drivers, and customers. By leveraging AI-driven matching and predictive analytics, our mobile app sets a new standard for operational excellence.
          </p>
        </div>
        <div className="w-full overflow-hidden h-full mt-10  bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/Website Images/About/Our Vision.png"
              alt="Provider Technology"
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover rounded-3xl scale-[1.1]"
            />
          </div>
        </div>
      </ComponentTransition>
      <TheChallenge />
      <OurStory />
      <OurTeam />

    </div>
  );
};

export default CardAbout;
