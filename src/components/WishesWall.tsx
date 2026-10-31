"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  time: string;
}

interface WishesWallProps {
  wishes: Wish[];
}

export default function WishesWall({ wishes }: WishesWallProps) {
  const defaultWishes: Wish[] = [
    {
      id: "1",
      name: "ભાવેશ અને પરિવાર",
      message: "હર્ષિલ અને માનસીને લગ્નજીવનની અનંત શુભકામનાઓ! સદાય સુખી રહો.",
      time: "હમણાં જ",
    },
    {
      id: "2",
      name: "દ્રષ્ટિ શાહ",
      message: "Congratulations to the beautiful couple! May your journey be filled with immense love and laughter.",
      time: "૧ દિવસ પહેલા",
    },
    {
      id: "3",
      name: "પ્રથમ પંડ્યા",
      message: "નવા જીવનની સુંદર શરૂઆત માટે હૃદયપૂર્વકના મંગલ આશીર્વાદ!",
      time: "૨ દિવસ પહેલા",
    },
  ];

  const allWishes = wishes.length > 0 ? [...wishes, ...defaultWishes] : defaultWishes;

  return (
    <section className="relative w-full py-12 px-5 flex flex-col items-center">
      {/* Classical floral supporter pillar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-24 h-32 mb-6"
      >
        <Image
          src="/Wedding_photos/imgi_11_supporter.png"
          alt="Classical Pillar"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Wishes Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[390px] p-6 rounded-2xl bg-[#fdfaf5] border border-[#c9953a]/30 shadow-md font-gujarati"
      >
        {/* Title */}
        <div className="flex items-center gap-2 mb-4 border-b border-[#c9953a]/20 pb-3">
          <Quote className="w-5 h-5 text-[#c9953a] rotate-180 shrink-0" />
          <h2 className="text-xl font-bold text-[#4a2e12]">
            આશીર્વાદ અને શુભેચ્છાઓ
          </h2>
        </div>

        {/* Wishes List */}
        <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1">
          {allWishes.map((w) => (
            <div
              key={w.id}
              className="p-3.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/20 space-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#4a2e12] flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#c9953a] fill-[#c9953a]" />
                  {w.name}
                </span>
                <span className="text-[10px] text-[#967448]">{w.time}</span>
              </div>
              <p className="text-xs text-[#6b4f2c] leading-relaxed">
                {w.message}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#8b6533] mt-5 italic">
          તમારા સ્નેહભરી શુભેચ્છાઓની રાહ જોઈએ છીએ...
        </p>
      </motion.div>

      {/* Footer Branding */}
      <div className="mt-12 text-center text-[11px] text-[#967448] font-gujarati space-y-1 select-none">
        <p className="tracking-widest uppercase font-bold text-[#7a1f3d]">
          હર્ષિલ & માનસી
        </p>
        <p>આપના સ્નેહ અને ઉપસ્થિતિ માટે હૃદયપૂર્વક આભાર 🙏</p>
      </div>
    </section>
  );
}
