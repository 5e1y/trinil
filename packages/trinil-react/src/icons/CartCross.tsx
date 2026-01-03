import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CartCross: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 3.75h2.48a1.5 1.5 0 0 1 1.479 1.253L6.5 6.75m1.75 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 0-.5-3m.5 3h3.041m-3.541-3L6.5 6.75m1.25 7.5h4.637M6.5 6.75h13.42a1.5 1.5 0 0 1 1.471 1.794l-.656 3.283M15.75 22.5l3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CartCross.displayName = 'CartCross';
