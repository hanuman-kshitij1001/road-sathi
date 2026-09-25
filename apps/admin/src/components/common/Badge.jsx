import React from 'react';

export const Badge = ({ children, variant = 'indigo', className = '' }) => (
  <span className={`badge badge-${variant} ${className}`}>
    {children}
  </span>
);
