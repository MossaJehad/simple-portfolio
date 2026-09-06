import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

const clients = [
  'Apple',
  'Nike',
  'Adobe',
  'Spotify',
  'Airbnb',
  'Google',
];

export const ClientsPage: React.FC = () => {
  return (
    <section aria-label="Clients Showcase" className="flex-1 flex flex-col justify-between gap-[14px] min-w-0">
      {/* Top Heading */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <h1 className="font-syne font-extrabold text-[#111111] text-[56px] sm:text-[72px] md:text-[86px] lg:text-[100px] leading-[0.85] tracking-[-0.042em]">
          Clients
        </h1>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Selected Clients Showcase Grid + Vertical Stats Pill */}
      <div className="flex flex-col sm:flex-row gap-[14px] items-stretch">
        {/* Large Card: Selected Clients */}
        <div className="relative group flex-1 bg-[#515151] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between min-h-[190px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="font-dmsans font-medium text-white/70 text-[14px] uppercase tracking-wider">
            Selected Clients
          </div>

          {/* Clean Typographic Client Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mt-3">
            {clients.map((client) => (
              <div
                key={client}
                className="font-syne font-bold text-white text-[20px] sm:text-[22px] tracking-tight hover:text-[#A7DAD5] transition-colors"
              >
                {client}
              </div>
            ))}
          </div>

          <div className="font-dmsans text-white/60 text-[13px] mt-3">
            Global partners across consumer tech, media, and digital platforms.
          </div>
        </div>

        {/* Vertical Dual Stats Pill (Mint & Purple) */}
        <div className="relative w-full sm:w-[175px] md:w-[195px] shrink-0 flex flex-col rounded-[20px] overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] select-none">
          {/* Top Section: Projects */}
          <div className="relative bg-[#A7DAD5] h-1/2 px-5 py-4 flex flex-col justify-center">
            <CornerBracket color="dark" />
            <div className="font-syne font-extrabold text-[#111111] text-[38px] sm:text-[42px] leading-none">
              251
            </div>
            <div className="font-dmsans font-medium text-[#111111] text-[18px] sm:text-[19px] leading-tight mt-1">
              Projects
            </div>
          </div>

          {/* Bottom Section: Collaborations */}
          <div className="relative bg-[#9B7FD4] h-1/2 px-5 py-4 flex flex-col justify-center">
            <CornerBracket color="white" />
            <div className="font-syne font-extrabold text-white text-[38px] sm:text-[42px] leading-none">
              48
            </div>
            <div className="font-dmsans font-medium text-white text-[16px] sm:text-[17px] leading-tight mt-1">
              Long-term<br />Collaborations
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Editorial Client Impact Cards */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Yellow Card: Global Reach */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[150px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="font-syne font-extrabold text-[#111111] text-[38px] leading-none">
            14
          </div>
          <div className="font-dmsans font-semibold text-[#111111] text-[15px] sm:text-[16px] leading-snug mt-1">
            Countries with deployed design solutions & client teams.
          </div>
        </div>

        {/* Purple Card: Client Satisfaction */}
        <div className="relative group flex-1 bg-[#7C6FF7] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[150px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="font-syne font-extrabold text-white text-[38px] leading-none">
            98%
          </div>
          <div className="font-dmsans font-medium text-white/90 text-[15px] sm:text-[16px] leading-snug mt-1">
            Repeat client engagement on multi-year roadmap initiatives.
          </div>
        </div>
      </div>
    </section>
  );
};
