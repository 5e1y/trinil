import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scale: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 6V4.5A1.5 1.5 0 0 1 4.5 3H6m4.5 0h3M18 3h1.5A1.5 1.5 0 0 1 21 4.5V6m0 12v1.5a1.5 1.5 0 0 1-1.5 1.5H18m-6 0h1.5M21 10.5v3m-18-3V12m8.25.75 6-6m0 0v4.5m0-4.5h-4.5M3 21v-6h6v6z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Scale.displayName = 'Scale';
