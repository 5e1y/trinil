import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H1: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m17.25 14.25 2.25-1.5v7.5m0 0h2.25m-2.25 0h-2.25m-15 0V12m0 0V3.75m0 8.25h10.5m0 8.25V12m0 0V3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
H1.displayName = 'H1';
