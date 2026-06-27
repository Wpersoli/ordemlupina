"use client";

import { useEffect, useState } from "react";
import CookieBanner from "../components/CookieBanner";

export default function HomePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ background: "#000", color: "white" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/AA.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle, rgba(120,0,0,0.28) 0%, rgba(0,0,0,0.86) 65%, rgba(0,0,0,0.98) 100%)",
            backdropFilter: "blur(2px)"
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(120,0,0,.15)",
            filter: "blur(60px)",
            animation: "pulseGlow 4s infinite ease-in-out"
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px"
          }}
        >
          <img
            src="/www.png"
            alt="Logo Ordem Lupina"
            style={{
              width: "200px",
              marginBottom: "30px",
              filter:
                "drop-shadow(0 0 15px rgba(180,0,0,.55)) drop-shadow(0 0 35px rgba(255,0,0,.25))",
              animation: "pulseGlow 3.5s infinite ease-in-out"
            }}
          />

          <h1
            style={{
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "8px",
              marginBottom: "20px",
              textShadow: "0 0 35px rgba(180,0,0,.45)"
            }}
          >
            ORDEM LUPINA
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#d4af37",
              marginBottom: "30px",
              letterSpacing: "4px"
            }}
          >
            FORÇA • HONRA • LEALDADE • DESTINO
          </p>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.8",
              maxWidth: "850px",
              margin: "auto",
              color: "#ddd"
            }}
          >
            A alcateia dos que não recuam. Um chamado para aqueles que vivem por
            princípios e caminham com propósito.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ padding: "100px 20px", background: "#090909" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "50px",
            color: "#b30000"
          }}
        >
          Os Quatro Pilares da Ordem
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >
          {[
            {
              titulo: "FORÇA",
              texto:
                "A força não está apenas no corpo, mas na mente e no espírito."
            },
            {
              titulo: "HONRA",
              texto:
                "Agimos com integridade, verdade e respeito em cada passo."
            },
            {
              titulo: "LEALDADE",
              texto:
                "Nenhum lobo caminha sozinho. A irmandade sustenta a alcateia."
            },
            {
              titulo: "DESTINO",
              texto:
                "O destino pertence aos que têm coragem para segui-lo."
            }
          ].map((item) => (
            <div
              key={item.titulo}
              style={{
                background: "rgba(20,20,20,.85)",
                padding: "35px",
                borderRadius: "16px",
                border: "1px solid rgba(180,0,0,.3)",
                boxShadow: "0 0 25px rgba(180,0,0,.12)",
                backdropFilter: "blur(10px)"
              }}
            >
              <h3
                style={{
                  color: "#d4af37",
                  marginBottom: "15px",
                  fontSize: "24px"
                }}
              >
                {item.titulo}
              </h3>

              <p style={{ lineHeight: "1.7", color: "#ccc" }}>
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section style={{ padding: "100px 20px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
              color: "#b30000"
            }}
          >
            Quem Somos
          </h2>

          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
              color: "#ccc"
            }}
          >
            A Ordem Lupina é mais do que uma comunidade. Somos uma irmandade
            formada por pessoas comprometidas com evolução, honra, lealdade e
            propósito.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "100px 20px", background: "#090909" }}>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
              textAlign: "center"
            }}
          >
            Junte-se à Alcateia
          </h2>

          <form
            action="https://formsubmit.co/wagnerpersoli@hotmail.com"
            method="POST"
            style={{ display: "grid", gap: "16px" }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/home" />

            <input name="nome" placeholder="Nome" style={inputStyle} required />
            <input name="email" type="email" placeholder="Email" style={inputStyle} required />

            <textarea
              name="mensagem"
              placeholder="Por que deseja entrar?"
              style={{ ...inputStyle, minHeight: "150px" }}
              required
            />

            <button style={buttonStyle}>ENVIAR</button>
          </form>
        </div>
      </section>

      <CookieBanner />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={topButtonStyle}
        >
          ↑
        </button>
      )}
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  background: "#111",
  border: "1px solid #333",
  color: "white",
  borderRadius: "12px"
};

const buttonStyle = {
  background: "linear-gradient(90deg,#5a0000,#b30000)",
  color: "white",
  border: "none",
  padding: "18px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold"
};

const topButtonStyle = {
  position: "fixed" as const,
  right: "25px",
  bottom: "25px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  background: "#8B0000",
  color: "white",
  fontSize: "22px",
  cursor: "pointer",
  boxShadow: "0 0 20px rgba(180,0,0,.4)"
};