import React, { useState, useEffect, useRef } from 'react';
import { Ic, Button } from './Primitives';

export function CallbackModal({ open, onClose }) {
  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef(null);
  const nameRef    = useRef(null);

  // Focus name on open
  useEffect(() => {
    if (open) {
      setSent(false);
      setName(''); setPhone(''); setAgreed(false); setLoading(false);
      setTimeout(() => nameRef.current?.focus(), 80);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    // TODO: подключить реальный обработчик (email / Telegram-бот)
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 180ms cubic-bezier(.2,.7,.2,1)',
      }}
    >
      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) scale(.97) }
                             to   { opacity:1; transform:translateY(0) scale(1) } }
        .cb-input {
          width:100%; padding:13px 16px; border-radius:12px;
          background:#1E1E22; border:1px solid rgba(255,255,255,.1);
          color:#fff; font-family:Inter,sans-serif; font-size:15px;
          outline:none; transition:border-color 180ms;
          -webkit-appearance:none;
        }
        .cb-input:focus { border-color:rgba(207,166,74,.5); }
        .cb-input::placeholder { color:#55555F; }
      `}</style>

      <div style={{
        background: 'linear-gradient(160deg,#1a1a1e 0%,#111113 100%)',
        border: '1px solid rgba(255,255,255,.10)',
        borderRadius: 24,
        padding: '36px 32px 32px',
        width: '100%', maxWidth: 440,
        position: 'relative',
        boxShadow: '0 32px 80px rgba(0,0,0,.7)',
        animation: 'slideUp 240ms cubic-bezier(.2,.7,.2,1)',
      }}>
        {/* Gold top line */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:1,
          background:'linear-gradient(90deg,transparent,#CFA64A 50%,transparent)',
          borderRadius:'24px 24px 0 0', opacity:.7,
        }}/>

        {/* Close */}
        <button onClick={onClose} style={{
          position:'absolute', top:16, right:16,
          width:32, height:32, borderRadius:999,
          background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)',
          color:'#8A8A93', display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', transition:'all 200ms',
        }}
          onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,.12)'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,.06)'; e.currentTarget.style.color='#8A8A93'; }}
        >
          <Ic.x size={14}/>
        </button>

        {!sent ? (
          <>
            {/* Header */}
            <div style={{ marginBottom:28 }}>
              <div style={{
                display:'inline-flex', alignItems:'center', gap:10,
                padding:'7px 14px', borderRadius:999,
                background:'rgba(207,166,74,.10)', border:'1px solid rgba(207,166,74,.25)',
                color:'#CFA64A', fontSize:11.5, fontWeight:600,
                letterSpacing:'0.12em', textTransform:'uppercase',
                marginBottom:16,
              }}>
                <Ic.phone size={13}/> Обратный звонок
              </div>
              <h2 style={{ fontFamily:'Manrope', fontSize:24, fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.1, color:'#fff', margin:0 }}>
                Перезвоним в течение<br/>
                <span style={{ backgroundImage:'linear-gradient(135deg,#E8CF82 0%,#CFA64A 40%,#A87E2C 100%)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent' }}>15 минут</span>
              </h2>
              <p style={{ fontSize:14, color:'#8A8A93', marginTop:10, lineHeight:1.5 }}>
                Оставьте контакты — менеджер свяжется с вами и ответит на все вопросы.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <div>
                <label style={{ display:'block', fontSize:12, color:'#8A8A93', fontWeight:500, marginBottom:6, letterSpacing:'0.04em' }}>Ваше имя</label>
                <input
                  ref={nameRef}
                  className="cb-input"
                  type="text"
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={e=>setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label style={{ display:'block', fontSize:12, color:'#8A8A93', fontWeight:500, marginBottom:6, letterSpacing:'0.04em' }}>Номер телефона</label>
                <input
                  className="cb-input"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={e=>setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Consent */}
              <label style={{ display:'flex', alignItems:'flex-start', gap:10, cursor:'pointer', marginTop:4 }}>
                <div
                  onClick={()=>setAgreed(v=>!v)}
                  style={{
                    width:18, height:18, borderRadius:5, flexShrink:0, marginTop:1,
                    background: agreed ? 'linear-gradient(135deg,#E8CF82 0%,#CFA64A 100%)' : 'transparent',
                    border: agreed ? 'none' : '1px solid rgba(255,255,255,.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'all 180ms', cursor:'pointer',
                  }}
                >
                  {agreed && <Ic.check size={11} style={{ color:'#0A0A0B', strokeWidth:3 }}/>}
                </div>
                <span style={{ fontSize:12.5, color:'#7A7A85', lineHeight:1.55 }}>
                  Соглашаюсь с{' '}
                  <a href="/privacy.html" target="_blank" style={{ color:'#CFA64A', textDecoration:'none', borderBottom:'1px solid rgba(207,166,74,.3)' }}
                    onClick={e=>e.stopPropagation()}>
                    политикой конфиденциальности
                  </a>{' '}
                  и даю согласие на обработку персональных данных
                </span>
              </label>

              <button type="submit" disabled={!agreed || loading} style={{
                marginTop:4, padding:'15px 24px', borderRadius:999,
                background: (!agreed || loading) ? '#26262B' : 'linear-gradient(135deg,#E8CF82 0%,#CFA64A 40%,#A87E2C 100%)',
                color: (!agreed || loading) ? '#55555F' : '#0A0A0B',
                border: 0, cursor: (!agreed || loading) ? 'not-allowed' : 'pointer',
                fontFamily:'Manrope', fontWeight:700, fontSize:15,
                letterSpacing:'-0.01em',
                transition:'all 220ms',
                boxShadow: (!agreed || loading) ? 'none' : '0 8px 28px -6px rgba(207,166,74,.5)',
              }}>
                {loading ? 'Отправляем…' : 'Перезвоните мне →'}
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign:'center', padding:'16px 0 8px' }}>
            <div style={{
              width:64, height:64, borderRadius:999, margin:'0 auto 20px',
              background:'rgba(59,187,110,.12)', border:'1px solid rgba(59,187,110,.3)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <Ic.check size={28} style={{ color:'#3BBB6E', strokeWidth:2.5 }}/>
            </div>
            <h2 style={{ fontFamily:'Manrope', fontSize:22, fontWeight:800, color:'#fff', letterSpacing:'-0.025em', margin:'0 0 10px' }}>
              Заявка принята!
            </h2>
            <p style={{ fontSize:14.5, color:'#8A8A93', lineHeight:1.6 }}>
              Перезвоним вам в течение 15 минут.<br/>
              Пн–Сб с 10:00 до 20:00.
            </p>
            <button onClick={onClose} style={{
              marginTop:24, padding:'12px 32px', borderRadius:999,
              background:'#1E1E22', border:'1px solid rgba(255,255,255,.1)',
              color:'#fff', cursor:'pointer',
              fontFamily:'Manrope', fontWeight:600, fontSize:14,
              transition:'all 200ms',
            }}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}
