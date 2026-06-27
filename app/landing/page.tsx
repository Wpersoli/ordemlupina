"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

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
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(120,0,0,0.25) 0%, rgba(0,0,0,0.9) 70%)"
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center"
        }}
      >
        <img
          src="/www.png"
          alt="Ordem Lupina"
          style={{
            width: "180px",
            marginBottom: "30px",
            filter: "drop-shadow(0 0 20px rgba(180,0,0,.5))"
          }}
        />

        <h1
          style={{
            color: "white",
            fontSize: "88px",
            fontWeight: 900,
            letterSpacing: "8px",
            textShadow: "0 0 30px rgba(180,0,0,.45)"
          }}
        >
          ORDEM LUPINA
        </h1>
      </div>
    </main>
  );
}