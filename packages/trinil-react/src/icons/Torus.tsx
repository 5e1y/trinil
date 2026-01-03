import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Torus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.244 12c-.618 1.31-2.285 2.25-4.244 2.25-1.96 0-3.626-.94-4.244-2.25m8.488 0c.166-.352.256-.73.256-1.125M16.244 12c-.618-1.31-2.285-2.25-4.244-2.25-1.96 0-3.626.94-4.244 2.25M7.5 10.875c0 .395.09.773.256 1.125m13.994 0c0-4.556-4.365-8.25-9.75-8.25S2.25 7.444 2.25 12s4.365 8.25 9.75 8.25 9.75-3.694 9.75-8.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Torus.displayName = 'Torus';
