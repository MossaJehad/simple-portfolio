import React from 'react';

interface CornerBracketProps {
  color?: 'white' | 'dark' | 'black';
  className?: string;
  size?: number;
}

export const CornerBracket: React.FC<CornerBracketProps> = ({
  color = 'dark',
  className = '',
  size = 11,
}) => {
  const borderColor =
    color === 'white'
      ? 'border-white/50'
      : color === 'black'
      ? 'border-black'
      : 'border-black/35';

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`absolute top-3.5 right-3.5 border-t-2 border-r-2 ${borderColor} pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
