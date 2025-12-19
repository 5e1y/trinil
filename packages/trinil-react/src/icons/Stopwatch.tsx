import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stopwatch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 6V3m0 3a7.5 7.5 0 1 0 3.75 1.004M12 6c1.366 0 2.647.365 3.75 1.004M12 3h2m-2 0h-2m5.75 4.004L16.5 5.5m0 5.5-4.441 3.454a.1.1 0 0 1-.12.003L8.5 12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Stopwatch.displayName = 'Stopwatch';
