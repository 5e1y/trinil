import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gpu: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 16v4m0-4V6m0 10h2M3 4v2m0 0h17a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5M5 16v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1M5 16h10m-4.5-5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Gpu.displayName = 'Gpu';
