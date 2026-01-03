import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BatteryZero: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M5.25 9v6m16.5-4.5v3a1.5 1.5 0 0 1-1.5 1.5 3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 1.5 1.5 0 0 1 1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BatteryZero.displayName = 'BatteryZero';
