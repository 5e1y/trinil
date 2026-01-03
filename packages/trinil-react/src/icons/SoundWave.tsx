import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SoundWave: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 8.25s0 10.5 2.25 10.5c3 0 .75-15 4.5-15s2.25 16.5 6 16.5 1.5-15 4.5-15c2.25 0 2.25 10.5 2.25 10.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SoundWave.displayName = 'SoundWave';
