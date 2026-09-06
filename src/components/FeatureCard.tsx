import React from 'react';

export const FeatureCard: React.FC = () => {
  return (
    <div className="relative group flex-1 rounded-[20px] overflow-hidden bg-[#F3F8F7] min-h-[175px] md:min-h-[190px] flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-neutral-100/60">
      {/* Flamingo Image with tropical flowers and foliage */}
      <img
        src="/images/flamingo.png"
        alt="Pastel Tropical Flamingo Feature"
        className="w-full h-full object-cover object-[center_42%] scale-[1.24] mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.28] select-none pointer-events-none"
      />

      {/* Centered Semi-Transparent Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <button
          type="button"
          aria-label="Play feature video"
          className="w-[60px] h-[60px] rounded-full bg-white/90 backdrop-blur-[2px] shadow-[0_4px_18px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-300 group-hover:scale-108 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
        >
          {/* Optically Centered Black Triangular Play Icon */}
          <svg
            className="w-5 h-5 text-[#111111]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M 9.5 8.2 C 9.5 7.3 10.5 6.7 11.3 7.2 L 18.2 11.1 C 19.0 11.5 19.0 12.5 18.2 12.9 L 11.3 16.8 C 10.5 17.3 9.5 16.7 9.5 15.8 Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
