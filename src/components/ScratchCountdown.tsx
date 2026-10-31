"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Calendar, Sparkles } from "lucide-react";

export default function ScratchCountdown() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target Wedding Date (e.g. November 28, 2026 or customizable)
  useEffect(() => {
    const targetDate = new Date("2026-11-28T16:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // HTML5 Scratch Canvas logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 340);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 200);

    // Draw rich metallic gold gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#d8aa4f");
    grad.addColorStop(0.3, "#fbe3a1");
    grad.addColorStop(0.6, "#c9953a");
    grad.addColorStop(1, "#9e7428");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Sparkle speckles
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2 + 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Border line inside
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Text on scratch foil
    ctx.fillStyle = "#4a2e12";
    ctx.font = "italic bold 17px serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch to Reveal our Big Day!", width / 2, height / 2 - 8);

    ctx.fillStyle = "#6b4f2c";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("DATE & COUNTDOWN • SWIPE TO ERASE", width / 2, height / 2 + 16);

    let isDrawing = false;
    let totalErased = 0;

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing || isRevealed) return;
      const pos = getPos(e);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
      ctx.fill();

      totalErased++;
      if (totalErased > 28) {
        triggerReveal();
      }
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      scratch(e);
    };
    const handleEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", handleEnd);

    canvas.addEventListener("touchstart", handleStart, { passive: true });
    canvas.addEventListener("touchmove", scratch, { passive: true });
    window.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", scratch);
      window.removeEventListener("mouseup", handleEnd);

      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", scratch);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isRevealed]);

  const triggerReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#c9953a", "#7a1f3d", "#f5d6a0", "#e8c683"],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section className="relative w-full py-12 px-5 flex flex-col items-center text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
          લગ્નોત્સવમાં સહભાગી બનો
        </span>
        <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-[#4a2e12] mt-1">
          શુભ ઘડીની પ્રતીક્ષા
        </h2>
      </motion.div>

      {/* Card Container with Scratch Foil & Revealed Content */}
      <div className="relative w-full max-w-[370px] min-h-[220px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#fdfaf5] to-[#f7efe3] border-2 border-[#c9953a]/40 shadow-lg p-5 flex flex-col items-center justify-center">
        {/* Underneath Revealed Content */}
        <div className="w-full flex flex-col items-center text-center">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#7a1f3d] uppercase tracking-widest mb-1.5">
            <Calendar className="w-4 h-4 text-[#c9953a]" />
            શુભ લગ્ન તારીખ
          </div>

          <div className="font-gujarati text-xl sm:text-2xl font-extrabold text-[#4a2e12] mb-3">
            ૨૮ નવેમ્બર, ૨૦૨૬
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 w-full mt-1">
            {[
              { label: "દિવસો", value: timeLeft.days },
              { label: "કલાકો", value: timeLeft.hours },
              { label: "મિનિટો", value: timeLeft.minutes },
              { label: "સેકન્ડ", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-2 rounded-xl bg-white border border-[#c9953a]/30 shadow-sm"
              >
                <span className="font-playfair text-xl font-bold text-[#7a1f3d]">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="font-gujarati text-[10px] text-[#8b6533] font-medium mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-gujarati text-[11px] text-[#967448] mt-3 italic">
            આપની ઉપસ્થિતિ અમારા આ ખાસ દિવસને વધુ યાદગાર બનાવશે.
          </p>
        </div>

        {/* Scratch Canvas Overlay */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas absolute inset-0 z-20 w-full h-full cursor-pointer transition-opacity duration-700"
          />
        )}
      </div>

      {/* Manual Click to Reveal Button if user prefers not scratching */}
      {!isRevealed && (
        <button
          onClick={triggerReveal}
          className="mt-3 text-xs text-[#a47e43] hover:text-[#7a1f3d] font-gujarati underline decoration-dotted transition-colors"
        >
          તારીખ જોવા માટે અહીં ક્લિક કરો (Reveal Date)
        </button>
      )}
    </section>
  );
}
