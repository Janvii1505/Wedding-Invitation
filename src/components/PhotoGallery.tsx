"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function PhotoGallery() {
  const photos = [
    {
      src: "/Wedding_photos/imgi_7_couple-4.png",
      alt: "Couple Palace Photoshoot",
      caption: "રાજવી પળોની સુંદર સ્મૃતિઓ",
    },
    {
      src: "/Wedding_photos/imgi_13_couple-image-2.png",
      alt: "Haldi Celebration",
      caption: "પીઠીના રંગો અને હાસ્યનો ઉત્સવ",
    },
    {
      src: "/couple_hero_photo_1793015244237.jpg",
      alt: "Wedding Day Joy",
      caption: "એકબીજા સાથે સદાય રહેવાનું વચન",
    },
    {
      src: "/bride_portrait_1793015264826.jpg",
      alt: "Bridal Elegance",
      caption: "સુંદર સપનાઓની નવી સવાર",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

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
          યાદગાર પળો
        </span>
        <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-1">
          અમારી પ્રેમ ગેલેરી
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="h-[1px] w-8 bg-[#c9953a]/40"></span>
          <Heart className="w-3.5 h-3.5 text-[#c9953a]" />
          <span className="h-[1px] w-8 bg-[#c9953a]/40"></span>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[390px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c9953a]/40 bg-[#2d1407]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              fill
              className="object-cover object-center"
            />
            {/* Dark bottom gradient overlay for caption */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6 text-center">
              <p className="font-gujarati text-sm text-[#f5d6a0] font-medium drop-shadow">
                {photos[currentIndex].caption}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev Button */}
        <button
          onClick={prevPhoto}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#4a2e12] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextPhoto}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#4a2e12] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center gap-2 mt-4">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-6 bg-[#c9953a]"
                : "w-2 bg-[#c9953a]/30 hover:bg-[#c9953a]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
