import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Barcode: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 7.5v-3A1.5 1.5 0 0 1 4.5 3h3m9 0h3A1.5 1.5 0 0 1 21 4.5v3m0 9v3a1.5 1.5 0 0 1-1.5 1.5h-3m-9 0h-3A1.5 1.5 0 0 1 3 19.5v-3m3-9v9m1.5 0v-9m3 0v9m3-9v9m3-9v9m1.5 0v-9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Barcode.displayName = 'Barcode';
