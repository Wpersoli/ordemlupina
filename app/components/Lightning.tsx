"use client";

export default function Lightning() {
  return (
    <div className="lightning-wrap">
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path
          className="bolt bolt-1"
          d="M300 0 L380 180 L340 280 L420 420 L390 540 L460 760 L430 1080"
        />
        <path
          className="bolt bolt-2"
          d="M1550 0 L1480 170 L1510 320 L1430 480 L1460 700 L1390 1080"
        />
      </svg>

      <style jsx>{`
        .lightning-wrap {
          position: absolute;
          inset: 0;
          z-index: 12;
          pointer-events: none;
        }

        svg {
          width: 100%;
          height: 100%;
        }

        .bolt {
          fill: none;
          stroke: #ff2a2a;
          stroke-width: 4;
          opacity: 0;
          filter: drop-shadow(0 0 12px red)
                  drop-shadow(0 0 25px #ff0000);
        }

        .bolt-1 {
          animation: flash1 8s infinite;
        }

        .bolt-2 {
          animation: flash2 11s infinite;
        }

        @keyframes flash1 {
          0%, 90%, 100% { opacity: 0; }
          91% { opacity: 1; }
          92% { opacity: 0; }
          93% { opacity: 1; }
          94% { opacity: 0; }
        }

        @keyframes flash2 {
          0%, 85%, 100% { opacity: 0; }
          86% { opacity: 1; }
          87% { opacity: 0; }
          88% { opacity: 1; }
          89% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}