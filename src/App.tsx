import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioLayout } from './components/PortfolioLayout';
import { PortfolioPage } from './pages/PortfolioPage';
import { ResearchPage } from './pages/ResearchPage';
import { ClientsPage } from './pages/ClientsPage';
import { PodcastPage } from './pages/PodcastPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PortfolioLayout>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PortfolioLayout>
    </BrowserRouter>
  );
};

export default App;
