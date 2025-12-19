import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Furniture: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 7.5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m2-9h8m-8 0v9m8-9h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2m-2-9V12m2 4.5H6m12 0V18M6 16.5V18m10-6v4.5m0-4.5H8m-2.5 1v-2m13 2v-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Furniture.displayName = 'Furniture';
