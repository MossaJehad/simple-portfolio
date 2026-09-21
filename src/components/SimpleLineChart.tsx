import React, { useState, useRef, useCallback } from 'react';

interface DataSkillPoint {
  name: string;
  x: number;
  y: number;
  label: string;
}

export const SimpleLineChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 5 Data Skills along the progression curve with realistic ups and downs
  // ViewBox: 0 0 295 120
  const skills: DataSkillPoint[] = [
    { name: 'Excel', x: 26, y: 58, label: 'Excel' },
    { name: 'SQL', x: 86, y: 36, label: 'SQL' },
    { name: 'Python', x: 146, y: 28, label: 'Python' },
    { name: 'PowerBI', x: 206, y: 38, label: 'PowerBI' },
    { name: 'Data Analysis', x: 260, y: 20, label: 'Data Analysis' },
  ];

  // Default idle position over the final peak milestone (Data Analysis)
  const [glassPos, setGlassPos] = useState({ x: 260, y: 20 });
  const [activeSkill, setActiveSkill] = useState<string>('Data Analysis');

  // Dynamic cubic bezier spline with authentic peaks and valleys (ups & downs)
  const linePath =
    'M 12,70 C 14.3,68.0 18.7,57.0 26,58 C 33.3,59.0 46.0,79.7 56,76 C 66.0,72.3 75.7,38.3 86,36 C 96.3,33.7 108.0,63.3 118,62 C 128.0,60.7 136.0,29.3 146,28 C 156.0,26.7 168.0,52.3 178,54 C 188.0,55.7 196.7,39.3 206,38 C 215.3,36.7 225.0,49.0 234,46 C 243.0,43.0 251.0,23.7 260,20 C 269.0,16.3 283.3,23.3 288,24';
  const areaPath = `${linePath} L 288,94 L 12,94 Z`;

  const updateCoordinates = useCallback(
    (clientX: number, clientY: number) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();

      // Normalize client coordinates to SVG viewBox (295 x 120)
      const rawX = ((clientX - rect.left) / rect.width) * 295;
      const rawY = ((clientY - rect.top) / rect.height) * 120;

      // Keep magnifying glass strictly clamped within the SVG / card boundaries
      const minX = 20;
      const maxX = 295 - 26;
      const minY = 16;
      const maxY = 120 - 26;

      const clampedX = Math.max(minX, Math.min(maxX, rawX));
      const clampedY = Math.max(minY, Math.min(maxY, rawY));

      setGlassPos({ x: clampedX, y: clampedY });

      // Identify closest skill point based on X position
      const closest = skills.reduce((prev, curr) =>
        Math.abs(curr.x - clampedX) < Math.abs(prev.x - clampedX) ? curr : prev
      );
      setActiveSkill(closest.name);
    },
    [skills]
  );

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsHovered(true);
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleMouseEnter = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsHovered(true);
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to the chart's peak (Data Analysis)
    setGlassPos({ x: 260, y: 20 });
    setActiveSkill('Data Analysis');
  };

  const handleTouchStart = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches[0]) {
      setIsHovered(true);
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches[0]) {
      setIsHovered(true);
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  // Lens radius and handle vector calculations
  const lensRadius = 17;
  const innerRadius = 14.5;
  // 45 degree angle for seamless handle connection
  const handleStartX = glassPos.x + 12.0;
  const handleStartY = glassPos.y + 12.0;
  const handleEndX = glassPos.x + 23.5;
  const handleEndY = glassPos.y + 23.5;

  // Clamped tooltip badge horizontal position to prevent boundary clipping
  const badgeHalfW = activeSkill.length > 8 ? 35 : 26;
  const badgeX = Math.max(badgeHalfW + 3, Math.min(295 - badgeHalfW - 3, glassPos.x));
  const badgeY = Math.max(10, glassPos.y - 23);

  return (
    <div className="relative w-full sm:w-[240px] md:w-[260px] lg:w-[290px] h-[110px] sm:h-[115px] flex items-center justify-center sm:justify-end shrink-0 select-none overflow-visible">
      <svg
        ref={svgRef}
        viewBox="0 0 295 120"
        className="w-full h-full cursor-crosshair overflow-visible rounded-[14px]"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Data Analytics Line Chart with PowerBI, Excel, SQL, Python, and Data Analysis milestones"
      >
        <defs>
          {/* Opacity Mask: exactly 70% on left to 100% on right */}
          <linearGradient id="chartOpacityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1.00" />
          </linearGradient>

          <mask id="graphOpacityMask">
            <rect x="0" y="0" width="295" height="120" fill="url(#chartOpacityGrad)" />
          </mask>

          {/* Simple Gray Gradient for the Line */}
          <linearGradient id="grayLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="60%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Area Fill Gradient */}
          <linearGradient id="grayAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.0" />
          </linearGradient>

          {/* Circular Clip for Magnifying Glass Lens View */}
          <clipPath id="lensGlassClip">
            <circle cx={glassPos.x} cy={glassPos.y} r={lensRadius} />
          </clipPath>

          {/* Lens Drop Shadow Filter */}
          <filter id="glassShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* 1. Base Graph Layer (Masked 70% to 100% Opacity) */}
        <g mask="url(#graphOpacityMask)">
          {/* Subtle Horizontal Metric Gridlines */}
          <line x1="12" y1="28" x2="288" y2="28" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.25" />
          <line x1="12" y1="56" x2="288" y2="56" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.25" />
          <line x1="12" y1="84" x2="288" y2="84" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.25" />

          {/* Shaded Area Under Curve */}
          <path d={areaPath} fill="url(#grayAreaGrad)" />

          {/* Main Chart Curve Line */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#grayLineGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Milestone Node Dots */}
          {skills.map((skill) => {
            const isActive = activeSkill === skill.name;
            return (
              <g key={skill.name}>
                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r={isActive ? 3.8 : 2.5}
                  fill={isActive ? '#FFFFFF' : '#D1D5DB'}
                  opacity={isActive ? 1 : 0.8}
                  className="transition-all duration-150"
                />
                {isActive && (
                  <circle
                    cx={skill.x}
                    cy={skill.y}
                    r={6}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                    opacity={0.5}
                  />
                )}
              </g>
            );
          })}

          {/* X-Axis Data Skill Labels along the bottom */}
          {skills.map((skill) => {
            const isActive = activeSkill === skill.name;
            return (
              <text
                key={skill.name}
                x={skill.x}
                y="110"
                textAnchor="middle"
                fontSize="7.5"
                fontFamily="monospace"
                fontWeight={isActive ? '700' : '500'}
                fill={isActive ? '#FFFFFF' : '#9CA3AF'}
                className="transition-colors duration-150 pointer-events-none"
              >
                {skill.label}
              </text>
            );
          })}
        </g>

        {/* 2. Magnified Lens View: Zoomed 1.35x Directly Underneath Lens */}
        <g clipPath="url(#lensGlassClip)">
          {/* Highly transparent lens background tint */}
          <circle
            cx={glassPos.x}
            cy={glassPos.y}
            r={lensRadius}
            fill="rgba(255, 255, 255, 0.06)"
          />

          {/* Magnified Chart Curve centered at current lens position */}
          <g transform={`translate(${glassPos.x}, ${glassPos.y}) scale(1.35) translate(${-glassPos.x}, ${-glassPos.y})`}>
            <path
              d={linePath}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </g>
        </g>

        {/* 3. Magnifying Glass Assembly (Simple Gray, Seamless Handle & Concentric White Round Rim) */}
        <g filter="url(#glassShadow)" className={isHovered ? 'transition-none' : 'transition-all duration-300 ease-out'}>
          {/* Outer Lens Rim: Simple Clean Gray */}
          <circle
            cx={glassPos.x}
            cy={glassPos.y}
            r={lensRadius}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2.2"
          />

          {/* Inner Highlight: Perfectly Rounded Matching Lens Shape, moves 1:1 with Glass */}
          <circle
            cx={glassPos.x}
            cy={glassPos.y}
            r={innerRadius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="1"
          />

          {/* Center Reticle & Focal Point */}
          <line
            x1={glassPos.x - 3}
            y1={glassPos.y}
            x2={glassPos.x + 3}
            y2={glassPos.y}
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="0.9"
          />
          <line
            x1={glassPos.x}
            y1={glassPos.y - 3}
            x2={glassPos.x}
            y2={glassPos.y + 3}
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="0.9"
          />
          <circle cx={glassPos.x} cy={glassPos.y} r="1.3" fill="#FFFFFF" opacity="0.95" />

          {/* Seamless Handle in Simple Gray connected at 45 degrees */}
          <line
            x1={handleStartX}
            y1={handleStartY}
            x2={handleEndX}
            y2={handleEndY}
            stroke="#9CA3AF"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <line
            x1={handleStartX + 1.8}
            y1={handleStartY + 1.8}
            x2={handleEndX - 1}
            y2={handleEndY - 1}
            stroke="#E5E7EB"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        {/* 4. Active Skill Callout Tooltip Badge */}
        <g
          transform={`translate(${badgeX}, ${badgeY})`}
          className={isHovered ? 'transition-none' : 'transition-all duration-300 ease-out'}
        >
          {/* Badge pill background in dark gray */}
          <rect
            x={activeSkill.length > 8 ? -35 : -26}
            y="-8"
            width={activeSkill.length > 8 ? 70 : 52}
            height="15"
            rx="4"
            fill="#18181B"
            stroke="#52525B"
            strokeWidth="0.8"
            opacity="0.95"
          />
          <text
            x="0"
            y="2.5"
            textAnchor="middle"
            fill="#F4F4F5"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="600"
          >
            {activeSkill}
          </text>
        </g>
      </svg>
    </div>
  );
};
