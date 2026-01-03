import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StairsUp: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3.75 20.25V16.5a.75.75 0 0 1 .75-.75H9a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 .75-.75H15a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v15.75M2.25 9 7.5 3.75m0 0V7.5m0-3.75H3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
StairsUp.displayName = 'StairsUp';
