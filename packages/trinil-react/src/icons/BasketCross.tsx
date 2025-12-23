import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BasketCross: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7 9H4a1 1 0 0 0-1 1v.115A13 13 0 0 0 3.594 14M7 9h5M7 9v.779A20 20 0 0 0 7.45 14M7 9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 17 9m0 0h3a1 1 0 0 1 1 1v.115a13 13 0 0 1-.496 3.556M17 9h-5m5 0v.779a20 20 0 0 1-.29 3.389M12 9v5m-2.5 5.5-.389-.777A20 20 0 0 1 7.451 14M9.5 19.5H12m-2.5 0H7.272a.66.66 0 0 1-.464-.192A13 13 0 0 1 3.594 14m3.857 0H12m-4.55 0H3.595M12 14v5.5m0-5.5h3m-3 5.5h1.229m7.275-5.829A5 5 0 0 0 18 13q-.67.002-1.29.168m3.794.503A5 5 0 1 1 13.23 19.5m3.482-6.332A5 5 0 0 0 15 14m0 0a5 5 0 0 0-2 4c0 .523.08 1.026.229 1.5M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BasketCross.displayName = 'BasketCross';
