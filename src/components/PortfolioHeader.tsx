import React from 'react';

export const PortfolioHeader: React.FC = () => {
  return (
    <header className="relative flex items-start justify-between w-full select-none pt-0 pb-1 pr-1">
      <h1 className="font-syne font-extrabold text-[#111111] text-[56px] sm:text-[72px] md:text-[78px] lg:text-[88px] xl:text-[92px] leading-[0.85] tracking-[-0.042em]">
        Portfolio
      </h1>
      {/* Upper-right corner bracket mark */}
      <div 
        className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-2.5 mr-0.5 shrink-0" 
        aria-hidden="true" 
      />
    </header>
  );
};
