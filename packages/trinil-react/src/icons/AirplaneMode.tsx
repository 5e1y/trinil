import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AirplaneMode: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m20.818 11.068.932.932-.932.932a4.5 4.5 0 0 1-3.182 1.318H15l-3.626 6.044A3 3 0 0 1 8.8 21.75H7.5l2.25-7.5H6l-.61.914A3 3 0 0 1 2.895 16.5H2.25L3 12.75 2.25 12l.75-.75-.75-3.75h.644a3 3 0 0 1 2.497 1.336L6 9.75h3.75L7.5 2.25h1.301a3 3 0 0 1 2.573 1.457L15 9.75h2.636a4.5 4.5 0 0 1 3.182 1.318"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AirplaneMode.displayName = 'AirplaneMode';
