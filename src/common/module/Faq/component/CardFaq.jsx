import Buttons from "@/common/component/element/Buttons";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import FaqAccordian from "@/common/component/element/FaqAccordian";
import Image from "@/common/component/element/Image";
import React from "react";
import Link from "next/link";
import { FaHeadset } from "react-icons/fa";

const CardFaq = () => {
  return (
    <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      <FaqAccordian />

      <ComponentTransition className="border-[1px] border-neutral-600 rounded-3xl max-md:flex-col flex">
        <div className="w-full h-auto md:h-[400px] md:basis-[50%] overflow-hidden  max-md:rounded-t-3xl  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800"
            alt="Customer Support"
            width={800}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover relative"
          />
        </div>
        <div className="w-full px-5 lg:px-10 py-5 md:basis-[50%] h-[400px] bg-neutral-50 dark:bg-neutral-950/50   rounded-br-3xl rounded-tr-3xl flex flex-col justify-center">
          <FaHeadset size={50} className="mb-4 text-[#8DC421]" />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-300">
            24/7 Priority Support
          </h1>
          <p className="text-base mb-10 text-neutral-700 mt-2 max-xl:line-clamp-5 dark:text-neutral-300">
            Can't find the answers you're looking for in the documentation? Our dedicated Customer Success team is available around the clock to help you configure your dispatch board, structure your pricing, and get your fleet running smoothly.
          </p>
          <Link href="/contact">
            <Buttons className="!px-10 " title="Contact Support" />
          </Link>
        </div>
      </ComponentTransition>
    </div>
  );
};

export default CardFaq;
