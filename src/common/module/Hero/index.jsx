"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import H1 from "@/common/component/element/H1";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

/* ─── floating particle ─── */
const Particle = ({ x, y, size, delay }) => (
  <motion.div
    className="absolute rounded-full bg-[#5515df] pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity: 0 }}
    animate={{ y: [0, -30, 0], opacity: [0, 0.35, 0] }}
    transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── animated stat pill ─── */
const StatPill = ({
  value, label, delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
    className="flex items-center gap-3 bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5"
  >
    <span className="text-[#8DC421] font-bold text-lg leading-none">{value}</span>
    <span className="text-neutral-400 text-sm">{label}</span>
  </motion.div>
);

/* ─── tilt card wrapper ─── */
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-6, 6]), { stiffness: 200, damping: 25 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

/* ─── pulsing ring behind mockup ─── */
const PulseRing = ({ delay }) => (
  <motion.div
    className="absolute inset-0 rounded-full border border-[#5515df]/20 pointer-events-none"
    initial={{ scale: 0.8, opacity: 0.6 }}
    animate={{ scale: 1.6, opacity: 0 }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
  />
);

/* ─── floating badge ─── */
const FloatingBadge = ({
  icon, label, value, className, delay,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "backOut" }}
    whileHover={{ scale: 1.05 }}
    className={`absolute z-20 flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl px-3 py-2 shadow-lg ${className}`}
  >
    <span className="text-lg">{icon}</span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-neutral-500 dark:text-neutral-400">{label}</span>
      <span className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</span>
    </div>
  </motion.div>
);

/* ─── main hero ─── */
const Hero = () => {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }))
  );

  /* subtle ambient glow that follows cursor on the whole section */
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const handleSectionMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <div
      className="min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] lg:min-h-[600px] w-full max-w-[1500px] px-5 lg:px-10 mt-[72px] mx-auto overflow-hidden relative pb-10 lg:pb-0"
      onMouseMove={handleSectionMove}
    >
      {/* ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}% ${y}%, rgba(85,21,223,0.08) 0%, transparent 70%)`
          ),
        }}
      />

      {/* particles */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      <div className="flex flex-col lg:flex-row justify-between lg:h-full items-center gap-8 lg:gap-10 relative z-10 py-10 lg:py-0">

        {/* ── Left: Text ── */}
        <div className="flex flex-col items-start justify-center lg:w-[45%] z-10">

          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#5515df]/50 rounded-full py-1 px-4 mb-4 flex items-center gap-2"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#5515df] inline-block"
            />
            <span className="text-sm md:text-base">The #1 Provider Platform</span>
          </motion.div> */}

          <H1
            className="!leading-[1.1em] items-start flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-left text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl w-full font-bold pb-2"
            title="Towing & Recovery Service"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-left text-base lg:text-lg mt-2 dark:text-neutral-300 text-neutral-700 max-w-xl"
          >
            Streamline operations, track fleets in real-time, and match providers instantly.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex max-md:flex-col w-full items-start justify-start gap-4 py-4"
          >
            <Link href="/customer">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <ButtonSpot
                  title="Customer App"
                  className="!rounded-md !w-auto !py-3 !px-8 !bg-[#8DC421] dark:!bg-[#8DC421] !text-black font-bold"
                  noBlend={true}
                  circleClassName="bg-white/40 dark:bg-white/40"
                />
              </motion.div>
            </Link>
            <Link href="/provider">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <ButtonSpot
                  title="Provider App"
                  className="!rounded-md !w-auto !py-3 !px-8 font-bold dark:!text-black"
                  noBlend={true}
                  circleClassName="bg-white/20 dark:bg-white/20"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mt-1">
            <StatPill value="2,400+" label="Active Providers" delay={0.9} />
            <StatPill value="98%" label="Response Rate" delay={1.05} />
            <StatPill value="4.9★" label="Avg Rating" delay={1.2} />
          </div>
        </div>

        {/* ── Right: Mockup ── */}
        <div className="w-full lg:w-[55%] lg:h-full flex justify-center lg:justify-end items-center relative px-5 mt-8 lg:mt-0 pb-10 lg:pb-0">

          {/* colorful background glow blobs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible">
            <div className="relative w-[120%] h-[120%] max-w-[600px] max-h-[600px]">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[10%] w-64 h-64 bg-[#5515df] rounded-full blur-[80px]"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-[#8DC421] rounded-full blur-[80px]"
              />
            </div>
          </div>

          {/* pulse rings centred on image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative w-48 h-48">
              <PulseRing delay={0} />
              <PulseRing delay={1.2} />
              <PulseRing delay={2.4} />
            </div>
          </div>

          {/* floating badges */}
          <FloatingBadge
            icon="🚗"
            label="Nearest provider"
            value="1.2 km away"
            className="top-[5%] lg:top-[18%] -left-2 lg:-left-8"
            delay={1.4}
          />
          <FloatingBadge
            icon="⚡"
            label="ETA"
            value="8 minutes"
            className="bottom-[15%] lg:bottom-[22%] -left-2 lg:-left-6"
            delay={1.6}
          />
          <FloatingBadge
            icon="✅"
            label="Job status"
            value="En route"
            className="top-[20%] lg:top-[30%] -right-2 lg:-right-4"
            delay={1.8}
          />

          {/* tilt mockup */}
          <TiltCard>
            <motion.img
              src="/1A.png"
              alt="WNCH App Mockup"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="w-full h-auto max-w-[500px] lg:max-w-none lg:w-[110%] xl:w-[115%] lg:-ml-10 object-contain drop-shadow-2xl max-h-[60vh] lg:max-h-[75vh] mt-11"
            />
          </TiltCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;  