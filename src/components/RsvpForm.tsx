"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";

interface RsvpFormProps {
  onAddWish?: (name: string, message: string) => void;
}

export default function RsvpForm({ onAddWish }: RsvpFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "સહર્ષ પધારીશું",
    guests: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    setSubmitted(true);
    if (onAddWish && formData.message) {
      onAddWish(formData.name, formData.message);
    }

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#c9953a", "#7a1f3d", "#16a34a"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const sendToWhatsApp = () => {
    const text = `*💍 મંગલ આમંત્રણ પ્રતિસાદ (Wedding RSVP)*%0A%0A*વર-વધૂ:* હર્ષિલ & માનસી%0A*આમંત્રિતનું નામ:* ${formData.name || "અતિથિ"}%0A*મોબાઇલ:* ${formData.phone || "N/A"}%0A*ઉપસ્થિતિ:* ${formData.attendance}%0A*સભ્ય સંખ્યા:* ${formData.guests}%0A*આશીર્વાદ સંદેશ:* ${formData.message || "લગ્ન જીવનની ખૂબ ખૂબ શુભેચ્છાઓ!"}`;
    window.open(`https://api.whatsapp.com/send?phone=919327374893&text=${text}`, "_blank");
  };

  return (
    <section className="relative w-full py-12 px-5 flex flex-col items-center">
      {/* Header with fountain illustration */}
      <div className="relative z-10 w-full max-w-[390px] flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="font-gujarati text-xs sm:text-sm text-[#a47e43] font-medium tracking-wide">
            આપની ઉપસ્થિતિ એ અમારું સદ્ભાગ્ય
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#4a2e12] mt-0.5 tracking-wider">
            RSVP
          </h2>
          <p className="font-gujarati text-[11px] text-[#8b6533] mt-1">
            કૃપા કરીને ૨૫ સપ્ટેમ્બર, ૨૦૨૬ સુધીમાં આપનો પ્રત્યુત્તર આપો
          </p>
        </motion.div>

        <div className="relative w-20 h-24 shrink-0">
          <Image
            src="/Wedding_photos/imgi_10_flower-fountain.png"
            alt="Fountain decor"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[390px] p-6 rounded-2xl bg-[#fdfaf5] border border-[#c9953a]/30 shadow-md font-gujarati text-xs sm:text-sm"
      >
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#4a2e12]">ધન્યવાદ!</h3>
            <p className="text-[#6b4f2c] text-xs">
              આપનો પ્રત્યુત્તર સફળતાપૂર્વક નોંધાઈ ગયો છે. આપને લગ્નપ્રસંગે મળવા ઉત્સુક છીએ!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#c9953a] underline text-xs pt-2"
            >
              ફરીથી ફોર્મ ભરો (Edit RSVP)
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-[#8b6533] font-medium mb-1">
                આમંત્રિતનું નામ
              </label>
              <input
                type="text"
                required
                placeholder="આપનું નામ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/30 text-[#4a2e12] placeholder-[#b59a76] focus:outline-none focus:border-[#c9953a] transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-[#8b6533] font-medium mb-1">
                મોબાઇલ નંબર
              </label>
              <input
                type="tel"
                placeholder="મોબાઇલ નં."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/30 text-[#4a2e12] placeholder-[#b59a76] focus:outline-none focus:border-[#c9953a] transition-all"
              />
            </div>

            {/* Attendance & Guest Count */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#8b6533] font-medium mb-1">
                  ઉપસ્થિતિ
                </label>
                <select
                  value={formData.attendance}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/30 text-[#4a2e12] focus:outline-none focus:border-[#c9953a] transition-all"
                >
                  <option value="સહર્ષ પધારીશું">સહર્ષ પધારીશું</option>
                  <option value="અસમર્થ છીએ">અસમર્થ છીએ</option>
                </select>
              </div>

              <div>
                <label className="block text-[#8b6533] font-medium mb-1">
                  સભ્ય સંખ્યા
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/30 text-[#4a2e12] focus:outline-none focus:border-[#c9953a] transition-all"
                />
              </div>
            </div>

            {/* Blessings Message */}
            <div>
              <label className="block text-[#8b6533] font-medium mb-1">
                મંગલ આશીર્વાદ સંદેશ
              </label>
              <textarea
                rows={3}
                placeholder="હર્ષિલ અને માનસી માટે આપની શુભેચ્છાઓ અહીં લખો..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf5f0] border border-[#c9953a]/30 text-[#4a2e12] placeholder-[#b59a76] focus:outline-none focus:border-[#c9953a] transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#b88628] hover:bg-[#a07420] text-white font-bold tracking-wide transition-all shadow-md active:scale-98"
            >
              આમંત્રણ સ્વીકારો
            </button>

            {/* WhatsApp RSVP button */}
            <button
              type="button"
              onClick={sendToWhatsApp}
              className="w-full py-3 rounded-xl bg-[#0f766e] hover:bg-[#0d655e] text-white font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 uppercase text-xs"
            >
              <div className="w-4 h-4">
                <Image
                  src="/Wedding_photos/imgi_25_default.svg"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="brightness-200"
                />
              </div>
              <span>SEND TO WHATSAPP</span>
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
