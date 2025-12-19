import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Textile: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.5 18c0-1-1-2-3-2s-3 1-3 2m6 0c0 1-1 2-3 2m3-2V8m-3 12c-2 0-3-1-3-2m3 2h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-10m-6 10V6c0-1 1-2 3-2s3 1 3 2v2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Textile.displayName = 'Textile';
