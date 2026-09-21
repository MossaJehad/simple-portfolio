import React from 'react';
import { AboutCard } from '../components/AboutCard';
import { PortfolioHeader } from '../components/PortfolioHeader';
import { FeatureCard } from '../components/FeatureCard';
import { StatsColumn } from '../components/StatsColumn';
import { ClientsCard } from '../components/ClientsCard';
import { OrbAwardsPill } from '../components/OrbAwardsPill';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      {/* About Me Purple Card with Custom S-Curve Ramp */}
      <AboutCard />

      {/* Right Portfolio Content Grid */}
      <section
        aria-label="Portfolio Showcase"
        className="flex-1 flex flex-col gap-[14px] min-w-0"
      >
        {/* Dominant "Portfolio" Heading */}
        <PortfolioHeader />

        {/* Middle Row: Featured Project Card + Single Vertical Stats Pill */}
        <div className="flex-1 flex flex-col sm:flex-row gap-[14px] items-stretch">
          <FeatureCard />
          <StatsColumn />
        </div>

        {/* Bottom Bento Row: Clients Card + Single Horizontal Orb / Awards Pill */}
        <div className="flex-1 flex flex-col sm:flex-row gap-[14px] items-stretch">
          <ClientsCard />
          <OrbAwardsPill />
        </div>
      </section>
    </>
  );
};
