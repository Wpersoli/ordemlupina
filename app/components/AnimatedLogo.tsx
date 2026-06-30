"use client";

export default function AnimatedLogo() {
  return (
    <div className="logo-wrapper">
      <div className="logo-aura"></div>
      <div className="logo-ring"></div>
      <div className="logo-orbit orbit-1"></div>
      <div className="logo-orbit orbit-2"></div>
      <div className="logo-flash"></div>

      <img src="/www.png" alt="Ordem Lupina" className="hero-logo" />

      <style jsx>{`
        .logo-wrapper {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 28px;
          animation:
            logoFloat 6s ease-in-out infinite,
            logoShake 5s infinite;
        }

        .logo-aura {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background:
            radial-gradient(circle,
              rgba(255,0,0,.55) 0%,
              rgba(255,0,0,.22) 35%,
              transparent 70%);
          filter: blur(35px);
          animation: auraPulse 2.3s infinite ease-in-out;
        }

        .logo-ring {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(255,0,0,.28);
          box-shadow:
            0 0 25px rgba(255,0,0,.5),
            inset 0 0 25px rgba(255,0,0,.25);
          animation: ringRotate 8s linear infinite;
        }

        .logo-orbit {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,120,0,.9);
          box-shadow:
            0 0 10px rgba(255,120,0,1),
            0 0 20px rgba(255,0,0,.8);
        }

        .orbit-1 {
          animation: orbit1 5s linear infinite;
        }

        .orbit-2 {
          animation: orbit2 7s linear infinite;
        }

        .logo-flash {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255,255,255,.4), transparent 60%);
          opacity: 0;
          animation: flashSync 5s infinite;
          border-radius: 50%;
        }

        .hero-logo {
          position: relative;
          width: 190px;
          z-index: 10;
          filter:
            drop-shadow(0 0 12px rgba(255,0,0,.9))
            drop-shadow(0 0 28px rgba(255,0,0,.8))
            drop-shadow(0 0 80px rgba(255,0,0,.55));
          animation:
            logoBreath 3s infinite ease-in-out,
            logoFlicker 4s infinite;
        }

        @keyframes auraPulse {
          0%,100% {
            transform: scale(1);
            opacity: .55;
          }
          50% {
            transform: scale(1.16);
            opacity: 1;
          }
        }

        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(110px); }
          100% { transform: rotate(360deg) translateX(110px); }
        }

        @keyframes orbit2 {
          0% { transform: rotate(360deg) translateX(90px); }
          100% { transform: rotate(0deg) translateX(90px); }
        }

        @keyframes flashSync {
          0%,100% { opacity: 0; }
          46% { opacity: .15; }
          47% { opacity: .7; }
          48% { opacity: 0; }
        }

        @keyframes logoBreath {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        @keyframes logoFloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes logoFlicker {
          0%,100% { opacity: 1; }
          47% { opacity: .75; }
          48% { opacity: 1; }
        }

        @keyframes logoShake {
          0%,100% { transform: translate(0,0); }
          47% { transform: translate(-1px,1px); }
          48% { transform: translate(1px,-1px); }
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            width: 140px;
            height: 140px;
          }

          .hero-logo {
            width: 110px;
          }

          .logo-ring {
            width: 130px;
            height: 130px;
          }

          .logo-aura {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}