import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Route: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M7.5 18.75h10.125a3.375 3.375 0 1 0 0-6.75h-10.5a3.375 3.375 0 1 1 0-6.75h8.625M7.5 18.75a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m8.25-13.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Route.displayName = 'Route';
