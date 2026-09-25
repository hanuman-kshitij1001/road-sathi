import React from 'react';

export const Badge = ({ children, variant = 'amber', className = '' }) => {
  const variantClass = `badge-${variant}`;
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
};
