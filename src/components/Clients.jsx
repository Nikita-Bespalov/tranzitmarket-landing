import React from 'react';
import { Section, Eyebrow, Ic } from './Primitives';

export function Clients() {
  const clients = [
    { name: "Петровская мебель", category: "Мебель", initials: "ПМ" },
    { name: "Леском", category: "Двери", initials: "ЛК" },
    { name: "Илком", category: "Кухонная мебель", initials: "ИЛ" },
    { name: "Нарус", category: "Мебель", initials: "НР" },
    { name: "Чемпион", category: "Тренажёры", initials: "ЧП" },
    { name: "Интервело", category: "Велозапчасти", initials: "ИВ" },
  ];
  return (
    <Section pad="default">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>Их клиенты</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(34px, 3.8vw, 56px)",
            fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "#fff",
          }}>
            Нам доверяют<br/>
            <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>производители и&nbsp;бренды</span>
          </h2>
          <p style={{ fontSize: 16.5, color: "var(--fg-2)", marginTop: 22, maxWidth: 580, lineHeight: 1.6 }}>
            От мебельных фабрик до спортивного инвентаря — отгружаем сложные категории на маркетплейсы без брака и срыва сроков.
          </p>
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "12px 18px", borderRadius: 999,
          background: "rgba(207,166,74,.08)", border: "1px solid rgba(207,166,74,.28)",
        }}>
          <span style={{
            fontFamily: "Manrope", fontWeight: 800, fontSize: 22,
            backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>6+</span>
          <span style={{ fontSize: 13, color: "var(--fg-2)" }}>постоянных<br/>партнёров</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        {clients.map((c, i) => <ClientCard key={i} {...c}/>)}
      </div>
    </Section>
  );
}

function ClientCard({ name, category, initials }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        position: "relative", padding: "24px",
        borderRadius: 16,
        background: hover ? "linear-gradient(180deg, rgba(207,166,74,.08), rgba(30,30,34,.95))" : "var(--bg-card)",
        border: `1px solid ${hover ? "rgba(207,166,74,.32)" : "var(--border-1)"}`,
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
        display: "flex", alignItems: "center", gap: 18,
      }}>
      <div style={{
        flexShrink: 0, width: 56, height: 56, borderRadius: 12,
        background: hover ? "var(--gold-gradient)" : "rgba(207,166,74,.10)",
        border: hover ? "none" : "1px solid rgba(207,166,74,.28)",
        color: hover ? "#0A0A0B" : "var(--gold-400)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Manrope", fontWeight: 800, fontSize: 16, letterSpacing: "0.02em",
        transition: "all 220ms",
      }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "Manrope", fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 12.5, color: "var(--fg-3)", marginTop: 6, letterSpacing: "0.02em" }}>{category}</div>
      </div>
      <span style={{ flexShrink: 0, color: hover ? "var(--gold-400)" : "var(--fg-4)", transition: "color 220ms" }}>
        <Ic.arrow size={16}/>
      </span>
    </div>
  );
}
