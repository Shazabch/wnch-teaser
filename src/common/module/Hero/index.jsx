"use client";
import Buttons from "@/common/component/element/Buttons";
import ImgScale from "@/common/module/Hero/component/ImgScale";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "@/common/component/element/Image";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HeroImage, AllHeroImages } from "@/common/constant/HeroImage";
import { Parallax } from "@/common/constant/Parallax";
import H1 from "@/common/component/element/H1";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

export const translateVariantText = {
  initial: {
    opacity: 0,
    y: 150,
    height: "10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "250px",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 3,
    },
  },
};

export const tranlateVariant = {
  initial: {
    opacity: 0,
    y: 150,
    // height: '10px'
  },
  animate: {
    opacity: 1,
    y: 0,
    // height: 'auto',
    transition: {
      delay: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t, y } = Parallax(scrollY);
  const [images, setImages] = React.useState(HeroImage);

  React.useEffect(() => {
    const shuffled = [...AllHeroImages].sort(() => 0.5 - Math.random());
    setImages(shuffled.slice(0, 6).map(img => ({ img })));
  }, []);

  return (
    <div className="h-auto md:mb-20 max-w-[1500px] px-5 lg:px-10 mt-20 relative overflow-hidden">
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36  items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="border-[1px] rounded-full border-[#5515df] py-2 px-5">
            <h1>The #1 Dispatch Platform 🚀 </h1>
          </div>
          <H1
            className=" xl:w-[80%] 2xl:w-[80%] !leading-[0.85em] items-center flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-center text-4xl sm:text-5xl md:text-7xl w-full  font-bold pb-1"
            title="Revolutionizing Towing & Recovery"
          />

          <p className="lg:w-[70%] text-center  lg:text-2xl mt-2 dark:text-neutral-300 text-neutral-700">
            Elevate your dispatch workflow with WNCH. The ultimate solution designed for
            seamless operations, real-time tracking, and instant job dispatching.
          </p>

          <motion.div className="flex max-md:flex-col w-full items-center justify-center gap-5 py-5">
            <Link href="/customer">
              <ButtonSpot
                title="Customer App"
                className="!rounded-md !w-auto !py-3 !px-8 !bg-[#8DC421] dark:!bg-[#8DC421] !text-black font-bold"
                noBlend={true}
                circleClassName="bg-white/40 dark:bg-white/40"
              />
            </Link>
            <Link href="/provider">
              <ButtonSpot
                title="Provider App"
                className="!rounded-md !w-auto !py-3 !px-8 font-bold"
              />
            </Link>
          </motion.div>
        </div>

        <div className=" absolute w-[90%] top-[20%] h-[300px] z-[-99] ">
          <Rails />
          <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
        </div>

        <motion.div
          className="w-[100%] h-full xl:mt-10 mt-32 sm:mt-28 flex gap-1 lg:px-10 overflow-hidden "
          style={{
            translateY: t,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {images.map((item, index) => (
            <ComponentTransition
              delay={index * 0.1}
              key={index}
              className=" overflow-hidden rounded-xl w-full"
            >
              <Image
                alt="Hero"
                className="overflow-hidden w-full h-auto"
                height={550}
                src={item.img}
                width={550}
                priority
              />
            </ComponentTransition>
          ))}
        </motion.div>

        {/* <ImgScale /> */}
      </div>
    </div>
  );
};

export default Hero;
