import React, { useState } from 'react';

export const Ic = {
  arrow: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  arrowL: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  phone: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  mail: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  pin: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: (p={}) => <svg {...p} width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  shield: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  bolt: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  doc: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>,
  chart: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  truck: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  scan: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><path d="M7 7v10M12 7v10M17 7v10"/></svg>,
  pkg: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>,
  refresh: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  factory: (p={}) => <svg {...p} width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V8l6 4V8l6 4V8l6 4v8z"/><path d="M7 20v-4M12 20v-4M17 20v-4"/></svg>,
  check: (p={}) => <svg {...p} width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  dot: (p={}) => <svg {...p} width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor"/></svg>,
  x: (p={}) => <svg {...p} width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

export function Button({ variant = "primary", size = "md", children, icon, iconLeft, onClick, as = "button", href, style }) {
  const Tag = as;
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { fontSize: 13, padding: "9px 18px" },
    md: { fontSize: 14.5, padding: "13px 22px" },
    lg: { fontSize: 16, padding: "16px 28px" },
  };
  const variants = {
    primary: { background: hover ? "var(--gold-500)" : "var(--gold-400)", color: "#0A0A0B", boxShadow: hover ? "var(--shadow-gold)" : "none" },
    secondary: { background: hover ? "rgba(255,255,255,.06)" : "transparent", color: "#fff", border: `1px solid ${hover ? "rgba(255,255,255,.4)" : "rgba(255,255,255,.18)"}` },
    ghost: { background: "transparent", color: hover ? "var(--gold-300)" : "var(--gold-400)", padding: 0 },
    dark: { background: hover ? "#26262B" : "#1E1E22", color: "#fff", border: "1px solid rgba(255,255,255,.08)" },
  };
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        fontFamily: "Manrope, sans-serif", fontWeight: 600,
        borderRadius: 999, border: 0, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 9,
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)", textDecoration: "none",
        whiteSpace: "nowrap", letterSpacing: "-0.005em",
        ...sizes[size], ...variants[variant], ...style,
      }}>
      {iconLeft}{children}{icon}
    </Tag>
  );
}

export function Eyebrow({ children, dim }) {
  return (
    <div style={{
      fontSize: 11.5, letterSpacing: "0.22em", textTransform: "uppercase",
      color: dim ? "var(--fg-3)" : "var(--gold-400)", fontWeight: 600,
      display: "inline-flex", alignItems: "center", gap: 12,
    }}>
      <span style={{ width: 28, height: 1, background: "currentColor", opacity: .8 }}/>
      {children}
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--fg-3)" }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i>0 && <span style={{ color: "var(--graphite-500)" }}>/</span>}
          <a href={it.href||"#"} style={{
            color: i === items.length-1 ? "var(--gold-400)" : "var(--fg-3)",
            textDecoration: "none", fontWeight: 500,
          }}>{it.label}</a>
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Photo({ label="фото", aspect="4/3", tone="warehouse", style={}, children, chip, src }) {
  const tones = {
    warehouse: `linear-gradient(135deg, rgba(207,166,74,.12), rgba(10,10,11,.88)),
      repeating-linear-gradient(45deg, rgba(255,255,255,.03) 0 14px, transparent 14px 28px),
      linear-gradient(180deg, #1E1E22, #0F0F11)`,
    boxes: `radial-gradient(circle at 30% 30%, rgba(207,166,74,.18), transparent 55%),
      radial-gradient(circle at 70% 70%, rgba(207,166,74,.08), transparent 60%),
      linear-gradient(180deg, #17171A, #0A0A0B)`,
    team: `linear-gradient(135deg, rgba(232,207,130,.10), rgba(10,10,11,.92)),
      radial-gradient(circle at 50% 40%, rgba(207,166,74,.15), transparent 60%),
      #15151A`,
    rack: `repeating-linear-gradient(0deg, rgba(207,166,74,.06) 0 32px, transparent 32px 64px),
      linear-gradient(135deg, #1A1A1F, #0A0A0B)`,
  };
  return (
    <div style={{
      aspectRatio: aspect, width: "100%", borderRadius: 16, overflow: "hidden",
      background: tones[tone] || tones.warehouse,
      border: "1px solid var(--border-1)",
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      ...style,
    }}>
      {src && (
        <img src={src} alt={label} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", display: "block",
        }}/>
      )}
      {children}
      {!src && (
        <span style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(207,166,74,.7)",
          padding: "5px 12px",
          border: "1px solid rgba(207,166,74,.25)",
          borderRadius: 999,
        }}>{label}</span>
      )}
      {chip && (
        <span style={{
          position: "absolute", left: 14, bottom: 14,
          padding: "8px 14px", borderRadius: 999,
          background: "rgba(10,10,11,.7)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(207,166,74,.4)",
          color: "var(--gold-400)",
          fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
        }}>{chip}</span>
      )}
    </div>
  );
}

export function Section({ id, children, pad="default", style }) {
  const pads = { default: "clamp(72px, 9vw, 128px) 28px", tight: "clamp(48px, 6vw, 80px) 28px" };
  return (
    <section id={id} style={{ padding: pads[pad], position: "relative", ...style }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {children}
      </div>
    </section>
  );
}
