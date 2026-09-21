import React from 'react';
import { CornerBracket } from './CornerBracket';

export const OrbAwardsPill: React.FC = () => {
  return (
    <div className="awards-pill relative flex-1 flex flex-row rounded-[20px] overflow-hidden min-h-[145px] sm:min-h-[155px] md:min-h-[165px] h-full shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
      {/* Left: Orb Section (Pure Black #050505) */}
      <div className="orb-section relative w-[38%] sm:w-[40%] lg:w-[42%] bg-[#050505] flex items-center justify-center overflow-hidden p-2">
        <CornerBracket color="white" />
        <img
          src="/images/orb.jpg"
          alt="Iridescent Spectrum Sphere"
          className="max-h-[72px] sm:max-h-[80px] lg:max-h-[86px] w-auto object-contain mix-blend-screen scale-125 transition-transform duration-500 ease-out hover:scale-135 select-none pointer-events-none"
        />
      </div>

      {/* Right: Platforms Shipped Section (Yellow #FFC368) */}
      <div className="global-awards-section relative w-[62%] sm:w-[60%] lg:w-[58%] bg-[#FFC368] p-3.5 sm:p-4 lg:p-5 xl:p-6 flex flex-col justify-end">
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
