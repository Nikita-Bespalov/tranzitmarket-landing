import React from 'react';
import { Section, Eyebrow, Photo, Ic, Button } from './Primitives';
import { useIsMobile } from '../hooks/useIsMobile';

const cBtn = {
  width: 48, height: 48, borderRadius: 999,
  background: "transparent", border: "1px solid var(--border-2)",
  color: "#fff", cursor: "pointer",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
};

export function Warehouses() {
  const isMobile = useIsMobile();
  const items = [
    { label: "Приёмка", tone: "warehouse", aspect: "3/4", chip: "Приёмка", src: "/assets/warehouse/warehouse-receiving.jpeg" },
    { label: "Маркировка", tone: "boxes", aspect: "3/4", chip: "Маркировка", src: "/assets/warehouse/packages-labeled.webp" },
    { label: "Хранение", tone: "rack", aspect: "3/4", chip: "Хранение", src: "/assets/warehouse/warehouse-storage.jpeg" },
    { label: "Сортировка", tone: "warehouse", aspect: "3/4", chip: "Сортировка", src: "/assets/warehouse/truck-sorted.webp" },
    { label: "Палеты", tone: "rack", aspect: "16/10", chip: "Палеты", src: "/assets/warehouse/pallets-wrapped.jpeg" },
    { label: "Отгрузка", tone: "boxes", aspect: "16/10", chip: "Отгрузка", src: "/assets/warehouse/ozon-delivery.jpeg" },
    { label: "Упаковка", tone: "warehouse", aspect: "16/10", chip: "Упаковка", src: "/assets/warehouse/truck-furniture.webp" },
  ];
  return (
    <Section pad="default">
      <div style={{ marginBottom: 48, maxWidth: 760 }}>
        <div style={{ marginBottom: 18 }}><Eyebrow>Наши склады</Eyebrow></div>
        <h2 style={{
          fontFamily: "Manrope", fontSize: "clamp(34px, 3.8vw, 56px)",
          fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "#fff",
        }}>
          Фото <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>наших складов</span>
        </h2>
        <p style={{ fontSize: 16.5, color: "var(--fg-2)", marginTop: 18, maxWidth: 600, lineHeight: 1.6 }}>
          Расположение наших складов позволяет моментально отгружать товар на Wildberries и Ozon. Открыты для визита по записи.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 14, marginBottom: 14 }}>
        {items.slice(0,4).map((it, i) => <Photo key={i} {...it} aspect={isMobile ? "4/3" : it.aspect}/>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr", gap: 14 }}>
        {items.slice(4).map((it, i) => <Photo key={i} {...it} aspect={isMobile ? "4/3" : it.aspect}/>)}
      </div>
    </Section>
  );
}

export function AboutTeam() {
  const points = [
    "Удобное местоположение складов в Пензе — оперативно отгружаем товары на маркетплейсы по всей России.",
    "Круглосуточное видеонаблюдение и автоматизированная охранная система гарантируют сохранность товара.",
    "Сухие и тёплые условия хранения, соблюдаем все санитарные нормы и правила.",
    "Гибкая система скидок при поставках от 1 000 единиц и индивидуальные условия хранения.",
  ];
  return (
    <Section id="about" pad="default">
      <div style={{
        position: "relative", borderRadius: 28, overflow: "hidden",
        background: "var(--bg-card)", border: "1px solid var(--border-1)",
        padding: "clamp(40px, 5vw, 64px)",
      }}>
        <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 240, height: 240, opacity: 0.4, pointerEvents: "none" }}>
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="cubeG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#CFA64A"/>
                <stop offset="100%" stopColor="#A87E2C"/>
              </linearGradient>
            </defs>
            {[[120,40,40],[160,80,30],[100,100,46],[150,140,34]].map(([x,y,s],i)=>(
              <g key={i} opacity={0.3 + i*0.1}>
                <polygon points={`${x},${y} ${x+s},${y-s/2} ${x+s},${y+s/2} ${x},${y+s}`} fill="url(#cubeG)" stroke="rgba(207,166,74,.4)" strokeWidth="1"/>
                <polygon points={`${x},${y} ${x},${y+s} ${x-s},${y+s/2} ${x-s},${y-s/2}`} fill="rgba(168,126,44,.5)" stroke="rgba(207,166,74,.4)" strokeWidth="1"/>
                <polygon points={`${x},${y} ${x-s},${y-s/2} ${x},${y-s} ${x+s},${y-s/2}`} fill="rgba(232,207,130,.6)" stroke="rgba(207,166,74,.4)" strokeWidth="1"/>
              </g>
            ))}
          </svg>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: 56, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ marginBottom: 18 }}><Eyebrow>О команде</Eyebrow></div>
            <h2 style={{
              fontFamily: "Manrope", fontSize: "clamp(30px, 3.4vw, 48px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0, color: "#fff",
            }}>
              Выгодное и&nbsp;надёжное<br/>сотрудничество <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.015em" }}>с&nbsp;ТРАНЗИТМАРКЕТ</span>
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--fg-2)", marginTop: 24, maxWidth: 580 }}>
              Наша команда обладает <strong style={{ color: "#fff", fontWeight: 600 }}>более чем десятилетним опытом</strong> в&nbsp;управлении складскими процессами.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {points.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "start" }}>
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: 999,
                    background: "rgba(207,166,74,.12)", border: "1px solid rgba(207,166,74,.4)",
                    color: "var(--gold-400)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                  }}>
                    <Ic.check size={12}/>
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-2)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Photo aspect="4/5" tone="team" label="Команда ТРАНЗИТМАРКЕТ">
              <svg viewBox="0 0 400 500" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}>
                {[[80,300,40],[140,290,42],[200,285,44],[260,290,42],[320,300,40]].map(([x,y,r], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y-r-10} r={r*0.6} fill="rgba(207,166,74,.45)" stroke="rgba(207,166,74,.5)" strokeWidth="1"/>
                    <path d={`M${x-r} ${y+r*1.5} Q${x} ${y-r*0.2} ${x+r} ${y+r*1.5} L${x+r} ${y+r*3.5} L${x-r} ${y+r*3.5} Z`}
                      fill="rgba(20,20,24,.95)" stroke="rgba(207,166,74,.4)" strokeWidth="1"/>
                  </g>
                ))}
              </svg>
            </Photo>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function WorksCarousel() {
  const slides = [
    { title: "Кейс · Косметика", subtitle: "Бренд X · Wildberries", body: "С 200 до 4 200 заказов в месяц за 6 месяцев. 0 ошибок маркировки." },
    { title: "Кейс · Одежда", subtitle: "Бренд Y · Ozon + WB", body: "Перевели с самостоятельной отгрузки. Сократили возвраты на 27% за счёт упаковки." },
    { title: "Кейс · Электроника", subtitle: "Бренд Z · Яндекс.Маркет", body: "Запустили хрупкую категорию: индивидуальная упаковка, фото‑отчёт по каждой единице." },
    { title: "Кейс · Товары для дома", subtitle: "Бренд W · 4 маркетплейса", body: "Единый поток фулфилмента на 4 платформы. Среднее время от поступления до полки — 22 часа." },
  ];
  const [i, setI] = React.useState(0);
  const next = () => setI(v => (v+1) % slides.length);
  const prev = () => setI(v => (v-1+slides.length) % slides.length);
  const cur = slides[i];
  return (
    <Section pad="default">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 600 }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>Наши работы</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(34px, 3.8vw, 56px)",
            fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "#fff",
          }}>
            Кейсы <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>наших селлеров</span>
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 14, color: "var(--fg-3)" }}>
            <span style={{ color: "var(--gold-400)" }}>0{i+1}</span> / 0{slides.length}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} style={cBtn}><Ic.arrowL/></button>
            <button onClick={next} style={cBtn}><Ic.arrow/></button>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative", borderRadius: 24, overflow: "hidden",
        border: "1px solid var(--border-1)", background: "#0F0F11",
        aspectRatio: "16/8", minHeight: 380,
      }}>
        <Photo aspect="16/8" tone="warehouse" label={cur.title}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,11,.92) 0%, rgba(10,10,11,.5) 50%, rgba(10,10,11,.85) 100%)" }}/>
        </Photo>
        <div style={{
          position: "absolute", left: 0, bottom: 0, right: 0,
          padding: "clamp(28px, 4vw, 56px)",
          display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32,
        }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ fontSize: 11.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-400)", fontWeight: 600 }}>{cur.subtitle}</div>
            <h3 style={{ fontFamily: "Manrope", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "16px 0 0", color: "#fff" }}>{cur.title}</h3>
            <p style={{ fontSize: 16.5, color: "var(--fg-2)", marginTop: 16, lineHeight: 1.55 }}>{cur.body}</p>
          </div>
          <Button variant="secondary" icon={<Ic.arrow/>}>Смотреть кейс</Button>
        </div>
        <div style={{ position: "absolute", top: 24, right: 28, display: "flex", gap: 6 }}>
          {slides.map((_, idx) => (
            <button key={idx} onClick={()=>setI(idx)} style={{
              width: idx === i ? 24 : 8, height: 8, borderRadius: 999,
              background: idx === i ? "var(--gold-400)" : "rgba(255,255,255,.2)",
              border: 0, padding: 0, cursor: "pointer", transition: "all 220ms",
            }}/>
          ))}
        </div>
      </div>
    </Section>
  );
}
