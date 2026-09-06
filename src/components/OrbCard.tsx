import React from 'react';
import { CornerBracket } from './CornerBracket';

export const OrbCard: React.FC = () => {
  return (
    <div className="relative group flex-1 bg-[#050505] rounded-[20px] flex items-center justify-center min-h-[150px] md:min-h-[165px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-sm select-none">
      <CornerBracket color="white" />

      {/* Iridescent Orb occupying ~45-50% of card height with seamless black blend */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
        <img
          src="/images/orb.jpg"
          alt="Iridescent Spectrum Sphere"
          className="max-h-[84px] w-auto object-contain mix-blend-screen scale-125 transition-transform duration-500 ease-out group-hover:scale-135 select-none pointer-events-none"
        />
      </div>
    </div>
  );
};
