import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Entrance: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 17.25h-3v3h6v-3zm0 0v-4.5m0-3v-4.5m0 4.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-3 3v3m0 0h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5m-7.5 1.5v1.5m-4.5-9h6a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Entrance.displayName = 'Entrance';
