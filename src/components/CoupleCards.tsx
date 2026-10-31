"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function CoupleCards() {
  return (
    <section id="couple-intro" className="relative w-full py-12 px-5 flex flex-col items-center text-center">
      {/* Background delicate leaf watermark */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/Wedding_photos/imgi_14_leaf.0cz-7-hb3q95h.png"
          alt="Leaf Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8"
      >
        <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
          મંગલમય અને હર્ષોલ્લાસ સાથે
        </span>
        <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-1 leading-snug">
          અમે લગ્નગ્રંથિથી જોડાઈ<br />રહ્યા છીએ
        </h2>
      </motion.div>

      {/* Bride Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-col items-center mb-6"
      >
        <div className="w-16 h-16 rounded-full border-2 border-[#c9953a]/60 bg-[#fdfaf5] flex items-center justify-center shadow-md mb-3">
          <span className="font-playfair text-2xl font-semibold text-[#8b6533] italic">
            M
          </span>
        </div>
        <h3 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] tracking-wide">
          માનસી પટેલ
        </h3>
        <p className="font-gujarati text-xs sm:text-sm text-[#7a5931] mt-1.5 max-w-[280px]">
          શ્રી રમેશભાઈ પટેલ અને શ્રીમતી કોકિલાબેન પટેલની સુપુત્રી
        </p>
      </motion.div>

      {/* Floral Pots & Heart Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-[260px] flex items-center justify-between my-2"
      >
        <div className="relative w-16 h-20">
          <Image
            src="/Wedding_photos/imgi_2_flower-port.png"
            alt="Flower Urn"
            fill
            className="object-contain"
          />
        </div>
        <div className="p-2 rounded-full bg-[#fbf7f0] border border-[#c9953a]/40 shadow-sm">
          <Heart className="w-5 h-5 text-[#c9953a] fill-[#c9953a]/20 animate-pulse" />
        </div>
        <div className="relative w-16 h-20">
          <Image
            src="/Wedding_photos/imgi_2_flower-port.png"
            alt="Flower Urn"
            fill
            className="object-contain transform -scale-x-100"
          />
        </div>
      </motion.div>

      {/* Groom Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center mt-4 mb-8"
      >
        <div className="w-16 h-16 rounded-full border-2 border-[#c9953a]/60 bg-[#fdfaf5] flex items-center justify-center shadow-md mb-3">
          <span className="font-playfair text-2xl font-semibold text-[#8b6533] italic">
            H
          </span>
        </div>
        <h3 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] tracking-wide">
          હર્ષિલ શાહ
        </h3>
        <p className="font-gujarati text-xs sm:text-sm text-[#7a5931] mt-1.5 max-w-[280px]">
          શ્રી દીપકભાઈ શાહ અને શ્રીમતી જ્યોતિબેન શાહના સુપુત્ર
        </p>
      </motion.div>

      {/* Poetic Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-[370px] p-6 rounded-2xl bg-gradient-to-b from-[#fdfaf5]/90 to-[#f9f3eb]/90 border border-[#c9953a]/30 shadow-[0_8px_25px_rgba(180,140,80,0.08)] flex flex-col items-center"
      >
        <p className="font-gujarati text-xs sm:text-sm leading-relaxed text-[#5e4121] italic tracking-wide">
          &ldquo;બે પવિત્ર આત્માઓનો મધુર મેળાપ, બે પ્રેમાળ હૃદયની એક જ ધબકાર. અખંડ સાથ, અપાર સ્નેહ અને હર્ષોલ્લાસ સાથે અનંત લગ્નજીવનની સુંદર શરૂઆત.&rdquo;
        </p>
        <span className="font-gujarati text-[11px] text-[#9b7540] font-semibold tracking-wider mt-3">
          — સ્નેહનું મંગલ ગીત
        </span>
      </motion.div>
    </section>
  );
}
