import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Outside: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m19.5 21-.844-2.25m0 0h-5.062m5.062 0H21m-2.344 0-1.125-3m-3.937 3L12.75 21m.844-2.25H11.25m2.344 0 1.125-3M6 21v-2.25m0 0a3.008 3.008 0 0 1-2.937-3.66l2.024-9.108a.935.935 0 0 1 1.826 0l2.023 9.107A3.008 3.008 0 0 1 6 18.75m12-8.25V12m-5.25-6.75h-1.5m3 3.75-.95.95m1.419 5.8h2.812m-2.812 0H13.5m4.031 0h1.219m-3-10.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Outside.displayName = 'Outside';
