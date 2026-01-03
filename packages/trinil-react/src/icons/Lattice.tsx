import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lattice: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m6.513 7.244 3.474-1.738M6.513 7.244c.152.302.237.644.237 1.006s-.085.704-.237 1.006m0-2.012A2.25 2.25 0 1 0 4.5 10.5m5.487-4.994a2.25 2.25 0 1 1 4.026 0m-4.026 0a2.25 2.25 0 0 0 4.026 0m0 0 3.474 1.738m0 0a2.24 2.24 0 0 0-.237 1.006c0 .362.085.704.237 1.006m0-2.012A2.25 2.25 0 1 1 19.5 10.5m0 0v3m0-3a2.25 2.25 0 0 1-2.013-1.244M19.5 13.5a2.25 2.25 0 1 1-2.013 3.256M19.5 13.5a2.25 2.25 0 0 0-2.013 3.256m0 0-3.474 1.738m0 0a2.25 2.25 0 1 1-4.026 0m4.026 0A2.25 2.25 0 0 0 12 17.25m-2.013 1.244-3.474-1.738m3.474 1.738A2.25 2.25 0 0 1 12 17.25m-5.487-.494A2.25 2.25 0 1 1 4.5 13.5m2.013 3.256A2.25 2.25 0 0 0 4.5 13.5m0 0v-3m0 0a2.25 2.25 0 0 0 2.013-1.244m0 0 3.474 1.737m0 0A2.25 2.25 0 0 0 12 14.25m-2.013-3.257a2.25 2.25 0 0 1 4.026 0m0 0 3.474-1.737m-3.474 1.737A2.25 2.25 0 0 1 12 14.25m0 0v3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Lattice.displayName = 'Lattice';
