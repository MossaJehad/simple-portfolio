import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { VerticalNavigation, MobileNavigation } from './VerticalNavigation';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Ensure view resets to top when switching tabs on smaller screens
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center justify-start md:justify-center py-2 sm:py-8 px-1.5 sm:px-4 select-none">
      {/* Persistent White Board Presentation Container */}
      <main className="relative w-full max-w-[1140px] bg-white rounded-[22px] sm:rounded-[28px] p-3 sm:p-[18px] md:p-[22px] shadow-[0_20px_60px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.07)] overflow-hidden">
        {/* Mobile Top Navigation Tabs */}
        <MobileNavigation />

        <div className="flex flex-col md:flex-row items-stretch gap-[14px] lg:gap-[16px]">
          {/* Persistent Leftmost Vertical Navigation (Desktop) */}
          <VerticalNavigation />

          {/* Page Content with Subtle Smooth Transition */}
          <div 
            key={location.pathname}
            className="flex-1 flex flex-col md:flex-row items-stretch gap-[14px] lg:gap-[16px] min-w-0 animate-page-enter"
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
