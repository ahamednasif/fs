import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('Subscribing...');
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus(data.error || 'Failed to subscribe.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Could not connect to server. Check if MERN backend is running.');
    }
  };

  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#fff', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* Top: Newsletter */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          borderRadius: '1.5rem',
          padding: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          transform: 'translateY(-8rem)',
          marginBottom: '-4rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Join Our Sweet Community</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Subscribe for free recipes, premium tips, and course updates.</p>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem'
                }} 
              />
              <button type="submit" className="btn" style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#fff', 
                padding: '1rem 2rem',
                border: 'none',
                fontWeight: 600
              }}>Subscribe</button>
            </form>
            {status && <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{status}</p>}
          </div>
        </div>

        {/* Bottom Area */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem' }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <img src={logo} alt="Flour Shower Logo" style={{ width: '85px', height: 'auto', objectFit: 'contain' }} />
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.5rem' }}>Flour Shower</span>
              </div>
              <p style={{ color: '#999', lineHeight: 1.6 }}>Bringing premium bakery education to you, wherever you are in the world.</p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#999' }}>
              <li><a href="#about" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>About Us</a></li>
              <li><a href="#courses" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>All Courses</a></li>
              <li><a href="#login" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Student Login</a></li>
              <li><a href="#contact" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#999' }}>
              <li><a href="#terms" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Terms of Service</a></li>
              <li><a href="#privacy" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Privacy Policy</a></li>
              <li><a href="#refund" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem', color: '#999' }}>
              {/* Social Icons (Inline SVGs for reliability) */}
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#999'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Flour Shower Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
