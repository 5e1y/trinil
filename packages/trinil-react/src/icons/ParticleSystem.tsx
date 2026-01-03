import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ParticleSystem: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 18V9m0 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-9a3 3 0 1 1 3-3M6 9a3 3 0 0 0 2.121-.879M9 6h9M9 6a3 3 0 0 1-.879 2.121M18 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-2.121 9.879a3 3 0 1 0 4.242 4.243 3 3 0 0 0-4.242-4.243m0 0L8.12 8.12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ParticleSystem.displayName = 'ParticleSystem';
