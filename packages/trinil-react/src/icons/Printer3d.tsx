import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Printer3d: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4 8.5h3m-3 0V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5m-16 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3.5m-13 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0v1a1 1 0 0 0 1 1h1m2-2v1a1 1 0 0 1-1 1H9m2-2h9m-11 2v1M6.5 17H8m0 0v1m0-1h8m0 0h1.5M16 17v1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Printer3d.displayName = 'Printer3d';
