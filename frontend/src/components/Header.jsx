import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Auto-hide when scrolling down, auto-show when scrolling up
      if (currentScrollY <= 40 || mobileMenuOpen) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        setVisible(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transform: visible || mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease',
      willChange: 'transform',
      padding: scrolled ? '0.7rem 0' : '1.15rem 0',
      backgroundColor: scrolled || mobileMenuOpen ? 'rgba(252, 251, 248, 0.98)' : 'rgba(252, 251, 248, 0.88)',
      boxShadow: scrolled || mobileMenuOpen ? 'var(--shadow-sm)' : 'none',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo & Name */}
        <a href="#home" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img 
            src={logo} 
            alt="Flour Shower Logo" 
            style={{ width: 'clamp(45px, 9vw, 70px)', height: 'auto', objectFit: 'contain' }} 
          />
          <div>
            <span style={{ 
              display: 'block',
              fontFamily: 'var(--font-serif)', 
              fontWeight: 700, 
              fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)', 
              color: 'var(--color-primary)',
              lineHeight: 1.1,
              whiteSpace: 'nowrap'
            }}>
              Flour Shower
            </span>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              color: 'var(--color-text-light)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Batticaloa Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '1.6rem', alignItems: 'center' }} className="nav-desktop">
          <a href="#home" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Home</a>
          <a href="#about" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>The Studio</a>
          <a href="#services" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Creations & Workshops</a>
          <a href="#benefits" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Our Standard</a>
          <a href="#reviews" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Stories</a>
          <a href="#contact" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Visit Us</a>
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: 'none', gap: '0.75rem', alignItems: 'center' }} className="actions-desktop">
          <a 
            href="https://chat.whatsapp.com/BJnCoHakzan8W1XYC6LBRS" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ 
              fontWeight: 600, 
              padding: '0.6rem 1.35rem', 
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Join Community
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="btn-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--color-text)',
          }}
        >
          {mobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'rgba(252, 251, 248, 0.98)',
          borderTop: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#home" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>Home</a>
            <a href="#about" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>The Studio</a>
            <a href="#services" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>Creations & Workshops</a>
            <a href="#benefits" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>Our Standard</a>
            <a href="#reviews" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>Stories</a>
            <a href="#contact" onClick={closeMenu} style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.4rem 0' }}>Location & Contact</a>
          </nav>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
            <a 
              href="https://chat.whatsapp.com/BJnCoHakzan8W1XYC6LBRS" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMenu} 
              className="btn btn-primary" 
              style={{ 
                width: '100%', 
                fontWeight: 600, 
                textAlign: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Join Community
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .nav-desktop {
            display: flex !important;
          }
          .actions-desktop {
            display: flex !important;
          }
          .btn-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .btn-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
