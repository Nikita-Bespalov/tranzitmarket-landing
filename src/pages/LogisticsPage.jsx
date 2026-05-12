import React from 'react';
import { Nav } from '../components/Nav';
import { Contacts, Footer } from '../components/Contacts';
import { Section, Eyebrow, Button, Ic } from '../components/Primitives';
import { useIsMobile } from '../hooks/useIsMobile';

const features = [
  {
    icon: <Ic.truck size={28}/>,
    title: "Бесплатный вывоз",
    body: "Организуем забор груза по Пензе и области бесплатно. Собственный транспорт — никаких посредников.",
  },
  {
    icon: <Ic.refresh size={28}/>,
    title: "Автопарк по всему СНГ",
    body: "Собственный автопарк позволяет эффективно доставлять груз из любой точки СНГ напрямую на склад или конечному получателю.",
  },
  {
    icon: <Ic.factory size={28}/>,
    title: "Карго из Китая",
    body: "Работаем с зарубежными поставщиками напрямую. Организуем карго-доставку из Китая — авиа, авто, ж/д.",
  },
  {
    icon: <Ic.pkg size={28}/>,
    title: "Сборные и полные грузы",
    body: "Принимаем FTL и LTL отправки. Сборные грузы — экономный вариант для небольших партий товара.",
  },
  {
    icon: <Ic.shield size={28}/>,
    title: "Страхование груза",
    body: "Оформляем страховку на каждую отправку. Ответственность за сохранность груза — наша, а не ваша.",
  },
  {
    icon: <Ic.doc size={28}/>,
    title: "Полный документооборот",
    body: "Накладные, акты, счета, договор. Работаем официально — НДС, ЭДО, закрывающие документы.",
  },
];

const steps = [
  { n: "01", title: "Заявка", body: "Оставляете запрос — звонок, Telegram или форма на сайте. Уточняем маршрут, вес, объём." },
  { n: "02", title: "Расчёт", body: "Готовим коммерческое предложение в течение 2 часов." },
  { n: "03", title: "Договор", body: "Подписываем договор — за 1 рабочий день. ЭДО или на бумаге." },
  { n: "04", title: "Забор груза", body: "Выезжаем на ваш адрес в удобное время. Пенза и область — бесплатно." },
  { n: "05", title: "Доставка", body: "Везём напрямую без перегрузок. Онлайн-отслеживание по запросу." },
  { n: "06", title: "Закрытие", body: "Передаём закрывающие документы. Оплата по факту или по предоплате." },
];

export function LogisticsPage() {
  const isMobile = useIsMobile();

  return (
    <div>
      <Nav />

      {/* ── Hero ── */}
      <section style={{
        padding: isMobile ? "48px 16px 56px" : "clamp(48px,6vw,80px) 28px clamp(64px,8vw,100px)",
        background: `
          radial-gradient(900px 500px at 80% 20%, rgba(207,166,74,.13), transparent 55%),
          radial-gradient(600px 400px at 10% 80%, rgba(207,166,74,.07), transparent 55%),
          #0A0A0B`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 20 }}><Eyebrow>Логистика</Eyebrow></div>
            <h1 style={{
              fontFamily: "Manrope", fontSize: "clamp(36px,4.6vw,68px)",
              fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02,
              margin: 0, color: "#fff",
            }}>
              Полный цикл{" "}
              <span style={{
                backgroundImage: "var(--gold-gradient)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>логистики</span>
              <br/>под ключ
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg-2)", marginTop: 28, maxWidth: 560 }}>
              Забор, перевозка и доставка грузов — независимо от фулфилмента.
              Собственный автопарк, карго из Китая, доставка по всему СНГ.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
              <Button size="lg" icon={<Ic.arrow/>} as="a" href="#contact">Получить расчёт</Button>
              <Button size="lg" variant="secondary" as="a" href="tel:+79004669477">+7 (900) 466‑94‑77</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <Section pad="default">
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 16 }}><Eyebrow>Что мы делаем</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(30px,3.4vw,48px)",
            fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.08,
            margin: 0, color: "#fff",
          }}>Наши логистические услуги</h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 14,
        }}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f}/>
          ))}
        </div>
      </Section>

      {/* ── How it works ── */}
      <Section pad="default">
        <div style={{
          position: "relative", borderRadius: 28, overflow: "hidden",
          background: `
            radial-gradient(800px 400px at 100% 0%, rgba(207,166,74,.12), transparent 55%),
            linear-gradient(135deg, #15151A 0%, #0E0E10 100%)`,
          border: "1px solid var(--border-1)",
          padding: "clamp(40px,5vw,64px)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--gold-400) 50%,transparent)", opacity: 0.5 }}/>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}><Eyebrow>Как мы работаем</Eyebrow></div>
            <h2 style={{
              fontFamily: "Manrope", fontSize: "clamp(26px,2.8vw,40px)",
              fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1,
              margin: 0, color: "#fff",
            }}>6 шагов от заявки до доставки</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 18,
          }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                padding: "24px", borderRadius: 16,
                background: "rgba(255,255,255,.03)",
                border: "1px solid var(--border-1)",
              }}>
                <div style={{
                  fontFamily: "JetBrains Mono", fontSize: 11,
                  color: "var(--gold-400)", fontWeight: 600,
                  letterSpacing: "0.12em", marginBottom: 14,
                }}>{s.n}</div>
                <div style={{ fontFamily: "Manrope", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.6 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Contacts/>
      <Footer/>
    </div>
  );
}

function FeatureCard({ icon, title, body }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "28px", borderRadius: 20,
        background: hover ? "linear-gradient(180deg,rgba(207,166,74,.08),rgba(30,30,34,.95))" : "var(--bg-card)",
        border: `1px solid ${hover ? "rgba(207,166,74,.32)" : "var(--border-1)"}`,
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 52, height: 52, borderRadius: 14,
        background: hover ? "var(--gold-gradient)" : "rgba(207,166,74,.10)",
        border: hover ? "none" : "1px solid rgba(207,166,74,.28)",
        color: hover ? "#0A0A0B" : "var(--gold-400)",
        marginBottom: 20, transition: "all 220ms",
      }}>{icon}</span>
      <h3 style={{ fontFamily: "Manrope", fontSize: 19, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 10px" }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: "var(--fg-2)", lineHeight: 1.6, margin: 0 }}>{body}</p>
    </div>
  );
}
