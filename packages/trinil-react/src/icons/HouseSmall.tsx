import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HouseSmall: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.25 7.5v14.25h-3v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v4.5h-3V7.5m10.5 0 2.25 2.25M17.25 7.5 15.75 6m-9 1.5L12 2.25 15.75 6m-9 1.5L4.5 9.75M15.75 6V2.25m-3.75 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
HouseSmall.displayName = 'HouseSmall';
