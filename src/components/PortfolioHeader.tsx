import React from 'react';

export const PortfolioHeader: React.FC = () => {
  return (
    <header className="relative flex items-start justify-between w-full select-none pt-0 pb-1 pr-1">
      <h1 className="font-syne font-extrabold text-[#111111] text-[46px] sm:text-[60px] md:text-[62px] lg:text-[76px] xl:text-[88px] leading-[0.88] tracking-[-0.042em]">
        Portfolio
      </h1>
      {/* Upper-right corner bracket mark */}
      <div 
        className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-1.5 sm:mt-2 lg:mt-2.5 mr-0.5 shrink-0" 
        aria-hidden="true" 
      />
    </header>
  );
};
