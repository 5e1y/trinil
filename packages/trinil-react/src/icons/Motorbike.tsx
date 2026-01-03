import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Motorbike: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 10.5h3m0 0h2.823c1.028 0 1.967-.58 2.427-1.5s1.4-1.5 2.427-1.5h.263a3.14 3.14 0 0 1 2.717 1.566l.998 1.723M5.25 10.5c1.657 0 3.157.672 4.243 1.757M15.75 4.5a6 6 0 0 1 6 6v.803a6 6 0 0 0-3-.803c-.644 0-1.264.101-1.845.29m0 0a6 6 0 0 0-4.155 5.71h-1.5a5.98 5.98 0 0 0-1.757-4.243M18.75 9v7.5m-13.5 0 4.243-4.243M15.75 16.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-13.5 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Motorbike.displayName = 'Motorbike';
