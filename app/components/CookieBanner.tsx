"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "900px",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(180,0,0,.35)",
        borderRadius: "18px",
        padding: "20px",
        zIndex: 9999,
        boxShadow: "0 0 30px rgba(180,0,0,.25)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <p style={{ color: "#ccc", margin: 0 }}>
          Utilizamos cookies para melhorar sua experiência na Ordem Lupina.
        </p>

        <button
          onClick={() => setAccepted(true)}
          style={{
            background: "linear-gradient(90deg,#5a0000,#b30000)",
            border: "none",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ACEITAR
        </button>
      </div>
    </div>
  );
}