"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GateCoverProps {
  onOpen: () => void;
}

export default function GateCover({ onOpen }: GateCoverProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [clicked, setClicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transitioned = useRef(false);
  const durationRef = useRef(4.5);

  const transitionToMain = () => {
    if (transitioned.current) return;
    transitioned.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    onOpen();
    setTimeout(() => {
      setIsRemoved(true);
    }, 800);
  };

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    const v = videoRef.current;
    if (!v) {
      transitionToMain();
      return;
    }

    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(transitionToMain);
    });
    setPlaying(true);

    const dur = durationRef.current;
    const earlyMs = Math.max(0, (dur - 0.7) * 1000);
    timerRef.current = setTimeout(transitionToMain, earlyMs);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        onClick={handleClick}
        className="fixed inset-0 z-[120] w-full h-full overflow-hidden flex items-center justify-center cursor-pointer select-none bg-[#fdfaf5]"
      >
        <div className="relative w-full max-w-[430px] h-full overflow-hidden flex items-center justify-center">
          {/* 3D Intro Gate Video */}
          <video
            ref={videoRef}
            src="/Wedding_photos/intro-gate.mp4"
            poster="/Wedding_photos/imgi_1_gate-image.png"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              const d = e.currentTarget.duration;
              if (d && isFinite(d) && d > 0) durationRef.current = d;
            }}
            onPlaying={() => setPlaying(true)}
            onEnded={transitionToMain}
            onError={transitionToMain}
          />

          {/* Poster image fallback until video plays */}
          <AnimatePresence>
            {!playing && (
              <motion.img
                src="/Wedding_photos/imgi_1_gate-image.png"
                alt="Gate Cover"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover z-[5] pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Radial vignette overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            animate={{ opacity: clicked ? 0 : 1 }}
            transition={{ duration: 1.2 }}
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Center Hexagonal Monogram & Touch to Open Badge */}
          <AnimatePresence>
            {!clicked && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="relative flex flex-col items-center mb-6 select-none"
                  style={{
                    marginTop: "clamp(-40px, -8vh, -20px)",
                    width: "clamp(140px, 35vw, 200px)",
                    height: "clamp(140px, 35vw, 200px)",
                  }}
                  animate={{ opacity: [0.55, 1, 0.55], scale: [0.97, 1.02, 0.97] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p
                    className="font-serif italic font-bold leading-none"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#6b4f2c",
                      fontSize: "clamp(28px, 8vw, 44px)",
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    H
                    <span
                      style={{
                        color: "#c9953a",
                        fontSize: "0.6em",
                        margin: "0 4px",
                        fontStyle: "normal",
                        fontFamily: "sans-serif",
                      }}
                    >
                      &
                    </span>
                    M
                  </p>
                  <div
                    className="my-2.5"
                    style={{
                      width: "clamp(32px, 9vw, 52px)",
                      height: "1.5px",
                      background:
                        "linear-gradient(to right, transparent, #c9953a, transparent)",
                    }}
                  />
                  <p
                    className="font-sans uppercase font-bold text-center"
                    style={{
                      color: "#8a6528",
                      fontSize: "clamp(10px, 2.2vw, 12px)",
                      letterSpacing: "0px",
                      textShadow: "0 1px 1px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    ખોલવા માટે ટચ કરો
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
