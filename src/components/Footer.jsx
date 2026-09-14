import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '4rem 0 3rem 0',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid rgba(244, 143, 177, 0.25)',
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(244, 230, 240, 0.5) 100%)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem'
      }}>
        
        {/* Decorative Flower Icon */}
        <div style={{ fontSize: '2rem' }}>🌸</div>

        {/* Primary Footer Text */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.15rem',
          color: 'var(--primary-deep)',
          fontWeight: '600',
          letterSpacing: '0.01em'
        }}>
          Made with friendship, kindness & a little bit of love <span style={{ color: 'var(--primary-rose)' }}>💗</span>
        </p>

        {/* Secondary Subtitle */}
        <p style={{
          fontSize: '0.98rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic'
        }}>
          Always wishing Prapti a happy heart. ✨
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          style={{
            marginTop: '1.5rem',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(244, 143, 177, 0.4)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: 'var(--primary-deep)',
            boxShadow: '0 4px 15px rgba(220, 150, 180, 0.15)',
            transition: 'all 0.3s ease'
          }}
          className="back-to-top"
        >
          ↑
        </button>

      </div>

      <style>{`
        .back-to-top:hover {
          transform: translateY(-4px);
          background: #ffffff;
          box-shadow: 0 8px 25px rgba(233, 30, 99, 0.25);
          color: var(--primary-rose);
        }
      `}</style>
    </footer>
  );
};
