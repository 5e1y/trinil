import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mortarboard: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m18.75 10.438 3-1.75L12 3 2.25 8.688l6 3.5m10.5-1.75L12 14.375l-3.75-2.187m10.5-1.75v5.977c.024 1.045-.474 1.883-1.51 2.701-3.238 2.558-7.241 2.5-10.48 0-1.031-.796-1.534-1.656-1.51-2.701V10.5m3 1.688 3.75-3.5m-3.75 3.5V16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Mortarboard.displayName = 'Mortarboard';
