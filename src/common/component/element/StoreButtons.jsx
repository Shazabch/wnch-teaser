"use client";
import React from "react";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function StoreButtons({ className = "", light = false }) {
  const btnClass = `flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
    light 
      ? "bg-white border-neutral-200 text-black hover:shadow-lg" 
      : "bg-black border-neutral-800 text-white hover:bg-neutral-900"
  }`;

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link href="#" className={btnClass}>
        <FaApple size={28} className="mb-1" />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium opacity-80">Download on the</span>
          <span className="text-[17px] font-semibold -mt-0.5">App Store</span>
        </div>
      </Link>
      
      <Link href="#" className={btnClass}>
        <FaGooglePlay size={24} />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium opacity-80 uppercase tracking-wide">Get it on</span>
          <span className="text-[16px] font-semibold -mt-0.5">Google Play</span>
        </div>
      </Link>
    </div>
  );
}
