import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Exclude: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16 8V5a1 1 0 0 0-.293-.707M16 8h3c.276 0 .526.112.707.293M16 8v4m0-4h-4m-4 8H5a1 1 0 0 1-.707-.293M8 16v3c0 .276.112.526.293.707M8 16h4m-4 0v-4m8 0v3a1 1 0 0 1-1 1h-3m4-4 3.707-3.707M12 16l-3.707 3.707M12 20H9a1 1 0 0 1-.707-.293M12 20h4m-4 0 8-8m0 0V9a1 1 0 0 0-.293-.707M20 12v4m0 0v3a1 1 0 0 1-1 1h-3m4-4-4 4M12 8H9a1 1 0 0 0-1 1v3m4-4 3.707-3.707M8 12l-3.707 3.707M8 4H5a1 1 0 0 0-1 1v3m4-4L4 8m4-4h4M4 8v4m8-8-8 8m8-8h3c.276 0 .526.112.707.293M4 12v3c0 .276.112.526.293.707"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Exclude.displayName = 'Exclude';
