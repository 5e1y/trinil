import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Screwdriver: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.875 11.625 9.75 12.75a14.23 14.23 0 0 0 9 9l3-3a14.23 14.23 0 0 0-9-9l-1.125 1.125m-.75.75.75-.75m-.75.75L6.75 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v2.25l4.125 4.125"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Screwdriver.displayName = 'Screwdriver';
