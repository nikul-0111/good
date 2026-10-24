import React, { useState } from 'react';

export const AmbientSound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // YouTube Video ID from: https://www.youtube.com/watch?v=DnVWw_enzR4
  const YOUTUBE_VIDEO_ID = 'DnVWw_enzR4';

  const handleStartMusic = () => {
    setIsPlaying(true);
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Navbar Play / Music Indicator Button */}
      <button
        onClick={() => {
          if (!isPlaying) {
            handleStartMusic();
          } else {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }
        }}
        title="Play Lambi Judai Hindi Song 🎵"
        style={{
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(233, 30, 99, 0.22) 0%, rgba(206, 147, 216, 0.22) 100%)'
            : 'rgba(255, 255, 255, 0.85)',
          border: isPlaying ? '1px solid rgba(233, 30, 99, 0.6)' : '1px solid rgba(244, 143, 177, 0.45)',
          borderRadius: '20px',
          padding: '0.45rem 1rem',
          fontSize: '0.86rem',
          fontWeight: '600',
          color: 'var(--primary-deep)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.55rem',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: isPlaying ? '0 0 16px rgba(233, 30, 99, 0.35)' : '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        <span>{isPlaying ? '🎶' : '▶'}</span>
        <span>{isPlaying ? 'Lambi Judai' : '🎵 Lambi Judai'}</span>

        {/* Animated equalizer bars when playing */}
        {isPlaying && (
          <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
            <span className="eq-bar eq-bar-1" />
            <span className="eq-bar eq-bar-2" />
            <span className="eq-bar eq-bar-3" />
          </span>
        )}
      </button>

      {/* Floating Bottom-Right YouTube Music Player Widget */}
      {isPlaying && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          maxWidth: '92vw',
          width: isMinimized ? 'auto' : '340px',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {isMinimized ? (
            /* Minimized floating pill */
            <div
              onClick={() => setIsMinimized(false)}
              className="glass-card"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.65rem 1.2rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1.5px solid rgba(233, 30, 99, 0.5)',
                boxShadow: '0 10px 30px rgba(233, 30, 99, 0.25)',
                cursor: 'pointer',
                animation: 'pulseGlow 3s infinite'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>🎵</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-deep)' }}>
                  Lambi Judai
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Playing in background 🎶
                </div>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
                <span className="eq-bar eq-bar-1" />
                <span className="eq-bar eq-bar-2" />
                <span className="eq-bar eq-bar-3" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClosePlayer();
                }}
                title="Stop Music"
                style={{
                  background: 'rgba(244, 143, 177, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: 'var(--primary-deep)',
                  marginLeft: '0.2rem'
                }}
              >
                ✕
              </button>
            </div>
          ) : (
            /* Expanded YouTube Floating Player Card */
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '1.2rem',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(253, 240, 245, 0.97) 100%)',
                border: '1.5px solid rgba(244, 143, 177, 0.6)',
                boxShadow: '0 20px 45px rgba(220, 130, 170, 0.25)',
                animation: 'fadeInLetter 0.3s ease-out'
              }}
            >
              {/* Header Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(244, 143, 177, 0.25)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>🎵</span>
                  <span style={{
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    color: 'var(--primary-deep)'
                  }}>
                    Lambi Judai (लम्बी जुदाई)
                  </span>
                </div>

                {/* Window Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <button
                    onClick={handleToggleMinimize}
                    title="Minimize player"
                    style={{
                      background: 'rgba(244, 143, 177, 0.15)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '26px',
                      height: '26px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      color: 'var(--primary-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    _
                  </button>
                  <button
                    onClick={handleClosePlayer}
                    title="Close player"
                    style={{
                      background: 'rgba(244, 143, 177, 0.15)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '26px',
                      height: '26px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      color: 'var(--primary-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Responsive YouTube Embed Container */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                background: '#000',
                aspectRatio: '16/9',
                width: '100%'
              }}>
                <iframe
                  title="Lambi Judai Song"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&playlist=${YOUTUBE_VIDEO_ID}&loop=1&enablejsapi=1`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom Info & Link Strip */}
              <div style={{
                marginTop: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}>
                <span>Enjoying for Nehal 🤍</span>
                <a
                  href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--primary-rose)',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  Open in YouTube ↗
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        .eq-bar {
          width: 2px;
          background: #e91e63;
          border-radius: 1px;
          animation: eqAnim 0.8s ease-in-out infinite alternate;
        }
        .eq-bar-1 { height: 6px; animation-delay: 0.1s; }
        .eq-bar-2 { height: 11px; animation-delay: 0.3s; }
        .eq-bar-3 { height: 8px; animation-delay: 0.5s; }

        @keyframes eqAnim {
          0% { height: 3px; }
          100% { height: 12px; }
        }
      `}</style>
    </>
  );
};
