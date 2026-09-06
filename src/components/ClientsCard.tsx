import React from 'react';
import { CornerBracket } from './CornerBracket';

export const ClientsCard: React.FC = () => {
  return (
    <div className="relative group w-full sm:w-[175px] md:w-[195px] shrink-0 bg-[#515151] rounded-[20px] p-5 flex flex-col items-center justify-center min-h-[150px] md:min-h-[165px] transition-transform duration-300 hover:-translate-y-1 shadow-sm select-none">
      <CornerBracket color="white" />
      
      <div className="flex flex-col items-center justify-center gap-2.5">
        {/* Apple Logo SVG with leaf moved further up and to the left */}
        <svg
          className="w-8 h-8 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Apple Body */}
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
          {/* Apple Leaf moved further up and left */}
          <path
            d="M15.97 7.17c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.58.68-.99 1.74-.94 2.81 1.08.08 2.12-.6 2.72-1.35z"
            transform="translate(-1.5, -1.4)"
          />
        </svg>

        <span className="font-dmsans font-medium text-white text-[18px] tracking-tight">
          Clients
        </span>
      </div>
    </div>
  );
};
