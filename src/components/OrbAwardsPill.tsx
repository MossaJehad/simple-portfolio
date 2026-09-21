import React from 'react';
import { CornerBracket } from './CornerBracket';
import { RetroTerminal } from './RetroTerminal';

export const OrbAwardsPill: React.FC = () => {
  return (
    <div className="awards-pill relative flex-1 flex flex-row rounded-[20px] overflow-hidden min-h-[145px] sm:min-h-[155px] md:min-h-[165px] h-full shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
      {/* Left: Retro CRT Terminal with Fish Eye Effect (Fixed bounded container) */}
      <div className="terminal-section relative w-[52%] sm:w-[54%] lg:w-[56%] bg-[#030704] overflow-hidden">
        <div className="absolute inset-1.5 sm:inset-2">
          <RetroTerminal />
        </div>
      </div>

      {/* Right: Platforms Shipped Section (Yellow #FFC368) */}
      <div className="global-awards-section relative w-[48%] sm:w-[46%] lg:w-[44%] bg-[#FFC368] p-3.5 sm:p-4 lg:p-5 xl:p-6 flex flex-col justify-end">
        <CornerBracket color="dark" />
        <div className="flex flex-col items-start justify-end">
          <div className="font-syne font-extrabold text-[#111111] text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[42px] leading-none">
            3
          </div>
          <div className="font-dmsans font-semibold text-[#111111] text-[12.5px] sm:text-[13.5px] lg:text-[15px] xl:text-[17px] leading-[1.18] mt-1 sm:mt-1.5">
            Platforms<br />Web · iOS · Android
          </div>
        </div>
      </div>
    </div>
  );
};
