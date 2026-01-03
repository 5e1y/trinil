import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Film: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 7.5v9m0-9H6m-3.75 0V3.75H6M2.25 16.5H6m-3.75 0v3.75H6M6 7.5V3.75M6 7.5h.75M6 3.75h3.75m0 0V7.5m0-3.75h3.75M9.75 7.5h3.75m-3.75 0h-3m6.75 0V3.75m0 3.75h3.75M13.5 3.75h3.75m0 3.75V3.75m0 3.75h1.5m-1.5-3.75H21m.75 0H21m0 0V7.5m0 0h-2.25m2.25 0h.75v9H21m-14.25-9v9m0 0H6m.75 0h3m9-9v9m0 0h-1.5m1.5 0H21M6 20.25V16.5m0 3.75h3.75m0 0V16.5m0 3.75h3.75M9.75 16.5h3.75m0 3.75V16.5m0 3.75h3.75M13.5 16.5h3.75m0 3.75V16.5m0 3.75H21m0 0h.75m-.75 0V16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Film.displayName = 'Film';
