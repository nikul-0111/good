import React, { useState } from 'react';

export const PeaceSection = () => {
  const [activeCare, setActiveCare] = useState(null);

  const careTips = [
    { title: 'Drink some water 💧', text: 'Stay hydrated and take a soft moment for yourself.' },
    { title: 'Take a deep breath 🌬️', text: 'Inhale peace, exhale all the tension and worries.' },
    { title: 'Rest your eyes 🌙', text: 'Give your mind a break. Everything will be okay.' },
    { title: 'Listen to a favorite song 🎵', text: 'Let music wrap around you like a comforting hug.' }
  ];

  return (
    <section id="care" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        <div className="glass-card" style={{
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          borderRadius: '36px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(235, 230, 248, 0.85) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 20px 50px rgba(180, 160, 220, 0.18)',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Floating Clouds Background Decorations */}
          <span style={{
            position: 'absolute',
            top: '20px',
            left: '30px',
            fontSize: '2.5rem',
            opacity: 0.4,
            animation: 'floatSlow 7s ease-in-out infinite'
          }}>☁️</span>
          <span style={{
            position: 'absolute',
            bottom: '30px',
            right: '40px',
            fontSize: '3rem',
            opacity: 0.35,
            animation: 'floatSlow 9s ease-in-out infinite 2s'
          }}>☁️</span>
          <span style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            fontSize: '1.4rem',
            opacity: 0.6,
            animation: 'sparkleSpin 8s linear infinite'
          }}>⭐</span>

          {/* Heading */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '0.5rem 1.4rem',
            borderRadius: '9999px',
            marginBottom: '1.8rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}>
            <span style={{ fontSize: '1.2rem' }}>☁️</span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
              fontSize: '1.3rem',
              color: 'var(--primary-deep)'
            }}>
              No pressure. Just care.
            </span>
            <span style={{ fontSize: '1.2rem' }}>☁️</span>
          </div>

          {/* Calming Main Text */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2.3vw, 1.35rem)',
            lineHeight: '1.85',
            color: 'var(--text-main)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
            fontFamily: 'var(--font-sans)',
            fontWeight: '400'
          }}>
            You don't have to reply to this page or to any message right away. If you need some space, that's completely okay. Just take care of yourself, okay? <span style={{ color: 'var(--primary-rose)' }}>🤍</span>
          </p>

          {/* Gentle Self-Care Reminders */}
          <div className="care-tips-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'center',
            marginBottom: activeCare ? '1.5rem' : '0'
          }}>
            {careTips.map((tip, idx) => (
              <button
                key={idx}
                className="care-tip-btn"
                onClick={() => setActiveCare(activeCare === idx ? null : idx)}
                style={{
                  background: activeCare === idx ? 'var(--primary-rose)' : 'rgba(255, 255, 255, 0.85)',
                  color: activeCare === idx ? '#fff' : 'var(--primary-deep)',
                  border: '1px solid rgba(244, 143, 177, 0.4)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                {tip.title}
              </button>
            ))}
          </div>

          {/* Active Self-Care Note */}
          {activeCare !== null && (
            <div style={{
              marginTop: '1.2rem',
              padding: '1rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '16px',
              color: 'var(--primary-deep)',
              fontSize: '0.98rem',
              fontWeight: '500',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              animation: 'fadeInLetter 0.3s ease forwards'
            }}>
              ✨ {careTips[activeCare].text}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
