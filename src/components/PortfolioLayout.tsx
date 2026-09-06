import React from 'react';
import { useLocation } from 'react-router-dom';
import { VerticalNavigation } from './VerticalNavigation';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="w-full flex items-center justify-center py-4 sm:py-8 px-2 sm:px-4 select-none">
      {/* Persistent White Board Presentation Container */}
      <main className="relative w-full max-w-[1140px] bg-white rounded-[28px] p-[18px] sm:p-[22px] shadow-[0_40px_100px_rgba(0,0,0,0.17),0_8px_24px_rgba(0,0,0,0.07)] overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch gap-[14px] lg:gap-[16px]">
          {/* Persistent Leftmost Vertical Navigation */}
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
