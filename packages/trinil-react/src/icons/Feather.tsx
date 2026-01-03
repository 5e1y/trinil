import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Feather: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.75 4.666c.727.978 2.575 1.886 4.252 1.497m0 0A3.3 3.3 0 0 0 9.75 5.114c2-2.24-.696-4.128-2-1.792-.452.81-.291 1.895.252 2.841m0 0C8.661 7.31 9.88 8.25 11.25 8.25m-7.5 10.5c.95 0 2.21-.135 3.628-.473m0 0c4.177-.996 9.737-3.756 12.872-10.027M7.378 18.277C8.168 19.435 9 21.75 12 21.75v-1.5l2.25.75c2.5-1.5 7.2-6.75 6-12.75M7.378 18.277c-.46-1.342-.653-4.392 2.372-5.527 6-2.25 6.75-3.75 10.5-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Feather.displayName = 'Feather';
