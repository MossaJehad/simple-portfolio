import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

interface Role {
  company: string;
  title: string;
  period: string;
  tags: string[];
  description: string;
}

const experiences: Role[] = [
  {
    company: 'ARABWORK',
    title: 'Frontend Developer (Web & Mobile)',
    period: 'Feb 2026 — Present',
    tags: ['React', 'React Native', 'Next.js', 'TypeScript', 'Monorepo'],
    description:
      'Developing cross-platform production apps across Web, iOS, and Android. Building shared component libraries in a unified monorepo.',
  },
  {
    company: 'Telmeeth Solutions',
    title: 'React.js Developer',
    period: 'Oct 2025 — Feb 2026',
    tags: ['React', 'TypeScript', 'Monorepo', 'REST APIs'],
    description:
      'Architected a B2B School Management System from scratch. Refactored B2C web platform architecture for high rendering performance.',
  },
  {
    company: 'Sajilni',
    title: 'Software Developer',
    period: 'May 2025 — Sep 2025',
    tags: ['React', 'Next.js', 'JavaScript', 'Performance'],
    description:
      'Engineered production frontend features and optimized component rendering cycles & asset loading for smoother UX.',
  },
];

export const ClientsPage: React.FC = () => {
  return (
    <section aria-label="Professional Experience" className="flex-1 flex flex-col justify-between gap-[14px] min-w-0">
      {/* Top Heading */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <div>
          <h1 className="font-syne font-extrabold text-[#111111] text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.88] tracking-[-0.042em]">
            Experience
          </h1>
          <p className="font-dmsans text-[#6B7280] text-[12.5px] sm:text-[15px] font-medium mt-1">
            Shipping cross-platform production apps & maintainable monorepos.
          </p>
        </div>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-1.5 sm:mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Experience Cards List + Vertical Stats Pill */}
      <div className="flex flex-col sm:flex-row gap-[14px] items-stretch">
        {/* Large Card: Roles & Companies */}
        <div className="relative group flex-1 bg-[#1E293B] rounded-[20px] p-4 sm:p-6 flex flex-col justify-between min-h-[220px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          
          <div className="flex items-center justify-between border-b border-slate-700/70 pb-2 mb-3">
            <span className="font-mono text-[10.5px] sm:text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
              Track Record
            </span>
            <span className="font-mono text-[10.5px] sm:text-[11px] text-slate-400">
              Amman, Jordan
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {experiences.map((exp) => (
              <div key={exp.company} className="flex flex-col gap-1 group/item">
                <div className="flex items-center justify-between gap-1.5 sm:gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 className="font-syne font-bold text-white text-[15px] sm:text-[17px] tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="text-[11.5px] sm:text-[12px] font-dmsans text-slate-300">
                      — {exp.title}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] font-dmsans text-slate-300 leading-snug">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Stats Pill (Mint & Purple) */}
        <div className="relative w-full sm:w-[175px] md:w-[195px] shrink-0 flex flex-row sm:flex-col rounded-[20px] overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] select-none">
          {/* Top/Left Section: Years Experience */}
          <div className="relative bg-[#A7DAD5] w-1/2 sm:w-full h-auto sm:h-1/2 p-4 sm:px-5 sm:py-4 flex flex-col justify-center">
            <CornerBracket color="dark" />
            <div className="font-syne font-extrabold text-[#111111] text-[30px] sm:text-[38px] lg:text-[42px] leading-none">
              2+
            </div>
            <div className="font-dmsans font-medium text-[#111111] text-[14px] sm:text-[17px] lg:text-[18px] leading-tight mt-1">
              Years Building<br className="hidden sm:inline" /> Software
            </div>
          </div>

          {/* Bottom/Right Section: Production Apps */}
          <div className="relative bg-[#9B7FD4] w-1/2 sm:w-full h-auto sm:h-1/2 p-4 sm:px-5 sm:py-4 flex flex-col justify-center">
            <CornerBracket color="white" />
            <div className="font-syne font-extrabold text-white text-[30px] sm:text-[38px] lg:text-[42px] leading-none">
              6+
            </div>
            <div className="font-dmsans font-medium text-white text-[14px] sm:text-[16px] lg:text-[17px] leading-tight mt-1">
              Production<br className="hidden sm:inline" /> Apps Shipped
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Editorial Impact Cards */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Yellow Card: Cross-Platform */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[145px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="font-syne font-extrabold text-[#111111] text-[36px] leading-none">
            3
          </div>
          <div className="font-dmsans font-semibold text-[#111111] text-[14.5px] sm:text-[15.5px] leading-snug mt-1">
            Platforms unified in monorepos: Web, iOS, and Android.
          </div>
        </div>

        {/* Purple Card: Users Reached */}
        <div className="relative group flex-1 bg-[#7C6FF7] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[145px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="font-syne font-extrabold text-white text-[36px] leading-none">
            500+
          </div>
          <div className="font-dmsans font-medium text-white/95 text-[14.5px] sm:text-[15.5px] leading-snug mt-1">
            Active student users reached via automated analytics platforms.
          </div>
        </div>
      </div>
    </section>
  );
};
