import React, { useState, useRef, useCallback } from 'react';

export const SimpleLineChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Default idle position over the chart peak in 260x110 viewBox
  const [glassPos, setGlassPos] = useState({ x: 220, y: 35 });
  const [metricValue, setMetricValue] = useState('99.9%');

  // Chart path data (ViewBox: 0 0 260 110)
  const linePath =
    'M 10,84 C 35,84 45,66 60,66 C 75,66 85,76 100,76 C 120,76 130,42 145,42 C 160,42 170,56 185,56 C 205,56 215,22 230,22 C 242,22 248,27 255,27';
  const areaPath = `${linePath} L 255,102 L 10,102 Z`;

  // Milestone points along the curve
  const milestones = [
    { x: 10, y: 84, val: '84.2%' },
    { x: 60, y: 66, val: '88.9%' },
    { x: 100, y: 76, val: '87.3%' },
    { x: 145, y: 42, val: '93.6%' },
    { x: 185, y: 56, val: '92.1%' },
    { x: 230, y: 22, val: '99.2%' },
    { x: 255, y: 27, val: '99.9%' },
  ];

  const updateCoordinates = useCallback((clientX: number, clientY: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();

    // Map screen cursor coordinates into SVG viewBox (260 x 110)
    const rawX = ((clientX - rect.left) / rect.width) * 260;
    const rawY = ((clientY - rect.top) / rect.height) * 110;

    // Lens radius = 17.5, handle extends ~12px to bottom-right
    // Clamping strictly within SVG bounds so it never leaves the card
    const minX = 22;
    const maxX = 260 - 28;
    const minY = 22;
    const maxY = 110 - 28;

    const clampedX = Math.max(minX, Math.min(maxX, rawX));
    const clampedY = Math.max(minY, Math.min(maxY, rawY));

    setGlassPos({ x: clampedX, y: clampedY });

    // Calculate dynamic telemetry based on X position
    const ratio = Math.max(0, Math.min(1, (clampedX - minX) / (maxX - minX)));
    const target = milestones[Math.min(milestones.length - 1, Math.floor(ratio * milestones.length))];
    setMetricValue(target.val);
  }, [milestones]);

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
    // Smoothly return to the prominent peak of the chart
    setGlassPos({ x: 220, y: 35 });
    setMetricValue('99.9%');
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

  // Lens radius and handle offsets
  const lensRadius = 17.5;
  const innerRadius = 15;
  // 45 degrees offset: cos(45) * 17.5 ≈ 12.4
  const handleStartX = glassPos.x + 12.4;
  const handleStartY = glassPos.y + 12.4;
  const handleEndX = glassPos.x + 24.5;
  const handleEndY = glassPos.y + 24.5;

  return (
    <div className="relative flex-1 w-full sm:w-[230px] lg:w-[260px] h-[100px] sm:h-[110px] flex items-center justify-end shrink-0 select-none">
      <svg
        ref={svgRef}
        viewBox="0 0 260 110"
        className="w-full h-full cursor-crosshair overflow-hidden rounded-[16px]"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Simple Line Chart with Interactive Magnifying Glass"
      >
        <defs>
          {/* Horizontal Opacity Mask: exactly 70% opacity on the left to 100% on the right */}
          <linearGradient id="chartOpacityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1.00" />
          </linearGradient>

          <mask id="graphOpacityMask">
            <rect x="0" y="0" width="260" height="110" fill="url(#chartOpacityGrad)" />
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

          {/* Subtle Lens Drop Shadow Filter */}
          <filter id="glassShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* 1. Base Graph Layer with 70% to 100% left-to-right opacity mask */}
        <g mask="url(#graphOpacityMask)">
          {/* Subtle Horizontal Metric Gridlines */}
          <line x1="10" y1="30" x2="255" y2="30" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.3" />
          <line x1="10" y1="60" x2="255" y2="60" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.3" />
          <line x1="10" y1="90" x2="255" y2="90" stroke="#52525B" strokeDasharray="3 4" strokeOpacity="0.3" />

          {/* Shaded Area Under Curve */}
          <path d={areaPath} fill="url(#grayAreaGrad)" />

          {/* Main Chart Curve Line */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#grayLineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Milestone Data Points */}
          {milestones.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={i === milestones.length - 1 ? 3.5 : 2.2}
              fill={i === milestones.length - 1 ? '#FFFFFF' : '#D1D5DB'}
              opacity={0.85}
            />
          ))}
        </g>

        {/* 2. Magnified Lens View: Zoomed 1.35x Directly Underneath Lens */}
        <g clipPath="url(#lensGlassClip)">
          {/* Highly transparent lens background tint */}
          <circle
            cx={glassPos.x}
            cy={glassPos.y}
            r={lensRadius}
            fill="rgba(255, 255, 255, 0.05)"
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
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="1"
          />

          {/* Subtle Lens Center Reticle & Focal Point */}
          <line
            x1={glassPos.x - 3}
            y1={glassPos.y}
            x2={glassPos.x + 3}
            y2={glassPos.y}
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="0.9"
          />
          <line
            x1={glassPos.x}
            y1={glassPos.y - 3}
            x2={glassPos.x}
            y2={glassPos.y + 3}
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="0.9"
          />
          <circle cx={glassPos.x} cy={glassPos.y} r="1.3" fill="#FFFFFF" opacity="0.9" />

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
            x1={handleStartX + 2}
            y1={handleStartY + 2}
            x2={handleEndX - 1}
            y2={handleEndY - 1}
            stroke="#E5E7EB"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        {/* 4. Minimalist Simple Gray Telemetry Callout Badge */}
        <g
          transform={`translate(${glassPos.x}, ${Math.max(12, glassPos.y - 24)})`}
          className={isHovered ? 'transition-none' : 'transition-all duration-300 ease-out'}
        >
          {/* Badge pill background in dark gray */}
          <rect
            x="-24"
            y="-8"
            width="48"
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
            fill="#E4E4E7"
            fontSize="8.5"
            fontFamily="monospace"
            fontWeight="600"
          >
            {metricValue}
          </text>
        </g>
      </svg>
    </div>
  );
};
