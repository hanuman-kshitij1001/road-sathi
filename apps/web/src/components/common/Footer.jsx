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
        <p>Road-Sathi Platform &copy; {new Date().getFullYear()} — Production Architecture Foundation</p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
          Separation of Concerns &bull; Modular Workspaces &bull; Scalable Foundation
        </p>
      </div>
    </footer>
  );
};
