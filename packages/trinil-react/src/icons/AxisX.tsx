import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AxisX: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m8 16.5 12 2m0 0-.866-1.5M20 18.5l-1.5 1.125M5 19.5l-.5.5m1.75-1.75.5-.5M8 5.125V6m0 2v1m0 5v.875M8 11v1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AxisX.displayName = 'AxisX';
