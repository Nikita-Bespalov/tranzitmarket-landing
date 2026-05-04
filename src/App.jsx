import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './hooks/useIsMobile';
import { Nav } from './components/Nav';
import { OfferBanner, Hero, MarketplaceStrip, PromiseBand } from './components/Hero';
import { Benefits, StatsBand, Services, LogisticsBanner } from './components/Benefits';
import { Warehouses, AboutTeam, WorksCarousel } from './components/Warehouses';
import { Clients } from './components/Clients';
import { Contacts, Footer } from './components/Contacts';
import './tokens.css';

const DEFAULTS = {
  accentMode: "warm-gold",
  showStatsBand: true,
  showWorks: true,
};

function App() {
  const [tweaks] = useState(DEFAULTS);
  const heroWrapRef = useRef(null);
  const heroVideoRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = heroVideoRef.current;
    const wrap  = heroWrapRef.current;
    if (!video || !wrap) return;

    if (isMobile) {
      // Mobile: just autoplay loop
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    // Desktop: scroll scrub
    let onScroll = null;
    const init = () => {
      const dur = video.duration;
      onScroll = () => {
        const top = wrap.getBoundingClientRect().top + window.scrollY;
        const progress = Math.max(0, Math.min(1, (window.scrollY - top) / wrap.offsetHeight));
        video.currentTime = progress * dur;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    };
    if (video.readyState >= 1) init();
    else video.addEventListener('loadedmetadata', init, { once: true });
    return () => {
      video.removeEventListener('loadedmetadata', init);
      if (onScroll) window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile]);

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
    <div>
      <Nav />
      {/* ── Video-backed block: OfferBanner + Hero ── */}
      <div ref={heroWrapRef} style={{ position: "relative", overflow: "hidden" }}>
        <video ref={heroVideoRef} muted playsInline preload="auto"
          src="/assets/warehouse/hero-bg.mp4"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(10,10,11,.82) 0%, rgba(10,10,11,.60) 55%, rgba(10,10,11,.74) 100%)",
        }}/>
        <div style={{ position: "relative", zIndex: 2 }}>
          <OfferBanner />
          <Hero />
        </div>
      </div>
      <MarketplaceStrip />
      <PromiseBand />
      <Benefits />
      {tweaks.showStatsBand && <StatsBand />}
      <Services />
      <LogisticsBanner />
      <Warehouses />
      <AboutTeam />
      <Clients />
      {tweaks.showWorks && <WorksCarousel />}
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

export default App;
