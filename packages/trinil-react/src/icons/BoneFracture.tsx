import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoneFracture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.281 18.719q-.198.03-.406.031a2.625 2.625 0 1 1 1.856-4.481L7.5 13.5h6l-3.769 3.769a2.625 2.625 0 1 1-4.45 1.45m0 0a2.63 2.63 0 0 0 1.775-1.132M19.208 5.939q.2.022.4.075a2.625 2.625 0 1 1-2.952 3.848l-1.105.638-5.795-1.553 4.778-2.759a2.625 2.625 0 1 1 4.674-.249m0 0a2.63 2.63 0 0 0-2.007.634M17.25 18l.75 2.25m1.5-4.5 2.25.75M6.75 6 6 3.75m-1.5 4.5L2.25 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoneFracture.displayName = 'BoneFracture';
