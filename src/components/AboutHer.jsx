import React from 'react';

export const AboutHer = () => {
  const highlights = [
    { title: 'Kind Heart', emoji: '💗', desc: 'Selfless, empathetic, and genuinely warm to everyone around her.' },
    { title: 'Beautiful Nature', emoji: '🌸', desc: 'A serene personality that brings calm and light into any moment.' },
    { title: 'Down to Earth', emoji: '🌿', desc: 'Real, authentic, and completely free of unnecessary attitude.' },
    { title: 'Makes People Smile', emoji: '✨', desc: 'Effortlessly brightens the room and turns simple days into special ones.' },
    { title: 'Truly Special', emoji: '🌷', desc: 'A rare soul whose friendship is a genuine gift to be thankful for.' }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge">
            <span>Answering a special question</span>
            <span>💭</span>
          </div>
          
          <h2 className="heading-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--primary-deep)',
            marginBottom: '1rem'
          }}>
            If someone asks me, <span style={{ fontStyle: 'italic', color: 'var(--primary-rose)' }}>"How is Prapti?"</span>
          </h2>
          
          <p className="subheading">
            Here is what I would tell them about the wonderful person Prapti is...
          </p>
        </div>

        {/* Profile Card & Description Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 340px) 1fr',
          gap: '2.5rem',
          alignItems: 'stretch',
          marginBottom: '3.5rem'
        }} className="about-grid">
          
          {/* Profile Card */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(247, 230, 238, 0.7) 100%)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            position: 'relative'
          }}>
            {/* Avatar Frame */}
            <div style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f48fb1 0%, #ce93d8 100%)',
              padding: '5px',
              boxShadow: '0 12px 30px rgba(244, 143, 177, 0.35)',
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.2rem'
              }}>
                🌸
              </div>

              {/* Floating emblem badge */}
              <span style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                background: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                ✨
              </span>
            </div>

            <h3 className="heading-serif" style={{
              fontSize: '1.6rem',
              color: 'var(--primary-deep)',
              marginBottom: '0.4rem'
            }}>
              Prapti ✨
            </h3>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontWeight: '500'
            }}>
              One of a Kind • Warm • Unforgettable
            </p>
          </div>

          {/* Detailed Paragraph Text Card */}
          <div className="glass-card" style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.75)'
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              fontWeight: '600',
              color: 'var(--primary-rose)',
              marginBottom: '1.4rem',
              fontStyle: 'italic'
            }}>
              "Prapti is one of a kind."
            </p>

            <div style={{
              fontSize: '1.08rem',
              lineHeight: '1.85',
              color: 'var(--text-main)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              <p>
                She is kind, caring, sensitive, and beautifully down to earth. She has no unnecessary attitude, and talking to her can make even an ordinary day feel special.
              </p>

              <p>
                She is pretty, of course, but what makes her truly beautiful is her heart, her nature, and the warmth she gives to people around her.
              </p>

              <p>
                She is the kind of person whose conversations can make someone smile without even trying. Her presence feels peaceful, and her friendship is something to be grateful for.
              </p>
            </div>
          </div>

        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.4rem'
        }}>
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card highlight-card"
              style={{
                padding: '1.6rem 1.4rem',
                borderRadius: '20px',
                textAlign: 'center',
                transition: 'all 0.35s ease',
                cursor: 'default',
                background: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <div style={{
                fontSize: '2.4rem',
                marginBottom: '0.8rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))'
              }}>
                {item.emoji}
              </div>

              <h4 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--primary-deep)',
                marginBottom: '0.4rem',
                fontWeight: '700'
              }}>
                {item.title}
              </h4>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .highlight-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(244, 143, 177, 0.5);
          box-shadow: 0 15px 30px rgba(233, 30, 99, 0.15);
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
