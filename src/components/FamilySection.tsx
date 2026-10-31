"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FamilySection() {
  const brideFamily = [
    { relation: "પિતા", name: "શ્રી રમેશભાઈ પટેલ" },
    { relation: "માતા", name: "શ્રીમતી કોકિલાબેન પટેલ" },
    { relation: "ભાઈ", name: "મનન પટેલ" },
    { relation: "કાકા", name: "શ્રી કિરીટભાઈ પટેલ" },
    { relation: "કાકા", name: "શ્રી અશ્વિનભાઈ પટેલ" },
  ];

  const groomFamily = [
    { relation: "પિતા", name: "શ્રી દીપકભાઈ શાહ" },
    { relation: "માતા", name: "શ્રીમતી જ્યોતિબેન શાહ" },
    { relation: "ભાઈ", name: "નીલ શાહ" },
    { relation: "કાકા", name: "શ્રી કૌશિકભાઈ શાહ" },
    { relation: "કાકા", name: "શ્રી ભરતભાઈ શાહ" },
  ];

  return (
    <section className="relative w-full py-12 px-5 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
          પરિવાર સ્નેહાદર
        </span>
        <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-1">
          પરિવાર પરિચય
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="h-[1px] w-10 bg-[#c9953a]/40"></span>
          <Heart className="w-3.5 h-3.5 text-[#c9953a]" />
          <span className="h-[1px] w-10 bg-[#c9953a]/40"></span>
        </div>
      </motion.div>

      {/* Bride Family Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[390px] p-6 rounded-2xl bg-[#fdfaf5] border border-[#c9953a]/30 shadow-md mb-6 overflow-hidden"
      >
        {/* Decorative corner flower */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-80">
          <Image
            src="/Wedding_photos/imgi_3_flower-3.png"
            alt="Floral decor"
            fill
            className="object-contain object-top-right"
          />
        </div>

        <div className="text-center mb-4">
          <span className="font-gujarati text-xs text-[#a47e43] font-semibold tracking-wider uppercase">
            વધૂ પક્ષ
          </span>
          <h3 className="font-gujarati text-xl font-bold text-[#4a2e12] mt-0.5">
            માનસીનો પરિવાર
          </h3>
          <div className="w-16 h-[1px] bg-[#c9953a]/30 mx-auto mt-2" />
        </div>

        <div className="space-y-3 font-gujarati text-xs sm:text-sm">
          {brideFamily.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-[#e8ded0]/50 pb-2">
              <span className="text-[#967448] font-medium">{item.relation}</span>
              <span className="text-[#4a2e12] font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Groom Family Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative w-full max-w-[390px] p-6 rounded-2xl bg-[#fdfaf5] border border-[#c9953a]/30 shadow-md overflow-hidden"
      >
        {/* Decorative corner flower */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-80">
          <Image
            src="/Wedding_photos/imgi_3_flower-3.png"
            alt="Floral decor"
            fill
            className="object-contain object-top-right"
          />
        </div>

        <div className="text-center mb-4">
          <span className="font-gujarati text-xs text-[#a47e43] font-semibold tracking-wider uppercase">
            વર પક્ષ
          </span>
          <h3 className="font-gujarati text-xl font-bold text-[#4a2e12] mt-0.5">
            હર્ષિલનો પરિવાર
          </h3>
          <div className="w-16 h-[1px] bg-[#c9953a]/30 mx-auto mt-2" />
        </div>

        <div className="space-y-3 font-gujarati text-xs sm:text-sm">
          {groomFamily.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-[#e8ded0]/50 pb-2">
              <span className="text-[#967448] font-medium">{item.relation}</span>
              <span className="text-[#4a2e12] font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
