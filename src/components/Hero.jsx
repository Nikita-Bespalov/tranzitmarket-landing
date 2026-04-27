import React from 'react';
import { Button, Eyebrow, Breadcrumb, Photo, Section, Ic } from './Primitives';

export function OfferBanner() {
  return (
    <section style={{ padding: "0 16px", marginTop: 8 }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        position: "relative", borderRadius: 20, overflow: "hidden",
        background: `
          radial-gradient(700px 360px at 85% 50%, rgba(207,166,74,.22), transparent 65%),
          linear-gradient(135deg, #15151A 0%, #0A0A0B 100%)`,
        border: "1px solid var(--border-gold)",
        padding: "20px 28px",
        display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
        boxShadow: "0 18px 50px -16px rgba(207,166,74,.25)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, var(--gold-400), transparent)",
        }}/>
        <div style={{
          flexShrink: 0,
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "8px 14px", borderRadius: 999,
          background: "var(--gold-gradient)",
          color: "#0A0A0B", fontWeight: 700, fontSize: 12,
          letterSpacing: "0.12em", textTransform: "uppercase",
          boxShadow: "0 6px 18px -4px rgba(207,166,74,.5)",
        }}>
          <Ic.bolt size={14}/> Спецпредложение
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{
            fontFamily: "Manrope", fontSize: "clamp(17px, 1.6vw, 22px)",
            fontWeight: 700, color: "#fff", letterSpacing: "-0.015em", lineHeight: 1.3,
          }}>
            Первый месяц хранения <span style={{
              backgroundImage: "var(--gold-gradient)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>бесплатно</span> — для новых клиентов из Пензы и&nbsp;области.
          </div>
          <div style={{ fontSize: 13.5, color: "var(--fg-2)", marginTop: 6, lineHeight: 1.5 }}>
            Бесплатный вывоз товара по Пензе · договор за 1 день · скидка 15% при объёме от 1 000 единиц.
          </div>
        </div>
        <div style={{
          flexShrink: 0,
          display: "flex", alignItems: "center", gap: 12,
          padding: "10px 16px", borderRadius: 12,
          background: "rgba(10,10,11,.5)",
          border: "1px solid var(--border-1)",
        }}>
          <Ic.clock size={16}/>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "Manrope", fontWeight: 800, fontSize: 16, color: "#fff", letterSpacing: "-0.01em" }}>до 31 мая</div>
            <div style={{ fontSize: 11, color: "var(--fg-3)" }}>осталось 34 дня</div>
          </div>
        </div>
        <Button size="md" icon={<Ic.arrow/>} as="a" href="#contact">Забронировать тариф</Button>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      style={{
        padding: "clamp(40px, 5vw, 72px) 28px clamp(72px, 9vw, 128px) 28px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div aria-hidden style={{
          position: "absolute", inset: "-100px -100px auto -100px", height: 600, pointerEvents: "none",
          background: "radial-gradient(800px 480px at 30% 30%, rgba(207,166,74,.14), transparent 60%)",
        }}/>
        <div style={{ marginBottom: 40, position: "relative" }}>
          <Breadcrumb items={[{ label: "Главная", href: "#" }, { label: "О компании" }]}/>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
          gap: 64, alignItems: "center", position: "relative",
        }}>
          <div>
            <div style={{ marginBottom: 20 }}><Eyebrow>Полный цикл фулфилмента</Eyebrow></div>
            <h1 style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(36px, 4.6vw, 72px)",
              fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02,
              margin: 0, color: "#fff",
            }}>
              Фулфилмент в Пензе и области для{" "}
              <span style={{
                backgroundImage: "var(--gold-gradient)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}>маркетплейсов</span>{" "}
              и интернет-магазинов от хх руб
            </h1>
            <p style={{ fontSize: 18.5, lineHeight: 1.55, color: "var(--fg-2)", marginTop: 28, maxWidth: 540 }}>
              Упакуем и доставим Ваш товар на склад маркетплейса за{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>48 часов под ключ</strong>.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", marginTop: 18, maxWidth: 540 }}>
              Берём на себя все этапы — от приёмки и маркировки до упаковки и отгрузки на{" "}
              Wildberries, Ozon, Яндекс.Маркет и другие платформы.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
              <Button size="lg" icon={<Ic.arrow/>} as="a" href="#contact">Получить расчёт</Button>
              <Button size="lg" variant="secondary" as="a" href="#services">Наши услуги</Button>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              {["Бесплатный вывоз", "Договор за 1 день", "Без скрытых наценок"].map(t => (
                <span key={t} style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "8px 14px", borderRadius: 999,
                  border: "1px solid rgba(207,166,74,.28)",
                  background: "rgba(207,166,74,.06)",
                  color: "var(--gold-200)",
                  fontSize: 12.5, fontWeight: 500, letterSpacing: "0.02em",
                }}>
                  <Ic.check size={14}/>{t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative", borderRadius: 24, overflow: "hidden",
              border: "1px solid var(--border-2)",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(207,166,74,.08)",
            }}>
              <Photo aspect="4/5" tone="warehouse" label="Склад ТРАНЗИТМАРКЕТ"
                src="/assets/warehouse/warehouse-main.jpeg">
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,11,.55) 0%, rgba(10,10,11,.1) 50%, transparent 100%)",
                }}/>
              </Photo>
              <div style={{
                position: "absolute", top: 18, left: 18,
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(10,10,11,.7)", backdropFilter: "blur(10px)",
                border: "1px solid var(--border-2)",
                fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "var(--gold-400)",
              }}>
                <Ic.dot/> Бесплатный вывоз по Пензе
              </div>
              <div style={{
                position: "absolute", right: 18, bottom: 18,
                padding: "16px 20px", borderRadius: 16,
                background: "rgba(17,17,19,.85)", backdropFilter: "blur(14px)",
                border: "1px solid var(--border-gold)", minWidth: 180,
              }}>
                <div style={{
                  fontFamily: "Manrope", fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em",
                  backgroundImage: "var(--gold-gradient)",
                  WebkitBackgroundClip: "text", backgroundClip: "text",
                  WebkitTextFillColor: "transparent", lineHeight: 1,
                }}>10 лет</div>
                <div style={{ fontSize: 12.5, color: "var(--fg-3)", marginTop: 6, lineHeight: 1.4 }}>
                  опыта в управлении<br/>складскими процессами
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketplaceStrip() {
  const items = ["Wildberries", "Ozon", "Яндекс.Маркет", "Lamoda", "Avito", "AliExpress", "СберМегаМаркет", "KazanExpress"];
  return (
    <section style={{
      borderTop: "1px solid var(--border-1)", borderBottom: "1px solid var(--border-1)",
      background: "rgba(17,17,19,.5)", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 28px", display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--fg-3)", flexShrink: 0, fontWeight: 600,
          paddingRight: 24, borderRight: "1px solid var(--border-1)",
        }}>Работаем с</div>
        <div style={{ display: "flex", alignItems: "center", gap: 44, flex: 1, overflow: "hidden" }}>
          {items.map(name => (
            <span key={name} style={{
              fontFamily: "Manrope", fontSize: 19, fontWeight: 700,
              letterSpacing: "-0.02em", color: "var(--fg-2)",
              opacity: 0.7, flexShrink: 0, whiteSpace: "nowrap",
            }}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromiseBand() {
  return (
    <Section pad="default">
      <div style={{
        position: "relative", borderRadius: 28, overflow: "hidden",
        padding: "clamp(36px, 5vw, 64px) clamp(32px, 5vw, 72px)",
        background: `
          radial-gradient(800px 400px at 100% 0%, rgba(207,166,74,.18), transparent 60%),
          radial-gradient(600px 300px at 0% 100%, rgba(207,166,74,.08), transparent 60%),
          linear-gradient(135deg, #15151A 0%, #0E0E10 100%)`,
        border: "1px solid var(--border-1)", boxShadow: "var(--shadow-2)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, var(--gold-400) 50%, transparent)",
          opacity: 0.5,
        }}/>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "start" }}>
          <div style={{
            width: 68, height: 68, borderRadius: 18,
            background: "var(--gold-gradient)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#0A0A0B", boxShadow: "0 14px 40px -10px rgba(207,166,74,.5)",
          }}>
            <Ic.shield size={32}/>
          </div>
          <div>
            <p style={{
              fontFamily: "Manrope", fontSize: "clamp(20px, 2vw, 28px)",
              fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.015em",
              color: "#fff", margin: 0, maxWidth: 880,
            }}>
              Мы знаем, что для вашего бизнеса ключевыми являются{" "}
              <span style={{
                backgroundImage: "var(--gold-gradient)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>надёжность и скорость</span>. Поэтому мы предлагаем комплексные решения.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)", marginTop: 24, maxWidth: 880 }}>
              Мы <strong style={{ color: "#fff", fontWeight: 600 }}>полностью берём на себя ответственность</strong>{" "}
              за логистику, хранение и отгрузку товаров. Мы обещаем полную прозрачность на каждом этапе.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
