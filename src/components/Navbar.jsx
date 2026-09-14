import React, { useState, useEffect } from 'react';
import { AmbientSound } from './AmbientSound';

export const Navbar = ({ onOpenLetter }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'My Letter 💌', href: '#letter', onClick: onOpenLetter },
    { name: 'About You 🌸', href: '#about' },
    { name: 'Thought ✨', href: '#quote' },
    { name: 'No Pressure ☁️', href: '#care' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.onClick) {
      link.onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.4s ease',
      padding: scrolled ? '0.7rem 0' : '1.2rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(244, 143, 177, 0.3)' : '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: scrolled ? '0 8px 30px rgba(220, 150, 180, 0.12)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand */}
        <a href="#hero" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem'
        }}>
          <span style={{ fontSize: '1.4rem' }}>🌸</span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--primary-deep)',
            letterSpacing: '-0.01em'
          }}>
            For Bestie <span style={{ color: 'var(--primary-rose)', fontSize: '0.9rem' }}>✨</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.8rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--text-main)',
                transition: 'color 0.25s ease',
                position: 'relative'
              }}
              className="nav-item-link"
            >
              {link.name}
            </a>
          ))}

          <AmbientSound />
        </nav>

        {/* Mobile menu toggle */}
        <div className="mobile-toggle" style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }}>
          <AmbientSound />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: 'var(--primary-deep)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid rgba(244, 143, 177, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-deep)',
                display: 'block'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-item-link:hover {
          color: var(--primary-rose) !important;
        }
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
