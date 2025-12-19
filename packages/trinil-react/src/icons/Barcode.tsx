import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Barcode: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 7.5v9m2-9v9m1-9v9m2.5-9v9m2.5-9v9m1-9v9m1-9v9m2-9v9M20.5 7V4.5a1 1 0 0 0-1-1h-2m-11 0h-2a1 1 0 0 0-1 1V7m17 10.5v2a1 1 0 0 1-1 1h-2m-11 0h-2a1 1 0 0 1-1-1v-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Barcode.displayName = 'Barcode';
