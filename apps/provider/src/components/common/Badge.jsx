import React from 'react';

export const Badge = ({ children, variant = 'emerald', className = '' }) => (
  <span className={`badge badge-${variant} ${className}`}>
    {children}
  </span>
);
