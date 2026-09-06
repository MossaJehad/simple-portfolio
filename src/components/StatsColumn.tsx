import React from 'react';
import { CornerBracket } from './CornerBracket';

export const StatsColumn: React.FC = () => {
  return (
    <div className="stats-pill relative w-[165px] lg:w-[185px] shrink-0 h-full flex flex-col rounded-[20px] overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] select-none">
      {/* Top Section: Projects (Mint Aqua #A7DAD5) - 50% height */}
      <div className="projects-section relative bg-[#A7DAD5] h-1/2 px-5 py-4 flex flex-col justify-center">
        <CornerBracket color="dark" />
        <div className="font-syne font-extrabold text-[#111111] text-[38px] sm:text-[42px] leading-none">
          251
        </div>
        <div className="font-dmsans font-medium text-[#111111] text-[18px] sm:text-[20px] leading-tight mt-1">
          Projects
        </div>
      </div>

      {/* Bottom Section: Awards (Purple #9B7FD4) - 50% height, zero gap direct transition */}
      <div className="awards-section relative bg-[#9B7FD4] h-1/2 px-5 py-4 flex flex-col justify-center">
        <CornerBracket color="white" />
        <div className="font-syne font-extrabold text-white text-[38px] sm:text-[42px] leading-none">
          156
        </div>
        <div className="font-dmsans font-medium text-white text-[18px] sm:text-[20px] leading-tight mt-1">
          Awards
        </div>
      </div>
    </div>
  );
};
