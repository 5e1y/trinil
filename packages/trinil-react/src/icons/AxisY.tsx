import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AxisY: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.25 16.875 11 17m2.25.375.75.125m2.25.375L17 18m2.25.375.75.125M8 3.5v13m0-13L6.5 5M8 3.5 9.5 5M5 19.5l-.5.5m1.75-1.75.5-.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AxisY.displayName = 'AxisY';
