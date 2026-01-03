import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Album: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18 18.497v.253a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5H16.5a1.5 1.5 0 0 1 1.5 1.5v.253m0 12.994V5.503m0 12.994A7.5 7.5 0 0 0 21.75 12c0-2.776-1.508-5.2-3.75-6.497m-7.5 8.747a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 0V7.5l.659.22c1.019.34 2.13.26 3.091-.22"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Album.displayName = 'Album';
