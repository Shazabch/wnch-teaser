"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Rails from "@/common/component/element/Rails";
import StoreButtons from "@/common/component/element/StoreButtons";
import { AppScreenshotSlider } from "@/common/component/element/AppScreenshotSlider";
import { FaUserPlus, FaFileSignature, FaShieldAlt, FaRocket, FaCheckCircle } from "react-icons/fa";

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
          <div className="border-[1px] rounded-full border-[#1a3bc7] py-2 px-5 mb-6 bg-[#1a3bc7]/10 text-[#1a3bc7] dark:text-[#5c80ff] font-semibold text-sm">
            Provider App
          </div>
          <H1
            className="!leading-[1.1em] dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl font-bold pb-4 text-left"
            title="Grow Your Fleet Business With WNCH"
          />
          <p className="text-xl mt-6 dark:text-neutral-300 text-neutral-700 leading-relaxed max-w-xl mb-10">
            Join the GCC's fastest-growing dispatch network. More jobs, smarter tools, automated payments.
          </p>
          <StoreButtons light={false} className="mb-4" />
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0">
          <div className="relative w-[320px] md:w-[400px] xl:w-[450px] h-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(26,59,199,0.4)] ring-1 ring-white/10">
            <img src="/assets/provider-app-screen.png" alt="Provider App Preview" className="w-full h-auto" />
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
          <p className="text-neutral-600 dark:text-neutral-400 mt-6 text-xl max-w-2xl mx-auto">From signup to first dispatch in days — not weeks.</p>
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
