import React, { useState } from 'react';

export const FinalMessage = ({ isRevealed, setIsRevealed }) => {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '750px', textAlign: 'center' }}>
        
        {!isRevealed ? (
          <div>
            <button
              onClick={() => setIsRevealed(true)}
              className="btn-primary"
              style={{
                padding: '1.2rem 3rem',
                fontSize: '1.2rem',
                boxShadow: '0 10px 35px rgba(233, 30, 99, 0.35)'
              }}
            >
              <span>One Last Thing...</span>
              <span style={{ fontSize: '1.4rem' }}>✨</span>
            </button>
            <p style={{
              marginTop: '1rem',
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              fontStyle: 'italic'
            }}>
              Click to reveal a final note 💭
            </p>
          </div>
        ) : (
          <div className="glass-card" style={{
            padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(253, 237, 243, 0.95) 100%)',
            border: '2px solid rgba(244, 143, 177, 0.6)',
            boxShadow: '0 0 50px rgba(244, 143, 177, 0.35), 0 20px 40px rgba(220, 130, 170, 0.15)',
            animation: 'glowExpand 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '2.8rem',
              marginBottom: '1rem',
              animation: 'floatGentle 3s ease-in-out infinite'
            }}>
              💖
            </div>

            <h3 className="heading-serif" style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              color: 'var(--primary-deep)',
              lineHeight: '1.6',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>
              "Prapti, you are not just a good friend. You are someone whose happiness genuinely matters to me."
            </h3>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.2rem',
              background: 'rgba(233, 30, 99, 0.1)',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              color: 'var(--primary-rose)',
              fontWeight: '600'
            }}>
              <span>Always in your corner, Prapti</span>
              <span>🌷</span>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes glowExpand {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
