import React from 'react';
import { Section, Eyebrow, Ic, Button } from './Primitives';

const navBtn = {
  width: 44, height: 44, borderRadius: 999,
  background: "transparent", border: "1px solid var(--border-2)",
  color: "#fff", cursor: "pointer",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  transition: "all 200ms",
};

export function Benefits() {
  const items = [
    { icon: <Ic.bolt size={28}/>, title: "Быстрая отгрузка", body: "Отгружаем ваш товар за 1–2 дня после поступления на склад. Утром приняли — вечером уже на полке маркетплейса.", featured: true },
    { icon: <Ic.doc size={28}/>, title: "Работа по договору", body: "Всё официально. Договор, акты, закрывающие документы. Вы спокойны за сохранность вашего товара." },
    { icon: <Ic.pin size={28}/>, title: "Удобная локация в Пензе", body: "Склад в центре Пензы — рядом транспортные узлы. Быстрая отгрузка на склады Wildberries и Ozon." },
    { icon: <Ic.scan size={28}/>, title: "Контроль на каждом этапе", body: "Полная прозрачность. Видеонаблюдение 24/7, статусы в личном кабинете, фото‑отчёты по запросу." },
  ];
  return (
    <Section pad="default">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>Преимущества</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(34px, 3.8vw, 56px)",
            fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "#fff",
          }}>
            Преимущества работы<br/>
            <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>с&nbsp;нами</span>
          </h2>
        </div>
        <p style={{ fontSize: 16, color: "var(--fg-2)", maxWidth: 380, lineHeight: 1.6 }}>
          Четыре причины, по которым селлеры остаются с нами на годы — и приводят коллег.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {items.map((it, i) => <BenefitCard key={i} {...it} index={i+1}/>)}
      </div>
    </Section>
  );
}

function BenefitCard({ icon, title, body, featured, index }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        position: "relative", padding: "32px 30px 30px", borderRadius: 20,
        background: featured ? "linear-gradient(180deg, rgba(207,166,74,.08), rgba(30,30,34,.9))" : "var(--bg-card)",
        border: `1px solid ${hover ? "var(--border-2)" : "var(--border-1)"}`,
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
        boxShadow: hover ? "var(--shadow-2)" : "none",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        overflow: "hidden",
      }}>
      {featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--gold-gradient)" }}/>}
      <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: featured ? "var(--gold-gradient)" : "rgba(207,166,74,.10)",
          border: featured ? "none" : "1px solid rgba(207,166,74,.28)",
          color: featured ? "#0A0A0B" : "var(--gold-400)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>{icon}</div>
        <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.1em" }}>0{index}</span>
      </div>
      <h3 style={{ fontFamily: "Manrope", fontSize: 22, fontWeight: 700, letterSpacing: "-0.015em", margin: 0, color: "#fff" }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-2)", marginTop: 12, marginBottom: 0 }}>{body}</p>
    </div>
  );
}

export function StatsBand() {
  const stats = [
    { n: "1500", unit: "м²", label: "Складская площадь" },
    { n: "24/7", label: "Круглосуточная охрана\nвашего товара" },
    { n: ">15 000", label: "товаров наша команда\nобрабатывает в сутки" },
    { n: ">1 000", label: "довольных клиентов\nза 10 лет работы" },
  ];
  return (
    <Section pad="tight">
      <div style={{
        position: "relative", borderRadius: 28, overflow: "hidden",
        padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
        background: `
          radial-gradient(1000px 500px at 50% 100%, rgba(207,166,74,.12), transparent 60%),
          linear-gradient(135deg, #1A1A1F 0%, #0A0A0B 100%)`,
        border: "1px solid var(--border-1)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
          background: "linear-gradient(90deg, transparent, var(--gold-400), transparent)",
        }}/>
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 16 }}><Eyebrow>В цифрах</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
            margin: 0, color: "#fff", maxWidth: 720,
          }}>ТРАНЗИТМАРКЕТ в&nbsp;цифрах</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "8px 28px", borderLeft: i > 0 ? "1px solid var(--border-1)" : "none" }}>
              <div style={{
                fontFamily: "Manrope", fontWeight: 800,
                fontSize: "clamp(40px, 4.4vw, 64px)",
                letterSpacing: "-0.04em", lineHeight: 1,
                backgroundImage: "var(--gold-gradient)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "flex", alignItems: "baseline", gap: 4,
              }}>
                {s.n}{s.unit && <span style={{ fontSize: "0.5em", fontWeight: 700 }}>{s.unit}</span>}
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-2)", marginTop: 14, lineHeight: 1.5, whiteSpace: "pre-line" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  const items = [
    { n: "01", title: "Забор груза", body: "Организуем забор груза из любой точки Пензы, области, регионов и из‑за рубежа. Бесплатный вывоз по Москве в день обращения." },
    { n: "02", title: "Транспортная логистика", body: "Сотрудничаем с проверенными транспортными компаниями, рынками и карго — это позволяет эффективно доставлять груз из любой точки, включая Китай." },
    { n: "03", title: "Приёмка товара", body: "Проводим тщательную приёмку: пересчитываем каждую единицу, проверяем на брак и соответствие стандартам маркетплейсов." },
    { n: "04", title: "Маркировка и упаковка", body: "Особое внимание уделяем печати этикеток, маркировке и упаковке — соблюдаем все требования. При необходимости — вкладыши в каждой позиции." },
    { n: "05", title: "Качественная упаковка", body: "Аккуратная упаковка в плёнку с клеевым клапаном, Zip Lock и прочные картонные коробки. Товар приедет на склад без повреждений." },
    { n: "06", title: "Отгрузка на маркетплейс", body: "Развозим короба и палеты по складам Wildberries, Ozon, Яндекс.Маркет ежедневно. Тайм‑слоты, реквизиты, ШК — всё под контролем." },
  ];
  const scrollerRef = React.useRef(null);
  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <Section id="services" pad="default">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>Наши услуги</Eyebrow></div>
          <h2 style={{
            fontFamily: "Manrope", fontSize: "clamp(34px, 3.8vw, 56px)",
            fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "#fff",
          }}>
            Шесть шагов от вашего склада<br/>
            <span style={{ backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>до полки маркетплейса</span>
          </h2>
          <p style={{ fontSize: 16.5, color: "var(--fg-2)", marginTop: 22, maxWidth: 580, lineHeight: 1.6 }}>
            Современное оборудование и собственный софт позволяют обрабатывать заказы от 1 до 3 дней.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={()=>scroll(-1)} style={navBtn}><Ic.arrowL/></button>
          <button onClick={()=>scroll(1)} style={navBtn}><Ic.arrow/></button>
        </div>
      </div>
      <div ref={scrollerRef} style={{
        display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(300px, 360px)",
        gap: 18, overflowX: "auto", scrollSnapType: "x mandatory",
        paddingBottom: 16, marginInline: -28, paddingInline: 28, scrollbarWidth: "none",
      }}>
        {items.map((it, i) => <ServiceCard key={i} {...it}/>)}
      </div>
    </Section>
  );
}

function ServiceCard({ n, title, body }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        scrollSnapAlign: "start", position: "relative", padding: "30px 28px", borderRadius: 20,
        background: hover ? "linear-gradient(180deg, rgba(207,166,74,.08), rgba(30,30,34,.95))" : "var(--bg-card)",
        border: `1px solid ${hover ? "rgba(207,166,74,.35)" : "var(--border-1)"}`,
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)", minHeight: 240,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
      <div>
        <h3 style={{ fontFamily: "Manrope", fontSize: 22, fontWeight: 700, letterSpacing: "-0.015em", margin: 0, color: "#fff" }}>{title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-2)", marginTop: 14 }}>{body}</p>
      </div>
      <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <span style={{
          fontFamily: "Manrope", fontWeight: 800, fontSize: 56, letterSpacing: "-0.04em", lineHeight: 1,
          backgroundImage: "var(--gold-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>{n}</span>
        <span style={{
          width: 36, height: 36, borderRadius: 999, border: "1px solid var(--border-2)",
          color: hover ? "var(--gold-400)" : "var(--fg-3)",
          display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all 220ms",
        }}>
          <Ic.arrow size={14}/>
        </span>
      </div>
    </article>
  );
}
