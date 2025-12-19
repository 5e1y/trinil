import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Waypoint: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m8.974 8.009-5.29 1.763a1 1 0 0 0-.684.949v7.392a1 1 0 0 0 1.316.948l4.652-1.55A.1.1 0 0 1 9 17.505M8.974 8.01 9 8.047m-.026-.038A2.77 2.77 0 0 1 8.5 6.46 3.46 3.46 0 0 1 11.96 3h.08a3.46 3.46 0 0 1 3.46 3.46c0 .67-.243 1.318-.685 1.823l-1.121 1.282m0 0 1.274.424a.1.1 0 0 0 .064 0l4.652-1.55A1 1 0 0 1 21 9.387v7.392a1 1 0 0 1-.684.949l-5.284 1.761a.1.1 0 0 1-.032.006m-1.306-9.93-1.619 1.849a.1.1 0 0 1-.15 0l-2.74-3.131A3 3 0 0 1 9 8.047m0 0v9.458m6 1.99a.1.1 0 0 1-.032-.006L9.032 17.51A.1.1 0 0 0 9 17.506m6 1.99V10m0 9.495v.005"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Waypoint.displayName = 'Waypoint';
