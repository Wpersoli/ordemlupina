"use client";

import FireParticles from "./FireParticles";

export default function HeroScene() {
  return (
    <section className="hero-scene">

      {/* FUNDO — imagem com brilho e contraste */}
      <div className="hero-bg" />

      {/* OVERLAY gradiente escuro — SEM duplicata com globals.css */}
      <div className="hero-overlay" />

      {/* CHUVA — versão corrigida: azul-acinzentada muito sutil (era branca = camada branca) */}
      <div className="rain-back" />
      <div className="rain-front" />

      {/* BRASAS */}
      <FireParticles />

      {/* BRILHO CENTRAL VERMELHO */}
      <div className="hero-glow" />

      {/* RAIOS DE LUZ DO TOPO */}
      <div className="hero-rays" />

      {/* RELÂMPAGOS SVG */}
      <svg className="hero-svg-lightning" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M320 0 L370 90 L350 140 L420 220 L390 290 L460 390 L420 520" />
        <path d="M1500 0 L1450 120 L1490 190 L1430 270 L1470 380 L1410 520" />
        <path d="M920 0 L980 140 L940 220 L1020 320 L970 430 L1030 580" />
      </svg>

      {/* VINHETA nas bordas */}
      <div className="hero-vignette" />

      {/* CONTEÚDO */}
      <div className="hero-content">
        <img src="/www.png" alt="Ordem Lupina" className="hero-logo" />

        <h1>ORDEM LUPINA</h1>

        <p className="hero-subtitle">
          FORÇA • HONRA • LEALDADE • DESTINO
        </p>

        <p className="hero-text">
          A alcateia dos que não recuam. Um chamado para aqueles que vivem por
          princípios e caminham com propósito.
        </p>

        {/* Linha separadora dourada */}
        <div className="hero-divider" />

        <a href="#pilares" className="hero-cta">
          DESCOBRIR A ORDEM
        </a>
      </div>

      <style jsx>{`

        /* ── SCENE ── */
        .hero-scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #000;
          animation: cameraShake 5s infinite;
        }

        /* ── FUNDO ── (mesmo tratamento nítido e vívido da landing) */
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('/bg/AA-clean.png') center center / cover no-repeat;
          transform: scale(1.08);
          filter: brightness(0.42) contrast(1.30) saturate(1.2);
          animation: slowZoom 22s infinite alternate ease-in-out;
        }

        /* ── OVERLAY ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center,
              rgba(60,0,0,.25) 0%,
              rgba(0,0,0,.72) 50%,
              rgba(0,0,0,.96) 100%);
          z-index: 2;
        }

        /* ── CHUVA CORRIGIDA ──
           ANTES: rgba(255,255,255,.35/.45) → criava camada branca visível
           AGORA:  azul-ardósia ultra-sutil + opacidade muito menor          */
        .rain-back {
          position: absolute;
          inset: 0;
          z-index: 4;
          opacity: .07;
          transform: skewX(-16deg);
          background-image: linear-gradient(to bottom, rgba(160,190,255,.18), transparent);
          background-size: 2px 80px;
          background-repeat: repeat;
          animation: rainBack 0.34s linear infinite;
          pointer-events: none;
        }

        .rain-front {
          position: absolute;
          inset: 0;
          z-index: 5;
          opacity: .10;
          transform: skewX(-16deg);
          background-image: linear-gradient(to bottom, rgba(160,190,255,.22), transparent);
          background-size: 2px 48px;
          background-repeat: repeat;
          animation: rainFront 0.19s linear infinite;
          pointer-events: none;
        }

        /* ── BRILHO CENTRAL ── */
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1200px;
          height: 1200px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(200,0,0,.28);
          filter: blur(210px);
          animation: pulseGlow 2.8s infinite ease-in-out;
          z-index: 7;
          pointer-events: none;
        }

        /* ── RAIOS ── */
        .hero-rays {
          position: absolute;
          inset: 0;
          z-index: 8;
          background: radial-gradient(circle at center top, rgba(220,0,0,.35), transparent 42%);
          animation: pulseRays 2.4s infinite ease-in-out;
          pointer-events: none;
        }

        /* ── RELÂMPAGOS SVG ── */
        .hero-svg-lightning {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
          opacity: 0;
          animation: lightningFlash 5.5s infinite;
          pointer-events: none;
        }

        .hero-svg-lightning path {
          fill: none;
          stroke: rgba(255,255,255,.92);
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter:
            drop-shadow(0 0 8px rgba(255,255,255,.95))
            drop-shadow(0 0 22px rgba(255,80,80,.9))
            drop-shadow(0 0 50px rgba(255,0,0,.75));
        }

        /* ── VINHETA ── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 240px rgba(0,0,0,.7);
          z-index: 12;
          pointer-events: none;
        }

        /* ── CONTEÚDO ── */
        .hero-content {
          position: relative;
          z-index: 20;
          max-width: 1100px;
          padding: 20px;
          transform: translateY(-50px);
        }

        .hero-content::before {
          content: "";
          position: absolute;
          inset: -80px;
          background: radial-gradient(circle, rgba(0,0,0,.5), transparent 68%);
          z-index: -1;
        }

        /* ── LOGO ── */
        .hero-logo {
          width: clamp(110px, 15vw, 190px);
          margin-bottom: 30px;
          animation: logoBreath 3.2s infinite ease-in-out;
        }

        /* ── TÍTULO ── */
        h1 {
          font-family: 'Cinzel Decorative', 'Cinzel', serif;
          font-size: clamp(38px, 7.5vw, 90px);
          font-weight: 900;
          letter-spacing: clamp(4px, 1.5vw, 10px);
          color: #fff;
          margin-bottom: 22px;
          text-shadow:
            0 0 6px #fff,
            0 0 20px rgba(255,0,0,1),
            0 0 50px rgba(255,0,0,.92),
            0 0 95px rgba(255,0,0,.75);
        }

        .hero-subtitle {
          font-family: 'Cinzel', serif;
          font-size: clamp(14px, 2.5vw, 26px);
          color: #d4af37;
          letter-spacing: clamp(3px, 1vw, 6px);
          margin-bottom: 28px;
          text-shadow: 0 0 16px rgba(212,175,55,.6);
        }

        .hero-text {
          font-family: 'Cinzel', serif;
          font-size: clamp(15px, 1.8vw, 22px);
          color: #ccc;
          max-width: 820px;
          margin: 0 auto 40px;
          line-height: 1.9;
          letter-spacing: .5px;
        }

        /* ── DIVIDER ── */
        .hero-divider {
          width: clamp(80px, 18vw, 160px);
          height: 1px;
          background: linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent);
          margin: 0 auto 40px;
        }

        /* ── CTA ── */
        .hero-cta {
          display: inline-block;
          font-family: 'Cinzel', serif;
          font-size: clamp(12px, 1.5vw, 16px);
          font-weight: 700;
          letter-spacing: clamp(2px, .8vw, 5px);
          color: #fff;
          text-decoration: none;
          padding: clamp(12px, 2vw, 18px) clamp(28px, 4vw, 52px);
          border: 1px solid rgba(180,0,0,.7);
          border-radius: 4px;
          background: linear-gradient(135deg, rgba(80,0,0,.55), rgba(30,0,0,.85));
          box-shadow:
            0 0 28px rgba(180,0,0,.35),
            inset 0 0 16px rgba(255,0,0,.06);
          transition: all .3s ease;
          text-transform: uppercase;
        }

        .hero-cta:hover {
          background: linear-gradient(135deg, rgba(120,0,0,.8), rgba(60,0,0,.95));
          box-shadow:
            0 0 48px rgba(200,0,0,.6),
            inset 0 0 24px rgba(255,0,0,.12);
          transform: translateY(-2px);
          border-color: rgba(255,0,0,.85);
        }

        /* ── KEYFRAMES ── */
        @keyframes slowZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1.15); }
        }

        @keyframes rainBack {
          from { background-position: 0 0; }
          to   { background-position: 0 80px; }
        }

        @keyframes rainFront {
          from { background-position: 0 0; }
          to   { background-position: 0 48px; }
        }

        @keyframes pulseGlow {
          0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: .40; }
          50%      { transform: translate(-50%,-50%) scale(1.15); opacity: 1; }
        }

        @keyframes pulseRays {
          0%,100% { opacity: .30; }
          50%      { opacity: .95; }
        }

        @keyframes lightningFlash {
          0%,44%,100% { opacity: 0; }
          45%          { opacity: 1; }
          46%          { opacity: 0; }
          47%          { opacity: .75; }
          48%          { opacity: 0; }
        }

        @keyframes logoBreath {
          0%,100% {
            filter:
              drop-shadow(0 0 12px rgba(255,0,0,.9))
              drop-shadow(0 0 30px rgba(255,0,0,.8))
              drop-shadow(0 0 70px rgba(255,0,0,.55));
            transform: scale(1);
          }
          50% {
            filter:
              drop-shadow(0 0 20px rgba(255,0,0,1))
              drop-shadow(0 0 55px rgba(255,0,0,.9))
              drop-shadow(0 0 110px rgba(255,0,0,.65));
            transform: scale(1.05);
          }
        }

        @keyframes cameraShake {
          0%,44%,50%,100% { transform: translate(0,0); }
          45%              { transform: translate(-2px, 1px); }
          46%              { transform: translate(2px,-1px); }
          47%              { transform: translate(-1px, 2px); }
          48%              { transform: translate(0, 0); }
        }

        /* ── RESPONSIVO ── */
        @media (max-width: 768px) {
          .hero-content { transform: translateY(-70px); }
          .hero-cta { padding: 12px 28px; }
        }
      `}</style>
    </section>
  );
}