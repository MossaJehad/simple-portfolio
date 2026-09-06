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
        <span className="font-dmsans font-semibold text-[17px] text-[#111111] tracking-tight">
          About Me
        </span>
      </div>

      {/* Custom S-Curved Purple Silhouette Card */}
      <div className="relative w-full h-full min-h-[510px] flex flex-col justify-between overflow-hidden">
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
        <div className="relative z-10 pt-16 pb-6 px-6 sm:px-7 flex flex-col justify-between h-full">
          {/* Profile Visual Graphic Area */}
          <div className="relative flex items-center justify-center pt-1 pb-1">
            {/* Pink/Lilac Graphic Background Circle */}
            <div
              className="absolute w-[184px] h-[184px] rounded-full bg-[#EAAED4] -top-1 right-5 pointer-events-none"
              aria-hidden="true"
            />

            {/* Translucent Light Ring */}
            <div
              className="absolute w-[186px] h-[186px] rounded-full border-2 border-white/45 pointer-events-none"
              aria-hidden="true"
            />

            {/* Profile Photo Circular Crop */}
            <div className="relative z-10 w-[168px] h-[168px] rounded-full border-[3.5px] border-white shadow-xl overflow-hidden bg-neutral-200">
              <img
                src="/images/profile.avif"
                alt="Jon Daniel"
                className="w-full h-full object-cover object-[52%_18%] select-none pointer-events-none"
                style={{ filter: 'grayscale(100%) contrast(1.06)' }}
              />
            </div>
          </div>

          {/* Name Section */}
          <div className="mt-3 px-1 text-left select-none">
            <div className="font-syne font-normal text-white text-[36px] sm:text-[38px] leading-tight">
              I'm,
            </div>
            <div className="font-syne font-bold text-white text-[50px] sm:text-[56px] leading-[0.94] tracking-tight mt-0.5">
              Jon<br />Daniel
            </div>
          </div>

          {/* Footer Area: Email + Spinning Vinyl Record Badge */}
          <div className="mt-7 flex items-end justify-between gap-4 pt-1">
            {/* Email with mail icon & dotted underline */}
            <div className="flex flex-col items-start pb-1">
              <a
                href="mailto:inquiry@jondaniel.design"
                className="group inline-flex items-center gap-1.5 text-white/90 hover:text-white text-[13px] font-dmsans font-medium transition-colors"
              >
                <span>inquiry@jondaniel.design</span>
                <svg
                  className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors"
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
              <div className="w-[175px] border-b border-dotted border-white/50 mt-1" />
            </div>

            {/* Rotating Vinyl Record Badge */}
            <div
              className="relative w-[78px] h-[78px] shrink-0 flex items-center justify-center select-none"
              title="My Design Portfolio · 2025"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-vinyl-spin origin-center drop-shadow-md"
                aria-label="My Design Portfolio 2025 Vinyl Record Badge"
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
                  className="text-[6.8px] fill-[#F1F1F5] font-syne font-bold uppercase tracking-[0.16em]"
                >
                  <textPath href="#vinylTextPath" startOffset="50%" textAnchor="middle">
                    MY DESIGN PORTFOLIO · 2025 ·
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
