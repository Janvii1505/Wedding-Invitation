"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  const storyMilestones = [
    {
      year: "2021",
      title: "પ્રથમ મુલાકાત",
      desc: "અમે દિલ્હીના એક કેફેમાં પ્રથમ વાર મળ્યા હતા — એક જ ટેબલ પર કોફી શેર કરતા આપણી વાતો ક્યારેય ન અટકે તેમ શરૂ થઈ.",
    },
    {
      year: "2023",
      title: "સાથે સપના",
      desc: "અસંખ્ય વીકેન્ડ ટ્રીપ, સ્વાદિષ્ટ ભોજનના અખતરાઓ, અને એક સુંદર અનુભૂતિ કે આપણે એકબીજા માટે જ બન્યા છીએ.",
    },
    {
      year: "2025",
      title: "પ્રેમ પ્રસ્તાવ",
      desc: "સૂર્યાસ્ત સમયે ભવ્ય તાજમહેલની સામે, હર્ષિલે દિલની વાત કહી અને માનસીએ પ્રેમપૂર્વક 'હા' કહી!",
    },
    {
      year: "2026",
      title: "અનંત સફરની શરૂઆત",
      desc: "હવે અમે તમને અમારા જીવનના સૌથી સુંદર મંગલમય સફરની શરૂઆતના સાક્ષી બનવા માટે સાદર આમંત્રિત કરીએ છીએ.",
    },
  ];

  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center overflow-hidden">
      {/* Background floral */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/Wedding_photos/imgi_30_story-floral-bg.png"
          alt="Story background"
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-8"
      >
        <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
          અમારી પ્રેમ કહાની
        </span>
        <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-1">
          મધુર સ્મરણો
        </h2>
      </motion.div>

      {/* Story Layout: Couple Image on left, Milestones on right */}
      <div className="relative z-10 w-full max-w-[400px] flex">
        {/* Left Side: Illustrated Couple Artwork */}
        <div className="w-[38%] relative min-h-[520px] shrink-0 self-stretch flex items-end">
          <div className="sticky bottom-6 w-full h-[380px]">
            <Image
              src="/Wedding_photos/imgi_5_Couple-image.png"
              alt="Couple illustration"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right Side: Timeline Cards */}
        <div className="w-[62%] pl-2 space-y-4">
          {storyMilestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="p-4 rounded-xl bg-[#fdfaf5]/95 border border-[#c9953a]/30 shadow-sm backdrop-blur-[2px]"
            >
              <span className="font-playfair text-xs font-bold text-[#c9953a] tracking-wider block mb-0.5">
                {milestone.year}
              </span>
              <h3 className="font-gujarati text-sm sm:text-base font-bold text-[#4a2e12] mb-1">
                {milestone.title}
              </h3>
              <p className="font-gujarati text-[11px] leading-relaxed text-[#6b4f2c]">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
