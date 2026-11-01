import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Flour Shower App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#FCFBF8',
          color: '#212121',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h1 style={{ fontSize: '1.8rem', color: '#E91E63', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ maxWidth: '400px', color: '#5F6368', marginBottom: '1.5rem', fontSize: '1rem' }}>
            {this.state.error?.message || 'An unexpected error occurred while loading the application.'}
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#E91E63',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 14px 0 rgba(233, 30, 99, 0.39)'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
