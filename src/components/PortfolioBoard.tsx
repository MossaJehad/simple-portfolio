import React from 'react';
import { VerticalNavigation } from './VerticalNavigation';
import { AboutCard } from './AboutCard';
import { PortfolioHeader } from './PortfolioHeader';
import { FeatureCard } from './FeatureCard';
import { StatsColumn } from './StatsColumn';
import { ClientsCard } from './ClientsCard';
import { OrbCard } from './OrbCard';
import { AwardsCard } from './AwardsCard';

export const PortfolioBoard: React.FC = () => {
  return (
    <main 
      className="relative w-full max-w-[1140px] bg-white rounded-[28px] p-[18px] sm:p-[22px] shadow-[0_40px_100px_rgba(0,0,0,0.17),0_8px_24px_rgba(0,0,0,0.07)] animate-board-enter overflow-hidden"
    >
      {/* Container: Vertical Nav + About Card + Right Portfolio Section */}
      <div className="flex flex-col md:flex-row items-stretch gap-[14px] lg:gap-[16px]">
        {/* Leftmost Narrow Vertical Navigation */}
        <VerticalNavigation />

        {/* Purple Profile "About Me" Card */}
        <AboutCard />

        {/* Right Portfolio Content Area */}
        <section 
          aria-label="Portfolio Showcase"
          className="flex-1 flex flex-col justify-between gap-[14px] min-w-0"
        >
          {/* Top Dominant Title */}
          <PortfolioHeader />

          {/* Middle Row: Featured Project Card + Project/Award Stats */}
          <div className="flex flex-col sm:flex-row gap-[14px] items-stretch">
            <FeatureCard />
            <StatsColumn />
          </div>

          {/* Bottom Bento Row: Clients, Orb, and Awards */}
          <div className="flex flex-col sm:flex-row gap-[12px] items-stretch">
            <ClientsCard />
            <OrbCard />
            <AwardsCard />
          </div>
        </section>
      </div>
    </main>
  );
};
