"use client";
import React from "react";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { WNCH_APP } from "@/common/constant/AppLinks";

export default function StoreButtons({ className = "", light = false, app = WNCH_APP }) {
  const btnClass = `flex items-center justify-center gap-2.5 px-5 py-2 rounded-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
    light
      ? "bg-white border-[1px] border-neutral-300 text-black hover:bg-neutral-50 shadow-sm"
      : "bg-black dark:bg-white border-[1px] border-neutral-800 dark:border-neutral-200 text-white dark:text-black hover:bg-neutral-900 dark:hover:bg-neutral-100 shadow-md"
  }`;

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link href={app.appStore} target="_blank" rel="noopener noreferrer" className={btnClass}>
        <FaApple size={32} className="mb-1" />
        <div className="flex flex-col items-start justify-center leading-none">
          <span className="text-[11px] font-normal opacity-90 tracking-wide">Download on the</span>
          <span className="text-[22px] font-semibold tracking-tight mt-0.5">App Store</span>
        </div>
      </Link>

      <Link href={app.playStore} target="_blank" rel="noopener noreferrer" className={btnClass}>
        <FaGooglePlay size={27} />
        <div className="flex flex-col items-start justify-center leading-none">
          <span className="text-[10px] font-semibold opacity-90 tracking-wider uppercase">GET IT ON</span>
          <span className="text-[21px] font-semibold tracking-tight mt-0.5">Google Play</span>
        </div>
      </Link>
    </div>
  );
}
