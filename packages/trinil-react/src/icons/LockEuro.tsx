import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LockEuro: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 10H6.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H16m-8 0V7a4 4 0 1 1 8 0v3m-8 0h8m-6.5 4.5v2m0-2h-1m1 0H12m-2.5 0a2.5 2.5 0 0 1 4.95-.5M9.5 16.5h-1m1 0H12m-2.5 0a2.5 2.5 0 0 0 4.95.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LockEuro.displayName = 'LockEuro';
