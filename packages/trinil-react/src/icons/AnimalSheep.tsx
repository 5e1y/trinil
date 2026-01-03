import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AnimalSheep: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 10.5c0 1.227-.59 2.316-1.5 3a3.75 3.75 0 0 1-3 3.675m4.5-6.675c0-1.227-.59-2.316-1.5-3a3.75 3.75 0 0 0-6-3A3.73 3.73 0 0 0 12 3.75c-.844 0-1.623.279-2.25.75a3.75 3.75 0 0 0-6 3 3.74 3.74 0 0 0-1.5 3c0 1.227.59 2.316 1.5 3a3.75 3.75 0 0 0 3 3.675m15-6.675v6.75m-15-.075a3.77 3.77 0 0 0 3-.675m-3 .675v3.075m3-3.75c.627.471 1.406.75 2.25.75s1.623-.279 2.25-.75m-4.5 0v3.75m4.5-3.75a3.73 3.73 0 0 0 3 .675m-3-.675v3.75m3-3.075v3.075M7.5 9v3a1.5 1.5 0 0 0 3 0V9m-3 0h3m-3 0L6 9.75M10.5 9l1.5.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AnimalSheep.displayName = 'AnimalSheep';
