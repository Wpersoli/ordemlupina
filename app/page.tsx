"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/landing");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "90px",
            color: "white",
            fontWeight: 900,
            letterSpacing: "8px",
            textShadow: "0 0 30px rgba(180,0,0,.4)"
          }}
        >
          ORDEM LUPINA
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "22px",
            color: "#d4af37"
          }}
        >
          HONRA • LEALDADE • DISCIPLINA
        </p>
      </div>
    </main>
  );
}