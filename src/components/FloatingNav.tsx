"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function FloatingNav() {
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "હર્ષિલ અને માનસીનું મંગલ લગ્ન આમંત્રણ!\nઅમારી ખુશીઓમાં સહભાગી બનવા આપને સાદર આમંત્રણ છે.\nલિંક જુઓ:"
    );
    window.open(`https://api.whatsapp.com/send?text=${text}%20${encodeURIComponent(window.location.href)}`, "_blank");
  };

  return (
    <>
      {/* Top Left Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7a1f3d] hover:bg-[#60172f] text-white text-xs font-bold shadow-lg border-2 border-[#c9953a] transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#f5d6a0]" />
          <span>Back</span>
        </button>
      </div>

      {/* Bottom Left WhatsApp Share Button */}
      <div className="fixed bottom-5 left-4 z-50">
        <button
          onClick={shareOnWhatsApp}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-extrabold shadow-[0_8px_25px_rgba(22,163,74,0.45)] border-2 border-white/40 transition-transform hover:scale-105 active:scale-95 tracking-wide"
        >
          <div className="w-4 h-4">
            <Image
              src="/Wedding_photos/imgi_28_default.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="brightness-200"
            />
          </div>
          <span>Share Invite</span>
        </button>
      </div>
    </>
  );
}
