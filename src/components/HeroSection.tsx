"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("couple-intro");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[660px] max-h-[920px] overflow-hidden select-none bg-[#fdfaf5] flex flex-col justify-between pt-16 pb-8 text-center">
      {/* Background Palace Garden & Animated Fountain Video */}
      <video
        src="/Wedding_photos/hero-section.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
      />

      {/* Subtle overlay gradient to blend into the ivory page smoothly */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfaf5] via-[#fdfaf5]/60 to-transparent z-0 pointer-events-none" />

      {/* Top Header Text with auspicious Gujarati invocation */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center px-4"
      >
        <span className="font-gujarati text-xs sm:text-sm tracking-[0.25em] font-semibold text-[#8b6533] uppercase mb-1">
          શુભ લગ્ન
        </span>

        {/* Bride Name */}
        <h1 className="font-gujarati text-5xl sm:text-6xl font-bold text-[#4a2e12] tracking-wide drop-shadow-sm mt-1">
          માનસી
        </h1>

        {/* Calligraphic & */}
        <span className="font-script text-4xl sm:text-5xl text-[#c9953a] my-[-6px] drop-shadow">
          &
        </span>

        {/* Groom Name */}
        <h2 className="font-gujarati text-5xl sm:text-6xl font-bold text-[#4a2e12] tracking-wide drop-shadow-sm">
          હર્ષિલ
        </h2>

        {/* Venue / City line */}
        <p className="font-gujarati text-xs sm:text-sm font-medium text-[#7a5931] mt-3 tracking-wider bg-white/75 px-4 py-1.5 rounded-full backdrop-blur-[2px] border border-[#c9953a]/30 shadow-sm">
          ધ રોયલ ગાર્ડન્સ, ધૌલીલા - નવી દિલ્હી
        </p>
      </motion.div>

      {/* Bottom Scroll Indicator Mouse */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/80 flex items-start justify-center p-1 bg-black/15 backdrop-blur-[1px]">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-2 rounded-full bg-white"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-white drop-shadow stroke-[3]" />
      </motion.div>
    </section>
  );
}
