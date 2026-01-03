import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Defibrilator: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m13.5 9.75-3 3h3l-3 3m11.25-6.671c0 5.077-6.823 9.624-9.054 10.974-.432.262-.96.262-1.392 0-2.23-1.35-9.054-5.897-9.054-10.974 0-6.606 7.72-6.821 9.582-2.021.055.142.281.142.336 0 1.862-4.8 9.582-4.584 9.582 2.02"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Defibrilator.displayName = 'Defibrilator';
