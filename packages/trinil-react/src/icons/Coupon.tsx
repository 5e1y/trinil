import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coupon: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.75 20.25h-6a1.5 1.5 0 0 1-1.5-1.5v-1.5c0-.472.232-.908.57-1.238 2.24-2.19 2.24-5.834 0-8.024-.338-.33-.57-.766-.57-1.238v-1.5a1.5 1.5 0 0 1 1.5-1.5h6m0 16.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.472-.232-.908-.57-1.238-2.24-2.19-2.24-5.834 0-8.024.338-.33.57-.766.57-1.238v-1.5a1.5 1.5 0 0 0-1.5-1.5H9.75m0 16.5v-1.5m0-15v1.5m0 3.75v.75m0 4.5V15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Coupon.displayName = 'Coupon';
