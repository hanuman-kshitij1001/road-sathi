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
        <p>Road-Sathi Admin Console &copy; {new Date().getFullYear()} — Operations Foundation</p>
      </div>
    </footer>
  );
};
