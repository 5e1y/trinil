import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SignpostAlt: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 5h5.586a1 1 0 0 1 .707.293l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-.707.293H12m0-5H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5m0-5V3m0 14h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5m0 5H6.414a1 1 0 0 1-.707-.293l-1.5-1.5a1 1 0 0 1 0-1.414l1.5-1.5A1 1 0 0 1 6.414 12H12m0 5v4m0-9v-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SignpostAlt.displayName = 'SignpostAlt';
