import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Basket: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.25 8.25h3.364c.627 0 1.136.509 1.136 1.136 0 1.67-.272 3.31-.79 4.864m-3.71-6H12m5.25 0v.703c0 1.792-.211 3.57-.625 5.297m.625-6a4.5 4.5 0 0 0-4.5-4.5h-1.5a4.5 4.5 0 0 0-4.5 4.5m0 0H3.386c-.627 0-1.136.509-1.136 1.136 0 1.67.272 3.31.79 4.864m3.71-6H12m-5.25 0v.88c0 1.726.18 3.442.533 5.12m4.717-6v6m2.25 6h2.379c.397 0 .782-.156 1.051-.448a15.4 15.4 0 0 0 3.28-5.552m-6.71 6H12m2.25 0a22.8 22.8 0 0 0 2.375-6m-4.625 6H9.375m2.625 0v-6m-2.625 6H7.371c-.398 0-.782-.156-1.051-.448a15.4 15.4 0 0 1-3.28-5.552m6.335 6a24.9 24.9 0 0 1-2.092-6m-4.243 0h4.243m0 0H12m0 0h4.625m0 0h4.335"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Basket.displayName = 'Basket';
