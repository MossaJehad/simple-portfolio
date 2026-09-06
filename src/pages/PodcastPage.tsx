import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

export const PodcastPage: React.FC = () => {
  return (
    <section aria-label="Design Podcast" className="flex-1 flex flex-col justify-between gap-[14px] min-w-0">
      {/* Top Heading + Subtitle */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <div>
          <h1 className="font-syne font-extrabold text-[#111111] text-[56px] sm:text-[72px] md:text-[86px] lg:text-[100px] leading-[0.85] tracking-[-0.042em]">
            Podcast
          </h1>
          <p className="font-dmsans text-[#6B7280] text-[14px] sm:text-[16px] font-medium mt-1">
            Conversations about design, creativity and digital products.
          </p>
        </div>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Featured Episode EP. 24 */}
      <div className="relative group bg-[#7C6FF7] rounded-[20px] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-h-[175px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
        <CornerBracket color="white" />
        
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[12px] font-dmsans font-semibold uppercase tracking-wider">
            <span>Featured Episode</span>
            <span className="w-1 h-1 rounded-full bg-white" />
            <span>42 min</span>
          </div>
          <div className="font-syne font-extrabold text-white/80 text-[18px] mt-3">
            EP. 24
          </div>
          <h2 className="font-syne font-bold text-white text-[26px] sm:text-[30px] leading-tight mt-1">
            Designing Products People Remember
          </h2>
        </div>

        {/* Circular Play Button consistent with Flamingo card */}
        <button
          type="button"
          aria-label="Play Episode 24"
          className="w-[60px] h-[60px] shrink-0 rounded-full bg-white/90 backdrop-blur-[2px] shadow-[0_4px_18px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5 text-[#111111]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M 9.5 8.2 C 9.5 7.3 10.5 6.7 11.3 7.2 L 18.2 11.1 C 19.0 11.5 19.0 12.5 18.2 12.9 L 11.3 16.8 C 10.5 17.3 9.5 16.7 9.5 15.8 Z" />
          </svg>
        </button>
      </div>

      {/* Bottom Row: EP. 23 (Mint) and EP. 22 (Yellow) */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Episode 23 Card */}
        <div className="relative group flex-1 bg-[#A7DAD5] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[155px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-syne font-bold text-[#111111]/70 text-[16px]">EP. 23</span>
            <span className="font-dmsans text-[#111111]/60 text-[12px] font-medium mr-5">36 min</span>
          </div>
          <div className="flex items-end justify-between mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[20px] sm:text-[22px] leading-tight max-w-[200px]">
              Why Good Interfaces Feel Invisible
            </h3>
            <button
              type="button"
              aria-label="Play Episode 23"
              className="w-[42px] h-[42px] rounded-full bg-white/90 shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-108 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#111111]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 9.5 8.2 C 9.5 7.3 10.5 6.7 11.3 7.2 L 18.2 11.1 C 19.0 11.5 19.0 12.5 18.2 12.9 L 11.3 16.8 C 10.5 17.3 9.5 16.7 9.5 15.8 Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Episode 22 Card */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[155px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-syne font-bold text-[#111111]/70 text-[16px]">EP. 22</span>
            <span className="font-dmsans text-[#111111]/60 text-[12px] font-medium mr-5">51 min</span>
          </div>
          <div className="flex items-end justify-between mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[20px] sm:text-[22px] leading-tight max-w-[200px]">
              Building Better Creative Systems
            </h3>
            <button
              type="button"
              aria-label="Play Episode 22"
              className="w-[42px] h-[42px] rounded-full bg-white/90 shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-108 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#111111]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 9.5 8.2 C 9.5 7.3 10.5 6.7 11.3 7.2 L 18.2 11.1 C 19.0 11.5 19.0 12.5 18.2 12.9 L 11.3 16.8 C 10.5 17.3 9.5 16.7 9.5 15.8 Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
