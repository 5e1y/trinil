import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cart: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M18.5 17.5H8.347a1 1 0 0 1-.986-.836L7 14.5m11.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.667 6.5h13.986a1 1 0 0 1 .986 1.164l-1 6a1 1 0 0 1-.986.836H7m-1.333-8-.194-1.164a1 1 0 0 0-.987-.836H2.5m3.167 2L7 14.5M6.5 19a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cart.displayName = 'Cart';
