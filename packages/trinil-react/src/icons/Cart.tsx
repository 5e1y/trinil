import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cart: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 3.75h2.48a1.5 1.5 0 0 1 1.479 1.253L6.5 6.75m1.75 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 0h10.5m-10.5 0-.5-3m11 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-11-3h11.27a1.5 1.5 0 0 0 1.471-1.206l.9-4.5a1.5 1.5 0 0 0-1.47-1.794H6.5m1.25 7.5L6.5 6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cart.displayName = 'Cart';
