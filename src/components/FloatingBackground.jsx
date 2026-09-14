import React, { useEffect, useState } from 'react';

const EMOJIS = ['💗', '🌸', '✨', '🤍', '🌷', '⭐', '💖'];

export const FloatingBackground = () => {
  const [items, setItems] = useState([]);
  const [clickParticles, setClickParticles] = useState([]);

  useEffect(() => {
    // Generate static floating items with random initial states
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[i % EMOJIS.length],
      left: Math.random() * 95, // %
      size: Math.random() * 1.2 + 0.8, // rem
      duration: Math.random() * 12 + 14, // s
      delay: Math.random() * 8, // s
    }));
    setItems(generated);
  }, []);

  const handleGlobalClick = (e) => {
    // Spawn floating mini hearts at click location
    const id = Date.now() + Math.random();
    const newParticle = {
      id,
      x: e.clientX,
      y: e.clientY,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
    };

    setClickParticles(prev => [...prev.slice(-10), newParticle]);

    setTimeout(() => {
      setClickParticles(prev => prev.filter(p => p.id !== id));
    }, 1200);
  };

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="floating-background-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      {/* Background ambient glowing soft gradient circles */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(248, 187, 208, 0.45) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '55vw',
        height: '55vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225, 190, 231, 0.4) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      {/* Floating upward items */}
      {items.map(item => (
        <span
          key={item.id}
          style={{
            position: 'absolute',
            left: `${item.left}%`,
            bottom: '-50px',
            fontSize: `${item.size}rem`,
            animation: `heartUp ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
            opacity: 0.6,
            filter: 'drop-shadow(0 2px 8px rgba(244, 143, 177, 0.4))',
            userSelect: 'none'
          }}
        >
          {item.emoji}
        </span>
      ))}

      {/* Interactive Click Burst Particles */}
      {clickParticles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'fixed',
            left: p.x - 12,
            top: p.y - 12,
            fontSize: '1.4rem',
            pointerEvents: 'none',
            animation: 'clickBurst 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards',
            zIndex: 9999
          }}
        >
          {p.emoji}
        </span>
      ))}

      <style>{`
        @keyframes clickBurst {
          0% {
            transform: scale(0.3) translateY(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.3) translateY(-25px);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.8) translateY(-50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
