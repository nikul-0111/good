import React, { useState, useEffect, useRef } from 'react';

export const AmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Pentatonic notes in Hz (C major pentatonic / peaceful dream chimes)
  const NOTES = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

  const playChime = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const freq = NOTES[Math.floor(Math.random() * NOTES.length)];
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Soft chime envelope
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.6);
  };

  const toggleSound = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      setIsPlaying(true);
      playChime();
      intervalRef.current = setInterval(playChime, 2200);
    } else {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute peaceful chimes" : "Play peaceful chimes"}
      style={{
        background: isPlaying ? 'rgba(233, 30, 99, 0.15)' : 'rgba(255, 255, 255, 0.75)',
        border: '1px solid rgba(244, 143, 177, 0.5)',
        borderRadius: '20px',
        padding: '0.4rem 0.9rem',
        fontSize: '0.85rem',
        fontWeight: '600',
        color: 'var(--primary-deep)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        boxShadow: isPlaying ? '0 0 12px rgba(233, 30, 99, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <span>{isPlaying ? '🎵 Peaceful Chimes ON' : '🎶 Relaxing Sound'}</span>
      <span style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: isPlaying ? '#e91e63' : '#bbb',
        boxShadow: isPlaying ? '0 0 8px #e91e63' : 'none'
      }} />
    </button>
  );
};
