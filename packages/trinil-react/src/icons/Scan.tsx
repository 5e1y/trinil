import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scan: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20.5 7V4.5a1 1 0 0 0-1-1H17m-10 0H4.5a1 1 0 0 0-1 1V7m17 10v2.5a1 1 0 0 1-1 1H17m-10 0H4.5a1 1 0 0 1-1-1V17M2 12h20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Scan.displayName = 'Scan';
