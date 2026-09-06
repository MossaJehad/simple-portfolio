import React from 'react';
import { CornerBracket } from './CornerBracket';

export const OrbAwardsPill: React.FC = () => {
  return (
    <div className="awards-pill relative flex-1 flex flex-row rounded-[20px] overflow-hidden min-h-[150px] md:min-h-[165px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
      {/* Left: Orb Section (Pure Black #050505, ~44% width) */}
      <div className="orb-section relative w-[44%] bg-[#050505] flex items-center justify-center overflow-hidden p-2">
        <CornerBracket color="white" />
        <img
          src="/images/orb.jpg"
          alt="Iridescent Spectrum Sphere"
          className="max-h-[86px] w-auto object-contain mix-blend-screen scale-125 transition-transform duration-500 ease-out hover:scale-135 select-none pointer-events-none"
        />
      </div>

      {/* Right: Global Design Awards Section (Yellow #FFC368, ~56% width) - Zero gap flat boundary */}
      <div className="global-awards-section relative w-[56%] bg-[#FFC368] p-5 sm:p-6 flex flex-col justify-end">
        <CornerBracket color="dark" />
        <div className="flex flex-col items-start justify-end">
          <div className="font-syne font-extrabold text-[#111111] text-[38px] sm:text-[42px] leading-none">
            172
          </div>
          <div className="font-dmsans font-semibold text-[#111111] text-[15px] sm:text-[17px] leading-[1.18] mt-1.5">
            Global Design<br />Awards.
          </div>
        </div>
      </div>
    </div>
  );
};
