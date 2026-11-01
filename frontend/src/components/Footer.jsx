import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#1A1A1A', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* Top: Join Community & Order Panel */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          borderRadius: '1.5rem',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          alignItems: 'center',
          gap: '1.75rem',
          transform: 'translateY(-5rem)',
          marginBottom: '-2.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Order In Advance & Join Our Community</h3>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', lineHeight: 1.5 }}>
              Request dynamic design quotes based on weight and complexity, or reserve your seat for certified workshops in Kattankudy.
            </p>
          </div>
          <div className="community-btn-container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/94767707765" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#fff', 
                padding: '0.9rem 1.6rem',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                borderRadius: '50px',
                whiteSpace: 'nowrap'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#25D366' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Area */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
          gap: '2.5rem', 
          borderBottom: '1px solid rgba(255,255,255,0.1)', 
          paddingBottom: '2.5rem' 
        }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <img src={logo} alt="Flour Shower Logo" style={{ width: '75px', height: 'auto', objectFit: 'contain' }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.4rem', display: 'block', color: '#fff' }}>Flour Shower</span>
                  <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Batticaloa Studio</span>
                </div>
              </div>
              <p style={{ color: '#999', lineHeight: 1.6, fontSize: '0.9rem' }}>
                Premier custom home baking studio and cake decorating academy. Operating as an order in advance culinary workshop specializing in optical illusion art, luxury wedding cakes, and certified masterclasses.
              </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>Studio & Location</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#999', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ lineHeight: 1.5 }}>
                  47/1, Raza Abdul Majeed Alim Lane,<br />
                  Kattankudy, 30100, Sri Lanka
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="https://wa.me/94767707765" target="_blank" rel="noopener noreferrer" style={{ color: '#999', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>
                  +94 76 770 7765
                </a>
              </li>
              <li style={{ color: '#777', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                * Visits & orders by advance booking
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', color: '#999', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Home</a></li>
              <li><a href="#about" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>The Studio</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Creations & Workshops</a></li>
              <li><a href="#benefits" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Our Standard</a></li>
              <li><a href="#reviews" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Stories & Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>Connect & Follow</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Explore our latest illusion cake drops, wedding showcases, and workshop schedules:
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: '#999' }}>
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/shower_flour/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Flour Shower on Instagram"
                style={{ transition: 'color 0.2s' }} 
                onMouseOver={e=>e.currentTarget.style.color='#E1306C'} 
                onMouseOut={e=>e.currentTarget.style.color='#999'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook Icon */}
              <a 
                href="https://web.facebook.com/p/Flour-Shower-100063519792351" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Flour Shower on Facebook"
                style={{ transition: 'color 0.2s' }} 
                onMouseOver={e=>e.currentTarget.style.color='#1877F2'} 
                onMouseOut={e=>e.currentTarget.style.color='#999'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* WhatsApp Community Group Icon */}
              <a 
                href="https://chat.whatsapp.com/BJnCoHakzan8W1XYC6LBRS" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Flour Shower Community on WhatsApp"
                style={{ transition: 'color 0.2s' }} 
                onMouseOver={e=>e.currentTarget.style.color='#25D366'} 
                onMouseOut={e=>e.currentTarget.style.color='#999'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Flour Shower Studio (47/1, Raza Abdul Majeed Alim Lane, Kattankudy, 30100, Sri Lanka). All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .community-btn-container {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
