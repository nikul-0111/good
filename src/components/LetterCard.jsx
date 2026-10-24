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
                A Sincere Note For Nehal
              </h2>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                marginBottom: '1.8rem'
              }}>
                Tap to unseal and read, Nehal... 💌
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
                🤍
              </div>
            </div>
          ) : (
            /* Opened Letter View */
            <div
              className="glass-card"
              style={{
                padding: 'clamp(2rem, 5vw, 4rem)',
                borderRadius: '28px',
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 245, 248, 0.92) 100%)',
                border: '1px solid rgba(244, 143, 177, 0.45)',
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
                    A Sincere Note For Nehal
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
                fontSize: 'clamp(1.08rem, 2.1vw, 1.24rem)',
                lineHeight: '1.95',
                color: 'var(--text-main)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontStyle: 'normal',
                  color: 'var(--primary-deep)',
                  marginBottom: '1.8rem',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>To Nehal,</span>
                  <span style={{ fontSize: '1.4rem' }}>🌸</span>
                </h3>

                <p style={{ marginBottom: '1.5rem' }}>
                  It's a little strange to write something about someone I barely know, but sometimes, even a few conversations are enough to leave a beautiful impression.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  We are still strangers to each other. We have only talked two or three times, and I don't know much about you or your life. But from those little conversations, I genuinely felt that you are a really kind-hearted and pure-hearted person.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  There's something beautiful about your nature. You seem kind, sensitive, humble, and genuinely down to earth. You don't seem to have any unnecessary attitude, and the way you talk to people feels so respectful and gentle.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  Of course, you're pretty, and you have a lovely personality. But I think what makes someone truly beautiful isn't just their appearance. It's their heart, their kindness, and the way they treat others. And from whatever little I've seen of you, I feel you have those qualities.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  One thing I genuinely appreciate is that even though you barely know me, you've never made me feel bad or deliberately hurt me. You've always been respectful in your own way, and I really admire that.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  I know we haven't talked much, and maybe we won't get the chance to know each other better. That's completely okay. I understand that everyone has their own choices, comfort, and boundaries, and I respect yours.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  I couldn't become your friend, but I'm genuinely glad that I got the chance to talk to you, even if it was only for a little while.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  Sometimes, we come across people who remind us that there are still genuinely good-hearted people in this world. And honestly, you gave me that feeling.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  I don't know if everything I've written is completely accurate, because I haven't known you for long. But this is the impression you've left on me, and I wanted to express it.
                </p>

                <div style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.75rem',
                  color: 'var(--primary-deep)',
                  marginTop: '2.5rem',
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.6rem'
                }}>
                  <span>With genuine respect & warm wishes,</span>
                  <span style={{ fontSize: '2rem' }}>🤍🌷</span>
                </div>
              </div>

              {/* Gentle bottom accent decorative seal */}
              <div style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px dashed rgba(244, 143, 177, 0.35)',
                textAlign: 'center'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  fontStyle: 'italic'
                }}>
                  ✨ A sincere thought left with quiet respect and pure intentions.
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
