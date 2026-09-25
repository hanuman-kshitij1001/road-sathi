import React from 'react';
import { MainLayout } from './layouts/MainLayout.jsx';
import { AppRoutes } from './routes/index.jsx';

export function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;
