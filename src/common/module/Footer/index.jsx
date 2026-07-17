import React from "react";
import { FooterItem } from "@/common/constant/FooterItem";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import TextAnimated from "../Faq/component/TextAnimated";
import StoreButtons from "@/common/component/element/StoreButtons";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center">
        {FooterItem?.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            className="flex flex-col"
            key={index}
          >
            <h1 className="text-2xl font-bold py-3 px-2 md:px-2">
              {item.title}
            </h1>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_1.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={index * 0.2}
                >
                  {item.child_1.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_2.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_2.title}
                </TextAnimated>
              </Link>
            </div>
            {item.child_3 && (
              <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
                <Link href={item.child_3.href} className="">
                  <TextAnimated
                    delay={1}
                    className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  >
                    {item.child_3.title}
                  </TextAnimated>
                </Link>
              </div>
            )}
          </ComponentTransition>
        ))}
      </div>
      <div className="flex justify-center pb-20 items-center flex-col mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-10">
        <StoreButtons className="mb-10" />
        <div className="gap-6 flex mb-6 justify-center items-center w-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
          <FaMedium size={24} className="cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
          <FaTwitter size={24} className="cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
          <FaLinkedin size={24} className="cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
          <FaDiscord size={24} className="cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-sm text-neutral-500">© {new Date().getFullYear()} WNCH. All Rights Reserved.</h1>
          <div className="flex gap-4 text-xs text-neutral-500 mt-2">
            <Link href="/privacy" className="hover:text-[#8dc421] dark:hover:text-[#8dc421] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
