import React from 'react';
import { Header } from '../components/common/Header.jsx';
import { Footer } from '../components/common/Footer.jsx';

export const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '2.5rem 2rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
