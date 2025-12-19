import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ShoppingBag: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 8H5.926a1 1 0 0 0-.997.923l-.846 11A1 1 0 0 0 5.08 21h13.84a1 1 0 0 0 .997-1.077l-.846-11A1 1 0 0 0 18.074 8H16M8 8V7a4 4 0 0 1 8 0v1M8 8h8m-8 2.5v.5a4 4 0 0 0 8 0v-.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ShoppingBag.displayName = 'ShoppingBag';
