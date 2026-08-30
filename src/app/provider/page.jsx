"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Rails from "@/common/component/element/Rails";
import StoreButtons from "@/common/component/element/StoreButtons";
import { AppScreenshotSlider } from "@/common/component/element/AppScreenshotSlider";
import { FaUserPlus, FaFileSignature, FaShieldAlt, FaRocket, FaCheckCircle, FaApple, FaGooglePlay } from "react-icons/fa";
import { WNCH_DRIVER_APP } from "@/common/constant/AppLinks";

export default function ProviderPage() {
  const steps = [
    { icon: <FaUserPlus size={30} className="text-white" />, title: "Create Account", body: "Sign up your business in minutes." },
    { icon: <FaFileSignature size={30} className="text-white" />, title: "Submit Documents", body: "Upload licenses, insurance, and vehicle papers." },
    { icon: <FaShieldAlt size={30} className="text-white" />, title: "Admin Verification", body: "Our team reviews and approves your fleet." },
    { icon: <FaRocket size={30} className="text-white" />, title: "Go Live", body: "Start accepting live requests across the GCC." },
  ];

  const tiers = [
    { name: "Standard Jobs", rate: "15%", note: "Towing, Jump Start, Tire Change" },
    { name: "Premium Jobs", rate: "18%", note: "Fuel Delivery, Lockout, Specialty" },
    { name: "Subscription Plan", rate: "10%", note: "For high-volume fleet partners" },
  ];

  const providerSlides = [
    { src: "/assets/provider/1.jpeg", caption: "Available Jobs" },
    { src: "/assets/provider/2.jpeg", caption: "Job Details" },
    { src: "/assets/provider/3.jpeg", caption: "Accepting Request" },
    { src: "/assets/provider/4.jpeg", caption: "En Route Map" },
    { src: "/assets/provider/5.jpeg", caption: "Job Controls" },
    { src: "/assets/provider/6.jpeg", caption: "Chat with Customer" },
    { src: "/assets/provider/8.jpeg", caption: "Earning History" },
    { src: "/assets/provider/9.jpeg", caption: "Profile & Fleet" },
  ];

  const heroBullets = [
    "Accept jobs instantly from your phone",
    "Automated billing — no manual invoices",
    "Real-time GPS routing to every call",
    "Motor club integrations (Agero, AAA, Geico)",
    "Transparent commission — paid on every job",
    // "Join the GCC\'s fastest-growing fleet network",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Hero Banner - drivu style */}
      <section className="w-full mt-[72px]">
        <div className="w-full bg-[#1a3bc7] px-6 md:px-16 xl:px-24 py-8 md:py-10 h-[calc(100vh-72px)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-[-60px] right-[30%] w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

          {/* Left: Text + bullets + badges */}
          <div className="flex flex-col items-start text-left z-10 lg:w-1/2">
            <div className="inline-block bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 mt-4 md:mt-6">
              Provider App
            </div>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
              Grow Your Fleet Business<br />With WNCH
            </h1>
            <ul className="space-y-2 mb-5">
              {heroBullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm md:text-base font-medium">
                  <FaCheckCircle className="text-white shrink-0" size={15} />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-white/80 text-xs mb-4">Available on iPhone &amp; Android devices</p>
            <div className="flex flex-wrap gap-3">
              <a href={WNCH_DRIVER_APP.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaApple size={22} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] uppercase">Download on the</span>
                  <span className="text-xs font-bold">App Store</span>
                </div>
              </a>
              <a href={WNCH_DRIVER_APP.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaGooglePlay size={19} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] uppercase">GET IT ON</span>
                  <span className="text-xs font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Phone mockups - top visible, bottom overflows */}
          <div className="z-10 lg:w-1/2 flex justify-end items-start h-full pt-0 -mt-6 relative">
            {/* Back phone - smaller, behind — original position */}
            <div className="absolute left-4 top-8 w-[140px] md:w-[180px] xl:w-[210px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/20 z-0">
              <img src="/assets/provider/2.jpeg" alt="Provider App Screen 2" className="w-full h-auto" />
            </div>
            {/* Front phone - large, prominent */}
            <div className="relative w-[200px] md:w-[260px] xl:w-[310px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-4 ring-white/40 z-10">
              <img src="/assets/provider/1.jpeg" alt="Provider App Screen 1" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Slider */}
      <section className="w-full py-20 mb-10 overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-y border-neutral-200 dark:border-neutral-800 relative">
        <div className="text-center px-5 mb-4">
          <p className="text-[#1a3bc7] dark:text-[#5c80ff] font-bold tracking-widest uppercase text-sm mb-2">App Interface</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Powerful Tools in Your Pocket</h2>
        </div>
        <AppScreenshotSlider slides={providerSlides} accent="bg-[#1a3bc7]" />
      </section>

      {/* Steps Grid */}
      <section className="w-full max-w-[1500px] px-5 lg:px-10 py-20 border-t-[1px] border-neutral-200 dark:border-neutral-800">
        <div className="text-center mb-16">
          <p className="text-[#1a3bc7] dark:text-[#5c80ff] font-bold tracking-widest uppercase text-sm mb-2">Registration Flow</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">How to Join WNCH</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-6 text-xl max-w-2xl mx-auto">From signup to first provider in days — not weeks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-neutral-300 dark:border-neutral-700" />
          {steps.map((s, i) => (
            <ComponentTransition delay={i * 0.1} key={i} className="flex flex-col items-center text-center p-6 relative">
              <div className="w-20 h-20 bg-[#1a3bc7] rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-[#1a3bc7]/40 z-10 relative">
                {s.icon}
              </div>
              <div className="text-sm font-mono font-bold text-[#1a3bc7] dark:text-[#5c80ff] uppercase tracking-wider mb-3">Step 0{i + 1}</div>
              <h3 className="font-bold text-2xl text-neutral-900 dark:text-neutral-100 mb-3">{s.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{s.body}</p>
            </ComponentTransition>
          ))}
        </div>
      </section>

      {/* Commission Table */}
      <section className="w-full max-w-[1200px] px-5 lg:px-10 py-20 mb-20">
        <div className="text-center mb-16">
          <p className="text-[#1a3bc7] dark:text-[#5c80ff] font-bold tracking-widest uppercase text-sm mb-2">Commissions</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Transparent Commission Structure</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-6 text-xl max-w-2xl mx-auto">No hidden fees. No surprises. Just clear math.</p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 overflow-x-auto shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-300 dark:border-neutral-700">
                <th className="py-4 px-4 font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase text-xs tracking-wider">Job Type</th>
                <th className="py-4 px-4 font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase text-xs tracking-wider text-right">Commission</th>
                <th className="py-4 px-4 font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase text-xs tracking-wider text-right hidden md:table-cell">Includes</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t, i) => (
                <tr key={i} className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-white dark:hover:bg-neutral-900 transition-colors">
                  <td className="py-8 px-4 font-bold text-xl text-neutral-900 dark:text-neutral-100">{t.name}</td>
                  <td className="py-8 px-4 font-bold text-3xl text-[#1a3bc7] dark:text-[#5c80ff] text-right">{t.rate}</td>
                  <td className="py-8 px-4 text-neutral-600 dark:text-neutral-400 text-right hidden md:table-cell text-lg">{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
            <FaCheckCircle className="text-[#8DC421] text-2xl shrink-0 mt-1" />
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">All commission rates are pre-disclosed and applied automatically. View a full breakdown for every job in your Provider Console.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
