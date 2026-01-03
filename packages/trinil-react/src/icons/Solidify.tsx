import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Solidify: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 10.5 15 6.75 8.113 10.5m13.637 0L15 14.25m6.75-3.75V18L15 21.75m0-7.5L8.113 10.5M15 14.25v7.5M8.113 10.5V18L15 21.75M4.5 2.25 2.638 5.278a2.186 2.186 0 1 0 3.724 0z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Solidify.displayName = 'Solidify';
