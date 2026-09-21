import React from 'react';
import { CornerBracket } from './CornerBracket';

export const AwardsCard: React.FC = () => {
  return (
    <div className="relative group flex-[1.25] bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-end min-h-[150px] md:min-h-[165px] transition-transform duration-300 hover:-translate-y-1 shadow-sm select-none">
      <CornerBracket color="dark" />

      <div className="flex flex-col items-start justify-end">
        <div className="font-syne font-extrabold text-[#111111] text-[38px] sm:text-[42px] leading-none">
          3
        </div>
        <div className="font-dmsans font-semibold text-[#111111] text-[15px] sm:text-[17px] leading-[1.18] mt-1.5">
          Platforms<br />Web · iOS · Android
        </div>
      </div>
    </div>
  );
};
