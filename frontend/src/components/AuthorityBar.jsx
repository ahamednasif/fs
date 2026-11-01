import React from 'react';

const AuthorityBar = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1.75rem 0',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', color: 'var(--color-primary)' }}>Batticaloa & Kattankudy</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.75px' }}>Custom Culinary Workshop</span>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', color: 'var(--color-primary)' }}>100% Order in Advance</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.75px' }}>Dynamic Weight & Design Quotes</span>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', color: 'var(--color-primary)' }}>Certified Masterclasses</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.75px' }}>Pro Stainless Steel Stations</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorityBar;
