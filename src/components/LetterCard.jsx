import React from 'react';

export const LetterCard = ({ isOpen, setIsOpen }) => {
  return (
    <section id="letter" className="section" style={{
      scrollMarginTop: '80px',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        
        {/* Envelope Container */}
        <div style={{
          position: 'relative',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>

          {/* Sealed Envelope view when closed */}
          {!isOpen ? (
            <div
              onClick={() => setIsOpen(true)}
              className="glass-card"
              style={{
                padding: '3.5rem 2rem',
                textAlign: 'center',
                cursor: 'pointer',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(253, 237, 243, 0.9) 100%)',
                border: '2px dashed rgba(244, 143, 177, 0.5)',
                borderRadius: '24px',
                boxShadow: '0 20px 45px rgba(233, 30, 99, 0.12)',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                animation: 'floatGentle 3s ease-in-out infinite'
              }}>
                ✉️
              </div>

              <h2 className="heading-serif" style={{
                fontSize: '1.8rem',
                marginBottom: '0.6rem',
                color: 'var(--primary-deep)'
              }}>
                A Private Letter For Prapti
              </h2>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                marginBottom: '1.8rem'
              }}>
                Tap to unseal and read, Prapti... 💌
              </p>

              {/* Wax Seal Emblem */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                boxShadow: '0 6px 18px rgba(233, 30, 99, 0.4)',
                border: '2px solid rgba(255,255,255,0.6)'
              }}>
                🌸
              </div>
            </div>
          ) : (
            /* Opened Letter View */
            <div
              className="glass-card"
              style={{
                padding: 'clamp(2rem, 5vw, 4rem)',
                borderRadius: '28px',
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 248, 0.9) 100%)',
                border: '1px solid rgba(244, 143, 177, 0.4)',
                boxShadow: '0 25px 60px rgba(220, 130, 170, 0.18)',
                position: 'relative',
                animation: 'fadeInLetter 0.7s ease-out forwards'
              }}
            >
              {/* Envelope Header Strip */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(244, 143, 177, 0.25)',
                paddingBottom: '1.2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>💌</span>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '600',
                    color: 'var(--primary-deep)',
                    fontSize: '1.1rem'
                  }}>
                    A Note For Prapti
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Letter"
                  style={{
                    background: 'rgba(244, 143, 177, 0.15)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    color: 'var(--primary-deep)',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Letter Content */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.28rem)',
                lineHeight: '1.9',
                color: 'var(--text-main)'
              }}>
                <p style={{
                  fontSize: '1.4rem',
                  fontStyle: 'italic',
                  color: 'var(--primary-rose)',
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}>
                  Hey Prapti...
                </p>

                <p style={{ marginBottom: '1.4rem' }}>
                  I don't know what kind of day you're having right now. Maybe you're happy, maybe you're upset, or maybe you just need some quiet time.
                </p>

                <p style={{ marginBottom: '1.4rem' }}>
                  Whatever it is, Prapti, I want you to know that you matter to me. You don't have to reply immediately, and you don't have to explain everything.
                </p>

                <p style={{ marginBottom: '1.8rem' }}>
                  Take your time, take care of yourself, and remember that someone is always wishing you peace, happiness, and a beautiful smile.
                </p>

                <div style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.8rem',
                  color: 'var(--primary-deep)',
                  marginTop: '2.5rem',
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.6rem'
                }}>
                  <span>Sending you a little happiness, Prapti.</span>
                  <span style={{ fontSize: '2.2rem' }}>🌷</span>
                </div>
              </div>

              {/* Gentle bottom accent decorative seal */}
              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px dashed rgba(244, 143, 177, 0.3)',
                textAlign: 'center'
              }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-light)',
                  fontStyle: 'italic'
                }}>
                  ✨ Remember: You are always valued, just as you are.
                </span>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @keyframes fadeInLetter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};
