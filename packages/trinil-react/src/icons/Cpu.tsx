import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cpu: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M19 7.5V6a1 1 0 0 0-1-1h-1.5M19 7.5h2m-2 0v3m0 0h2m-2 0v3m0 0v3m0-3h2m-2 3V18a1 1 0 0 1-1 1h-1.5m2.5-2.5h2M7.5 5H6a1 1 0 0 0-1 1v1.5M7.5 5h3m-3 0V3m3 2h3m-3 0V3m3 2h3m-3 0V3m3 2V3m0 16h-3m3 0v2m-3-2h-3m3 0v2m-3-2h-3m3 0v2m-3-2H6a1 1 0 0 1-1-1v-1.5M7.5 19v2M5 16.5v-3m0 3H3m2-3v-3m0 3H3m2-3v-3m0 3H3m2-3H3M8 9v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cpu.displayName = 'Cpu';
