import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Epipen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 18 9 19.5a3.18 3.18 0 0 1-4.5 0m6-1.5L6 13.5m4.5 4.5a1.06 1.06 0 0 0 1.5 0l1.5-1.5m-7.5-3L4.5 15a3.18 3.18 0 0 0 0 4.5m1.5-6-.75-.75L15.44 2.56a1.5 1.5 0 0 1 2.12 0l3.88 3.88a1.5 1.5 0 0 1 0 2.12L18 12M4.5 19.5l-2.25 2.25M13.5 16.5l-2.25-2.25m2.25 2.25 2.25-2.25m0 0L13.5 12m2.25 2.25L18 12m0 0-2.25-2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Epipen.displayName = 'Epipen';
