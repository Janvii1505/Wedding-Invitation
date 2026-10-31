"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Traditional Indian Pentatonic Raga notes (Bhoopali: Sa, Re, Ga, Pa, Dha)
  const ragaFreqs = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

  const startAmbientSynth = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Tanpura Drone (Root & 5th harmonics)
      const playDrone = (freq: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
      };
      playDrone(130.81); // Low Sa
      playDrone(196.0);  // Low Pa

      // Sweet melodic santoor/shehnai plucks
      synthIntervalRef.current = setInterval(() => {
        if (ctx.state === "suspended") ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        const note = ragaFreqs[Math.floor(Math.random() * ragaFreqs.length)];
        osc.type = "triangle";
        osc.frequency.setValueAtTime(note, ctx.currentTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1400, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 3.0);
      }, 1600);
    } catch {
      // Audio context might be restricted
    }
  };

  const stopAmbientSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          startAmbientSynth();
          setIsPlaying(true);
        });
      } else {
        startAmbientSynth();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopAmbientSynth();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      togglePlay();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      stopAmbientSynth();
    };
  }, []);

  return (
    <>
      {/* Background audio element with gentle Indian wedding track fallback */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-traditional-background-music-112194.mp3"
        loop
        preload="auto"
      />

      {/* Floating Audio Controller */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#c9953a] via-[#dfb76c] to-[#966f28] text-white shadow-[0_4px_20px_rgba(201,149,58,0.5)] border-2 border-white/60 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {isPlaying ? (
          <div className="flex items-center gap-0.5 h-4">
            <span className="w-1 bg-white rounded-full h-3 animate-[pulse_0.6s_ease-in-out_infinite]"></span>
            <span className="w-1 bg-white rounded-full h-4 animate-[pulse_0.4s_ease-in-out_infinite]"></span>
            <span className="w-1 bg-white rounded-full h-2 animate-[pulse_0.7s_ease-in-out_infinite]"></span>
            <span className="w-1 bg-white rounded-full h-3.5 animate-[pulse_0.5s_ease-in-out_infinite]"></span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-white/90" />
        )}

        {/* Floating tooltip */}
        <span className="absolute right-14 bg-[#2d1407]/90 text-[#f5d6a0] text-[11px] font-medium py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          {isPlaying ? "સંગીત બંધ કરો" : "સંગીત શરૂ કરો"}
        </span>
      </button>
    </>
  );
}
