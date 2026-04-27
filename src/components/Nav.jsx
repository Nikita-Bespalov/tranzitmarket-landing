import React, { useState, useEffect } from 'react';
import { Button, Ic } from './Primitives';
import { useIsMobile } from '../hooks/useIsMobile';

const iconBtn = {
  width: 38, height: 38, borderRadius: 999,
  background: "#1E1E22", border: "1px solid var(--border-1)",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  textDecoration: "none", transition: "all 200ms",
};

const links = [
  ["Фулфилмент", "#services"],
  ["Цены", "#pricing"],
  ["О нас", "#about"],
  ["Контакты", "#contact"],
  ["Калькулятор", "#calc"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 12);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      padding: scrolled ? "10px 16px" : "16px 16px",
      transition: "padding 280ms cubic-bezier(.2,.7,.2,1)",
      pointerEvents: "none",
    }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        display: "flex", alignItems: "center", gap: 18,
        padding: isMobile ? "10px 10px 10px 16px" : "10px 10px 10px 22px",
        borderRadius: 999,
        background: "rgba(17,17,19,.88)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: "1px solid var(--border-1)",
        boxShadow: scrolled ? "0 14px 40px rgba(0,0,0,.55)" : "0 6px 20px rgba(0,0,0,.35)",
        pointerEvents: "auto",
        transition: "all 280ms cubic-bezier(.2,.7,.2,1)",
        position: "relative",
      }}>
        {/* ── Logo ── */}
        <a href="#top" style={{
          display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
          fontFamily: "Manrope, sans-serif", fontWeight: 800,
          fontSize: isMobile ? 14 : 17,
          letterSpacing: "-0.025em", color: "#fff", flexShrink: 0,
        }}>
          <span style={{
            width: 34, height: 34, borderRadius: 10,
            background: "var(--gold-gradient)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px -4px rgba(207,166,74,.6)",
          }}>
            <img src="/assets/logo-mark-gold.png" alt=""
              style={{ width: 22, height: 22, objectFit: "contain", filter: "brightness(0)" }}/>
          </span>
          <span style={{
            backgroundImage: "var(--gold-gradient)",
            WebkitBackgroundClip: "text", backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.01em",
          }}>ТРАНЗИТМАРКЕТ</span>
        </a>

        {/* ── Desktop nav ── */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
            {links.map(([l, h]) => (
              <a key={l} href={h} style={{
                padding: "8px 14px", borderRadius: 999, color: "var(--fg-2)",
                fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
                textDecoration: "none", transition: "all 200ms",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-2)"; e.currentTarget.style.background = "transparent"; }}
              >{l}</a>
            ))}
          </nav>
        )}

        {/* ── Desktop right block ── */}
        {!isMobile && (
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <a href="#" title="WhatsApp" style={iconBtn}>
                <img src="/assets/icon-whatsapp.png" alt="" style={{ width: 22, height: 22, borderRadius: 999 }}/>
              </a>
              <a href="#" title="Telegram" style={iconBtn}>
                <img src="/assets/icon-telegram.png" alt="" style={{ width: 22, height: 22, borderRadius: 999 }}/>
              </a>
              <a href="#" title="MAX" style={iconBtn}>
                <img src="/assets/icon-max.png" alt="" style={{ width: 22, height: 22, borderRadius: 6 }}/>
              </a>
            </div>
            <div style={{
              textAlign: "right", paddingRight: 4, lineHeight: 1.2,
              borderLeft: "1px solid var(--border-1)", paddingLeft: 14,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--success)", boxShadow: "0 0 8px rgba(59,187,110,.7)" }}/>
                <a href="tel:+74954142112" style={{
                  fontFamily: "Manrope", fontSize: 14.5, fontWeight: 700,
                  color: "#fff", letterSpacing: "-0.01em", textDecoration: "none",
                }}>+7 (495) 414‑21‑12</a>
              </div>
              <a href="mailto:welcome@tranzitmarket.ru" style={{
                fontSize: 11.5, color: "var(--fg-3)",
                fontFamily: "Inter", fontWeight: 500, letterSpacing: "0.02em", textDecoration: "none",
              }}>welcome@tranzitmarket.ru</a>
            </div>
            <Button size="sm" as="a" href="#contact">Обратный звонок</Button>
          </div>
        )}

        {/* ── Mobile: phone + hamburger ── */}
        {isMobile && (
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <a href="tel:+74954142112" style={{
              fontFamily: "Manrope", fontSize: 13, fontWeight: 700,
              color: "#fff", textDecoration: "none", letterSpacing: "-0.01em",
            }}>+7 (495) 414‑21‑12</a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                width: 38, height: 38, borderRadius: 999,
                background: menuOpen ? "var(--gold-400)" : "#1E1E22",
                border: "1px solid var(--border-1)",
                color: menuOpen ? "#0A0A0B" : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 200ms", flexShrink: 0,
              }}
            >
              {menuOpen
                ? <Ic.x size={16}/>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        )}

        {/* ── Mobile dropdown menu ── */}
        {isMobile && menuOpen && (
          <div style={{
            position: "absolute", top: "calc(100% + 10px)", left: 0, right: 0,
            background: "rgba(17,17,19,.97)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border-1)",
            borderRadius: 20,
            padding: "16px 0",
            zIndex: 100,
          }}>
            {links.map(([l, h]) => (
              <a key={l} href={h}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block", padding: "14px 24px",
                  color: "var(--fg-1)", fontFamily: "Manrope", fontSize: 16, fontWeight: 600,
                  textDecoration: "none", borderBottom: "1px solid var(--border-1)",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold-400)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--fg-1)"}
              >{l}</a>
            ))}
            <div style={{ padding: "16px 24px 4px", display: "flex", gap: 10 }}>
              <a href="#" style={iconBtn}><img src="/assets/icon-whatsapp.png" alt="WhatsApp" style={{ width: 22, height: 22, borderRadius: 999 }}/></a>
              <a href="#" style={iconBtn}><img src="/assets/icon-telegram.png" alt="Telegram" style={{ width: 22, height: 22, borderRadius: 999 }}/></a>
              <a href="#" style={iconBtn}><img src="/assets/icon-max.png" alt="MAX" style={{ width: 22, height: 22, borderRadius: 6 }}/></a>
            </div>
            <div style={{ padding: "8px 24px 12px" }}>
              <Button size="md" as="a" href="#contact" style={{ width: "100%", justifyContent: "center" }}>
                Обратный звонок
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
