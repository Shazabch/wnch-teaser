import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <WiDayCloudy size={50} />
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Intelligent Dispatch
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
          Elevate Your Fleet with WNCH Dispatch Hub!
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
          Unveil the future of efficiency with WNCH – a cutting-edge
          platform designed to streamline your towing operations
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=800"
          alt="Tow Truck"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover scale-130 -translate-y-40"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c"
          alt="Tow Truck Flatbed"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          WNCH Platform
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Your Gateway to Operational Excellence
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Dive into the future of efficient dispatch operations with WNCH
          Hub. Our solution is crafted to streamline your towing experience
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <div className="absolute  glowbg inset-0  left-0 "></div>
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Unlocking Potential
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          WNCH Hub - Redefining Productivity
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Tailored dispatch solutions to meet your specific towing business needs and goals.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Simplify, Optimize, Succeed
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Your Gateway to Fleet Excellence
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Simplify your dispatch experience with WNCH, where optimization meets
          success
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Efficiency Redefined
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          WNCH - Your Strategic Partner!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          WNCH Dispatch Hub is more than a software; it&rsquo;s your strategic partner in achieving operational excellence
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Scale with Confidence
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          WNCH Unleashes Growth!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          WNCH Hub invites you to scale your business with confidence. Our platform is a catalyst for fleet growth
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Tailored Solutions for Your Fleet!
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          WNCH Adapts to You!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Your towing business deserves a tailored solution. Enter WNCH Hub – a platform customizable to meet your unique operational needs.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8"
          alt="Heavy Tow Truck"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover scale-110"
        />
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Fast-Track Your Dispatching
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          WNCH Accelerates Your Operations!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          WNCH Hub is your express route to success. With streamlined assignments and accelerated functionalities
        </p>
      </ComponentTransition>
    </div>
  );
};

export default Card;
