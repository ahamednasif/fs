import React from 'react';

const AuthorityBar = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem 0',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4rem',
        opacity: 0.7
      }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: '2rem', color: 'var(--color-primary)' }}>5,000+</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Students</span>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: '2rem', color: 'var(--color-primary)' }}>50+</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Premium Recipes</span>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ display: 'block', fontSize: '2rem', color: 'var(--color-primary)' }}>4.9/5</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Average Rating</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorityBar;
