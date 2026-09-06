import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

export const ResearchPage: React.FC = () => {
  return (
    <section aria-label="Design Research" className="flex-1 flex flex-col justify-between gap-[14px] min-w-0">
      {/* Top Heading */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <h1 className="font-syne font-extrabold text-[#111111] text-[56px] sm:text-[72px] md:text-[86px] lg:text-[100px] leading-[0.85] tracking-[-0.042em]">
          Research
        </h1>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Large Feature Study + Case Study 02 */}
      <div className="flex flex-col sm:flex-row gap-[14px] items-stretch">
        {/* Large Feature Card: 01 Digital Product Research */}
        <div className="relative group flex-[1.4] bg-[#7C6FF7] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between min-h-[190px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="font-syne font-extrabold text-white/80 text-[20px] tracking-wider">
            01
          </div>
          <div className="mt-4">
            <h2 className="font-syne font-bold text-white text-[28px] sm:text-[32px] leading-tight">
              Digital Product Research
            </h2>
            <p className="font-dmsans text-white/85 text-[15px] sm:text-[16px] leading-relaxed mt-2 max-w-md">
              Understanding how users interact with digital tools through behavioral analysis, cognition heuristics, and interface telemetry.
            </p>
          </div>
        </div>

        {/* Card 02: Design Systems (Mint) */}
        <div className="relative group flex-1 bg-[#A7DAD5] rounded-[20px] p-6 flex flex-col justify-between min-h-[190px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="font-syne font-extrabold text-[#111111]/70 text-[20px] tracking-wider">
            02
          </div>
          <div className="mt-4">
            <h2 className="font-syne font-bold text-[#111111] text-[26px] leading-tight">
              Design Systems
            </h2>
            <p className="font-dmsans text-[#111111]/85 text-[15px] leading-snug mt-2">
              Exploring scalable visual architecture, design tokens, and modular multi-platform component libraries.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row: Interaction Studies + Visual Research Card */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Card 03: Interaction Studies (Yellow) */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[155px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="font-syne font-extrabold text-[#111111]/70 text-[18px]">
            03
          </div>
          <div className="mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[22px] sm:text-[24px] leading-tight">
              Interaction Studies
            </h3>
            <p className="font-dmsans text-[#111111]/80 text-[14px] sm:text-[15px] leading-snug mt-1">
              Researching spatial motion physics, haptic feedback, and fluid interface behavior.
            </p>
          </div>
        </div>

        {/* Visual Lab Card with Orb (Black #050505) */}
        <div className="relative group flex-1 bg-[#050505] rounded-[20px] p-5 sm:p-6 flex items-center justify-between min-h-[155px] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="flex flex-col justify-end z-10">
            <div className="font-syne font-extrabold text-white text-[38px] leading-none">
              18+
            </div>
            <div className="font-dmsans font-medium text-white/80 text-[14px] sm:text-[15px] mt-1.5">
              Published Lab Papers<br />& Experimental Prototypes.
            </div>
          </div>
          <img
            src="/images/orb.jpg"
            alt="Spectral Study Orb"
            className="max-h-[95px] w-auto object-contain mix-blend-screen scale-125 select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
