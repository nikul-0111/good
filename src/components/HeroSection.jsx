import React from 'react';

export const HeroSection = ({ onOpenLetter }) => {
  return (
    <section id="hero" className="section" style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '7.5rem',
      paddingBottom: '4rem',
      position: 'relative'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Small Badge */}
        <div className="badge floating-anim" style={{ animationDuration: '4s' }}>
          <span>Made especially for you</span>
          <span style={{ color: 'var(--primary-rose)' }}>✨</span>
        </div>

        {/* Main Heading */}
        <h1 className="heading-serif" style={{
          fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
          maxWidth: '860px',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          background: 'linear-gradient(135deg, #4a2838 0%, #8b3a62 50%, #e91e63 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 10px 30px rgba(233, 30, 99, 0.08)'
        }}>
          You deserve all the happiness in the world.
        </h1>

        {/* Subtitle */}
        <p className="subheading" style={{
          fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
          lineHeight: '1.75',
          marginBottom: '2.5rem',
          maxWidth: '680px',
          color: 'var(--text-muted)'
        }}>
          No matter what kind of day you are having, I hope this little corner brings a gentle warmth to your heart, a peaceful moment to your mind, and a bright, beautiful smile to your face.
        </p>

        {/* Hero Decorative Illustration (Interactive Blooming Glass Emblem) */}
        <div style={{
          margin: '0 auto 2.8rem auto',
          position: 'relative',
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Outer glowing ring */}
          <div style={{
            position: 'absolute',
            inset: '-15px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #f48fb1, #ce93d8, #fffdfa, #f48fb1)',
            filter: 'blur(20px)',
            opacity: 0.6,
            animation: 'sparkleSpin 15s linear infinite'
          }} />

          {/* Glass Emblem Card */}
          <div className="glass-card pulse-anim" style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4.2rem',
            position: 'relative',
            border: '2px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 15px 35px rgba(233, 30, 99, 0.2)'
          }}>
            <span style={{
              display: 'inline-block',
              animation: 'floatSlow 4s ease-in-out infinite',
              filter: 'drop-shadow(0 4px 10px rgba(233, 30, 99, 0.3))'
            }}>
              🌷
            </span>

            {/* Orbiting sparkles */}
            <span style={{
              position: 'absolute',
              top: '12px',
              right: '18px',
              fontSize: '1.2rem',
              animation: 'floatGentle 3s ease-in-out infinite'
            }}>✨</span>
            <span style={{
              position: 'absolute',
              bottom: '15px',
              left: '18px',
              fontSize: '1.2rem',
              animation: 'floatGentle 3s ease-in-out infinite 1.5s'
            }}>💗</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onOpenLetter}
            className="btn-primary"
            style={{
              fontSize: '1.15rem',
              padding: '1.1rem 2.8rem',
              letterSpacing: '0.01em'
            }}
          >
            <span>Open My Little Letter</span>
            <span style={{ fontSize: '1.3rem', transition: 'transform 0.3s ease' }} className="letter-icon">💌</span>
          </button>
        </div>
      </div>

      <style>{`
        .btn-primary:hover .letter-icon {
          transform: scale(1.2) rotate(12deg);
        }
      `}</style>
    </section>
  );
};
