import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bicycle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m18.75 16.5-1.5-6.75m-5.25 6L9 10.5m3 5.25-6.75.75 3.75-6m3 5.25 5.25-6M9 10.5l8.25-.75M9 10.5l-1.732-3m9.982 2.25-.667-3m0 0h.49c1.103 0 2.19-.257 3.177-.75m-3.667.75h-.656A7.1 7.1 0 0 1 12.75 6M7.268 7.5H9.75m-2.482 0H6m9.75 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-13.5 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bicycle.displayName = 'Bicycle';
