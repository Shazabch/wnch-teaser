"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Rails from "@/common/component/element/Rails";
import StoreButtons from "@/common/component/element/StoreButtons";
import { AppScreenshotSlider } from "@/common/component/element/AppScreenshotSlider";
import { FaBolt, FaMapMarkerAlt, FaShieldAlt, FaStar, FaCreditCard, FaBell, FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";

export default function CustomerPage() {
  const features = [
    {
      icon: <FaBolt size={30} className="text-[#8DC421]" />,
      title: "Instant Provider",
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
    { name: "Towing", emoji: "🚛", range: "AED 120–250" },
    { name: "Jump Start", emoji: "⚡", range: "AED 60–100" },
    { name: "Tire Change", emoji: "🔧", range: "AED 80–140" },
    { name: "Fuel Delivery", emoji: "⛽", range: "AED 70–120" },
    { name: "Lockout", emoji: "🔑", range: "AED 90–160" },
    { name: "Battery", emoji: "🔋", range: "AED 280–450" },
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

  const heroBullets = [
    "Average 8 min response time",
    "Live GPS tracking to your provider",
    "Verified & insured providers only",
    "Transparent pricing — no hidden fees",
    "Real-time notifications at every step",
    "Available 24/7 across the GCC",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Hero Banner - drivu style */}
      <section className="w-full mt-[72px]">
        <div className="w-full bg-white px-6 md:px-16 xl:px-24 py-8 md:py-10 h-[calc(100vh-72px)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#1B3FAB]/5 rounded-full pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[40%] w-48 h-48 bg-[#1B3FAB]/5 rounded-full pointer-events-none" />

          {/* Left: Text + bullets + badges */}
          <div className="flex flex-col items-start text-left z-10 lg:w-1/2">
            <div className="inline-block bg-[#1B3FAB]/10 text-[#1B3FAB] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Customer App
            </div>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-[#1B3FAB] leading-tight mb-4">
              Help is minutes away.<br />Wherever you are.
            </h1>
            <ul className="space-y-2 mb-5">
              {heroBullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1B3FAB] text-sm md:text-base font-medium">
                  <FaCheckCircle className="text-[#1B3FAB] shrink-0" size={15} />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-[#1B3FAB]/60 text-xs mb-4">Available on iPhone &amp; Android devices</p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaApple size={22} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] uppercase">Download on the</span>
                  <span className="text-xs font-bold">App Store</span>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaGooglePlay size={19} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] uppercase">GET IT ON</span>
                  <span className="text-xs font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Phone mockups - top visible, bottom overflows */}
          <div className="z-10 lg:w-1/2 flex justify-end items-start h-full pt-0 -mt-6 relative">
            {/* Back phone - smaller, offset left, behind — original position */}
            <div className="absolute left-4 top-8 w-[140px] md:w-[180px] xl:w-[210px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/20 z-0">
              <img src="/assets/customer/2.jpeg" alt="App Screen 2" className="w-full h-auto" />
            </div>
            {/* Front phone - large, prominent, in front */}
            <div className="relative w-[200px] md:w-[260px] xl:w-[310px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-4 ring-white/40 z-10">
              <img src="/assets/customer/1.jpeg" alt="App Screen 1" className="w-full h-auto" />
            </div>
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
