"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Rails from "@/common/component/element/Rails";
import StoreButtons from "@/common/component/element/StoreButtons";
import { AppScreenshotSlider } from "@/common/component/element/AppScreenshotSlider";
import { FaBolt, FaMapMarkerAlt, FaShieldAlt, FaStar, FaCreditCard, FaBell } from "react-icons/fa";

export default function CustomerPage() {
  const features = [
    {
      icon: <FaBolt size={30} className="text-[#8DC421]" />,
      title: "Instant Dispatch",
      body: "Your request is pushed to nearby verified providers the moment you submit. Average response under 8 minutes.",
    },
    {
      icon: <FaMapMarkerAlt size={30} className="text-[#8DC421]" />,
      title: "Live GPS Tracking",
      body: "Watch your provider navigate to you on a live map. Share your exact location with a single tap.",
    },
    {
      icon: <FaShieldAlt size={30} className="text-[#8DC421]" />,
      title: "Verified Providers Only",
      body: "Every provider is verified with business licenses, insurance, and fleet documents before going live.",
    },
    {
      icon: <FaStar size={30} className="text-[#8DC421]" />,
      title: "Rate Your Experience",
      body: "After every job, rate and review your provider. This keeps our network quality consistently high.",
    },
    {
      icon: <FaCreditCard size={30} className="text-[#8DC421]" />,
      title: "Transparent Pricing",
      body: "See exact service pricing upfront — no hidden fees, no surprise charges when the job is done.",
    },
    {
      icon: <FaBell size={30} className="text-[#8DC421]" />,
      title: "Real-Time Notifications",
      body: "Get notified at every step: provider accepted, en route, arrived, and job completed.",
    },
  ];

  const services = [
    { name: "Towing", emoji: "🚛", range: "SAR 120–250" },
    { name: "Jump Start", emoji: "⚡", range: "SAR 60–100" },
    { name: "Tire Change", emoji: "🔧", range: "SAR 80–140" },
    { name: "Fuel Delivery", emoji: "⛽", range: "SAR 70–120" },
    { name: "Lockout", emoji: "🔑", range: "SAR 90–160" },
    { name: "Battery", emoji: "🔋", range: "SAR 280–450" },
  ];

  const customerSlides = [
    { src: "/assets/customer/1.jpeg", caption: "Home Screen" },
    { src: "/assets/customer/2.jpeg", caption: "Select Service" },
    { src: "/assets/customer/3.jpeg", caption: "Confirm Location" },
    { src: "/assets/customer/4.jpeg", caption: "Provider Matching" },
    { src: "/assets/customer/5.jpeg", caption: "Live Tracking" },
    { src: "/assets/customer/6.jpeg", caption: "Job Completed" },
    { src: "/assets/customer/7.jpeg", caption: "Payment Receipt" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-[1500px] px-5 lg:px-10 mt-32 md:mt-40 mb-20 flex flex-col lg:flex-row items-center justify-between relative gap-10">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-50 glowbg mix-blend-screen pointer-events-none"></div>
        <div className="absolute w-[90%] top-[10%] h-[500px] z-[-2]">
          <Rails />
          <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
        </div>

        <div className="lg:w-1/2 flex flex-col items-start text-left z-10">
          <div className="border-[1px] rounded-full border-[#8DC421] py-2 px-5 mb-6 bg-[#8DC421]/10 text-[#8DC421] font-semibold text-sm">
            Customer App
          </div>
          <H1
            className="!leading-[1.1em] dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl font-bold pb-4 text-left"
            title="Help is minutes away. Wherever you are."
          />
          <p className="text-xl mt-6 dark:text-neutral-300 text-neutral-700 leading-relaxed max-w-xl mb-10">
            Stranded on the road? The WNCH app connects you to verified roadside providers instantly. 24/7, across the GCC.
          </p>

          <StoreButtons light={true} />

          <div className="mt-14 flex gap-8 md:gap-12 items-center">
            <div>
              <div className="text-3xl xl:text-4xl font-extrabold text-[#8DC421]">8 min</div>
              <div className="text-xs font-semibold text-neutral-500 mt-2 uppercase tracking-wider">Avg Response</div>
            </div>
            <div className="w-[1px] h-12 bg-neutral-300 dark:bg-neutral-800" />
            <div>
              <div className="text-3xl xl:text-4xl font-extrabold text-[#8DC421]">4.8★</div>
              <div className="text-xs font-semibold text-neutral-500 mt-2 uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="w-[1px] h-12 bg-neutral-300 dark:bg-neutral-800" />
            <div>
              <div className="text-3xl xl:text-4xl font-extrabold text-[#8DC421]">5 GCC</div>
              <div className="text-xs font-semibold text-neutral-500 mt-2 uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0">
          <div className="relative w-[320px] md:w-[400px] xl:w-[450px] h-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(141,196,33,0.4)] ring-1 ring-white/10">
            <img src="/assets/customer-app-screen.png" alt="Customer App Preview" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* App Screenshots Slider */}
      <section className="w-full py-20 mb-10 overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-y border-neutral-200 dark:border-neutral-800 relative">
        <div className="text-center px-5 mb-4">
          <p className="text-[#8DC421] font-bold tracking-widest uppercase text-sm mb-2">App Interface</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Simple, Fast, Intuitive</h2>
        </div>
        <AppScreenshotSlider slides={customerSlides} accent="bg-[#8DC421]" />
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-[1500px] px-5 lg:px-10 py-20 border-t-[1px] border-neutral-200 dark:border-neutral-800">
        <div className="text-center mb-16">
          <p className="text-[#8DC421] font-bold tracking-widest uppercase text-sm mb-2">Services Available</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Every Roadside Need, Covered</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <ComponentTransition delay={i * 0.1} key={i} className="flex flex-col items-center justify-center py-8 px-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl hover:border-[#8DC421] hover:bg-white dark:hover:bg-neutral-900 transition-all cursor-pointer shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4">{s.emoji}</div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100">{s.name}</h3>
              <p className="text-xs font-mono text-neutral-400 mt-2">{s.range}</p>
            </ComponentTransition>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-[1500px] px-5 lg:px-10 py-20 mb-20 bg-neutral-50 dark:bg-[#0a0a0a] rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <div className="text-center mb-16">
          <p className="text-[#8DC421] font-bold tracking-widest uppercase text-sm mb-2">App Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Built for the Moment You Need Help</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-6 text-xl max-w-2xl mx-auto">Every feature is designed around getting you real help, fast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <ComponentTransition delay={i * 0.1} key={i} className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#8DC421]/10 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">{f.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{f.body}</p>
            </ComponentTransition>
          ))}
        </div>
      </section>
    </div>
  );
}
