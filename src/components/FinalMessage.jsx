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
                padding: '1.2rem 2.8rem',
                fontSize: '1.12rem',
                boxShadow: '0 10px 35px rgba(233, 30, 99, 0.35)'
              }}
            >
              <span>And lastly, Nehal, I just want to say one thing...</span>
              <span style={{ fontSize: '1.3rem' }}>✨</span>
            </button>
            <p style={{
              marginTop: '1rem',
              fontSize: '0.92rem',
              color: 'var(--text-light)',
              fontStyle: 'italic'
            }}>
              Tap to reveal the closing message 💭
            </p>
          </div>
        ) : (
          <div className="glass-card" style={{
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(253, 237, 243, 0.96) 100%)',
            border: '2px solid rgba(244, 143, 177, 0.6)',
            boxShadow: '0 0 50px rgba(244, 143, 177, 0.35), 0 20px 40px rgba(220, 130, 170, 0.15)',
            animation: 'glowExpand 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.8rem',
              marginBottom: '1rem',
              animation: 'floatGentle 3s ease-in-out infinite'
            }}>
              🤍
            </div>

            <h3 className="heading-serif" style={{
              fontSize: 'clamp(1.4rem, 3.2vw, 2rem)',
              color: 'var(--primary-deep)',
              lineHeight: '1.4',
              fontWeight: '700',
              marginBottom: '1.6rem'
            }}>
              And lastly, Nehal, I just want to say one thing...
            </h3>

            <div style={{
              maxWidth: '620px',
              margin: '0 auto',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
              lineHeight: '1.9',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-serif)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}>
              <p>
                You genuinely seem like a beautiful person, not just because of how you look, but because of the kindness and simplicity in your nature.
              </p>

              <p>
                I may not know you well enough to call you my friend, but I'm happy that our paths crossed, even for a short time.
              </p>

              {/* Highlight Banner */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(244, 143, 177, 0.18) 0%, rgba(206, 147, 216, 0.18) 100%)',
                border: '1px solid rgba(244, 143, 177, 0.4)',
                borderRadius: '18px',
                padding: '1.4rem 1.8rem',
                margin: '0.6rem 0',
                color: 'var(--primary-deep)',
                fontWeight: '700',
                fontSize: 'clamp(1.1rem, 2.4vw, 1.35rem)',
                boxShadow: '0 6px 20px rgba(233, 30, 99, 0.08)'
              }}>
                Stay the way you are, Nehal. The world needs more people with kind hearts like yours.
              </div>

              <p style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontSize: '1.08rem'
              }}>
                And thank you for reminding me that sometimes, even a stranger can leave behind a genuinely beautiful impression. 🤍
              </p>
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
