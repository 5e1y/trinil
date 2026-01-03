import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Building: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 8.25h7.5a1.5 1.5 0 0 1 1.5 1.5v9.75a1.5 1.5 0 0 1-1.5 1.5h-1.35a.15.15 0 0 1-.15-.15V18a1.5 1.5 0 0 0-3 0v2.85a.15.15 0 0 1-.15.15H12m0-12.75V4.5A1.5 1.5 0 0 0 10.5 3h-6A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h1.35a.15.15 0 0 0 .15-.15V18a1.5 1.5 0 0 1 3 0v2.85c0 .083.067.15.15.15H12m0-12.75V21m3-7.5V12m3 1.5V12m-9 1.5V12m-3 1.5V12m3-3.75v-1.5m-3 1.5v-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Building.displayName = 'Building';
