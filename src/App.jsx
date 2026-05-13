import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useIsMobile } from './hooks/useIsMobile';
import { Nav } from './components/Nav';
import { OfferBanner, Hero, MarketplaceStrip, PromiseBand } from './components/Hero';
import { Benefits, StatsBand, Services } from './components/Benefits';
import { Warehouses, AboutTeam } from './components/Warehouses';
import { Clients } from './components/Clients';
import { Contacts, Footer } from './components/Contacts';
import { Ic, Button, Section } from './components/Primitives';
import './tokens.css';

// Lazy-load logistics page — не грузим на главной
const LogisticsPage = lazy(() =>
  import('./pages/LogisticsPage').then(m => ({ default: m.LogisticsPage }))
);

const DEFAULTS = {
  accentMode: "warm-gold",
  showStatsBand: true,
};

// ── Scroll to top on route change ──────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Logistics teaser ───────────────────────────────────────────────────────
function LogisticsTeaser() {
  return (
    <Section pad="default">
      <div style={{
        position: "relative", borderRadius: 24, overflow: "hidden",
        background: `
          radial-gradient(700px 300px at 100% 0%, rgba(207,166,74,.14), transparent 55%),
          linear-gradient(135deg,#15151A 0%,#0E0E10 100%)`,
        border: "1px solid var(--border-1)",
        padding: "clamp(32px,4vw,48px)",
        display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--gold-400) 50%,transparent)", opacity: 0.5 }}/>
        <span style={{
          flexShrink: 0, width: 56, height: 56, borderRadius: 14,
          background: "var(--gold-gradient)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          color: "#0A0A0B", boxShadow: "0 8px 24px -6px rgba(207,166,74,.5)",
        }}>
          <Ic.truck size={26}/>
        </span>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontFamily: "Manrope", fontSize: "clamp(18px,2vw,26px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Также занимаемся{" "}
            <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              логистикой
            </span>
          </div>
          <p style={{ fontSize: 14.5, color: "var(--fg-2)", marginTop: 8, lineHeight: 1.55 }}>
            Забор, перевозка, карго из Китая, доставка по СНГ — независимо от фулфилмента.
          </p>
        </div>
        <Button size="md" icon={<Ic.arrow/>} as="a" href="/logistics">Подробнее</Button>
      </div>
    </Section>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
function MainPage({ tweaks }) {
  const heroWrapRef = useRef(null);
  const heroVideoRef = useRef(null);
  const rafRef = useRef(null);
  const isMobile = useIsMobile();

  // Desktop only: scroll-scrub with rAF throttle
  useEffect(() => {
    if (isMobile) return;
    const video = heroVideoRef.current;
    const wrap  = heroWrapRef.current;
    if (!video || !wrap) return;

    let onScroll = null;

    const init = () => {
      const dur = video.duration;
      onScroll = () => {
        if (rafRef.current) return;               // skip if frame already queued
        rafRef.current = requestAnimationFrame(() => {
          const top      = wrap.getBoundingClientRect().top + window.scrollY;
          const progress = Math.max(0, Math.min(1, (window.scrollY - top) / wrap.offsetHeight));
          video.currentTime = progress * dur;
          rafRef.current = null;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    };

    if (video.readyState >= 1) init();
    else video.addEventListener('loadedmetadata', init, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', init);
      if (onScroll) window.removeEventListener('scroll', onScroll);
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    };
  }, [isMobile]);

  const heroOverlay = (
    <>
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(10,10,11,.82) 0%, rgba(10,10,11,.60) 55%, rgba(10,10,11,.74) 100%)",
      }}/>
      <div style={{ position: "relative", zIndex: 2 }}>
        <OfferBanner />
        <Hero />
      </div>
    </>
  );

  return (
    <div>
      <Nav />

      {/* ── Hero block: static image on mobile, video scrub on desktop ── */}
      <div ref={heroWrapRef} style={{ position: "relative", overflow: "hidden" }}>
        {isMobile ? (
          // Mobile: lightweight static background
          <img
            src="/assets/warehouse/hero-mobile.jpg"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
          />
        ) : (
          // Desktop: scroll-scrubbed video
          <video
            ref={heroVideoRef}
            muted playsInline preload="auto"
            src="/assets/warehouse/hero-bg.mp4"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
        )}
        {heroOverlay}
      </div>

      <MarketplaceStrip />
      <PromiseBand />
      <Benefits />
      {tweaks.showStatsBand && <StatsBand />}
      <Services />
      <LogisticsTeaser />
      <Warehouses />
      <AboutTeam />
      <Clients />
      <Contacts />
      <Footer />

      <div className="fab-stack">
        <a href="#" className="fab" title="MAX">
          <img src="/assets/icon-max.png" alt="MAX" className="sq" />
        </a>
        <a href="#" className="fab" title="Telegram">
          <img src="/assets/icon-telegram.png" alt="Telegram" />
        </a>
      </div>
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────
function App() {
  const [tweaks] = useState(DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    const palettes = {
      "warm-gold": { g200: "#E8CF82", g400: "#CFA64A", g500: "#C1963C", g600: "#A87E2C" },
      "champagne": { g200: "#F0DEAA", g400: "#D9BD6E", g500: "#C9A953", g600: "#9F8235" },
      "rose-gold": { g200: "#F0C9A8", g400: "#D9986A", g500: "#C28456", g600: "#9C6638" },
      "platinum":  { g200: "#E2E2E6", g400: "#B8B8C0", g500: "#9C9CA6", g600: "#74747F" },
    };
    const p = palettes[tweaks.accentMode] || palettes["warm-gold"];
    root.style.setProperty("--gold-200", p.g200);
    root.style.setProperty("--gold-400", p.g400);
    root.style.setProperty("--gold-500", p.g500);
    root.style.setProperty("--gold-600", p.g600);
    root.style.setProperty("--gold-gradient",
      `linear-gradient(135deg, ${p.g200} 0%, ${p.g400} 40%, ${p.g600} 100%)`);
  }, [tweaks.accentMode]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage tweaks={tweaks}/>}/>
        <Route path="/logistics" element={
          <Suspense fallback={<div style={{ background: "#0A0A0B", minHeight: "100vh" }}/>}>
            <LogisticsPage/>
          </Suspense>
        }/>
      </Routes>
    </>
  );
}

export default App;
