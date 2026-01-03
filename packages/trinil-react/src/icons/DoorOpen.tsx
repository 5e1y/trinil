import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DoorOpen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M15.75 18.75h1.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5h-12m10.5 16.5v1.416a1.5 1.5 0 0 1-1.974 1.424l-7.5-2.498a1.5 1.5 0 0 1-1.026-1.423V2.25m10.5 16.5V6.828a1.5 1.5 0 0 0-1.026-1.423L5.25 2.25m7.5 11.25-2.25-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DoorOpen.displayName = 'DoorOpen';
