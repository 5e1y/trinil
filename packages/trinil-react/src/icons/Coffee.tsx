import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coffee: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m16.883 9 .161-1.318A1.5 1.5 0 0 0 15.555 6H3.95a1.5 1.5 0 0 0-1.488 1.686l1.125 9A1.5 1.5 0 0 0 5.074 18h9.353a1.5 1.5 0 0 0 1.488-1.313L16.128 15m.755-6h1.867a3 3 0 1 1 0 6h-2.622m.755-6-.755 6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Coffee.displayName = 'Coffee';
