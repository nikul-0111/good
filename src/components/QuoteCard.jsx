import React, { useState } from 'react';

export const QuoteCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyQuote = () => {
    const text = `“Some people are beautiful to look at. Some people are beautiful to know. You are both.” 💗`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="quote" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="glass-card" style={{
          padding: 'clamp(2.5rem, 6vw, 4.5rem)',
          borderRadius: '32px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(243, 233, 248, 0.85) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 25px 55px rgba(220, 150, 180, 0.18)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Subtle decorative glowing background blur */}
          <div style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'rgba(244, 143, 177, 0.25)',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }} />

          {/* Large Quote Mark Graphic */}
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '5rem',
            lineHeight: '1',
            color: 'var(--primary-pink)',
            opacity: 0.5,
            marginBottom: '-1.5rem',
            userSelect: 'none'
          }}>
            “
          </div>

          {/* Quote Lines */}
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
            fontWeight: '600',
            lineHeight: '1.5',
            color: 'var(--primary-deep)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em'
          }}>
            <p style={{ marginBottom: '0.4rem' }}>Some people are beautiful to look at.</p>
            <p style={{ marginBottom: '0.4rem' }}>Some people are beautiful to know.</p>
            <p style={{
              color: 'var(--primary-rose)',
              fontStyle: 'italic',
              fontWeight: '700'
            }}>
              You are both. <span style={{ fontStyle: 'normal' }}>💗</span>
            </p>
          </blockquote>

          {/* Decorative Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <span style={{ height: '1px', width: '60px', background: 'rgba(244, 143, 177, 0.4)' }} />
            <span style={{ fontSize: '1.2rem' }}>✨</span>
            <span style={{ height: '1px', width: '60px', background: 'rgba(244, 143, 177, 0.4)' }} />
          </div>

          {/* Interactive Share / Copy Button */}
          <button
            onClick={handleCopyQuote}
            className="btn-secondary"
            style={{
              fontSize: '0.9rem',
              padding: '0.6rem 1.4rem'
            }}
          >
            <span>{copied ? 'Copied to Clipboard! ✨' : 'Copy Quote 💖'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
