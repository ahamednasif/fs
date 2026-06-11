import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'var(--transition-med)',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: scrolled ? 'rgba(252, 251, 248, 0.95)' : 'transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Placeholder */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logo} alt="Flour Shower Logo" style={{ width: '85px', height: 'auto', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-primary)' }}>Flour Shower</span>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'none', gap: '2rem' }} className="nav-desktop">
          <a href="#home" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Home</a>
          <a href="#about" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>About</a>
          <a href="#courses" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Courses</a>
          <a href="#gallery" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Gallery</a>
          <a href="#contact" style={{ fontWeight: 500, transition: 'var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Contact</a>
        </nav>

        {/* Call to Actions */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="btn btn-ghost" onClick={() => navigate('/login')} style={{ fontWeight: 600 }}>Log In</button>
          <button className="btn btn-primary" onClick={() => navigate('/signup')} style={{ fontWeight: 600 }}>Sign Up / View Courses</button>
        </div>
      </div>
{/* Added simple media query for displaying nav via CSS string interpolation in component or via class. Using standard CSS for nav-desktop */}
<style>{`
  @media (min-width: 900px) {
    .nav-desktop {
      display: flex !important;
    }
  }
`}</style>
    </header>
  );
};

export default Header;
