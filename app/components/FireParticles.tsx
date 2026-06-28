"use client";

import { useEffect, useState } from "react";

interface Particle {
  left: number;
  size: number;
  dur: number;
  delay: number;
  drift: number;
  color: string;
}

const COLORS = ["#ff6600", "#ff3300", "#ffaa00", "#ff0000", "#ff5500", "#ff7700"];

export default function FireParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 55 }, () => ({
        left:  Math.random() * 100,
        size:  Math.random() * 4 + 2,
        dur:   Math.random() * 7 + 5,
        delay: Math.random() * 9,
        drift: (Math.random() - 0.5) * 70,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            bottom: "-12px",
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 2.5}px ${p.color}, 0 0 ${p.size * 5}px ${p.color}80`,
            animationName: "emberRise",
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            opacity: 0,
            /* CSS custom property injected inline for drift */
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes emberRise {
          0%   { transform: translateY(0) translateX(0) scale(1);   opacity: 0; }
          6%   { opacity: 0.95; }
          40%  { opacity: 0.7; }
          85%  { opacity: 0.25; }
          100% { transform: translateY(-115vh) translateX(var(--drift)) scale(0.05); opacity: 0; }
        }
      `}</style>
    </div>
  );
}