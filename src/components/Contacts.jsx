import React from 'react';
import { Section, Eyebrow, Button, Ic } from './Primitives';
import { useIsMobile } from '../hooks/useIsMobile';

const msgPill = {
  display: "inline-flex", alignItems: "center", gap: 10,
  padding: "9px 16px 9px 9px", borderRadius: 999,
  background: "#26262B", border: "1px solid var(--border-1)",
  color: "#fff", textDecoration: "none",
  fontSize: 13.5, fontWeight: 600,
};

function ContactRow({ icon, label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
      <span style={{
        width: 38, height: 38, borderRadius: 10,
        background: "rgba(207,166,74,.10)", border: "1px solid rgba(207,166,74,.28)",
        color: "var(--gold-400)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", fontWeight: 600, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 15, color: "var(--fg-1)", lineHeight: 1.55 }}>{children}</div>
      </div>
    </div>
  );
}

function MapPin({ x, y, label, primary }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -100%)" }}>
      <div style={{
        position: "relative", padding: "8px 14px 8px 10px",
        background: primary ? "var(--gold-400)" : "#1E1E22",
        color: primary ? "#0A0A0B" : "#fff", borderRadius: 12,
        border: primary ? "none" : "1px solid var(--border-2)",
        fontSize: 12.5, fontWeight: 700,
        display: "inline-flex", alignItems: "center", gap: 6,
        boxShadow: primary ? "0 8px 24px -4px rgba(207,166,74,.5)" : "var(--shadow-2)",
        whiteSpace: "nowrap",
      }}>
        <Ic.pin size={12}/> {label}
      </div>
      <div style={{
        position: "absolute", left: "50%", bottom: -6, width: 0, height: 0,
        borderLeft: "6px solid transparent", borderRight: "6px solid transparent",
        borderTop: `6px solid ${primary ? "var(--gold-400)" : "#1E1E22"}`,
        transform: "translateX(-50%)",
      }}/>
      <div style={{
        position: "absolute", left: "50%", top: "100%", marginTop: 6,
        width: 12, height: 12, borderRadius: 999,
        background: primary ? "var(--gold-400)" : "rgba(255,255,255,.5)",
        boxShadow: primary ? "0 0 0 6px rgba(207,166,74,.2)" : "0 0 0 4px rgba(255,255,255,.1)",
        transform: "translateX(-50%)",
      }}/>
    </div>
  );
}

export function Contacts() {
  const isMobile = useIsMobile();
  return (
    <Section id="contact" pad="default">
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(0, 1.3fr)", gap: 18 }}>
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border-1)",
          borderRadius: 24, padding: "clamp(32px, 4vw, 48px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--gold-gradient)", opacity: 0.5 }}/>
          <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div>
              <div style={{ marginBottom: 14 }}><Eyebrow>Контакты</Eyebrow></div>
              <h2 style={{ fontFamily: "Manrope", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "#fff" }}>Наши контакты</h2>
            </div>
            <Button size="sm" icon={<Ic.phone size={14}/>}>Перезвоните мне</Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <ContactRow icon={<Ic.pin size={18}/>} label="Адреса складов">
              <div>г. Пенза, ул. Складская 9Б</div>
              <div>г. Пенза, Промышленный проезд 7</div>
            </ContactRow>
            <ContactRow icon={<Ic.clock size={18}/>} label="Режим работы">
              Пн–Сб с 10:00 до 20:00 · Вс по записи
            </ContactRow>
            <ContactRow icon={<Ic.phone size={18}/>} label="Контактный телефон">
              <a href="tel:+74954142112" style={{ fontFamily: "Manrope", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>+7 (495) 414‑21‑12</a>
            </ContactRow>
            <ContactRow icon={<Ic.mail size={18}/>} label="Почта">
              <a href="mailto:welcome@tranzitmarket.ru" style={{ color: "var(--gold-400)" }}>welcome@tranzitmarket.ru</a>
            </ContactRow>
          </div>
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--border-1)", display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#" style={msgPill}><img src="/assets/icon-telegram.png" alt="" style={{ width: 22, height: 22, borderRadius: 999 }}/>Telegram</a>
            <a href="#" style={msgPill}><img src="/assets/icon-whatsapp.png" alt="" style={{ width: 22, height: 22, borderRadius: 999 }}/>WhatsApp</a>
            <a href="#" style={msgPill}><img src="/assets/icon-max.png" alt="" style={{ width: 22, height: 22, borderRadius: 6 }}/>MAX</a>
          </div>
        </div>

        {!isMobile && <div style={{
          position: "relative", borderRadius: 24, overflow: "hidden",
          border: "1px solid var(--border-1)",
          background: `radial-gradient(circle at 30% 40%, rgba(207,166,74,.12), transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(207,166,74,.08), transparent 50%), #0F0F11`,
          minHeight: 520,
        }}>
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}>
            <defs>
              <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="rgba(207,166,74,.08)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="600" fill="url(#mapGrid)"/>
            <path d="M0 280 Q200 250 400 270 T800 240" stroke="rgba(207,166,74,.18)" strokeWidth="2" fill="none"/>
            <path d="M0 380 Q300 360 500 400 T800 420" stroke="rgba(207,166,74,.14)" strokeWidth="2" fill="none"/>
            <path d="M250 0 Q260 200 280 400 T300 600" stroke="rgba(207,166,74,.16)" strokeWidth="2" fill="none"/>
            <path d="M580 0 Q570 200 600 400 T620 600" stroke="rgba(207,166,74,.12)" strokeWidth="2" fill="none"/>
            {[[100,150,80,60],[220,330,60,90],[440,180,90,70],[640,320,70,80],[120,440,100,60],[500,420,80,70]].map(([x,y,w,h],i)=>(
              <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(207,166,74,.05)" stroke="rgba(207,166,74,.18)" strokeWidth="1" rx="2"/>
            ))}
          </svg>
          <MapPin x="34%" y="48%" label="Складская 9Б" primary/>
          <MapPin x="68%" y="62%" label="Промышленный пр. 7"/>
          <div style={{
            position: "absolute", top: 20, left: 20,
            padding: "10px 16px", borderRadius: 12,
            background: "rgba(10,10,11,.78)", backdropFilter: "blur(10px)",
            border: "1px solid var(--border-2)",
            fontSize: 13, color: "#fff", display: "flex", alignItems: "center", gap: 10,
          }}>
            <Ic.pin size={14}/> Пенза · 2 склада
          </div>
        </div>}
      </div>
    </Section>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-400)", fontWeight: 600, marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{ fontSize: 13.5, color: "var(--fg-2)", textDecoration: "none", transition: "color 200ms", whiteSpace: "nowrap" }}
              onMouseEnter={e=>e.currentTarget.style.color="var(--gold-400)"}
              onMouseLeave={e=>e.currentTarget.style.color="var(--fg-2)"}
            >{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      borderTop: "1px solid var(--border-1)",
      background: "linear-gradient(180deg, #0A0A0B, #050506)",
      padding: isMobile ? "40px 20px 24px" : "56px 28px 28px", marginTop: 40,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "minmax(220px, 1fr) repeat(4, minmax(0, auto))", gap: isMobile ? 32 : 56, marginBottom: 40 }}>
          <div>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "Manrope", fontWeight: 800, fontSize: 18, letterSpacing: "-0.025em", color: "#fff" }}>
              <span style={{ width: 34, height: 34, borderRadius: 10, background: "var(--gold-gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/logo-mark-gold.png" alt="" style={{ width: 22, height: 22, objectFit: "contain", filter: "brightness(0)" }}/>
              </span>
              <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "0.01em" }}>ТРАНЗИТМАРКЕТ</span>
            </a>
            <p style={{ fontSize: 13.5, color: "var(--fg-3)", marginTop: 16, lineHeight: 1.6, maxWidth: 280 }}>
              Полный цикл фулфилмента для маркетплейсов и интернет-магазинов. Пенза, с 2015 года.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--success)", boxShadow: "0 0 8px rgba(59,187,110,.7)" }}/>
              <span style={{ fontSize: 12.5, color: "var(--fg-2)" }}>Сейчас работаем · принимаем заявки</span>
            </div>
          </div>
          <FooterCol title="Услуги" links={["Фулфилмент", "Хранение", "Маркировка", "Упаковка", "Отгрузка на МП"]}/>
          <FooterCol title="Компания" links={["О нас", "Кейсы", "Блог", "Карьера", "Реквизиты"]}/>
          <FooterCol title="Помощь" links={["Калькулятор", "Договор", "FAQ", "Тарифы", "Поддержка"]}/>
          <FooterCol title="Контакты" links={["+7 (495) 414‑21‑12", "welcome@tranzitmarket.ru", "Telegram", "WhatsApp", "MAX"]}/>
        </div>
        <div style={{ paddingTop: 24, borderTop: "1px solid var(--border-1)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ fontSize: 12, color: "var(--fg-3)" }}>© 2026 ТРАНЗИТМАРКЕТ. Все права защищены.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ fontSize: 12, color: "var(--fg-3)" }}>Политика конфиденциальности</a>
            <a href="#" style={{ fontSize: 12, color: "var(--fg-3)" }}>Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
