import React from 'react';
import { CornerBracket } from './CornerBracket';

export const StatsColumn: React.FC = () => {
  return (
    <div className="stats-pill relative w-full sm:w-[145px] md:w-[150px] lg:w-[175px] xl:w-[185px] shrink-0 h-full flex flex-row sm:flex-col rounded-[20px] overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] select-none">
      {/* Top / Left Section: Users Reached (Mint Aqua #A7DAD5) */}
      <div className="projects-section relative bg-[#A7DAD5] w-1/2 sm:w-full h-auto sm:h-1/2 p-3.5 sm:p-4 lg:px-5 lg:py-4 flex flex-col justify-center">
        <CornerBracket color="dark" />
        <div className="font-syne font-extrabold text-[#111111] text-[30px] sm:text-[34px] lg:text-[38px] xl:text-[40px] leading-none">
          500+
        </div>
        <div className="font-dmsans font-medium text-[#111111] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight mt-1">
          Users Reached
        </div>
      </div>

      {/* Bottom / Right Section: Apps Shipped (Purple #9B7FD4) */}
      <div className="awards-section relative bg-[#9B7FD4] w-1/2 sm:w-full h-auto sm:h-1/2 p-3.5 sm:p-4 lg:px-5 lg:py-4 flex flex-col justify-center">
        <CornerBracket color="white" />
        <div className="font-syne font-extrabold text-white text-[30px] sm:text-[34px] lg:text-[38px] xl:text-[40px] leading-none">
          6+
        </div>
        <div className="font-dmsans font-medium text-white text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-tight mt-1">
          Apps Shipped
        </div>
      </div>
    </div>
  );
};
