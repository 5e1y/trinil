import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lamp1: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 19v1.5m0-18v5m0 0s-3 0-5 2c-1.4 1.4-1.33 3.292-1.162 4.3.071.424.452.7.883.7h10.558c.43 0 .812-.276.883-.7.168-1.008.239-2.9-1.162-4.3-2-2-5-2-5-2Zm-2 7c0 2 1 2.5 2 2.5s2-.5 2-2.5m1.5 3 1 1m-8-1-1 1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Lamp1.displayName = 'Lamp1';
