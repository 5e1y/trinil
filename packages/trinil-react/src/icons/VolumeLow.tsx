import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VolumeLow: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.652 9.348A3.74 3.74 0 0 1 18.75 12c0 1.036-.42 1.973-1.098 2.652M5.25 9.75v4.5a3 3 0 0 0 3 3h1.5l4.5 3V3.75l-4.5 3h-1.5a3 3 0 0 0-3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
VolumeLow.displayName = 'VolumeLow';
