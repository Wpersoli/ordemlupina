"use client";

import FireParticles from "./FireParticles";

export default function HeroScene() {
  return (
    <section className="hero-scene">

      {/* FUNDO */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      {/* CHUVA */}
      <div className="rain-back" />
      <div className="rain-front" />

      {/* BRASAS */}
      <FireParticles />

      {/* BRILHO + RAIOS DE LUZ */}
      <div className="hero-glow" />
      <div className="hero-rays" />

      {/* RAIOS SVG — 5 grupos com timings independentes */}
      <svg className="hero-svg-lightning lgA" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M180 0 L230 70 L200 130 L270 210 L235 290 L300 400 L265 530" />
        <path d="M260 0 L230 60 L255 110 L220 180 L250 260 L210 370" />
      </svg>
      <svg className="hero-svg-lightning lgB" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M1680 0 L1630 90 L1665 160 L1610 250 L1650 360 L1595 490" />
        <path d="M1740 0 L1770 80 L1745 150 L1790 240 L1755 340 L1800 460" />
      </svg>
      <svg className="hero-svg-lightning lgC" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M940 0 L990 130 L955 215 L1030 310 L985 420 L1045 570" />
      </svg>
      <svg className="hero-svg-lightning lgD" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M420 0 L460 85 L435 155 L490 240 L455 330 L510 430" />
        <path d="M350 0 L320 75 L345 140 L305 210 L335 300" />
      </svg>
      <svg className="hero-svg-lightning lgE" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path d="M1440 0 L1400 95 L1430 175 L1385 265 L1415 370 L1370 500" />
        <path d="M1560 0 L1595 80 L1565 145 L1600 220 L1570 320" />
      </svg>

      {/* VINHETA */}
      <div className="hero-vinheta" />

      {/* CONTEÚDO */}
      <div className="hero-content">

        {/* LOGO + ORBIS VIKINGS */}
        <div className="logo-orbit-wrapper">

          {/* Anel externo — runas vikingas girando */}
          <svg className="orbit-runes" viewBox="0 0 400 400">
            <defs>
              <path id="runeRing" d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0" />
              <linearGradient id="gR" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b4f10"/>
                <stop offset="40%" stopColor="#d4af37"/>
                <stop offset="70%" stopColor="#f0d060"/>
                <stop offset="100%" stopColor="#6b4f10"/>
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="171" fill="none" stroke="#4a3208" strokeWidth="1"/>
            <circle cx="200" cy="200" r="168" fill="none" stroke="url(#gR)" strokeWidth="3"/>
            <circle cx="200" cy="200" r="165" fill="none" stroke="#4a3208" strokeWidth="1"/>
            <text fontSize="13" fill="#d4af37" letterSpacing="8.8" opacity="0.9">
              <textPath href="#runeRing" startOffset="1%">
                ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ ✦
              </textPath>
            </text>
            {/* Marcadores nos 8 pontos */}
            <polygon points="200,27 205,40 195,40" fill="#d4af37" opacity="0.95"/>
            <circle cx="319" cy="81" r="4" fill="#8b0000" stroke="#d4af37" strokeWidth="1.5"/>
            <polygon points="373,200 360,205 360,195" fill="#d4af37" opacity="0.95"/>
            <circle cx="319" cy="319" r="4" fill="#8b0000" stroke="#d4af37" strokeWidth="1.5"/>
            <polygon points="200,373 205,360 195,360" fill="#d4af37" opacity="0.95"/>
            <circle cx="81" cy="319" r="4" fill="#8b0000" stroke="#d4af37" strokeWidth="1.5"/>
            <polygon points="27,200 40,205 40,195" fill="#d4af37" opacity="0.95"/>
            <circle cx="81" cy="81" r="4" fill="#8b0000" stroke="#d4af37" strokeWidth="1.5"/>
          </svg>

          {/* Anel médio — celta tracejado girando ao contrário */}
          <svg className="orbit-celtic" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="gC" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a2508"/>
                <stop offset="50%" stopColor="#b8902e"/>
                <stop offset="100%" stopColor="#3a2508"/>
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="135" fill="none" stroke="url(#gC)" strokeWidth="1.5" strokeDasharray="8 6"/>
            {/* Gemas sangue nos 4 cardeais */}
            <circle cx="200" cy="65" r="6" fill="#6b0000" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="200" cy="65" r="3" fill="#ff1800" opacity="0.85"/>
            <circle cx="335" cy="200" r="6" fill="#6b0000" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="335" cy="200" r="3" fill="#ff1800" opacity="0.85"/>
            <circle cx="200" cy="335" r="6" fill="#6b0000" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="200" cy="335" r="3" fill="#ff1800" opacity="0.85"/>
            <circle cx="65" cy="200" r="6" fill="#6b0000" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="65" cy="200" r="3" fill="#ff1800" opacity="0.85"/>
            {/* Losangos diagonais */}
            <polygon points="295.5,104.5 301,110 295.5,115.5 290,110" fill="#c9a84c" opacity="0.8"/>
            <polygon points="295.5,284.5 301,290 295.5,295.5 290,290" fill="#c9a84c" opacity="0.8"/>
            <polygon points="104.5,284.5 110,290 104.5,295.5 99,290" fill="#c9a84c" opacity="0.8"/>
            <polygon points="104.5,104.5 110,110 104.5,115.5 99,110" fill="#c9a84c" opacity="0.8"/>
          </svg>

          {/* Partículas de fogo orbitando (12 elementos) */}
          <svg className="orbit-particles" viewBox="0 0 400 400">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
              const sizes = [4, 3, 3, 4.5, 2.5, 3.5, 3, 4, 2.5, 3.5, 4, 2];
              const colors = ["#ff5500","#ffaa00","#ff4400","#ff3300","#ffcc00","#ff5500","#ff2200","#ff6600","#ff4400","#ffaa00","#ff3300","#ffcc00"];
              const durs = [4.0,4.4,3.8,4.2,3.6,4.1,3.9,4.3,3.7,4.0,4.5,3.5];
              const s = sizes[i]; const c = colors[i]; const d = durs[i];
              return (
                <g key={i}>
                  <circle cx="200" cy="48" r={s} fill={c} opacity="0.9">
                    <animateTransform attributeName="transform" type="rotate"
                      from={`${deg} 200 200`} to={`${deg + 360} 200 200`}
                      dur={`${d}s`} repeatCount="indefinite"/>
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* LOGO */}
          <img src="/www.png" alt="Ordem Lupina" className="hero-logo" />
        </div>

        <h1>Ordem Lupina - Oficial</h1>

        <p className="hero-subtitle">
          FORÇA • HONRA • LEALDADE • DESTINO
        </p>

        <p className="hero-text">
          A alcateia dos que não recuam. Um chamado para aqueles que vivem por
          princípios e caminham com propósito.
        </p>

        <div className="hero-divider" />

        <a href="#pilares" className="hero-cta">
          DESCOBRIR A ORDEM
        </a>
      </div>

      <style jsx>{`

        .hero-scene {
          position: relative; min-height: 100vh;
          overflow: hidden; display: flex;
          justify-content: center; align-items: center;
          text-align: center; background: #000;
          animation: cameraShake 4.5s infinite;
        }

        .hero-bg {
          position: absolute; inset: 0;
          background: url('/bg/AA-clean.png') center center / cover no-repeat;
          transform: scale(11.08);
          filter: brightness(1.92) contrast(1.30) saturate(1.2);
          animation: slowZoom 12s infinite alternate ease-in-out;
        }

        .hero-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center,
            rgba(60,0,0,.25) 100%, rgba(0,0,0,.72) 50%, rgba(0,0,0,.96) 100%);
          z-index: 2;
        }

        .rain-back {
          position: absolute; inset: 0; z-index: 4; opacity: .07;
          transform: skewX(-16deg);
          background-image: linear-gradient(to bottom, rgba(160,190,255,.18), transparent);
          background-size: 2px 80px; background-repeat: repeat;
          animation: rainBack 0.34s linear infinite; pointer-events: none;

        }

        .hero-glow {
          position: absolute; top: 50%; left: 50%;
          width: 1200px; height: 1200px;
          transform: translate(-50%, -50%);
          border-radius: 50%; background: rgba(200,0,0,.28);
          filter: blur(210px);
          animation: pulseGlow 2.8s infinite ease-in-out;
          z-index: 7; pointer-events: none;
        }
        .hero-rays {
          position: absolute; inset: 0; z-index: 8;
          background: radial-gradient(circle at center top, rgba(220,0,0,.35), transparent 42%);
          animation: pulseRays 2.8s infinite ease-in-out; pointer-events: none;
        }

        /* Raios — base compartilhada */
        .hero-svg-lightning {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          z-index: 9; opacity: 0; pointer-events: none;
        }
        .hero-svg-lightning path {
          fill: none; stroke: rgba(255,255,255,.94);
          stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;
          filter:
            drop-shadow(0 0 6px rgba(255,255,255,.95))
            drop-shadow(0 0 18px rgba(255,80,80,.9))
            drop-shadow(0 0 45px rgba(255,0,0,.7));
        }

        /* Cada grupo com seu próprio timing */
        .lgA { animation: flashA 3.2s infinite; }
        .lgB { animation: flashB 4.1s 0.8s infinite; }
        .lgC { animation: flashC 5.0s 1.5s infinite; }
        .lgD { animation: flashD 2.9s 0.3s infinite; }
        .lgE { animation: flashE 3.7s 2.1s infinite; }

        .hero-vinheta {
          position: absolute; inset: 0;
          box-shadow: inset 0 0 240px rgba(0,0,0,.7);
          z-index: 12; pointer-events: none;
        }

        .hero-content {
          position: relative; z-index: 20;
          max-width: 1100px; padding: 20px;
          transform: translateY(-50px);
        }
        .hero-content::before {
          content: "";
          position: absolute; inset: -80px;
          background: radial-gradient(circle, rgba(0,0,0,.5), transparent 68%);
          z-index: -1;
        }

        /* ── LOGO + ORBIS ── */
        .logo-orbit-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center; justify-content: center;
          width: clamp(240px, 30vw, 360px);
          height: clamp(240px, 30vw, 360px);
          margin-bottom: 28px;
        }

        .orbit-runes {
          position: absolute; inset: 0; width: 100%; height: 100%;
          animation: rotateCW 28s linear infinite;
          filter: drop-shadow(0 0 25px rgba(212,175,55,.8));
        }
        .orbit-celtic {
          position: absolute; inset: 0; width: 100%; height: 100%;
          animation: rotateCCW 20s linear infinite;
          filter: drop-shadow(0 0 4px rgba(180,0,0,.7));
        }
        .orbit-particles {
          position: absolute; inset: 0; width: 100%; height: 100%;
          filter: drop-shadow(0 0 16px rgba(255,60,0,.9));
        }

        .hero-logo {
          position: absolute;
          width: 68%;
          animation: logoBreath 3.5s infinite ease-in-out;
          z-index: 5;
          filter:
            drop-shadow(0 0 14px rgba(255,0,0,.95))
            drop-shadow(0 0 35px rgba(255,0,0,.85))
            drop-shadow(0 0 80px rgba(255,0,0,.6));
        }

        h1 {
          font-family: 'Cinzel Decorative', 'Cinzel', serif;
          font-size: clamp(38px, 7.5vw, 90px);
          font-weight: 900; letter-spacing: clamp(4px, 1.5vw, 10px);
          color: #fff; margin-bottom: 22px;
          text-shadow: 0 0 6px #fff, 0 0 20px rgba(255,0,0,1),
            0 0 50px rgba(255,0,0,.92), 0 0 95px rgba(255,0,0,.75);
        }
        .hero-subtitle {
          font-family: 'Cinzel', serif;
          font-size: clamp(24px, 2.5vw, 26px);
          color: #d4af37; letter-spacing: clamp(3px, 1vw, 6px);
          margin-bottom: 28px; text-shadow: 0 0 16px rgba(212,175,55,.6);
        }
        .hero-text {
          font-family: 'Cinzel', serif;
          font-size: clamp(15px, 1.8vw, 22px);
          color: #ccc; max-width: 820px;
          margin: 0 auto 40px; line-height: 1.9; letter-spacing: .5px;
        }
        .hero-divider {
          width: clamp(80px, 18vw, 160px); height: 1px;
          background: linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent);
          margin: 0 auto 40px;
        }
        .hero-cta {
          display: inline-block; font-family: 'Cinzel', serif;
          font-size: clamp(12px, 1.5vw, 16px); font-weight: 700;
          letter-spacing: clamp(2px, .8vw, 5px);
          color: #fff; text-decoration: none;
          padding: clamp(12px, 2vw, 18px) clamp(28px, 4vw, 52px);
          border: 1px solid rgba(180,0,0,.7); border-radius: 4px;
          background: linear-gradient(135deg, rgba(80,0,0,.55), rgba(30,0,0,.85));
          box-shadow: 0 0 28px rgba(180,0,0,.35), inset 0 0 16px rgba(255,0,0,.06);
          transition: all .3s ease; text-transform: uppercase;
        }
        .hero-cta:hover {
          background: linear-gradient(135deg, rgba(120,0,0,.8), rgba(60,0,0,.95));
          box-shadow: 0 0 48px rgba(200,0,0,.6), inset 0 0 24px rgba(255,0,0,.12);
          transform: translateY(-2px); border-color: rgba(255,0,0,.85);
        }

        /* ── KEYFRAMES ── */
        @keyframes slowZoom {
          from { transform: scale(1); } to { transform: scale(1.15); }
        }
        @keyframes rainBack {
          from { background-position: 0 0; } to { background-position: 0 80px; }

        }
        @keyframes pulseGlow {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity: .40; }
          50%      { transform: translate(-50%,-50%) scale(1.15); opacity: 1; }
        }
        @keyframes pulseRays {
          0%,100% { opacity: .30; } 50% { opacity: .95; }
        }
        @keyframes logoBreath {
          0%,100% {
            filter: drop-shadow(0 0 14px rgba(255,0,0,.95)) drop-shadow(0 0 35px rgba(255,0,0,.85)) drop-shadow(0 0 80px rgba(255,0,0,.6));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 22px rgba(255,0,0,1)) drop-shadow(0 0 60px rgba(255,0,0,.9)) drop-shadow(0 0 120px rgba(255,0,0,.65));
            transform: scale(1.04);
          }
        }
        @keyframes rotateCW {
          from { transform: rotate(0deg); } to { transform: rotate(360deg); }
        }
        @keyframes rotateCCW {
          from { transform: rotate(0deg); } to { transform: rotate(-360deg); }
        }
        @keyframes flashA {
          0%,28%,100% { opacity: 0; }
          29% { opacity: 1; } 30% { opacity: 0; }
          31% { opacity: .6; } 32% { opacity: 0; }
        }
        @keyframes flashB {
          0%,40%,100% { opacity: 0; }
          41% { opacity: .9; } 42% { opacity: 0; }
          43% { opacity: .5; } 44% { opacity: 0; }
        }
        @keyframes flashC {
          0%,55%,100% { opacity: 0; }
          56% { opacity: 1; } 57% { opacity: .2; }
          58% { opacity: .8; } 59% { opacity: 0; }
        }
        @keyframes flashD {
          0%,18%,100% { opacity: 0; }
          19% { opacity: .85; } 20% { opacity: 0; }
          21% { opacity: .4; } 22% { opacity: 0; }
        }
        @keyframes flashE {
          0%,65%,100% { opacity: 0; }
          66% { opacity: .95; } 67% { opacity: 0; }
          68% { opacity: .55; } 69% { opacity: 0; }
        }
        @keyframes cameraShake {
          0%,28%,35%,100% { transform: translate(0,0); }
          29% { transform: translate(-2px, 1px); }
          30% { transform: translate(2px,-1px); }
          31% { transform: translate(-1px, 2px); }
          32% { transform: translate(0, 0); }
        }

      .hero-content {
    transform: translateY(55px);
}

@media (max-width:768px){
    .hero-content{
        transform: translateY(20px);
    }
        }
      `}</style>
    </section>
  );
}
