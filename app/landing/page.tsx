"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("show"), 300);
    const t2 = setTimeout(() => setPhase("exit"), 4200);
    const t3 = setTimeout(() => router.push("/home"), 4800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [router]);

  const opacity =
    phase === "enter" ? 0 : phase === "show" ? 1 : 0;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/AA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay escuro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(80,0,0,.28) 0%, rgba(0,0,0,.88) 65%)",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 220px rgba(0,0,0,.9)",
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px",
          opacity,
          transform: phase === "exit" ? "scale(1.04)" : "scale(1)",
          transition:
            phase === "enter"
              ? "opacity 1.2s ease, transform 1.2s ease"
              : "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <img
          src="/www.png"
          alt="Ordem Lupina"
          style={{
            width: "clamp(120px, 18vw, 200px)",
            marginBottom: "36px",
            animation: "logoBreath 3s ease-in-out infinite",
          }}
        />

        <h1
          style={{
            color: "#fff",
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            fontSize: "clamp(36px, 8vw, 88px)",
            fontWeight: 900,
            letterSpacing: "clamp(4px, 2vw, 14px)",
            textShadow:
              "0 0 10px #fff, 0 0 30px rgba(255,0,0,1), 0 0 65px rgba(255,0,0,.85), 0 0 110px rgba(255,0,0,.6)",
            marginBottom: "20px",
          }}
        >
          ORDEM LUPINA
        </h1>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(13px, 2vw, 20px)",
            color: "#d4af37",
            letterSpacing: "clamp(3px, 1vw, 8px)",
          }}
        >
          FORÇA • HONRA • LEALDADE • DESTINO
        </p>

        {/* Linha dourada */}
        <div
          style={{
            margin: "32px auto 0",
            width: "clamp(60px, 15vw, 140px)",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #d4af37, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes logoBreath {
          0%, 100% {
            filter:
              drop-shadow(0 0 14px rgba(255,0,0,.9))
              drop-shadow(0 0 36px rgba(255,0,0,.7))
              drop-shadow(0 0 80px rgba(255,0,0,.45));
          }
          50% {
            filter:
              drop-shadow(0 0 22px rgba(255,0,0,1))
              drop-shadow(0 0 60px rgba(255,0,0,.9))
              drop-shadow(0 0 130px rgba(255,0,0,.65));
          }
        }
      `}</style>
    </main>
  );
}