import React from 'react';

export const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem',
      marginTop: 'auto',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p>Road-Sathi Partner Portal &copy; {new Date().getFullYear()} — Provider Foundation</p>
      </div>
    </footer>
  );
};
