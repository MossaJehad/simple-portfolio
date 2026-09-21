import React from 'react';

export const AboutCard: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-between w-full md:w-[36%] lg:w-[37%] shrink-0 transition-transform duration-300 hover:-translate-y-1 select-none">
      {/* "About Me" Label sitting in the negative white area above the lower flat top */}
      <div className="absolute top-[13px] left-[14px] z-20 flex items-center gap-2 select-none pointer-events-none">
        {/* 4-diamond cross decorative icon */}
        <svg
          className="w-4 h-4 text-[#111111] shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
        </svg>
        <span className="font-dmsans font-semibold text-[16px] sm:text-[17px] text-[#111111] tracking-tight">
          About Me
        </span>
      </div>

      {/* Custom S-Curved Purple Silhouette Card */}
      <div className="relative w-full h-full min-h-[480px] lg:min-h-[510px] flex flex-col justify-between overflow-hidden">
        {/* SVG Background Path with Organic S-Curve Ramp */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 380 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="aboutSClip" clipPathUnits="userSpaceOnUse">
              <path d="M 0,68 A 20,20 0 0,1 20,48 L 135,48 C 155,48 155,0 175,0 L 360,0 A 20,20 0 0,1 380,20 L 380,500 A 20,20 0 0,1 360,520 L 20,520 A 20,20 0 0,1 0,500 Z" />
            </clipPath>
          </defs>
          <path
            d="M 0,68 A 20,20 0 0,1 20,48 L 135,48 C 155,48 155,0 175,0 L 360,0 A 20,20 0 0,1 380,20 L 380,500 A 20,20 0 0,1 360,520 L 20,520 A 20,20 0 0,1 0,500 Z"
            fill="#7C6FF7"
          />
        </svg>

        {/* Card Content Area */}
        <div className="relative z-10 pt-14 pb-5 px-5 sm:pt-16 sm:pb-6 lg:pt-16 lg:pb-6 lg:px-7 flex flex-col justify-between h-full">
          {/* Profile Visual Graphic Area */}
          <div className="relative flex items-center justify-center pt-1 pb-1">
            {/* Pink/Lilac Graphic Background Circle */}
            <div
              className="absolute w-[155px] h-[155px] lg:w-[184px] lg:h-[184px] rounded-full bg-[#EAAED4] -top-1 right-4 sm:right-5 pointer-events-none"
              aria-hidden="true"
            />

            {/* Translucent Light Ring */}
            <div
              className="absolute w-[157px] h-[157px] lg:w-[186px] lg:h-[186px] rounded-full border-2 border-white/45 pointer-events-none"
              aria-hidden="true"
            />

            {/* Profile Photo Circular Crop */}
            <div className="relative z-10 w-[142px] h-[142px] lg:w-[168px] lg:h-[168px] rounded-full border-[3.5px] border-white shadow-xl overflow-hidden bg-neutral-200">
              <img
                src="/images/avatar.jpg"
                alt="Mousa Hasoneh"
                className="w-full h-full object-cover object-[50%_25%] select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Name Section */}
          <div className="mt-2.5 lg:mt-3 px-1 text-left select-none">
            <div className="font-syne font-normal text-white/90 text-[24px] lg:text-[28px] leading-tight">
              I'm,
            </div>
            <div className="font-syne font-bold text-white text-[38px] sm:text-[42px] lg:text-[48px] leading-[0.95] tracking-tight mt-0.5">
              Mousa<br />Hasoneh
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 lg:mt-2 font-dmsans text-white/85 text-[12px] lg:text-[13px] font-medium flex-wrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Software Engineer · Amman</span>
            </div>
          </div>

          {/* Footer Area: Email + Quick Links + Spinning Vinyl Record Badge */}
          <div className="mt-4 sm:mt-5 flex items-end justify-between gap-2 lg:gap-2.5 pt-1">
            {/* Email with mail icon & links */}
            <div className="flex flex-col items-start pb-1 min-w-0 flex-1">
              <a
                href="mailto:Moosa.Jehad65@gmail.com"
                className="group inline-flex items-center gap-1 text-white/95 hover:text-white text-[11.5px] lg:text-[12px] font-dmsans font-medium transition-colors truncate max-w-full"
              >
                <span className="truncate">Moosa.Jehad65@gmail.com</span>
                <svg
                  className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <div className="w-full max-w-[185px] border-b border-dotted border-white/50 mt-1 mb-1.5 sm:mb-2" />

              {/* Quick Social & Resume Channels */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <a
                  href="https://github.com/MossaJehad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-white/15 hover:bg-white/25 text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mossa-jehad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-white/15 hover:bg-white/25 text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="/Mousa Hasoneh.pdf"
                  download
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/15 hover:bg-white/25 text-white text-[10.5px] lg:text-[11px] font-dmsans font-medium transition-colors"
                  title="Download Resume"
                >
                  <span>CV</span>
                  <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Rotating Vinyl Record Badge */}
            <div
              className="relative w-[66px] h-[66px] lg:w-[76px] lg:h-[76px] xl:w-[78px] xl:h-[78px] shrink-0 flex items-center justify-center select-none"
              title="Mousa Hasoneh · Software Engineer"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-vinyl-spin origin-center drop-shadow-md"
                aria-label="Mousa Hasoneh Software Engineer Vinyl Record Badge"
              >
                {/* Outer Vinyl Body */}
                <circle cx="50" cy="50" r="48" fill="#111111" />

                {/* Vinyl Grooves */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#262626" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="36" fill="none" stroke="#202020" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#262626" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="21" fill="none" stroke="#1c1c1c" strokeWidth="0.8" />

                {/* Circular Path for Text */}
                <defs>
                  <path
                    id="vinylTextPath"
                    d="M 50,82 a 32,32 0 1,1 0.1,0"
                    fill="none"
                  />
                </defs>

                {/* Text around circle */}
                <text
                  className="text-[7.2px] fill-[#F1F1F5] font-syne font-bold uppercase tracking-[0.16em]"
                >
                  <textPath href="#vinylTextPath" startOffset="50%" textAnchor="middle">
                    MOUSA HASONEH · SOFTWARE ENGINEER ·
                  </textPath>
                </text>

                {/* Center Record Label & Spindle Hole */}
                <circle cx="50" cy="50" r="9" fill="#FFFFFF" />
                <circle cx="50" cy="50" r="2.6" fill="#111111" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
