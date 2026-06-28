"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ordemlupina_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só mostra se o usuário ainda não aceitou
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Pequeno delay para não aparecer imediatamente
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-icon">🐺</div>
        <p>
          A <strong>Ordem Lupina</strong> utiliza cookies para aprimorar sua
          experiência. Ao continuar, você concorda com nossa política.
        </p>
        <button onClick={accept}>ACEITAR E CONTINUAR</button>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 400px;
          max-width: calc(100vw - 32px);
          padding: 24px 22px 20px;
          border-radius: 12px;
          z-index: 9999;
          background: rgba(6, 6, 6, 0.96);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(180,0,0,.45);
          box-shadow:
            0 0 40px rgba(140,0,0,.28),
            0 8px 40px rgba(0,0,0,.7),
            inset 0 0 24px rgba(255,0,0,.04);
          animation: slideUp 0.5s cubic-bezier(.22,.68,0,1.2) both;
        }

        .cookie-icon {
          font-size: 24px;
          margin-bottom: 12px;
          text-align: center;
        }

        .cookie-banner p {
          font-family: 'Cinzel', serif;
          color: #bbb;
          font-size: 13px;
          line-height: 1.8;
          margin-bottom: 20px;
          text-align: center;
        }

        .cookie-banner strong {
          color: #d4af37;
          font-weight: 700;
        }

        .cookie-banner button {
          width: 100%;
          border: none;
          padding: 14px;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          color: #fff;
          background: linear-gradient(90deg, #4a0000, #8b0000, #4a0000);
          background-size: 200% 100%;
          box-shadow: 0 0 22px rgba(180,0,0,.4);
          transition: all .28s ease;
          text-transform: uppercase;
        }

        .cookie-banner button:hover {
          background-position: right center;
          box-shadow: 0 0 38px rgba(220,0,0,.55);
          transform: translateY(-1px);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        @media (max-width: 600px) {
          .cookie-banner {
            right: 12px;
            left: 12px;
            bottom: 12px;
            width: auto;
            padding: 20px 16px 16px;
          }
        }
      `}</style>
    </>
  );
}