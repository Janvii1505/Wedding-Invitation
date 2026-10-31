"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Sparkles, Calendar, ExternalLink } from "lucide-react";

export default function EventsTimeline() {
  const events = [
    {
      title: "રીંગ સેરેમની અને સંગીત સંધ્યા",
      time: "સાંજે ૬:૩૦ વાગ્યાથી",
      venue: "ગ્રાન્ડ બૉલરૂમ, ધ લીલા",
      address: "ચાણક્યપુરી, નવી દિલ્હી, ભારત",
      mapQuery: "The Leela Palace New Delhi Chanakyapuri",
      icon: Sparkles,
    },
    {
      title: "હસ્તમેળાપ અને શુભ લગ્ન",
      time: "સાંજે ૪:૦૦ વાગ્યાથી",
      venue: "ધ રોયલ ગાર્ડન્સ, ધ લીલા",
      address: "ચાણક્યપુરી, નવી દિલ્હી, ભારત",
      mapQuery: "The Leela Palace New Delhi Chanakyapuri",
      icon: Calendar,
    },
    {
      title: "રિસેપ્શન",
      time: "રાત્રે ૮:૦૦ વાગ્યાથી",
      venue: "ગ્રાન્ડ બોલરૂમ, ધ લીલા",
      address: "ચાણક્યપુરી, નવી દિલ્હી, ભારત",
      mapQuery: "The Leela Palace New Delhi Chanakyapuri",
      icon: Calendar,
    },
  ];

  return (
    <section className="relative w-full py-12 px-5 flex flex-col items-center">
      {/* Background floral */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/Wedding_photos/imgi_31_registry-floral-bg.png"
          alt="Registry background"
          fill
          className="object-cover"
        />
      </div>

      {/* Header with decorative peacock */}
      <div className="relative z-10 w-full max-w-[390px] flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
            શુભ પ્રસંગો
          </span>
          <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-0.5">
            લગ્નોત્સવ કાર્યક્રમ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-20 h-24"
        >
          <Image
            src="/Wedding_photos/imgi_15_peacoack-2.png"
            alt="Peacock"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Events Cards */}
      <div className="relative z-10 w-full max-w-[390px] space-y-6">
        {events.map((evt, idx) => {
          const IconComp = evt.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative p-6 rounded-2xl bg-[#fdfaf5]/95 border border-[#c9953a]/30 shadow-md overflow-hidden"
            >
              {/* Corner Floral Bouquet */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-85">
                <Image
                  src="/Wedding_photos/imgi_3_flower-3.png"
                  alt="Floral decoration"
                  fill
                  className="object-contain object-top-right"
                />
              </div>

              {/* Icon badge */}
              <div className="w-10 h-10 rounded-xl bg-[#faf5f0] border border-[#c9953a]/40 flex items-center justify-center text-[#c9953a] mb-3 shadow-sm">
                <IconComp className="w-5 h-5" />
              </div>

              {/* Event Title */}
              <h3 className="font-gujarati text-lg sm:text-xl font-bold text-[#4a2e12] mb-3 pr-12">
                {evt.title}
              </h3>

              <div className="w-full h-[1px] bg-[#c9953a]/25 mb-4" />

              {/* Time & Venue details */}
              <div className="space-y-2.5 font-gujarati text-xs sm:text-sm text-[#6b4f2c] mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c9953a] shrink-0" />
                  <span className="font-semibold">{evt.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c9953a] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#4a2e12]">{evt.venue}</p>
                    <p className="text-[11px] text-[#8b6533]">{evt.address}</p>
                  </div>
                </div>
              </div>

              {/* View Map Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#faf5f0] to-[#f4ebe1] hover:from-[#f4ebe1] hover:to-[#ebdccf] text-[#6b4f2c] hover:text-[#4a2e12] border border-[#c9953a]/40 font-gujarati text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
              >
                <span>નકશો જુઓ</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#c9953a]" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
