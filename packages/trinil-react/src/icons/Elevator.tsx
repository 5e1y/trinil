import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Elevator: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M15.75 6v12m0-12L13.5 8.25M15.75 6 18 8.25M15.75 18 18 15.75M15.75 18l-2.25-2.25m-5.25-3a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 0A2.25 2.25 0 0 0 6 15v.75m2.25-3A2.25 2.25 0 0 1 10.5 15v.75M21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Elevator.displayName = 'Elevator';
