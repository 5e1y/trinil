import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CartMinus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5.667 6.5h13.986a1 1 0 0 1 .986 1.164l-.938 5.633M5.667 6.5l-.194-1.164a1 1 0 0 0-.987-.836H2.5m3.167 2L7 14.5m0 0 .36 2.164a1 1 0 0 0 .987.836h4.678M7 14.5h7.43m5.27-1.203A5 5 0 0 0 18 13a4.99 4.99 0 0 0-3.57 1.5m5.27-1.203A5.002 5.002 0 0 1 18 23a5 5 0 0 1-4.975-5.5m1.404-3a4.98 4.98 0 0 0-1.404 3m2.475.5h5m-14 1a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CartMinus.displayName = 'CartMinus';
