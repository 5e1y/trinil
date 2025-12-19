import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Leave: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m19.5 20-3-3m0 0-2-2m2 2c4.735-3.642 2.641-11.195-3.293-11.88L3.5 4m13 13c-3.642 4.735-11.195 2.641-11.88-3.293L3.5 4m0 0 7 7m4 4H9m5.5 0V9.5m0 5.5-4-4m0 0V7.5m0 3.5H7"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Leave.displayName = 'Leave';
