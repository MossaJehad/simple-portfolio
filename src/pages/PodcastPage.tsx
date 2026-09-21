import React from 'react';
import { CornerBracket } from '../components/CornerBracket';

export const PodcastPage: React.FC = () => {
  return (
    <section aria-label="Featured Engineering Projects" className="flex-1 flex flex-col justify-between gap-[14px] min-w-0">
      {/* Top Heading + Subtitle */}
      <header className="relative flex items-start justify-between w-full select-none pt-0.5 pb-1 pr-1">
        <div>
          <h1 className="font-syne font-extrabold text-[#111111] text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.88] tracking-[-0.042em]">
            Projects
          </h1>
          <p className="font-dmsans text-[#6B7280] text-[12.5px] sm:text-[15px] font-medium mt-1">
            Full-stack platforms, low-level C graphics engines & data pipelines.
          </p>
        </div>
        <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black mt-1.5 sm:mt-2.5 mr-0.5 shrink-0" aria-hidden="true" />
      </header>

      {/* Middle Row: Featured Project — 42Wrapped */}
      <div className="relative group bg-[#7C6FF7] rounded-[20px] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-h-[175px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
        <CornerBracket color="white" />
        
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-mono font-semibold uppercase tracking-wider">
            <span>SYS.01 · Featured Platform</span>
            <span className="w-1 h-1 rounded-full bg-white" />
            <span>500+ Active Users</span>
          </div>
          <div className="font-syne font-extrabold text-white/85 text-[16px] mt-2">
            42Wrapped
          </div>
          <h2 className="font-syne font-bold text-white text-[22px] sm:text-[26px] leading-tight mt-0.5">
            Year-in-review platform for 42 School students
          </h2>
          <p className="font-dmsans text-white/85 text-[13px] sm:text-[14px] leading-snug mt-1.5">
            Automated analytics platform transforming raw student coding activity into personalized stories via 42 OAuth 2.0 and custom token queues.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {['Next.js', 'TypeScript', '42 API', 'OAuth 2.0', 'Data Viz'].map((t) => (
              <span key={t} className="text-[10.5px] font-mono text-white/90 bg-white/20 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:items-end gap-2 shrink-0">
          <a
            href="https://42wrapped.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#111111] hover:bg-slate-100 font-dmsans font-semibold text-[13px] shadow-md transition-all active:scale-95"
          >
            <span>Live Demo</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a
            href="https://github.com/MossaJehad/42Wrapped"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-white hover:bg-white/25 font-mono text-[11.5px] transition-colors"
          >
            <span>GitHub Repo</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Row: Cub3D (Mint) and Data Analysis (Yellow) */}
      <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
        {/* Cub3D Card */}
        <div className="relative group flex-1 bg-[#A7DAD5] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold text-[#111111]/75 uppercase">
              SRC.02 · C Systems
            </span>
            <span className="font-mono text-[10.5px] text-[#111111]/70 bg-black/10 px-2 py-0.5 rounded">
              60 FPS · MLX42
            </span>
          </div>
          <div className="mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[20px] sm:text-[22px] leading-tight">
              Cub3D
            </h3>
            <p className="font-dmsans text-[#111111]/85 text-[12.5px] sm:text-[13px] leading-snug mt-1">
              Real-time 3D raycasting engine written in C with DDA math, texture mapping, and collision physics without game engines.
            </p>
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
            <div className="flex gap-1">
              {['C', 'MLX42', 'Math'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-[#111111]/80 bg-black/10 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/MossaJehad/cub3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dmsans font-semibold text-[11.5px] text-[#111111] hover:underline inline-flex items-center gap-1"
            >
              <span>Repo</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* End-to-End Data Analysis Card */}
        <div className="relative group flex-1 bg-[#FFC368] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-sm transition-transform duration-300 hover:-translate-y-1 select-none">
          <CornerBracket color="dark" />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold text-[#111111]/75 uppercase">
              PIPE.03 · Analytics
            </span>
            <span className="font-mono text-[10.5px] text-[#111111]/70 bg-black/10 px-2 py-0.5 rounded">
              SQL → Power BI
            </span>
          </div>
          <div className="mt-2">
            <h3 className="font-syne font-bold text-[#111111] text-[20px] sm:text-[22px] leading-tight">
              Retail Data Pipeline
            </h3>
            <p className="font-dmsans text-[#111111]/85 text-[12.5px] sm:text-[13px] leading-snug mt-1">
              Multi-table SQL Server modeling, statistical Pandas analysis, and executive Power BI dashboards on retail data.
            </p>
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
            <div className="flex gap-1">
              {['Python', 'SQL', 'Power BI'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-[#111111]/80 bg-black/10 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://mavenshowcase.com/project/55011"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dmsans font-semibold text-[11.5px] text-[#111111] hover:underline inline-flex items-center gap-1"
            >
              <span>Showcase</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
