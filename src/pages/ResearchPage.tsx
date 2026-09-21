import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

export const ResearchPage: React.FC = () => {
  return (
    <section aria-label="Technical Stack & Systems" className="flex-1 flex flex-col justify-start md:justify-between gap-[14px] min-w-0">
      {/* Top Heading */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <div>
          <h1 className="font-syne font-extrabold text-[#111111] text-[34px] sm:text-[54px] md:text-[72px] lg:text-[88px] leading-[0.88] tracking-[-0.042em]">
            Skills & Systems
          </h1>
          <p className="font-dmsans text-[#6B7280] text-[12.5px] sm:text-[15px] font-medium mt-1">
            Full-stack product delivery backed by 42 School systems and data analytics.
          </p>
        </div>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-1.5 sm:mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Frontend & Mobile + Systems & First Principles */}
      <div className="flex flex-col sm:flex-row gap-[14px] items-stretch">
        {/* Large Card: 01 Frontend & Mobile Architecture */}
        <div className="relative group flex-[1.4] bg-[#7C6FF7] rounded-[20px] p-4 sm:p-6 flex flex-col justify-between min-h-[180px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="flex items-center justify-between">
            <span className="font-syne font-extrabold text-white/80 text-[18px] tracking-wider">
              01
            </span>
            <span className="font-mono text-[10.5px] sm:text-[11px] text-white/80 bg-white/15 px-2 py-0.5 rounded">
              Web & Mobile
            </span>
          </div>
          <div className="mt-2.5 sm:mt-3">
            <h2 className="font-syne font-bold text-white text-[22px] sm:text-[28px] leading-tight">
              Frontend & Mobile
            </h2>
            <p className="font-dmsans text-white/90 text-[13px] sm:text-[14.5px] leading-relaxed mt-1 sm:mt-1.5 max-w-md">
              Building production web applications in React & Next.js, extending shared business logic and typed component patterns to React Native for iOS & Android.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2.5 sm:mt-3">
              {['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="text-[10px] sm:text-[10.5px] font-mono text-white/90 bg-white/15 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 02: Systems & First Principles (Mint) */}
        <div className="relative group flex-1 bg-[#A7DAD5] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[190px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-syne font-extrabold text-[#111111]/70 text-[18px] tracking-wider">
              02
            </span>
            <span className="font-mono text-[11px] text-[#111111]/70 bg-black/10 px-2 py-0.5 rounded">
              42 School
            </span>
          </div>
          <div className="mt-3">
            <h2 className="font-syne font-bold text-[#111111] text-[22px] sm:text-[24px] leading-tight">
              Systems & Graphics
            </h2>
            <p className="font-dmsans text-[#111111]/85 text-[13px] sm:text-[14px] leading-snug mt-1.5">
              C/C++ memory management, raycasting algorithms, graphics pipelines, and debugging from the lower levels up.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {['C', 'C++', 'MLX42', 'Algorithms', 'Linux'].map((tech) => (
                <span key={tech} className="text-[10.5px] font-mono text-[#111111]/80 bg-black/10 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Backend & Monorepos + Data & BI Card */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Card 03: Backend & Monorepos (Yellow) */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[155px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-syne font-extrabold text-[#111111]/70 text-[17px]">
              03
            </span>
            <span className="font-mono text-[10.5px] text-[#111111]/70 bg-black/10 px-2 py-0.5 rounded">
              Backend & Infra
            </span>
          </div>
          <div className="mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[20px] sm:text-[22px] leading-tight">
              Backend & Monorepos
            </h3>
            <p className="font-dmsans text-[#111111]/80 text-[13px] leading-snug mt-1">
              Node.js services, REST APIs, and monorepos that unify web and mobile codebases for speed and reliability.
            </p>
          </div>
        </div>

        {/* Visual Data Lab Card with Orb (Black #050505) */}
        <div className="relative group flex-1 bg-[#050505] rounded-[20px] p-5 sm:p-6 flex items-center justify-between min-h-[155px] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="white" />
          <div className="flex flex-col justify-end z-10 max-w-[200px]">
            <span className="font-mono text-[10.5px] text-sky-400 font-semibold uppercase tracking-wider">
              04 · Data & BI
            </span>
            <div className="font-syne font-bold text-white text-[19px] sm:text-[21px] leading-tight mt-1">
              Analytics Pipelines
            </div>
            <div className="font-dmsans text-white/80 text-[12.5px] mt-1 leading-snug">
              SQL Server, Pandas, and executive Power BI dashboards.
            </div>
          </div>
          <img
            src="/images/orb.jpg"
            alt="Spectral Study Orb"
            className="max-h-[90px] w-auto object-contain mix-blend-screen scale-125 select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
