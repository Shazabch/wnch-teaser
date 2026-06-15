import React from "react";
import { FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa";

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 lg:px-10 px-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Core Values
            </h2>
            <p className="max-w-[900px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            The principles that guide our development, shape our culture, and ensure we deliver the best possible platform for your towing business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-stretch gap-6 mt-12">
          
          <div className="group flex flex-col items-center text-center p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-300 dark:border-neutral-800 transition-all hover:scale-[1.02]">
            <div className="p-5 bg-[#8DC421]/20 rounded-full mb-6">
              <FaShieldAlt size={40} className="text-[#8DC421]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Unwavering Reliability</h3>
            <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
              Your dispatch board is the heart of your business. We engineer our platform for 99.99% uptime, ensuring you never miss a call, day or night.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-300 dark:border-neutral-800 transition-all hover:scale-[1.02]">
            <div className="p-5 bg-[#8DC421]/20 rounded-full mb-6">
              <FaRocket size={40} className="text-[#8DC421]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Relentless Innovation</h3>
            <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
              We don't settle for the status quo. From AI-driven dispatching to predictive analytics, we continuously push the boundaries of what's possible.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-300 dark:border-neutral-800 transition-all hover:scale-[1.02]">
            <div className="p-5 bg-[#8DC421]/20 rounded-full mb-6">
              <FaHandshake size={40} className="text-[#8DC421]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">True Partnership</h3>
            <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
              We aren't just a software vendor; we are your technology partner. Our success is entirely dependent on the growth and efficiency of your fleet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
