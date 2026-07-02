"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade-in após breve delay
    const show = setTimeout(() => setVisible(true), 100);
    // Redireciona para /landing após 3.5s
    const nav = setTimeout(() => router.push("/landing"), 3500);
    return () => {
      clearTimeout(show);
      clearTimeout(nav);
    };
  }, [router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.9s ease",
      }}
    >
      {/* Fundo radial */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(80,0,0,.35) 0%, rgba(0,0,0,1) 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            fontSize: "clamp(40px, 9vw, 96px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "clamp(4px, 1.5vw, 14px)",
            animation: "glowRed 2.5s ease-in-out infinite",
          }}
        >
          ORDEM LUPINA
        </h1>

        <p
          style={{
            marginTop: "28px",
            fontSize: "clamp(14px, 2.5vw, 22px)",
            color: "#d4af37",
            letterSpacing: "clamp(3px, 1vw, 8px)",
            fontFamily: "'Cinzel', serif",
            animation: "pulseGold 3s ease-in-out infinite",
          }}
        >
          FORÇA • HONRA • LEALDADE • DESTINO
        </p>

        {/* Separador decorativo */}
        <div
          style={{
            margin: "40px auto 0",
            width: "clamp(80px, 20vw, 160px)",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes glowRed {
          0%, 100% {
            text-shadow:
              0 0 18px rgba(180,0,0,.6),
              0 0 45px rgba(255,0,0,.3);
          }
          50% {
            text-shadow:
              0 0 10px #fff,
              0 0 32px rgba(255,0,0,1),
              0 0 75px rgba(255,0,0,.8),
              0 0 130px rgba(255,0,0,.45);
          }
        }
        @keyframes pulseGold {
          0%, 100% { opacity: .75; }
          50%       { opacity: 1; }
        }
      `}</style>
    </main>
  );
}