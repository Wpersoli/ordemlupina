"use client";

import { useEffect, useRef, useState } from "react";
import HeroScene from "../components/HeroScene";
import CookieBanner from "../components/CookieBanner";

/* ─── Dados dos pilares ─────────────────────────────────── */
const PILARES = [
  {
    simbolo: "⚔",
    titulo: "FORÇA",
    texto:
      "A força não reside apenas no corpo, mas na mente que não cede e no espírito que persiste onde outros desistem.",
  },
  {
    simbolo: "⚖",
    titulo: "HONRA",
    texto:
      "Agimos com integridade absoluta. Nossa palavra é nosso escudo. Verdade e respeito guiam cada ação.",
  },
  {
    simbolo: "🐺",
    titulo: "LEALDADE",
    texto:
      "Nenhum lobo caminha sozinho. A irmandade sustenta a alcateia — unidos somos invencíveis.",
  },
  {
    simbolo: "🌑",
    titulo: "DESTINO",
    texto:
      "O destino não é dado — é conquistado. Pertencem a ele apenas os que têm coragem de segui-lo.",
  },
];

/* ─── Componente de cartão de pilar ─────────────────────── */
function PilarCard({
  simbolo,
  titulo,
  texto,
  index,
}: (typeof PILARES)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(145deg, rgba(14,14,14,.95), rgba(8,8,8,.98))",
        padding: "38px 32px",
        borderRadius: "12px",
        border: "1px solid rgba(180,0,0,.28)",
        boxShadow: "0 0 40px rgba(140,0,0,.10), 0 4px 24px rgba(0,0,0,.5)",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity .7s ease ${index * 0.12}s, transform .7s ease ${index * 0.12}s`,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(220,0,0,.55)";
        el.style.boxShadow = "0 0 70px rgba(180,0,0,.22), 0 8px 40px rgba(0,0,0,.6)";
        el.style.transform = visible ? "translateY(-4px)" : "translateY(32px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(180,0,0,.28)";
        el.style.boxShadow = "0 0 40px rgba(140,0,0,.10), 0 4px 24px rgba(0,0,0,.5)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Decoração de canto superior */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #8b0000, transparent)",
        }}
      />

      <div
        style={{
          fontSize: "32px",
          marginBottom: "18px",
          filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
        }}
      >
        {simbolo}
      </div>

      <h3
        style={{
          fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: 900,
          color: "#d4af37",
          letterSpacing: "3px",
          marginBottom: "18px",
          textShadow: "0 0 14px rgba(212,175,55,.5)",
        }}
      >
        {titulo}
      </h3>

      <div
        style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(to right, #8b0000, transparent)",
          marginBottom: "18px",
        }}
      />

      <p
        style={{
          fontFamily: "'Cinzel', serif",
          lineHeight: "1.85",
          color: "#aaa",
          fontSize: "clamp(13px, 1.5vw, 15px)",
        }}
      >
        {texto}
      </p>
    </div>
  );
}

/* ─── Seção com fade-in ──────────────────────────────────── */
function FadeSection({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.10 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "opacity .8s ease, transform .8s ease",
      }}
    >
      {children}
    </div>
  );
}

/* ─── FORMULÁRIO ─────────────────────────────────────────── */
function JoinForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });
      const data = await res.json();
      setStatus(data.success ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  const inputSt: React.CSSProperties = {
    width: "100%",
    padding: "16px 18px",
    background: "rgba(14,14,14,.9)",
    border: "1px solid rgba(100,0,0,.4)",
    color: "#ddd",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "'Cinzel', serif",
    fontSize: "14px",
    transition: "border-color .25s, box-shadow .25s",
  };

  if (status === "ok") {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: "48px", marginBottom: "20px" }}>🐺</div>
        <h3 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "26px",
          color: "#d4af37",
          marginBottom: "16px",
          textShadow: "0 0 18px rgba(212,175,55,.6)",
        }}>
          BEM-VINDO À ALCATEIA
        </h3>
        <p style={{ color: "#aaa", fontFamily: "'Cinzel', serif", fontSize: "14px" }}>
          Sua solicitação foi recebida. A Ordem entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome completo"
        required
        style={inputSt}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(180,0,0,.7)";
          e.target.style.boxShadow = "0 0 16px rgba(140,0,0,.25)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(100,0,0,.4)";
          e.target.style.boxShadow = "none";
        }}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Endereço de email"
        required
        style={inputSt}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(180,0,0,.7)";
          e.target.style.boxShadow = "0 0 16px rgba(140,0,0,.25)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(100,0,0,.4)";
          e.target.style.boxShadow = "none";
        }}
      />

      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Por que deseja ingressar na Ordem Lupina?"
        required
        rows={5}
        style={{ ...inputSt, resize: "vertical", lineHeight: "1.7" }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(180,0,0,.7)";
          e.target.style.boxShadow = "0 0 16px rgba(140,0,0,.25)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(100,0,0,.4)";
          e.target.style.boxShadow = "none";
        }}
      />

      {status === "err" && (
        <p style={{ color: "#ff4444", fontFamily: "'Cinzel', serif", fontSize: "13px", textAlign: "center" }}>
          Ocorreu um erro. Tente novamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "4px",
          color: "#fff",
          border: "none",
          padding: "18px",
          borderRadius: "8px",
          cursor: status === "sending" ? "wait" : "pointer",
          background: status === "sending"
            ? "rgba(60,0,0,.7)"
            : "linear-gradient(90deg, #4a0000, #8b0000, #4a0000)",
          backgroundSize: "200% 100%",
          boxShadow: "0 0 28px rgba(180,0,0,.38)",
          transition: "all .3s ease",
          textTransform: "uppercase",
          opacity: status === "sending" ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (status !== "sending") {
            e.currentTarget.style.boxShadow = "0 0 50px rgba(220,0,0,.6)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 28px rgba(180,0,0,.38)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {status === "sending" ? "ENVIANDO..." : "JURAR LEALDADE"}
      </button>
    </form>
  );
}

/* ─── PAGE PRINCIPAL ─────────────────────────────────────── */
export default function HomePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const sectionDivider = (
    <div
      style={{
        width: "100%",
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(139,0,0,.5), rgba(212,175,55,.3), rgba(139,0,0,.5), transparent)",
      }}
    />
  );

  return (
    <main style={{ background: "#000", color: "#e0e0e0", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <HeroScene />

      {sectionDivider}

      {/* ── OS QUATRO PILARES ── */}
      <section
        id="pilares"
        style={{
          padding: "110px 20px",
          background: "linear-gradient(to bottom, #050505, #080808)",
        }}
      >
        <FadeSection>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              textAlign: "center",
              fontSize: "clamp(11px, 1.5vw, 13px)",
              letterSpacing: "6px",
              color: "#8b0000",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Os Fundamentos
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
              textAlign: "center",
              fontSize: "clamp(26px, 4.5vw, 48px)",
              fontWeight: 900,
              marginBottom: "16px",
              color: "#fff",
              textShadow:
                "0 0 22px rgba(180,0,0,.3), 0 0 60px rgba(180,0,0,.12)",
            }}
          >
            Os Quatro Pilares da Ordem
          </h2>
          <div
            style={{
              width: "clamp(60px, 12vw, 120px)",
              height: "1px",
              background: "linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent)",
              margin: "0 auto 68px",
            }}
          />
        </FadeSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {PILARES.map((p, i) => (
            <PilarCard key={p.titulo} {...p} index={i} />
          ))}
        </div>
      </section>

      {sectionDivider}

      {/* ── QUEM SOMOS ── */}
      <section
        style={{
          padding: "110px 20px",
          background: "linear-gradient(to bottom, #080808, #050505)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow de fundo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(60,0,0,.18), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <FadeSection style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(11px, 1.5vw, 13px)",
              letterSpacing: "6px",
              color: "#8b0000",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Nossa Essência
          </p>

          <h2
            style={{
              fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
              fontSize: "clamp(26px, 4.5vw, 48px)",
              fontWeight: 900,
              marginBottom: "18px",
              color: "#fff",
              textShadow: "0 0 22px rgba(180,0,0,.28)",
            }}
          >
            Quem Somos
          </h2>

          <div
            style={{
              width: "clamp(60px, 12vw, 120px)",
              height: "1px",
              background: "linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent)",
              margin: "0 auto 52px",
            }}
          />

          {/* Citação em destaque */}
          <blockquote
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              fontStyle: "italic",
              color: "#d4af37",
              marginBottom: "44px",
              lineHeight: "1.9",
              padding: "28px 40px",
              border: "1px solid rgba(212,175,55,.2)",
              borderRadius: "8px",
              background: "rgba(212,175,55,.03)",
              textShadow: "0 0 14px rgba(212,175,55,.3)",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-18px",
                left: "20px",
                fontSize: "60px",
                color: "rgba(139,0,0,.4)",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
              }}
            >
              "
            </span>
            O lobo solitário morre. A alcateia sobrevive.
          </blockquote>

          <p
            style={{
              lineHeight: "2.1",
              fontSize: "clamp(14px, 1.8vw, 17px)",
              color: "#999",
              fontFamily: "'Cinzel', serif",
              maxWidth: "800px",
              margin: "0 auto 28px",
            }}
          >
            A Ordem Lupina é mais do que uma comunidade — somos uma irmandade
            forjada por pessoas comprometidas com evolução, honra, lealdade e
            propósito. Cada membro fortalece o outro, cada sacrifício engrandece
            o todo.
          </p>

          <p
            style={{
              lineHeight: "2.1",
              fontSize: "clamp(14px, 1.8vw, 17px)",
              color: "#777",
              fontFamily: "'Cinzel', serif",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Aqui não há espaço para mediocridade nem para os que abandonam ao
            primeiro sinal de dificuldade. Somos os que ficam — e que juntos,
            são imparáveis.
          </p>
        </FadeSection>
      </section>

      {sectionDivider}

      {/* ── FORMULÁRIO DE INGRESSO ── */}
      <section
        style={{
          padding: "110px 20px",
          background: "linear-gradient(to bottom, #050505, #080808)",
        }}
      >
        <FadeSection style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              textAlign: "center",
              fontSize: "clamp(11px, 1.5vw, 13px)",
              letterSpacing: "6px",
              color: "#8b0000",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Ingressar
          </p>

          <h2
            style={{
              fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: 900,
              marginBottom: "18px",
              textAlign: "center",
              color: "#fff",
              textShadow: "0 0 22px rgba(180,0,0,.28)",
            }}
          >
            Junte-se à Alcateia
          </h2>

          <div
            style={{
              width: "clamp(60px, 12vw, 120px)",
              height: "1px",
              background: "linear-gradient(to right, transparent, #8b0000, #d4af37, #8b0000, transparent)",
              margin: "0 auto 52px",
            }}
          />

          <div
            style={{
              background: "rgba(8,8,8,.95)",
              border: "1px solid rgba(180,0,0,.22)",
              borderRadius: "14px",
              padding: "clamp(28px, 4vw, 48px)",
              boxShadow: "0 0 60px rgba(100,0,0,.14), 0 12px 60px rgba(0,0,0,.7)",
              backdropFilter: "blur(12px)",
            }}
          >
            <JoinForm />
          </div>
        </FadeSection>
      </section>

      {sectionDivider}

      {/* ── RODAPÉ ── */}
      <footer
        style={{
          padding: "60px 20px 40px",
          background: "#000",
          textAlign: "center",
        }}
      >
        <img
          src="/www.png"
          alt="Ordem Lupina"
          style={{
            width: "clamp(60px, 8vw, 80px)",
            marginBottom: "24px",
            opacity: 0.7,
            filter: "drop-shadow(0 0 8px rgba(200,0,0,.5))",
          }}
        />

        <p
          style={{
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            fontSize: "clamp(13px, 2vw, 18px)",
            letterSpacing: "6px",
            color: "#555",
            marginBottom: "12px",
          }}
        >
          ORDEM LUPINA
        </p>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "12px",
            color: "#333",
            letterSpacing: "3px",
          }}
        >
          HONRA • LEALDADE • DISCIPLINA
        </p>

        <div
          style={{
            width: "clamp(40px, 8vw, 80px)",
            height: "1px",
            background: "linear-gradient(to right, transparent, #3d0000, transparent)",
            margin: "28px auto 20px",
          }}
        />

        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", color: "#252525" }}>
          © {new Date().getFullYear()} Ordem Lupina — Todos os direitos reservados
        </p>
      </footer>

      {/* ── COOKIE ── */}
      <CookieBanner />

      {/* ── BOTÃO TOPO ── */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            right: "22px",
            bottom: "22px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(180,0,0,.5)",
            background: "rgba(6,6,6,.92)",
            color: "#d4af37",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 0 22px rgba(180,0,0,.4)",
            zIndex: 998,
            backdropFilter: "blur(8px)",
            transition: "all .25s ease",
            fontFamily: "serif",
          }}
          title="Voltar ao topo"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 38px rgba(220,0,0,.6)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 22px rgba(180,0,0,.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          ↑
        </button>
      )}
    </main>
  );
}