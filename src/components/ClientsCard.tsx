import React from 'react';
import { Link } from 'react-router-dom';
import { CornerBracket } from './CornerBracket';

export const ClientsCard: React.FC = () => {
  return (
    <Link
      to="/experience"
      className="relative group w-full sm:w-[145px] md:w-[150px] lg:w-[175px] xl:w-[185px] shrink-0 h-full bg-[#334155] hover:bg-[#1E293B] rounded-[20px] p-3.5 sm:p-4 lg:px-4 lg:py-4.5 flex flex-col items-center justify-between min-h-[145px] sm:min-h-[155px] md:min-h-[165px] transition-all duration-300 hover:-translate-y-1 shadow-sm select-none"
    >
      <CornerBracket color="white" />

      {/* Top Status Tag */}
      <div className="w-full flex items-center justify-between px-0.5">
        <span className="font-mono text-[9.5px] lg:text-[10px] uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          Active Role
        </span>
        <span className="font-mono text-[9.5px] lg:text-[10px] text-slate-400">2026</span>
      </div>

      {/* Center Company Name */}
      <div className="flex flex-col items-center justify-center text-center my-auto px-0.5 max-w-full">
        <div className="font-syne font-extrabold text-white text-[16px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] tracking-tight group-hover:text-emerald-300 transition-colors">
          ARABWORK
        </div>
        <div className="font-dmsans text-slate-300 text-[11px] sm:text-[11.5px] lg:text-[12px] font-medium mt-0.5">
          Web & Mobile
        </div>
      </div>

      {/* Bottom Action Hint */}
      <div className="w-full flex items-center justify-center gap-1 text-[10.5px] lg:text-[11px] font-dmsans font-semibold text-slate-300 group-hover:text-white transition-colors">
        <span>Experience</span>
        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};
