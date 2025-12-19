import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Devices: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 14H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V8m-6 6v4.5M9 14h2m-2 4.5H5m4 0h3m6-8h-.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m.5-8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5m.5-8V9a1 1 0 0 0-1-1h-2m-3 10.5a1 1 0 0 1-1-1V14m1 4.5h5.5M15 8h-3a1 1 0 0 0-1 1v5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Devices.displayName = 'Devices';
