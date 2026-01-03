import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Train: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 20.25h3m0 0h6m-6 0A2.25 2.25 0 0 1 3 18v-.75m2.25 3A2.25 2.25 0 0 0 7.5 18v-.75m3.75 3h10.5m-10.5 0A2.25 2.25 0 0 0 13.5 18v-.75m-2.25 3A2.25 2.25 0 0 1 9 18v-.75m4.5 0h5.397c1.576 0 2.853-.75 2.853-2.25 0-.552 0-1.5-1.426-2.324L14.889 9.54a15.7 15.7 0 0 0-7.841-2.101H6m7.5 9.812H9m0 0H7.5m0 0H3m0 0h-.75M6 7.438H2.25m3.75 0V3.75m0 0H4.987a3 3 0 0 0-.949.154L2.25 4.5M6 3.75h1.013a3 3 0 0 1 .949.154L9.75 4.5m-7.5 6h5.437a10.5 10.5 0 0 1 5.25 1.407l2.813 1.624H2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Train.displayName = 'Train';
