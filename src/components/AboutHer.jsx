import React from 'react';

export const AboutHer = () => {
  const highlights = [
    { title: 'Pure & Kind Heart', emoji: '🤍', desc: 'A genuinely pure-hearted person whose warmth is felt even in brief words.' },
    { title: 'Humble & Down to Earth', emoji: '🌿', desc: 'Completely free of unnecessary attitude—grounded, gentle, and real.' },
    { title: 'Respectful & Gentle', emoji: '🌸', desc: 'Speaks with courtesy and grace, always treating others respectfully.' },
    { title: 'Truly Beautiful', emoji: '✨', desc: 'Pretty on the outside, and most radiant through her kindness and heart.' },
    { title: 'A Rare Reminder', emoji: '🌷', desc: 'A reminder that good-hearted, gentle people still exist in this world.' }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge">
            <span>A Genuine Impression</span>
            <span>💭</span>
          </div>
          
          <h2 className="heading-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--primary-deep)',
            marginBottom: '1rem'
          }}>
            The Impression You Left
          </h2>
          
          <p className="subheading">
            Here is the genuine impression those few conversations left on me...
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
              Nehal ✨
            </h3>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontWeight: '500'
            }}>
              Pure-Hearted • Down to Earth • Respectful
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
              "There's something beautiful about Nehal's nature."
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
                She seems kind, sensitive, humble, and genuinely down to earth. She doesn't have any unnecessary attitude, and the way she talks feels so respectful and gentle.
              </p>

              <p>
                Of course, she's pretty, and she has a lovely personality. But what makes someone truly beautiful isn't just their appearance—it's their heart, their kindness, and the way they treat others.
              </p>

              <p>
                Even though we barely know each other and have only talked a few times, she has always been respectful in her own way. Sometimes people remind us that genuinely good-hearted individuals still exist—and honestly, Nehal gives that feeling.
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
