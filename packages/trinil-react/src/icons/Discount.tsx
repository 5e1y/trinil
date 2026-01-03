import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Discount: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m8.25 15.75 7.5-7.5m3.144-3.144a3.75 3.75 0 0 0-3.638-.967A3.75 3.75 0 0 0 12 2.25c-1.394 0-2.61.76-3.256 1.889a3.75 3.75 0 0 0-3.638.967 3.75 3.75 0 0 0-.967 3.638A3.75 3.75 0 0 0 2.25 12c0 1.394.76 2.61 1.889 3.256a3.75 3.75 0 0 0 .967 3.638 3.75 3.75 0 0 0 3.638.967A3.75 3.75 0 0 0 12 21.75c1.394 0 2.61-.76 3.256-1.889a3.75 3.75 0 0 0 3.638-.967 3.75 3.75 0 0 0 .967-3.638A3.75 3.75 0 0 0 21.75 12c0-1.394-.76-2.61-1.889-3.256a3.75 3.75 0 0 0-.967-3.638M13.5 15a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-3-6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Discount.displayName = 'Discount';
