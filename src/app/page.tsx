"use client";

import React, { useState } from "react";
import PetalCanvas from "@/components/PetalCanvas";
import AudioPlayer from "@/components/AudioPlayer";
import GateCover from "@/components/GateCover";
import HeroSection from "@/components/HeroSection";
import CoupleCards from "@/components/CoupleCards";
import FamilySection from "@/components/FamilySection";
import OurStory from "@/components/OurStory";
import ScratchCountdown from "@/components/ScratchCountdown";
import EventsTimeline from "@/components/EventsTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import RsvpForm from "@/components/RsvpForm";
import WishesWall from "@/components/WishesWall";
import FloatingNav from "@/components/FloatingNav";

interface UserWish {
  id: string;
  name: string;
  message: string;
  time: string;
}

export default function Home() {
  const [isGateOpened, setIsGateOpened] = useState(false);
  const [wishes, setWishes] = useState<UserWish[]>([]);

  const handleGateOpen = () => {
    setIsGateOpened(true);
  };

  const handleAddWish = (name: string, message: string) => {
    const newWish: UserWish = {
      id: Date.now().toString(),
      name,
      message,
      time: "હમણાં જ",
    };
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#faf5f0] flex justify-center selection:bg-[#c9953a] selection:text-[#0d0907]">
      {/* Falling Saffron & Rose Petals Canvas */}
      <PetalCanvas />

      {/* 3D Royal Gate Opening Overlay */}
      <GateCover onOpen={handleGateOpen} />

      {/* Floating Action Buttons */}
      <FloatingNav />

      {/* Audio Controller */}
      <AudioPlayer autoPlayTrigger={isGateOpened} />

      {/* Mobile Card Container (Identical to 430px container) */}
      <main className="relative w-full max-w-[430px] min-h-screen bg-[#fdfaf5] text-[#6b4f2c] shadow-[0_0_50px_rgba(139,115,85,0.06)] sm:border-x sm:border-[#c9953a]/25 overflow-x-hidden z-10 flex flex-col">
        {/* Hero Banner with Garden, Names & Fountain */}
        <HeroSection />

        {/* Bride & Groom Introduction */}
        <CoupleCards />

        {/* Family Introduction (Vadhu & Var Paksh) */}
        <FamilySection />

        {/* Our Love Story Timeline */}
        <OurStory />

        {/* Save The Date Scratch Card & Countdown */}
        <ScratchCountdown />

        {/* Wedding Events Itinerary */}
        <EventsTimeline />

        {/* Photo Gallery Carousel */}
        <PhotoGallery />

        {/* RSVP Form with WhatsApp Share */}
        <RsvpForm onAddWish={handleAddWish} />

        {/* Wishes Wall & Blessings */}
        <WishesWall wishes={wishes} />
      </main>
    </div>
  );
}
