import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WifiLock: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M22.076 8.674A14.2 14.2 0 0 0 12 4.5 14.2 14.2 0 0 0 1.924 8.674m6.364 6.364a5.23 5.23 0 0 1 4.613-1.461m-7.795-1.721A9.72 9.72 0 0 1 12 9a9.7 9.7 0 0 1 6.235 2.254m-6.895 7.853a.75.75 0 0 1-.067-.543M16.5 18v-1.125a2.625 2.625 0 0 1 5.25 0V18m-5.25 0h5.25m-5.25 0a.75.75 0 0 0-.75.75V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 0-.75-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WifiLock.displayName = 'WifiLock';
