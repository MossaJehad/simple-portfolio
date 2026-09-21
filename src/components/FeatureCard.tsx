import React from 'react';
import { CornerBracket } from './CornerBracket';

export const FeatureCard: React.FC = () => {
  return (
    <div className="relative group flex-1 rounded-[20px] overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0B0F19] min-h-[175px] lg:min-h-[190px] h-full p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm border border-slate-700/40 select-none">
      <CornerBracket color="white" />

      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" 
        aria-hidden="true" 
      />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between gap-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] lg:text-[11px] font-semibold tracking-wider text-sky-400 uppercase bg-sky-950/80 border border-sky-800/50 px-2 py-0.5 rounded-full">
            SYS.01 · Featured
          </span>
          <span className="flex items-center gap-1 text-[10px] lg:text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            500+ Users
          </span>
        </div>

        <a
          href="https://github.com/MossaJehad/42Wrapped"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors p-1 shrink-0"
          title="View GitHub Repository"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>

      {/* Middle Title & Description */}
      <div className="relative z-10 my-2">
        <h3 className="font-syne font-bold text-white text-[21px] sm:text-[23px] lg:text-[26px] leading-tight tracking-tight flex items-center gap-1.5 flex-wrap">
          <span>42Wrapped</span>
          <span className="text-[12px] sm:text-[13px] font-dmsans font-normal text-sky-300/80">
            · Student Analytics
          </span>
        </h3>
        <p className="font-dmsans text-slate-300 text-[12.5px] sm:text-[13px] lg:text-[13.5px] leading-snug mt-1 line-clamp-2 max-w-lg">
          Automated analytics platform transforming raw student coding activity into personalized annual stories with OAuth 2.0.
        </p>
      </div>

      {/* Bottom Row: Tech Tags & Live Link */}
      <div className="relative z-10 flex items-center justify-between gap-1 pt-1 border-t border-slate-800/80">
        <div className="flex flex-wrap items-center gap-1">
          {['Next.js', 'TypeScript', '42 API'].map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-mono text-slate-300 bg-white/10 px-1.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://42wrapped.up.railway.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11.5px] lg:text-[12px] font-dmsans font-semibold text-sky-400 hover:text-sky-300 transition-colors shrink-0"
        >
          <span>Live App</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
};
