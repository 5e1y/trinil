import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cpu: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 19.5H18a1.5 1.5 0 0 0 1.5-1.5v-1.5m-3 3h-3m3 0V21m-3-1.5h-3m3 0V21m-3-1.5h-3m3 0V21m-3-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5m3 3V21m-3-4.5v-3m0 3H3m1.5-3v-3m0 3H3m1.5-3v-3m0 3H3m1.5-3V6A1.5 1.5 0 0 1 6 4.5h1.5m-3 3H3m4.5-3V3m0 1.5h3m0 0V3m0 1.5h3m0 0V3m0 1.5h3m0 0H18A1.5 1.5 0 0 1 19.5 6v1.5m-3-3V3m3 4.5v3m0-3H21m-1.5 3v3m0-3H21m-1.5 3v3m0-3H21m-1.5 3H21M8.25 9.75v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cpu.displayName = 'Cpu';
