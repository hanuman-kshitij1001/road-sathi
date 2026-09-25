import React from 'react';

export const Card = ({ children, title, subtitle, className = '', ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {title && (
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {title}
          </h3>
          {subtitle && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
